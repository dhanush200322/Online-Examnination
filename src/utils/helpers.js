export const formatScore = (correct, total) => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

export const generateId = () => Math.random().toString(36).substr(2, 9);
