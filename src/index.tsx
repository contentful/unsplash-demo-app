import * as React from 'react';
import { render } from 'react-dom';
import {
  init,
} from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.scss';

init((sdk) => {
  sdk.app.setReady();
  render(<div>Hello, Unsplash App!</div>, document.getElementById('root'));
});
