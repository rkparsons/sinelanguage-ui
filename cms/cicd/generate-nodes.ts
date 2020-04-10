import { WriteStream, createWriteStream, writeFile } from 'fs'

import { ContentType } from '../models'
import os from 'os'

let file: WriteStream

export function generateNodes(filePath: string, contentTypes: ContentType[]) {
    clearFile(filePath)
    initFileWriter(filePath)
    writeLine(`export const typeDefs = \``)
    writeNodes(contentTypes)
    writeLine(`\``)
    console.log(`SUCCESS: nodes written to file ${filePath}`)
}

function clearFile(filePath: string) {
    writeFile(filePath, '', () => {})
}

function initFileWriter(filePath: string) {
    file = createWriteStream(filePath, {
        flags: 'a',
    })
}

function writeNodes(contentTypes: ContentType[]) {
    contentTypes.forEach(contentType => {
        writeLine(contentType.getNodeDefinition())
    })
}

function writeLine(line: string = '') {
    file.write(`${line}${os.EOL}`)
}
