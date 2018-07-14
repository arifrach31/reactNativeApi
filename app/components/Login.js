import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Container, Content, Button, Input, Item, } from 'native-base'
import PropsTypes from 'prop-types'


const Login = (props) => (
  <Container style={styles.container}>
    <StatusBar
      backgroundColor="#00a1dd" 
    />
    <View style={styles.headerLogin}>
      <Text style={styles.titleText}>ARIFRACH</Text>
      <Text style={styles.descriptionText}>PORTFOLIO #1</Text>
    </View>
    <View style={styles.formLogin}>
      <Item regular style={styles.item}>
        <Input
          keyboardType='email-address'
          placeholder='Username or Email'
          style={styles.input}
          value={props.valueEmail}
          onChangeText={props.onChangeEmail} />
      </Item>
      <Item regular style={styles.item}>
        <Input
          secureTextEntry
          placeholder='Password'
          style={styles.input}
          value={props.valuePassword}
          onChangeText={props.onChangePassword} />
      </Item>
      {props.renderButtons}
      <Text>Don't have account? Cekidot!</Text>
      <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => alert('Sign Up Under')}>
        <Text style={{ alignSelf: 'center', fontSize: 12, color: '#00A1DD' }}>Email: admin@admin.com | Password: admin</Text>
      </TouchableOpacity>
    </View>
  </Container>
)

Login.propTypes = {
  valueEmail: PropsTypes.string,
  valuePassword: PropsTypes.string,
  onChangeEmail: PropsTypes.func,
  onChangePassword: PropsTypes.func,
  navigateToRegister: PropsTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  headerLogin: {
    backgroundColor: '#00A1DD',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleBox: {
    margin: 20,
    justifyContent: "center",
    alignItems: 'center'
  },
  titleText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1
  },
  descriptionText: {
    color: '#2A2A2A',
    fontWeight: 'bold',
    fontSize: 10,
    letterSpacing: 1
  },
  formLogin: {
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: 40,
    fontSize: 12,
    width: 200
  },
  item: {
    marginBottom: 20,
    borderRadius: 5,
  }
});

export default Login