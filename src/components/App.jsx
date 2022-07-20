import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

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
        const result =
          Array.isArray(hits) &&
          hits.map(function (el) {
            let id = el.id;
            let webformatURL = el.webformatURL;
            let largeImageURL = el.largeImageURL;
            return { id, webformatURL, largeImageURL };
          });
        if (result && result.length) {
          this.setState({ images: result });
        }
      })
      .catch(error => {});
  };

  render() {
    return (
      <div>
        <Searchbar handleSearchSubmit={this.handleSearchSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

//  1) map преобразовать в стрелочную ф-ию  использую деструктуризацию
// 2) при каждом новом запросе обнулять state (асинхронный this.setState({ images: [], page: 1 }, () =>{} ) )
// 3) Вынести fetch в отдельную функцию fetchData
// 4) Описать кнопку loadMore
