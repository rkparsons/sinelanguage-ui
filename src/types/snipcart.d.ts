export type CartItem = {
    id: string
    price: number
    url: string
    name: string
    description: string
    imageUrl: string
    formats: string
}

export type HTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export type SnipcartBilling = HTMLProps & {
    section: string
}

export type SnipcartLabel = HTMLProps & {
    for: string
}

export type SnipcartInput = HTMLProps & {
    name: string
}

export type SnipcartCheckbox = HTMLProps & {
    name: string
}
