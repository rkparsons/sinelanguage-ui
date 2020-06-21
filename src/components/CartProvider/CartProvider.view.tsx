import React, { ReactNode, useEffect, useState } from 'react'

import Cart from '~/components/Cart'
import CartContext from '~/contexts/cartContext'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    const [cart, setCart] = useState({ items: [] })

    function getCartState() {
        const { Snipcart } = window as any

        if (Snipcart) {
            const { cart } = Snipcart.store.getState()

            setCart({
                items: cart.items.items,
            })
        }
    }

    function configureSnipcart() {
        const { Snipcart } = window as any

        return Snipcart?.store.subscribe(getCartState)
    }

    useEffect(() => {
        configureSnipcart()

        document.addEventListener('snipcart.ready', () => {
            configureSnipcart()
        })
    }, [])

    return (
        <CartContext.Provider
            value={{
                cart,
            }}
        >
            {children}
            <Cart version="3.0.15" openCartOnAdd={false} />
        </CartContext.Provider>
    )
}
