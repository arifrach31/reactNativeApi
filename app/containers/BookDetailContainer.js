import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookDetails from '../components/BookDetails';

class BookDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      booksDetail: {}
    };
  }

  async componentDidMount() {
    const data = await this.props.navigation.state.params.data
    await this.setState({
      books: data,
      booksDetail: data.book_details[0]
    })
  }

  render() {
    return (
      <BookDetails
        books={this.state.books}
        booksDetail={this.state.booksDetail}
      />
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailContainer)