import React, { useEffect, useState } from 'react';
import LeaderboardItem from './LeaderboardItem';
import { LeaderboardContainer } from '../styles';

interface Player {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

const initialData: Player[] = [
  { userID: "u-1", displayName: "Jone", picture: "", score: 100 },
  { userID: "u-2", displayName: "Victoria", picture: "", score: 100 },
  { userID: "u-3", displayName: "Joy", picture: "", score: 100 },
  { userID: "u-4", displayName: "Quinn", picture: "", score: 100 },
  { userID: "u-5", displayName: "Sheenalo", picture: "", score: 100 },
  { userID: "u-6", displayName: "Charlene", picture: "", score: 100 },
  { userID: "u-7", displayName: "LeonaBaby", picture: "", score: 100 },
  { userID: "u-8", displayName: "Sunny", picture: "", score: 100 },
  { userID: "u-9", displayName: "ImWord", picture: "", score: 100 },
  { userID: "u-10", displayName: "Dophine", picture: "", score: 100 }
];

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers(prevPlayers => {
        const updatedPlayers = prevPlayers.map(player => ({
          ...player,
          score: player.score + Math.floor(Math.random() * 500)
        }));
        return updatedPlayers.sort((a, b) => b.score - a.score);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LeaderboardContainer>
      {players.map((player, index) => (
        <LeaderboardItem key={player.userID} displayName={player.displayName} score={player.score} position={index} />
      ))}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
