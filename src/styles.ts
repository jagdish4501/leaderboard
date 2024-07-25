import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: .5;
  }
  to {
    opacity: 1;
  }
`;


export const LeaderboardContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const LeaderboardItemContainer = styled.div<{ position: number }>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #f4f4f4;
  border-radius: 4px;
  background:linear-gradient(90deg,rgb(183, 247, 255),rgb(250, 150, 214));
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;

  ${({ position }) => css`
    transform: translateY(${position * 10}%);
  `}
`;

export const DisplayName = styled.span`
  font-weight: bold;
`;

export const Score = styled.span`
  font-size: 1.2em;
`;
