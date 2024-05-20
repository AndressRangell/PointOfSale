import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import styles from './productdetails.style'
import { COLORS } from '../constants/theme'
import { useNavigation } from '@react-navigation/native'
import CartManager from '../controllers/CartManager'
import counter from '../constants/utils'

const ProductDetail = () => {
  const navigation = useNavigation()
  const [count, setCount] = useState(1)

  const handleAddToCart = () => {
    CartManager.addToCart('https://www.ociohogar.com/img/cms/categorias/muebles_de_lujo.jpg')
    counter.count++
    navigation.navigate('Cart')
  }

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity>
          <Ionicons name={'chevron-back-circle'} size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name={'heart'} size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: 'https://www.ociohogar.com/img/cms/categorias/muebles_de_lujo.jpg' }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Producto</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 99.99</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name={'star'}
                size={24}
                color={'gold'}
              />
            ))}
            <Text style={styles.ratingText}> (4.9) </Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name={'minus'} size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>  {count}  </Text>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name={'plus'} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Descripción</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={styles.deliveryContainer}>
          <View style={styles.location}>
            <View style={styles.locationRow}>
              <Ionicons name={'location-outline'} size={20} />
              <Text>  Bucaramanga  </Text>
            </View>
            <View style={styles.locationRow}>
              <MaterialCommunityIcons name={'truck-delivery-outline'} size={20} />
              <Text>  Envío gratis  </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={handleAddToCart} style={styles.buyButton}>
            <Text style={styles.cartTitle}>Comprar Ahora</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} style={styles.addCartButton}>
            <Feather name={'shopping-bag'} size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail