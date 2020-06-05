import { Product } from '~/cms/types'
import ProductFormat from '~/constants/productFormat'

export function isPhysicalFormat(product: Product) {
    return [`${ProductFormat.TWELVE_INCH_VINYL}`, ProductFormat.CASSETTE].includes(product.format)
}
