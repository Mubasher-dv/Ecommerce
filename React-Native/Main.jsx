import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Toast from 'react-native-toast-message';
import Cart from './screens/Cart';
import ConfirmOrder from './screens/ConfirmOrder';
import Payment from './screens/Payment';
import Login from './screens/Login';
import Profile from './screens/Profile';
import ForgetPassword from './screens/ForgetPassword';
import Verify from './screens/Verify';
import SignUp from './screens/SignUp';
import UpdateProfile from './screens/UpdateProfile';
import ChangePassword from './screens/ChangePassword';
import Orders from './screens/Orders';
import AdminPanel from './screens/Admin/AdminPanel';
import Categories from './screens/Admin/Categories';
import AdminOrders from './screens/Admin/AdminOrders';
import UpdateProduct from './screens/Admin/UpdateProduct';
import NewProduct from './screens/Admin/NewProduct';
import ProductImages from './screens/Admin/ProductImages';
import CameraComponent from './screens/Camera';
import { loadUser } from './redux/actions/userActions';

const Stack = createNativeStackNavigator();

const Main = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.user)

    useEffect(() => {
        // dispatch(loadUser())
    }, [dispatch])


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false
            }}>
                <Stack.Group>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='productDetails' component={ProductDetails} />
                    <Stack.Screen name='cart' component={Cart} />
                    <Stack.Screen name='confirmOrder' component={ConfirmOrder} />
                    <Stack.Screen name='payment' component={Payment} />
                    <Stack.Screen name='login' component={Login} />
                    <Stack.Screen name='forgetPassword' component={ForgetPassword} />
                    <Stack.Screen name='verify' component={Verify} />
                    <Stack.Screen name='signup' component={SignUp} />
                    <Stack.Screen name='Profile' component={Profile} />
                    <Stack.Screen name='updateProfile' component={UpdateProfile} />
                    <Stack.Screen name='changePassword' component={ChangePassword} />
                    <Stack.Screen name='orders' component={Orders} />

                    {/* Admin Routes */}
                    <Stack.Screen name='adminPanel' component={AdminPanel} />
                    <Stack.Screen name='categories' component={Categories} />
                    <Stack.Screen name='adminOrders' component={AdminOrders} />
                    <Stack.Screen name='updateProduct' component={UpdateProduct} />
                    <Stack.Screen name='newProduct' component={NewProduct} />
                    <Stack.Screen name='productImages' component={ProductImages} />
                    <Stack.Screen name='camera' component={CameraComponent} />
                </Stack.Group>
            </Stack.Navigator>
            <Toast position='top' />
        </NavigationContainer>
    )
}

export default Main