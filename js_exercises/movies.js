var movies = [
    {
        title: "Inception",
        rating: 4.6,
        hasWatched: "watched"
    },
    {
        title: "Shutter Island",
        rating: 4.7,
        hasWatched: "watched"
    },
    {
        title: "Matrix",
        rating: 4.1,
        hasWatched: "not watched"
    }
];

movies.forEach(function(movie) {
    var title = movie.title;
    var rating = movie.rating;
    var hasWatched = movie.hasWatched;
    console.log("I have " + hasWatched + " " + title + " - " + rating + " stars");
});