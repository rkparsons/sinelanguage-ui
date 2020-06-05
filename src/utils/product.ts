import { Product } from '~/cms/types'
import ProductFormat from '~/constants/productFormat'

export function isPhysicalFormat(product: Product) {
    return [`${ProductFormat.VINYL12}`, ProductFormat.CASSETTE, ProductFormat.CD].includes(
        product.format
    )
}
