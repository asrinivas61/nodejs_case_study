(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_13__["appRoutes"]),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");


var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  @font-face {\r\n    font-family: Trench;\r\n    src: url('trench100free.otf');\r\n  }\r\n  .title {\r\n    line-height: 40px;\r\n    width: 20%;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: Trench;\r\n    font-size: 30px;\r\n    color: white;\r\n  }\r\n  .login_bg {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding-top: 60px;\r\n    background: linear-gradient(186deg, #27d9c3, #2742d9);\r\n    background-size: 400% 400%;\r\n\r\n    -webkit-animation: AnimationName 4s ease infinite;\r\n    animation: AnimationName 4s ease infinite;\r\n  }\r\n  @-webkit-keyframes AnimationName {\r\n    0%{background-position:30% 0%}\r\n    50%{background-position:71% 100%}\r\n    100%{background-position:30% 0%}\r\n  }\r\n  @keyframes AnimationName { \r\n      0%{background-position:30% 0%}\r\n      50%{background-position:71% 100%}\r\n      100%{background-position:30% 0%}\r\n  }\r\n  input{\r\n  background-color: grey;\r\n  width: 50%;\r\n  padding: 12px 20px;\r\n  margin: 18px 0;\r\n  display: block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 2px;\r\n  box-sizing: border-box;\r\n}\r\n  button[type=submit] {\r\n  width: 100%;\r\n  background-color: yellow;\r\n  color:black;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n  button[disabled] {\r\n  background-color: rgba(255, 255, 0, 0.6) !important;\r\n  cursor: default !important;\r\n}\r\n  .form {\r\n  width: 600px;\r\n  margin: 20px auto 40px;\r\n}\r\n  .form input {\r\n  margin: 10px auto;\r\n  color: white;\r\n}\r\n  .greeting {\r\n  width: 30%;\r\n  margin: auto;\r\n  text-align: center;\r\n  font-size: 25px;\r\n  color: white;\r\n}\r\n  .hint {\r\n  width: 70%;\r\n  margin: auto;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  color: #c6c6c6;\r\n}\r\n  .text-danger {\r\n  float: right;\r\n  font-size: 15px;\r\n  font-weight: bolder;\r\n  margin-right: -13%;\r\n  margin-top: -8%;\r\n}\r\n  .submit {\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n  ::-webkit-input-placeholder {\r\n  color: #ccc;\r\n}\r\n  :-ms-input-placeholder {\r\n  color: #ccc;\r\n}\r\n  ::-moz-placeholder {\r\n  color: #ccc;\r\n  opacity: 1;\r\n}\r\n  :-moz-placeholder {\r\n  color: #ccc;\r\n  opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login_bg\">\n\t<div class=\"title\">Login Page</div>\n\t<form class=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"login()\">\n\t\t<div>\n\t\t\t<input type=\"email\" name=\"username\" placeholder=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required>\n\t\t</div>\n\t  \t<div [hidden]=\"username.valid || (username.pristine && !f.submitted)\" class=\"text-danger\">\n\t      username shouldn't be empty\n\t  \t</div>\n\t  \t<div>\n\t    \t<input type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n\t  \t</div>\n\t  \t<div [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n\t      password shouldn't be empty\n\t  \t</div>\n\t  \t<div class=\"submit\">\n\t\t  \t<button type=\"submit\" value=\"login\" [disabled]=\"!f.valid\">Login</button>\n\t  \t</div>\n\t</form>\n\t<div class=\"hint\">Hint: Enter username & password as <strong style=\"color: yellow\">node</strong></div>\n\t<!-- <div class=\"greeting\">Hello {{user.username}}</div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router) {
        this._router = _router;
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this._router.navigate(['home']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.userListAlert {\r\n\theight: 70px;\r\n}\r\n*/\r\n.list-container {\r\n\twidth: 75%;\r\n\tmargin: auto;\r\n\tpadding: 10px 45px;\r\n\tbox-shadow: 0px -1px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n.text-danger {\r\n\tposition: absolute;\r\n\ttop: 34px;\r\n}\r\n.col-md-offset-2 {\r\n\theight: 50px;\r\n}\r\n[hidden] {\r\n\tdisplay: none !important;\r\n}\r\n.uploadForm {\r\n\tmargin-left: 40%;\r\n\tmargin-top: 80px;\r\n}\r\n.fileUpload {\r\n\tfloat: left;\r\n\tmargin: 0 20px;\r\n}\r\n.uploadLable {\r\n\tfloat: left;\r\n\tmargin-top: 7px;\r\n}\r\nmat-form-field {\r\n\twidth: 100%;\r\n}\r\n.strSubmit {\r\n\tmargin-left: 38%;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">HomePage</a>\n      </div>\n    </div>\n  </nav>\n  <div class=\"list-container\">\n    <div class=\"page-header\">\n      <h1>Form to upload files</h1>\n    </div>\n    <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"submit()\" enctype=\"multipart/form-data\">\n      <div class=\"container\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-md-10\">\n                <label class=\"uploadLable\"> Upload Files: </label>\n                <div class=\"form-group fileUpload\"> \n                    <label class=\"btn btn-primary\">\n                    <span>Browse <i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i></span>\n                      <input type=\"file\" id=\"fileUpload\" (change)=\"onFileChange($event)\" hidden> \n                </label>\n                </div>\n              </div>\n            </div> \n          </div>\n        </div>\n        <div class=\"submit-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-md-8\"></div>\n            <div class=\"col-md-4\">\n              <button mat-raised-button color=\"primary\">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <hr/>\n    <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"sendStr()\">\n      <div class=\"container\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <mat-form-field class=\"example-full-width\">\n                  <input \n                    name=\"inputStr\"\n                    matInput\n                    placeholder=\"enter any string\"\n                    (keypress)=\"charOnlyInputField($event)\"\n                    [(ngModel)]=\"inputString\"\n                    required\n                  >\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-6\">\n                <button class=\"strSubmit\" mat-raised-button color=\"primary\">Submit</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <hr/>\n    <form class=\"form-horizontal\" #f=\"ngForm\" novalidate (ngSubmit)=\"sendDataUrl()\">\n      <div class=\"container\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <mat-form-field class=\"example-full-width\">\n                  <input \n                    name=\"inputStr\"\n                    matInput\n                    placeholder=\"enter number 1\"\n                    (keypress)=\"numOnlyInputField($event)\"\n                    [(ngModel)]=\"inputNbr1\"\n                    required\n                  >\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3\">\n                <mat-form-field class=\"example-full-width\">\n                  <input \n                    name=\"inputStr\"\n                    matInput\n                    placeholder=\"enter number 2\"\n                    (keypress)=\"numOnlyInputField($event)\"\n                    [(ngModel)]=\"inputNbr2\"\n                    required\n                  >\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-6\">\n                <button class=\"strSubmit\" mat-raised-button color=\"primary\">Find Product</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.charOnlyInputField = function (event) {
        var pattern = /[a-zA-Z]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    HomeComponent.prototype.numOnlyInputField = function (event) {
        var pattern = /[0-9\s]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    HomeComponent.prototype.submit = function () {
        this.homeService.saveFile(this.file)
            .subscribe(function (res) {
            console.log('file upload response');
            alert('file uploaded successfully');
        });
    };
    HomeComponent.prototype.onFileChange = function (event) {
        console.log(event.target.files[0]);
        this.file = event.target.files;
    };
    HomeComponent.prototype.sendStr = function () {
        this.homeService.sendStr(this.inputString)
            .subscribe(function (res) {
            alert("First non-repeatng char: " + res['result']);
        });
    };
    HomeComponent.prototype.sendDataUrl = function () {
        var nbrs = {
            nbr1: this.inputNbr1,
            nbr2: this.inputNbr2
        };
        this.homeService.sendDataUrl(nbrs)
            .subscribe(function (res) {
            alert("successfull read the params: " + res['result']);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.serverApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverEndpoint;
    }
    HomeService.prototype.saveFile = function (fileList) {
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('fileUpload', file, file.name);
            console.log(formData);
            return this.http.post(this.serverApiUrl + "/saveFile", (formData));
        }
    };
    HomeService.prototype.sendStr = function (inputString) {
        return this.http.post(this.serverApiUrl + "/strNonOccr", { inputStr: inputString });
    };
    HomeService.prototype.sendDataUrl = function (paramsData) {
        return this.http.get(this.serverApiUrl + "/" + paramsData.nbr1 + "/paramsApi/" + paramsData.nbr2);
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverEndpoint: 'http://localhost:3001/api'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nodejs_case_study\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map