import { View, Text, Image } from "react-native";
import { dark, light, main } from "../../Stylesheets/ColorPallete";
import { CustomButton } from "../../Components/Button";
import { LoginStylesheet } from "../../Stylesheets/LoginStylesheet";

const Onboarding: React.FC<any> = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: main,
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          alignSelf: "center",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Image
          style={{ width: 250, height: 250 }}
          source={require("../../assets/Images/WALLET.png")}
        />
      </View>

      <View
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: light,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: main,
            fontWeight: "bold",
            textAlign: "center",
            margin: 15,
          }}
        >
          Hola!
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: dark,
            textAlign: "left",
            margin: 10,
          }}
        >
          Ahora Life Bank te permite gestionar tus cuentas bancarias y controlar
          tus ahorros a traves de tu celular.
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: dark,
            textAlign: "left",
            margin: 10,
          }}
        >
          Podras invertir, crear redes de contactos, pagar tus servicios y mas.
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: dark,
            textAlign: "left",
            margin: 10,
          }}
        >
          Lo mas importante es que no hay limites, puedes hacerlo desde y hacia
          cualquier parte del mundo!
        </Text>
        <View
          style={{
            display: "flex",
            marginTop: 30,
            flex: 1,
          }}
        >
          <CustomButton title="Comenzar" press={() => alert("hola")} />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
