import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './productcart.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { CurrencyFormatter, NumberFormatter } from '../../controllers/NumberFormatter'

const ProductCart = () => {
  const navigation = useNavigation()
  const numberFormatter = new NumberFormatter()
  const currencyFormatter = new CurrencyFormatter(numberFormatter)

  return (
    <TouchableOpacity onPress={() => { navigation.navigate('ProductDetails') }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://ascensionlatorre.com/wp-content/uploads/2021/05/Tendencias-de-muebles-de-lujo-que-triunfaran-en-2021-1.jpg' }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>Producto</Text>
          <Text style={styles.supplier} numberOfLines={1}>Producto</Text>
          <Text style={styles.price}>{currencyFormatter.format(90.555555)}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name={'add-circle'} size={32} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCart