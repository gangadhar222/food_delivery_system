import React from 'react';
import Routes from './components/Routes.jsx'
import { Navbar } from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    console.log(store.getState())
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes />
        </Provider>
      </BrowserRouter>
    )
  }

}

export default App;
// foodapp/src/components/Routes/Routes.js