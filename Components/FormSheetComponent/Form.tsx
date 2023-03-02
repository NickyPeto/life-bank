import { View, Text, ScrollView, StatusBar } from "react-native";

import { FormModel } from "../../Models/FormModels";
import { light, main } from "../../Stylesheets/ColorPallete";
import CustomInputs from "../CustomInputs/CustomInputs";

const Form: React.FC<FormModel> = ({ placeholders, extraData }) => {
  const inputPlaceholders = Object.values(placeholders);

  //TODO: Move styles to stylesheeyt

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: light,
      }}
      contentContainerStyle={{
        paddingVertical: 60,
        justifyContent: "center",
      }}
    >
      {inputPlaceholders.map((values) => {
        return (
          <View key={values}>
            <CustomInputs
              placeholder={values}
              icon={{
                type: "ionicon",
                color: main,
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
