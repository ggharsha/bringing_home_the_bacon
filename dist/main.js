/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var GameView = __webpack_require__(/*! ./scripts/gameView */ \"./src/scripts/gameView.js\");\n\nwindow.GameView = GameView;\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d'); // create road\n\nctx.fillStyle = '#838383';\nctx.fillRect(0, 400, 1000, 140); // create lines on road\n\nctx.fillStyle = 'yellow';\n\nfor (var counter = 0; counter < 10; counter++) {\n  ctx.fillRect(100 * counter, 460, 50, 10);\n} // replace later - drawing pig\n\n\nvar pig = document.getElementById('pig');\nctx.drawImage(pig, 0, 250); // start game\n\nctx.fillStyle = 'black';\nctx.font = '50px Shizuru';\nctx.fillText('Press any key to start!', 185, 250); // stage - level\n\nctx.fillStyle = 'black';\nctx.font = '40px Shizuru';\nctx.fillText('1-1', 945, 40); // replace 1-1 with this.stage this.level\n// const image = new Image(60, 45); // Using optional size for image\n// image.onload = drawImageActualSize; // Draw when image has loaded\n// image.src = 'src/images/pig1.png';\n// function drawImageActualSize() {\n//     // Use the intrinsic size of image in CSS pixels for the canvas element\n//     canvas.width = this.naturalWidth;\n//     canvas.height = this.naturalHeight;\n//     // Will draw the image as 300x227, ignoring the custom size of 60x45\n//     // given in the constructor\n//     ctx.drawImage(this, 0, 0);\n//     // To use the custom size we'll have to specify the scale parameters\n//     // using the element's width and height properties - lets draw one\n//     // on top in the corner:\n//     ctx.drawImage(this, 0, 0, this.width, this.height);\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHFEQUFELENBQXhCOztBQUNBQyxNQUFNLENBQUNGLFFBQVAsR0FBa0JBLFFBQWxCO0FBRUEsSUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVosQyxDQUVBOztBQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsU0FBaEI7QUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixHQUEzQixFLENBRUE7O0FBQ0FILEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixRQUFoQjs7QUFDQSxLQUFLLElBQUlFLE9BQU8sR0FBRyxDQUFuQixFQUFzQkEsT0FBTyxHQUFHLEVBQWhDLEVBQW9DQSxPQUFPLEVBQTNDO0FBQStDSixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYyxNQUFNQyxPQUFwQixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUEvQyxDLENBRUE7OztBQUNBLElBQU1DLEdBQUcsR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVo7QUFDQUMsR0FBRyxDQUFDTSxTQUFKLENBQWNELEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsRSxDQUVBOztBQUNBTCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUYsR0FBRyxDQUFDTyxJQUFKLEdBQVcsY0FBWDtBQUNBUCxHQUFHLENBQUNRLFFBQUosQ0FBYSx5QkFBYixFQUF3QyxHQUF4QyxFQUE2QyxHQUE3QyxFLENBRUE7O0FBQ0FSLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixPQUFoQjtBQUNBRixHQUFHLENBQUNPLElBQUosR0FBVyxjQUFYO0FBQ0FQLEdBQUcsQ0FBQ1EsUUFBSixDQUFhLEtBQWIsRUFBb0IsR0FBcEIsRUFBeUIsRUFBekIsRSxDQUE2QjtBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWVWaWV3ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9nYW1lVmlld1wiKVxud2luZG93LkdhbWVWaWV3ID0gR2FtZVZpZXc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vLyBjcmVhdGUgcm9hZFxuY3R4LmZpbGxTdHlsZSA9ICcjODM4MzgzJztcbmN0eC5maWxsUmVjdCgwLCA0MDAsIDEwMDAsIDE0MClcblxuLy8gY3JlYXRlIGxpbmVzIG9uIHJvYWRcbmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcbmZvciAobGV0IGNvdW50ZXIgPSAwOyBjb3VudGVyIDwgMTA7IGNvdW50ZXIrKykgY3R4LmZpbGxSZWN0KCgxMDAgKiBjb3VudGVyKSwgNDYwLCA1MCwgMTApO1xuXG4vLyByZXBsYWNlIGxhdGVyIC0gZHJhd2luZyBwaWdcbmNvbnN0IHBpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWcnKTtcbmN0eC5kcmF3SW1hZ2UocGlnLCAwLCAyNTApO1xuXG4vLyBzdGFydCBnYW1lXG5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbmN0eC5mb250ID0gJzUwcHggU2hpenVydSc7XG5jdHguZmlsbFRleHQoJ1ByZXNzIGFueSBrZXkgdG8gc3RhcnQhJywgMTg1LCAyNTApO1xuXG4vLyBzdGFnZSAtIGxldmVsXG5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbmN0eC5mb250ID0gJzQwcHggU2hpenVydSc7XG5jdHguZmlsbFRleHQoJzEtMScsIDk0NSwgNDApIC8vIHJlcGxhY2UgMS0xIHdpdGggdGhpcy5zdGFnZSB0aGlzLmxldmVsXG5cbi8vIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKDYwLCA0NSk7IC8vIFVzaW5nIG9wdGlvbmFsIHNpemUgZm9yIGltYWdlXG4vLyBpbWFnZS5vbmxvYWQgPSBkcmF3SW1hZ2VBY3R1YWxTaXplOyAvLyBEcmF3IHdoZW4gaW1hZ2UgaGFzIGxvYWRlZFxuLy8gaW1hZ2Uuc3JjID0gJ3NyYy9pbWFnZXMvcGlnMS5wbmcnO1xuLy8gZnVuY3Rpb24gZHJhd0ltYWdlQWN0dWFsU2l6ZSgpIHtcbi8vICAgICAvLyBVc2UgdGhlIGludHJpbnNpYyBzaXplIG9mIGltYWdlIGluIENTUyBwaXhlbHMgZm9yIHRoZSBjYW52YXMgZWxlbWVudFxuLy8gICAgIGNhbnZhcy53aWR0aCA9IHRoaXMubmF0dXJhbFdpZHRoO1xuLy8gICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLm5hdHVyYWxIZWlnaHQ7XG5cbi8vICAgICAvLyBXaWxsIGRyYXcgdGhlIGltYWdlIGFzIDMwMHgyMjcsIGlnbm9yaW5nIHRoZSBjdXN0b20gc2l6ZSBvZiA2MHg0NVxuLy8gICAgIC8vIGdpdmVuIGluIHRoZSBjb25zdHJ1Y3RvclxuLy8gICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgMCwgMCk7XG5cbi8vICAgICAvLyBUbyB1c2UgdGhlIGN1c3RvbSBzaXplIHdlJ2xsIGhhdmUgdG8gc3BlY2lmeSB0aGUgc2NhbGUgcGFyYW1ldGVyc1xuLy8gICAgIC8vIHVzaW5nIHRoZSBlbGVtZW50J3Mgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzIC0gbGV0cyBkcmF3IG9uZVxuLy8gICAgIC8vIG9uIHRvcCBpbiB0aGUgY29ybmVyOlxuLy8gICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuLy8gfSJdLCJuYW1lcyI6WyJHYW1lVmlldyIsInJlcXVpcmUiLCJ3aW5kb3ciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY291bnRlciIsInBpZyIsImRyYXdJbWFnZSIsImZvbnQiLCJmaWxsVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Pig = __webpack_require__(/*! ./pig */ \"./src/scripts/pig.js\");\n\nvar Game = /*#__PURE__*/function () {\n  function Game(ctx) {\n    _classCallCheck(this, Game);\n\n    DIM_X = 1000;\n    DIM_Y = 600;\n    this.stage = 1;\n    this.level = 1;\n    this.lives = 3; // this.pig = new Pig({game: this})\n  } //this method is only for the road stripes and buildings\n\n\n  _createClass(Game, [{\n    key: \"wrap\",\n    value: function wrap(pos) {\n      if (pos[0] < 0) pos[0] = DIM_X + pos[0];else pos[0] = pos[0] % DIM_X;\n    } // runs 1 tick of gameplay\n\n  }, {\n    key: \"step\",\n    value: function step() {// this.checkCollisions;\n    } // checks for collisions on each tick\n\n  }, {\n    key: \"checkCollisions\",\n    value: function checkCollisions() {}\n  }]);\n\n  return Game;\n}();\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxtQ0FBRCxDQUFuQjs7SUFFTUMsSTtBQUVGLGdCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2JDLElBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0FDLElBQUFBLEtBQUssR0FBRyxHQUFSO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiLENBTGEsQ0FNYjtBQUNILEcsQ0FFRDs7Ozs7V0FDQSxjQUFLQyxHQUFMLEVBQVU7QUFDTixVQUFJQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBYixFQUFnQkEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTTCxLQUFLLEdBQUdLLEdBQUcsQ0FBQyxDQUFELENBQXBCLENBQWhCLEtBQ0tBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTTCxLQUFsQjtBQUNSLEssQ0FFRDs7OztXQUNBLGdCQUFPLENBRUg7QUFDSCxLLENBRUQ7Ozs7V0FDQSwyQkFBa0IsQ0FDakI7Ozs7OztBQUlMTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJULElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpbmdpbmdfaG9tZV90aGVfYmFjb24vLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGlnID0gcmVxdWlyZShcIi4vcGlnXCIpXG5cbmNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIERJTV9YID0gMTAwMDtcbiAgICAgICAgRElNX1kgPSA2MDA7XG4gICAgICAgIHRoaXMuc3RhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxldmVsID0gMTtcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7XG4gICAgICAgIC8vIHRoaXMucGlnID0gbmV3IFBpZyh7Z2FtZTogdGhpc30pXG4gICAgfVxuXG4gICAgLy90aGlzIG1ldGhvZCBpcyBvbmx5IGZvciB0aGUgcm9hZCBzdHJpcGVzIGFuZCBidWlsZGluZ3NcbiAgICB3cmFwKHBvcykge1xuICAgICAgICBpZiAocG9zWzBdIDwgMCkgcG9zWzBdID0gRElNX1ggKyBwb3NbMF07XG4gICAgICAgIGVsc2UgcG9zWzBdID0gcG9zWzBdICUgRElNX1g7XG4gICAgfVxuXG4gICAgLy8gcnVucyAxIHRpY2sgb2YgZ2FtZXBsYXlcbiAgICBzdGVwKCkge1xuXG4gICAgICAgIC8vIHRoaXMuY2hlY2tDb2xsaXNpb25zO1xuICAgIH1cblxuICAgIC8vIGNoZWNrcyBmb3IgY29sbGlzaW9ucyBvbiBlYWNoIHRpY2tcbiAgICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwibmFtZXMiOlsiUGlnIiwicmVxdWlyZSIsIkdhbWUiLCJjdHgiLCJESU1fWCIsIkRJTV9ZIiwic3RhZ2UiLCJsZXZlbCIsImxpdmVzIiwicG9zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/gameView.js":
/*!*********************************!*\
  !*** ./src/scripts/gameView.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nvar GameView = /*#__PURE__*/_createClass(function GameView(ctx) {\n  _classCallCheck(this, GameView);\n\n  this.game = new Game(ctx);\n  this.ctx = ctx;\n} // start() {\n//     setInterval(() => {this.game.draw(this.ctx)}, 25)\n//     setInterval(() => {this.game.step()}, 25)\n// }\n);\n\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lVmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMscUNBQUQsQ0FBcEI7O0lBRU1DLFEsNkJBRUYsa0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDYixPQUFLQyxJQUFMLEdBQVksSUFBSUosSUFBSixDQUFTRyxHQUFULENBQVo7QUFDQSxPQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUlKRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLFFBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpbmdpbmdfaG9tZV90aGVfYmFjb24vLi9zcmMvc2NyaXB0cy9nYW1lVmlldy5qcz8zZGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9nYW1lXCIpXG5cbmNsYXNzIEdhbWVWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICAvLyBzdGFydCgpIHtcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KX0sIDI1KVxuICAgIC8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5nYW1lLnN0ZXAoKX0sIDI1KVxuICAgIC8vIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyJdLCJuYW1lcyI6WyJHYW1lIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwiY3R4IiwiZ2FtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/gameView.js\n");

/***/ }),

