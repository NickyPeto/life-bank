import React from "react";
import { useFonts } from "expo-font";

import AppNavigator from "./Routes/AppNavigator";
import { ThemeProvider } from "./Theme/Index";
import { Provider } from "react-redux";
import store from "./Redux/RootState";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFUIDisplay-Black": require("./assets/font/SFUIDisplay-Black.otf"),
    "SFUIDisplay-Bold": require("./assets/font/SFUIDisplay-Bold.ttf"),
    "SFUIDisplay-Heavy": require("./assets/font/SFUIDisplay-Heavy.otf"),
    "SFUIDisplay-Light": require("./assets/font/SFUIDisplay-Light.ttf"),
    "SFUIDisplay-Medium": require("./assets/font/SFUIDisplay-Medium.otf"),
    "SFUIDisplay-Semibold": require("./assets/font/SFUIDisplay-Semibold.otf"),
  });
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}
