import React from 'react'
import { StyleSheet, Text, StatusBar } from 'react-native'
import { Container } from 'native-base'

const Splash = () => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#f85859" />
    <Text>Arifrach</Text>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 260,
    height: 80
  },
})

export default Splash