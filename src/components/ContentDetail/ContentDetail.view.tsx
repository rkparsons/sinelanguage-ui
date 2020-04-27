import { ContentModel } from '~/models'
import { Detail } from './ContentDetail.style'
import React from 'react'

type ViewProps = {
    model: ContentModel
}

export default ({ model }: ViewProps) => (
    <>
        {model.getSEOComponent()}
        <Detail container>{model.getDetailComponent()}</Detail>
    </>
)
