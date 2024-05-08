import useMuiMediaQuery from "@mui/material/useMediaQuery";

const useMediaQuery = () => {
  const isLeftSideBarExpanded = !useMuiMediaQuery("(max-width:1280px)");

  return { isLeftSideBarExpanded };
};

export default useMediaQuery;
