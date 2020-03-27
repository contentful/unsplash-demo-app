import React from 'react';
import { TextInput, Asset } from '@contentful/forma-36-react-components';
import { DialogExtensionSDK } from 'contentful-ui-extensions-sdk';
import debounce from 'lodash.debounce';
import Client from './client';

interface Props {
  sdk: DialogExtensionSDK;
}

interface State {
  searchValue: string;
  client: Client;
  photos: UnsplashResult[];
}

function formatPhotoThumb(url: string) {
    return url.replace('fit=max', 'fit=fillmax').concat('&w=300&h=300');
}

export default class Dialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchValue: '',
      client: new Client(process.env.UNSPLASH_TOKEN || ''),
      photos: [],
    };
  }

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();
  }

  onSearch = debounce(async (value: string) => {
    /*
      * TODO:
      * 1. Call our Unsplash client with the search `value`
      * 2. Set state to show a list of photos that came back from the search.
    */
  })

  save = (photo: UnsplashResult) => {
    /*
      * TODO:
      * 1. Use the SDK to pass back the selected photo to the entry field.
    */
  };

  render() {
    const { photos } = this.state;

    return (
      <div>
        <div>
          <TextInput
            width="full"
            type="text"
            id="my-field"
            testId="my-field"
            placeholder="Search for a photo"
            autoComplete="off"
            value={this.state.searchValue}
            onChange={e => this.onSearch(e.target.value)}
          />
        </div>
        <div className="search-collection">
          {photos.map(photo => (
            <div key={photo.id} onClick={() => this.save(photo)} className="photo">
                <Asset src={formatPhotoThumb(photo.urls.thumb)} type="image" title={photo.alt_description} />
            </div>
        ))}
        </div>
      </div>
    );
  }
}
