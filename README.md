# React JS: A Hands-On Introduction
React is "a JavaScript Library for Building User Interfaces," and all the cool kids are using it. So let's get together and talk about JS frameworks and what makes React so special. This is the example repo for an interactive presentation.

TODO: Link to slides.

## Getting Started
- Clone this repo.
- `npm run deps` to install a few global dependencies.
- `npm install` to install the project dependencies
- `npm start` to launch the webpack server
- Navigate to http://localhost:3000 - it will livereload most of your changes.

## Requirements (if you are having trouble with Getting Started)
- Node version 4.1.x. I _think_ this will work with 5+ or 4.0.x but it hasn't been tested.
- **Optional:** Install eslint for your editor [I use linter for Atom](https://github.com/atom-community/linter) and [linter-eslint](https://github.com/AtomLinter/linter-eslint)
- **Optional:** If you are using eslint, [install jsx support for your editor](http://reactjsresources.com/text-editor-support/)
- A few things that will be installed globally with `npm run deps`:
  - webpack
  - eslint
  - eslint-plugin-react
  - babel-eslint
  - eslint-plugin-babel

## Additional React Introductory Resources

- [Comparison notes of 4 popular JS Frameworks](https://gist.github.com/makmanalp/9b7f50aa16d21c2f9d37) by @makmanalp. Really solid, unbiased comparison of Angular, Ember, Backbone and React.

- [React.js Introduction For People Who Know Just Enough jQuery To Get By](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/) Really great longread/tutorial with helpful illustrations and examples.

- [React.js Best Practices for 2016](https://blog.risingstack.com/react-js-best-practices-for-2016/) Goes into more depth than this tutorial, on topics like routing (using [react-router](https://github.com/rackt/react-router)) and state management (using [Redux](https://github.com/rackt/react-redux)).

- Not exactly React but related to some of the code in this repo - [ES6 Cheatsheet](https://github.com/DrkSephy/es6-cheatsheet) is pretty concise and hits on all of the good stuff that you can (read: should) be using now with Babel.
