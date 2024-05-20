import { FlatList, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './cart.style'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import ProductItem from '../components/cart/ProductItem'
import CartManager from '../controllers/CartManager'
import counter from '../constants/utils'

const Cart = () => {
  const navigation = useNavigation()

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const updateCartItems = (newCart) => {
      setCartItems(newCart)
    }

    CartManager.subscribeToCartUpdates(updateCartItems)

    return () => {
      CartManager.unsubscribeFromCartUpdates(updateCartItems)
    }
  }, [])

  const renderItem = () => <ProductItem />;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <View style={styles.titleContainer}>
              <Ionicons name={'chevron-back-circle'} size={30} />
              <Text style={styles.title}> Carrito </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.containerList}>
            <FlatList
              data={Array.from({ length: counter.count })}
              renderItem={renderItem}
              vertical
              contentContainerStyle={styles.list}
            />
          </View>
        </ScrollView>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Confirmation') }}
            style={styles.loginButton}
          >
            <Text style={styles.buttonText}>Efectivo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('CreditCard') }}
            style={styles.loginButton}
          >
            <Text style={styles.buttonText}>Tarjeta de Crédito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Cart