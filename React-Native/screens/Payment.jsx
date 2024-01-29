import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header';
import Heading from '../components/Heading';
import { Button, RadioButton } from 'react-native-paper';

const Payment = ({ route, navigation }) => {

    const [paymentMethod, setPaymentMethod] = useState("COD")

    const isAuthenticated = true;

    const redirectToLogin =() => {
        navigation.navigate('login')
    }

    const onlineHandler = () => {}

    const CODHandler = () => {}


    return (
        <View style={{ ...defaultStyle }}>

            <Header back={true} />

            <Heading text1={'Payment'} text2={'Method'} />

            <View style={styles.container}>
                <RadioButton.Group
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                >
                    <View style={styles.radioContent}>
                        <Text style={styles.radioContentStyle}>Cash on Delivery</Text>
                        <RadioButton color={colors.color1} value={"COD"} />
                    </View>
                    <View style={styles.radioContent}>
                        <Text style={styles.radioContentStyle}>Online</Text>
                        <RadioButton color={colors.color1} value={"ONLINE"} />
                    </View>
                </RadioButton.Group>
            </View>

            <TouchableOpacity onPress={
                !isAuthenticated ? redirectToLogin : paymentMethod === 'COD' ? CODHandler : onlineHandler
            }>
                <Button textColor={colors.color2} icon={paymentMethod === 'COD' ? 'check-circle' : 'circle-multiple-outline'} style={styles.btn}>
                    {
                        paymentMethod === 'COD' ? 'Place Order' : 'Pay'
                    }
                </Button>
            </TouchableOpacity>
        </View>
    )
}

export default Payment;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color3,
        padding: 30,
        borderRadius: 10,
        marginVertical: 20,
        flex: 1,
        justifyContent: 'center'
    },
    radioContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,

    },
    radioContentStyle: {
        fontWeight: '600',
        fontSize: 18,
        textTransform: 'uppercase',
        color: colors.color2
    },
    btn: {
        backgroundColor: colors.color3,
        borderRadius: 100,
        margin: 10,
        padding: 5
    }
})