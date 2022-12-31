import { View, Text, StyleSheet } from 'react-native'
// import { useContext } from 'react'
// import { FavoritesContext } from '../store/context/favorites-context'
import { useSelector } from 'react-redux'
import MealsList from '../components/Meals/MealsList'
import { MEALS } from '../data/dummy-data'

export default function FavoritesScreen() {
  
  // const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter(item => favoriteMealIds.includes(item.id))

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }
  else {
    return <MealsList items={favoriteMeals} />
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
})