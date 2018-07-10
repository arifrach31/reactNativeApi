import React, { Component } from 'react'
import { connect } from 'react-redux'

import Home from '../components/Home'
import Menus from '../particles/Menus'

const dataMenus = [
  {
    menuText: 'Articles',
    image: require('../assets/article.png'),
    action: 'SearchArticlesContainer'
  },
  {
    menuText: 'Books',
    image: require('../assets/books.png'),
    total: 1000,
    action: 'SearchBooksContainer'
  },
  {
    menuText: 'About Me',
    image: require('../assets/boy.png'),
    total: 1000,
    action: 'AboutMeContainer'
  },
  {
    menuText: 'Information',
    image: require('../assets/information.png'),
    total: 1000,
    action: 'InformationContainer'
  }
]

class HomeContainer extends Component {

  render() {
    return (
      <Home
        title="Portfolio #1"
        
        dataMenusButton={dataMenus}
        renderMenusButton={({ item }) => (
          <Menus 
            menuText={item.menuText} 
            image={item.image}
            total={item.total}
            action={() => this.props.navigation.navigate(item.action, {data: item})}
          />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)