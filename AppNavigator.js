import { StackNavigator } from 'react-navigation'
import HomeContainer from './app/containers/HomeContainer'
import SearchArticlesContainer from './app/containers/SearchArticlesContainer'
import ArticleDetailContainer from './app/containers/ArticleDetailContainer'
import SearchBooksContainer from './app/containers/SearchBooksContainer'
import BookDetailContainer from './app/containers/BookDetailContainer'
import InformationContainer from './app/containers/InformationContainer'
import SplashContainer from './app/containers/SplashContainer'

const AppNavigator = StackNavigator(
    {
        SplashContainer: { screen: SplashContainer },
        HomeContainer: { screen: HomeContainer },
        SearchArticlesContainer: { screen: SearchArticlesContainer },
        SearchBooksContainer: { screen: SearchBooksContainer },
        ArticleDetailContainer: { screen: ArticleDetailContainer },
        BookDetailContainer: { screen: BookDetailContainer },
        InformationContainer: { screen: InformationContainer}
    }, {
        initialRouteName: 'SplashContainer',
        headerMode: 'none'
    }
)

export default AppNavigator