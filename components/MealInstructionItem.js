import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

import { useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { addFavorite, removeFavorite } from '../store/redux/favorites'

import Title from '../components/Title'
import FavoriteButton from '../components/FavoriteButton'
// import { FavoritesContext } from '../store/context/favorites-context'

export default function MealInstructionItem(props) {
    const navigation = useNavigation();
    // const faveMealContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
    const dispatch = useDispatch();

    console.log("SELECTOR", favoriteMealIds)

    const dataInstruction = (itemData, bulletStyle) => {
        return itemData.map(name => <Text style={styles.content}>{bulletStyle} {name}</Text>)
    }

    // console.log("CONTEXT", faveMealContext)

    // const isFavorite = faveMealContext.ids.includes(props.id)
    const isFavorite = favoriteMealIds.includes(props.id)

    const setAsFavorite = () => {
        if (isFavorite) {
            // faveMealContext.removeFavorite(props.id)
            dispatch(removeFavorite({id: props.id}))
        }
        else {
            // faveMealContext.addFavorite(props.id)
            dispatch(addFavorite({id: props.id}))
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <FavoriteButton
                    icon={isFavorite ? "star" : "star-outline"}
                    color="#fff"
                    onPress={setAsFavorite}
                />
            }
        })
    }, [navigation, setAsFavorite])

    return (
        <View style={styles.container}>
            <Title>{props.title}</Title>
            <Image style={styles.image} source={{ uri: props.image }} />
            <Text style={styles.duration}>Duration: {props.duration} minutes</Text>
            <View>
                <Text style={[styles.content, styles.contentTitle]}>Ingredients: </Text>
                {dataInstruction(props.ingredients, '-')}
                <Text style={[styles.content, styles.contentTitle]}>Instructions: </Text>
                {dataInstruction(props.steps, '*')}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        marginVertical: 20,
        borderRadius: 10,
    },
    duration: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    content: {
        fontSize: 18,
        marginVertical: 4,
        lineHeight: 28,
        color: '#fff',
    },
})