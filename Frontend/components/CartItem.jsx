import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'
import { iconStyle } from '../screens/ProductDetails'

const CartItem = ({ name, amount, stock, index, incrementHandler, decrementHandler, id, quantity, image, key, navigation }) => {
    return (
        <View style={{
            flexDirection: 'row',
            height: 100,
            marginVertical: 20
        }}>
            <View style={{
                width: '40%',
                backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100
            }}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            </View>

            <View style={{
                width: '40%',
                paddingHorizontal: 25
            }}>
                <Text 
                    numberOfLines={1} 
                    style={{ fontSize: 17 }}
                    onPress={() => navigation.navigate('productDetails',{id: id})}
                >
                    {name}
                </Text>
                <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: '900' }}>{amount}</Text>
            </View>

            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrementHandler(id, quantity)}>
                    <Avatar.Icon
                        icon={'minus'}
                        {...iconStyle}
                    />
                </TouchableOpacity>

                <Text style={styles.quantityText}>
                    {quantity}
                </Text>

                <TouchableOpacity onPress={() => incrementHandler(id, quantity, stock)}>
                    <Avatar.Icon
                        icon={'plus'}
                        {...iconStyle}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    quantityText: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color5
    },
    image: {
        width: 200,
        height: "100%",
        resizeMode: 'contain',
        top: '-20%',
        left: '10%'
    },
    quantityContainer: {
        alignItems: 'center',
        width: '20%',
        height: '80%',
        justifyContent: 'space-between',
        alignSelf: 'center'
    }
})
export default CartItem