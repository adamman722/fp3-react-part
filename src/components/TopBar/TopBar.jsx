import react, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/ThemeSlice";
import styled, { useTheme } from "styled-components";

function TopBar() {
  const colorPallet = useSelector((state) => state.theming.value);
  const theme = useTheme();

  const SurroundingBox = styled.div`
    display: flex;
    max-width: 300px;
    height: 100%;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    color: ${theme?.[colorPallet].topBarTextColor};
    background-color: ${theme?.[colorPallet].topBarBackgroundColor};
    justify-content: space-between;
  `;
  // still need to add some dynamic color styles
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const BalanceText = styled.p`
    font-size: 1rem;
    margin: 0;
  `;
  const BalanceAmount = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.6px;
    padding-top: 10px;
    margin: 0;
  `;

  const CircleContiner = styled.div`
    display: flex;
    align-items: center;
  `;

  const CircleOutline = styled.div`
    border: 2px solid white;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin-right: -20px;
    z-index: 2;
  `;

  const CircleFull = styled.div`
    border: 1px solid black;
    background-color: black;
    border-radius: 100%;
    width: 40px;
    height: 40px;
  `;
  return (
    <SurroundingBox>
      <TextContainer>
        <BalanceText> My balance </BalanceText>
        <BalanceAmount>$921.48</BalanceAmount>
      </TextContainer>
      <CircleContiner>
        <CircleOutline></CircleOutline>
        <CircleFull></CircleFull>
      </CircleContiner>
    </SurroundingBox>
  );
}

export default TopBar;
