import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";

import ListComponent from "../../Components/ListComponent/ListComponent";
import ShortcutsTab from "../../Components/ShortcutsTab/ShortcutsTab";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { ShortcutIconsProps } from "../../Models/SharedProps";
import { useTheme } from "../../Theme/Index";
import axios from "axios";

const Iconsets: ShortcutIconsProps[] = [
  {
    name: "phone-android",
    type: "materialicons",
    onPress: () => alert("Phone"),
    title: "Phone",
  },
  {
    name: "lightbulb-outline",
    type: "materialicons",
    onPress: () => alert("Fire"),
    title: "Electricity",
  },
  {
    name: "gripfire",
    type: "font-awesome-5",
    onPress: () => alert("Fire"),
    title: "Gas",
  },
  {
    name: "newspaper-outline",
    type: "ionicon",
    onPress: () => alert("Fire"),
    title: "Insurance",
  },
  {
    name: "water-outline",
    type: "ionicon",
    onPress: () => alert("Phone"),
    title: "Water",
  },
  {
    name: "md-bus-outline",
    type: "ionicon",
    onPress: () => alert("Fire"),
    title: "Transport",
  },
  {
    name: "chrome",
    type: "feather",
    onPress: () => alert("Fire"),
    title: "Internet",
  },
  {
    name: "television",
    type: "material-community",
    onPress: () => alert("Fire"),
    title: "TV",
  },
];

const Bills: React.FC<any> = () => {
  const [row, setRow] = useState<ShortcutIconsProps[]>([]);
  const [dataset, setDataset] = useState<any>([]);
  const { palette } = useTheme();

  const testFetch = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/bills`);
      setDataset(res.data.transactions);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    testFetch();
    setRow(Iconsets);
  }, []);

  return (
    <View
      style={[
        GeneralComponentsStylesheet.container,
        { backgroundColor: palette.mainTint },
      ]}
    >
      <View
        style={{
          display: "flex",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{ display: "flex", justifyContent: "flex-start" }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "left",
              color: palette.contrast,
              fontFamily: "SFUIDisplay-Bold",
              paddingLeft: 10,
              paddingBottom: 10,
            }}
          >
            Recent payments
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
          }}
        >
          {row.length > 0 &&
            Array.from({ length: Math.ceil(row.length / 4) }, (_, i) => (
              <View
                style={{ flexDirection: "row", justifyContent: "center" }}
                key={i}
              >
                {row.slice(i * 4, (i + 1) * 4).map((icon, j) => (
                  <View
                    style={GeneralComponentsStylesheet.shortcutTabContainer}
                    key={j}
                  >
                    <ShortcutsTab {...icon} />
                  </View>
                ))}
              </View>
            ))}
        </View>
      </View>

      <View style={{ display: "flex", flex: 1 }}>
        <ListComponent
          props={dataset}
          hasHeader={true}
          header={"Bills history"}
        />
      </View>
    </View>
  );
};

export default Bills;
