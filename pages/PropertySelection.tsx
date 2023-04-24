import { CustomSubtitle } from "../utils/common-components";
import { View } from "react-native";
import { theme } from "../utils/styles/theme";
import { Avatar, List } from "react-native-paper";

export default function PropertySelection() {
  return (
    <View style={{ marginTop: theme.size.md }}>
      <CustomSubtitle text={pageTitle} />
        {properties.map((o, key) => {
            return (
                <List.Item
                    key={o}
                    title={o}
                    titleStyle={{fontWeight: 'bold'}}
                    descriptionStyle={{ textAlign: "center" }}
                    style={{
                        backgroundColor: theme.colors.backgroundPrimary,
                        marginTop: theme.size.lg,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: theme.size.sm,
                        borderColor: theme.colors.primary}}
                    left={() => (
                        <Avatar.Icon
                            size={50}
                            icon={require("../assets/signin-store.png")}
                            style={{ backgroundColor: "#ffffff" }}
                        />
                    )}
                />
            )
        })}
    </View>
  );
}

const pageTitle = "Crie sua lista de produtos" + "\n" + "para cada propriedade";
const properties = [
    'fazenda asa branca',
    'fazenda boi bravo'
]