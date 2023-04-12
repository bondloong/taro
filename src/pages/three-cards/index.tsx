import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCards, setSelectedCardsEmpty, setTalesEmpty } from '../../features/cards/cardsSlice';
import CardList from '../../components/cardList/CardList'
import Header from '../../components/Header/Header'
import { IMeaning } from '../../features/intrfaces/cards.interfaces';
import H from '../../components/H/H';

const ThreeCards: NextPage = () => {
  const resolvedUrl = "/three-cards"
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards)

  useEffect(() => {
    dispatch(setTalesEmpty())
    dispatch(setSelectedCardsEmpty())
  }, [])

  const meaning: IMeaning[] = [
    {
      title: "Прошлое",
      description: ""
    },
    {
      title: "Настоящее",
      description: ""
    },
    {
      title: "Будущее",
      description: ""
    },
  ]

  const title = 'Гадание Таро на ситуацию в жизни';
  const h1 = 'Гадание на картах Таро «Три карты»';
  const description = 'Бесплатное гадание на картах таро «Три карты» дает ответ на легкий вопрос, тревожащий вашу душу. Принцип гадания очень простой – используются три карты, каждая отвечает за свое: первая рассказывает о том, что предшествовало появлению вопроса, вторая подсказывает, как следует поступать в ближайшее время, а третья указывает на то, каким может быть результат.';
  const about = description;

  return (
    <>
      <Header resolvedUrl={resolvedUrl} title={title} h1={h1} description={description} about={about} />
      <H>{h1}</H>
      {cards.length != 0 && <CardList cardLimit={meaning.length} resolvedUrl={resolvedUrl} meaning={meaning} />}
    </>
  )
}

export default ThreeCards
