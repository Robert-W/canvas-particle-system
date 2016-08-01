# canvas-particle-system
> An HTML5 Canvas particle system. Demo available at [https://robert-w.github.io/canvas-particle-system/](https://robert-w.github.io/canvas-particle-system/).

### Getting started
This project reuires [Node.js](https://nodejs.org/en/) to be installed. Once you clone the project, do the following:
1. Install dependencies via `npm install`.
2. Start the dev task with `npm start`.
3. Open your browser at `http://localhost:3000`. If port 3000 is in use, add `PORT=3001` to the beginning of the start script in the package.json or some other available port.

This project has webpack setup with an express server I wrote that uses Hot module replacement.

### Scripts
`npm start`
> Starts the express server and webpack.  It will watch your files and inject a new bundle and css when changes are made. Some files are not compatible with HMR so you may occasionally need to reload the browser manually to get the changes.

`npm test`
> Runs eslint on all js files under `src/js`.  It also runs Facebook's Flow type checker to make sure all flow enabled files are using the correct types.

`npm run build`
> Generates an optimized build with webpack.  It will output a minified js file with the hash in the name. It will also add the bundle's name to the HTML file so you don't need to do it manually. SASS get's compiled and inlined into the head so no blocking http requests are necessary on load.

### Purpose
This app demonstrates some a particle system that has a few options. You can start or stop the animation, it is stopped by default.  You can also toggle the view mode to be light or dark, which will theme the app differently. Then there are two types of particles, snow and rain.  You can choose one of these two.