/***/ "./src/scripts/movingObject.js":
/*!*************************************!*\
  !*** ./src/scripts/movingObject.js ***!
  \*************************************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar MovingObject = /*#__PURE__*/function () {\n  function MovingObject(object) {\n    _classCallCheck(this, MovingObject);\n\n    this.pos = object[\"pos\"];\n    this.vel = object[\"vel\"];\n    this.game = object[\"game\"];\n    this.size = object[\"size\"];\n  }\n\n  _createClass(MovingObject, [{\n    key: \"draw\",\n    value: function draw() {} // traffic cones and road stripes will move at same rate\n    // pans and knives will move faster\n\n  }]);\n\n  return MovingObject;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL21vdmluZ09iamVjdC5qcz9iZDJkIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIm9iamVjdCIsInBvcyIsInZlbCIsImdhbWUiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsWTtBQUVGLHdCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLFNBQUtDLEdBQUwsR0FBV0QsTUFBTSxDQUFDLEtBQUQsQ0FBakI7QUFDQSxTQUFLRSxHQUFMLEdBQVdGLE1BQU0sQ0FBQyxLQUFELENBQWpCO0FBQ0EsU0FBS0csSUFBTCxHQUFZSCxNQUFNLENBQUMsTUFBRCxDQUFsQjtBQUNBLFNBQUtJLElBQUwsR0FBWUosTUFBTSxDQUFDLE1BQUQsQ0FBbEI7QUFDSDs7OztXQUVELGdCQUFPLENBQ04sQyxDQUVEO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpbmdPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHRoaXMucG9zID0gb2JqZWN0W1wicG9zXCJdO1xuICAgICAgICB0aGlzLnZlbCA9IG9iamVjdFtcInZlbFwiXTtcbiAgICAgICAgdGhpcy5nYW1lID0gb2JqZWN0W1wiZ2FtZVwiXTtcbiAgICAgICAgdGhpcy5zaXplID0gb2JqZWN0W1wic2l6ZVwiXTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgIH1cblxuICAgIC8vIHRyYWZmaWMgY29uZXMgYW5kIHJvYWQgc3RyaXBlcyB3aWxsIG1vdmUgYXQgc2FtZSByYXRlXG4gICAgLy8gcGFucyBhbmQga25pdmVzIHdpbGwgbW92ZSBmYXN0ZXJcblxuXG59Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL21vdmluZ09iamVjdC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/movingObject.js\n");

/***/ }),

