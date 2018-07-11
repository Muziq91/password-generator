import React from 'react'
import ReactDOM from 'react-dom'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';
import 'office-ui-fabric-react/dist/sass/Fabric.scss';
import 'office-ui-fabric-react/dist/sass/Fabric.Scoped.scss';
import './main.scss';
import App from './components/app'

initializeIcons();
ReactDOM.render(
    <Fabric> 
        <App /> 
    </Fabric>, 
    document.getElementById('app'))