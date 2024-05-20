import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './creditcard.style'
//import nfcManager, { NfcTech } from 'react-native-nfc-manager'

//nfcManager.start()

const CreditCard = () => {
  const navigation = useNavigation()

  /**async function readNfc() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef)
      const tag = await NfcManager.getTag()
      console.warn('Tag found', tag)
    } catch (ex) {
      console.warn('Oops!', ex)
    } finally {
      NfcManager.cancelTechnologyRequest()
    }
  }**/

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Confirmation')
    }, 4000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Acerque la tarjeta </Text>
      {/*readNfc()*/}
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1422169894/id/vektor/pembayaran-terminal-pos-tanpa-kontak-dengan-kartu-bank-melalui-wifi-transaksi-pembelian.jpg?s=170667a&w=0&k=20&c=4C01QvGE0KP9lT57dfC3CLxCGWlisWrQffl5cMw2sIs=' }}
        style={styles.image}
      />
    </View>
  )
}

export default CreditCard