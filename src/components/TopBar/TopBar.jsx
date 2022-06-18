import react, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/ThemeSlice";
import styled, { useTheme } from "styled-components";

function TopBar() {
  const colorPallet = useSelector((state) => state.theming.value);
  const theme = useTheme();

  const SurroundingBox = styled.div`
    display: flex;
    width: 50%;
    margin: auto;
    border-radius: 10px;
    color: ${theme?.[colorPallet].topBarTextColor};
    background-color: ${theme?.[colorPallet].topBarBackgroundColor};
  `;

  const CircleOutline = styled.div`
    border: 1px solid white;
    border-radius: 100%;
    width: 10%;
    height: 70px;
  `;

  return (
    <SurroundingBox>
      <div>
        <h5> My balance </h5>
        <h1>$921.48</h1>
      </div>
      <CircleOutline></CircleOutline>
    </SurroundingBox>
  );
}

export default TopBar;
