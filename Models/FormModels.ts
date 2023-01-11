//FIXME: arreglar herencia de interfaces

export interface LoginModel {
  email?: string;
  password: string;
}

export interface RegisterModel {
  name: string;
  surname: string;
  email?: string;
  password: string;
}

export interface FormModel {
  placeholders: RegisterModel | LoginModel;
  extraData?: boolean;
}
