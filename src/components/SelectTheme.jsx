import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/system";
import { useTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../features/ThemeSlice";

function SelectTheme(params) {
  const customSelect = styled(Select)``;
  const [age, setAge] = React.useState("");
  const theme = useTheme();

  const count = useSelector((state) => state.theming.value);
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(selectTheme(event.target.value))
  };

  const StyledSelect = styled(Select)`
    color: ${theme.[count].mianBoxTextColor};
  `;

  console.log(theme);
  console.log(theme.[count].mianBoxTextColor);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 90 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select Theme</InputLabel>
        <StyledSelect
          value={age}
          onChange={handleChange}
          autoWidth
          label="Select Theme"
        >
          <MenuItem value={"madness"}>madness</MenuItem>
          <MenuItem value={"primary"}>primary</MenuItem>
          <MenuItem value={"neatColor"}>neatColor</MenuItem>

        </StyledSelect>
      </FormControl>
    </div>
  );
}

export default SelectTheme;
