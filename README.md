# Game of Thrones Character Browser Homework

[An API of Ice and Fire](https://www.anapioficeandfire.com/) is an open-access REST API that includes information about characters, houses, and books from the action-packed high-fantasy epic.

In this homework, you'll make a webpage to browse through the characters in Game of Thrones.

1. Look at an example of the API data in the characters endpoint:

    [`https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50`](https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50)

   There's also [documentation on this endpoint](https://www.anapioficeandfire.com/Documentation#characters) if it's useful.
1. Create an HTML page that embeds a separate JavaScript file.
1. On page load, make an AJAX request to the first page of the characters endpoint, and render each separate character into the DOM.
   Hint: Some characters don't have names, so you'll have to use their first alias in this case.
1. Add a "Next" Button. When a user clicks on the button, make an AJAX call to the next page of results in the API, and replace the displayed list of characters with the new results.
1. Add a "Previous" Button, which should have similar functionality to the "Next" button but in the reverse direction.

## Bonus

Make your page responsive, and add some nice style to the results.
