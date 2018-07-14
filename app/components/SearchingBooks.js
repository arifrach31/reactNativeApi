import React from 'react'
import { StyleSheet, FlatList, StatusBar, TextInput, Text, View } from 'react-native'
import { Container, Content, Form, Item, 
  Label, Button, CheckBox, Spinner } from 'native-base'

import NavbarHome from '../particles/NavbarHome'

const SearchingBooks = (props) => (
  <Container style={styles.container}>
    <NavbarHome
      title={props.title}
      iconGoback={props.iconGoback}
      handleGoback={props.handleGoback}
    />
    <StatusBar
      backgroundColor="#00a1dd"
      barStyle="light-content"
    />
    <Content style={styles.content}>
      <Form>
        <Item style={styles.itemForm}>
          <Label>Search </Label>
          <Button block onPress={props.btnSearchEbookFiction} style={styles.button}>
            <Text style={styles.txtButton}>E-book Fiction</Text>
          </Button>
          <Text> / </Text>
          <Button block onPress={props.btnSearchHardcoverFiction} style={styles.button}>
            <Text style={styles.txtButton}>Hardcover Fiction</Text>
          </Button>
        </Item>
      </Form>

      {props.loading.condition === true && props.loading.process_on === 'LOADING_SEARCH_BOOKS' ? (
        <Spinner color="#000000" />
      ) : (
        <View>
          {props.success.condition === true && props.success.process_on === 'SUCCESS_SEARCH_BOOKS' ? (
            <View>
              <Text>Result for : {props.resultText}</Text>
              <FlatList
                data={props.resultSearchBooks}
                renderItem={props.renderSearchBooks} />
            </View>
          ):(
            null
          )}
        </View>
      )}
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 10,
    paddingLeft: 10
  },
  button: {
    backgroundColor: '#00A1DD',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  txtButton: {
    color: '#FFFFFF'
  }
})

export default SearchingBooks