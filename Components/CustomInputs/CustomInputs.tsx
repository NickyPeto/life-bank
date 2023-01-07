import { Input } from "react-native-elements";
import { GeneralComponentsStylesheet } from "../Stylesheets/GneralComponentsStylesheets";

type PlaceholderProps = {
  props: string | undefined;
};

export const CustomInputs: React.FC<PlaceholderProps> = ({ props }) => {
  return (
    <Input
      inputStyle={{
        color: "black",
        padding: 20,
      }}
      placeholder={props}
      inputContainerStyle={GeneralComponentsStylesheet.inputStyle}
    />
  );
};

export default CustomInputs;
