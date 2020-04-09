import Field from './field'

type ContentTypeProps = {
    fields: Field[]
}

export default abstract class ContentType {
    fields: Field[]

    constructor({ fields }: ContentTypeProps) {
        this.fields = fields
    }

    abstract getTypeDefinition(): string

    abstract getFragmentDefinition(): string
}
