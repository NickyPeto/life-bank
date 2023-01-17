import { View, Text } from "react-native";

const Investments: React.FC<any> = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Investments
      </Text>
    </View>
  );
};

export default Investments;
