import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'
import { HeadProps } from '../../features/intrfaces/head.interfaces'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'

import { HeaderWrapper, HeaderContent, HeaderDescription, HeaderDiv, HeaderH1, HeaderOne, HeaderTwo } from './Header.styles'
import Seo from './Seo/Seo'

function Header({ title, description, about, h1, resolvedUrl }: HeadProps): JSX.Element {
  const router = useRouter()

  return <HeaderWrapper>
    <Seo title={title} description={description} />
    <HeaderContent>
      {resolvedUrl === undefined ?
        <HeaderDiv>
          {/*{title != '' ? <span style={{ cursor: "pointer" }} onClick={() => router.reload()}>{title}</span> : ''} 
        <br />*/}
          {<Link href={`/`}><div><HeaderOne>ТАРО</HeaderOne><HeaderTwo>гадания на картах</HeaderTwo></div></Link>}
        </HeaderDiv>
        :
        <HeaderDiv>
          <Link href={`/`}><div><HeaderOne>ТАРО</HeaderOne><HeaderTwo>гадания на картах</HeaderTwo></div></Link>
        </HeaderDiv>
      }
      <HeaderDescription>{about}</HeaderDescription>
      <Breadcrumbs resolvedUrl={resolvedUrl} title={title} router={router} />
    </HeaderContent>
  </HeaderWrapper>
}

export default Header 