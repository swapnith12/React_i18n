import './App.css'
import Language from './routes/language'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './routes/Root'
import Jobs from './routes/job/jobs'
import { JobSelection } from './routes/JobSelection'
import {store} from './lib/redux'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} >
          <Route index={true} path='/' element={<Language />} />
          <Route path='/jobSelection' element={<JobSelection />} />
          <Route  path='/jobs' element={<Jobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
