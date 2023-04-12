import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { selectSelectedCards, selectTales } from '../../features/cards/cardsSlice';
import { IMeaning } from '../../features/intrfaces/cards.interfaces';
import ShowTales from './showTales/ShowTales';

export interface IProps {
    resolvedUrl: string;
    meaning: IMeaning[];
}

const Result = ({ resolvedUrl, meaning}: IProps): JSX.Element => {
  const selectedCards = useAppSelector(selectSelectedCards);
  const tales = useAppSelector(selectTales);

  return (
      <ShowTales resolvedUrl={resolvedUrl} selectedCards={selectedCards} meaning={meaning} tales={tales}/>
  )
}

export default Result