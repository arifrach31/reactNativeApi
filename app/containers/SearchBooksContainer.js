import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchingBooks from '../components/SearchingBooks';
import Books from '../particles/Books'
import { getSearchBooks } from '../actions/searchBooks'

class SearchBooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listname: '',
      resultText: ''
    }
  }

  async btnSearchEbookFiction(){
    await this.setState({ listname: 'e-book-fiction' })
    await this.props.getSearchBooks(this.state.listname)
    await this.setState({ resultText: this.state.listname })
  }
  
  async btnSearchHardcoverFiction(){
    await this.setState({ listname: 'hardcover-fiction' })
    await this.props.getSearchBooks(this.state.listname)
    await this.setState({ resultText: this.state.listname })
  }

  render() {
    return (
      <SearchingBooks
        title="Searching Books"

        loading={this.props.loading}
        success={this.props.success}
        resultText={this.state.resultText}

        btnSearchEbookFiction={() => this.btnSearchEbookFiction()}
        btnSearchHardcoverFiction={() => this.btnSearchHardcoverFiction()}

        resultSearchBooks={this.props.resultBooks}
        renderSearchBooks={({ item }) => (
          <Books
            title={item.book_details[0].title} 
            description={item.book_details[0].description}
            action={() => this.props.navigation.navigate("BookDetailContainer", {data: item})}
          />
        )}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getSearchBooks: (listname) => dispatch(getSearchBooks(listname)),
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.loading,
    success: state.success,
    failed: state.failed,
    resultBooks: state.resultBooks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBooksContainer)