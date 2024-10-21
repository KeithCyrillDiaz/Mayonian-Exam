
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType } from '../lib/MockData'; // Make sure this path is correct
import { status } from '../lib/types';

interface GameState {
  games: GameType[];
  filteredGames: GameType[];
  status: status;
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
    setStatus: (state, action: PayloadAction<status>) => {
      state.status = action.payload;
    },
    filterGames: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredGames = state.games.filter(game => 
        game.title.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setGames, filterGames, setStatus } = gameSlice.actions;
export default gameSlice.reducer;
