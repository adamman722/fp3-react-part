import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled as MuiStyled } from "@mui/material/styles";
import { useTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../features/ThemeSlice";

function SelectTheme(params) {
  const [themes, setTheme] = React.useState("");

  const theme = useTheme();

  const colorPallet = useSelector((state) => state.theming.value);
  const dispatch = useDispatch();

  const color = theme?.[colorPallet].mianBoxTextColor;

  const handleChange = (event) => {
    const { target } = event;
    console.log(target.value);
    setTheme(target.value);
    dispatch(selectTheme(target.value));
  };

  const CustomFormControl = MuiStyled(FormControl)`
& .Mui-focused{
color: ${theme?.[colorPallet].topBarTextColor}
},

  & .Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: ${theme?.[colorPallet].mianBoxBackgroundColor}
  }
`;

  console.log(theme);
  console.log(color);

  React.useEffect(() => {}, []);

  return (
    <div>
      <CustomFormControl sx={{ m: 0, minWidth: 140 }} size="small">
        <InputLabel>Select Theme</InputLabel>
        <Select
          value={colorPallet}
          onChange={handleChange}
          autoWidth
          label="Select Theme"
          defaultValue={colorPallet}
        >
          <MenuItem value={"primary"}>primary</MenuItem>
          <MenuItem value={"madness"}>madness</MenuItem>
          <MenuItem value={"neatColor"}>neatColor</MenuItem>
          <MenuItem value={"pastel"}>pastel</MenuItem>
        </Select>
      </CustomFormControl>
    </div>
  );
}

export default SelectTheme;
