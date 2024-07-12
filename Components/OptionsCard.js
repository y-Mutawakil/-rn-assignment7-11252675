import { View , StyleSheet , Text, Image, TouchableOpacity } from "react-native";
import { CartContext } from './CartContext';
import { useContext } from 'react';

const OptionsCard = ({ item}) => {
    const { addToCart } = useContext(CartContext);

    return(
        <View style={styles.optionsView}>

            <View style={styles.leftOptions}>

                <Image  source={{ uri: item.image }}  style={styles.productImage} />

                <TouchableOpacity onPress={() => addToCart(item)} >
                    <Image source={ require('./assets/add_circle.png')}  style={styles.addButton} 
                     />
                </TouchableOpacity>

                <Text style={styles.itemType} >
                    {item.title}
                </Text>

                <Text style={styles.cardigan}>
                   {item.category}
                </Text>

                <Text style={styles.price}>
                    ${item.price}
                </Text>

            </View>

            
        </View>
    )
};

const styles = StyleSheet.create({
    optionsView: {
        marginRight:  10,
        marginBottom: 12,
        
    },

    itemType: {
        fontFamily: 'serif',
        marginBottom: 5,
       
    },

    cardigan: {
        fontWeight: '200',
        fontSize: 11,
        fontFamily: 'sans-serif',
        marginBottom: 5
     },

     price: {
        color: 'tomato',
        marginBottom: 5
     },

     addButton: {
        bottom: 30,
        left: 130
     },

     productImage: {
        width: 150,
        height: 100,
        resizeMode: 'contain', 
    },

    leftOptions: {
        width: '50%',
        marginRight: 20
    }
});

export default OptionsCard;