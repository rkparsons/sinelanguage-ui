export default abstract class Field {
    constructor() {}

    abstract getTypeDefinitionImports(): string[]

    abstract getTypeDefinition(): string

    abstract getLinkedNodeDefinition(schemaName: string): string | undefined

    abstract getNodeDefinition(schemaName: string): string

    abstract getFragmentDefinition(): string
}
