import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { colors, defaultStyle, formHeading, formStyles, inputOptions } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';



const Verify = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('')

    const loading = false;

    

    const submitVerifyHandler = () => {
        alert('login submit')

        // will remove this in future
        navigation.navigate('login')
    }

    return (
        <>
        <View style={defaultStyle}>
          {/* Heading */}
          <View style={{ marginBottom: 20 }}>
            <Text style={formHeading}>Reset Password</Text>
          </View>
  
          <View style={formStyles.container}>
            <TextInput
              {...inputOptions}
              placeholder="OTP"
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
            />
            <TextInput
              {...inputOptions}
              placeholder="New Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
  
            <Button
              loading={loading}
              textColor={colors.color2}
              disabled={otp === "" || password === ""}
              style={formStyles.btn}
              onPress={submitVerifyHandler}
            >
              Reset Password
            </Button>
  
            <Text style={formStyles.or}>OR</Text>
  
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("forgetPassword")}
            >
              <Text style={formStyles.link}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <Footer activeRoute="profile" />
      </>
    )
}


export default Verify