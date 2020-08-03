class VoiceService {
  constructor() {
    this.endpoint = 'https://www.flickr.com/services/rest/?';
  }

  getImage(birdName) {
    const params = new URLSearchParams([
      ['method', 'flickr.photos.search'],
      [('api_key', '8ba7ad97c66beb04c68037dbfc6e9af9')],
      ['tag_mode', 'all'],
      ['extras', 'url_m'],
      ['format', 'json'],
      ['tags', birdName],
    ]);

    return fetch(`${this.endpoint}${params}&nojsoncallback`);
  }
}

export const imageService = new VoiceService();
