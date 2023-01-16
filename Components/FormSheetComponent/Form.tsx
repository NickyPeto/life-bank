import { View, Text } from "react-native";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { FormModel } from "../../Models/FormModels";
import { main } from "../../Stylesheets/ColorPallete";
import CustomInputs from "../CustomInputs/CustomInputs";

const Form: React.FC<FormModel> = ({ placeholders, extraData }) => {
  //FIXME: buscar un nombre mejor.
  const array = Object.keys(placeholders);

  return (
    <View style={GeneralComponentsStylesheet.formContainer}>
      {array.map((values) => {
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
