import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { colors, defaultStyle, formHeading, formStyles, inputOptions, defaultImg } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper';
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const user = {
  name: 'Mubasher',
  email: 'mubasher@gmail.com'
}
const loading = false;

const Profile = ({ navigation, route }) => {

  const [avatar, setAvatar] = useState(null)

  const logoutHandler = () => {
    console.log('sign out')
  }

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate('adminPanel')
        break;
      case "Orders":
        navigation.navigate('orders')
        break;
      case "Profile":
        navigation.navigate('updateProfile')
        break;
      case "Password":
        navigation.navigate('changePassword')
        break;
      case "LogOut":
        logoutHandler()
        break;

      default:
        navigation.navigate('orders')
        break;
    }
  }

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image)
      // dispatch update pic here
    }
  }, [route.params])

  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Profile</Text>
        </View>

        {/* Loading */}

        {
          loading ? <Loader /> : (
            <>
              <View style={styles.container}>
                <Avatar.Image
                  size={100}
                  style={{ backgroundColor: colors.color1 }}
                  source={{ uri: avatar }}
                />

                <TouchableOpacity onPress={() => navigation.navigate('camera', { updateProfile: true })}>
                  <Button textColor={colors.color2}>Change Photo</Button>
                </TouchableOpacity>

                <Text style={styles.name}>{user?.name}</Text>
                <Text style={{ fontWeight: '300', color: colors.color2 }}>{user?.email}</Text>
              </View>

              <View>
                <View style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-between'
                }}
                >
                  <ButtonBox handler={navigateHandler} text={'Orders'} icon={"format-list-bulleted-square"} />
                  <ButtonBox handler={navigateHandler} icon={"view-dashboard"} text={'Admin'} reverse={true} />
                  <ButtonBox handler={navigateHandler} text={'Profile'} icon={'pencil'} />
                </View>

                <View style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-evenly'
                }}>
                  <ButtonBox handler={navigateHandler} text={'Password'} icon={'pencil'} />
                  <ButtonBox handler={navigateHandler} text={'LogOut'} icon={'exit-to-app'} />
                </View>
              </View>
            </>
          )
        }
      </View>

      <Footer />
    </>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    color: colors.color2
  }
})