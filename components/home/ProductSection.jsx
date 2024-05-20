import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import styles from './productsection.style'
import ProductCart from './ProductCart'

const ProductSection = ({ title, icon, items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <AntDesign name={icon} size={24} color={COLORS.primary} />
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          data={items}
          renderItem={({ item }) => <ProductCart />}
          horizontal
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  )
}

export default ProductSection