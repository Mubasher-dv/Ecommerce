import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { colors, defaultStyle, formHeading, formStyles, inputOptions } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';



const ChangePassword = ({ navigation }) => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const loading = false;

    const submitChangePasswordHandler = () => {
        alert('login submit')
    }

    return (
        <View style={defaultStyle}>

            <Header back={true} />
            {/* Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={formHeading}>Change Password</Text>
            </View>

            <View style={formStyles.container}>
            
                <TextInput
                    {...inputOptions}
                    placeholder="Old Password"
                    secureTextEntry={true}
                    value={oldPassword}
                    onChangeText={setOldPassword}
                />

                <TextInput
                    {...inputOptions}
                    placeholder="New Password"
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />

                <Button
                    loading={loading}
                    textColor={colors.color2}
                    disabled={oldPassword === "" || newPassword === ""}
                    style={formStyles.btn}
                    onPress={submitChangePasswordHandler}
                >
                    Change Password
                </Button>
            </View>
        </View>

    )
}


export default ChangePassword;