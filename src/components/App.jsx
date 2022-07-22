import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

const KEY = '27763232-d5fad278e4d8773c17239879d';

export class App extends React.Component {
  state = {
    images: [],
    page: 1,
    searchStr: '',
    loading: false,
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1, loading: true }, this.fetchData);
  };

  fetchData = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.searchStr}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(({ hits }) => {
        const result =
          Array.isArray(hits) &&
          hits.map(({ id, webformatURL, largeImageURL }) => {
            return { id, webformatURL, largeImageURL };
          });
        if (result && result.length) {
          this.setState({
            images: [...this.state.images, ...result],
            loading: false,
          });
        }
      })
      .catch(error => {});
  };

  handleSearchSubmit = value => {
    this.setState(
      { images: [], page: 1, searchStr: value, loading: true },
      this.fetchData
    );
  };

  render() {
    return (
      <div className="App">
        <Searchbar handleSearchSubmit={this.handleSearchSubmit} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            <ImageGallery images={this.state.images} />
            {this.state.images.length ? (
              <Button handleClick={this.handleLoadMore} text="Load More" />
            ) : null}
          </>
        )}
      </div>
    );
  }
}
