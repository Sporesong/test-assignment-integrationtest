import { IMovie } from "../../models/Movie";

export let testMovies: IMovie[] = [
     {
        Title: "Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster: ""
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster: ""
    },
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: ""
    }
];

export async function getData(searchText: string): Promise<IMovie[]> {
    return new Promise((resolve, reject) => {
        if(searchText.length > 0) {
            resolve(testMovies);
        }
        else {
            reject({        
            Title: "",
            Year: "",
            imdbID: "",
            Type: "",
            Poster: ""});
        }
    });
}