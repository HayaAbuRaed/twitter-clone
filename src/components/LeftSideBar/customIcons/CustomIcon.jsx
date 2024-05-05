import React from "react";

const CustomIcon = ({ pathFactor }) => {
  return (
    <div>
      <svg width="1.65rem" height="1.65rem" viewBox="0 0 24 24">
        <path fill="var(--font-default-color)" d={pathFactor} />
      </svg>
    </div>
  );
};

export default CustomIcon;
