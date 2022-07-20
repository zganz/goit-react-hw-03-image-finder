import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';

const KEY = '27763232-d5fad278e4d8773c17239879d';

export class App extends React.Component {
  state = {
    images: [],
    page: 1,
  };

  handleSearchSubmit = value => {
    if (!value) {
      return;
    }

    fetch(
      `https://pixabay.com/api/?q=${value}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(({ hits }) => {
        console.log(hits);
      })
      .catch(error => {});
  };

  render() {
    return <Searchbar handleSearchSubmit={this.handleSearchSubmit} />;
  }
}
