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

eval("var Pig = __webpack_require__(/*! ./pig */ \"./src/scripts/pig.js\");\n\nfunction Game(ctx) {\n  DIM_X = 1000;\n  DIM_Y = 600;\n  this.ctx = ctx;\n  this.stage = 1;\n  this.level = 1;\n  this.lives = 3;\n  this.pig = new Pig({\n    game: this\n  });\n} // this method is only for the road stripes and buildings\n\n\nGame.prototype.wrap = function (pos) {\n  if (pos[0] < 0) pos[0] = DIM_X + pos[0];else pos[0] = pos[0] % DIM_X;\n};\n\nGame.prototype.draw = function () {}; // runs 1 tick of gameplay\n\n\nGame.prototype.step = function () {\n  this.game.draw;\n  this.checkCollisions;\n}; // checks for collisions on each tick\n\n\nGame.prototype.checkCollisions = function () {};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxtQ0FBRCxDQUFuQjs7QUFFQSxTQUFTQyxJQUFULENBQWNDLEdBQWQsRUFBbUI7QUFDZkMsRUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQUMsRUFBQUEsS0FBSyxHQUFHLEdBQVI7QUFDQSxPQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxHQUFMLEdBQVcsSUFBSVQsR0FBSixDQUFRO0FBQUNVLElBQUFBLElBQUksRUFBRTtBQUFQLEdBQVIsQ0FBWDtBQUNILEMsQ0FFRDs7O0FBQ0FSLElBQUksQ0FBQ1MsU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFVBQVNDLEdBQVQsRUFBYztBQUNoQyxNQUFJQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBYixFQUFnQkEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTVCxLQUFLLEdBQUdTLEdBQUcsQ0FBQyxDQUFELENBQXBCLENBQWhCLEtBQ0tBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTVCxLQUFsQjtBQUNSLENBSEQ7O0FBS0FGLElBQUksQ0FBQ1MsU0FBTCxDQUFlRyxJQUFmLEdBQXNCLFlBQVcsQ0FDaEMsQ0FERCxDLENBR0E7OztBQUNBWixJQUFJLENBQUNTLFNBQUwsQ0FBZUksSUFBZixHQUFzQixZQUFXO0FBQzdCLE9BQUtMLElBQUwsQ0FBVUksSUFBVjtBQUNBLE9BQUtFLGVBQUw7QUFDSCxDQUhELEMsQ0FLQTs7O0FBQ0FkLElBQUksQ0FBQ1MsU0FBTCxDQUFlSyxlQUFmLEdBQWlDLFlBQVcsQ0FDM0MsQ0FERDs7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsSUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQaWcgPSByZXF1aXJlKFwiLi9waWdcIilcblxuZnVuY3Rpb24gR2FtZShjdHgpIHtcbiAgICBESU1fWCA9IDEwMDA7XG4gICAgRElNX1kgPSA2MDA7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5zdGFnZSA9IDE7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5waWcgPSBuZXcgUGlnKHtnYW1lOiB0aGlzfSk7XG59XG5cbi8vIHRoaXMgbWV0aG9kIGlzIG9ubHkgZm9yIHRoZSByb2FkIHN0cmlwZXMgYW5kIGJ1aWxkaW5nc1xuR2FtZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uKHBvcykge1xuICAgIGlmIChwb3NbMF0gPCAwKSBwb3NbMF0gPSBESU1fWCArIHBvc1swXTtcbiAgICBlbHNlIHBvc1swXSA9IHBvc1swXSAlIERJTV9YO1xufVxuXG5HYW1lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG59XG5cbi8vIHJ1bnMgMSB0aWNrIG9mIGdhbWVwbGF5XG5HYW1lLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nYW1lLmRyYXdcbiAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucztcbn1cblxuLy8gY2hlY2tzIGZvciBjb2xsaXNpb25zIG9uIGVhY2ggdGlja1xuR2FtZS5wcm90b3R5cGUuY2hlY2tDb2xsaXNpb25zID0gZnVuY3Rpb24oKSB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwibmFtZXMiOlsiUGlnIiwicmVxdWlyZSIsIkdhbWUiLCJjdHgiLCJESU1fWCIsIkRJTV9ZIiwic3RhZ2UiLCJsZXZlbCIsImxpdmVzIiwicGlnIiwiZ2FtZSIsInByb3RvdHlwZSIsIndyYXAiLCJwb3MiLCJkcmF3Iiwic3RlcCIsImNoZWNrQ29sbGlzaW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/gameView.js":
/*!*********************************!*\
  !*** ./src/scripts/gameView.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game(ctx);\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {//     setInterval(() => {this.game.draw(this.ctx)}, 25)\n  //     setInterval(() => {this.game.step()}, 25)\n};\n\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lVmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMscUNBQUQsQ0FBcEI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDbkIsT0FBS0MsSUFBTCxHQUFZLElBQUlKLElBQUosQ0FBU0csR0FBVCxDQUFaO0FBQ0EsT0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRURELFFBQVEsQ0FBQ0csU0FBVCxDQUFtQkMsS0FBbkIsR0FBMkIsWUFBVyxDQUN0QztBQUNBO0FBQ0MsQ0FIRDs7QUFLQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixRQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaW5naW5nX2hvbWVfdGhlX2JhY29uLy4vc3JjL3NjcmlwdHMvZ2FtZVZpZXcuanM/M2RkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vZ2FtZVwiKVxuXG5mdW5jdGlvbiBHYW1lVmlldyhjdHgpIHtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xufVxuXG5HYW1lVmlldy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbi8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpfSwgMjUpXG4vLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuZ2FtZS5zdGVwKCl9LCAyNSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldzsiXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJHYW1lVmlldyIsImN0eCIsImdhbWUiLCJwcm90b3R5cGUiLCJzdGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/gameView.js\n");

/***/ }),

