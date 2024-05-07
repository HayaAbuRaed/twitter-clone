import CustomIcon from "../../../../components/CustomIcon";
import pathDs from "./pathDs";

const { location, link, calender } = pathDs;

export const LocationIcon = () => (
  <CustomIcon dim="1.1rem" color="GrayText" pathFactor={location} />
);

export const LinkIcon = () => (
  <CustomIcon dim="1.1rem" color="GrayText" pathFactor={link} />
);

export const CalenderIcon = () => (
  <CustomIcon dim="1.1rem" color="GrayText" pathFactor={calender} />
);
