# Hi this is my react app. A Box Calculator
  ### By Alan Hasler - 1/22/25

This project uses a JSON file as a list of available boxes and compares that list to the user inputs to find a box that will fit the inputted values. 
For example, if a user types in 20 12 11, it returns W:20 L:12 H:12, which is smaller than what the user typed in and what the foo.json has indexed. The Basic, Standard, Fragile, and Custom add 1, 1.5, 2, and 4 to the user's input. This would be used if any packaging is needed for the object measured. foo.json will be continually updated as the inventory changes over time.
  
Currently, the page is being hosted at https://alanh620.github.io/ah620.github.io/  This calls the form.js for the home page.

This project makes use of font-awesome and tailwind 


## Available Scripts

### `npm run build`

Runs the app and builds it to the URL listed above. 

### `gh-pages -d build`

Builds the app with the gh-pages from Git Hub to be displayed via GitHub pages.



