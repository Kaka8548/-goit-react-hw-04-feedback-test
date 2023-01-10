export const countPositiveFeedbackPercentage = (total, good) =>
  Math.round((good * 100) / total) || 0;
