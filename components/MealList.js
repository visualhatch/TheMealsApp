import React from 'react';
import { useSelector } from "react-redux";

import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from "./MealItem";


const MealList = props => {

    const favoriteMeals = useSelector(state => state.meals.favouriteMeals);

    const renderMealItem = itemData => {

        const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id);

        return <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite
                    }
                })
            }}
        />;
    };


 return (
     <View style={styles.list}>
         <FlatList
             data={props.listData}
             keyExtractor={(item, index) => item.id}
             renderItem={renderMealItem}
             style={styles.flatList}
         />
     </View>
 );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatList: {
        width: '100%'
    }
});

export default MealList;