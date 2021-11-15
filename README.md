# Project Overview
![alt text][header]

[header]: https://i.ibb.co/Ky5rV8G/header-copy-2.png "Header"

## Project Name

### Disney Mania!

![alt text][titlelink]

[titlelink]: https://nath248.github.io/disney-mania/ "Title Link"

## Project Description

The **Disney Mania App** is a place where you can search for different Disney movies and tv shows. Perfect for building a bingeworthy weekend. You can get a random movie or tv show to watch as well as details about the shows such as the title, release year, popularity and overview.

## API and Data Sample
[Watch Mode API](https://api.watchmode.com/docs/#api-reference "Watch Mode API Homepage")

[Watch Mode - By Source & Type](https://api.watchmode.com/v1/list-titles/?apiKey={api-key}&source_ids={source_id}&types={types})

![alt text][apisnippet]

[apisnippet]: https://i.ibb.co/XVhntSC/Screen-Shot-2021-11-07-at-4-58-50-PM.png "API Snippet"


[The Movie DB API](https://developers.themoviedb.org/3/getting-started/introduction "The Movie DB API Homepage")

[The Movie DB - By External ID](https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id)

![alt text][apisnippet1]

[apisnippet1]: https://i.ibb.co/qNrdhNK/Screen-Shot-2021-11-07-at-5-00-16-PM.png "API Snippet"

## Wireframes
[Disney Mania! - Wireframe](https://www.figma.com/file/Eg5pRsDWEB5biwwltQlKY1/Disney-Mania!?node-id=0%3A1 "Wireframe")

### Desktop Wireframe
![alt text][wireframe]

[wireframe]: https://i.ibb.co/WtwLLZ4/Desktop-Wireframe.png "Desktop Wireframe"


### Mobile Wireframe
![alt text][wireframe1]

[wireframe1]: https://i.ibb.co/tCSTWhD/Mobile-Wireframe.png "Mobile Wireframe"

## MVP/PostMVP

#### MVP 

- Use external API that returns the title and release year for Disney movies and shows
- Use seperate API to add in the movies and/or shows poster, popularity and overview
- Create a button for random movie, random show and get information 
- Create function that populates the title, poster, release year, popularity and overview of the random movie and/or show when the respective button is selected
- Create a text input that allows the user to search for movies or shows and get more information about them such as the title, poster, release year, popularity and overview


#### PostMVP  

- Add a star next to the movie and/or show title that favorites the item
- Add an effect that shoots fireworks on the screen when user selects a favorite
- Add a button that allows guest to indicate they've watched a movie
- Add a seperate page that tracks and populates the movies the user has seen
- Use local storage to save users favorites and watched movies

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|November 5-7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|November 8| Project Approval | Complete
|November 9| Core Application Structure (HTML & CSS) | Complete
|November 10| JS functions & event listeners | Complete
|November 11| Add element to DOM for API data & mobile media queries | Complete
|November 12-14| Flexbox & Final touches | Incomplete
|November 15| Presentations | Incomplete

## Priority Matrix

[Disney Mania! - Priority Matrix](https://www.figma.com/file/hjFkFS3bKokSszF4vy63fl/Priority-Matrix---Disney-Mania!?node-id=0%3A1 "Priority Matrix")


![alt text][prioritymatrix]

[prioritymatrix]: https://i.ibb.co/VSv7wwr/Priority-Matrix.png "Priority Matrix"

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Build core structure with HTML | H | 3hrs| 1 hr | 1 hr |
| Build design of application with CSS | H | 4hrs| 2hrs | 2hrs |
| Create Buttons and add event listeners | H | 3hrs| 2hrs | 2hrs |
| Build function to return API data for both API's | H | 3.5hrs| 8.5hrs | 8.5hrs |
| Build input field and attach to API | H | 2hrs| 2hrs | 2hrs |
| Build function to randomize API data | H | 3.5hrs| 1hr | 1hr |
| Access HTML elements in JS and append div's to sections for data input | H | 3hrs| 3hrs | 3hrs |
| Build mobile application with media queries | H | 3.5hrs| 2.5hrs | 2.5hrs |
| Set up flexbox properties | H | 3hrs| 2hrs | 2hrs |
| Final touches, testing and debugging application | H | 4hrs| 4hrs | 4hrs |
| Attempting Post MVP - Favorites & Seperate Page | H | 4hrs| 4hrs | 4hrs |
| Total | H | 32.5hrs| 32hrs | 32hrs |

## Code Snippet

![alt text][codesnippet]

[codesnippet]: https://i.ibb.co/LnT3JKg/code-snippet.png "Code Snippet"
![alt text][codesnippet2]

[codesnippet2]: https://i.ibb.co/zH8VZjm/codesnippet2.png "Code Snippet"

## Change Log
- Added a scroll feature within the boxes for legibility
- Made input case insensitive for easier usability