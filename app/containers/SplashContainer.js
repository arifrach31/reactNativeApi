import React, { PureComponent } from 'react'
import { AsyncStorage } from 'react-native'
import { NavigationAction } from 'react-navigation'
import { connect } from 'react-redux'
import { login } from '../actions/login'
import Splash from '../components/Splash'

class SplashContainer extends PureComponent {
  
  navigateToHome(){
    setTimeout(() => {
      this.props.navigation.navigate("HomeContainer");
    }, 1000)
  }

  navigateToLogin(){
    setTimeout(() => {
      this.props.navigation.navigate("HomeContainer");
    }, 1000)
  }
  
  async componentDidMount(){
    const session = await AsyncStorage.getItem('session')
    const data = await JSON.parse(session)
    console.log(data)
    if(data !== null){
      try{
        await this.props.login(data.email, data.password)
        this.navigateToHome()
      }catch(e){
        alert(e)
      }
    }else{
      this.navigateToLogin()
    }
  }

  render() {
    return (
      <Splash />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(null, mapDispatchToProps)(SplashContainer)
