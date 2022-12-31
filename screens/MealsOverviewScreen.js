import { View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealsList from '../components/Meals/MealsList'

export default function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    })

    useEffect(() => {
        const categoryTitle = CATEGORIES.find(e => e.id === categoryId).title

        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation])

    return <MealsList items={displayedMeals} />
}