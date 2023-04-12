import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import type { AppState } from '../../app/store'
import { ICard, ICardsState, ITale } from '../intrfaces/cards.interfaces'

const initialState: ICardsState = {
  cards: [],
  headerCards: [],
  selectedCards: [],
  tales: [],
  pending: false,
  error: false,
}

export const getCardQuote = createAsyncThunk('cards/cardQuote', async () => {
  const response = await axios.get('/api/cards');
  return response.data;
});

export interface IGetTale { selectedCards: ICard[],resolvedUrl: string }

export const getTaleQuote = createAsyncThunk('cards/taleQuote', async ({  selectedCards, resolvedUrl }: IGetTale, thunkAPI) => {
  const cardsId = await selectedCards.map(card => card.name)
  const response = await axios.get(`/api${resolvedUrl}?id=${cardsId}`);
  return response.data;
});

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addHeaderCard: (state, action: PayloadAction<ICard>) => {
      state.headerCards = state.headerCards.concat(action.payload);
    },
    addSelectedCards: (state, action: PayloadAction<ICard>) => {
      state.selectedCards = state.selectedCards.concat(action.payload);
    },
    setSelectedCardsEmpty: (state) => {
      state.selectedCards = [];
    },
    flipHeaderCard: (state, action: PayloadAction<string>) => {
      state.headerCards = state.headerCards.map(card => card.id === action.payload ? { ...card, flip: !card.flip } : card);
    },
    setTalesEmpty: (state) => {
      state.tales = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardQuote.pending, state => {
        state.pending = true;
      })
      .addCase(getCardQuote.fulfilled, (state, action: PayloadAction<ICard[]>) => {
        state.pending = false;
        state.cards = action.payload;
      })
      .addCase(getCardQuote.rejected, state => {
        state.pending = false;
        state.error = true;
      })

      .addCase(getTaleQuote.pending, state => {
        state.pending = true;
      })
      .addCase(getTaleQuote.fulfilled, (state, action: PayloadAction<ITale[]>) => {
        state.pending = false;
        state.tales = action.payload;
      })
      .addCase(getTaleQuote.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
})

export const { addHeaderCard, addSelectedCards, setSelectedCardsEmpty, flipHeaderCard, setTalesEmpty } = cardsSlice.actions

export const selectCards = (state: AppState) => state.cards.cards
export const selectHeaderCards = (state: AppState) => state.cards.headerCards
export const selectSelectedCards = (state: AppState) => state.cards.selectedCards
export const selectTales = (state: AppState) => state.cards.tales
export const selectPending = (state: AppState) => state.cards.pending
export const selectError = (state: AppState) => state.cards.error

export default cardsSlice.reducer
