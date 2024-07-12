import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProductDetails({ route, navigation }) {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>

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
                                <TouchableOpacity > 
                                    <Image source={require("./assets/shoppingBag.png")} style={styles.bag}/>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
 
                    

                    <View>
                    <Image  source={{ uri: item.image }}  
                    style={styles.image} 
                    resizeMode='cover'/>
                    </View>

                    <View style={styles.belowImage}>
                        <View>
                            <Text style={styles.story}>
                                {item.title}
                            </Text>
                        </View>

                        <View>
                            <Image source={require('./assets/Export.png')}/>
                        </View>
                    </View>

                    <Text style={styles.about}>
                       {item.description}
                    </Text>

                    <Text style={styles.price}>
                        ${item.price}
                    </Text>

                    <Text style={styles.materials}>
                        MATERIALS
                    </Text>

                    <Text style={styles.about}>
                       We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
                    </Text>

                    <View style={styles.warnings}>
                        <View style={styles.warning}> 
                            <View style={styles.image2}>
                                <Image source={require('./assets/DoNotBleach.png')}/>
                            </View>

                            <View >
                                <Text style={styles.warningText}>
                                    Do not  use bleach
                                </Text>
                            </View>
                        </View>

                        <View style={styles.warning}> 
                            <View style={styles.image2}>
                                <Image source={require('./assets/DoNotTumbleDry.png')}/>
                            </View>

                            <View >
                                <Text style={styles.warningText}>
                                    Do not tumble dry
                                </Text>
                            </View>
                        </View>

                        <View style={styles.warning}> 
                            <View style={styles.image2}>
                                <Image source={require('./assets/DoNotWash.png')}/>
                            </View>

                            <View >
                                <Text style={styles.warningText}>
                                    Dry clean with tetrachloroethane
                                </Text>
                            </View>
                        </View>

                        
                        <View style={styles.warning}> 
                            <View style={styles.image2}>
                                <Image source={require('./assets/IronLowTemperature.png')}/>
                            </View>

                            <View >
                                <Text style={styles.warningText}>
                                    Iron at a max of 110°C/230°F
                                </Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.delivery}>
                        <View style={styles.delivery1}>
                            <View style={styles.car}>
                                <Image source={require('./assets/Shipping.png')}/>
                            </View>

                            <View>
                                <Text style={styles.free}>
                                    Free Flat rate Shipping
                                </Text >
                                <Text style={styles.free1}>
                                   estimated to be delivered on
                                </Text>
                                <Text style={styles.free1}>
                                  09/11/2024 - 09/12/2030
                                </Text>
                            </View>

                        </View>

                        <View>
                            <Image source={require('./assets/Up.png')}/>
                        </View>

                    </View>

                    <View style={styles.footer}>
                           <View style={styles.add}>
                             <Image source={require("./assets/Plus.png")} />
                             <Text style={styles.basket}>
                                    ADD TO BASKET
                             </Text>
                           </View>
                           
                           <View>
                                <Image source={require("./assets/Heart.png")} />
                           </View>
                    </View>



                </View>



            </ScrollView>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

      image: {
        width: 336,
        height: 500,
      },

      belowImage: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },

      
     story: {
        fontFamily: 'monospace',
        fontSize: 25,
        marginBottom: 15,
        textTransform: 'uppercase',    
     },

     materials: {
        fontFamily: 'monospace',
        fontSize: 22,
        marginBottom: 15,
     },

     about: {
        fontWeight: '200',
        fontSize: 16,
     },

     price: { 
        fontSize: 24,
        fontFamily: 'monospace',
        color: 'tomato',
        marginBottom: 30
     },

     warnings: { 
        marginTop: 30,
        marginBottom: 20
     },

     warning: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 19
     },

     warningText: {
        marginLeft: 25,
        fontWeight: '200',
        fontSize: 16,
     },

     line: {
        width: '80%',
        height: 1,
        backgroundColor: '#D3D3D3',
        marginBottom: 30
     },

     delivery: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 250
     },

     delivery1: {
        display: 'flex',
        flexDirection: 'row',
     },

     car: {
        marginRight: 20
     },

     free: {
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 7
     },

     free1: {
        fontWeight: '200',
        fontSize: 16,
        marginBottom: 7
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10
      },

      add: {
        display: "flex",
        flexDirection: 'row',
      },

      basket: {
        fontSize: 20,
        marginLeft: 10
      }


});
