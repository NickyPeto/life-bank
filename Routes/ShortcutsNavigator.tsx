import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bills from "../Pages/Bills/Bills";
import Investments from "../Pages/Investments/Investments";
import QrReader from "../Pages/QRReader/QRReader";
import Transactions from "../Pages/Transactions/Transactions";
import { light, main } from "../Stylesheets/ColorPallete";

export default function ShortcutsNavigator() {
  const { Screen, Navigator } = createNativeStackNavigator<any>();
  return (
    <Navigator initialRouteName="ShortcutsNav">
      <Screen
        options={{
          headerShown: true,
          headerTintColor: light,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: main },
        }}
        name="Transactions"
        component={Transactions}
      />
      <Screen
        options={{
          headerShown: true,
          headerTintColor: light,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: main },
        }}
        name="Bills"
        component={Bills}
      />
      <Screen
        options={{
          headerShown: true,
          headerTintColor: light,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: main },
        }}
        name="Investments"
        component={Investments}
      />
      <Screen
        options={{
          headerShown: true,
          headerTintColor: light,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: main },
        }}
        name="QR"
        component={QrReader}
      />
    </Navigator>
  );
}
