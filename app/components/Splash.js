import React from 'react'
import { StyleSheet, Text, StatusBar } from 'react-native'
import { Container } from 'native-base'

const Splash = () => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#00A1DD" />
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