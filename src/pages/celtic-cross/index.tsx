import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCards, setSelectedCardsEmpty, setTalesEmpty } from '../../features/cards/cardsSlice';
import CardList from '../../components/cardList/CardList'
import Header from '../../components/Header/Header'
import { IMeaning } from '../../features/intrfaces/cards.interfaces';
import H from '../../components/H/H';

const CelticCross: NextPage = () => {
  const resolvedUrl = "/celtic-cross"
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards)

  useEffect(() => {
    dispatch(setTalesEmpty())
    dispatch(setSelectedCardsEmpty())
  }, [])

  const meaning: IMeaning[] = [
    {
      title: "Описание самой ситуации",
      description: "Эта карта описывает текущую ситуацию, что происходит в данный момент."
    },
    {
      title: "Влияние на ситуацию",
      description: "Карта говорит о вещах, событиях, которые могут повлиять на развитие ситуации."
    },
    {
      title: "Совет от Кельтского креста",
      description: "Рекомендации от карты, чтобы ситуация повернулась наиболее удачно."
    },
    {
      title: "Причины ситуации",
      description: "Это те причины, которые привели к тому, чтобы ситуация так повернулась."
    },
    {
      title: "Прошлое",
      description: "Эта карта говорит о прошлых событиях, которые могли повлиять на эту ситуацию."
    },
    {
      title: "Варианты будущего",
      description: "Говорит о том, как дальше может развиваться ситуация."
    },
    {
      title: "Ваше отношение к ситуации",
      description: "То, как вы относитесь к данной ситуации."
    },
    {
      title: "Воздействие других людей",
      description: "Карта указывает на человека, имеющего отношение к вашей ситуации."
    },
    {
      title: "Надежды и опасения",
      description: "Данная карта говорит о вашем внутреннем состоянии и как оно влияент на развитие ситуации."
    },
    {
      title: "Результат",
      description: "Эта карта говорит о том, к чему может привести данная ситуация. Если же вам не нравится такой вариант событий, то, чтобы изменить события, вы можете воспользоваться советами, которые дает карта."
    },
  ]
  const title = 'Кельтский крест'
  const h1 = 'Гадание на картах Таро Кельтский крест'
  const description = 'Гадание Кельтский крест - одно из ключевых гаданий на картах Таро. В ходе гадания нужно выбрать десять карт из колоды, которые определят расклад по вашей текущей ситуации, на которую вы гадаете. Кельтский крест определит истоки возникновения данной ситуации, ваше отношение к ситуации, укажет на события и людей повлиявших на нее, возможное будущее и конечный итог, а также подскажет как поступить, чтобы избежать возможных ошибок.';
  const about = description;
  return (
    <>
      <Header resolvedUrl={resolvedUrl} title={title} h1={h1} description={description} about={about} />
      <H>{h1}</H>
      {cards.length != 0 && <CardList cardLimit={meaning.length} resolvedUrl={resolvedUrl} meaning={meaning} />}
    </>
  )
}

export default CelticCross
