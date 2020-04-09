import { WriteStream, createWriteStream, writeFile } from 'fs'

import { ContentfulContentType } from '../models'
import Field from '../models/field'
import os from 'os'

let file: WriteStream

export function generateFragments(filePath: string, contentTypeModels: ContentfulContentType[]) {
    clearFile(filePath)
    initFileWriter(filePath)
    writeImports()
    writeFragments(contentTypeModels)
    console.log(`SUCCESS: fragments written to file ${filePath}`)
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
    writeLine(`import { graphql } from 'gatsby'`)
    writeLine()
}

function writeFragments(contentTypeModels: ContentfulContentType[]) {
    contentTypeModels.forEach((contentTypeModel, index) => {
        writeFragment(contentTypeModel)

        if (index < contentTypeModels.length - 1) {
            writeLine()
        }
    })
}

function writeFragment(schema: ContentfulContentType) {
    writeLine(`export const ${schema.id}Fragment = graphql\``)
    writeLineIndented(
        1,
        `fragment ${schema.id}Fragment on Contentful${schema.name.replace(/ /g, '')} {`
    )
    writeLineIndented(2, `__typename`)
    schema.fields.forEach(writeField)
    writeLineIndented(1, '}')
    writeLine(`\``)
}

function writeField(field: Field) {
    writeLineIndented(2, field.getFragment())
}

function writeLine(line: string = '') {
    file.write(`${line}${os.EOL}`)
}

function writeLineIndented(indents: number, line: string = '') {
    writeLine(`${'\t'.repeat(indents)}${line}`)
}
