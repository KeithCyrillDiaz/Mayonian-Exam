// src/Components/Contents/Games.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GameCard } from './GameCard';
import { RootState } from '../../redux/store';
import { MockGameList } from '../../API/fetchData';
import { Loader } from '../Loader';
import { setGames, setStatus } from '../../redux/gameSlice';

export const Games: React.FC = () => {
  const games = useSelector((state: RootState) => state.game.filteredGames);
  const status = useSelector((state: RootState) => state.game.status);
  const dispatch = useDispatch();

  const fetchData = async () => {
   try {
    dispatch(setStatus("loading"))
    const result = await MockGameList(true);
    if (result.data)dispatch(setGames(result.data));

   } catch (error) {
    
   } finally{
      dispatch(setStatus("idle"))
   }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (status === 'loading') {
    return <Loader />;
  }

  if (games.length === 0) {
    return <div className="flex justify-center items-center pt-20">Please check your internet connection</div>;
  }

  return (
    <div className="flex-grow overflow-y-scroll">
      <div className="flex flex-wrap gap-2 h-[340px]">
        {games.map(game => (
          <GameCard key={game.id} gameData={game} />
        ))}
      </div>
    </div>
  );
};
