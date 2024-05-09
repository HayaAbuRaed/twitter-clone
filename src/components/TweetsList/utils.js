export const formateDate = (date) => {
  const tweetDate = new Date(date);

  const currentYear = new Date().getFullYear();
  const tweetYear = tweetDate.getFullYear();

  return currentYear === tweetYear
    ? tweetDate.toLocaleString("default", {
        day: "numeric",
        month: "short",
      })
    : tweetDate.toLocaleString("default", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
};
