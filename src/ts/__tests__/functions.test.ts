import * as functions from "../functions";
import { IMovie } from "../models/Movie";

describe("movieSort tests", () => {
    test("should sort movies from a-ö", () => {
    let testData: IMovie[] = [
        {
        Title: "Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster: ""
        },
        {
        Title: "Titanic",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster: ""
        },
    { 
        Title: "Jungle cruise",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: ""
    }
    ];
    let newArray: IMovie[] = functions.movieSort(testData, true);
    expect(newArray[0].Title).toBe("Avengers");
});

test("should sort movies from ö-a", () => {
    let testData: IMovie[] = [
        {
        Title: "Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster: ""
        },
        {
        Title: "Titanic",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster: ""
        },
    { 
        Title: "Jungle cruise",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: ""
    }
    ];
    let newArray: IMovie[] = functions.movieSort(testData, false);
    expect(newArray[0].Title).toBe("Titanic");
    });
    test("should not change order if identical movie names", () => {
        let testData: IMovie[] = [
            {
            Title: "Avengers",
            Year: "2012",
            imdbID: "tt0848228",
            Type: "movie",
            Poster: ""
            },
            {
            Title: "Avengers",
            Year: "2018",
            imdbID: "tt0848228",
            Type: "movie",
            Poster: ""
            }
        ];
        const result = functions.movieSort(testData, true);
expect(result[0].Year).toBe("2012");
expect(result[1].Year).toBe("2018");
    })
});

