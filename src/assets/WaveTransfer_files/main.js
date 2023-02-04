"use strict";
(self["webpackChunkWaveTransfer"] = self["webpackChunkWaveTransfer"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 67);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'WaveTransfer';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 67);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);


 // <-- NgModel lives here



class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
  });
})();

/***/ }),

/***/ 67:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 17,
  vars: 0,
  consts: [[1, "header"], [1, "headerback"], [1, "logotext"], [1, "body"], [1, "bigtext"], [1, "buttonpack"], [1, "sharefile"], [1, "footer"], [1, "footerback"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WaveTransfer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div")(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Seamlessly Share Files Online");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " With WaveTransfer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Share A File");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".headerback[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 110px;\n  background-image: url('headerback.svg');\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: contain;\n  float: left;\n}\n\n.footerback[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 110px;\n  background-image: url('footerback.svg');\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  background-size: contain;\n  float: right;\n}\n\n.footer[_ngcontent-%COMP%], .header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  overflow: hidden;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  bottom: 0px;\n  right: 0px;\n}\n\n.logotext[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: white;\n  font-size: 25px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n\n.body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 80%;\n  margin: 0px auto;\n  margin-top: 150px;\n}\n\n.bigtext[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 50px;\n  padding: 20px;\n  font-family: germania;\n}\n\n.sharefile[_ngcontent-%COMP%] {\n  border: none;\n  background: #00703C;\n  border-radius: 50px;\n  padding: 10px 60px;\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n  transition: 0.5s ease;\n}\n\n.buttonpack[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJiYWNre1xuICAgIHdpZHRoOjQwMHB4O1xuICAgIGhlaWdodDoxMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vYXNzZXRzL2hlYWRlcmJhY2suc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjp0b3AgbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBmbG9hdDpsZWZ0O1xufVxuXG5cbi5mb290ZXJiYWNre1xuICAgIHdpZHRoOjQwMHB4O1xuICAgIGhlaWdodDoxMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vYXNzZXRzL2Zvb3RlcmJhY2suc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpib3R0b20gcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbi5mb290ZXIsIC5oZWFkZXJ7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5oZWFkZXJ7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xufVxuXG4uZm9vdGVye1xuICAgIGJvdHRvbTowcHg7XG4gICAgcmlnaHQ6MHB4O1xufVxuXG4ubG9nb3RleHR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOjI1cHg7XG4gICAgaGVpZ2h0OjYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5ib2R5eyAgIFxuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgd2lkdGg6ODAlO1xuICAgIG1hcmdpbjowcHggYXV0bztcbiAgICBtYXJnaW4tdG9wOjE1MHB4O1xufVxuXG4uYmlndGV4dHtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgIHBhZGRpbmc6MjBweDtcbiAgICBmb250LWZhbWlseTogZ2VybWFuaWE7XG59XG5cbi5zaGFyZWZpbGV7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYmFja2dyb3VuZDogIzAwNzAzQztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6MTBweCA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbi5idXR0b25wYWNre1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map