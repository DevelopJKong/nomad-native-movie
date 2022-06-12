import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import {darkTheme ,lightTheme } from "./styled";
import Root from "./navigation/Root";
export default function App() {
  const isDark = useColorScheme() !== "dark";

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
