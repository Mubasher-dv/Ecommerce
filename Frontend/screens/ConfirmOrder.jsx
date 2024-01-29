import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header';
import Heading from '../components/Heading';
import { cartItems } from './Cart';
import ConfirmOrderItem from '../components/ConfirmOrderItem';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const ConfirmOrder = () => {

  const navigation = useNavigation()

  const itemsPrice = 40;
  const shippingCharges = 5;
  const tax = 0.10 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;

  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />

      {/* Heading  */}
      <Heading text1='Confirm' text2='Order' />

      <View style={{
        paddingVertical: 20,
        flex: 1
      }}>
        <ScrollView>
          {cartItems.map(i => (
            <ConfirmOrderItem
              key={i.productId}
              image={i.image}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>

      <PriceTag heading={'Subtotal'} value={itemsPrice} />
      <PriceTag heading={'Shipping Charges'} value={shippingCharges} />
      <PriceTag heading={'Tax'} value={tax} />
      <PriceTag heading={'Total'} value={totalAmount} />

      <TouchableOpacity onPress={() => { navigation.navigate('payment', { itemsPrice, shippingCharges, tax, totalAmount }) }}>
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10
          }} 
          textColor={colors.color2}
          icon={'chevron-right'}
        >Payment</Button>
      </TouchableOpacity>
    </View>
  )
}

export default ConfirmOrder;

const PriceTag = ({ heading, value }) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  }}>
    <Text style={{
      fontWeight: '800'
    }}>
      {heading}
    </Text>
    <Text>${value}</Text>
  </View>
)