import { Icon } from "react-native-elements";
import * as Clipboard from "expo-clipboard";

import { useState } from "react";
import { View, Text } from "react-native";
import { useTheme } from "../../Theme/Index";

const ClipboardCopier: React.FC<any> = ({ props }) => {
  const { palette } = useTheme();
  const [copiedText, setCopiedText] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
    setIsCopied(true);
    fetchCopiedText();
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <Icon
        name="content-copy"
        type="material-community"
        color={palette.white}
        onPress={() => copyToClipboard(props)}
      />
      {isCopied && (
        <View
          style={{
            position: "absolute",
            right: 0,
            left: 0,
            bottom: 0,
            borderRadius: 10,
            display: "flex",
            backgroundColor: palette.mainUltraLight,
            justifyContent: "center",
            flexDirection: "column",
            height: 100,
            overflow: "visible",
            paddingLeft: 20,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontFamily: "SFUIDisplay-Semibold",
            }}
          >
            Text copied to clipboard:
          </Text>
          <Text style={{ textAlign: "left", fontFamily: "SFUIDisplay-Light" }}>
            {Object.values(copiedText)}
          </Text>
        </View>
      )}
    </>
  );
};

export default ClipboardCopier;
