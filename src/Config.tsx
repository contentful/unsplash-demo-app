import React from 'react';
import { AppExtensionSDK } from 'contentful-ui-extensions-sdk';
import {
  Heading,
  Paragraph,
  Typography,
  Select,
  Option
} from '@contentful/forma-36-react-components';
import get from 'lodash.get';

interface State {
  selectedContentTypeId: string;
  contentTypes: ContentType[];
}

interface Props {
  sdk: AppExtensionSDK;
}

function createEditorInterface(selectedCt: ContentType) {
  const targetField = selectedCt.fields.find(field => field.type === 'Object');

  if (!targetField) {
    return {};
  }

  return { [selectedCt.sys.id]: { controls: [{ fieldId: targetField.id }] } };
}

export default class Config extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedContentTypeId: '',
      contentTypes: []
    };
  }

  async componentDidMount() {
    /* 
      * TODO:
      * 1. Get the app's saved parameters
      * 2. Get all Content Types to display
      * 3. Set an `onConfigure` method to be called when the app is installed
      * 4. Set React state and let the Contentful web app know the Unsplash app is ready to render
    */
  }

  onConfigure = async (): Promise<AppConfig> => {
    const { selectedContentTypeId, contentTypes } = this.state;

    const selectedContentType = contentTypes.find(ct => ct.sys.id === selectedContentTypeId);

    if (!selectedContentType) {
      this.props.sdk.notifier.error('You do not have any content types to select!');
      return false;
    }

    return {
      parameters: {
        selectedContentTypeId
      },
      targetState: {
        EditorInterface: createEditorInterface(selectedContentType)
      }
    };
  };

  pickCt = (id: string) => {
    this.setState({ selectedContentTypeId: id });
  };

  render() {
    let body = (
      <Typography>
        <Heading>You do not have any content types!</Heading>
        <Paragraph>First create a content type with a JSON field to continue.</Paragraph>
      </Typography>
    );

    if (this.state.contentTypes.length) {
      body = (
        <Select
          value={this.state.selectedContentTypeId}
          onChange={e => this.pickCt(e.target.value)}>
          {this.state.contentTypes.map(ct => (
            <Option key={ct.sys.id} value={ct.sys.id}>
              {ct.name}
            </Option>
          ))}
        </Select>
      );
    }

    return (
      <div className="app">
        <div className="background" />
        <div className="body">
          <div className="config">
            <Typography>
              <Heading>
                Unsplash
              </Heading>
              <Paragraph>
                This is the Unsplash demo app. Pick a content type with a <code>JSON</code> field.
              </Paragraph>
            </Typography>
            {body}
          </div>
        </div>
        <div className="logo"></div>
      </div>
    );
  }
}
