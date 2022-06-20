import react, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/ThemeSlice";
import styled, { useTheme } from "styled-components";

import Chart from "./Chart/Chart";
//this is for the bar chart

//apparently you need this for the react crap to work

const MainBox = () => {
  const theme = useTheme();
  //redux grabbing the state of the colors
  const colorPallet = useSelector((state) => state.theming.value);
  //colors
  const mianBoxBackgroundColor = theme?.[colorPallet].mianBoxBackgroundColor;
  const backgroundColor = theme?.[colorPallet].backgroundColor;

  const MainBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${mianBoxBackgroundColor};
  `;

  const Spending = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 20px;
  `;
  const BottomContainer = styled.div`
    display: flex;
    padding-top: 15px;
    justify-content: space-between;
  `;
  const BottomInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;
  const BottomInnerContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0px;
    text-align: right;
  `;

  const BottomText = styled.p`
    font-size: 16px;
    opacity: 60%;
    margin: 0;
  `;
  const BottomAmount = styled.p`
    font-size: 1.7rem;
    margin: 0;
    font-weight: 700;
    text-align: left;
  `;
  const BottomPercent = styled.p`
    font-size: 1rem;
    margin: 0;
    font-weight: 700;
  `;

  return (
    <MainBoxContainer>
      <Spending>Spending - Last 7 days</Spending>
      <Chart />
      <hr
        style={{
          border: "none",
          borderTop: `1px solid ${backgroundColor}`,
          width: "100%",
        }}
      />
      <BottomContainer>
        <BottomInnerContainer>
          <BottomText>Total this month </BottomText>
          <BottomAmount>$478.33</BottomAmount>
        </BottomInnerContainer>

        <BottomInnerContainerRight>
          <BottomPercent>+2.4% </BottomPercent>
          <BottomText>from last month</BottomText>
        </BottomInnerContainerRight>
      </BottomContainer>
    </MainBoxContainer>
  );
};

export default MainBox;
