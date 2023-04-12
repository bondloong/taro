import Link from 'next/link';
import { useRouter } from "next/router";
import {
  ICard,
  IMeaning,
  ITale,
} from "../../../features/intrfaces/cards.interfaces";
import { Button } from '../../Buttons/Buttons.style';
import ShowTale from "./ShowTale/ShowTale";
import {
  ButtonBottomWrapper,
  Tale,
  TaleContent,
  TaleDescription,
  TaleId,
  TaleImg,
  TaleImgBlock,
  TaleImgWrapper,
  TaleTitle,
  TaleWrapper,
} from "./ShowTales.styles";

type Props = {
  selectedCards: ICard[];
  tales: ITale[];
  meaning: IMeaning[];
  resolvedUrl: string;
};

const ShowTales = ({ selectedCards, meaning, tales }: Props): JSX.Element => {
  const router = useRouter();
  return (
    <TaleWrapper>
      {selectedCards.map((card: ICard, i) => (
        <Tale key={card.id}>
          <TaleImgWrapper>
            <TaleImgBlock flip={card.flip}>
              <TaleImg
                src={`/taro/${card.id}.png`}
                alt={`Карта таро - ${card.name}`}
                title={card.name}
                layout="fill"
              />
            </TaleImgBlock>
          </TaleImgWrapper>
          <TaleContent>
            {meaning[i].title && <TaleTitle>{meaning[i].title}</TaleTitle>}
            {meaning[i].description && (
              <TaleDescription>{meaning[i].description}</TaleDescription>
            )}
            <TaleId>
              {card.name.toLocaleUpperCase()} {card.flip ? "(Перевернутая)" : ""}
            </TaleId>
            <hr />
            {tales.length ? <ShowTale
              index={i}
              flip={card.flip}
              cardId={card.name}
              tales={tales}
            />
              : <div>Предсказание не четкое</div>
            }
          </TaleContent>
        </Tale>
      ))}
      <ButtonBottomWrapper>
        <Link href={'/'}>
          <Button borderNone={true}>Выбрать другое гадание</Button>
        </Link>
        <Button onClick={() => router.reload()}>Разложить карты еще раз</Button>
      </ButtonBottomWrapper>
    </TaleWrapper>
  );
};

export default ShowTales;
