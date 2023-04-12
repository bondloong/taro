import React, { useEffect } from 'react'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCardQuote, selectCards, setSelectedCardsEmpty } from '../../features/cards/cardsSlice';
import { Ad, Wrapper } from '../../styles/GlobalStyles'
import Footer from '../Footer/Footer';
import HeaderCards from '../headerCards/HeaderCards'

const Layout = ({ children }): JSX.Element => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards)

  useEffect(() => {
    if (cards.length === 0) {
      dispatch(getCardQuote())
    }
    dispatch(setSelectedCardsEmpty())
  }, [])

  return (
    <Wrapper>
      <HeaderCards />
      <Ad id="yandex_rtb_R-A-1990292-1"></Ad>
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout