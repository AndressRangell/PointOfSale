import React, { useEffect } from 'react'
import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './confirmation.style'

const Confirmation = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Bottom Navigation')
    }, 4000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.cingenieria.pe/wp-content/uploads/2021/08/BANNER-PAGO-EXITOSO-1.png' }}
        style={styles.image}
      />
    </View>
  )
}

export default Confirmation