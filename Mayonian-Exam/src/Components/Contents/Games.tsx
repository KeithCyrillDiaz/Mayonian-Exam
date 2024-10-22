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
      <>
        {searchVisibile ? (
          <div className="flex justify-center items-center pt-20">No games provided</div>
        ) : (
          <div className="flex justify-center items-center pt-20">Please check your internet connection</div>
        )}
      </>
    )
  }

  return (
    <div className="flex-grow overflow-y-scroll">
      <div className={`${searchVisibile ? "h-[270px]" : "h-[330px]"} flex flex-wrap gap-2 pb-4`}>
        {gamesList.map(game => (
          <GameCard key={game.id} gameData={game}/>
        ))}
      </div>
    </div>
  );
};