/***/ "./src/scripts/pig.js":
/*!****************************!*\
  !*** ./src/scripts/pig.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/scripts/movingObject.js\");\n\nvar Util = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\nvar Pig = /*#__PURE__*/_createClass(function Pig(obj) {\n  _classCallCheck(this, Pig);\n});\n\nmodule.exports = Pig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9waWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLHFEQUFELENBQTVCOztBQUNBLElBQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7SUFFTUUsRyw2QkFFRixhQUFZQyxHQUFaLEVBQWlCO0FBQUE7QUFFaEIsQzs7QUFJTEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxHQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaW5naW5nX2hvbWVfdGhlX2JhY29uLy4vc3JjL3NjcmlwdHMvcGlnLmpzP2MzYzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW92aW5nT2JqZWN0ID0gcmVxdWlyZShcIi4vbW92aW5nT2JqZWN0XCIpO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbmNsYXNzIFBpZyB7XG5cbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcblxuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBpZzsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwicmVxdWlyZSIsIlV0aWwiLCJQaWciLCJvYmoiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/pig.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(module) {

eval("var Util = {\n  inherits: function inherits(child, parent) {\n    function Banana() {}\n\n    ;\n    Banana.prototype = parent.prototype;\n    child.prototype = new Banana();\n    child.prototype.constructor = child;\n  }\n};\nmodule.exports = Util; // might want to refactor this for ES6//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanM/Njk0YiJdLCJuYW1lcyI6WyJVdGlsIiwiaW5oZXJpdHMiLCJjaGlsZCIsInBhcmVudCIsIkJhbmFuYSIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsSUFBSSxHQUFHO0FBRVRDLEVBQUFBLFFBRlMsb0JBRUFDLEtBRkEsRUFFT0MsTUFGUCxFQUVlO0FBQ3BCLGFBQVNDLE1BQVQsR0FBa0IsQ0FBRTs7QUFBQTtBQUNwQkEsSUFBQUEsTUFBTSxDQUFDQyxTQUFQLEdBQW1CRixNQUFNLENBQUNFLFNBQTFCO0FBQ0FILElBQUFBLEtBQUssQ0FBQ0csU0FBTixHQUFrQixJQUFJRCxNQUFKLEVBQWxCO0FBQ0FGLElBQUFBLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsV0FBaEIsR0FBOEJKLEtBQTlCO0FBQ0g7QUFQUSxDQUFiO0FBV0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsSUFBakIsQyxDQUVBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXRpbCA9IHtcblxuICAgIGluaGVyaXRzKGNoaWxkLCBwYXJlbnQpIHtcbiAgICAgICAgZnVuY3Rpb24gQmFuYW5hKCkge307XG4gICAgICAgIEJhbmFuYS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgICAgICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgQmFuYW5hKCk7XG4gICAgICAgIGNoaWxkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNoaWxkO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWw7XG5cbi8vIG1pZ2h0IHdhbnQgdG8gcmVmYWN0b3IgdGhpcyBmb3IgRVM2Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3V0aWwuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;