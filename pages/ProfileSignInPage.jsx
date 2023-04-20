import { Image, View } from "react-native";
import {CustomLabel, CustomSubtitle, CustomTitle} from "../utils/common-components";
import {theme} from "../utils/styles/theme";

export default function ProfileSignInPage() {
  return (
    <View>
      <CustomTitle text="Cadastro" />
      <CustomSubtitle variant="titleLarge" text={description} style={{ marginTop: 20 }} />
      <View style={cardStyle}>
        <Image
          source={require("../assets/signin-tractor.png")}
          style={{ alignSelf: "center", marginTop: 30 }}
        ></Image>
        <CustomLabel
            variant="labelLarge"
            text="Produtor rural"
          style={{ textAlign: "center", marginTop: 30, fontWeight: 'bold' }}
        />
      </View>
      <View style={cardStyle}>
        <Image
          source={require("../assets/signin-store.png")}
          style={{ alignSelf: "center", marginTop: 30 }}
        ></Image>
        <CustomLabel
            variant="labelLarge"
            text="Comerciante"
          style={{ textAlign: "center", marginTop: 55, fontWeight: 'bold' }}
        />
      </View>
    </View>
  );
}

const description = 'Escolha uma opcao para ' + '\n' + 'prosseguir'

const cardStyle = {
  marginTop: 50,
  alignSelf: "center",
  height: 170,
  width: 197,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 10,
  borderColor: theme.colors.primary,
  backgroundColor: theme.colors.backgroundSecondary,
};
