import {Image, ScrollView, View} from "react-native";
import {CustomLabel, CustomSubtitle} from "../utils/common-components";
import {CustomInput} from "../utils/common-components/components/CustomInput";
import {theme} from "../utils/styles/theme";
import {styles} from "../utils/styles/ThemingProvider";
import {Switch} from "react-native-paper";

export default function ProductSelection() {
    return (
        <>
            <CustomSubtitle text="Fazenda Asa Branca"></CustomSubtitle>
            <CustomInput placeholder="Busque pelo nome do item" />

            <View style={{marginTop: theme.size.xr, borderStyle: 'solid', borderWidth: 1,
                borderRadius: 10,
                padding: theme.size.sm,
                borderColor: theme.colors.border
            }}>
                <CustomLabel variant="titleMedium" text="Frango e derivados" style={{fontWeight: 'bold'}} />
                <View style={{paddingVertical: theme.size.md, flexDirection: "row", justifyContent: 'space-between'}}>
                    <CustomLabel text="Item" />
                    <CustomLabel text="Status" />
                </View>
                <ScrollView>
                    <View style={{marginTop: theme.size.md, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../assets/signin-store.png")} style={styles.itemPic}></Image>
                            <CustomLabel text="Frango de corte" style={{ marginLeft: theme.size.md}} />
                        </View>
                        <Switch />
                    </View>
                    <View style={{marginTop: theme.size.md, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../assets/signin-store.png")} style={styles.itemPic}></Image>
                            <CustomLabel text="Frango de corte" style={{ marginLeft: theme.size.md}} />
                        </View>
                        <Switch />
                    </View>
                    <View style={{marginTop: theme.size.md, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../assets/signin-store.png")} style={styles.itemPic}></Image>
                            <CustomLabel text="Frango de corte" style={{ marginLeft: theme.size.md}} />
                        </View>
                        <Switch />
                    </View>
                    <View style={{marginTop: theme.size.md, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../assets/signin-store.png")} style={styles.itemPic}></Image>
                            <CustomLabel text="Frango de corte" style={{ marginLeft: theme.size.md}} />
                        </View>
                        <Switch />
                    </View>
                    <View style={{marginTop: theme.size.md, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../assets/signin-store.png")} style={styles.itemPic}></Image>
                            <CustomLabel text="Frango de corte" style={{ marginLeft: theme.size.md}} />
                        </View>
                        <Switch />
                    </View>
                    <View style={{marginTop: theme.size.md, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../assets/signin-store.png")} style={styles.itemPic}></Image>
                            <CustomLabel text="Frango de corte" style={{ marginLeft: theme.size.md}} />
                        </View>
                        <Switch />
                    </View>
                    <View style={{marginTop: theme.size.md, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../assets/signin-store.png")} style={styles.itemPic}></Image>
                            <CustomLabel text="Frango de corte" style={{ marginLeft: theme.size.md}} />
                        </View>
                        <Switch />
                    </View>
                    <View style={{marginTop: theme.size.md, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require("../assets/signin-store.png")} style={styles.itemPic}></Image>
                            <CustomLabel text="Frango de corte" style={{ marginLeft: theme.size.md}} />
                        </View>
                        <Switch />
                    </View>
                </ScrollView>

            </View>
        </>
    )
}

const items = [
    'frango de corte',
    'Ovos caipira',
    'Leite',
    'Queijo',
]