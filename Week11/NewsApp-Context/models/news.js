class News {
  constructor(
    id,
    type,
    headline,
    datePublished,
    author,
    agency,
    description,
    imageURL
  ) {
    this.id = id;
    this.type = type;
    this.headline = headline;
    this.datePublished = datePublished;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageURL = imageURL;
  }

  toString() {
    return `${this.headline} - Type: ${this.type} - Published: ${this.datePublished} - Author: ${this.author} - Agency: ${this.agency} - Description: ${this.description} - Image URL: ${this.imageURL}`;
  }
}

export default News;
