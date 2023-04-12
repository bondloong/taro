import Link from 'next/link'
import React from 'react'
import { fortuneTellingsProps } from '../../features/intrfaces/fortuneTellings.interfaces'


import { FortuneTellingDescription, FortuneTellingFigcaption, FortuneTellingImage, FortuneTellingImg, FortuneTellingTitle, FortuneTellingWrapper } from './fortuneTellings.styles'

function FortuneTelling({ src, href, alt, title, description }: fortuneTellingsProps) {
  return <Link href={href}>
    <FortuneTellingWrapper>
      <FortuneTellingImage>
        <FortuneTellingImg src={src} alt={alt} />
      </FortuneTellingImage>
      <FortuneTellingFigcaption>
        <FortuneTellingTitle>Гадание таро <br /> {title}</FortuneTellingTitle>
        <FortuneTellingDescription>{description}</FortuneTellingDescription>
      </FortuneTellingFigcaption>
    </FortuneTellingWrapper>
  </Link >
}

export default FortuneTelling