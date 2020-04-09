import { WriteStream, createWriteStream, writeFile } from 'fs'

import { ContentType } from '../models'
import { Import } from '../constants'
import os from 'os'

let file: WriteStream

export function generateFragments(filePath: string, contentTypes: ContentType[]) {
    clearFile(filePath)
    initFileWriter(filePath)
    writeImports()
    writeFragments(contentTypes)
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
    writeLine(Import.GRAPH_QL)
    writeLine()
}

function writeFragments(contentTypes: ContentType[]) {
    contentTypes.forEach(contentType => {
        writeLine(contentType.getFragmentDefinition())
    })
}

function writeLine(line: string = '') {
    file.write(`${line}${os.EOL}`)
}
