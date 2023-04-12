export interface ICard {
    id: string;
    name: string;
    flip?: boolean;
}

export interface IMeaning {
    title: string;
    description: string;
}


export interface ITale{
    cardId: string;
    tale: string | string[];
    flipTale: string | string[];

}

export interface ICardsState {
    cards: ICard[];
    headerCards: ICard[];
    selectedCards: ICard[];
    tales: ITale[];
    pending: Boolean;
    error: Boolean,
}