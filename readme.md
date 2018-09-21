# Modern app seed for legacy Angular apps (1.x) 

Includes following:

 - [Webpack 4](https://webpack.js.org/) (modules, assets bundling)
 - [babel](http://babeljs.io/) (ES2015 support)
 - [jest](https://jestjs.io/) Jest for unit tests
 - [node-sass](https://github.com/sass/node-sass) for styles + AutoPrefixer


Requirements:
 
- NodeJS 6+ is required.
- [Yarn](https://yarnpkg.com) is optional to use, but I recommend using it. (if no - npm is ok).  

### Usage

1. Install dependencies `npm i`
2. Start dev server `npm run dev`
3. Lint your code `npm run lint`
4. Run unit tests `npm run test`
5. Create build for deployment `npm run prod` for production build

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
