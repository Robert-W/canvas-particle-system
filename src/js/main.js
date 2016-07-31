import App from 'js/components/App';
import dom from 'react-dom';
import React from 'react';

//- hot load some scss, prod will inline this into our html
import 'css/app.scss';

function bootstrap () {
  //- Add a polyfill for RAF just in case
  window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) { window.setTimeout(callback, 1000 / 60); };
  })();
  dom.render(<App />, document.getElementById('react-mount'));
}

//- Start the application when the dom is loaded
if (document.readyState === 'complete') {
  bootstrap();
} else {
  window.onload = bootstrap;
}
