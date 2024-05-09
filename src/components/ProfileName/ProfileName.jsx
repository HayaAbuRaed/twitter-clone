import { Typography, Stack, Box } from "@mui/material";
import CustomIcon from "../CustomIcon";
import { VERIFIED_ICON_PATH } from "./constants";

const ProfileName = ({ name, isVerified, size = "1.35rem" }) => {
  return (
    <Stack flexDirection="row" alignItems="center" gap={0.25}>
      <Typography variant="h3" fontSize={size} fontWeight={700}>
        {name}
      </Typography>

      {isVerified && (
        <Box maxHeight={`calc(${size} + 4px)`}>
          <CustomIcon
            pathFactor={VERIFIED_ICON_PATH}
            color="var(--twitter-blue-color)"
            dim={size}
            viewBox="0 0 24 19"
          />
        </Box>
      )}
    </Stack>
  );
};

export default ProfileName;
