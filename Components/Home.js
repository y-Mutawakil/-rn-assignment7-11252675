import { StyleSheet, Text, View, Image, FlatList , TouchableOpacity ,  ActivityIndicator} from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import OptionsCard from './OptionsCard';
import { CartContext } from './CartContext';


export default function Home ( { navigation } ){
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    const [option, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleCartNavigation = () => {
        navigation.navigate('Cart');
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products'); 
            const data = await response.json();
            // console.log('Fetched data:', data); 
            setOptions(data); 
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
             }, []);

    if (loading) {
    return (
        <View style={styles.container2}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
    }


    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.header}> 

                    <View >
                        <TouchableOpacity title="Open Drawer" onPress={() => navigation.openDrawer()}>
                            <Image source={require("./assets/Menu.png")}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Image source={require("./assets/Logo.png")}/>
                    </View>

                    <View style={styles.farRight}>
                        <View>
                            <Image source={require("./assets/Search.png")}/>

                        </View>

                        <View>
                            <TouchableOpacity   onPress={handleCartNavigation }> 
                                <Image source={require("./assets/shoppingBag.png")} style={styles.bag}/>
                            </TouchableOpacity>
                        </View>
      
                    </View>

                </View>

                <View style={styles.header}>

                    <View>
                        <Text style={styles.story}>
                            OUR STORY
                        </Text>
                    </View>

                    <View style={styles.farRight}>
                        <View style={styles.circleContainer}>
                            <Image source={require("./assets/Listview.png")} />

                        </View>

                        <View style={styles.circleContainer}>
                            <Image source={require("./assets/Filter.png")} />
                        </View>
                    </View>
                </View>

                <FlatList 
                    data= {option}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <OptionsCard item={item} addToCart={addToCart} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                />


                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container2: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },

    container1: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 12,
        marginRight: 12,
        marginTop: 70,
      },

      header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
      },

      bag: {
        marginLeft: 20
      },

      farRight: {
        display: "flex",
        flexDirection: "row",
      },

      circleContainer: {
        width: 40,
        height: 40,
        backgroundColor: "#F0f0f0",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
      },

      story: {
        fontFamily: 'monospace',
        fontSize: 20
      },

      

  




  });