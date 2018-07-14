import React from 'react'
import { StyleSheet, Image, StatusBar } from 'react-native'
import { Container } from 'native-base'
import logo from '../assets/logo.png'

const Splash = () => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#00A1DD" />
    <Image source={logo} style={styles.logo} resizeMode="contain" />
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 150
  },
})

export default Splash