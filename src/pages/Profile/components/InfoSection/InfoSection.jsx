import { Link, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { CalenderIcon, LinkIcon, LocationIcon } from "../customIcons";
import Banner from "./Banner";
import { formatNumber } from "../../utils";
import ProfileName from "../../../../components/ProfileName";

const ContainerTypography = styled(Typography)(() => ({
  fontFamily: "TwitterChirp",
  display: "flex",
  flexDirection: "row",
  gap: "0.25rem",
  variant: "container",
}));

const HighlightedTypography = styled(Typography)(() => ({
  color: "var(--font-default-color)",
  fontWeight: 600,
  fontSize: "0.94rem",
}));

const InfoSection = ({ data }) => {
  const {
    name,
    screen_name,
    description,
    location,
    url,
    created_at,
    followers_count,
    friends_count,
    profile_banner_url,
    profile_image_url_https,
    is_blue_verified: isVerified,
  } = data;

  const joinedDate = new Date(created_at).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <Stack>
      <Stack>
        <Banner
          coverPic={profile_banner_url}
          profilePic={profile_image_url_https}
        />
      </Stack>

      <Stack px={2} gap={1.5}>
        <Stack>
          <ProfileName name={name} isVerified={isVerified} />

          <Typography color="GrayText">@{screen_name}</Typography>
        </Stack>

        <Typography>{description}</Typography>

        <Stack flexDirection="row" gap={1.5} color="GrayText">
          {location && (
            <ContainerTypography variant="container">
              <LocationIcon />
              {location}
            </ContainerTypography>
          )}

          {url && (
            <Link
              href={url}
              target="_blank"
              display="flex"
              flexDirection="row"
              gap={0.5}
              sx={{
                textDecoration: "none",
                color: "var(--twitter-blue-color)",
              }}
            >
              <LinkIcon />
              {url}
            </Link>
          )}

          <ContainerTypography variant="container">
            <CalenderIcon />
            Joined {joinedDate}
          </ContainerTypography>
        </Stack>

        <Stack flexDirection="row" gap={2.5} color="GrayText">
          <ContainerTypography variant="container" alignItems="center">
            <HighlightedTypography>
              {formatNumber(friends_count)}
            </HighlightedTypography>
            Following
          </ContainerTypography>

          <ContainerTypography variant="container" alignItems="center">
            <HighlightedTypography>
              {formatNumber(followers_count)}
            </HighlightedTypography>
            Followers
          </ContainerTypography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default InfoSection;
