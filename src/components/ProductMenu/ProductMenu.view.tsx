import { Product, Release } from '~/cms/types'

import DesktopProductMenu from '~/components/DesktopProductMenu'
import MobileProductMenu from '~/components/MobileProductMenu'
import React from 'react'
import ResponsiveBox from '~/components/ResponsiveBox'

type Props = {
    release: Release
    products: Product[]
    isLarge: boolean
    isLight: boolean
    text?: string
    indicateWhenInBag: boolean
}

export default ({ release, products, isLarge, isLight, text, indicateWhenInBag }: Props) => (
    <>
        <ResponsiveBox isDesktop={false}>
            <MobileProductMenu
                release={release}
                products={products}
                isLight={isLight}
                isLarge={isLarge}
                text={text}
                indicateWhenInBag={indicateWhenInBag}
            />
        </ResponsiveBox>
        <ResponsiveBox isDesktop={true}>
            <DesktopProductMenu
                release={release}
                products={products}
                isLight={isLight}
                isLarge={isLarge}
                text={text}
                indicateWhenInBag={indicateWhenInBag}
            />
        </ResponsiveBox>
    </>
)
