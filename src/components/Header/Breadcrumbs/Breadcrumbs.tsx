import Link from 'next/link';
import React from 'react'
import { Bread, BreadcrumbsWrapper, BreatText } from './Breadcrumbs.styles';
import { NextRouter, useRouter } from 'next/router'


type Props = {
    title: string;
    resolvedUrl: string;
    router: NextRouter;
}

const Breadcrumbs = ({ title, resolvedUrl, router }: Props): JSX.Element => {
    return (title && resolvedUrl) ? <BreadcrumbsWrapper>
        <Bread><Link href={`/`}><BreatText>Главная</BreatText></Link></Bread>
        <Bread onClick={() => router.reload()}><BreatText>{title}</BreatText></Bread>
    </BreadcrumbsWrapper> : <></>
}

export default Breadcrumbs