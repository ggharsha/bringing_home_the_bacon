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

eval("var GameView = __webpack_require__(/*! ./scripts/gameView */ \"./src/scripts/gameView.js\");\n\nwindow.GameView = GameView;\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d'); // create road\n\nctx.fillStyle = '#838383';\nctx.fillRect(0, 400, 1000, 140); // create lines on road\n\nctx.fillStyle = 'yellow';\n\nfor (var counter = 0; counter < 10; counter++) {\n  ctx.fillRect(100 * counter, 460, 50, 10);\n} // replace later - drawing pig\n\n\nvar pig = document.getElementById('pig');\nctx.drawImage(pig, 0, 250); // replace later - drawing knife\n\nvar knife = document.getElementById('knife');\nctx.drawImage(knife, 400, 170); // replace later - drawing traffic cone\n\nvar trafficcone = document.getElementById('trafficcone');\nctx.drawImage(trafficcone, 800, 250); // start game\n\nctx.fillStyle = 'black';\nctx.font = '50px Shizuru';\nctx.fillText('Press any key to start!', 185, 250); // stage - level\n\nctx.fillStyle = 'black';\nctx.font = '40px Shizuru';\nctx.fillText('1-1', 945, 40); // replace 1-1 with this.stage this.level\n// const image = new Image(60, 45); // Using optional size for image\n// image.onload = drawImageActualSize; // Draw when image has loaded\n// image.src = 'src/images/pig1.png';\n// function drawImageActualSize() {\n//     // Use the intrinsic size of image in CSS pixels for the canvas element\n//     canvas.width = this.naturalWidth;\n//     canvas.height = this.naturalHeight;\n//     // Will draw the image as 300x227, ignoring the custom size of 60x45\n//     // given in the constructor\n//     ctx.drawImage(this, 0, 0);\n//     // To use the custom size we'll have to specify the scale parameters\n//     // using the element's width and height properties - lets draw one\n//     // on top in the corner:\n//     ctx.drawImage(this, 0, 0, this.width, this.height);\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHFEQUFELENBQXhCOztBQUNBQyxNQUFNLENBQUNGLFFBQVAsR0FBa0JBLFFBQWxCO0FBRUEsSUFBTUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVosQyxDQUVBOztBQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsU0FBaEI7QUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixHQUFoQixFQUFxQixJQUFyQixFQUEyQixHQUEzQixFLENBRUE7O0FBQ0FILEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixRQUFoQjs7QUFDQSxLQUFLLElBQUlFLE9BQU8sR0FBRyxDQUFuQixFQUFzQkEsT0FBTyxHQUFHLEVBQWhDLEVBQW9DQSxPQUFPLEVBQTNDO0FBQStDSixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYyxNQUFNQyxPQUFwQixFQUE4QixHQUE5QixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QztBQUEvQyxDLENBRUE7OztBQUNBLElBQU1DLEdBQUcsR0FBR1AsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVo7QUFDQUMsR0FBRyxDQUFDTSxTQUFKLENBQWNELEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsRSxDQUVBOztBQUNBLElBQU1FLEtBQUssR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQUMsR0FBRyxDQUFDTSxTQUFKLENBQWNDLEtBQWQsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRSxDQUVBOztBQUNBLElBQU1DLFdBQVcsR0FBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0FDLEdBQUcsQ0FBQ00sU0FBSixDQUFjRSxXQUFkLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEUsQ0FFQTs7QUFDQVIsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FGLEdBQUcsQ0FBQ1MsSUFBSixHQUFXLGNBQVg7QUFDQVQsR0FBRyxDQUFDVSxRQUFKLENBQWEseUJBQWIsRUFBd0MsR0FBeEMsRUFBNkMsR0FBN0MsRSxDQUVBOztBQUNBVixHQUFHLENBQUNFLFNBQUosR0FBZ0IsT0FBaEI7QUFDQUYsR0FBRyxDQUFDUyxJQUFKLEdBQVcsY0FBWDtBQUNBVCxHQUFHLENBQUNVLFFBQUosQ0FBYSxLQUFiLEVBQW9CLEdBQXBCLEVBQXlCLEVBQXpCLEUsQ0FBNkI7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpbmdpbmdfaG9tZV90aGVfYmFjb24vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZVZpZXdcIilcbndpbmRvdy5HYW1lVmlldyA9IEdhbWVWaWV3O1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuLy8gY3JlYXRlIHJvYWRcbmN0eC5maWxsU3R5bGUgPSAnIzgzODM4Myc7XG5jdHguZmlsbFJlY3QoMCwgNDAwLCAxMDAwLCAxNDApXG5cbi8vIGNyZWF0ZSBsaW5lcyBvbiByb2FkXG5jdHguZmlsbFN0eWxlID0gJ3llbGxvdyc7XG5mb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IDEwOyBjb3VudGVyKyspIGN0eC5maWxsUmVjdCgoMTAwICogY291bnRlciksIDQ2MCwgNTAsIDEwKTtcblxuLy8gcmVwbGFjZSBsYXRlciAtIGRyYXdpbmcgcGlnXG5jb25zdCBwaWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlnJyk7XG5jdHguZHJhd0ltYWdlKHBpZywgMCwgMjUwKTtcblxuLy8gcmVwbGFjZSBsYXRlciAtIGRyYXdpbmcga25pZmVcbmNvbnN0IGtuaWZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tuaWZlJyk7XG5jdHguZHJhd0ltYWdlKGtuaWZlLCA0MDAsIDE3MCk7XG5cbi8vIHJlcGxhY2UgbGF0ZXIgLSBkcmF3aW5nIHRyYWZmaWMgY29uZVxuY29uc3QgdHJhZmZpY2NvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhZmZpY2NvbmUnKTtcbmN0eC5kcmF3SW1hZ2UodHJhZmZpY2NvbmUsIDgwMCwgMjUwKTtcblxuLy8gc3RhcnQgZ2FtZVxuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG5jdHguZm9udCA9ICc1MHB4IFNoaXp1cnUnO1xuY3R4LmZpbGxUZXh0KCdQcmVzcyBhbnkga2V5IHRvIHN0YXJ0IScsIDE4NSwgMjUwKTtcblxuLy8gc3RhZ2UgLSBsZXZlbFxuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG5jdHguZm9udCA9ICc0MHB4IFNoaXp1cnUnO1xuY3R4LmZpbGxUZXh0KCcxLTEnLCA5NDUsIDQwKSAvLyByZXBsYWNlIDEtMSB3aXRoIHRoaXMuc3RhZ2UgdGhpcy5sZXZlbFxuXG4vLyBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSg2MCwgNDUpOyAvLyBVc2luZyBvcHRpb25hbCBzaXplIGZvciBpbWFnZVxuLy8gaW1hZ2Uub25sb2FkID0gZHJhd0ltYWdlQWN0dWFsU2l6ZTsgLy8gRHJhdyB3aGVuIGltYWdlIGhhcyBsb2FkZWRcbi8vIGltYWdlLnNyYyA9ICdzcmMvaW1hZ2VzL3BpZzEucG5nJztcbi8vIGZ1bmN0aW9uIGRyYXdJbWFnZUFjdHVhbFNpemUoKSB7XG4vLyAgICAgLy8gVXNlIHRoZSBpbnRyaW5zaWMgc2l6ZSBvZiBpbWFnZSBpbiBDU1MgcGl4ZWxzIGZvciB0aGUgY2FudmFzIGVsZW1lbnRcbi8vICAgICBjYW52YXMud2lkdGggPSB0aGlzLm5hdHVyYWxXaWR0aDtcbi8vICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5uYXR1cmFsSGVpZ2h0O1xuXG4vLyAgICAgLy8gV2lsbCBkcmF3IHRoZSBpbWFnZSBhcyAzMDB4MjI3LCBpZ25vcmluZyB0aGUgY3VzdG9tIHNpemUgb2YgNjB4NDVcbi8vICAgICAvLyBnaXZlbiBpbiB0aGUgY29uc3RydWN0b3Jcbi8vICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIDAsIDApO1xuXG4vLyAgICAgLy8gVG8gdXNlIHRoZSBjdXN0b20gc2l6ZSB3ZSdsbCBoYXZlIHRvIHNwZWNpZnkgdGhlIHNjYWxlIHBhcmFtZXRlcnNcbi8vICAgICAvLyB1c2luZyB0aGUgZWxlbWVudCdzIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllcyAtIGxldHMgZHJhdyBvbmVcbi8vICAgICAvLyBvbiB0b3AgaW4gdGhlIGNvcm5lcjpcbi8vICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbi8vIH0iXSwibmFtZXMiOlsiR2FtZVZpZXciLCJyZXF1aXJlIiwid2luZG93IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNvdW50ZXIiLCJwaWciLCJkcmF3SW1hZ2UiLCJrbmlmZSIsInRyYWZmaWNjb25lIiwiZm9udCIsImZpbGxUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/background.js":
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
/***/ (function(module) {

eval("function Background(ctx) {\n  this.ctx = ctx;\n}\n\nBackground.prototype.draw = function () {\n  // create road\n  this.ctx.fillStyle = '#838383';\n  this.ctx.fillRect(0, 400, 1000, 140); // create lines on road\n\n  this.ctx.fillStyle = 'yellow'; // state 1\n\n  for (var counter = 0; counter < 11; counter++) {\n    ctx.fillRect(100 * counter, 460, 50, 10);\n  } // state 2\n  // for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter - 25), 460, 50, 10);\n  // state 3\n  // for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter - 50), 460, 50, 10);\n  // state 4\n  // for (let counter = 0; counter < 11; counter++) ctx.fillRect((100 * counter - 75), 460, 50, 10);\n\n};\n\nmodule.exports = Background;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL2JhY2tncm91bmQuanM/NGJiYyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiY3R4IiwicHJvdG90eXBlIiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY291bnRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3JCLE9BQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVERCxVQUFVLENBQUNFLFNBQVgsQ0FBcUJDLElBQXJCLEdBQTRCLFlBQVc7QUFDbkM7QUFDQSxPQUFLRixHQUFMLENBQVNHLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxPQUFLSCxHQUFMLENBQVNJLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsR0FBckIsRUFBMEIsSUFBMUIsRUFBZ0MsR0FBaEMsRUFIbUMsQ0FLbkM7O0FBQ0EsT0FBS0osR0FBTCxDQUFTRyxTQUFULEdBQXFCLFFBQXJCLENBTm1DLENBT25DOztBQUNBLE9BQUssSUFBSUUsT0FBTyxHQUFHLENBQW5CLEVBQXNCQSxPQUFPLEdBQUcsRUFBaEMsRUFBb0NBLE9BQU8sRUFBM0M7QUFBK0NMLElBQUFBLEdBQUcsQ0FBQ0ksUUFBSixDQUFjLE1BQU1DLE9BQXBCLEVBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDO0FBQS9DLEdBUm1DLENBU25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSCxDQWZEOztBQWlCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixVQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEJhY2tncm91bmQoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG59XG5cbkJhY2tncm91bmQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBjcmVhdGUgcm9hZFxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjODM4MzgzJztcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCA0MDAsIDEwMDAsIDE0MClcblxuICAgIC8vIGNyZWF0ZSBsaW5lcyBvbiByb2FkXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3llbGxvdyc7XG4gICAgLy8gc3RhdGUgMVxuICAgIGZvciAobGV0IGNvdW50ZXIgPSAwOyBjb3VudGVyIDwgMTE7IGNvdW50ZXIrKykgY3R4LmZpbGxSZWN0KCgxMDAgKiBjb3VudGVyKSwgNDYwLCA1MCwgMTApO1xuICAgIC8vIHN0YXRlIDJcbiAgICAvLyBmb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IDExOyBjb3VudGVyKyspIGN0eC5maWxsUmVjdCgoMTAwICogY291bnRlciAtIDI1KSwgNDYwLCA1MCwgMTApO1xuICAgIC8vIHN0YXRlIDNcbiAgICAvLyBmb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IDExOyBjb3VudGVyKyspIGN0eC5maWxsUmVjdCgoMTAwICogY291bnRlciAtIDUwKSwgNDYwLCA1MCwgMTApO1xuICAgIC8vIHN0YXRlIDRcbiAgICAvLyBmb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IDExOyBjb3VudGVyKyspIGN0eC5maWxsUmVjdCgoMTAwICogY291bnRlciAtIDc1KSwgNDYwLCA1MCwgMTApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tncm91bmQ7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL2JhY2tncm91bmQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/background.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Pig = __webpack_require__(/*! ./pig */ \"./src/scripts/pig.js\");\n\nvar TrafficCone = __webpack_require__(/*! ./trafficCone */ \"./src/scripts/trafficCone.js\");\n\nvar Knife = __webpack_require__(/*! ./knife */ \"./src/scripts/knife.js\");\n\nvar Background = __webpack_require__(/*! ./background */ \"./src/scripts/background.js\");\n\nfunction Game(ctx) {\n  DIM_X = 1000;\n  DIM_Y = 600;\n  this.ctx = ctx;\n  this.stage = 1;\n  this.level = 1;\n  this.lives = 3;\n  this.pig = new Pig({\n    game: this\n  });\n} // revision - wont use this // this method is only for the road stripes and buildings\n// Game.prototype.wrap = function(pos) {\n//     if (pos[0] < 0) pos[0] = DIM_X + pos[0];\n//     else pos[0] = pos[0] % DIM_X;\n// }\n\n\nGame.prototype.draw = function () {}; // runs 1 tick of gameplay\n\n\nGame.prototype.step = function () {\n  this.game.draw;\n  this.checkCollisions;\n}; // checks for collisions on each tick\n\n\nGame.prototype.checkCollisions = function () {};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxtQ0FBRCxDQUFuQjs7QUFDQSxJQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsbURBQUQsQ0FBM0I7O0FBQ0EsSUFBTUUsS0FBSyxHQUFHRixtQkFBTyxDQUFDLHVDQUFELENBQXJCOztBQUNBLElBQU1HLFVBQVUsR0FBR0gsbUJBQU8sQ0FBQyxpREFBRCxDQUExQjs7QUFFQSxTQUFTSSxJQUFULENBQWNDLEdBQWQsRUFBbUI7QUFDZkMsRUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQUMsRUFBQUEsS0FBSyxHQUFHLEdBQVI7QUFDQSxPQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxHQUFMLEdBQVcsSUFBSVosR0FBSixDQUFRO0FBQUNhLElBQUFBLElBQUksRUFBRTtBQUFQLEdBQVIsQ0FBWDtBQUNILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQVIsSUFBSSxDQUFDUyxTQUFMLENBQWVDLElBQWYsR0FBc0IsWUFBVyxDQUNoQyxDQURELEMsQ0FHQTs7O0FBQ0FWLElBQUksQ0FBQ1MsU0FBTCxDQUFlRSxJQUFmLEdBQXNCLFlBQVc7QUFDN0IsT0FBS0gsSUFBTCxDQUFVRSxJQUFWO0FBQ0EsT0FBS0UsZUFBTDtBQUNILENBSEQsQyxDQUtBOzs7QUFDQVosSUFBSSxDQUFDUyxTQUFMLENBQWVHLGVBQWYsR0FBaUMsWUFBVyxDQUMzQyxDQUREOztBQUdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpbmdpbmdfaG9tZV90aGVfYmFjb24vLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGlnID0gcmVxdWlyZShcIi4vcGlnXCIpO1xuY29uc3QgVHJhZmZpY0NvbmUgPSByZXF1aXJlKFwiLi90cmFmZmljQ29uZVwiKTtcbmNvbnN0IEtuaWZlID0gcmVxdWlyZShcIi4va25pZmVcIik7XG5jb25zdCBCYWNrZ3JvdW5kID0gcmVxdWlyZShcIi4vYmFja2dyb3VuZFwiKTtcblxuZnVuY3Rpb24gR2FtZShjdHgpIHtcbiAgICBESU1fWCA9IDEwMDA7XG4gICAgRElNX1kgPSA2MDA7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5zdGFnZSA9IDE7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5waWcgPSBuZXcgUGlnKHtnYW1lOiB0aGlzfSk7XG59XG5cbi8vIHJldmlzaW9uIC0gd29udCB1c2UgdGhpcyAvLyB0aGlzIG1ldGhvZCBpcyBvbmx5IGZvciB0aGUgcm9hZCBzdHJpcGVzIGFuZCBidWlsZGluZ3Ncbi8vIEdhbWUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbihwb3MpIHtcbi8vICAgICBpZiAocG9zWzBdIDwgMCkgcG9zWzBdID0gRElNX1ggKyBwb3NbMF07XG4vLyAgICAgZWxzZSBwb3NbMF0gPSBwb3NbMF0gJSBESU1fWDtcbi8vIH1cblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xufVxuXG4vLyBydW5zIDEgdGljayBvZiBnYW1lcGxheVxuR2FtZS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2FtZS5kcmF3XG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbnM7XG59XG5cbi8vIGNoZWNrcyBmb3IgY29sbGlzaW9ucyBvbiBlYWNoIHRpY2tcbkdhbWUucHJvdG90eXBlLmNoZWNrQ29sbGlzaW9ucyA9IGZ1bmN0aW9uKCkge1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7Il0sIm5hbWVzIjpbIlBpZyIsInJlcXVpcmUiLCJUcmFmZmljQ29uZSIsIktuaWZlIiwiQmFja2dyb3VuZCIsIkdhbWUiLCJjdHgiLCJESU1fWCIsIkRJTV9ZIiwic3RhZ2UiLCJsZXZlbCIsImxpdmVzIiwicGlnIiwiZ2FtZSIsInByb3RvdHlwZSIsImRyYXciLCJzdGVwIiwiY2hlY2tDb2xsaXNpb25zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/gameView.js":
/*!*********************************!*\
  !*** ./src/scripts/gameView.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game(ctx);\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {//     setInterval(() => {this.game.draw(this.ctx)}, 25)\n  //     setInterval(() => {this.game.step()}, 25)\n};\n\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lVmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMscUNBQUQsQ0FBcEI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDbkIsT0FBS0MsSUFBTCxHQUFZLElBQUlKLElBQUosQ0FBU0csR0FBVCxDQUFaO0FBQ0EsT0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRURELFFBQVEsQ0FBQ0csU0FBVCxDQUFtQkMsS0FBbkIsR0FBMkIsWUFBVyxDQUN0QztBQUNBO0FBQ0MsQ0FIRDs7QUFLQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixRQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaW5naW5nX2hvbWVfdGhlX2JhY29uLy4vc3JjL3NjcmlwdHMvZ2FtZVZpZXcuanM/M2RkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vZ2FtZVwiKVxuXG5mdW5jdGlvbiBHYW1lVmlldyhjdHgpIHtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xufVxuXG5HYW1lVmlldy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbi8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpfSwgMjUpXG4vLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuZ2FtZS5zdGVwKCl9LCAyNSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJHYW1lVmlldyIsImN0eCIsImdhbWUiLCJwcm90b3R5cGUiLCJzdGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/gameView.js\n");

/***/ }),

/***/ "./src/scripts/knife.js":
/*!******************************!*\
  !*** ./src/scripts/knife.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/scripts/movingObject.js\");\n\nvar Util = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\nfunction Knife(object) {\n  this.pos = [1000, 340];\n  this.vel = [-50, 0];\n  this.game = object[\"game\"];\n  this.size = object[\"size\"];\n}\n\nUtil.inherits(Knife, MovingObject);\n\nKnife.prototype.draw = function (ctx) {};\n\nmodule.exports = Knife;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rbmlmZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxZQUFZLEdBQUdDLG1CQUFPLENBQUMscURBQUQsQ0FBNUI7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUVBLFNBQVNFLEtBQVQsQ0FBZUMsTUFBZixFQUF1QjtBQUNuQixPQUFLQyxHQUFMLEdBQVcsQ0FBQyxJQUFELEVBQU8sR0FBUCxDQUFYO0FBQ0EsT0FBS0MsR0FBTCxHQUFXLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBTixDQUFYO0FBQ0EsT0FBS0MsSUFBTCxHQUFZSCxNQUFNLENBQUMsTUFBRCxDQUFsQjtBQUNBLE9BQUtJLElBQUwsR0FBWUosTUFBTSxDQUFDLE1BQUQsQ0FBbEI7QUFDSDs7QUFFREYsSUFBSSxDQUFDTyxRQUFMLENBQWNOLEtBQWQsRUFBcUJILFlBQXJCOztBQUVBRyxLQUFLLENBQUNPLFNBQU4sQ0FBZ0JDLElBQWhCLEdBQXVCLFVBQVNDLEdBQVQsRUFBYyxDQUNwQyxDQUREOztBQUdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLEtBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpbmdpbmdfaG9tZV90aGVfYmFjb24vLi9zcmMvc2NyaXB0cy9rbmlmZS5qcz84NmE5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmluZ09iamVjdCA9IHJlcXVpcmUoXCIuL21vdmluZ09iamVjdFwiKTtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBLbmlmZShvYmplY3QpIHtcbiAgICB0aGlzLnBvcyA9IFsxMDAwLCAzNDBdO1xuICAgIHRoaXMudmVsID0gWy01MCwgMF07XG4gICAgdGhpcy5nYW1lID0gb2JqZWN0W1wiZ2FtZVwiXTtcbiAgICB0aGlzLnNpemUgPSBvYmplY3RbXCJzaXplXCJdO1xufVxuXG5VdGlsLmluaGVyaXRzKEtuaWZlLCBNb3ZpbmdPYmplY3QpO1xuXG5LbmlmZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtuaWZlOyJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJyZXF1aXJlIiwiVXRpbCIsIktuaWZlIiwib2JqZWN0IiwicG9zIiwidmVsIiwiZ2FtZSIsInNpemUiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/knife.js\n");

/***/ }),

