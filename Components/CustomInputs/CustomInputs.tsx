import { Input } from "react-native-elements";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { main, mainLighter } from "../../Stylesheets/ColorPallete";

type PlaceholderProps = {
  placeholder: string | undefined;
  icon?: any;
};

export const CustomInputs: React.FC<PlaceholderProps> = (props) => {
  return (
    <Input
      inputStyle={{
        color: main,
        padding: 20,
        fontWeight: "500",
      }}
      placeholder={props.placeholder}
      placeholderTextColor={mainLighter}
      inputContainerStyle={GeneralComponentsStylesheet.inputStyle}
      rightIcon={props.placeholder === "password" ? props.icon : null}
    />
  );
};

export default CustomInputs;
