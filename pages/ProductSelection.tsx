import {ScrollView, View} from "react-native";
import {CustomLabel, CustomSubtitle} from "../utils/common-components";
import {CustomInput} from "../utils/common-components/components/CustomInput";
import {theme} from "../utils/styles/theme";
import {Avatar, List, Switch} from "react-native-paper";

export default function ProductSelection() {
    return (
        <>
            <CustomSubtitle text="Fazenda Asa Branca"></CustomSubtitle>
            <CustomInput placeholder="Busque pelo nome do item" style={{marginTop: theme.size.lg}}/>

            <View style={{marginTop: theme.size.xr, borderStyle: 'solid', borderWidth: 1,
                borderRadius: 10,
                padding: theme.size.sm,
                borderColor: theme.colors.border
            }}>
                <CustomLabel variant="titleMedium" text="Frango e derivados" style={{fontWeight: 'bold'}} />
                <View style={{paddingVertical: theme.size.md, flexDirection: "row", justifyContent: 'space-between'}}>
                    <CustomLabel text="Item" style={{paddingHorizontal: theme.size.md}} />
                    <CustomLabel text="Status" style={{paddingHorizontal: theme.size.lg}} />
                </View>
                <ScrollView>
                    {items.map((o, key) => {
                         return (
                             <List.Item key={key}
                                        title={o}
                                        descriptionStyle={{textAlign: 'center'}}
                                 left={() => (
                                     <Avatar.Icon size={50}
                                                  icon={require("../assets/signin-store.png")}
                                                  style={{backgroundColor: "#ffffff"}}
                                     />
                                 )}
                                        right={() => (
                                            <Switch value={switched} color={theme.colors.primary}/>
                                        )}
                             />
                         )
                    })}
                </ScrollView>
            </View>
        </>
    )
}

let switched = true;

const items = [
    'frango de corte',
    'Ovos caipira',
    'Leite',
    'Queijo',
    'frango de corte',
    'Ovos caipira',
    'Leite',
    'Queijo',
    'frango de corte',
    'Ovos caipira',
    'Leite',
    'Queijo',
    'frango de corte',
    'Ovos caipira',
    'Leite',
    'Queijo',
]