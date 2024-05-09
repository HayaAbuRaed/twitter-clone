import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import TrendChunk from "./TrendChunk";
import useGetTrends from "./hooks/useGetTrends";
import Loader from "../Loader";

const TrendsContainer = ({ step = 10 }) => {
  const [visibleItems, setVisibleItems] = useState(step);

  const { trends, isFetching } = useGetTrends();

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

      {isFetching && <Loader />}

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
