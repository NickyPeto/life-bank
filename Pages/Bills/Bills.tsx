import { View, Text } from "react-native";

const Bills: React.FC<any> = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "cyan",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Bills
      </Text>
    </View>
  );
};

export default Bills;
