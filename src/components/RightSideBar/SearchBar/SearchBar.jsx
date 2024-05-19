import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const SearchBar = () => {
  return (
    <Box width="100%" position="sticky" top={0} sx={{ backgroundColor: "black" }} p={0.25}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
};

export default SearchBar;
