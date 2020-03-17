import * as React from 'react';
import { render } from 'react-dom';
import {
  init,
  AppExtensionSDK,
  locations,
} from 'contentful-ui-extensions-sdk';
import Config from './Config';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.scss';

function renderAtRoot(component: React.ReactElement) {
  return render(component, document.getElementById('root'));
}

init(sdk => {
  if (sdk.location.is(locations.LOCATION_APP_CONFIG)) {
    renderAtRoot(<Config sdk={sdk as AppExtensionSDK} />);
  }
});
