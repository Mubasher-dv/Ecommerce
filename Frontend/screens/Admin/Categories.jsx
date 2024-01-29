import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle, formHeading, inputOptions } from '../../styles/styles'
import Header from '../../components/Header';
import CategoryCard from '../../components/CategoryCard';
import { Button, TextInput } from 'react-native-paper';

const categories = [
    {
        name: 'Laptop',
        _id: 'sncosndosn'
    },
    {
        name: 'Foot wears',
        _id: 'sncosddssndosn'
    },
]

const Categories = () => {

    const [category, setCategory] = useState('')
    const loading = false;

    const deleteHandler = (id) => {
        console.log('deleting category', id)
    }

    const submitHandler = () => {}
    return (
        <View style={{ defaultStyle, backgroundColor: colors.color5 }}>

            <Header back={true} />

            {/* Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70, paddingHorizontal: 30 }}>
                <Text style={formHeading}>Categories</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{
                marginBottom: 20
            }}>
                <View style={{
                    backgroundColor: colors.color2,
                    padding: 20,
                    minHeight: 400
                }}>
                    {
                        categories.map(i => (
                            <CategoryCard
                                id={i._id}
                                key={i._id}
                                name={i.name}
                                deleteHandler={deleteHandler}

                            />
                        ))
                    }
                </View>
            </ScrollView>

            <View style={styles.container}>
                <TextInput
                    {...inputOptions}
                    placeholder="Category"
                    value={category}
                    onChangeText={setCategory}
                />

                <Button textColor={colors.color2} disabled={!category} style={{
                    backgroundColor: colors.color1,
                    margin: 20,
                    padding: 6
                }}
                onPress={submitHandler}
                loading={loading}
                >Add</Button>
            </View>
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginHorizontal: 20,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: colors.color3
    }
})