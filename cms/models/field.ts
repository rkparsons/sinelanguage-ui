export default abstract class Field {
    constructor() {}

    abstract getTypeDefinitionImports(): string[]

    abstract getTypeDefinition(): string

    abstract getNode(schemaName: string): string

    abstract getFragment(): string
}
