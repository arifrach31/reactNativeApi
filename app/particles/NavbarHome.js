import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Body, 
  Right, Title, Icon, Button } from 'native-base'

const NavbarHome = (props) => (
  <Header style={styles.header}>
    <Left style={{flex: 1}}>
      <Button transparent onPress={props.handleGoback}>
        <Icon name={props.iconGoback} style={{color: '#FFF'}}/>
      </Button>
    </Left>
    <Body style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
      <Title style={styles.title}>{props.title}</Title>
    </Body>
    <Right style={{flex: 1}}>
      <Button transparent onPress={props.handleLogout}>
        <Icon name={props.iconLogout} style={{color: '#FFF'}}/>
      </Button>
    </Right>
  </Header>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00A1DD',
  },
  title: {
    color: '#FFF'
  }
})

export default NavbarHome