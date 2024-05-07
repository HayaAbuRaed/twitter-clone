import React from "react";

const CustomIcon = ({
  dim = "1.65rem",
  color = "var(--font-default-color)",
  pathFactor,
  viewBox = "0 0 24 24",
}) => {
  return (
    <div>
      <svg
        width={dim}
        height={dim}
        viewBox={viewBox}
      >
        <path fill={color} d={pathFactor} />
      </svg>
    </div>
  );
};

export default CustomIcon;
