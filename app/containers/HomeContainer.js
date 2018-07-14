import React, { Component } from 'react'
import { connect } from 'react-redux'
import OneSignal from 'react-native-onesignal'

import Home from '../components/Home'
import Menus from '../particles/Menus'

const dataMenus = [
  {
    menuText: 'Articles',
    image: require('../assets/article.png'),
    action: 'SearchArticlesContainer'
  },
  {
    menuText: 'Books',
    image: require('../assets/books.png'),
    total: 1000,
    action: 'SearchBooksContainer'
  },
  {
    menuText: 'About Me',
    image: require('../assets/boy.png'),
    total: 1000,
    action: 'AboutMeContainer'
  },
  {
    menuText: 'Information',
    image: require('../assets/information.png'),
    total: 1000,
    action: 'InformationContainer'
  }
]

class HomeContainer extends Component {

  componentWillMount() {
    OneSignal.init("c9266cd5-9b8a-45d9-9d49-2dc8a813d4e2");
  
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
      OneSignal.removeEventListener('received', this.onReceived);
      OneSignal.removeEventListener('opened', this.onOpened);
      OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
      console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }
  

  onIds(device) {
  console.log('Device info: ', device);
  }

  render() {
    return (
      <Home
        title="Portfolio #1"
        
        dataMenusButton={dataMenus}
        renderMenusButton={({ item }) => (
          <Menus 
            menuText={item.menuText} 
            image={item.image}
            total={item.total}
            action={() => this.props.navigation.navigate(item.action, {data: item})}
          />
        )}
      />
    )
  }
}

const mapDispatchToProps = () =>{
  return{
    
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)