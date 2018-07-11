import React from 'react'
import { StyleSheet, View, Dimensions,
  TouchableOpacity, Image, Linking } from 'react-native'
import { Content, Text } from 'native-base'

const { width, height } = Dimensions.get('window')

const Menus = (props) => (
  <Content style={styles.content}>
    <TouchableOpacity onPress={props.menuText === 'About Me' ? ()=>{ Linking.openURL('https://www.linkedin.com/in/arifrach/')} : props.action}>
      <Image source={props.image} style={styles.image} resizeMode="contain"/>
      <View style={styles.contentDetail}>
        <Text style={styles.txtTitle}>{props.menuText}</Text>
      </View>
    </TouchableOpacity>
  </Content>
)

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    marginRight: 10,
    marginBottom: 10,
    padding: 20,
  },
  contentDetail: {
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: '80%',
    height: 150,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Menus
