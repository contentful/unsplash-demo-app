import React from 'react';
import { Button } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from 'contentful-ui-extensions-sdk';

interface Props {
  sdk: FieldExtensionSDK;
}

interface State {
  value: UnsplashResult | null;
}

export default class FieldEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.sdk.field.getValue() || null,
    };
  }

  detachExternalChangeHandler: Function | null = null;

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();

    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    this.detachExternalChangeHandler = this.props.sdk.field.onValueChanged(this.onExternalChange);
  }

  componentWillUnmount() {
    if (this.detachExternalChangeHandler) {
      this.detachExternalChangeHandler();
    }
  }

  onExternalChange = (value: UnsplashResult | null) => {
    this.setState({ value });
  };

  openSearch = async () => {
    /*
      * TODO:
      * 1. Allow our search button to open a dialog using the SDK
      * 2. Set the image returned from the dialog as the value for our field
    */
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <div>{!!value && <img src={value.urls.thumb} alt={value.alt_description} />}</div>
        <Button onClick={this.openSearch}>Open Search</Button>
      </div>
    );
  }
}
