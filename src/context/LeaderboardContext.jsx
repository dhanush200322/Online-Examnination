import React, { createContext, useState, useEffect } from 'react';

export const LeaderboardContext = createContext();

const defaultLeaderboard = [
  { id: 1, rank: 1, name: 'Alice Smith', score: 9800, examsTaken: 25, accuracy: 96, avatar: 'https://i.pravatar.cc/150?u=1', movement: 'up' },
  { id: 2, rank: 2, name: 'Bob Jones', score: 9650, examsTaken: 24, accuracy: 95, avatar: 'https://i.pravatar.cc/150?u=2', movement: 'same' },
  { id: 3, rank: 3, name: 'Charlie Brown', score: 9500, examsTaken: 26, accuracy: 93, avatar: 'https://i.pravatar.cc/150?u=3', movement: 'down' },
  { id: 4, rank: 4, name: 'David Lee', score: 9200, examsTaken: 22, accuracy: 91, avatar: 'https://i.pravatar.cc/150?u=4', movement: 'up' },
  { id: 14, rank: 14, name: 'Alex Johnson', score: 7500, examsTaken: 12, accuracy: 88, avatar: 'https://i.pravatar.cc/150?img=11', movement: 'up', isCurrentUser: true }
];

export const LeaderboardProvider = ({ children }) => {
  const [leaderboard, setLeaderboard] = useState(() => {
    const saved = localStorage.getItem('oes_leaderboard');
    return saved ? JSON.parse(saved) : defaultLeaderboard;
  });

  useEffect(() => {
    localStorage.setItem('oes_leaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  return (
    <LeaderboardContext.Provider value={{ leaderboard, setLeaderboard }}>
      {children}
    </LeaderboardContext.Provider>
  );
};