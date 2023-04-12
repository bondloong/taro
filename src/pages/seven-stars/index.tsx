import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCards, setSelectedCardsEmpty, setTalesEmpty } from '../../features/cards/cardsSlice';
import CardList from '../../components/cardList/CardList'
import Header from '../../components/Header/Header'
import { IMeaning } from '../../features/intrfaces/cards.interfaces';
import H from '../../components/H/H';

const SevenStars: NextPage = () => {
  const resolvedUrl = "/seven-stars"
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards)

  useEffect(() => {
    dispatch(setTalesEmpty())
    dispatch(setSelectedCardsEmpty())
  }, [])

  const meaning: IMeaning[] = [
    {
      title: "Описание вашего характера",
      description: "Эта карта описывает ваше внутреннее состояние, ваше отношение к вашему избраннику на текущий момент."
    },
    {
      title: "Как ведет себя в любви избранник",
      description: "Карта показывает как ведет себя в отношениях ваш избранник."
    },
    {
      title: "Что будет помогать вам в отношениях",
      description: "События или какие-либо факторы, которые благоприятно влияют на ваши отношения."
    },
    {
      title: "Перспективы ваших отношений",
      description: "Карта указывает на перспективы ваших отношений."
    },
    {
      title: "Описание характера вашего избранника (избранницы)",
      description: "Эта карта описывает внутреннее состояние вашего избранника, его отношение к вам на текущий момент."
    },
    {
      title: "Какие опасности для вашей любви могут быть",
      description: "Причины или какие-то факторы, которые негативно влияют на ваши отношения."
    },
    {
      title: "Тайные склонности и мысли избранника (избранницы)",
      description: "Мысли, особенности вашего избранника, которые он по тем или иным соображениям не хочет вам говорить."
    },
  ]


  const title = 'Семь звезд'
  const h1 = 'Гадание на картах Таро Семь звезд'
  const description = 'Гадание Семь звезд - гадание, которое поможет вам разобраться в отношениях, в себе, к тому как вы относитесь к своему избраннику(избраннице), а также как к вам относится к ваш возлюбленный(ая), к чему приведут ваши отношения, чего не хватает вашим отношениям для гармоничного отношения, что в вас раздражает вашего партнера, и даст рекомендации как поступить лучше всего.'
  const about = description


  return (
    <>
      <Header resolvedUrl={resolvedUrl} title={title} h1={h1} description={description} about={about} />
      <H>{h1}</H>
      {cards.length != 0 && <CardList cardLimit={meaning.length} resolvedUrl={resolvedUrl} meaning={meaning} />}
    </>
  )
}

export default SevenStars
