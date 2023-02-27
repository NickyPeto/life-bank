import { View, Text } from "react-native";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { FormModel } from "../../Models/FormModels";
import { main } from "../../Stylesheets/ColorPallete";
import CustomInputs from "../CustomInputs/CustomInputs";

const Form: React.FC<FormModel> = ({ placeholders, extraData }) => {
  const inputPlaceholders = Object.values(placeholders);

  return (
    <View style={GeneralComponentsStylesheet.formContainer}>
      {inputPlaceholders.map((values, index) => {
        console.log(typeof values);
        return (
          <View key={values}>
            <CustomInputs
              placeholder={values}
              icon={{
                name: "eye-off-outline",
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
    </View>
  );
};

export default Form;
