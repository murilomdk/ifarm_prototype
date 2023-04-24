import {FlatList, View, StyleSheet} from "react-native";
import {Button, Card, Text} from "react-native-paper";
import {CustomButton, CustomInput, CustomLabel, CustomTitle} from "../utils/common-components";
import {theme} from "../utils/styles/theme";
import Svg, {Path, G, Defs, ClipPath, Rect} from "react-native-svg"

export default function NewNegotiationPage() {

    const itens = [
        {id: 1, title: 'Agricultura'},
        {id: 2, title: 'Pecuária'},
        {id: 3, title: 'Avicultura'},
        {id: 4, title: 'Suinucultura'},
        {id: 5, title: 'Piscicultura'},
        {id: 6, title: 'Outros'},
    ]

    const addSeg = () => {
        console.log('add')
    }

    const createIcon = (item: any) => {
        return (
            <View style={styles.iconContainer}>
                <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <G clip-path="url(#clip0_36_358)">
                        <Path
                            d="M39.693 37.1039L34.6762 32.0871C34.0872 31.4978 33.3594 31.1292 32.5971 30.9811V20.8618C32.761 20.8755 32.9242 20.8823 33.0872 20.8823C34.636 20.8823 36.1307 20.2744 37.255 19.1501C38.6969 17.7081 39.2893 15.6576 38.8398 13.6645C38.7735 13.3704 38.5437 13.1409 38.2495 13.0743C36.2567 12.6251 34.206 13.2175 32.7643 14.6594C32.7069 14.7165 32.6517 14.7751 32.5971 14.834V10.7452C33.7967 9.82757 34.5011 8.41613 34.5011 6.88781C34.5011 5.21117 33.6533 3.6743 32.2333 2.77709C31.9782 2.61595 31.6535 2.61595 31.3983 2.77709C29.9784 3.6743 29.1306 5.21117 29.1306 6.88781C29.1306 8.41613 29.8349 9.82757 31.0346 10.7452V11.7706C29.7498 10.4983 27.9303 9.9768 26.1618 10.3757C25.8676 10.4422 25.6378 10.672 25.5716 10.9659C25.1709 12.7432 25.6992 14.5718 26.9849 15.8578C27.9877 16.8607 29.3207 17.4026 30.7019 17.4026C30.8127 17.4026 30.9235 17.3981 31.0346 17.3914V20.5292C30.9329 20.4117 30.8271 20.2969 30.716 20.1859C29.1641 18.6343 26.9638 17.988 24.8178 18.4491C24.6442 17.2372 23.5999 16.3028 22.3413 16.3028H17.3209L14.9817 13.0878C14.6509 12.6327 14.2389 12.2519 13.7747 11.9562C15.138 11.3867 16.0986 10.04 16.0986 8.47289V6.60521H17.3032C17.7347 6.60521 18.0844 6.25548 18.0844 5.82396C18.0844 5.39244 17.7347 5.04271 17.3032 5.04271H16.3135V3.79119C16.3135 2.56224 15.3137 1.56248 14.0848 1.56248H10.3912C9.1623 1.56248 8.16254 2.56224 8.16254 3.79119V5.04271H7.17286C6.74134 5.04271 6.39161 5.39244 6.39161 5.82396C6.39161 6.25548 6.74134 6.60521 7.17286 6.60521H8.55225V8.47289C8.55225 9.68932 9.13148 10.7727 10.0281 11.4633C8.22968 12.0367 6.92322 13.7228 6.92322 15.7089V24.2154C6.92322 26.0437 7.92206 27.6422 9.40217 28.4964V33.5156H2.38281C1.026 33.5156 -0.078125 34.6198 -0.078125 35.9766C-0.078125 37.3334 1.026 38.4375 2.38281 38.4375H3.38867C3.82019 38.4375 4.16993 38.0878 4.16993 37.6563C4.16993 37.2247 3.82019 36.875 3.38867 36.875H2.38281C1.88751 36.875 1.48438 36.4719 1.48438 35.9766C1.48438 35.4813 1.88751 35.0781 2.38281 35.0781H10.1834C10.6149 35.0781 10.9647 34.7284 10.9647 34.2969V29.0726C11.2564 29.1266 11.5567 29.1562 11.864 29.1562H13.4116V34.2093C13.4116 35.6793 12.2156 36.875 10.7459 36.875H9.63868C9.20716 36.875 8.85743 37.2247 8.85743 37.6563C8.85743 38.0878 9.20716 38.4375 9.63868 38.4375H10.7459C13.0774 38.4375 14.9741 36.5408 14.9741 34.2093V29.1562H17.8314V35.9766C17.8314 37.3334 18.9356 38.4375 20.2924 38.4375C21.6495 38.4375 22.7533 37.3334 22.7533 35.9766V27.5C22.7533 25.1685 20.8569 23.2718 18.5254 23.2718H14.762V21.2704C14.8383 21.2949 14.9185 21.308 15.0006 21.308H22.3413C22.9791 21.308 23.5617 21.0678 24.0042 20.6735C24.0515 22.29 24.708 23.84 25.8847 25.0171C27.1073 26.2396 28.7323 26.9003 30.416 26.9003C30.6217 26.9003 30.828 26.89 31.0346 26.8701V30.9839C30.2765 31.1334 29.5536 31.5009 28.9676 32.0871L23.974 37.0807C23.6688 37.3856 23.6688 37.8803 23.974 38.1854C24.2789 38.4906 24.7739 38.4906 25.0788 38.1854L30.0723 33.1921C31.037 32.2272 32.6065 32.2272 33.5715 33.1921L38.5883 38.2086C38.7409 38.3612 38.9408 38.4375 39.1407 38.4375C39.3405 38.4375 39.5404 38.3612 39.693 38.2086C39.9982 37.9035 39.9982 37.4088 39.693 37.1039ZM31.0221 15.8261C29.9393 15.918 28.8718 15.5347 28.0899 14.7531C27.3084 13.9712 26.9245 12.904 27.0169 11.821C28.0997 11.7288 29.1672 12.1124 29.9491 12.894C30.7306 13.6758 31.1142 14.7433 31.0221 15.8261ZM33.869 15.7642C34.8081 14.8254 36.0977 14.3759 37.3996 14.5148C37.5382 15.816 37.089 17.1063 36.1502 18.045C35.2112 18.9841 33.9215 19.4333 32.6197 19.2944C32.6056 19.162 32.5992 19.0298 32.5971 18.898V18.746C32.6187 17.6364 33.0625 16.5707 33.869 15.7642ZM31.8158 4.40917C32.5266 5.03081 32.9386 5.92559 32.9386 6.88811C32.9386 7.85033 32.5266 8.74511 31.8158 9.36675C31.1051 8.74511 30.6931 7.85064 30.6931 6.88811C30.6931 5.92559 31.1051 5.03081 31.8158 4.40917ZM14.5361 8.47289C14.5361 9.69176 13.5443 10.6836 12.3254 10.6836C11.1063 10.6836 10.1148 9.69176 10.1148 8.47289V6.60521H14.5361V8.47289ZM9.72504 3.79119C9.72504 3.42375 10.0238 3.12499 10.3912 3.12499H14.0848C14.4522 3.12499 14.751 3.42375 14.751 3.79119V5.04271H9.72504V3.79119ZM18.5254 24.8343C19.9951 24.8343 21.1908 26.0303 21.1908 27.5V35.9766C21.1908 36.4719 20.788 36.875 20.2924 36.875C19.7971 36.875 19.3939 36.4719 19.3939 35.9766V28.3749C19.3939 27.9437 19.0442 27.5937 18.6127 27.5937H11.8637C10.2127 27.5937 8.83515 26.4026 8.5434 24.8343H18.5254ZM22.3413 19.7455H15.351L13.8333 18.0392C13.5465 17.7167 13.0527 17.688 12.7301 17.9745C12.4078 18.2614 12.3789 18.7552 12.6657 19.0778L13.1995 19.6774V23.2718H8.48572V15.7089C8.48572 14.1138 9.78364 12.8159 11.3788 12.8159C12.301 12.8159 13.1757 13.2611 13.7183 14.007L16.2915 17.5436C16.4386 17.746 16.6733 17.8653 16.9232 17.8653H22.3413C22.8598 17.8653 23.2816 18.287 23.2816 18.8055C23.2816 19.3237 22.8595 19.7455 22.3413 19.7455ZM31.0016 25.3027C29.5246 25.4788 28.0551 24.9777 26.9898 23.9124C25.9244 22.847 25.4227 21.3773 25.5991 19.9002C27.0758 19.7232 28.5459 20.2255 29.6112 21.2909C30.5271 22.2067 31.0248 23.4216 31.0346 24.6829V24.7934C31.0321 24.9628 31.0218 25.1328 31.0016 25.3027Z"
                            fill="#63B453"/>
                        <Path
                            d="M6.51331 36.875C6.30762 36.875 6.10712 36.9586 5.96094 37.1039C5.81567 37.2492 5.73267 37.4509 5.73267 37.6563C5.73267 37.8616 5.81567 38.0634 5.96094 38.2086C6.10712 38.3539 6.30762 38.4375 6.51331 38.4375C6.71869 38.4375 6.92011 38.3539 7.06628 38.2086C7.21155 38.0634 7.29517 37.8616 7.29517 37.6563C7.29517 37.4509 7.21155 37.2492 7.06628 37.1039C6.92011 36.9586 6.71869 36.875 6.51331 36.875Z"
                            fill="#63B453"/>
                    </G>
                    <Defs>
                        <ClipPath id="clip0_36_358">
                            <Rect width="40" height="40" fill="white"/>
                        </ClipPath>
                    </Defs>
                </Svg>
            </View>
        );
    }

    const renderItem = ({item}: any) => {
        //the app will represent each list item via a Text component
        return (
            <>
                <Button
                    // mode="contained"
                    style={styles.item}
                    icon={() => createIcon(item)}
                    contentStyle={{flexDirection: 'column'}}
                    onPress={addSeg}
                >
                    <CustomLabel text={item.title}/>
                </Button>
            </>

        )
    };

    const columns = 3;

    const styles = StyleSheet.create({
        item: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.backgroundSecondary,
            flexBasis: 0,
            flexGrow: 1,
            height: 100,
            margin: 4,
            padding: 4,
            borderRadius: 10,
            borderColor: theme.colors.primary,
            borderWidth: 1
        },
        iconContainer: {
            paddingHorizontal: theme.size.md,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    const nextStep = () => {
        console.log('proximo')
    }


    return (<>
        <View style={{paddingHorizontal: theme.size.md}}>
            <CustomTitle
                style={{marginTop: theme.size.lg}}
                variant={'titleMedium'}
                text={'Cadastro de Negociação'}
            />
            <CustomLabel text={'CPF/CNPJ'} style={{marginTop: 30}}/>
            <CustomInput/>

            <CustomLabel text={'Inscrição Estadual'} style={{marginTop: 30}}/>
            <CustomInput/>

            <CustomTitle style={{marginTop: theme.size.lg}} variant={'titleMedium'} text={'Defina seus seguimentos'}/>

            <FlatList data={itens} renderItem={renderItem} numColumns={columns} style={{marginTop: theme.size.md}}/>

            <CustomButton mode="contained-tonal" onPress={nextStep} text={'Continuar'}
                          style={{marginTop: theme.size.xm, alignSelf: 'flex-end'}}/>


        </View>
    </>)
}
