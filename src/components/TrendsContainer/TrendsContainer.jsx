import { Button, Stack, Typography } from "@mui/material";
import useGetTrends from "./hooks/useGetTrends";
import TrendChunk from "./TrendChunk";
import { useState } from "react";

const TrendsContainer = ({ step = 10 }) => {
  const [visibleItems, setVisibleItems] = useState(step);

  const { trends, isFetching } = useGetTrends();

  //   const trends = [
  //     {
  //       name: "#رفح_بين_الحصار_والتجويع",
  //       url: "http://twitter.com/search?q=%23getoutofrafah",
  //       promoted_content: null,
  //       tweet_volume: null,
  //     },
  //     {
  //       name: "#getoutofrafah",
  //       url: "http://twitter.com/search?q=%23getoutofrafah",
  //       promoted_content: null,
  //       tweet_volume: 27273,
  //     },
  //     {
  //       name: "#DCvsRR",
  //       url: "http://twitter.com/search?q=%23DCvsRR",
  //       promoted_content: null,
  //       query: "%23DCvsRR",
  //       tweet_volume: 15420,
  //     },
  //     {
  //       name: "iPad Pro",
  //       url: "http://twitter.com/search?q=%22iPad+Pro%22",
  //       promoted_content: null,
  //       query: "%22iPad+Pro%22",
  //       tweet_volume: 54915,
  //     },
  //     {
  //       name: "#AppleEvent",
  //       url: "http://twitter.com/search?q=%23AppleEvent",
  //       promoted_content: null,
  //       query: "%23AppleEvent",
  //       tweet_volume: 65129,
  //     },
  //     {
  //       name: "#استمرار_السالم_مرفوض",
  //       url: "http://twitter.com/search?q=%23getoutofrafah",
  //       promoted_content: null,
  //       tweet_volume: 10946,
  //     },
  //   ];

  //   const isFetching = false;

  if (!trends) return null;

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + step);
  };

  return (
    <Stack
      width="100%"
      maxWidth="348.4px"
      borderRadius={5}
      border="1px rgb(47, 51, 54) solid"
      gap={2}
    >
      <Typography variant="h6" fontWeight={1000} px={2} pt={1.5}>
        Trends for you
      </Typography>

      {isFetching && <Typography>Loading...</Typography>}

      {!isFetching && (
        <Stack gap={3}>
          {trends?.slice(0, visibleItems)?.map((trend, index) => (
            <TrendChunk key={index} trend={trend} />
          ))}
        </Stack>
      )}

      <Button
        sx={{
          textTransform: "none",
          color: "var(--twitter-blue-color)",
          justifyContent: "flex-start",
          px: 2,
          py: 1.5,
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "rgb(255, 255, 255, 0.03)",
          },
        }}
        onClick={handleShowMore}
      >
        Show More
      </Button>
    </Stack>
  );
};

export default TrendsContainer;
