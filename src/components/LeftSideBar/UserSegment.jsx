import MoreIcon from "@mui/icons-material/MoreHorizOutlined";
import { Avatar, Stack, Typography } from "@mui/material";

const UserSegment = () => {
  return (
    <Stack
      sx={{ mt: "auto", py: 2.5, px: 1.5 }}
      flexDirection="row"
      alignItems="center"
      gap={1}
    >
      <Avatar alt="Anonymous" src="" />

      <Stack flexDirection="column" fontSize={"0.9rem"}>
        <Typography fontSize={"0.93rem"} fontWeight={700}>
          User Name
        </Typography>
        <Typography fontSize={"0.9rem"} color="GrayText" fontWeight={400}>
          @userName
        </Typography>
      </Stack>

      <MoreIcon sx={{ ml: "auto" }} />
    </Stack>
  );
};

export default UserSegment;
