import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { getImages } from 'utils/api';

export class App extends React.Component {
  state = {
    images: [],
    page: 1,
    searchStr: '',
    loading: false,
    showModal: false,
    modalImgUrl: '',
  };

  toggleModal = id => {
    let modalImgUrl = '';
    if (id && typeof id === 'number') {
      for (let i = 0; i < this.state.images.length; i++) {
        if (this.state.images[i].id === id) {
          modalImgUrl = this.state.images[i].largeImageURL;
          break;
        }
      }
    }
    this.setState({ showModal: !this.state.showModal, modalImgUrl });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchStr !== this.state.searchStr ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1, loading: true });
  };

  fetchImages = async () => {
    const images = await getImages(this.state.searchStr, this.state.page);
    if (images) {
      this.setState(prevState => {
        return {
          ...prevState,
          images: [...prevState.images, ...images],
          loading: false,
        };
      });
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  handleSearchSubmit = value => {
    this.setState({ images: [], page: 1, searchStr: value, loading: true });
  };

  render() {
    return (
      <div className="App">
        <Searchbar handleSearchSubmit={this.handleSearchSubmit} />
        {this.state.loading ? <Loader /> : null}

        {this.state.images.length ? (
          <>
            <ImageGallery
              images={this.state.images}
              toggleModal={this.toggleModal}
            />
            <Button handleClick={this.handleLoadMore} text="Load More" />
          </>
        ) : null}

        {this.state.showModal && (
          <Modal
            modalImgUrl={this.state.modalImgUrl}
            toggleModal={this.toggleModal}
            showModal={this.state.showModal}
          />
        )}
      </div>
    );
  }
}
