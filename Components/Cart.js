import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';

export default function Cart({ route, navigation }) {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleProductPress = (item) => {
        navigation.navigate('ProductDetails', { item });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>

                </View>

                <View> 
                    <Image source={require('./assets/Logo.png')} />
                </View>

                <View>
                    <Image source={require('./assets/Search.png')} />
                </View>
            </View>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleProductPress(item)}>
                        <View style={styles.cartItem}>

                            <View style={styles.cartImg}> 
                            <Image  source={{ uri: item.image }}  style={styles.productImage} />

                            </View>

                            <View>
                                <Text style={styles.story}>  {item.title} </Text>

                                    <Text style={styles.cardigan}>
                                        {item.category}
                                    </Text>

                                <Text style={styles.price}> ${item.price}</Text>

                            </View>

                            <View style={styles.delete}>
                                <TouchableOpacity  onPress={() => removeFromCart(item.id)}>
                                    <Image source={require('./assets/remove.png')} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </TouchableOpacity>
                )}
               
            />

                        <View style={styles.footer}>
                           <View>
                             <Image source={require("./assets/shoppingBag.png")} />
                           </View>
                           
                           <View>
                                <Text style={styles.checkout}>
                                    CHECKOUT
                                </Text>
                           </View>
                        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 40
    },


    cartItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '70%'
    },

    cardigan: {
        fontWeight: '200',
        fontSize: 11,
        fontFamily: 'sans-serif',
        marginBottom: 15
     },

     story: {
        fontFamily: 'monospace',
        fontSize: 20,
        marginBottom: 15     
     },

     delete: {
        right: 40
     },

     cartImg: {
        marginRight: 10
     },

     price: {
        color: 'tomato'
     },

     footer: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f8f8f8',
        padding: 20,
        alignItems: 'center',
        top: 20,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center'
      },

      checkout: {
        fontSize: 20,
        marginLeft: 10
      },

      productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain', 
    },
});
