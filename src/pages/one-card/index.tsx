import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectCards, setSelectedCardsEmpty, setTalesEmpty } from '../../features/cards/cardsSlice'
import CardList from '../../components/cardList/CardList'
import Header from '../../components/Header/Header'
import { IMeaning } from '../../features/intrfaces/cards.interfaces'
import H from '../../components/H/H'

const OneCard: NextPage = () => {
  const resolvedUrl = "/one-card"
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards)

  useEffect(() => {
    dispatch(setTalesEmpty())
    dispatch(setSelectedCardsEmpty())
  }, [])

  const meaning: IMeaning[] = [
    {
      title: "",
      description: ""
    },
  ]


  const title = 'Гадание Таро на вопрос'
  const h1 = 'Гадание на картах Таро «Одна карта»'
  const description = 'Бесплатное гадание на картах таро «Одна карта» — это быстрый и легкий способ получить короткий ответ на волнующий душу вопрос. В данном гадании используется всего одна карта, а потому не возникает никаких трудностей с трактовкой результата.'
  const about = 'Бесплатное гадание на картах таро «Одна карта» — это быстрый и легкий способ получить короткий ответ на волнующий душу вопрос. В данном гадании используется всего одна карта, а потому не возникает никаких трудностей с трактовкой результата.'

  return (
    <>
      <Header resolvedUrl={resolvedUrl} title={title} h1={h1} description={description} about={about} />
      <H>{h1}</H>
      {cards.length != 0 && <CardList flip={false} cardLimit={meaning.length} resolvedUrl={resolvedUrl} meaning={meaning} />}
    </>
  )
}

export default OneCard
