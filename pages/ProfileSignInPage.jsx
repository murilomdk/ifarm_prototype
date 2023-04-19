import { Image, View } from "react-native";
import { Text } from "react-native-paper";

export default function ProfileSignInPage() {
  return (
    <View style={{ marginVertical: 80 }}>
      <Text variant="headlineMedium" style={{ textAlign: "center" }}>
        Cadastro
      </Text>
      <Text variant="labelLarge" style={{ textAlign: "center", marginTop: 20 }}>
        Escolha uma opcao para prosseguir
      </Text>
      <View style={cardStyle}>
        <Image
          source={require("../assets/signin-tractor.png")}
          style={{ alignSelf: "center", marginTop: 30 }}
        ></Image>
        <Text
          variant="labelSmall"
          style={{ textAlign: "center", marginTop: 30 }}
        >
          Produtor rural
        </Text>
      </View>
      <View style={cardStyle}>
        <Image
          source={require("../assets/signin-store.png")}
          style={{ alignSelf: "center", marginTop: 30 }}
        ></Image>
        <Text
          variant="labelSmall"
          style={{ textAlign: "center", marginTop: 55 }}
        >
          Comerciante
        </Text>
      </View>
    </View>
  );
}

const cardStyle = {
  marginTop: 50,
  alignSelf: "center",
  height: 170,
  width: 197,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 10,
  borderColor: "#63B453",
  backgroundColor: "#ebfdea",
};
