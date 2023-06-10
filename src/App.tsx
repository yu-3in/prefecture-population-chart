import { Provider } from 'react-redux'
import { PrefectureSelector } from './features/prefectures/components/PrefectureSelector'
import { store } from './stores/store'

const App = () => (
  <Provider store={store}>
    <PrefectureSelector />
  </Provider>
)

export default App
