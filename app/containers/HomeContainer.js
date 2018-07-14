import React, { Component } from 'react'
import { connect } from 'react-redux'
import OneSignal from 'react-native-onesignal'
import { Dimensions, StyleSheet, Image, View } from 'react-native'

import Home from '../components/Home'
import Menus from '../particles/Menus'
import { fetchBanners } from '../actions/banners'

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

const { height } = Dimensions.get('window')
const bannerWidth = Dimensions.get('window').width
const bannerHeight = height / 2.8

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

  renderBanners(banner, index) {
    return (
      <View key={index} style={styles.banner}>
        <Image style={styles.bannerImage} source={{ uri: banner.banner_url }} />
      </View>
    )
  }

  async componentDidMount(){
    await this.props.fetchBanners()
  }

  render() {
    const { banners } = this.props
    return (
      <Home
        title="Portfolio #1"
        banners={banners.map((banner, index) => this.renderBanners(banner, index))}
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

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#000'
  },
  bannerImage: {
    width: bannerWidth,
    height: bannerHeight,
    opacity: 1
  }
})

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchBanners: () => dispatch(fetchBanners())
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    banners: state.banners
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)