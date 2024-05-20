import { View, Image } from 'react-native'
import React from 'react'
import styles from './profile.style'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '../constants/theme'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{width: '100%'}}>
          <Image
            source={{ uri: 'https://artna.jp/wp-content/uploads/2021/05/daigo-starrysky01.jpg' }}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg'}}
            style={styles.profile}
          />
        </View>
      </View>
    </View>
  )
}

export default Profile