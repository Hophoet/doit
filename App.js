import React from 'react'
import {Provider} from 'react-redux'
import Navigator from './todoNavigations/Navigator'
import  Store from './Store/configureStore'

export default class App extends React.Component{
    render(){
      return (
        <Provider store={Store}>
          <Navigator />
        </Provider>

      );
    }


}
