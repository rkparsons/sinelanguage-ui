import { WriteStream, createWriteStream, writeFile } from 'fs'

import { ContentfulContentType } from '../models'
import Field from '../models/field'
import flattenDeep from 'lodash.flattendeep'
import os from 'os'

let file: WriteStream

export function generateTypes(filePath: string, contentTypeModels: ContentfulContentType[]) {
    clearFile(filePath)
    initFileWriter(filePath)
    writeImports(contentTypeModels)
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

function writeImports(contentTypeModels: ContentfulContentType[]) {
    const imports = flattenDeep<string>(
        contentTypeModels.map(contentType =>
            contentType.fields.map(field => field.getTypeDefinitionImports())
        )
    )

    const uniqueImports = [...new Set(imports)]

    uniqueImports.forEach(writeLine)
    writeLine()
}

function writeTypes(contentTypeModels: ContentfulContentType[]) {
    contentTypeModels.forEach((contentTypeModel, index) => {
        writeLine(contentTypeModel.getTypeDefinition())
    })
}

function writeLine(line: string = '') {
    file.write(`${line}${os.EOL}`)
}
