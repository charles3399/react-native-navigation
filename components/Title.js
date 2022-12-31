import { View, Text, StyleSheet } from 'react-native'

export default function Title({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    }
})