import { TextField } from "@mui/material";
import style from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

export default function Header() {
  const navigate = useNavigate();
  const springs = useSpring({
    from: { y: -200 },
    to: { y: 0 },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputElement = event.currentTarget.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    if (inputElement?.value) {
      navigate(`pokemon/${inputElement?.value}`);
      inputElement.value = "";
    }
  };
  return (
    <div className={style.headerBlock}>
      <animated.div
        className={style.headerBlock}
        style={{
          ...springs,
        }}
      >
        <NavLink to="/" className={style.headerLink} />
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="Search pokemon..."
            name="name"
            id="name"
            sx={{
              fontFamily: "Rubik Doodle Shadow, sans-serif",
              backgroundColor: "#e2e4e8",
              borderRadius: "25px",
              border: "1px solid black",
            }}
            InputLabelProps={{
              sx: {
                color: "#003566",
                textTransform: "capitalize",
              },
            }}
            InputProps={{
              sx: {
                fontFamily: "Rubik Doodle Shadow, sans-serif",
                fieldset: {
                  border: "none",
                },

                "&:hover fieldset": {
                  border: "none",
                  borderRadius: 0,
                },
                "&:focus-within fieldset, &:focus-visible fieldset": {
                  border: "none",
                },
              },
            }}
            inputProps={{
              sx: {
                color: "#000",
                paddingLeft: "15px",
                fontSize: "20px",
                padding: "10px 25px",
              },
            }}
          />
        </form>
      </animated.div>
    </div>
  );
}
