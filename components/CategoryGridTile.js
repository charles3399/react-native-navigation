import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function CategoryGridTile(props) {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                style={[{ backgroundColor: props.bgColor }, styles.button]}
                onPress={props.onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 12,
        height: 120,
        elevation: 4,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    button: {
        flex: 1,
        borderRadius: 8,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})