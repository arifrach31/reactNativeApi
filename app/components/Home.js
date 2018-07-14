import React from 'react'
import { StyleSheet, FlatList, StatusBar, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'
import Carousel from 'react-native-banner-carousel'

import NavbarHome from '../particles/NavbarHome'

const { height } = Dimensions.get('window')
const bannerWidth = Dimensions.get('window').width

const Home = (props) => {
  {console.log('props: ', props)}
  return(
  <Container style={styles.container}>
    <NavbarHome
      title={props.title}
    />
    <StatusBar
      backgroundColor="#00a1dd"
      barStyle="light-content"
    />
    <Content>
      <Carousel loop={true} index={0} pageSize={bannerWidth}>
        {props.banners}
      </Carousel>
      <FlatList
        style={styles.content}
        numColumns={2}
        data={props.dataMenusButton}
        renderItem={props.renderMenusButton} />
    </Content>
  </Container>
)}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 10,
    paddingLeft: 10
  }
})

export default Home