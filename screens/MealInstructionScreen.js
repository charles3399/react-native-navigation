import { ScrollView } from 'react-native'

import { useEffect } from 'react'

import MealInstructionItem from '../components/MealInstructionItem'

export default function MealInstructionScreen({ route, navigation }) {

    const mealTitle = route.params.title

    useEffect(() => {
        
        navigation.setOptions({
            title: mealTitle,
        })

    }, [mealTitle] )
    
    const mealItemProps = {
        id: route.params.id,
        title: route.params.title,
        image: route.params.image,
        duration: route.params.duration,
        ingredients: route.params.ingredients,
        steps: route.params.steps,
    }

    return (
        <ScrollView>
            <MealInstructionItem {...mealItemProps} />
        </ScrollView>
    )
}