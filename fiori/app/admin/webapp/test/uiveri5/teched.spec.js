require("./pages/manageBooksPage");
require("./pages/newBookPage");

describe("teched", function () {
  let bookTitle = "How to Cook Pancakes";

  it("create a new book", function () {
    When.onTheManageBooksPage.iClickOnCreateNewBook();
    When.onTheNewBookPage.iEnterTitle(bookTitle);
    When.onTheNewBookPage.iSelectGenre();
    When.onTheNewBookPage.iSelectAuthor();
    When.onTheNewBookPage.iClickOnSaveButton();
    When.onTheNewBookPage.iSeeEditButton();

  });

  it("should check book is added", function () {
    When.onTheNewBookPage.iNavigateBack();
    Then.onTheManageBooksPage.theBookListContains(bookTitle)
  });
});
