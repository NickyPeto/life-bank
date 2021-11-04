import { createNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../Routes/AppNavigator";

export const rootNavigationRef =
  createNavigationContainerRef<RootStackParamList>();

export function navigate(name: any, params: any) {
  if (rootNavigationRef.isReady()) {
    rootNavigationRef.current?.navigate<keyof RootStackParamList>(name, params);
  }
}
