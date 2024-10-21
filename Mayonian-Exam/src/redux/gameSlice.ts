
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType } from '../lib/MockData'; // Make sure this path is correct
import { statusTypes } from '../lib/types';

interface GameState {
  games: GameType[];
  filteredGames: GameType[];
  status: statusTypes;
}

const initialState: GameState = {
  games: [],
  filteredGames: [],
  status: 'idle',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<GameType[]>) => {
      state.games = action.payload;
      state.filteredGames = action.payload;
    },
    setStatus: (state, action: PayloadAction<statusTypes>) => {
      state.status = action.payload;
    },
    filterGames: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredGames = state.games.filter(game => 
        game.title.toLowerCase().includes(searchTerm)
      );
    },
    setFavorite: (state, action: PayloadAction<{id: number, favorite: boolean}>) => {
      const { id, favorite } = action.payload;
      const gameToUpdate = state.games.find(game => game.id === id);
      if(!gameToUpdate)return state
      gameToUpdate.favorite = favorite;
      console.log("game: ", JSON.stringify(gameToUpdate, null, 1))
    }
  },
});

export const { setGames, filterGames, setStatus, setFavorite } = gameSlice.actions;
export default gameSlice.reducer;
