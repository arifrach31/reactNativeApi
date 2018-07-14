import React from 'react'
import { StyleSheet, FlatList, StatusBar, TextInput, Text, View } from 'react-native'
import { Container, Content, Left, Body, Right,
  Form, Item, Label, Input, Picker, Button, Icon,
  CheckBox, Spinner, List, ListItem } from 'native-base'

import NavbarHome from '../particles/NavbarHome'

const SearchingArticles = (props) => (
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
        <Item floatingLabel style={styles.itemForm}>
          <Label>Search Article</Label>
          <Input
            value={props.searchText}
            onChangeText={props.onChangeSearchText}/>
        </Item>
        <Item picker style={{ marginLeft: 10 }}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            placeholder="Sort Result By"
            selectedValue={props.sortby}
            onValueChange={props.onValueChangeSortBy}
          >
            <Picker.Item label="Newest" value="newest" />
            <Picker.Item label="Oldest" value="oldest" />
          </Picker>
        </Item>
        <Button block onPress={props.btnSearchArticles} style={styles.btnSearch}>
            <Text style={styles.txtButton}>Search</Text>
        </Button>
      </Form>

      {props.loading.condition === true && props.loading.process_on === 'LOADING_SEARCH_ARTICLES' ? (
        <Spinner color="#000000" />
      ) : (
        <View>
          {props.success.condition === true && props.success.process_on === 'SUCCESS_SEARCH_ARTICLES' ? (
            <View>
              <Text>Result for : {props.resultText}</Text>
              <FlatList
                data={props.resultSearchArticles}
                renderItem={props.renderSearchArticles} />
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
  btnSearch: {
    backgroundColor: '#00A1DD',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10
  },
  txtButton: {
    color: '#FFFFFF'
  }
})

export default SearchingArticles