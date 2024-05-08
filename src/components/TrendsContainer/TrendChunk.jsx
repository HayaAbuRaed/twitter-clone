import { Stack, Typography } from "@mui/material";
import { isArabic } from "./utils";
import { formatNumber } from "../../utils";

const TrendChunk = ({ trend }) => {
  const { name, tweet_volume } = trend;

  return (
    <Stack
      gap={0.5}
      fontFamily="Arial, sans-serif"
      sx={{ fontFamily: "Arial, sans-serif" }}
      px={2}
    >
      <Typography
        variant="body1"
        fontWeight={700}
        sx={{ direction: isArabic(name) ? "rtl" : "ltr" }}
      >
        {name}
      </Typography>

      {tweet_volume && (
        <Typography variant="body2" color="GrayText">
          {formatNumber(tweet_volume)} posts
        </Typography>
      )}
    </Stack>
  );
};

export default TrendChunk;
