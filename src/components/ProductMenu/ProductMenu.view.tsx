import { Product, Release } from '~/cms/types'

import Desktop from '~/components/Desktop'
import DesktopProductMenu from '~/components/DesktopProductMenu'
import Mobile from '~/components/Mobile'
import MobileProductMenu from '~/components/MobileProductMenu'
import React from 'react'

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
        <Mobile>
            <MobileProductMenu
                release={release}
                products={products}
                isLight={isLight}
                isLarge={isLarge}
                text={text}
                indicateWhenInBag={indicateWhenInBag}
            />
        </Mobile>
        <Desktop>
            <DesktopProductMenu
                release={release}
                products={products}
                isLight={isLight}
                isLarge={isLarge}
                text={text}
                indicateWhenInBag={indicateWhenInBag}
            />
        </Desktop>
    </>
)
