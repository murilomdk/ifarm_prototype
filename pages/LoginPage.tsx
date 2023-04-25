import { Image, Alert, View } from "react-native";
import {CustomButton, CustomLabel, CustomSubtitle, CustomTitle} from "../utils/common-components";
import {CustomInput} from "../utils/common-components/components/CustomInput";
import {theme} from "../utils/styles/theme";
import { supabase } from '../lib/supabase'
import {useState} from "react";

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)

async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
}

async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
}

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
          <CustomInput value={email} onChangeText={(text) => setEmail(text)} style={{marginBottom: 20}} />
          <CustomLabel text="Senha" color={theme.colors.textSecondary} />
          <CustomInput value={password} onChangeText={(text) => setPassword(text)} />
          <CustomLabel text="Esqueci minha senha" style={{
            textDecorationLine: "underline"
          }} />
          <CustomButton mode="contained-tonal" onPress={() => signInWithEmail()} text="Entrar"
                        disabled={loading}
                        style={{marginTop: 20, minWidth: '100%'}} />
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
