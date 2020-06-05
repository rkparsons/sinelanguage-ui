import { Product, Release } from '~/cms/types'

import ProductFormat from '~/constants/productFormat'

export function isPhysicalFormat(product: Product) {
    return [`${ProductFormat.VINYL12}`, ProductFormat.CASSETTE, ProductFormat.CD].includes(
        product.format
    )
}

export function getPrice(product: Product) {
    if (product.price) {
        return product.price
    } else if (product.format === ProductFormat.MP3) {
        return 0.7
    } else if (product.format === ProductFormat.WAV24) {
        return 1.1
    } else if (product.format === ProductFormat.WAV16) {
        return 1.1
    } else {
        return 0
    }
}

export function getDescription(product: Product) {
    if (product.description) {
        return product.description.description
    } else if (!isPhysicalFormat(product)) {
        return 'Digital download'
    } else {
        return ''
    }
}

export function getImage(release: Release, product: Product) {
    if (product.image) {
        return product.image.fluid.src
    } else {
        return release.image.fluid.src
    }
}
