import { View, Dimensions, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react';
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header';
import { Carousel } from 'react-native-snap-carousel';
import { Avatar, Button } from 'react-native-paper';
import  Toast  from 'react-native-toast-message';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconStyle = {
    size: 20,
    style: {
        borderRadius: 5,
        backgroundColor: colors.color5,
        height: 25,
        width: 25
    }
}

const ProductDetails = ({ route: { params } }) => {
    console.log(params)

    const name = 'painting';
    const stock = 3;
    const price = 30;
    const description = 'lsc os csj ansno skxosijj dns soosno sosa nojxsao nfos foasfoa snos jdfosdnfosjdn oso oas oasj oso hoz ozoso sz'

    const [quantity, setQuantity] = useState(1)
    const isCarousel = useRef(null)
    const images = [
        {
            id: 'akcdnsoda',
            url: 'https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 'akcdnshcissoda',
            url: 'https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    const incrementQuantity = () => {
        if (stock <= quantity) return;
        setQuantity((prev) => prev + 1)
    }
    const decrementQuantity = () => {
        if (quantity <= 1) return;
        setQuantity((prev) => prev - 1)
    }

    const addToCartHandler=() => {
        if (stock === 0) return Toast.show({
            type:'error',
            text1:'Out of Stock'
        });
        Toast.show({
            type:'success',
            text1:'Added to cart'
        })
    }

    return (
        <View style={{
            ...defaultStyle,
            padding: 0,
            backgroundColor: colors.color1
        }}>
            <Header back={true} />

            {/* Carousel */}
            <Carousel
                layout='stack'
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                ref={isCarousel}
                data={images}
                renderItem={CarouselCardItem}
            />

            <View style={{
                backgroundColor: colors.color2,
                padding: 35,
                flex: 1,
                marginTop: -380,
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55
            }}>
                <Text style={{
                    fontSize: 25,
                }} numberOfLines={2}>
                    {name}
                </Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '900'
                }}>
                    ${price}
                </Text>
                <Text style={style.textDescription} numberOfLines={8}>
                    {description}
                </Text>

                <View style={style.quantityText}>
                    <Text style={{
                        color: colors.color3,
                        fontWeight: '100'
                    }}>Quantity</Text>

                    <View style={style.iconContainer}>
                        <TouchableOpacity onPress={decrementQuantity}>
                            <Avatar.Icon
                                icon={"minus"}
                                {...iconStyle}
                            />
                        </TouchableOpacity>

                        <Text style={style.quantity}>
                            {quantity}
                        </Text>

                        <TouchableOpacity onPress={incrementQuantity}>
                            <Avatar.Icon
                                icon={"plus"}
                                {...iconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={addToCartHandler}>
                    <Button
                        style={style.cartButton}
                        textColor={colors.color2}
                        icon={'cart'}
                    >Add to Cart</Button>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetails;

const CarouselCardItem = ({ item, index }) => {

    return (
        <View style={style.container} key={index}>
            <Image source={{ uri: item.url }} style={style.image} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        width: ITEM_WIDTH,
        paddingVertical: 40,
        height: 380,
    },
    image: {
        width: ITEM_WIDTH,
        resizeMode: 'contain',
        height: 250
    },
    quantity: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color5
    },
    textDescription: {
        letterSpacing: 1,
        lineHeight: 20,
        marginVertical: 15
    },
    quantityText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    iconContainer: {
        width: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartButton: {
        backgroundColor: colors.color3,
        borderRadius: 100,
        padding: 5,
        marginVertical: 35
    }
})