/***/ "./src/scripts/movingObject.js":
/*!*************************************!*\
  !*** ./src/scripts/movingObject.js ***!
  \*************************************/
/***/ (function() {

eval("function MovingObject(object) {\n  this.pos = object[\"pos\"];\n  this.vel = object[\"vel\"];\n  this.game = object[\"game\"];\n  this.size = object[\"size\"];\n}\n\nMovingObject.prototype.draw = function (ctx) {};\n\nMovingObject.prototype.move = function () {\n  this.pos[0] = this.pos[0] + this.vel[0];\n  this.pos[1] = this.pos[1] + this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  var thisX = this.pos[0];\n  var thisY = this.pos[1];\n  var otherX = otherObject.pos[0];\n  var otherY = otherObject.pos[1]; // check collision and return true or false;\n}; // traffic cones and road stripes will move at same rate\n// pans and knives will move faster//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmluZ2luZ19ob21lX3RoZV9iYWNvbi8uL3NyYy9zY3JpcHRzL21vdmluZ09iamVjdC5qcz9iZDJkIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIm9iamVjdCIsInBvcyIsInZlbCIsImdhbWUiLCJzaXplIiwicHJvdG90eXBlIiwiZHJhdyIsImN0eCIsIm1vdmUiLCJ3cmFwIiwiaXNDb2xsaWRlZFdpdGgiLCJvdGhlck9iamVjdCIsInRoaXNYIiwidGhpc1kiLCJvdGhlclgiLCJvdGhlclkiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCO0FBQzFCLE9BQUtDLEdBQUwsR0FBV0QsTUFBTSxDQUFDLEtBQUQsQ0FBakI7QUFDQSxPQUFLRSxHQUFMLEdBQVdGLE1BQU0sQ0FBQyxLQUFELENBQWpCO0FBQ0EsT0FBS0csSUFBTCxHQUFZSCxNQUFNLENBQUMsTUFBRCxDQUFsQjtBQUNBLE9BQUtJLElBQUwsR0FBWUosTUFBTSxDQUFDLE1BQUQsQ0FBbEI7QUFDSDs7QUFFREQsWUFBWSxDQUFDTSxTQUFiLENBQXVCQyxJQUF2QixHQUE4QixVQUFTQyxHQUFULEVBQWMsQ0FDM0MsQ0FERDs7QUFHQVIsWUFBWSxDQUFDTSxTQUFiLENBQXVCRyxJQUF2QixHQUE4QixZQUFXO0FBQ3JDLE9BQUtQLEdBQUwsQ0FBUyxDQUFULElBQWMsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUE1QjtBQUNBLE9BQUtELEdBQUwsQ0FBUyxDQUFULElBQWMsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUE1QjtBQUNBLE9BQUtELEdBQUwsR0FBVyxLQUFLRSxJQUFMLENBQVVNLElBQVYsQ0FBZSxLQUFLUixHQUFwQixDQUFYO0FBQ0gsQ0FKRDs7QUFNQUYsWUFBWSxDQUFDTSxTQUFiLENBQXVCSyxjQUF2QixHQUF3QyxVQUFTQyxXQUFULEVBQXNCO0FBQzFELE1BQUlDLEtBQUssR0FBRyxLQUFLWCxHQUFMLENBQVMsQ0FBVCxDQUFaO0FBQ0EsTUFBSVksS0FBSyxHQUFHLEtBQUtaLEdBQUwsQ0FBUyxDQUFULENBQVo7QUFDQSxNQUFJYSxNQUFNLEdBQUdILFdBQVcsQ0FBQ1YsR0FBWixDQUFnQixDQUFoQixDQUFiO0FBQ0EsTUFBSWMsTUFBTSxHQUFHSixXQUFXLENBQUNWLEdBQVosQ0FBZ0IsQ0FBaEIsQ0FBYixDQUowRCxDQUsxRDtBQUNILENBTkQsQyxDQVFBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBNb3ZpbmdPYmplY3Qob2JqZWN0KSB7XG4gICAgdGhpcy5wb3MgPSBvYmplY3RbXCJwb3NcIl07XG4gICAgdGhpcy52ZWwgPSBvYmplY3RbXCJ2ZWxcIl07XG4gICAgdGhpcy5nYW1lID0gb2JqZWN0W1wiZ2FtZVwiXTtcbiAgICB0aGlzLnNpemUgPSBvYmplY3RbXCJzaXplXCJdO1xufVxuXG5Nb3ZpbmdPYmplY3QucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgpIHtcbn1cblxuTW92aW5nT2JqZWN0LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wb3NbMF0gPSB0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdO1xuICAgIHRoaXMucG9zWzFdID0gdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXTtcbiAgICB0aGlzLnBvcyA9IHRoaXMuZ2FtZS53cmFwKHRoaXMucG9zKTtcbn1cblxuTW92aW5nT2JqZWN0LnByb3RvdHlwZS5pc0NvbGxpZGVkV2l0aCA9IGZ1bmN0aW9uKG90aGVyT2JqZWN0KSB7XG4gICAgbGV0IHRoaXNYID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHRoaXNZID0gdGhpcy5wb3NbMV07XG4gICAgbGV0IG90aGVyWCA9IG90aGVyT2JqZWN0LnBvc1swXTtcbiAgICBsZXQgb3RoZXJZID0gb3RoZXJPYmplY3QucG9zWzFdO1xuICAgIC8vIGNoZWNrIGNvbGxpc2lvbiBhbmQgcmV0dXJuIHRydWUgb3IgZmFsc2U7XG59ICAgIFxuXG4vLyB0cmFmZmljIGNvbmVzIGFuZCByb2FkIHN0cmlwZXMgd2lsbCBtb3ZlIGF0IHNhbWUgcmF0ZVxuLy8gcGFucyBhbmQga25pdmVzIHdpbGwgbW92ZSBmYXN0ZXJcblxuXG4iXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW92aW5nT2JqZWN0LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/movingObject.js\n");

/***/ }),

