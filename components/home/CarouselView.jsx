import { View, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import styles from './carouselview.style'

const CarouselView = () => {
  const slides = [
    "https://ascensionlatorre.com/wp-content/uploads/2021/05/Tendencias-de-muebles-de-lujo-que-triunfaran-en-2021-1.jpg",
    "https://www.ascensionlatorre.com/wp-content/uploads/2021/05/Tendencias-de-muebles-de-lujo-que-triunfaran-en-2021.jpg",
    "https://soher.com/wp/wp-content/uploads/2021/11/Decoracion-de-lujo.jpg",
    "https://www.ociohogar.com/img/cms/categorias/muebles_de_lujo.jpg"
  ]

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={{ uri: item }} style={styles.slideImage} />
      </View>
    )
  }

  return (
    <Carousel
      data={slides}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={Dimensions.get('window').width * 0.9}
      loop={true}
      autoplay={true}
      autoplayInterval={5000}
    />
  )
}

export default CarouselView