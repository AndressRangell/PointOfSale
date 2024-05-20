import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './productitem.style'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ProductItem = () => {
  const navigation = useNavigation()
  const [count, setCount] = useState(1)

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
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://www.ociohogar.com/img/cms/categorias/muebles_de_lujo.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>Producto</Text>
        <Text style={styles.supplier} numberOfLines={1}>Producto</Text>
        <Text style={styles.price}>$99.99</Text>
      </View>
      <View style={styles.rating}>
        <TouchableOpacity onPress={() => decrement()}>
          <SimpleLineIcons name={'minus'} size={20} />
        </TouchableOpacity>
        <Text style={styles.ratingText}> {count} </Text>
        <TouchableOpacity onPress={() => increment()}>
          <SimpleLineIcons name={'plus'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductItem