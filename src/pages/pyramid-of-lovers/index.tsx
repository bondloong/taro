import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCards, setSelectedCardsEmpty, setTalesEmpty } from '../../features/cards/cardsSlice';
import CardList from '../../components/cardList/CardList'
import Header from '../../components/Header/Header'
import { IMeaning } from '../../features/intrfaces/cards.interfaces';
import H from '../../components/H/H';

const PyramidOfLovers: NextPage = () => {
  const resolvedUrl = "/pyramid-of-lovers"
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards)

  useEffect(() => {
    dispatch(setTalesEmpty())
    dispatch(setSelectedCardsEmpty())
  }, [])

  const meaning: IMeaning[] = [
    {
      title: "Вы",
      description: ""
    },
    {
      title: "Ваш партнер",
      description: ""
    },
    {
      title: "Отношения",
      description: ""
    },
    {
      title: "Будущее",
      description: ""
    },
  ]


  const title = 'Гадание Таро на отношения в любви'
  const h1 = 'Гадание на картах Таро «Пирамида влюбленных»'
  const description = 'Каждый день – это ряд событий, которые могут нести как радость, так и грусть. Расклад таро «Карта дня» приоткрывает завесу на ближайшее будущее и позволяет намного лучше понимать и анализировать события. Бесплатное гадание на картах Таро «Карта дня» раскрывает то, что для многих недоступно, и дает возможность замечать причины и последствия предшествующих событий.'
  const about = 'Каждый день – это ряд событий, которые могут нести как радость, так и грусть. Расклад таро «Карта дня» приоткрывает завесу на ближайшее будущее и позволяет намного лучше понимать и анализировать события. Бесплатное гадание на картах Таро «Карта дня» раскрывает то, что для многих недоступно, и дает возможность замечать причины и последствия предшествующих событий.'

  return (
    <>
      <Header resolvedUrl={resolvedUrl} title={title} h1={h1} description={description} about={about} />
      <H>{h1}</H>
      {cards.length != 0 && <CardList cardLimit={meaning.length} resolvedUrl={resolvedUrl} meaning={meaning} />}
    </>
  )
}

export default PyramidOfLovers
