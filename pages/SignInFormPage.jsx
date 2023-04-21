import { View } from "react-native";
import {CustomButton, CustomLabel, CustomSubtitle} from '../utils/common-components/';
import {CustomInput} from "../utils/common-components/components/CustomInput";
import {theme} from "../utils/styles/theme";

export default function SignInFormPage() {
  return (
    <View>
      <CustomSubtitle
          text="Preencha o formulário"
      />
        <CustomLabel color={theme.colors.textSecondary} text="Nome" style={{ marginTop: 10 }} />
        <CustomInput />
        <CustomLabel text="Como gostaria de ser chamado" style={{ marginTop: 10 }} />
        <CustomInput />
        <CustomLabel text="Email" style={{ marginTop: 10 }} />
      <CustomInput />
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "20%", paddingRight: 20 }}>
      <CustomLabel text="DDD" style={{ marginTop: 10 }} />
          <CustomInput />
        </View>
        <View style={{ width: "80%" }}>
            <CustomLabel text="Telefone" style={{ marginTop: 10 }} />
          <CustomInput />
        </View>
      </View>
        <CustomLabel text="UF" style={{ marginTop: 10 }} />
      <CustomInput />
      <CustomLabel text="Município" style={{ marginTop: 10 }} />
      <CustomInput />
        <CustomButton mode="contained-tonal" onPress={action} text="Continuar" style={{
            marginTop: 20,
            alignSelf: "flex-end",
        }} />
    </View>
  );
}

const action = () => {
    console.log('test')
}
