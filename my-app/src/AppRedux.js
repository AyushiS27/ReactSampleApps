import './App.css';
import {Provider} from 'react-redux';
import {store} from './reducer';
import {Blogs} from './Blogs';

function App() {
  
  return (
    <Provider store={store}>
        <div>
        <textarea></textarea>
        <Blogs></Blogs>
        </div>
    </Provider>
    
  );
}

export default App;
