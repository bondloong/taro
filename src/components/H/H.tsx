import { useRouter } from 'next/router'
import React, { JSXElementConstructor, Key } from 'react'
import { H1 } from './H.styles'

interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
	type?: T;
	props?: P;
	key?: Key | null;
	children?: React.ReactNode;
}

function H({ children }: ReactElement): JSX.Element {
	const router = useRouter()

	return (
		<H1 onClick={() => router.reload()} >{children}</H1>
	)
}

export default H