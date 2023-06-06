import Button from "@mui/material/Button";

const BrekenButton = ({
  title,
  Icon,
  handleClick,
  classes,
  color,
  variant,
  textColor,
}) => {
  return (
    <Button
      variant={variant}
      color={color ? color : "secondary"}
      onClick={handleClick}
      style={{ textTransform: "none" }}
      className={`transition-all duration-100 hover:brightness-75`}
      sx={{
        ...classes,
      }}
      startIcon={
        Icon ? (
          <Icon
            className={`${
              variant != "text"
                ? "text-white"
                : textColor
                ? "text-[" + textColor + "]"
                : "text-[#DF854F]"
            }`}
          />
        ) : null
      }
    >
      {title && (
        <h1
          className={`${
            variant != "text"
              ? "text-white"
              : textColor
              ? "text-[" + textColor + "]"
              : "text-[#DF854F]"
          }`}
        >
          {title}
        </h1>
      )}
    </Button>
  );
};

export default BrekenButton;
