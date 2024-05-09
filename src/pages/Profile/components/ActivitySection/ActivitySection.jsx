import { TabContext, TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { useState } from "react";
import PostsPanel from "./PostsPanel";
import { TABS } from "./constants";
import { StyledTab, StyledTabList } from "./styled";

const ActivitySection = () => {
  const [value, setValue] = useState("posts");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: "1px rgb(47, 51, 54) solid",
        }}
      >
        <StyledTabList onChange={handleChange} variant="fullWidth">
          {TABS.map((tab) => (
            <StyledTab key={tab.id} label={tab.label} value={tab.value} />
          ))}
        </StyledTabList>
      </Box>

      <TabPanel value="posts" sx={{ p: 0 }}>
        <PostsPanel />
      </TabPanel>

      <TabPanel value="replies" sx={{ p: 0 }}>
        <PostsPanel />
      </TabPanel>

      <TabPanel value="media">Media...</TabPanel>

      <TabPanel value="likes">Likes...</TabPanel>
    </TabContext>
  );
};

export default ActivitySection;
