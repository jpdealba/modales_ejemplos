import IconButton from "@mui/material/IconButton";

const BrekenIconButton = ({ Icon, handleClick, classes, color }) => {
  return (
    <div
      className={` rounded-xl transition-all duration-100 hover:brightness-75`}
    >
      <IconButton
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: color ? color : "#DF854F",
          "&:hover": {
            backgroundColor: color ? color : "#DF854F" + " !important",
          },
          ...classes,
        }}
      >
        <Icon className="text-white" />
      </IconButton>
    </div>
  );
};

export default BrekenIconButton;
