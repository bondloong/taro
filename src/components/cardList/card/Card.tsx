import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectSelectedCards } from "../../../features/cards/cardsSlice";
import { ICard } from "../../../features/intrfaces/cards.interfaces";
import { Img } from "../../../styles/GlobalStyles";
import { Back, CardWrapper, Front } from "./Card.style";

type Props = {
  card: ICard;
  onClick?: React.MouseEventHandler<HTMLElement>;
  heandlerAddCard: (card: ICard) => void;
  cardCounter: number;
  cardLimit: number;
};

const Card: React.FC<Props> = ({
  card,
  heandlerAddCard,
  cardCounter,
  cardLimit
}): JSX.Element => {
  const [active, setActive] = useState(false);
  const selectedCards = useAppSelector(selectSelectedCards);

  const hendlerCard = () => {
    if (cardCounter === cardLimit || selectedCards.includes(card)) {
      return;
    }

    heandlerAddCard(card);
    setActive(!active);
  };

  return (
    <CardWrapper onClick={() => hendlerCard()}>
      <Front active={active} flip={card.flip}>
        {/* <Img src={`/taro/${card.src}`} */}
        <Img src={`/taro/${card.id}.png`}
                alt={`Карта таро - ${card.name}`}
                title={card.name} 
                layout="fill" />
      </Front>

      <Back active={active}>
        <Img
          src="/taro/Taro_card_back.png"
          alt="Рубашка карты таро"
          layout="fill"
        />
      </Back>
    </CardWrapper>
  );
};

export default Card;
