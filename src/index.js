import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
    <MuiThemeProvider>
        <div>
          <center> <AppBar title="Games Search By Vishal" showMenuIconButton={false} /></center> 
            <App />
        </div>
    </MuiThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
