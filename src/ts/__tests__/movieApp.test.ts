/** 
 * @jest-environment jsdom 
 */
import { IMovie } from "../models/Movie";
import * as movieApp from "../movieApp";
import * as movieservice from "../services/movieservice";
import { testMovies } from "../services/__mocks__/movieService";
jest.mock("../services/movieservice.ts");

//init test
test("should call handleSubmit when form is submitted", () => {
  document.body.innerHTML = ` <form id="searchForm">
  <input type="text" id="searchText" placeholder="Skriv titel här" />
  <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>`;

  let spyOnHandleSubmit = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(new Promise<void>((resolve) => {
   resolve()
  })
  ); 

  movieApp.init();


  let searchForm = document.querySelector("form") as HTMLFormElement;
  searchForm.submit();

  expect(spyOnHandleSubmit).toHaveBeenCalled();
  spyOnHandleSubmit.mockRestore();
});

//handleSubmit test
  test("should call movieService mock",async () => {
    document.body.innerHTML = ` <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>`;
  const searchText = document.querySelector("#searchText") as HTMLInputElement;
  searchText.value = "Avengers";

  await movieApp.handleSubmit();

  expect(movieApp.movies[0].Title).toBe("Avengers");
  });

  //createHTML test
  test("should create HTML correctly", () => {
    document.body.innerHTML = ` <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>`;

    let container = document.querySelector("div") as HTMLDivElement;
    movieApp.createHtml(testMovies, container);

    let movieName = container.firstChild?.firstChild?.textContent;
    expect(movieName).toContain("Avengers");
    expect(container.innerHTML).toContain("h3");
  });

  
  describe("display no results tests" , () => {
  test("should not display a result when searching for empty string", async () => {
    document.body.innerHTML = ` <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>`;
const searchText = document.querySelector("#searchText") as HTMLInputElement;
searchText.value = "";

const mockData = jest.spyOn(movieservice, "getData").mockReturnValue(Promise.reject());
const mockNoResult = jest.spyOn(movieApp, "displayNoResult");

await movieApp.handleSubmit();

expect(mockData).toBeCalledTimes(1);
expect(mockNoResult).toBeCalledTimes(1);

mockData.mockRestore();
mockNoResult.mockRestore();
  });

  test("should display error when no movie found", () => {
    document.body.innerHTML = ` <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>`;
  
    let container = document.querySelector("div") as HTMLDivElement;
    let errorMessage = "Inga sökresultat att visa";
  
    movieApp.displayNoResult(container);
    expect(container.innerHTML).toContain(errorMessage);
   });
});
  




