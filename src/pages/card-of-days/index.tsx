import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCards, setSelectedCardsEmpty, setTalesEmpty } from '../../features/cards/cardsSlice';
import CardList from '../../components/cardList/CardList'
import Header from '../../components/Header/Header'
import { IMeaning } from '../../features/intrfaces/cards.interfaces';
import H from '../../components/H/H';

const CardOfDays: NextPage = () => {
  const resolvedUrl = "/card-of-days"
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards)
  useEffect(() => {
    dispatch(setTalesEmpty())
    dispatch(setSelectedCardsEmpty())
  }, [])

  const meaning: IMeaning[] = [
    {
      title: "Описание ближайших суток",
      description: "Эта карта описывает чего придерживаться сегодня."
    },
  ]

  const title = 'Гадание Таро на ближайшее будущее'
  const h1 = 'Гадание на картах Таро «Карта дня»'
  const description = 'Каждый день – это ряд событий, которые могут нести как радость, так и грусть. Расклад таро «Карта дня» приоткрывает завесу на ближайшее будущее и позволяет намного лучше понимать и анализировать события. Бесплатное гадание на картах Таро «Карта дня» раскрывает то, что для многих недоступно, и дает возможность замечать причины и последствия предшествующих событий.'
  const about = description

  return (
    <>
      <Header resolvedUrl={resolvedUrl} title={title} h1={h1} description={description} about={about} />
      <H>{h1}</H>
      {cards.length != 0 && <CardList flip={false} cardLimit={1} resolvedUrl={resolvedUrl} meaning={meaning} />}
    </>
  )
}

export default CardOfDays