/***/ "./src/scripts/pig.js":
/*!****************************!*\
  !*** ./src/scripts/pig.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/scripts/movingObject.js\");\n\nvar Util = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\nfunction Pig(object) {\n  this.pos = object[\"pos\"];\n  this.vel = object[\"vel\"];\n  this.game = object[\"game\"];\n  this.size = object[\"size\"];\n}\n\nUtil.inherits(Pig, MovingObject);\n\nPig.prototype.draw = function (ctx) {};\n\nmodule.exports = Pig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9waWcuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLHFEQUFELENBQTVCOztBQUNBLElBQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFFQSxTQUFTRSxHQUFULENBQWFDLE1BQWIsRUFBcUI7QUFDakIsT0FBS0MsR0FBTCxHQUFXRCxNQUFNLENBQUMsS0FBRCxDQUFqQjtBQUNBLE9BQUtFLEdBQUwsR0FBV0YsTUFBTSxDQUFDLEtBQUQsQ0FBakI7QUFDQSxPQUFLRyxJQUFMLEdBQVlILE1BQU0sQ0FBQyxNQUFELENBQWxCO0FBQ0EsT0FBS0ksSUFBTCxHQUFZSixNQUFNLENBQUMsTUFBRCxDQUFsQjtBQUNIOztBQUVERixJQUFJLENBQUNPLFFBQUwsQ0FBY04sR0FBZCxFQUFtQkgsWUFBbkI7O0FBRUFHLEdBQUcsQ0FBQ08sU0FBSixDQUFjQyxJQUFkLEdBQXFCLFVBQVNDLEdBQVQsRUFBYyxDQUNsQyxDQUREOztBQUdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLEdBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpbmdpbmdfaG9tZV90aGVfYmFjb24vLi9zcmMvc2NyaXB0cy9waWcuanM/YzNjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNb3ZpbmdPYmplY3QgPSByZXF1aXJlKFwiLi9tb3ZpbmdPYmplY3RcIik7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcblxuZnVuY3Rpb24gUGlnKG9iamVjdCkge1xuICAgIHRoaXMucG9zID0gb2JqZWN0W1wicG9zXCJdO1xuICAgIHRoaXMudmVsID0gb2JqZWN0W1widmVsXCJdO1xuICAgIHRoaXMuZ2FtZSA9IG9iamVjdFtcImdhbWVcIl07XG4gICAgdGhpcy5zaXplID0gb2JqZWN0W1wic2l6ZVwiXTtcbn1cblxuVXRpbC5pbmhlcml0cyhQaWcsIE1vdmluZ09iamVjdCk7XG5cblBpZy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBpZzsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwicmVxdWlyZSIsIlV0aWwiLCJQaWciLCJvYmplY3QiLCJwb3MiLCJ2ZWwiLCJnYW1lIiwic2l6ZSIsImluaGVyaXRzIiwicHJvdG90eXBlIiwiZHJhdyIsImN0eCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/pig.js\n");

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