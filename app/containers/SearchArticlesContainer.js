import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchingArticles from '../components/SearchingArticles';
import Articles from '../particles/Articles'
import { getSearchArticles } from '../actions/searchArticles'

class SearchArticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      sortby: 'newest',
      resultText: ''
    }
  }

  async btnSearchArticles(){
    const searchArticles = await this.state.searchText
    const keyword = await searchArticles.split(' ').join('+');
    const sortby = await this.state.sortby
    await this.props.getSearchArticles(keyword, sortby)
    await this.setState({ resultText: searchArticles + ' - ' + sortby })
  }

  handleGoback(){
    this.props.navigation.goBack()
  }

  render() {
    return (
      <SearchingArticles
        title="Searching Articles"

        searchText={this.state.searchText}
        loading={this.props.loading}
        success={this.props.success}
        sortby={this.state.sortby}
        resultText={this.state.resultText}

        handleGoback={() => this.handleGoback()}
        iconGoback='arrow-back'

        onChangeSearchText={(searchText) => this.setState({searchText})}
        onValueChangeSortBy={(sortby) => this.setState({sortby})}

        btnSearchArticles={() => this.btnSearchArticles()}

        resultSearchArticles={this.props.resultArticles}
        renderSearchArticles={({ item }) => (
          <Articles
            headline={item.headline.main} 
            action={() => this.props.navigation.navigate("ArticleDetailContainer", {data: item})}
          />
        )}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getSearchArticles: (keyword, sortest) => dispatch(getSearchArticles(keyword, sortest)),
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    resultArticles: state.resultArticles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArticlesContainer)