import { Button } from "react-native-elements";
import Form from "./Form";

const FormSheetComponent = ({ props }: any) => {
  return (
    <>
      <Button>{props.title}</Button>
      <Form {...props} />
    </>
  );
};

export default FormSheetComponent;
