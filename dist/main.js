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
/***/ (function() {

eval("var canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = '#838383';\nctx.fillRect(0, 400, 1000, 140);\nctx.fillStyle = 'yellow';\nctx.fillRect(0, 460, 50, 10);\nctx.fillRect(100, 460, 50, 10);\nctx.fillRect(200, 460, 50, 10);\nctx.fillRect(300, 460, 50, 10);\nctx.fillRect(400, 460, 50, 10);\nctx.fillRect(500, 460, 50, 10);\nctx.fillRect(600, 460, 50, 10);\nctx.fillRect(700, 460, 50, 10);\nctx.fillRect(800, 460, 50, 10);\nctx.fillRect(900, 460, 50, 10);\nvar pig = document.getElementById('pig');\nctx.drawImage(pig, 0, 250); // const image = new Image(60, 45); // Using optional size for image\n// image.onload = drawImageActualSize; // Draw when image has loaded\n// image.src = 'src/images/pig1.png';\n// function drawImageActualSize() {\n//     // Use the intrinsic size of image in CSS pixels for the canvas element\n//     canvas.width = this.naturalWidth;\n//     canvas.height = this.naturalHeight;\n//     // Will draw the image as 300x227, ignoring the custom size of 60x45\n//     // given in the constructor\n//     ctx.drawImage(this, 0, 0);\n//     // To use the custom size we'll have to specify the scale parameters\n//     // using the element's width and height properties - lets draw one\n//     // on top in the corner:\n//     ctx.drawImage(this, 0, 0, this.width, this.height);\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJwaWciLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixTQUFoQjtBQUNBRixHQUFHLENBQUNHLFFBQUosQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCLEdBQTNCO0FBQ0FILEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixRQUFoQjtBQUNBRixHQUFHLENBQUNHLFFBQUosQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCO0FBQ0FILEdBQUcsQ0FBQ0csUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0I7QUFDQUgsR0FBRyxDQUFDRyxRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQjtBQUNBSCxHQUFHLENBQUNHLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCO0FBQ0FILEdBQUcsQ0FBQ0csUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0I7QUFDQUgsR0FBRyxDQUFDRyxRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQjtBQUNBSCxHQUFHLENBQUNHLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCO0FBQ0FILEdBQUcsQ0FBQ0csUUFBSixDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0I7QUFDQUgsR0FBRyxDQUFDRyxRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQjtBQUNBSCxHQUFHLENBQUNHLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWjtBQUNBQyxHQUFHLENBQUNLLFNBQUosQ0FBY0QsR0FBZCxFQUFtQixDQUFuQixFQUFzQixHQUF0QixFLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jdHguZmlsbFN0eWxlID0gJyM4MzgzODMnO1xuY3R4LmZpbGxSZWN0KDAsIDQwMCwgMTAwMCwgMTQwKTtcbmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcbmN0eC5maWxsUmVjdCgwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoMTAwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoMjAwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoMzAwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoNDAwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoNTAwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoNjAwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoNzAwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoODAwLCA0NjAsIDUwLCAxMCk7XG5jdHguZmlsbFJlY3QoOTAwLCA0NjAsIDUwLCAxMCk7XG5jb25zdCBwaWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlnJyk7XG5jdHguZHJhd0ltYWdlKHBpZywgMCwgMjUwKVxuLy8gY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoNjAsIDQ1KTsgLy8gVXNpbmcgb3B0aW9uYWwgc2l6ZSBmb3IgaW1hZ2Vcbi8vIGltYWdlLm9ubG9hZCA9IGRyYXdJbWFnZUFjdHVhbFNpemU7IC8vIERyYXcgd2hlbiBpbWFnZSBoYXMgbG9hZGVkXG4vLyBpbWFnZS5zcmMgPSAnc3JjL2ltYWdlcy9waWcxLnBuZyc7XG4vLyBmdW5jdGlvbiBkcmF3SW1hZ2VBY3R1YWxTaXplKCkge1xuLy8gICAgIC8vIFVzZSB0aGUgaW50cmluc2ljIHNpemUgb2YgaW1hZ2UgaW4gQ1NTIHBpeGVscyBmb3IgdGhlIGNhbnZhcyBlbGVtZW50XG4vLyAgICAgY2FudmFzLndpZHRoID0gdGhpcy5uYXR1cmFsV2lkdGg7XG4vLyAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMubmF0dXJhbEhlaWdodDtcblxuLy8gICAgIC8vIFdpbGwgZHJhdyB0aGUgaW1hZ2UgYXMgMzAweDIyNywgaWdub3JpbmcgdGhlIGN1c3RvbSBzaXplIG9mIDYweDQ1XG4vLyAgICAgLy8gZ2l2ZW4gaW4gdGhlIGNvbnN0cnVjdG9yXG4vLyAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLCAwLCAwKTtcblxuLy8gICAgIC8vIFRvIHVzZSB0aGUgY3VzdG9tIHNpemUgd2UnbGwgaGF2ZSB0byBzcGVjaWZ5IHRoZSBzY2FsZSBwYXJhbWV0ZXJzXG4vLyAgICAgLy8gdXNpbmcgdGhlIGVsZW1lbnQncyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXMgLSBsZXRzIGRyYXcgb25lXG4vLyAgICAgLy8gb24gdG9wIGluIHRoZSBjb3JuZXI6XG4vLyAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4vLyB9XG5cblxuIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;