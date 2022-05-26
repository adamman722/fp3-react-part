import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/system";
import { useTheme } from "styled-components";

function SelectTheme(params) {
  const customSelect = styled(Select)``;
  const [age, setAge] = React.useState("");
  const theme = useTheme();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const StyledSelect = styled(Select)`
    color: ${theme.primary.backgroundColor};
  `;

  console.log(theme);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </StyledSelect>
      </FormControl>
    </div>
  );
}

export default SelectTheme;
