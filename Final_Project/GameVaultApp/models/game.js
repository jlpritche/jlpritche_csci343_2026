class Game {
  constructor(
    id,
    imageURL,
    title,
    releaseDate,
    genre,
    platform,
    completionStatus,
    liked,
    description
  ) {
    this.id = id;
    this.imageURL = imageURL;
    this.title = title;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.platform = platform;
    this.completionStatus = completionStatus;

    // Only completed games have a liked value.
    if (completionStatus === "Completed") {
      this.liked = liked;
    }

    this.description = description;
  }

  toString() {
    return `${this.title} - Released: ${this.releaseDate} - Genre: ${this.genre} - Platform: ${this.platform} - Status: ${this.completionStatus}`;
  }
}

export default Game;
