import './App.css';
import {Link} from 'react-router-dom';
import Chatbox from './Chatbox';

function App() {
  

  return (
    <div className="App">
      <div className="App-header">


        App Chatroom(ClassWork)
        <div className="App-textbox-send">
          
            <Link to="/friend-list">
            <button>
                Go to Friend list(Class Work)
            </button>
            </Link>
       
        </div>
      <div className="App-content">
       <Chatbox />
      </div>
             
        
      </div>
    </div>
  );
}

export default App;