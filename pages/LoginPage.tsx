import { Image, View } from "react-native";
import {CustomButton, CustomLabel, CustomSubtitle, CustomTitle} from "../utils/common-components";
import {CustomInput} from "../utils/common-components/components/CustomInput";
import {theme} from "../utils/styles/theme";

export default function LoginPage() {
  return (
    <View style={{ margin: 20 }}>
      <Image
        source={require("../assets/logo-ifarm.png")}
        style={{ alignSelf: "center" }}
      ></Image>
        <CustomTitle
            style={{ marginTop: 60 }}
            text="Seja bem-vindo"
        />
      <CustomSubtitle text="Faca login e comece a vender seus produtos agora mesmo." style={{ marginTop: 20 }} />

      <View style={{ marginTop: 80 }}>
          <CustomLabel text="E-mail" color={theme.colors.textSecondary} />
          <CustomInput style={{marginBottom: 20}} />
          <CustomLabel text="Senha" color={theme.colors.textSecondary} />
          <CustomInput />
          <CustomLabel text="Esqueci minha senha" style={{
            textDecorationLine: "underline"
          }} />
          <CustomButton mode="contained-tonal" onPress={action} text="Entrar" style={{
              marginTop: 20,
          }} />
          <CustomLabel text="Cadastrar-se" style={{marginTop: 10, textAlign: 'center'}}/>
        <CustomLabel
            text="Voce ainda nao possui uma conta?"
          style={{ textAlign: "center", marginTop: 80 }}
        >{" "}
          <CustomLabel text="Cadastre-se aqui." color={theme.colors.primary} />
        </CustomLabel>
      </View>
    </View>
  );
}

const action = () => {
    console.log('test')
}