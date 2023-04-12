import { NextSeo } from 'next-seo'
import React from 'react'
import { SeoProps } from '../../../features/intrfaces/seo.interfaces'

function Seo({ title, description }: SeoProps) {
  return <NextSeo
    title={title}
    description={description}
  />
}

export default Seo