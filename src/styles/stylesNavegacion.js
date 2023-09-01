import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    tabnav:{
        backgroundColor: "white",
        position: "absolute",
        bottom: 5,
        height: 50,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10
        },
        paddingHorizontal: 20,
    },
    tabvaricon: {
        position: "absolute",
        top: '35%',
        fontSize:7
    },
    camicon: {
        width: 33,
        height: 33,
        tintColor: "#F19A34"
    },
    actionboton: {
        width: 55,
        height: 55,
        backgroundColor: 'purple',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    }
})

export default styles