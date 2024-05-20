import AuthStrategy from './AuthStrategy'

class EmailAuthStrategy extends AuthStrategy {
  authenticate(email, password) {
    if (email === 'admin' && password === 'admin') {
      return 'Authenticated with email'
    } else {
      throw new Error('Invalid email or password')
    }
  }
}

export default EmailAuthStrategy