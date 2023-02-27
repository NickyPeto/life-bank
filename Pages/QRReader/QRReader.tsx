import { Link } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { mainDark } from "../../Stylesheets/ColorPallete";
import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";

const QrReader: React.FC<any> = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    alert(
      `Bar code with type ${type} and data ${(
        <Link to={`https://${data}`}>Got to {data}</Link>
      )} has been scanned!`
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: 10,
            borderWidth: 18,
            borderColor: mainDark,
            alignContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <BarCodeScanner
            style={{ height: 300, width: "auto" }}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          />
        </View>
      </View>

      {scanned ? (
        <>
          <View
            style={{
              display: "flex",
              alignContent: "flex-end",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Button
              buttonStyle={GeneralComponentsStylesheet.buttonMain}
              title={"Tap to Scan"}
              onPress={() => setScanned(false)}
            />
          </View>
        </>
      ) : null}
    </View>
  );
};

export default QrReader;
