export type ShippingRequest = {
    content: {
        shippingAddressCountry: string
        items: [
            {
                id: string
                totalPrice: number
                totalWeight: number
            }
        ]
        subtotal: number
        totalWeight: number
    }
}
