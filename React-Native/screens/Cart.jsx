import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header';
import Heading from '../components/Heading';
import { Button } from 'react-native-paper';
import CartItem from '../components/CartItem';
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native';


export const cartItems = [
    {
        name: 'painting',
        image: 'https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        productId: 'sncosndoscosdn',
        stock: 4,
        price: 8,
        quantity: 2
    },
    {
        name: 'Macbook',
        image: 'https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/a/p/apple-macbook-pro-13-inch-mneh3-m2-chip-price-in-pakistan.jpg',
        productId: 'sncosfsdfsndoscosdn',
        stock: 4,
        price: 1000,
        quantity: 1
    }
]

const Cart = () => {

    const navigation = useNavigation()

    const decrementHandler = (id, qty) => {
        console.log('decreasing', id, qty)
    }
    const incrementHandler = (id, qty, stock) => {
        console.log('increasing', id, qty, stock)
    }
    return (
        <View style={{
            ...defaultStyle,
            padding: 0
        }}>
            {/* Header */}
            <Header back={true} emptyCart={true} />

            {/* Heading */}
            <Heading text1='Shopping' text2='Cart' />

            <View style={{
                paddingVertical: 20,
                flex: 1,
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {cartItems.map((i, index) => (
                        <CartItem
                            key={i.productId}
                            id={i.productId}
                            name={i.name}
                            stock={i.stock}
                            image={i.image}
                            quantity={i.quantity}
                            amount={i.price}
                            index={index}
                            incrementHandler={incrementHandler}
                            decrementHandler={decrementHandler}
                            navigation={navigation}
                        />
                    ))}
                </ScrollView>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 35
            }}>
                <Text>5 items</Text>
                <Text>$5</Text>
            </View>

            <TouchableOpacity onPress={cartItems.length > 0 ? () => navigation.navigate('confirmOrder') : Toast.show({ type: 'error', text1: 'Cart is empty' })}>
                <Button
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 30
                    }}
                    icon={'cart'}
                    textColor={colors.color2}
                >CheckOut</Button>
            </TouchableOpacity>
        </View>
    )
}

export default Cart;



