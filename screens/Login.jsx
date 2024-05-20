import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './login.style'
import { useNavigation } from '@react-navigation/native'
import LoginContainer from '../controllers/LoginContainer'
import AuthContext from './AuthStrategy'

const Login = () => {
  const navigation = useNavigation()

  const [authContext] = useState(new AuthContext())
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const authenticateWithEmail = () => {
    authContext.setStrategy(new EmailAuthStrategy())
    try {
      const result = authContext.authenticate(email, password)
      setStatus(result)
    } catch (error) {
      setStatus(error.message)
    }
  }

  const authenticateWithGoogle = () => {
    authContext.setStrategy(new GoogleAuthStrategy())
    const result = authContext.authenticate()
    setStatus(result)
  }

  const authenticateWithFacebook = () => {
    authContext.setStrategy(new FacebookAuthStrategy())
    const result = authContext.authenticate()
    setStatus(result)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Majestic Mart</Text>
      <LoginContainer navigation={navigation}>
        {({ email, handleEmailChange, password, handlePasswordChange, handleLoginPress }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </>
        )}
      </LoginContainer>
    </View>
  )
}

export default Login