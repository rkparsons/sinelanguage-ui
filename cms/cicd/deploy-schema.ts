import {
    contentfulEnvironment,
    contentfulManagementToken,
    contentfulSpaceId,
} from '../../env-variables'

import { ContentFields } from 'contentful-management/typings/contentFields'
import { ContentType } from 'contentful-management/typings/contentType'
import { ContentfulContentType } from '../models'
import { Environment } from 'contentful-management/typings/environment'
import { Space } from 'contentful-management/typings/space'
import { createClient } from 'contentful-management'
import isDeepEqual from 'fast-deep-equal'

const contentfulApi = createClient({
    accessToken: contentfulManagementToken,
})

// todo: fix error when adding a new field with a control - currently it has to be run twice to add field and control

export const deployCMS = (spaceName: string, contentTypeModels: ContentfulContentType[]) => {
    return contentfulApi
        .getSpace(contentfulSpaceId)
        .then((space) => deploySpace(space, spaceName, contentTypeModels))
        .catch((error) => console.log(`\nERROR: 'Could not deploy space\n`, error))
}

const deploySpace = (space: Space, name: string, contentTypeModels: ContentfulContentType[]) => {
    console.log(`Deploying CMS space: ${name}`)

    return space
        .getEnvironment(contentfulEnvironment)
        .then((environment) =>
            environment.getContentTypes().then((contentTypes) => ({ contentTypes, environment }))
        )
        .then(({ contentTypes, environment }) =>
            Promise.all(
                contentTypeModels.map((contentTypeModel) => {
                    const isNew = !contentTypes.items
                        .map((x) => x.sys.id)
                        .includes(contentTypeModel.id)

                    return deployContentType(environment, contentTypeModel, isNew)
                })
            )
        )
}

// todo: abstract this with class
const deployContentType = (
    environment: Environment,
    contentTypeModel: ContentfulContentType,
    isNew: boolean
) =>
    getContentType(environment, contentTypeModel, isNew)
        .then((contentType: ContentType) => applyFieldOmissions(contentType, contentTypeModel))
        .then((contentType: ContentType) => contentType.publish())
        .then((contentType: ContentType) => applyFieldDeletions(contentType, contentTypeModel))
        .then((contentType: ContentType) => applyFieldUpdates(contentType, contentTypeModel))
        // todo: publish new field before updating interface
        .then((contentType: ContentType) =>
            applyEditorInterfaceUpdates(contentType, contentTypeModel)
        )
        .then((contentType: ContentType) => contentType.publish())
        .then((contentType: ContentType) => {
            console.log(`SUCCESS: '${contentTypeModel.name}' content type published`)
        })
        .catch((error: Error) =>
            console.log(
                `ERROR: '${contentTypeModel.name}' content type could not be published`,
                error
            )
        )

const applyEditorInterfaceUpdates = (
    contentType: ContentType,
    contentTypeModel: ContentfulContentType
) =>
    contentType.getEditorInterface().then((editorInterface) => {
        editorInterface.controls = contentTypeModel.controls
        return editorInterface.update().then(() => Promise.resolve(contentType))
    })

const getContentType = (
    environment: Environment,
    contentTypeModel: ContentfulContentType,
    isNew: boolean
) =>
    isNew
        ? createContentType(environment, contentTypeModel)
        : environment.getContentType(contentTypeModel.id)

const applyFieldUpdates = (contentType: ContentType, contentTypeModel: ContentfulContentType) => {
    if (isContentTypeEqual(contentType, contentTypeModel)) {
        return Promise.resolve(contentType)
    } else {
        contentType.name = contentTypeModel.name
        contentType.description = contentTypeModel.description
        contentType.displayField = contentTypeModel.displayField
        contentType.fields = contentTypeModel.fields.map((field) => field.contentFields)

        return contentType.update()
    }
}

const createContentType = (environment: Environment, contentTypeModel: ContentfulContentType) =>
    environment.createContentTypeWithId(contentTypeModel.id, {
        name: contentTypeModel.name,
        description: contentTypeModel.description,
        displayField: contentTypeModel.displayField,
        fields: contentTypeModel.fields.map((field) => field.contentFields),
    })

const applyFieldOmissions = (contentType: ContentType, contentTypeModel: ContentfulContentType) => {
    contentType.fields.forEach(
        (field) => (field.omitted = shouldFieldBeDeleted(field, contentTypeModel))
    )

    return contentType.update()
}

const applyFieldDeletions = (contentType: ContentType, contentTypeModel: ContentfulContentType) => {
    contentType.fields = contentType.fields.filter(
        (field) => !shouldFieldBeDeleted(field, contentTypeModel)
    )

    return contentType.update()
}

const shouldFieldBeDeleted = (field: ContentFields, contentTypeModel: ContentfulContentType) => {
    const matchingModelField = contentTypeModel.fields.find(
        (modelField) => modelField.contentFields.id === field.id
    )

    return !matchingModelField || matchingModelField.contentFields.type != field.type
}

const isContentTypeEqual = (contentType: ContentType, contentTypeModel: ContentfulContentType) =>
    contentType.name === contentTypeModel.name &&
    contentType.description === contentTypeModel.description &&
    contentType.displayField === contentTypeModel.displayField &&
    isDeepEqual(
        contentType.fields,
        contentTypeModel.fields.map((field) => field.contentFields)
    )
