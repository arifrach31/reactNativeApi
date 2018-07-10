import React, { Component } from 'react'
import { connect } from 'react-redux'

import ArticleDetails from '../components/ArticleDetails';

class ArticleDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      headline: {}
    }
  }

  async componentDidMount() {
    const data = await this.props.navigation.state.params.data
    await this.setState({
      articles: data,
      headline: data.headline
    })
  }

  render() {
    return (
      <ArticleDetails
        articles={this.state.articles}
        headline={this.state.headline}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailContainer)