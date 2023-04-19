import { Button, Text, TextInput } from "react-native-paper";
import { Image, View } from "react-native";
export default function LoginPage() {
  return (
    <View style={{ margin: 20 }}>
      <Image
        source={require("../assets/logo-ifarm.png")}
        style={{ alignSelf: "center" }}
      ></Image>
      <Text
        variant="headlineLarge"
        style={{ textAlign: "center", marginTop: 76 }}
      >
        Seja bem-vindo
      </Text>
      <Text variant="titleLarge" style={{ textAlign: "center", marginTop: 20 }}>
        Faca login e comece a vender seus produtos agora mesmo.
      </Text>

      <View style={{ marginTop: 80 }}>
        <Text variant="labelMedium" style={{ color: "#939095" }}>
          E-mail
        </Text>
        <TextInput
          mode="outlined"
          activeOutlineColor="#63B453"
          style={{
            backgroundColor: "#ffffff",
            borderColor: "#D0D0D0",
            borderRadius: 10,
          }}
        ></TextInput>
        <Text variant="labelMedium" style={{ color: "#939095" }}>
          Senha
        </Text>
        <TextInput
          mode="outlined"
          activeOutlineColor="#63B453"
          style={{
            backgroundColor: "#ffffff",
            borderColor: "#D0D0D0",
            borderRadius: 10,
          }}
        ></TextInput>
        <Text
          variant="labelMedium"
          style={{
            textDecorationLine: "underline",
          }}
        >
          Esqueci minha senha
        </Text>
        <Button
          mode="contained-tonal"
          style={{
            marginTop: 20,
            borderRadius: 10,
            height: 56,
            backgroundColor: "#63B453",
            paddingTop: 8,
          }}
          labelStyle={{
            textAlignVertical: "center",
            color: "#ffffff",
          }}
        >
          Entrar
        </Button>
        <Text
          variant="labelMedium"
          style={{ textAlign: "center", marginTop: 10, color: "#27212B" }}
        >
          Cadastrar-se.
        </Text>
        <Text
          variant="labelMedium"
          style={{ textAlign: "center", marginTop: 80, color: "#27212B" }}
        >
          Voce ainda nao possui uma conta?{" "}
          <Text variant="labelMedium" style={{ color: "#63B453" }}>
            Cadastre-se aqui.
          </Text>
        </Text>
      </View>
    </View>
  );
}
