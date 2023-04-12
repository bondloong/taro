import React from "react";
import { ITale } from "../../../../features/intrfaces/cards.interfaces";

type Props = {
  flip: boolean;
  cardId: string;
  tales: ITale[];
  index: number;
};

const ShowTale = ({ flip, cardId, tales, index }: Props) => {
  /* 
  одна карта - 1 карта без переворота и 4 описание
  Карта дня - 1 карта без переворота и 1 описание
  три карты - 3 карты переворот есть, и 3 описание
  Кельтский крест - 10 карт переворот есть, 10 описаний, В зависимости от индекса выбирается описание
  Пирамида влюбленных - 4 карты переворот есть, 4 описания, В зависимости от индекса выбирается описание
  семь звезд - переворот есть, 7 карты переворот есть, 7 описания, В зависимости от индекса выбирается описание
  подкова - переворот есть, 7 карты переворот есть, 7 описания, В зависимости от индекса выбирается описание
  */
  
  const returnOneCardTale = (tale) => {
    const oneCardTitles = [
      "Основное значение",
      "Работа",
      "Сознание",
      "Личные отноешния",
    ];

   try {
    return tale.tale.map((t, i) => (
      <div key={i} style={{marginBottom: 20}}>
        <div style={{fontWeight: "bold"}}>{oneCardTitles[i]}</div>
            <div>{t}</div>
      </div>
    ))
   }catch(error){
     return <div>Предсказание не четкое</div>
   }
  }


  const returnTale = (): JSX.Element | JSX.Element[] => {
    const tale = tales.find((tale: ITale) => tale.cardId === cardId);
    try {
      if (!flip) {
        return typeof tale.tale === "string" ? (
          <div>{tale.tale}</div>
        ) : tales.length === 1 && tale.tale.length > 1 ? (
          returnOneCardTale(tale)
        ) : (
          <div>{tale.tale[index]}</div>
        )
      } else {
        return typeof tale.flipTale === "string" ? (
          <div>{tale.flipTale}</div>
        ) : (
          <div>{tale.tale[index]}</div>
        );
      }
    } catch (error) {
      return <div>Предсказание не четкое</div>
    }
    
  };

  return <div style={{textAlign: "justify"}}>{returnTale()}</div>;
};

export default ShowTale;
