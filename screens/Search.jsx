import { View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './search.style'
import { Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme'

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <View>
          <TouchableOpacity style={styles.searchButton}>
            <Feather name={'search'} size={SIZES.xLarge} color={COLORS.offWhite} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onPressIn={() => {}}
            placeholder='¿Qué estás buscando?'
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search