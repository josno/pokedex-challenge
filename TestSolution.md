# How To Use

1. To get the app started refer to the [README](https://github.com/josno/pokedex-challenge/blob/master/README.md#installation-instructions)

2. Then do the following to test the app:
   - Click on yellow :arrow_backward:and :arrow_forward: arrows to move through the Pokemon list
   - Click on "Search database" to find a Pokemon
   - Start typing the name of a Pokemon and a list of suggestions will guide you
   - Click on the :mag: button to search for a Pokemon
   - Click on the :heavy_multiplication_x: button to cancel

### Challenge Requirements

:white_check_mark: A similar GUI to the sample provided

:white_check_mark: Displaying the following characteristics of a Pokemon:

- Main picture
- Name
- Height
- Weight

:white_check_mark: An interface for searching for a Pokemon by name

- Not included in the GUI sample, must provide a creative solution

### My approach

Interface

- Created wireframes to replicate a Pokedex
- Separated the high level design from the rest of the components
- Created components for specific elements based on requirements (Search, Navigation and Pokemon Information)
- Added components for Buttons and Message that were reused throughout the app

API

- First fetch stores a list of Pokemon names and url as a means to keep track of the Pokemon
- Pokemon info is fetched by Pokemon ID

Searchbar

- Input allows for typing or selection
- Added autocomplete list that helps with finding a Pokemon
- When a Pokemon is searched, the `handleSearch` function takes the name and finds the index from tracker list to return the url
- Warning messages are provided for edge cases

Navigation Buttons

- Left button moves to the previous Pokemon
- Right button moves to the next Pokemon
- When you reach the last Pokemon and click the right arrow, it starts again at the first Pokemon
- When you click the left arrow while on the first Pokemon, you go to the last Pokemon

### Want To See More Pokemon?

- The API is currently set to request the original 151 Pokemon based on GUI sample
- If you'd like to change the number to all the Pokemon, update the fetch URL in App.js to `?limit=964`
- The Pokedex will load the first Pokemon on the response json list regardless of how it is pulled

### Discussion

- Given more time, I would invest it in the following:
  - Make Searchbar keyboard friendly
  - Add to accessibility
  - Add tests and increase code coverage
  - Add animations and complex styling
  - Consider some trade-offs (i.e. useRef vs useState, other design elements) and see if they could work better
