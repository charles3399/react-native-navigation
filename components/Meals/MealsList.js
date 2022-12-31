import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem'

export default function MealsList({items}) {
    const renderMealItem = (itemData) => {

        const item = itemData.item

        const mealItemProps = {
            id: item.id,
            title: item.title,
            image: item.imageUrl,
            ingredients: item.ingredients,
            steps: item.steps,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }

        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})