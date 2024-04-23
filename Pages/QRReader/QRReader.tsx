import { CameraView, Camera } from "expo-camera/next";
import * as Linking from "expo-linking";

import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Button } from "react-native-elements";

import { GeneralComponentsStylesheet } from "../../Stylesheets/GneralComponentsStylesheets";
import { useTheme } from "../../Theme/Index";

const QrReader: React.FC<any> = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<any>([]);
  const { palette } = useTheme();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setData(data);
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
        backgroundColor: palette.mainTint,
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
            borderColor: palette.mainDark,
            alignContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <CameraView
            style={{ height: 300, width: "auto" }}
            barcodeScannerSettings={{
              barcodeTypes: ["qr", "pdf417"],
            }}
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          />
        </View>
      </View>

      {scanned ? (
        <>
          <View
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                right: 0,
                left: 0,
                bottom: 0,
                borderRadius: 10,
                display: "flex",
                backgroundColor: palette.mainUltraLight,
                justifyContent: "space-evenly",
                flexDirection: "column",
                height: 360,
                width: "100%",
                overflow: "visible",
                padding: 20,
              }}
            >
              <Pressable onPress={() => Linking.openURL(data)}>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "SFUIDisplay-Semibold",
                    fontSize: 20,
                  }}
                >
                  This link will take you to:
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: palette.mainLight,
                    fontSize: 20,
                    fontFamily: "SFUIDisplay-Light",
                  }}
                >
                  {data}
                </Text>
              </Pressable>
              <Button
                buttonStyle={[
                  GeneralComponentsStylesheet.buttonMain,
                  {
                    backgroundColor: palette.main,
                  },
                ]}
                title={"Tap to scan again"}
                onPress={() => setScanned(false)}
              />
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default QrReader;
