export const getShuffledArr = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
};

export const getFlipedCards = (arr) => {
    const flipedCard = arr.map(card => Math.floor(Math.random() * 2)? {...card, flip: false} : {...card, flip: true})
    return flipedCard
}

export const randomize = async (arr) => {
    const shuffled = await getShuffledArr(arr);
    const result = await getFlipedCards(shuffled);
    return result
}

export const setFlipedCardsNoFlip = (arr) => {
    const flipedCard = arr.map(card => true && {...card, flip: false})
    return flipedCard
}

export const returnHightCrads = (arr) => {
    const args = ["Wands", "Coins", "Cups", "Swords"];
    const newCards = arr.filter(card => !args.some(substring=> card.id.includes(substring)))
    return newCards
}