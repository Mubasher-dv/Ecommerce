import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles';
import { Avatar } from 'react-native-paper'
import { useSelector } from 'react-redux';

const Footer = ({ activeRoute }) => {

    const navigation = useNavigation();

    const {loading, isAuthenticated} = useSelector((state) => state.user)

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