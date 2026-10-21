class Destination {
  constructor(id, countryId, name, averageCost, recommendedDays, rating, imageURL) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.averageCost = averageCost;
    this.recommendedDays = recommendedDays;
    this.rating = rating;
    this.imageURL = imageURL;
  }

  toString() {
    return `${this.name} - Estimated Cost: $${this.averageCost} per person, Recommended Stay: ${this.recommendedDays} days, Rating: ${this.rating}`;
  }
}

export default Destination;