/***/ "./src/scripts/movingObject.js":
/*!*************************************!*\
  !*** ./src/scripts/movingObject.js ***!
  \*************************************/
/***/ (function() {

eval("function MovingObject(object) {\n  this.pos = object[\"pos\"];\n  this.vel = object[\"vel\"];\n  this.game = object[\"game\"];\n  this.size = object[\"size\"];\n}\n\nMovingObject.prototype.draw = function (ctx) {}; // traffic cones and road stripes will move at same rate\n// pans and knives will move faster\n// pig will always have 0 x, jumping will alter the y\n\n\nMovingObject.prototype.move = function () {\n  this.pos[0] = this.pos[0] + this.vel[0];\n  this.pos[1] = this.pos[1] + this.vel[1];\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  var thisX = this.pos[0];\n  var thisY = this.pos[1];\n  var otherX = otherObject.pos[0];\n  var otherY = otherObject.pos[1]; // check collision and return true or false;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL21vdmluZ09iamVjdC5qcz9iZDJkIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIm9iamVjdCIsInBvcyIsInZlbCIsImdhbWUiLCJzaXplIiwicHJvdG90eXBlIiwiZHJhdyIsImN0eCIsIm1vdmUiLCJpc0NvbGxpZGVkV2l0aCIsIm90aGVyT2JqZWN0IiwidGhpc1giLCJ0aGlzWSIsIm90aGVyWCIsIm90aGVyWSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDMUIsT0FBS0MsR0FBTCxHQUFXRCxNQUFNLENBQUMsS0FBRCxDQUFqQjtBQUNBLE9BQUtFLEdBQUwsR0FBV0YsTUFBTSxDQUFDLEtBQUQsQ0FBakI7QUFDQSxPQUFLRyxJQUFMLEdBQVlILE1BQU0sQ0FBQyxNQUFELENBQWxCO0FBQ0EsT0FBS0ksSUFBTCxHQUFZSixNQUFNLENBQUMsTUFBRCxDQUFsQjtBQUNIOztBQUVERCxZQUFZLENBQUNNLFNBQWIsQ0FBdUJDLElBQXZCLEdBQThCLFVBQVNDLEdBQVQsRUFBYyxDQUMzQyxDQURELEMsQ0FHQTtBQUNBO0FBQ0E7OztBQUNBUixZQUFZLENBQUNNLFNBQWIsQ0FBdUJHLElBQXZCLEdBQThCLFlBQVc7QUFDckMsT0FBS1AsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFjLEtBQUtDLEdBQUwsQ0FBUyxDQUFULENBQTVCO0FBQ0EsT0FBS0QsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFjLEtBQUtDLEdBQUwsQ0FBUyxDQUFULENBQTVCO0FBQ0gsQ0FIRDs7QUFLQUgsWUFBWSxDQUFDTSxTQUFiLENBQXVCSSxjQUF2QixHQUF3QyxVQUFTQyxXQUFULEVBQXNCO0FBQzFELE1BQUlDLEtBQUssR0FBRyxLQUFLVixHQUFMLENBQVMsQ0FBVCxDQUFaO0FBQ0EsTUFBSVcsS0FBSyxHQUFHLEtBQUtYLEdBQUwsQ0FBUyxDQUFULENBQVo7QUFDQSxNQUFJWSxNQUFNLEdBQUdILFdBQVcsQ0FBQ1QsR0FBWixDQUFnQixDQUFoQixDQUFiO0FBQ0EsTUFBSWEsTUFBTSxHQUFHSixXQUFXLENBQUNULEdBQVosQ0FBZ0IsQ0FBaEIsQ0FBYixDQUowRCxDQUsxRDtBQUNILENBTkQiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBNb3ZpbmdPYmplY3Qob2JqZWN0KSB7XG4gICAgdGhpcy5wb3MgPSBvYmplY3RbXCJwb3NcIl07XG4gICAgdGhpcy52ZWwgPSBvYmplY3RbXCJ2ZWxcIl07XG4gICAgdGhpcy5nYW1lID0gb2JqZWN0W1wiZ2FtZVwiXTtcbiAgICB0aGlzLnNpemUgPSBvYmplY3RbXCJzaXplXCJdO1xufVxuXG5Nb3ZpbmdPYmplY3QucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcbn1cblxuLy8gdHJhZmZpYyBjb25lcyBhbmQgcm9hZCBzdHJpcGVzIHdpbGwgbW92ZSBhdCBzYW1lIHJhdGVcbi8vIHBhbnMgYW5kIGtuaXZlcyB3aWxsIG1vdmUgZmFzdGVyXG4vLyBwaWcgd2lsbCBhbHdheXMgaGF2ZSAwIHgsIGp1bXBpbmcgd2lsbCBhbHRlciB0aGUgeVxuTW92aW5nT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wb3NbMF0gPSB0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdO1xuICAgIHRoaXMucG9zWzFdID0gdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXTtcbn1cblxuTW92aW5nT2JqZWN0LnByb3RvdHlwZS5pc0NvbGxpZGVkV2l0aCA9IGZ1bmN0aW9uKG90aGVyT2JqZWN0KSB7XG4gICAgbGV0IHRoaXNYID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHRoaXNZID0gdGhpcy5wb3NbMV07XG4gICAgbGV0IG90aGVyWCA9IG90aGVyT2JqZWN0LnBvc1swXTtcbiAgICBsZXQgb3RoZXJZID0gb3RoZXJPYmplY3QucG9zWzFdO1xuICAgIC8vIGNoZWNrIGNvbGxpc2lvbiBhbmQgcmV0dXJuIHRydWUgb3IgZmFsc2U7XG59ICAgICJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZpbmdPYmplY3QuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/movingObject.js\n");

/***/ }),

