import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../styles/styles';
import MyModal from './MyModal';

const ProductListItem = ({
    key,
    id,
    i,
    price,
    stock,
    name,
    category,
    imgSrc,
    navigation,
    deleteHandler,
}) => {

    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onLongPress={() => setOpenModal(prev => !prev)}
                onPress={() => navigation.navigate('productDetails', { id })}
            >
                <View style={{
                    ...styles.container,
                    backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3
                }}>
                    <Image
                        source={{ uri: imgSrc }}
                        style={{ width: 40, height: 40, resizeMode: 'contain' }}
                    />

                    <Text style={{
                        width: 60,
                        color: colors.color2
                    }}
                        numberOfLines={1}
                    >
                        ${price}
                    </Text>

                    <Text style={{
                        maxWidth: 120,
                        color: colors.color2
                    }}
                        numberOfLines={1}
                    >
                        {name}
                    </Text>

                    <Text style={{
                        width: 60,
                        color: colors.color2
                    }}
                        numberOfLines={1}
                    >
                        {category}
                    </Text>

                    <Text style={{
                        width: 40,
                        color: colors.color2
                    }}
                        numberOfLines={1}
                    >
                        {stock}
                    </Text>
                </View>
            </TouchableOpacity>

            {
                openModal && (
                    <MyModal 
                        id={id}
                        deleteHandler={deleteHandler}
                        navigation={navigation}
                        setOpenModal={setOpenModal}
                    />
                )
            }
        </>
    )
}

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    }
})