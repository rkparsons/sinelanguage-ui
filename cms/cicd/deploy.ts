import { contentfulManagementToken, contentfulSpaceId, environmentName } from '../../env-variables'

import { ContentFields } from 'contentful-management/typings/contentFields'
import { ContentType } from 'contentful-management/typings/contentType'
import { ContentTypeModel } from '../types/contentTypeModel'
import { Environment } from 'contentful-management/typings/environment'
import { Space } from 'contentful-management/typings/space'
import artist from '../schema/artist'
import { createClient } from 'contentful-management'
import isDeepEqual from 'fast-deep-equal'
import release from '../schema/release'
import siteMetadata from '../schema/siteMetadata'

const contentfulApi = createClient({
    accessToken: contentfulManagementToken,
})

export const deployCMS = () => {
    console.log(`Deploying CMS schema: ${environmentName}`)

    return contentfulApi
        .getSpace(contentfulSpaceId)
        .then((space) => deploySpace(space, 'sinelanguage.net', [siteMetadata, artist, release]))
        .catch((error) => console.log(`\nERROR: 'Could not deploy space\n`, error))
}

const deploySpace = (space: Space, name: string, contentTypeModels: ContentTypeModel[]) => {
    console.log(`Deploying CMS space: ${name}`)

    return space
        .getEnvironment('master')
        .then((environment) =>
            environment.getContentTypes().then((contentTypes) => ({ contentTypes, environment }))
        )
        .then(({ contentTypes, environment }) =>
            Promise.all(
                contentTypeModels.map((contentTypeModel) => {
                    const isNew = !contentTypes.items
                        .map((x) => x.sys.id)
                        .includes(contentTypeModel.id)

                    return deployContentType(environment, name, contentTypeModel, isNew)
                })
            )
        )
}

// todo: abstract with class
const deployContentType = (
    environment: Environment,
    spaceName: string,
    contentTypeModel: ContentTypeModel,
    isNew: boolean
) =>
    getContentType(environment, contentTypeModel, isNew)
        .then((contentType) => applyFieldOmissions(contentType, contentTypeModel))
        .then((contentType) => contentType.publish())
        .then((contentType) => applyFieldDeletions(contentType, contentTypeModel))
        .then((contentType) => applyFieldUpdates(contentType, contentTypeModel))
        .then((contentType) => applyEditorInterfaceUpdates(contentType, contentTypeModel))
        .then((contentType) => contentType.publish())
        .then((contentType) => {
            console.log(
                `SUCCESS: '${contentTypeModel.name}' content type published in '${spaceName}' space`
            )
        })
        .catch((error) =>
            console.log(
                `ERROR: '${contentTypeModel.name}' content type could not be published in '${spaceName}' space`,
                error
            )
        )

const applyEditorInterfaceUpdates = (
    contentType: ContentType,
    contentTypeModel: ContentTypeModel
) =>
    contentType.getEditorInterface().then((editorInterface) => {
        editorInterface.controls = contentTypeModel.controls
        return editorInterface.update().then(() => Promise.resolve(contentType))
    })

const getContentType = (
    environment: Environment,
    contentTypeModel: ContentTypeModel,
    isNew: boolean
) =>
    isNew
        ? createContentType(environment, contentTypeModel)
        : environment.getContentType(contentTypeModel.id)

const applyFieldUpdates = (contentType: ContentType, contentTypeModel: ContentTypeModel) => {
    if (isContentTypeEqual(contentType, contentTypeModel)) {
        return Promise.resolve(contentType)
    } else {
        contentType.name = contentTypeModel.name
        contentType.description = contentTypeModel.description
        contentType.displayField = contentTypeModel.displayField
        contentType.fields = contentTypeModel.fields

        return contentType.update()
    }
}

const createContentType = (environment: Environment, contentTypeModel: ContentTypeModel) =>
    environment.createContentTypeWithId(contentTypeModel.id, {
        name: contentTypeModel.name,
        description: contentTypeModel.description,
        displayField: contentTypeModel.displayField,
        fields: contentTypeModel.fields,
    })

const applyFieldOmissions = (contentType: ContentType, contentTypeModel: ContentTypeModel) => {
    contentType.fields.forEach(
        (field) => (field.omitted = shouldFieldBeDeleted(field, contentTypeModel))
    )

    return contentType.update()
}

const applyFieldDeletions = (contentType: ContentType, contentTypeModel: ContentTypeModel) => {
    contentType.fields = contentType.fields.filter(
        (field) => !shouldFieldBeDeleted(field, contentTypeModel)
    )

    return contentType.update()
}

const shouldFieldBeDeleted = (field: ContentFields, contentTypeModel: ContentTypeModel) => {
    const matchingModelField = contentTypeModel.fields.find(
        (modelField) => modelField.id === field.id
    )

    return !matchingModelField || matchingModelField.type != field.type
}

const isContentTypeEqual = (contentType: ContentType, contentTypeModel: ContentTypeModel) =>
    contentType.name === contentTypeModel.name &&
    contentType.description === contentTypeModel.description &&
    contentType.displayField === contentTypeModel.displayField &&
    isDeepEqual(contentType.fields, contentTypeModel.fields)
