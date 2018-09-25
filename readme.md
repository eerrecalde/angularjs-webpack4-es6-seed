# Modern app seed for legacy Angular apps (1.x) 

Includes following:

 - [Webpack 4](https://webpack.js.org/) (modules, assets bundling)
 - [babel](http://babeljs.io/) (ES2015 support)
 - [jest](https://jestjs.io/) Jest for unit tests
 - [node-sass](https://github.com/sass/node-sass) for styles + AutoPrefixer
 - ngdocs with grunt (This is the only task running in grunt, because there are no better alternatives)


Requirements:
 
- NodeJS 6+ is required.
- [Yarn](https://yarnpkg.com) is optional to use, but I recommend using it. (if no - npm is ok).  

### Usage

1. Install dependencies `npm i`
2. Start dev server with HMR `npm run dev`
3. Lint your code `npm run lint`
4. Run unit tests `npm run test`
5. Create build for testing `npm run build:dev` for development build
6. Create build for deployment `npm run build:prod` for production build
7. Run the docs `npm run docs` will create an http server and make it ready to visit

---

## Usage advice 

### Directory layout

    ├── dist               # bundle destination
    ├── build-utils        # webpack build helpers
    └── src                # app sources
        ├── components     # all the components go here
        ├── index.js       # app entry module
        └── index.scss     # scss entry file

### Styleguide

Using airbnb styleguide as an extension for eslint
