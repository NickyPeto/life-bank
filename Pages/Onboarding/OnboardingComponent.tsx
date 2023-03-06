import { View, Text, Image } from "react-native";

import { CustomButton } from "../../Components/Button";
import { OnboardingStylesheet } from "../../Stylesheets/OnboardingStylesheet";
import { useTheme } from "../../Theme/Index";

//FIXME: TYPING
const Onboarding: React.FC<any> = (props) => {
  const { palette } = useTheme();
  return (
    <View
      style={[
        OnboardingStylesheet.container,
        { backgroundColor: palette.main },
      ]}
    >
      <View style={OnboardingStylesheet.imageContainer}>
        <Image
          style={{ width: 250, height: 250 }}
          source={require("../../assets/Images/WALLET.png")}
        />
      </View>

      <View
        style={[
          OnboardingStylesheet.footerContainer,
          { backgroundColor: palette.light },
        ]}
      >
        <Text style={OnboardingStylesheet.header}>Hola!</Text>
        <Text
          style={[
            OnboardingStylesheet.content,
            { backgroundColor: palette.dark },
          ]}
        >
          Ahora Life Bank te permite gestionar tus cuentas bancarias y controlar
          tus ahorros a traves de tu celular.
        </Text>
        <Text
          style={[
            OnboardingStylesheet.content,
            { backgroundColor: palette.dark },
          ]}
        >
          Podras invertir, crear redes de contactos, pagar tus servicios y mas.
        </Text>
        <Text
          style={[
            OnboardingStylesheet.content,
            { backgroundColor: palette.dark },
          ]}
        >
          Lo mas importante es que no hay limites, puedes hacerlo desde y hacia
          cualquier parte del mundo!
        </Text>
        <View style={OnboardingStylesheet.buttonWrapper}>
          <CustomButton title="Comenzar" press={() => alert("hola")} />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
