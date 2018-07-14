import React from 'react'
import { connect } from 'react-redux'
import { Button, Spinner, Text } from 'native-base'
import { Alert, AsyncStorage, StyleSheet } from 'react-native'
import { isEmpty, isEmail } from 'validator'

import Login from '../components/Login'
import { login } from '../actions/login'
import { setFailed } from '../actions/processor'

class LoginContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps !== this.props) {
      return true
    }

    if(nextState !== this.state) {
      return true
    }

    return false
  }

  componentWillUpdate(nextProps) {
    const { loading, success, failed, navigation } = nextProps
    if (
      loading.condition === false &&
      loading.process_on === 'LOADING_PROCESS_LOGIN' &&
      failed.condition === true &&
      failed.process_on === 'FAILED_PROCESS_LOGIN'
    ) {
      Alert.alert('Login gagal', 'Silahkan Cek Kembali Akun Anda!')
    } else if (
      loading.condition === false &&
      loading.process_on === 'LOADING_PROCESS_LOGIN' &&
      success.condition === true &&
      success.process_on === 'SUCCESS_PROCESS_LOGIN'
    ) {
      navigation.navigate('HomeContainer')
    }
  }

  componentDidUpdate(prevProps) {
    const { failed, setFailed } = prevProps
    if(failed.condition === true) {
      setFailed(false, 'FAILED_PROCESS_LOGIN', '')
    }
  }

  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    if(data !== null){
      try{
        await this.props.login(data.email, data.password)
        this.props.navigation.navigate('HomeContainer')
      }catch(e){
        alert(e)
      }
    }
  }

  handleValidationLogin() {
    const { email, password } = this.state
		if (!isEmail(email)) {
			Alert.alert('Login Failed', 'Silahkan masukan alamat email yang valid')
		} else {
			this.props.login(email, password)
		}
  }

  renderButtons() {
    const { email, password } = this.state
    const { loading } = this.props
		if (!isEmpty(email) && !isEmpty(password)) {
			return (
        <Button style={styles.buttonLoginActive} rounded onPress={() => this.handleValidationLogin()}>
          {loading.condition === true && loading.process_on === 'LOADING_PROCESS_LOGIN' ? (
            <Spinner color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonLoginActiveText}>Sign In</Text>
          )}
        </Button>
			)
		} else {
			return (
				<Button rounded bordered style={styles.buttonLoginInactive}>
					<Text style={styles.buttonLoginInactiveText}>Sign In</Text>
				</Button>
			)
		}
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Login
        headerTitle="Login"
        valueEmail={this.state.email}
        valuePassword={this.state.password}
        onChangeEmail={(email) => this.setState({email})}
        onChangePassword={(password) => this.setState({password})}
        renderButtons={this.renderButtons()}
        navigateToRegister={() => navigate('RegisterContainer')} />
    )
  }
}

const styles = StyleSheet.create({
  buttonLoginActive: {
    backgroundColor: '#00A1DD',
    width: 135,
    height: 40,
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonLoginActiveText: {
    fontSize: 14,
    fontWeight: "bold",
    color: '#FFF',
    alignSelf: "center",
  },
  buttonLoginInactive: {
    width: 135,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
    borderColor: "#00A1DD"
  },
  buttonLoginInactiveText: {
    alignSelf: "center",
    fontSize: 12,
    color: "#00A1DD",
    fontWeight: "bold"
  }
})

const mapStateToProps = state => ({
  loading: state.loading,
  success: state.success,
  failed: state.failed
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  setFailed: (condition, process_on, message) => dispatch(setFailed(condition, process_on, message))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)