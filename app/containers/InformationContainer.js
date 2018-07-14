import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Container, Content, Text } from 'native-base'

import NavbarHome from '../particles/NavbarHome'


class InformationContainer extends Component {

  constructor(){
      super()
  }

  handleGoback(){
    this.props.navigation.goBack()
  }

  render() {
    return (
        <Container style={{backgroundColor: '#FFFFFF'}}>
            <NavbarHome
              title="Information"
              handleGoback={() => this.handleGoback()}
              iconGoback='arrow-back'
            />
            <Content style={styles.content}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>This App using public api from </Text>
                    <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://developer.nytimes.com')}}>
                        <Text style={styles.textLinkDetail}>http://developer.nytimes.com</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}> Created by Arif Rachman, Thankyou :) </Text>
            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
    content: {
      padding: 20,
    },
    text: {
      fontSize: 12,
      textAlign: 'center'
    },
    textLinkDetail: {
        color: '#00a1dd',
        fontSize: 12,
        textDecorationLine: 'underline'
      }
  })

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

export default connect(mapStateToProps, mapDispatchToProps)(InformationContainer)