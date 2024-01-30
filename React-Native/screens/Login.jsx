import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
import { colors, defaultStyle, formHeading, formStyles, inputOptions } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/userActions';
import { useMessageAndErrorUser } from '../utils/hooks';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const loading = useMessageAndErrorUser (navigation, dispatch, "profile")
   

  const submitLoginHandler = () => {
    dispatch(login(email, password))

  }

  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Login</Text>
        </View>

        <View style={formStyles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            {...inputOptions}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetPassword")}
          >
            <Text style={formStyles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={email === "" || password === ""}
            style={formStyles.btn}
            onPress={submitLoginHandler}
          >
            Log In
          </Button>

          <Text style={formStyles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={formStyles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10
  },
  forgetText: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: 'flex-end',
    fontWeight: '100'
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6
  },
  or: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '100',
    color: colors.color2
  },
  link: {
    color: colors.color2,
    alignSelf: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    marginVertical: 10,
    marginHorizontal: 20
  }
})