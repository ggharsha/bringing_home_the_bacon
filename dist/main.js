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

eval("// const GameView = require(\"./scripts/gameView\");\n// window.GameView = GameView;\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d'); // create road\n\nctx.fillStyle = '#838383';\nctx.fillRect(0, 400, 1000, 140); // create lines on road\n\nctx.fillStyle = 'yellow';\n\nfor (var counter = 0; counter < 11; counter++) {\n  ctx.fillRect(100 * counter, 460, 50, 10);\n} // loading pig - move\n\n\nvar pig = new Image();\npig.addEventListener('load', function () {\n  return ctx.drawImage(pig, 0, 250, 256, 256);\n});\npig.src = \"src/images/pig1.png\"; // loading knife - move\n\nvar knife = new Image();\nknife.addEventListener('load', function () {\n  return ctx.drawImage(knife, 800, 170);\n});\nknife.src = \"src/images/knife.png\"; // loading traffic cone - move \n\nvar trafficcone = new Image();\ntrafficcone.addEventListener('load', function () {\n  return ctx.drawImage(trafficcone, 300, 250);\n});\ntrafficcone.src = \"src/images/trafficcone.png\"; // loading pan - move\n\nvar pan = new Image();\npan.addEventListener('load', function () {\n  return ctx.drawImage(pan, 500, 170);\n});\npan.src = \"src/images/pan.png\"; // loading apple - move\n\nvar apple = new Image();\napple.addEventListener('load', function () {\n  return ctx.drawImage(apple, 800, 250);\n});\napple.src = \"src/images/apple.png\"; // start game\n\nctx.fillStyle = 'black';\nctx.font = '50px Shizuru';\nctx.fillText('Press any key to start!', 185, 250); // stage - level\n\nctx.fillStyle = 'black';\nctx.font = '40px Shizuru';\nctx.fillText('1-1', 945, 40); // replace 1-1 with this.stage this.level//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb3VudGVyIiwicGlnIiwiSW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhd0ltYWdlIiwic3JjIiwia25pZmUiLCJ0cmFmZmljY29uZSIsInBhbiIsImFwcGxlIiwiZm9udCIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVosQyxDQUVBOztBQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsU0FBaEI7QUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixHQUEzQixFLENBRUE7O0FBQ0FILEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixRQUFoQjs7QUFDQSxLQUFLLElBQUlFLE9BQU8sR0FBRyxDQUFuQixFQUFzQkEsT0FBTyxHQUFHLEVBQWhDLEVBQW9DQSxPQUFPLEVBQTNDO0FBQStDSixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYyxNQUFNQyxPQUFwQixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUEvQyxDLENBRUE7OztBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVo7QUFDQUQsR0FBRyxDQUFDRSxnQkFBSixDQUFxQixNQUFyQixFQUE2QjtBQUFBLFNBQU1QLEdBQUcsQ0FBQ1EsU0FBSixDQUFjSCxHQUFkLEVBQW1CLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLENBQU47QUFBQSxDQUE3QjtBQUNBQSxHQUFHLENBQUNJLEdBQUosR0FBVSxxQkFBVixDLENBRUE7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlKLEtBQUosRUFBZDtBQUNBSSxLQUFLLENBQUNILGdCQUFOLENBQXVCLE1BQXZCLEVBQStCO0FBQUEsU0FBTVAsR0FBRyxDQUFDUSxTQUFKLENBQWNFLEtBQWQsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBTjtBQUFBLENBQS9CO0FBQ0FBLEtBQUssQ0FBQ0QsR0FBTixHQUFZLHNCQUFaLEMsQ0FFQTs7QUFDQSxJQUFNRSxXQUFXLEdBQUcsSUFBSUwsS0FBSixFQUFwQjtBQUNBSyxXQUFXLENBQUNKLGdCQUFaLENBQTZCLE1BQTdCLEVBQXFDO0FBQUEsU0FBTVAsR0FBRyxDQUFDUSxTQUFKLENBQWNHLFdBQWQsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsQ0FBTjtBQUFBLENBQXJDO0FBQ0FBLFdBQVcsQ0FBQ0YsR0FBWixHQUFrQiw0QkFBbEIsQyxDQUVBOztBQUNBLElBQU1HLEdBQUcsR0FBRyxJQUFJTixLQUFKLEVBQVo7QUFDQU0sR0FBRyxDQUFDTCxnQkFBSixDQUFxQixNQUFyQixFQUE2QjtBQUFBLFNBQU1QLEdBQUcsQ0FBQ1EsU0FBSixDQUFjSSxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLENBQU47QUFBQSxDQUE3QjtBQUNBQSxHQUFHLENBQUNILEdBQUosR0FBVSxvQkFBVixDLENBRUE7O0FBQ0EsSUFBTUksS0FBSyxHQUFHLElBQUlQLEtBQUosRUFBZDtBQUNBTyxLQUFLLENBQUNOLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCO0FBQUEsU0FBTVAsR0FBRyxDQUFDUSxTQUFKLENBQWNLLEtBQWQsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBTjtBQUFBLENBQS9CO0FBQ0FBLEtBQUssQ0FBQ0osR0FBTixHQUFZLHNCQUFaLEMsQ0FFQTs7QUFDQVQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FGLEdBQUcsQ0FBQ2MsSUFBSixHQUFXLGNBQVg7QUFDQWQsR0FBRyxDQUFDZSxRQUFKLENBQWEseUJBQWIsRUFBd0MsR0FBeEMsRUFBNkMsR0FBN0MsRSxDQUVBOztBQUNBZixHQUFHLENBQUNFLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUYsR0FBRyxDQUFDYyxJQUFKLEdBQVcsY0FBWDtBQUNBZCxHQUFHLENBQUNlLFFBQUosQ0FBYSxLQUFiLEVBQW9CLEdBQXBCLEVBQXlCLEVBQXpCLEUsQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZVZpZXdcIik7XG4vLyB3aW5kb3cuR2FtZVZpZXcgPSBHYW1lVmlldztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbi8vIGNyZWF0ZSByb2FkXG5jdHguZmlsbFN0eWxlID0gJyM4MzgzODMnO1xuY3R4LmZpbGxSZWN0KDAsIDQwMCwgMTAwMCwgMTQwKVxuXG4vLyBjcmVhdGUgbGluZXMgb24gcm9hZFxuY3R4LmZpbGxTdHlsZSA9ICd5ZWxsb3cnO1xuZm9yIChsZXQgY291bnRlciA9IDA7IGNvdW50ZXIgPCAxMTsgY291bnRlcisrKSBjdHguZmlsbFJlY3QoKDEwMCAqIGNvdW50ZXIpLCA0NjAsIDUwLCAxMCk7XG5cbi8vIGxvYWRpbmcgcGlnIC0gbW92ZVxuY29uc3QgcGlnID0gbmV3IEltYWdlKCk7IFxucGlnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjdHguZHJhd0ltYWdlKHBpZywgMCwgMjUwLCAyNTYsIDI1NikpOyBcbnBpZy5zcmMgPSBcInNyYy9pbWFnZXMvcGlnMS5wbmdcIlxuXG4vLyBsb2FkaW5nIGtuaWZlIC0gbW92ZVxuY29uc3Qga25pZmUgPSBuZXcgSW1hZ2UoKTtcbmtuaWZlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjdHguZHJhd0ltYWdlKGtuaWZlLCA4MDAsIDE3MCkpO1xua25pZmUuc3JjID0gXCJzcmMvaW1hZ2VzL2tuaWZlLnBuZ1wiO1xuXG4vLyBsb2FkaW5nIHRyYWZmaWMgY29uZSAtIG1vdmUgXG5jb25zdCB0cmFmZmljY29uZSA9IG5ldyBJbWFnZSgpO1xudHJhZmZpY2NvbmUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGN0eC5kcmF3SW1hZ2UodHJhZmZpY2NvbmUsIDMwMCwgMjUwKSk7XG50cmFmZmljY29uZS5zcmMgPSBcInNyYy9pbWFnZXMvdHJhZmZpY2NvbmUucG5nXCI7XG5cbi8vIGxvYWRpbmcgcGFuIC0gbW92ZVxuY29uc3QgcGFuID0gbmV3IEltYWdlKCk7XG5wYW4uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGN0eC5kcmF3SW1hZ2UocGFuLCA1MDAsIDE3MCkpO1xucGFuLnNyYyA9IFwic3JjL2ltYWdlcy9wYW4ucG5nXCI7XG5cbi8vIGxvYWRpbmcgYXBwbGUgLSBtb3ZlXG5jb25zdCBhcHBsZSA9IG5ldyBJbWFnZSgpO1xuYXBwbGUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGN0eC5kcmF3SW1hZ2UoYXBwbGUsIDgwMCwgMjUwKSk7XG5hcHBsZS5zcmMgPSBcInNyYy9pbWFnZXMvYXBwbGUucG5nXCI7XG5cbi8vIHN0YXJ0IGdhbWVcbmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuY3R4LmZvbnQgPSAnNTBweCBTaGl6dXJ1JztcbmN0eC5maWxsVGV4dCgnUHJlc3MgYW55IGtleSB0byBzdGFydCEnLCAxODUsIDI1MCk7XG5cbi8vIHN0YWdlIC0gbGV2ZWxcbmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuY3R4LmZvbnQgPSAnNDBweCBTaGl6dXJ1JztcbmN0eC5maWxsVGV4dCgnMS0xJywgOTQ1LCA0MCkgLy8gcmVwbGFjZSAxLTEgd2l0aCB0aGlzLnN0YWdlIHRoaXMubGV2ZWwiXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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