/***/ "./src/scripts/pig.js":
/*!****************************!*\
  !*** ./src/scripts/pig.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/scripts/movingObject.js\");\n\nvar Util = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\nfunction Pig(object) {\n  this.pos = [0, 250];\n  this.vel = [0, 0];\n  this.game = object[\"game\"];\n  this.size = object[\"size\"];\n}\n\nUtil.inherits(Pig, MovingObject);\n\nPig.prototype.draw = function (ctx) {\n  // replace later\n  var pig = document.getElementById('pig');\n  ctx.drawImage(pig, 0, 250);\n};\n\nPig.prototype.isJumping = function () {\n  if (this.pos[1] !== 250) return true;\n  return false;\n};\n\nPig.prototype.isDucking = function () {};\n\nmodule.exports = Pig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9waWcuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLHFEQUFELENBQTVCOztBQUNBLElBQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFFQSxTQUFTRSxHQUFULENBQWFDLE1BQWIsRUFBcUI7QUFDakIsT0FBS0MsR0FBTCxHQUFXLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBWDtBQUNBLE9BQUtDLEdBQUwsR0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVg7QUFDQSxPQUFLQyxJQUFMLEdBQVlILE1BQU0sQ0FBQyxNQUFELENBQWxCO0FBQ0EsT0FBS0ksSUFBTCxHQUFZSixNQUFNLENBQUMsTUFBRCxDQUFsQjtBQUNIOztBQUVERixJQUFJLENBQUNPLFFBQUwsQ0FBY04sR0FBZCxFQUFtQkgsWUFBbkI7O0FBRUFHLEdBQUcsQ0FBQ08sU0FBSixDQUFjQyxJQUFkLEdBQXFCLFVBQVNDLEdBQVQsRUFBYztBQUMvQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVo7QUFDQUgsRUFBQUEsR0FBRyxDQUFDSSxTQUFKLENBQWNILEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEI7QUFDSCxDQUpEOztBQU1BVixHQUFHLENBQUNPLFNBQUosQ0FBY08sU0FBZCxHQUEwQixZQUFXO0FBQ2pDLE1BQUksS0FBS1osR0FBTCxDQUFTLENBQVQsTUFBZ0IsR0FBcEIsRUFBeUIsT0FBTyxJQUFQO0FBQ3pCLFNBQU8sS0FBUDtBQUNILENBSEQ7O0FBS0FGLEdBQUcsQ0FBQ08sU0FBSixDQUFjUSxTQUFkLEdBQTBCLFlBQVcsQ0FFcEMsQ0FGRDs7QUFJQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCakIsR0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL3BpZy5qcz9jM2MxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmluZ09iamVjdCA9IHJlcXVpcmUoXCIuL21vdmluZ09iamVjdFwiKTtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBQaWcob2JqZWN0KSB7XG4gICAgdGhpcy5wb3MgPSBbMCwgMjUwXTtcbiAgICB0aGlzLnZlbCA9IFswLCAwXTtcbiAgICB0aGlzLmdhbWUgPSBvYmplY3RbXCJnYW1lXCJdO1xuICAgIHRoaXMuc2l6ZSA9IG9iamVjdFtcInNpemVcIl07XG59XG5cblV0aWwuaW5oZXJpdHMoUGlnLCBNb3ZpbmdPYmplY3QpO1xuXG5QaWcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcbiAgICAvLyByZXBsYWNlIGxhdGVyXG4gICAgY29uc3QgcGlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZycpO1xuICAgIGN0eC5kcmF3SW1hZ2UocGlnLCAwLCAyNTApO1xufVxuXG5QaWcucHJvdG90eXBlLmlzSnVtcGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvc1sxXSAhPT0gMjUwKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblBpZy5wcm90b3R5cGUuaXNEdWNraW5nID0gZnVuY3Rpb24oKSB7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQaWc7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsInJlcXVpcmUiLCJVdGlsIiwiUGlnIiwib2JqZWN0IiwicG9zIiwidmVsIiwiZ2FtZSIsInNpemUiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJwaWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0ltYWdlIiwiaXNKdW1waW5nIiwiaXNEdWNraW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/pig.js\n");

/***/ }),

