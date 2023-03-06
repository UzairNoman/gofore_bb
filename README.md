# Comments for the reviewers

**usability** - I have added 5 test cases, runnable by calling  `npm test`.

**responsiveness** - Website is responsive and can be displayed on all devices.

**performance** - To respect this, I refrained myself to use any griding/styling frameworks like Boostrap, to keep it as much lightweight as possible.

**code readability** - 
1. As a brief demonstration, I included comments in few components. Comments are something I can write as much as possible and just to give you an idea that I remembered using comments as a necessary demonstration but here I used the luxury to save my time, but this demonstration can indicate that I am a developer who can emphasize on code readability. 
2. To stressed further on the readibility and type-checking, I included propTypes on *BookGrid* and *BookList* component.
3. Furthermore, I admit there might be linting errors, but I would use ESLint to kill those if I am developing a real world project.

**project structure** - I have tried to build a simple and manageable project structure for this small app. To motivate the practice of writing tests, I included test files with respective .js files, otherwise to be consistent with the project structure I could have made a separate **tests** folder and kept all test files there:

```
src
│   App.js 
│   App.css
└───components
│   │   BookGrid.js
│   │   BookList.js
|   |   ...
└───pages
│   │   BookBrowser.js
│   │   ...
│   
└───styles
    │   BookGrid.css
    │   BookList.css
    |   ...
└───shared
    │   Modal.js
```




PS: The following requirement was incorrect (or not enough explained) as the APIs need to have some <BOOK TITLE> (or in the language of UI - the input box need to have some text) to query those 100 books, without a query I assume there is no way. Therefore, I use the default search "prisoner" to get those records on the page landing.

**"It should display a scrollable *grid* of the first 100 books, with the book cover thumbnail, book title, and author."**
    
    
I didn't prioritized designing and aesthetics, but rather focused on functional/non-functional requirements. To get more detailed insights of my designing, I would recommend visiting my portfolio https://uzairnoman.vercel.app/ 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
