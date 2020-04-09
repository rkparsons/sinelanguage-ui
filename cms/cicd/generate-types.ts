import { WriteStream, createWriteStream, writeFile } from 'fs'

import { ContentfulContentType } from '../models'
import Field from '../models/field'
import os from 'os'

let file: WriteStream

export function generateTypes(filePath: string, contentTypeModels: ContentfulContentType[]) {
    clearFile(filePath)
    initFileWriter(filePath)
    writeImports()
    writeTypes(contentTypeModels)
    console.log(`SUCCESS: types written to file ${filePath}`)
}

function clearFile(filePath: string) {
    writeFile(filePath, '', () => {})
}

function initFileWriter(filePath: string) {
    file = createWriteStream(filePath, {
        flags: 'a',
    })
}

function writeImports() {
    writeLine(`import { FluidObject } from 'gatsby-image'`)
    writeLine(`import { Document } from '@contentful/rich-text-types/dist/types/types'`)
    writeLine()
}

function writeTypes(contentTypeModels: ContentfulContentType[]) {
    contentTypeModels.forEach((contentTypeModel, index) => {
        writeSchema(contentTypeModel)

        if (index < contentTypeModels.length - 1) {
            writeLine()
        }
    })
}

function writeSchema(schema: ContentfulContentType) {
    writeLine(`export type ${schema.name.replace(/ /g, '')} = {`)
    writeLineIndented(`__typename: string`)
    schema.fields.forEach(writeField)
    writeLine(`}`)
}

function writeField(field: Field) {
    writeLineIndented(`${field.contentFields.id}: ${field.getTyping()}`)
}

function writeLine(line: string = '') {
    file.write(`${line}${os.EOL}`)
}

function writeLineIndented(line: string = '') {
    writeLine(`\t${line}`)
}
