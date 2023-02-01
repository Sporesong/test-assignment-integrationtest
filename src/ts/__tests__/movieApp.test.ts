/** 
 * @jest-environment jsdom 
 */
import * as movieApp from "../movieApp";

describe("init tests", () => {
    test("should add submit event listener to form", () => {
      const form = document.createElement("form") as HTMLFormElement;
      form.id = "searchForm";
      document.body.appendChild(form);
  
      const spy = jest.spyOn(form, "addEventListener");
  
      movieApp.init();
  
      expect(spy).toHaveBeenCalledWith("submit");
    });
  
    test("should call handleSubmit when form is submitted", () => {
      const form = document.createElement("form") as HTMLFormElement;
      form.id = "searchForm";
      document.body.appendChild(form);
  
      jest.spyOn(movieApp, "handleSubmit").mockImplementation(() => {});
  
      const submitEvent = new Event("submit");
  
      form.dispatchEvent(submitEvent);
  
      expect(movieApp.handleSubmit).toHaveBeenCalled();
    });
  });
  