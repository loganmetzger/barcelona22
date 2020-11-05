# Sam and Logan's Barcelona Wedding Repository

## Deployment
https://barcelona-wedding-2022.netlify.app/

![](https://github.com/loganmetzger/barcelona22/blob/master/documentation/screenshot.png)

## Welcome
This project has been a literal labor of love to create a modern, elegant, and aesthetic wedding site for myself and my fiancee. This will serve as a source of information for all guests attending the event, and hopefully make things run smoothly and simply. 

## Tech Stack
This project was bootstrapped with Create React App and makes use of some commong third party libraries like Axios and React Router. A small backend API was also created to handle RSVPs using Node.js/Express as well as Knex.js and SQLite3. 

Styling done with LESS and a the help of my wonderful fiancee Sam.

## Interesting solutions
I found that the itinerary section was one of the most challenging portions of the application (since it contains more pages than any other part!). In order to format it to work responsively I conditionally render the static side menu into a dropdown based on the view width of the screen. This opens up much more space for users to view itinerary information when looking at it on their phones.

The accordion element itself was not incredibly difficult, however the animations and change of chevron position were tough nuts to crack. Ensuring that the animation expands to the correct scroll height of the text provided to each element was also very important.

## Things to add past version 1.0 release
-[] Complete mobile responsiveness for every page - as it stands right now things are formatted well for desktop but require some styling to fit nicely on a phone or tablet
-[] Optimize image size for faster loading - the page loads slower than I would like currently, and it will be especially challenging to use on shaky wifi connections on a phone while traveling, so ensuring it's easy to jump on to the right page and info will be helpful
-[] Cleanup of component tree and organization - This project was a creative process from the start, and ideas about the design evolved rapidly as it was being built. A little cleanup and organization of the component heirarchy will make the code simpler to understand

## Possibilities
- I have been considering porting this project to Next.js or Gatsby to help with load times and make it easier for people on mobile devices. 


## Available Scripts
- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`
