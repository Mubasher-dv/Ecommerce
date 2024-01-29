import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { colors, defaultStyle, formHeading, formStyles, inputOptions } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';



const ForgetPassword = ({ navigation }) => {

    const [email, setEmail] = useState('');

    const loading = false;

    

    const submitForgetPasswordHandler = () => {
        alert('login submit')

        // will remove this in future
        navigation.navigate('verify')
    }

    return (
        <>
        <View style={defaultStyle}>
          {/* Heading */}
          <View style={{ marginBottom: 20 }}>
            <Text style={formHeading}>Forget Password</Text>
          </View>
  
          <View style={formStyles.container}>
            <TextInput
              {...inputOptions}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
  
            <Button
              loading={loading}
              textColor={colors.color2}
              disabled={email === ""}
              style={formStyles.btn}
              onPress={submitForgetPasswordHandler}
            >
              Send OTP
            </Button>
  
            <Text style={formStyles.or}>OR</Text>
  
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={formStyles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <Footer activeRoute="profile" />
      </>
    )
}

export default ForgetPassword;

