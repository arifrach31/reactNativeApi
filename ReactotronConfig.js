import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

Reactotron.configure({ name: 'testKumparan', host: '192.168.100.4' })
  .useReactNative()
  .use(reactotronRedux())
  .connect()