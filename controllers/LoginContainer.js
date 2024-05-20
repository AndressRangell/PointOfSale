import React, { Component } from 'react'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmailChange = (text) => { this.setState({ email: text }) }

  handlePasswordChange = (text) => { this.setState({ password: text }) }

  handleLogin = () => {
    const { email, password } = this.state
    return email === 'admin' && password === 'admin'
  }

  handleLoginPress = () => {
    const { navigation } = this.props
    if (this.handleLogin()) {
      navigation.navigate('Bottom Navigation')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  render() {
    return this.props.children({
      email: this.state.email,
      handleEmailChange: this.handleEmailChange,
      password: this.state.password,
      handlePasswordChange: this.handlePasswordChange,
      handleLoginPress: this.handleLoginPress
    })
  }
}

export default LoginContainer