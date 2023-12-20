import { Button, Container, Grid, Paper, styled } from "@mui/material";
import React, { useState } from "react";
import { GridDigitButton } from "./GridDigitButton";
import { GridOprtButton } from "./GridOprtButton";

const OutputContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperatoin] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const toggleSign = () => {
    setCurrentValue((prevValue) => {
      return prevValue.startsWith("-") ? prevValue.slice(1) : `-${prevValue}`;
    });
  };

  const selectOprt = (operation: string) => {
    if (prevValue) {
      const value = calculation();
      setCurrentValue(`${value}`);
      setPrevValue(`${value}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperatoin(operation);
    setOverwrite(true);
  };

  const calculation = () => {
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;

    switch (operation) {
      case "/":
        result = prev / curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
    }
    return result;
  };

  const equals = () => {
    const value = calculation();
    setCurrentValue(`${value}`);
    setOperatoin("");
    setPrevValue("");
    setOverwrite(true);
  };

  const claer = () => {
    setCurrentValue("0");
    setOperatoin("");
    setPrevValue("");
    setOverwrite(true);
  };

  // const del = () => {
  //   setCurrentValue("0");
  //   setOverwrite(true);
  // };

  const percent = () => {
    const current = parseFloat(currentValue);
    setCurrentValue((current / 100).toString());
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(",") && digit === ",") return;
    if (overwrite && digit !== ",") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  return (
    <Container maxWidth="sm">
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridOprtButton
              operation={"AC"}
              selectOprt={claer}
              selectedOteration={operation}
            />
            <GridOprtButton
              operation={"-/+"}
              selectOprt={toggleSign}
              selectedOteration={operation}
            />
            <GridOprtButton
              operation={"%"}
              selectOprt={percent}
              selectedOteration={operation}
            />
            <GridOprtButton
              operation={"/"}
              selectOprt={selectOprt}
              selectedOteration={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit="7" enterDigit={setDigit} xs={3} />
            <GridDigitButton digit="8" enterDigit={setDigit} xs={3} />
            <GridDigitButton digit="9" enterDigit={setDigit} xs={3} />
            <GridOprtButton
              operation={"*"}
              selectOprt={selectOprt}
              selectedOteration={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit="4" enterDigit={setDigit} xs={3} />
            <GridDigitButton digit="5" enterDigit={setDigit} xs={3} />
            <GridDigitButton digit="6" enterDigit={setDigit} xs={3} />
            <GridOprtButton
              operation={"+"}
              selectOprt={selectOprt}
              selectedOteration={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit="1" enterDigit={setDigit} xs={3} />
            <GridDigitButton digit="2" enterDigit={setDigit} xs={3} />
            <GridDigitButton digit="3" enterDigit={setDigit} xs={3} />
            <GridOprtButton
              operation={"-"}
              selectOprt={selectOprt}
              selectedOteration={operation}
            />
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit="0" enterDigit={setDigit} xs={6} />
            <GridDigitButton digit="," enterDigit={setDigit} xs={3} />
            <GridOprtButton
              operation={"="}
              selectOprt={equals}
              selectedOteration={operation}
            />
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
