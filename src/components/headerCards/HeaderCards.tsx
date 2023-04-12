import { useEffect } from "react";
import Img from "next/image";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  addHeaderCard,
  flipHeaderCard,
  selectCards,
  selectHeaderCards,
} from "../../features/cards/cardsSlice";
import { HeaderCardsWrapper, HeaderImg } from "./HeaderCards.styles";
import Link from "next/link";
import Image from 'next/dist/client/image';

const HeaderCards = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);
  const headerCards = useAppSelector(selectHeaderCards);

  useEffect(() => {
    //There head cards generic
    if (!cards.length || cards.length < 3 || headerCards.length) return

    const cardsHeaderIds = new Set<number>();
    const min = 0;
    const max = cards.length;
    let flip;

    while (cardsHeaderIds.size < 3) {
      const cardId = Math.floor(Math.random() * (max - min)) + min;
      cardsHeaderIds.add(cardId);
    }
    const result: number[] = Array.from(cardsHeaderIds);

    for (const id of result) {
      flip = Math.floor(Math.random() * (6 - 0)) + 0;

      try {
        dispatch(addHeaderCard(cards[id]));
        if (!flip) dispatch(flipHeaderCard(cards[id].id));
      } catch (error) {
        console.log(error)
      }

    }
  }, [cards]);

  return (
    <Link href="/">
      <HeaderCardsWrapper>
        {!headerCards.length ? <></>
          :
          headerCards.map((card, i) => (
            <HeaderImg key={card.id} index={i} flip={card.flip}>
              <Img
                width="222px"
                height="400px"
                src={`/taro/${card.id}.png`}
                alt={`Карта таро - ${card.name}`}
                title={card.name}
              />
            </HeaderImg>
          ))}
        {/*<Image src="/cardflame.png" layout='fill' style={{ mixBlendMode: "screen", transform: "matrix(-1, 0, 0, 1, 0, 0)" }} />*/}
      </HeaderCardsWrapper>
    </Link>
  );
};

export default HeaderCards;
