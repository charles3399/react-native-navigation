import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

export default function CategoriesScreen({ navigation }) {

    const renderCategory = (itemData) => {
    
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title,
            })
        }
    
        return (
            <CategoryGridTile
                title={itemData.item.title}
                bgColor={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategory}
            />
        </View>
    )
}