import React from 'react';
import { LeaderboardItemContainer, DisplayName, Score } from '../styles';

interface LeaderboardItemProps {
  displayName: string;
  score: number;
  position: number;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ displayName, score, position }) => {
  return (
    <LeaderboardItemContainer position={position}>
      <DisplayName>{displayName}</DisplayName>
      <Score>{score}</Score>
    </LeaderboardItemContainer>
  );
};

export default LeaderboardItem;
