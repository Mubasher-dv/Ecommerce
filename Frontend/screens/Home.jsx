import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

const categories = [
    {
        category: "Nice",
        _id: 'scsdncn'
    },
    {
        category: "Footballs",
        _id: 'skncoie'
    },
    {
        category: "Men",
        _id: 'skcisdnnfcoi'
    },
    {
        category: "Woman",
        _id: 'skcsodnods'
    }
]

export const products = [
    {
        key: 'scosshdo',
        price: 2425,
        name: 'Sample',
        _id: 'sbcsnosdodsndso',
        category: 'Laptop',
        images: [{
            url: 'https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }],
        stock: 23
    },
    {
        key: 'scosshdo',
        price: 2425,
        name: 'Sample',
        _id: 'sbcsdodsndso',
        category:'IDK',
        images: [{
            url: 'https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }],
        stock: 23
    }
]

const Home = () => {

    const navigation = useNavigation()

    const [category, setCategory] = useState("")
    const [activeSearch, setActiveSearch] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")

    const categoryButtonHandler = (id) => {
        setCategory(id)
    }

    const addToCartHandler = (id, stock) => {
        console.log('add to cart', id)
    }
    return (
        <>
            {activeSearch && <SearchModal
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setActiveSearch={setActiveSearch}
                products={products}
            />}

            <View style={defaultStyle}>
                {/* Header */}
                <Header />

                {/* Heading Row */}
                <View style={{
                    paddingTop: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    {/* Heading */}
                    <Heading text1='Our' text2='Products' />

                    {/* Search bar */}
                    <View>
                        <TouchableOpacity onPress={() => setActiveSearch(prev => !prev)}>
                            <Avatar.Icon icon={"magnify"}
                                color={"gray"}
                                size={50}
                                style={{
                                    backgroundColor: colors.color2,
                                    elevation: 12
                                }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* CATEGORIES */}

                <View style={{
                    flexDirection: 'row',
                    height: 80
                }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                        alignItems: 'center'
                    }}>
                        {
                            categories.map((item, idx) => (
                                <Button
                                    key={item._id}
                                    style={{
                                        backgroundColor: category === item._id ? colors.color1 : colors.color5,
                                        borderRadius: 100,
                                        margin: 5
                                    }}
                                    onPress={() => categoryButtonHandler(item._id)}
                                >
                                    <Text style={{
                                        fontSize: 12,
                                        color: category === item._id ? colors.color2 : 'gray'
                                    }}>
                                        {item.category}
                                    </Text>
                                </Button>
                            ))
                        }
                    </ScrollView>
                </View>

                {/* Products */}

                <View style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {products.map((item, idx) => (
                            <ProductCard
                                stock={item.stock}
                                name={item.name}
                                price={item.price}
                                image={item.images[0]?.url}
                                addToCartHandler={addToCartHandler}
                                id={item._id}
                                key={item._id}
                                i={idx}
                                navigation={navigation}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>

            <Footer activeRoute={"Home"} />
        </>
    )
}

export default Home