import CartContext from '~/contexts/cartContext'
import { useContext } from 'react'

// todo: move all cart components into same location
export default () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCartContext must be used within a CartProvider')
    }

    return context
}
