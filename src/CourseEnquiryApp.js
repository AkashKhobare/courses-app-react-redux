import { Provider } from 'react-redux';
import './App.css';

import Main from './components/Main';
import store from './redux/state';

const CourseEnquiryApp = () => {

  return (
    <Provider store={store}>
      <main className="ce-app-container"> 
        <Main />
      </main>
    </Provider>
  )
}

export default CourseEnquiryApp;