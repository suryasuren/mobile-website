import React from 'react';
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import { auth } from './Firebase/firebase.utils'

import MobileStore from './Components/Mobile/Mobile'
import WireStore from './Components/Wires/wires'
import Signing from '../src/Components/Signing'
import SignUp from  '../src/Components/SignUp';
import Contacts from './Components/Contact/contact';
import Header from './Components/Header';
import RedmiMobiles from './Components/Mobile/Redmi'
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      //unsubscribeFromAuth : null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() { 
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
   
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

       console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
/* 
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
   
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

       console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  } */

/* componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }   */

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    
  }

  render() {


    return (
      <div className="">

            <Router>
                <Header  currentUser={this.state.currentUser}  />

                <Switch>
                        <Route path="/Redmi"><RedmiMobiles /></Route>
                        <Route path="/Apple"><signing /></Route>
                        <Route path="/OnePlus"><signing /></Route>
                        <Route path="/Samsung"><signing /></Route>
                        <Route path="/Sony"><signing /></Route>
                        <Route path="/Oppo"><signing /></Route>
                        <Route path="/GooglePix"><signing /></Route>
                        <Route path="/LG"><signing /></Route>

                        
                        <Route path="/signing"><Signing /></Route>
                        <Route path="/SignUp"><SignUp /></Route>
                        <Route path="/contact"><Contacts /></Route>
                        <Route path="/Accessories"><WireStore /></Route>
                        
                        <Route exact path="/mobile"><MobileStore /></Route>
                        <Route path="/"><MobileStore /></Route>
                </Switch>
                
            </Router>

            
        </div>
    );
  }
}

export default App;




/* const App = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="">

            <Router>
                <Header toggle={toggle} currentUser={currentUser} isOpen={isOpen} ></Header>
            
              

             <Switch>

                        
                        <Route path="/Redmi"><signing /></Route>
                        <Route path="/Apple"><signing /></Route>
                        <Route path="/OnePlus"><signing /></Route>
                        <Route path="/Samsung"><signing /></Route>
                        <Route path="/Sony"><signing /></Route>
                        <Route path="/Oppo"><signing /></Route>
                        <Route path="/GooglePix"><signing /></Route>
                        <Route path="/LG"><signing /></Route>

                        
                        <Route path="/signing"><Signing currentUser={null}/></Route>
                        <Route path="/SignUp"><SignUp /></Route>
                        <Route path="/contact"><Contacts /></Route>
                        <Route path="/Accessories"><WireStore /></Route>
                        
                        <Route exact path="/mobile"><MobileStore /></Route>
                        <Route path="/"><MobileStore /></Route>
                </Switch>
                
            </Router>

            
        </div>
        

        
  ); 
}  */

/* export default App; */
