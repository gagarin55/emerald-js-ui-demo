import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Delete from 'material-ui/svg-icons/action/delete'
import {
    Repeat as RepeatIcon,
    Delete as DeleteIcon,
    Eye as EyeIcon,
    Edit as EditIcon,
    Close as CloseIcon,
    QrCode as QrCodeIcon,
    Copy as CopyIcon,
    Gear as GearIcon,
} from 'emerald-js/lib/ui/icons';

import IconDemo from './components/iconDemo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Emerald</h1>
        </header>
          <div>
              <h3>Emerald Icons</h3>
              <div>
                  <IconDemo><RepeatIcon/></IconDemo>
              </div>
              <div>
                  <IconDemo><DeleteIcon/></IconDemo>
              </div>
              <div>
                  <IconDemo><EyeIcon/></IconDemo>
              </div>
              <div>
                  <IconDemo><EditIcon/></IconDemo>
              </div>
              <div>
                  <IconDemo><CloseIcon/></IconDemo>
              </div>
              <div>
                  <IconDemo><QrCodeIcon/></IconDemo>
              </div>
              <div>
                  <IconDemo><CopyIcon/></IconDemo>
              </div>
              <div>
                  <IconDemo><GearIcon/></IconDemo>
              </div>
              <h3>Material-UI Icons</h3>
              <div>
                  <IconDemo><Delete/></IconDemo>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
