export const formatNumber = (num) => {
  if (!num) return 0;

  const suffixes = ["", "K", "M", "B", "T"];

  const suffixIndex = Math.floor(
    Math.max(0, Math.min(num.toString().length - 1, 12) / 3)
  );

  const formattedNum = parseFloat(
    (num / Math.pow(1000, suffixIndex)).toFixed(1)
  );

  return formattedNum + suffixes[suffixIndex];
};
