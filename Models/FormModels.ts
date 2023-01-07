export interface FormModel {
  //This is optional until we have the logic finished
  props?: {
    login: {
      email: string;
      password: string;
    };
    register: {
      name: string;
      surname: string;
      email: string;
      password: string;
    };
  };
}
