import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function MealItem(props) {
    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.navigate('MealInstruction', {
            id: props.id,
            title: props.title,
            image: props.image,
            ingredients: props.ingredients,
            steps: props.steps,
            duration: props.duration,
        })
    }

    return (
        <ScrollView>
            <TouchableOpacity onPress={pressHandler}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.image} source={{ uri: props.image }} />
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.additionalInfo}>{props.duration}m</Text>
                        <Text style={styles.additionalInfo}>{props.complexity.toUpperCase()}</Text>
                        <Text style={styles.additionalInfo}>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        backgroundColor: '#edce8f',
        overflow: 'hidden',
        borderRadius: 10,
        elevation: 5,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    image: {
        width: "100%",
        height: 250,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    additionalInfo: {
        fontSize: 15,
        fontWeight: '600',
        marginHorizontal: 7,
    }
})