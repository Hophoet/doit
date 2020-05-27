// import React from 'react'
// import {Provider} from 'react-redux'
// import Navigator from './todoNavigations/Navigator'
// import  Store from './Store/configureStore'
// import BloodDonation from './TrainComponents/BloodDonation'
// export default class App extends React.Component{
//     render(){
//       return (
//         <Provider store={Store}>
//             <Navigator />
//         </Provider>
//       );
//     }
//
//
// }


import React from 'react'
import {Provider} from 'react-redux'
import Navigator from './todoNavigations/Navigator'
import {PersistGate} from 'redux-persist/integration/react'
import  Store from './Store/configureStore'
import {persistStore} from 'redux-persist'

export default class App extends React.Component{
    render(){
      let  persistor = persistStore(Store)
      return (
        <Provider store={Store}>
          <PersistGate persistor={persistor} >
            <Navigator />
          </PersistGate>
        </Provider>

      );
    }


}
