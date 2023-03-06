import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bills from "../Pages/Bills/Bills";
import Investments from "../Pages/Investments/Investments";
import QrReader from "../Pages/QRReader/QRReader";
import Transactions from "../Pages/Transactions/Transactions";
import { useTheme } from "../Theme/Index";

export default function ShortcutsNavigator() {
  const { Screen, Navigator } = createNativeStackNavigator<any>();
  const { palette } = useTheme();
  return (
    <Navigator initialRouteName="ShortcutsNav">
      <Screen
        options={{
          headerShown: true,
          headerTintColor: palette.white,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: palette.bottomTab },
        }}
        name="Transactions"
        component={Transactions}
      />
      <Screen
        options={{
          headerShown: true,
          headerTintColor: palette.white,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: palette.bottomTab },
        }}
        name="Bills"
        component={Bills}
      />
      <Screen
        options={{
          headerShown: true,
          headerTintColor: palette.white,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: palette.bottomTab },
        }}
        name="Investments"
        component={Investments}
      />
      <Screen
        options={{
          headerShown: true,
          headerTintColor: palette.white,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: palette.bottomTab },
        }}
        name="QR"
        component={QrReader}
      />
    </Navigator>
  );
}
