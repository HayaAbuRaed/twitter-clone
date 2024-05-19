const customMixins = {
  niceScroll: (width = 10) => {
    return {
      overflowY: "auto",
      transition: "all 0.3s ease",
      "&:hover": {
        transition: "all 0.3s ease",
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(225,225,225,0.15)",
        },
      },
      "&::-webkit-scrollbar": {
        height: 10 /* height of horizontal scrollbar */,
        width /* width of vertical scrollbar */,
        position: "absolute",
        right: 0,
        backgroundColor: "rgba(225,225,225,0)",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(225,225,225,0)",
        backgroundClip: "padding-box",
        border: "2px solid rgba(255,255,255,0)",
        borderRadius: 2,
        minHeight: 4,
      },
      "&::-webkit-scrollbar-thumb:hover": {
        borderWidth: "20px",
      },
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      },
      "&::-webkit-scrollbar-track:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
    };
  },
};

export default customMixins;
