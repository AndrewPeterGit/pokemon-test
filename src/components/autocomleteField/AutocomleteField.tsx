import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

type Option = {
  name: string;
  url: string;
};

interface IAutocomplete {
  label: string;
  name: string;
  options: Option[] | any[];
}

export const AutocompleteField: React.FC<IAutocomplete> = (props) => {
  const navigate = useNavigate();

  const renderOption = (props: any, option: Option) => {
    const filterChecker = (id: string) => {
      if (id.includes("generation")) return "generation";
      if (id.includes("type")) return "type";
      if (id.includes("region")) return "region";
    };

    return (
      <li {...props}>
        <div
          onClick={() => {
            navigate(`/${filterChecker(props.id)}/${option.name}`);
          }}
          style={{ width: "100%", justifyContent: "left" }}
        >
          <>{option.name}</>
        </div>
      </li>
    );
  };

  return (
    <Autocomplete
      id={props.name}
      sx={{ width: "220px" }}
      renderOption={renderOption}
      getOptionLabel={(option) => option.name}
      options={props.options}
      ListboxProps={{
        sx: { fontFamily: "Rubik Doodle Shadow, sans-serif" },
      }}
      clearOnBlur={false}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          variant="outlined"
          sx={{
            backgroundColor: "#e2e4e8",
            borderRadius: "25px",
            fontFamily: "Rubik Doodle Shadow, sans-serif",
            border: "1px solid black",
          }}
          InputLabelProps={{
            sx: {
              fontFamily: "Rubik Doodle Shadow, sans-serif",
              "&.Mui-focused": {
                color: "transparent",
              },
              "&.MuiInputLabel-shrink": {
                top: "-8px",
                left: "-12px",
                color: "#fff",
              },
            },
          }}
          InputProps={{
            ...params.InputProps,
            sx: {
              fontFamily: "Rubik Doodle Shadow, sans-serif",

              fieldset: {
                border: "none",
              },
            },
            endAdornment: (
              <React.Fragment>{params.InputProps.endAdornment}</React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};
