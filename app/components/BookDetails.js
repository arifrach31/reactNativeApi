import React from 'react'
import { StyleSheet, StatusBar, 
  Linking, View, TouchableOpacity } from 'react-native'
import { Container, Content, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import StarRating from 'react-native-star-rating'
import moment from 'moment'

import NavbarHome from '../particles/NavbarHome'

const BookDetails = (props) => (
  <Container style={styles.container}>
    <NavbarHome
      title="Book Details"
    />
    <StatusBar
      backgroundColor="#00a1dd"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <Text style={styles.title}>{props.booksDetail.title}</Text>
      <Text style={styles.description}>{props.booksDetail.description}</Text>

      <Grid style={styles.contentDetail}>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Listname </Text></Col>
          <Col size={75}><Text style={styles.textDetail}>: {props.books.display_name}</Text></Col>
        </Row>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Amazon Link </Text></Col>
          <Col size={75}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textDetail}>: </Text>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL(props.books.amazon_product_url)}}>
                <Text style={styles.textLinkDetail}>{props.books.amazon_product_url}</Text>
              </TouchableOpacity>
            </View></Col>
        </Row>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Author </Text></Col>
          <Col size={75}><Text style={styles.textDetail}>: {props.booksDetail.author}</Text></Col>
        </Row>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Published Date </Text></Col>
          <Col size={75}><Text style={styles.textDetail}>: {moment(props.books.published_date).format('MMMM Do YYYY')}</Text></Col>
        </Row>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Publisher </Text></Col>
          <Col size={75}><Text style={styles.textDetail}>: {props.booksDetail.publisher}</Text></Col>
        </Row>
        <Row>
          <Col size={25}><Text style={styles.textDetail}>Rank :</Text></Col>
          <Col size={75}>
              <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textDetail}>: </Text>
                  <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={props.books.rank}
                      starSize={12}
                      fullStarColor={'#00a1dd'}
                  />
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
  description: {
    fontSize: 12
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

export default BookDetails