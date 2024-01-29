import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles';
import { Avatar } from 'react-native-paper'

const Footer = ({ activeRoute }) => {

    const navigation = useNavigation();

    const isAuthenticated = true;
    const loading = false;

    const avatarOptions = {
        color: colors.color2,
        size: 50,
        style: {
            backgroundColor: colors.color1
        }
    }

    const navigationHandler = (key) => {

        if (key === 1) navigation.navigate('cart')
        else if (key === 2) {
            if (isAuthenticated) { navigation.navigate('Profile'); console.log(key) }
            else navigation.navigate('login')
        }
        if (key === 0) {
            navigation.navigate('Home')
        }
        // switch (key) {
        //     case 0:
        //         navigation.navigate('Home')
        //         break;
        //     case 1:
        //         navigation.navigate('cart')
        //         break;
        //     case 2:

        //         // isAuthenticated ? navigation.navigate('profile') : navigation.navigate('login')
        //         if (isAuthenticated) { navigation.navigate('Profile'); console.log(key) }
        //         else navigation.navigate('login')

        //     default:
        //         navigation.navigate('Home')
        //         break;
        // }
    }
    return (
        loading === false && (<View style={{
            backgroundColor: colors.color1,
            borderTopRightRadius: 120,
            borderTopLeftRadius: 120
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigationHandler(1)}>
                    <Avatar.Icon
                        icon={activeRoute === 'cart' ? 'shopping' : 'shopping-outline'}
                        {
                        ...avatarOptions
                        }
                    />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => navigationHandler(2)}>
                    <Avatar.Icon
                        icon={
                            isAuthenticated === false 
                            ? 'login'
                            : activeRoute === 'profile'
                            ? 'account'
                            : 'account-outline'
                        }
                        {
                        ...avatarOptions
                        }
                    />
                </TouchableOpacity>

            </View>

            <View style={{
                position: 'absolute',
                width: 80,
                height: 80,
                backgroundColor: colors.color2,
                borderRadius: 100, justifyContent: 'center',
                alignItems: 'center',
                top: -50,
                alignSelf: 'center'
            }}>
                <View style={{
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigationHandler(0)}>
                        <Avatar.Icon
                            icon={activeRoute === 'Home' ? 'home' : 'home-outline'}
                            {
                            ...avatarOptions
                            }
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>)
    )
}

export default Footer