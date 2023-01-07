import { Input } from "react-native-elements";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { mainLighter } from "../../Stylesheets/ColorPallete";

type PlaceholderProps = {
  placeholder: string | undefined;
  icon?: any;
};

export const CustomInputs: React.FC<PlaceholderProps> = ({
  placeholder,
  icon,
}) => {
  return (
    <Input
      inputStyle={GeneralComponentsStylesheet.inputStyle}
      placeholder={placeholder}
      placeholderTextColor={mainLighter}
      inputContainerStyle={GeneralComponentsStylesheet.inputContainerStyle}
      rightIcon={placeholder === "password" ? icon : null}
    />
  );
};

export default CustomInputs;
