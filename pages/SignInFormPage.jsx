import { View ,StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import {theme} from '../utils/styles/theme';
import { CustomButton} from '../utils/common-components/';


export default function SignInFormPage() {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
      <Text
        variant="headlineSmall"
        style={{ marginBottom: 10, textAlign: "center" }}
      >
      {/*<CompTextInput></CompTextInput>*/}
        Preencha o formulario
      </Text>
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        Nome
      </Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#63B453"
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.borderColor,
          borderRadius: 10,
        }}
      ></TextInput>
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        Como gostaria de ser chamado
      </Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#63B453"
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.borderColor,
          borderRadius: 10,
        }}
      ></TextInput>
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        E-mail
      </Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#63B453"
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.borderColor,
          borderRadius: 10,
        }}
      ></TextInput>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "20%", paddingRight: 20 }}>
          <Text variant="labelSmall" style={{ marginTop: 10 }}>
            DDD
          </Text>
          <TextInput
            mode="outlined"
            activeOutlineColor="#63B453"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.borderColor,
              borderRadius: 10,
            }}
          ></TextInput>
        </View>
        <View style={{ width: "80%" }}>
          <Text variant="labelSmall" style={{ marginTop: 10 }}>
            Telefone
          </Text>
          <TextInput
            mode="outlined"
            activeOutlineColor="#63B453"
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.borderColor,
              borderRadius: 10,
            }}
          ></TextInput>
        </View>
      </View>
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        UF
      </Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#63B453"
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.borderColor,
          borderRadius: 10,
        }}
      ></TextInput>
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        Municipio
      </Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#63B453"
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.borderColor,
          borderRadius: 10,
        }}
      ></TextInput>
      <Button
        style={{
          marginTop: 20,
          width: 144,
          alignSelf: "flex-end",
          backgroundColor: theme.colors.background,
          borderRadius: 10,
        }}
        labelStyle={{
          textAlignVertical: "center",
          color: "#ffffff",
        }}
      >
        Continuar
      </Button>

        <CustomButton mode='contained'
                      onPress={() => console.log('Botão pressionado!')}
                      texto='TESTE'
        bgColor={theme.colors.primary}
        />
    </View>
  );
}

