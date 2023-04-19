import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function SignInFormPage() {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
      <Text
        variant="headlineSmall"
        style={{ marginBottom: 10, textAlign: "center" }}
      >
        Preencha o formulario
      </Text>
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        Nome
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
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        Como gostaria de ser chamado
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
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
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
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "20%", paddingRight: 20 }}>
          <Text variant="labelSmall" style={{ marginTop: 10 }}>
            DDD
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
        </View>
        <View style={{ width: "80%" }}>
          <Text variant="labelSmall" style={{ marginTop: 10 }}>
            Telefone
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
        </View>
      </View>
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        UF
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
      <Text variant="labelSmall" style={{ marginTop: 10 }}>
        Municipio
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
      <Button
        style={{
          marginTop: 20,
          width: 144,
          alignSelf: "flex-end",
          backgroundColor: "#63B453",
          borderRadius: 10,
        }}
        labelStyle={{
          textAlignVertical: "center",
          color: "#ffffff",
        }}
      >
        Continuar
      </Button>
    </View>
  );
}
