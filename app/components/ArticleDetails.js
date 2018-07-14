import React from 'react'
import { StyleSheet, StatusBar, 
  Linking, View, TouchableOpacity } from 'react-native'
import { Container, Content, Text} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import NavbarHome from '../particles/NavbarHome'

const ArticleDetails = (props) => (
  <Container style={styles.container}>
    <NavbarHome
      title="Article Details"
      iconGoback={props.iconGoback}
      handleGoback={props.handleGoback}
    />
    <StatusBar
      backgroundColor="#00a1dd"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <Text style={styles.title}>{props.headline.main}</Text>
      <Text style={styles.textDetail}>{props.articles.snippet}</Text>

      <Grid style={styles.contentDetail}>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Type of Material </Text></Col>
          <Col size={75}><Text style={styles.textDetail}>: {props.articles.type_of_material}</Text></Col>
        </Row>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Source </Text></Col>
          <Col size={75}><Text style={styles.textDetail}>: {props.articles.source}</Text></Col>
        </Row>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Print Page </Text></Col>
          <Col size={75}>{props.articles.print_page !== undefined && props.articles.print_page !== null ? 
            (<Text style={styles.textDetail}>: {props.articles.print_page}</Text> ) : 
            (<Text style={styles.textDetail}>: -</Text>)}
          </Col>
        </Row>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Url Link </Text></Col>
          <Col size={75}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textDetail}>: </Text>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL(props.articles.web_url)}}>
                <Text style={styles.textLinkDetail}>{props.articles.web_url}</Text>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
      </Grid>   
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  contentDetail: {
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d6d7da'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  textDetail: {
    fontSize: 12
  },
  textLinkDetail: {
    color: '#00a1dd',
    fontSize: 12,
    textDecorationLine: 'underline'
  }
})

export default ArticleDetails