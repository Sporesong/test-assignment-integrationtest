import { getData } from "../services/movieservice";
import { testMovies } from "../services/__mocks__/movieService";

jest.mock("axios", () => ({
    get: async (url: string) => {
        return new Promise((resolve, reject) => {
            if(url.endsWith("error")) {
                reject([]);
            }
            else{
            resolve(testMovies);
        }});
    }
}));

test("should get gata correctly",async () => {
 let data = await getData("test");
})

test("should get error getting data", async() => {
    try {
        let data = await getData("error");
    }
    catch(error: any) {
       expect(error.length.toBe(0));  
    }
});


