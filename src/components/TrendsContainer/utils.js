export const sortTrends = (trends) => {
  return trends.sort((a, b) => b.tweet_volume - a.tweet_volume);
};

export const isArabic = (text) => {
  return /[\u0600-\u06FF]/.test(text);
};
