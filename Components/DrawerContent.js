import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>

         <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={require('./assets/Close.png')} style={styles.closeIcon} />
        </TouchableOpacity>

      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>ERIC ATSU</Text>
      </View>

      <View style={styles.line}></View>
      
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Cart"
        onPress={() => props.navigation.navigate('Cart')}
      />

      <Text style={styles.text1}>
        Store
      </Text>

      <Text style={styles.text1}>
        Locations
      </Text>

      <Text style={styles.text1}>
        Blog
      </Text>

      <Text style={styles.text1}>
        Jewellery
      </Text>

      <Text style={styles.text1}>
        Electronic
      </Text>

      <Text style={styles.text1}>
        Clothing
      </Text>

    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({

  drawerHeader: {
    padding: 16,
  },

  drawerHeaderText: {
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'monospace',

  },

  line: {
    height: 1,
    width: '32%',
    backgroundColor: 'red',
    left:20
  },

  closeIcon: {
    width: 24,
    height: 24,
    left: 18
  },

  text1: {
    padding: 16,
    fontWeight: '200',
    fontFamily: 'monospace',
  }
});

export default CustomDrawerContent;
