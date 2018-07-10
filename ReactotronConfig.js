import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

Reactotron.configure({ name: 'testKumparan' })
  .useReactNative()
  .use(reactotronRedux())
  .connect()