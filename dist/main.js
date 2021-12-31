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

eval("var GameView = __webpack_require__(/*! ./scripts/gameView */ \"./src/scripts/gameView.js\");\n\nwindow.GameView = GameView;\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = '#838383';\nctx.fillRect(0, 400, 1000, 140);\nctx.fillStyle = 'yellow';\n\nfor (var counter = 0; counter < 10; counter++) {\n  ctx.fillRect(100 * counter, 460, 50, 10);\n}\n\nvar pig = document.getElementById('pig');\nctx.drawImage(pig, 0, 250); // const image = new Image(60, 45); // Using optional size for image\n// image.onload = drawImageActualSize; // Draw when image has loaded\n// image.src = 'src/images/pig1.png';\n// function drawImageActualSize() {\n//     // Use the intrinsic size of image in CSS pixels for the canvas element\n//     canvas.width = this.naturalWidth;\n//     canvas.height = this.naturalHeight;\n//     // Will draw the image as 300x227, ignoring the custom size of 60x45\n//     // given in the constructor\n//     ctx.drawImage(this, 0, 0);\n//     // To use the custom size we'll have to specify the scale parameters\n//     // using the element's width and height properties - lets draw one\n//     // on top in the corner:\n//     ctx.drawImage(this, 0, 0, this.width, this.height);\n// }\n\nπ;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHFEQUFELENBQXhCOztBQUNBQyxNQUFNLENBQUNGLFFBQVAsR0FBa0JBLFFBQWxCO0FBRUEsSUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLFNBQWhCO0FBQ0FGLEdBQUcsQ0FBQ0csUUFBSixDQUFhLENBQWIsRUFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkIsR0FBM0I7QUFDQUgsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLFFBQWhCOztBQUNBLEtBQUssSUFBSUUsT0FBTyxHQUFHLENBQW5CLEVBQXNCQSxPQUFPLEdBQUcsRUFBaEMsRUFBb0NBLE9BQU8sRUFBM0M7QUFBK0NKLEVBQUFBLEdBQUcsQ0FBQ0csUUFBSixDQUFjLE1BQU1DLE9BQXBCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQS9DOztBQUNBLElBQU1DLEdBQUcsR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVo7QUFDQUMsR0FBRyxDQUFDTSxTQUFKLENBQWNELEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaW5naW5nX2hvbWVfdGhlX2JhY29uLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWVWaWV3XCIpXG53aW5kb3cuR2FtZVZpZXcgPSBHYW1lVmlldztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmN0eC5maWxsU3R5bGUgPSAnIzgzODM4Myc7XG5jdHguZmlsbFJlY3QoMCwgNDAwLCAxMDAwLCAxNDApXG5jdHguZmlsbFN0eWxlID0gJ3llbGxvdyc7XG5mb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IDEwOyBjb3VudGVyKyspIGN0eC5maWxsUmVjdCgoMTAwICogY291bnRlciksIDQ2MCwgNTAsIDEwKTtcbmNvbnN0IHBpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWcnKTtcbmN0eC5kcmF3SW1hZ2UocGlnLCAwLCAyNTApXG4vLyBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSg2MCwgNDUpOyAvLyBVc2luZyBvcHRpb25hbCBzaXplIGZvciBpbWFnZVxuLy8gaW1hZ2Uub25sb2FkID0gZHJhd0ltYWdlQWN0dWFsU2l6ZTsgLy8gRHJhdyB3aGVuIGltYWdlIGhhcyBsb2FkZWRcbi8vIGltYWdlLnNyYyA9ICdzcmMvaW1hZ2VzL3BpZzEucG5nJztcbi8vIGZ1bmN0aW9uIGRyYXdJbWFnZUFjdHVhbFNpemUoKSB7XG4vLyAgICAgLy8gVXNlIHRoZSBpbnRyaW5zaWMgc2l6ZSBvZiBpbWFnZSBpbiBDU1MgcGl4ZWxzIGZvciB0aGUgY2FudmFzIGVsZW1lbnRcbi8vICAgICBjYW52YXMud2lkdGggPSB0aGlzLm5hdHVyYWxXaWR0aDtcbi8vICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5uYXR1cmFsSGVpZ2h0O1xuXG4vLyAgICAgLy8gV2lsbCBkcmF3IHRoZSBpbWFnZSBhcyAzMDB4MjI3LCBpZ25vcmluZyB0aGUgY3VzdG9tIHNpemUgb2YgNjB4NDVcbi8vICAgICAvLyBnaXZlbiBpbiB0aGUgY29uc3RydWN0b3Jcbi8vICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIDAsIDApO1xuXG4vLyAgICAgLy8gVG8gdXNlIHRoZSBjdXN0b20gc2l6ZSB3ZSdsbCBoYXZlIHRvIHNwZWNpZnkgdGhlIHNjYWxlIHBhcmFtZXRlcnNcbi8vICAgICAvLyB1c2luZyB0aGUgZWxlbWVudCdzIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllcyAtIGxldHMgZHJhdyBvbmVcbi8vICAgICAvLyBvbiB0b3AgaW4gdGhlIGNvcm5lcjpcbi8vICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbi8vIH1cbs+AXG5cbiJdLCJuYW1lcyI6WyJHYW1lVmlldyIsInJlcXVpcmUiLCJ3aW5kb3ciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY291bnRlciIsInBpZyIsImRyYXdJbWFnZSIsIs+AIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Pig = __webpack_require__(/*! ./pig */ \"./src/scripts/pig.js\");\n\nvar Game = /*#__PURE__*/_createClass(function Game(ctx) {\n  _classCallCheck(this, Game);\n\n  DIM_X = 1000;\n  DIM_Y = 600;\n  this.stage = 1;\n  this.level = 1; // this.pig = new Pig({game: this})\n});\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxtQ0FBRCxDQUFuQjs7SUFFTUMsSSw2QkFFRixjQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2JDLEVBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0FDLEVBQUFBLEtBQUssR0FBRyxHQUFSO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxLQUFMLEdBQWEsQ0FBYixDQUphLENBS2I7QUFDSCxDOztBQUlMQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpbmdpbmdfaG9tZV90aGVfYmFjb24vLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGlnID0gcmVxdWlyZShcIi4vcGlnXCIpXG5cbmNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIERJTV9YID0gMTAwMDtcbiAgICAgICAgRElNX1kgPSA2MDA7XG4gICAgICAgIHRoaXMuc3RhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxldmVsID0gMTtcbiAgICAgICAgLy8gdGhpcy5waWcgPSBuZXcgUGlnKHtnYW1lOiB0aGlzfSlcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyJdLCJuYW1lcyI6WyJQaWciLCJyZXF1aXJlIiwiR2FtZSIsImN0eCIsIkRJTV9YIiwiRElNX1kiLCJzdGFnZSIsImxldmVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/gameView.js":
/*!*********************************!*\
  !*** ./src/scripts/gameView.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nvar GameView = /*#__PURE__*/_createClass(function GameView(ctx) {\n  _classCallCheck(this, GameView);\n\n  this.game = new Game(ctx);\n  this.ctx = ctx;\n} // start() {\n//     setInterval(() => {this.game.draw(this.ctx)}, 25)\n//     setInterval(() => {this.game.step()}, 25)\n// }\n);\n\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lVmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMscUNBQUQsQ0FBcEI7O0lBRU1DLFEsNkJBRUYsa0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDYixPQUFLQyxJQUFMLEdBQVksSUFBSUosSUFBSixDQUFTRyxHQUFULENBQVo7QUFDQSxPQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUlKRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLFFBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpbmdpbmdfaG9tZV90aGVfYmFjb24vLi9zcmMvc2NyaXB0cy9nYW1lVmlldy5qcz8zZGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9nYW1lXCIpXG5cbmNsYXNzIEdhbWVWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICAvLyBzdGFydCgpIHtcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KX0sIDI1KVxuICAgIC8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5nYW1lLnN0ZXAoKX0sIDI1KVxuICAgIC8vIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3OyJdLCJuYW1lcyI6WyJHYW1lIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwiY3R4IiwiZ2FtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/gameView.js\n");

/***/ }),

/***/ "./src/scripts/pig.js":
/*!****************************!*\
  !*** ./src/scripts/pig.js ***!
  \****************************/
/***/ (function(module) {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Pig = /*#__PURE__*/_createClass(function Pig(obj) {\n  _classCallCheck(this, Pig);\n});\n\nmodule.exports = Pig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL3BpZy5qcz9jM2MxIl0sIm5hbWVzIjpbIlBpZyIsIm9iaiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxHLDZCQUVGLGFBQVlDLEdBQVosRUFBaUI7QUFBQTtBQUVoQixDOztBQUlMQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJILEdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGlnIHtcblxuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuXG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGlnOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9waWcuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/pig.js\n");

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