import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled,createTheme } from "@mui/system";

import { useTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../features/ThemeSlice";


function SelectTheme(params) {

  const [age, setAge] = React.useState("");
  const theme = useTheme();

  const colorPallet = useSelector((state) => state.theming.value);
  const dispatch = useDispatch()

const color = theme.[colorPallet].mianBoxTextColor
  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(selectTheme(event.target.value))
  };

const StyledForm = styled(FormControl)`
border:none;
`;

  const StyledSelect = styled(Select)`
    color: ${theme.[colorPallet].mianBoxTextColor};

  `;
  const customTheme = createTheme({
    pallet:{
      mine:{
        main: "green"
      }
    }
  })

  console.log(theme);
  console.log(color);

  React.useEffect(()=>{

  },[])

  return (
    <div>
      <StyledForm sx={{ m: 1, minWidth: 120}} >
        <InputLabel id="demo-simple-select-autowidth-label">Select Theme</InputLabel>
        <StyledSelect
          value={age}
          onChange={handleChange}
          autoWidth
          label="Select Theme"
          defaultValue={colorPallet}

        >
          <MenuItem value={"primary"} >primary</MenuItem>
          <MenuItem value={"madness"}>madness</MenuItem>
          <MenuItem value={"neatColor"}>neatColor</MenuItem>

        </StyledSelect>
      </StyledForm>
    </div>
  );
}

export default SelectTheme;
