import React from "react";
import { Button } from "react-native-elements";
import { GeneralComponentsStylesheet } from "./Stylesheets/GneralComponentsStylesheets";

export const MainButton = ({ title }) => {
  return (
    <>
      <Button
        title={title}
        buttonStyle={GeneralComponentsStylesheet.buttonMain}
      />
    </>
  );
};
