import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addSelectedCards, getTaleQuote, selectCards, selectHeaderCards, selectSelectedCards } from "../../features/cards/cardsSlice";
import { ICard, IMeaning } from "../../features/intrfaces/cards.interfaces";
import Card from "./card/Card";
import { randomize as getShuffledArr, returnHightCrads, setFlipedCardsNoFlip } from "../../utils/getShuffledArr";
import {
  CardListWrapper,
  CardListHeader,
  CardListBody,
} from "./CardList.styles";
import Result from "../result/Result";
import Link from 'next/link';
import { Button } from '../Buttons/Buttons.style';

export interface ICardList {
  cardLimit: number;
  resolvedUrl?: string;
  meaning: IMeaning[];
  flip?: boolean;
}

function CardList({
  cardLimit,
  resolvedUrl,
  meaning,
  flip = true
}: ICardList): JSX.Element {
  const cards = useAppSelector(selectCards);
  const selectedCards = useAppSelector(selectSelectedCards);
  const dispatch = useAppDispatch();
  const [cardList, setCardList] = useState<ICard[]>([]);
  const [cardCounter, setCardCounter] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const headerCards = useAppSelector(selectHeaderCards);

  const scroll = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', })
  };

  const heandlerAddCard = (card: ICard) => {
    dispatch(addSelectedCards(card));
    setCardCounter(cardCounter + 1);
  };

  const heandlerShowResult = () => {
    handleScroll(scroll)
    setShowResult(!showResult);
  };

  useEffect(() => {
    const randomizeCards = async () => {
      let data = await getShuffledArr(cards);
      if (!flip) data = await setFlipedCardsNoFlip(data);
      if (resolvedUrl === "/pyramid-of-lovers") data = await returnHightCrads(data);

      setCardList(data);
    };

    randomizeCards();

  }, []);

  useEffect(() => {
    if (cardCounter === cardLimit) {
      dispatch(getTaleQuote({ selectedCards, resolvedUrl }));
    }
  }, [cardCounter])



  return (
    <CardListWrapper ref={scroll}>
      {!headerCards.length ? <></>
        : <>
          <CardListHeader>
            <Link href={'/'}>
              <Button borderNone={true}>Выбрать другое гадание</Button>
            </Link>
            {cardCounter != cardLimit ? (
              <>
                <Button noHover>{`Выбрано ${cardCounter} карт из ${cardLimit}`}</Button>
              </>
            ) : !showResult ? (
              <>
                <Button fullBackgound onClick={() => heandlerShowResult()}> ПОСМОТРЕТЬ РАСКЛАД</Button>
              </>
            ) : (
              ""
            )}
          </CardListHeader>
          <CardListBody>
            {cardList &&
              !showResult &&
              cardList.map((card) => (
                <Card
                  heandlerAddCard={heandlerAddCard}
                  key={card.id}
                  card={card}
                  cardCounter={cardCounter}
                  cardLimit={cardLimit}
                />
              ))}
            {
              showResult && <Result resolvedUrl={resolvedUrl} meaning={meaning} />
            }
          </CardListBody>
        </>
      }
    </CardListWrapper>
  );
}

export default CardList;
