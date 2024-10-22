// src/Components/Contents/Games.tsx
import React from 'react';
import { GameCard } from './GameCard';
import { Loader } from '../Loader';
import { statusTypes } from '../../lib/types';
import { GameType } from '../../lib/MockData';

type GamesProps = {
  status: statusTypes;
  gamesList: GameType[];
  searchVisibile?: boolean
}

export const Games: React.FC<GamesProps> = ({
  status,
  gamesList,
  searchVisibile
}) => {
  
  if (status === 'loading') {
    return <Loader />;
  }

  if (gamesList.length === 0 ) {
    return (
          <div className="flex justify-center items-center pt-20">No games provided</div>
    )
  }

  return (
    <div className="flex-grow overflow-y-scroll overflow-hidden ">
      <div className={`${searchVisibile ? 'h-[30vh]' : 'h-[40vh]'} flex flex-wrap gap-2 overflow-y-auto py-4 pb-7`}>
        {gamesList.map(game => (
          <GameCard key={game.id} gameData={game}/>
        ))}
      </div>
    </div>
  );
};