/***/ "./src/scripts/trafficCone.js":
/*!************************************!*\
  !*** ./src/scripts/trafficCone.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/scripts/movingObject.js\");\n\nvar Util = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\nfunction TrafficCone(object) {\n  this.pos = [1000, 250];\n  this.vel = [-25, 0];\n  this.game = object[\"game\"];\n  this.size = object[\"size\"];\n}\n\nUtil.inherits(TrafficCone, MovingObject);\n\nTrafficCone.prototype.draw = function (ctx) {};\n\nmodule.exports = TrafficCone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90cmFmZmljQ29uZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxZQUFZLEdBQUdDLG1CQUFPLENBQUMscURBQUQsQ0FBNUI7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUVBLFNBQVNFLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBQ3pCLE9BQUtDLEdBQUwsR0FBVyxDQUFDLElBQUQsRUFBTyxHQUFQLENBQVg7QUFDQSxPQUFLQyxHQUFMLEdBQVcsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFOLENBQVg7QUFDQSxPQUFLQyxJQUFMLEdBQVlILE1BQU0sQ0FBQyxNQUFELENBQWxCO0FBQ0EsT0FBS0ksSUFBTCxHQUFZSixNQUFNLENBQUMsTUFBRCxDQUFsQjtBQUNIOztBQUVERixJQUFJLENBQUNPLFFBQUwsQ0FBY04sV0FBZCxFQUEyQkgsWUFBM0I7O0FBRUFHLFdBQVcsQ0FBQ08sU0FBWixDQUFzQkMsSUFBdEIsR0FBNkIsVUFBU0MsR0FBVCxFQUFjLENBRTFDLENBRkQ7O0FBSUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsV0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL3RyYWZmaWNDb25lLmpzP2RmODkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW92aW5nT2JqZWN0ID0gcmVxdWlyZShcIi4vbW92aW5nT2JqZWN0XCIpO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbmZ1bmN0aW9uIFRyYWZmaWNDb25lKG9iamVjdCkge1xuICAgIHRoaXMucG9zID0gWzEwMDAsIDI1MF07XG4gICAgdGhpcy52ZWwgPSBbLTI1LCAwXTtcbiAgICB0aGlzLmdhbWUgPSBvYmplY3RbXCJnYW1lXCJdO1xuICAgIHRoaXMuc2l6ZSA9IG9iamVjdFtcInNpemVcIl07XG59XG5cblV0aWwuaW5oZXJpdHMoVHJhZmZpY0NvbmUsIE1vdmluZ09iamVjdCk7XG5cblRyYWZmaWNDb25lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4KSB7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFmZmljQ29uZTsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwicmVxdWlyZSIsIlV0aWwiLCJUcmFmZmljQ29uZSIsIm9iamVjdCIsInBvcyIsInZlbCIsImdhbWUiLCJzaXplIiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJkcmF3IiwiY3R4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/trafficCone.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(module) {

eval("var Util = {\n  inherits: function inherits(childClass, parentClass) {\n    function Banana() {}\n\n    ;\n    Banana.prototype = parentClass.prototype;\n    childClass.prototype = new Banana();\n    childClass.prototype.constructor = childClass;\n  }\n};\nmodule.exports = Util;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL3V0aWwuanM/Njk0YiJdLCJuYW1lcyI6WyJVdGlsIiwiaW5oZXJpdHMiLCJjaGlsZENsYXNzIiwicGFyZW50Q2xhc3MiLCJCYW5hbmEiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLElBQUksR0FBRztBQUNUQyxFQUFBQSxRQURTLG9CQUNBQyxVQURBLEVBQ1lDLFdBRFosRUFDeUI7QUFDOUIsYUFBU0MsTUFBVCxHQUFrQixDQUFHOztBQUFBO0FBQ3JCQSxJQUFBQSxNQUFNLENBQUNDLFNBQVAsR0FBbUJGLFdBQVcsQ0FBQ0UsU0FBL0I7QUFDQUgsSUFBQUEsVUFBVSxDQUFDRyxTQUFYLEdBQXVCLElBQUlELE1BQUosRUFBdkI7QUFDQUYsSUFBQUEsVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxXQUFyQixHQUFtQ0osVUFBbkM7QUFDSDtBQU5RLENBQWI7QUFTQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCUixJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFV0aWwgPSB7XG4gICAgaW5oZXJpdHMoY2hpbGRDbGFzcywgcGFyZW50Q2xhc3MpIHtcbiAgICAgICAgZnVuY3Rpb24gQmFuYW5hKCkgeyB9O1xuICAgICAgICBCYW5hbmEucHJvdG90eXBlID0gcGFyZW50Q2xhc3MucHJvdG90eXBlO1xuICAgICAgICBjaGlsZENsYXNzLnByb3RvdHlwZSA9IG5ldyBCYW5hbmE7XG4gICAgICAgIGNoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY2hpbGRDbGFzcztcbiAgICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVdGlsOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

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