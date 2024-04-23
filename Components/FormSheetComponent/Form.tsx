import { View, Text, ScrollView, StatusBar } from "react-native";

import CustomInputs from "../CustomInputs/CustomInputs";
import { FormModel } from "../../Models/FormModels";
import { useTheme } from "../../Theme/Index";

const Form: React.FC<FormModel> = ({ placeholders, extraData }) => {
  const inputPlaceholders = Object.values(placeholders);
  const { palette } = useTheme();
  //TODO: Move styles to stylesheeyt

  //TODO: Move styles to stylesheeyt

  return (
    <ScrollView
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: palette.mainTint,
        display: "flex",
      }}
      contentContainerStyle={{
        justifyContent: "center",
      }}
    >
      {inputPlaceholders.map((values) => {
        return (
          <View
            key={values}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CustomInputs
              placeholder={values}
              icon={{
                type: "ionicon",
                color: palette.main,
                marginRight: 20,
              }}
            />
          </View>
        );
      })}
      {extraData && (
        <Text
          style={{
            textAlign: "right",
            paddingRight: 20,
            marginBottom: 20,
            opacity: 0.4,
            fontWeight: "500",
          }}
        >
          Forgot your password?
        </Text>
      )}
    </ScrollView>
  );
};

export default Form;
