class ImageService {
  constructor() {
    this.endpoint = 'https://www.xeno-canto.org/api/2/recordings?';
  }

  getImage(birdName) {
    const params = new URLSearchParams([['query', birdName]]);

    return fetch(`${this.endpoint}${params}`);
  }
}

export const imageService = new ImageService();
