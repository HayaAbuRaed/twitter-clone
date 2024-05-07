import { Typography, Stack, Box } from "@mui/material";
import CustomIcon from "../CustomIcon";
import { VERIFIED_ICON_PATH } from "./constants";

const ProfileName = ({ name, isVerified }) => {
  return (
    <Stack flexDirection="row" alignItems="flex-end" gap={0.25}>
      <Typography variant="h3" fontSize="1.35rem" fontWeight={700}>
        {name}
      </Typography>

      {isVerified && (
        <Box>
          <CustomIcon
            pathFactor={VERIFIED_ICON_PATH}
            color="var(--twitter-blue-color)"
            dim="1.35rem"
            viewBox="0 0 24 19"
          />
        </Box>
      )}
    </Stack>
  );
};

export default ProfileName;
