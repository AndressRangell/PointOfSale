import { TouchableOpacity, Text, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import styles from './home.style'
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/theme'
import { ScrollView } from 'react-native-gesture-handler'
import CarouselView from '../components/home/CarouselView'
import ProductSection from '../components/home/ProductSection'
import { useNavigation } from '@react-navigation/native'
import counter from '../constants/utils'
import LocationManager from '../location/LocationManager'
import USALocationState from '../location/countries/UsaLocationState'
import SpainLocationState from '../location/countries/SpainLocationState'

const Home = () => {
  const navigation = useNavigation()
  const country = "USA"

  const [locationManager] = useState(new LocationManager())

  useEffect(() => {
    switch (country) {
      case 'USA':
        locationManager.setState(new USALocationState(locationManager))
        break;
      case 'Europe':
        locationManager.setState(new SpainLocationState(locationManager))
        break;
      default:
        locationManager.setState(new USALocationState(locationManager))
    }
  }, [country]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <View style={styles.titleContainer}>
              <FontAwesome5 name={'couch'} size={26} color={COLORS.primary} />
              <Text style={styles.title}> Majestic Mart </Text>
            </View>
            <View style={styles.cartContainer}>
              <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
                {counter.count > 0 ? <View style={styles.cartCount}>
                  <Text style={styles.cartNumber}> {counter.count} </Text>
                </View> : null}
                <Feather name={'shopping-bag'} size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView>
          <CarouselView />
          <ProductSection
            title={'Más Vendidos'}
            icon={'star'}
            items={['item 1', 'item 2', 'item 3', 'item 4']}
          />
          <ProductSection
            title={'Nueva Colección'}
            icon={'smile-circle'}
            items={['item 1', 'item 2', 'item 3', 'item 4']}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home