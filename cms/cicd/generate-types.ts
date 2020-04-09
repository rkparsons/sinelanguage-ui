import { WriteStream, createWriteStream, writeFile } from 'fs'

import { ContentType } from '../models'
import flattenDeep from 'lodash.flattendeep'
import os from 'os'

let file: WriteStream

export function generateTypes(filePath: string, contentTypes: ContentType[]) {
    clearFile(filePath)
    initFileWriter(filePath)
    writeImports(contentTypes)
    writeTypes(contentTypes)
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

function writeImports(contentTypes: ContentType[]) {
    const imports = flattenDeep<string>(
        contentTypes.map(contentType =>
            contentType.fields.map(field => field.getTypeDefinitionImports())
        )
    )

    const uniqueImports = [...new Set(imports)]

    uniqueImports.forEach(writeLine)
    writeLine()
}

function writeTypes(contentTypes: ContentType[]) {
    contentTypes.forEach(contentType => {
        writeLine(contentType.getTypeDefinition())
    })
}

function writeLine(line: string = '') {
    file.write(`${line}${os.EOL}`)
}
