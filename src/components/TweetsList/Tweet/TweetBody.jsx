import React from "react";
import Typography from "@mui/material/Typography";
import "./tweet.css";
import { formatBody } from "./utils";

function TweetBody({ data }) {
  const { lang } = data;

  return (
    <Typography
      fontSize={"0.94rem"}
      textAlign="left"
      lineHeight={1.6}
      component="div"
      sx={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      <div dangerouslySetInnerHTML={formatBody(data)} />
    </Typography>
  );
}

export default TweetBody;
