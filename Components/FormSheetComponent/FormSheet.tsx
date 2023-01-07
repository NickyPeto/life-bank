import Form from "./Form";
import { FormModel } from "../../Models/FormModels";
import TabComponent from "../TabsComponent/TabComponent";
import { useState } from "react";

const FormSheetComponent: React.FC<FormModel> = ({ props }) => {
  const [login, setLogin] = useState<boolean>(true);

  function toggleLogin() {
    setLogin(!login);
  }

  return (
    <>
      <TabComponent />
      <Form props={props} />
    </>
  );
};

export default FormSheetComponent;
