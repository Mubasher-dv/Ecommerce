import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles';
import { Avatar } from 'react-native-paper';

const CategoryCard = ({ name, id, key, deleteHandler }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>

            <TouchableOpacity onPress={() => deleteHandler(id)}>
                <Avatar.Icon 
                    icon={'delete'}
                    size={30}
                    style={{
                        backgroundColor: colors.color1
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color2,
        elevation: 5,
        margin: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', borderRadius: 10
    },
    text: {
        fontWeight: '600',
        textTransform:'uppercase',
        letterSpacing: 1
    }
})