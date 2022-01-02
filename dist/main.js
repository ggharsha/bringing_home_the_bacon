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

eval("// const GameView = require(\"./scripts/gameView\");\n// window.GameView = GameView;\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d'); // create road\n\nctx.fillStyle = '#838383';\nctx.fillRect(0, 400, 1000, 140); // create lines on road\n\nctx.fillStyle = 'yellow';\n\nfor (var counter = 0; counter < 11; counter++) {\n  ctx.fillRect(100 * counter, 460, 50, 10);\n} // loading pig - move\n\n\nvar pig = new Image();\npig.addEventListener('load', function () {\n  return ctx.drawImage(pig, 0, 250, 256, 256);\n});\npig.src = \"src/images/pig1.png\"; // loading knife - move\n\nvar knife = new Image();\nknife.addEventListener('load', function () {\n  return ctx.drawImage(knife, 800, 170);\n});\nknife.src = \"src/images/knife.png\"; // loading traffic cone - move \n\nvar trafficcone = new Image();\ntrafficcone.addEventListener('load', function () {\n  return ctx.drawImage(trafficcone, 300, 250);\n});\ntrafficcone.src = \"src/images/trafficcone.png\"; // loading pan - move\n\nvar pan = new Image();\npan.addEventListener('load', function () {\n  return ctx.drawImage(pan, 500, 170);\n});\npan.src = \"src/images/pan.png\"; // loading apple - move\n\nvar apple = new Image();\napple.addEventListener('load', function () {\n  return ctx.drawImage(apple, 800, 250);\n});\napple.src = \"src/images/apple.png\"; // start game\n\nctx.fillStyle = 'black';\nctx.font = '50px Shizuru';\nctx.fillText('Press any key to start!', 185, 250); // stage - level\n\nctx.fillStyle = 'black';\nctx.font = '40px Shizuru';\nctx.fillText('Lv.1', 930, 40); // replace 1-1 with this.stage this.level\n// import Game from \"./scripts/game\";\n// window.Game = Game;\n// const newGame = new Game(ctx);\n// newGame.levelOne();\n// setInterval(() => {newGame.draw(ctx)}, 75);\n// setInterval(() => {newGame.moveObjects()}, 75);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb3VudGVyIiwicGlnIiwiSW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhd0ltYWdlIiwic3JjIiwia25pZmUiLCJ0cmFmZmljY29uZSIsInBhbiIsImFwcGxlIiwiZm9udCIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVosQyxDQUVBOztBQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsU0FBaEI7QUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixHQUEzQixFLENBRUE7O0FBQ0FILEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixRQUFoQjs7QUFDQSxLQUFLLElBQUlFLE9BQU8sR0FBRyxDQUFuQixFQUFzQkEsT0FBTyxHQUFHLEVBQWhDLEVBQW9DQSxPQUFPLEVBQTNDO0FBQStDSixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYyxNQUFNQyxPQUFwQixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUEvQyxDLENBRUE7OztBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVo7QUFDQUQsR0FBRyxDQUFDRSxnQkFBSixDQUFxQixNQUFyQixFQUE2QjtBQUFBLFNBQU1QLEdBQUcsQ0FBQ1EsU0FBSixDQUFjSCxHQUFkLEVBQW1CLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLENBQU47QUFBQSxDQUE3QjtBQUNBQSxHQUFHLENBQUNJLEdBQUosR0FBVSxxQkFBVixDLENBRUE7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlKLEtBQUosRUFBZDtBQUNBSSxLQUFLLENBQUNILGdCQUFOLENBQXVCLE1BQXZCLEVBQStCO0FBQUEsU0FBTVAsR0FBRyxDQUFDUSxTQUFKLENBQWNFLEtBQWQsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBTjtBQUFBLENBQS9CO0FBQ0FBLEtBQUssQ0FBQ0QsR0FBTixHQUFZLHNCQUFaLEMsQ0FFQTs7QUFDQSxJQUFNRSxXQUFXLEdBQUcsSUFBSUwsS0FBSixFQUFwQjtBQUNBSyxXQUFXLENBQUNKLGdCQUFaLENBQTZCLE1BQTdCLEVBQXFDO0FBQUEsU0FBTVAsR0FBRyxDQUFDUSxTQUFKLENBQWNHLFdBQWQsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsQ0FBTjtBQUFBLENBQXJDO0FBQ0FBLFdBQVcsQ0FBQ0YsR0FBWixHQUFrQiw0QkFBbEIsQyxDQUVBOztBQUNBLElBQU1HLEdBQUcsR0FBRyxJQUFJTixLQUFKLEVBQVo7QUFDQU0sR0FBRyxDQUFDTCxnQkFBSixDQUFxQixNQUFyQixFQUE2QjtBQUFBLFNBQU1QLEdBQUcsQ0FBQ1EsU0FBSixDQUFjSSxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLENBQU47QUFBQSxDQUE3QjtBQUNBQSxHQUFHLENBQUNILEdBQUosR0FBVSxvQkFBVixDLENBRUE7O0FBQ0EsSUFBTUksS0FBSyxHQUFHLElBQUlQLEtBQUosRUFBZDtBQUNBTyxLQUFLLENBQUNOLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCO0FBQUEsU0FBTVAsR0FBRyxDQUFDUSxTQUFKLENBQWNLLEtBQWQsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FBTjtBQUFBLENBQS9CO0FBQ0FBLEtBQUssQ0FBQ0osR0FBTixHQUFZLHNCQUFaLEMsQ0FFQTs7QUFDQVQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FGLEdBQUcsQ0FBQ2MsSUFBSixHQUFXLGNBQVg7QUFDQWQsR0FBRyxDQUFDZSxRQUFKLENBQWEseUJBQWIsRUFBd0MsR0FBeEMsRUFBNkMsR0FBN0MsRSxDQUVBOztBQUNBZixHQUFHLENBQUNFLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUYsR0FBRyxDQUFDYyxJQUFKLEdBQVcsY0FBWDtBQUNBZCxHQUFHLENBQUNlLFFBQUosQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLEVBQTBCLEVBQTFCLEUsQ0FBOEI7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgR2FtZVZpZXcgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWVWaWV3XCIpO1xuLy8gd2luZG93LkdhbWVWaWV3ID0gR2FtZVZpZXc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vLyBjcmVhdGUgcm9hZFxuY3R4LmZpbGxTdHlsZSA9ICcjODM4MzgzJztcbmN0eC5maWxsUmVjdCgwLCA0MDAsIDEwMDAsIDE0MClcblxuLy8gY3JlYXRlIGxpbmVzIG9uIHJvYWRcbmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcbmZvciAobGV0IGNvdW50ZXIgPSAwOyBjb3VudGVyIDwgMTE7IGNvdW50ZXIrKykgY3R4LmZpbGxSZWN0KCgxMDAgKiBjb3VudGVyKSwgNDYwLCA1MCwgMTApO1xuXG4vLyBsb2FkaW5nIHBpZyAtIG1vdmVcbmNvbnN0IHBpZyA9IG5ldyBJbWFnZSgpOyBcbnBpZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gY3R4LmRyYXdJbWFnZShwaWcsIDAsIDI1MCwgMjU2LCAyNTYpKTsgXG5waWcuc3JjID0gXCJzcmMvaW1hZ2VzL3BpZzEucG5nXCJcblxuLy8gbG9hZGluZyBrbmlmZSAtIG1vdmVcbmNvbnN0IGtuaWZlID0gbmV3IEltYWdlKCk7XG5rbmlmZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gY3R4LmRyYXdJbWFnZShrbmlmZSwgODAwLCAxNzApKTtcbmtuaWZlLnNyYyA9IFwic3JjL2ltYWdlcy9rbmlmZS5wbmdcIjtcblxuLy8gbG9hZGluZyB0cmFmZmljIGNvbmUgLSBtb3ZlIFxuY29uc3QgdHJhZmZpY2NvbmUgPSBuZXcgSW1hZ2UoKTtcbnRyYWZmaWNjb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjdHguZHJhd0ltYWdlKHRyYWZmaWNjb25lLCAzMDAsIDI1MCkpO1xudHJhZmZpY2NvbmUuc3JjID0gXCJzcmMvaW1hZ2VzL3RyYWZmaWNjb25lLnBuZ1wiO1xuXG4vLyBsb2FkaW5nIHBhbiAtIG1vdmVcbmNvbnN0IHBhbiA9IG5ldyBJbWFnZSgpO1xucGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjdHguZHJhd0ltYWdlKHBhbiwgNTAwLCAxNzApKTtcbnBhbi5zcmMgPSBcInNyYy9pbWFnZXMvcGFuLnBuZ1wiO1xuXG4vLyBsb2FkaW5nIGFwcGxlIC0gbW92ZVxuY29uc3QgYXBwbGUgPSBuZXcgSW1hZ2UoKTtcbmFwcGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjdHguZHJhd0ltYWdlKGFwcGxlLCA4MDAsIDI1MCkpO1xuYXBwbGUuc3JjID0gXCJzcmMvaW1hZ2VzL2FwcGxlLnBuZ1wiO1xuXG4vLyBzdGFydCBnYW1lXG5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbmN0eC5mb250ID0gJzUwcHggU2hpenVydSc7XG5jdHguZmlsbFRleHQoJ1ByZXNzIGFueSBrZXkgdG8gc3RhcnQhJywgMTg1LCAyNTApO1xuXG4vLyBzdGFnZSAtIGxldmVsXG5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbmN0eC5mb250ID0gJzQwcHggU2hpenVydSc7XG5jdHguZmlsbFRleHQoJ0x2LjEnLCA5MzAsIDQwKSAvLyByZXBsYWNlIDEtMSB3aXRoIHRoaXMuc3RhZ2UgdGhpcy5sZXZlbFxuXG4vLyBpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbi8vIHdpbmRvdy5HYW1lID0gR2FtZTtcbi8vIGNvbnN0IG5ld0dhbWUgPSBuZXcgR2FtZShjdHgpO1xuLy8gbmV3R2FtZS5sZXZlbE9uZSgpO1xuLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge25ld0dhbWUuZHJhdyhjdHgpfSwgNzUpO1xuLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge25ld0dhbWUubW92ZU9iamVjdHMoKX0sIDc1KTsiXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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