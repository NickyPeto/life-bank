import { createNavigationContainerRef } from "@react-navigation/native";

type RootStackParamList = any;
export const rootNavigationRef =
  createNavigationContainerRef<RootStackParamList>();

export function navigate(name: string, params: string) {
  if (rootNavigationRef.isReady()) {
    rootNavigationRef.current?.navigate<RootStackParamList>(name, params);
  }
}
