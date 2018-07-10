import React from 'react'
import { StyleSheet, FlatList, StatusBar } from 'react-native'
import { Container } from 'native-base'

import NavbarHome from '../particles/NavbarHome'

const Home = (props) => (
  <Container style={styles.container}>
    <NavbarHome
      title={props.title}
    />
    <StatusBar
      backgroundColor="#00a1dd"
      barStyle="light-content"
    />
    <FlatList
      style={styles.content}
      numColumns={2}
      data={props.dataMenusButton}
      renderItem={props.renderMenusButton} />
  </Container>
)

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