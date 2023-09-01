import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
      justifyContent: 'space-between',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    iconContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 24,
      padding: 10,
    },
    previewImage: {
      flex: 1,
    },
    captureButton: {
      alignSelf: 'center',
      marginVertical: 20,
    },
    bottomButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 40,
      paddingBottom: 20,
    },
    actionButton: {
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      marginTop: 5,
    },
  });

  export default styles;