import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCards, setSelectedCardsEmpty, setTalesEmpty } from '../../features/cards/cardsSlice';
import CardList from '../../components/cardList/CardList'
import Header from '../../components/Header/Header'
import { IMeaning } from '../../features/intrfaces/cards.interfaces';
import H from '../../components/H/H';

const Horseshoes: NextPage = () => {
  const resolvedUrl = "/horseshoes"
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards)

  useEffect(() => {
    dispatch(setTalesEmpty())
    dispatch(setSelectedCardsEmpty())
  }, [])

  const meaning: IMeaning[] = [
    {
      title: "Прошлое",
      description: "Эта карта говорит о прошлых событиях, которые могли повлиять на эту ситуацию."
    },
    {
      title: "Описание самой ситуации",
      description: "Эта карта описывает текущую ситуацию, что происходит в данный момент."
    },
    {
      title: "Варианты будущего",
      description: "Говорит о том, как дальше может развиваться ситуация."
    },
    {
      title: "Совет",
      description: "Рекомендации от карты, чтобы ситуация повернулась наиболее удачно."
    },
    {
      title: "Воздействие других людей",
      description: "Карта указывает на человека, имеющего отношение к вашей ситуации."
    },
    {
      title: "Варианты, которые мешают",
      description: "Карта говорит о событиях или вашем текущем настрое, которое мешает вам в данной ситуации."
    },
    {
      title: "Результат",
      description: "Эта карта говорит о том, к чему может привести данная ситуация. Если же вам не нравится такой вариант событий, то, чтобы изменить события, вы можете воспользоваться советами, которые дает карта."
    },
  ]

  const title = 'Гадание Таро на удачу в будущем';
  const h1 = 'Гадание на картах Таро «Подкова»';
  const description = 'Еще в старину подкова означала удачу и каждый старался повесить такой амулет у входа в дом. Бесплатное гадание на картах таро «Подкова» помогает лучше понимать сложившуюся ситуацию. Данное гадание отличается мудростью советов и рекомендаций, а также показывает, каким может результат. ';
  const about = description;

  return (
    <>
      <Header resolvedUrl={resolvedUrl} title={title} h1={h1} description={description} about={about} />
      <H>{h1}</H>
      {cards.length != 0 && <CardList cardLimit={meaning.length} resolvedUrl={resolvedUrl} meaning={meaning} />}
    </>
  )
}

export default Horseshoes
