import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    name: {
        fontSize: 20,
        fonWeight: 'bold',
        color: colors.black,
        marginbottom: 12
    },
    email: {
        fontSize: 14,
        color: colors.grey
    },
    content: {
        flex: 1
    }
})