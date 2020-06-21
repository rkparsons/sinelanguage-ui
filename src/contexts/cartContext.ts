import { createContext } from 'react'

// todo: move all cart components (context, provider) into cart component folder
type CartItem = {
    id: string
}

type Cart = {
    items: CartItem[]
}

type CartContext = {
    cart: Cart
}

export default createContext<CartContext | undefined>(undefined)
