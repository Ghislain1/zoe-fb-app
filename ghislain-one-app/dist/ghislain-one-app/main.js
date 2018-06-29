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

/***/ "./src/app/albums/albumDisplay.html":
/*!******************************************!*\
  !*** ./src/app/albums/albumDisplay.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\" >\r\n\r\n\t<div class=\"btn-group\" style=\"margin-bottom: 10px;\">\r\n\t  <a routerLink=\"/albums\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-list\"></i> Albums</a>\r\n\t  <a [routerLink]=\"['/album/edit',album.Id]\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-edit\"></i> Edit</a>\r\n\t  <a [href]=\"album.AmazonUrl\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-dollar\"></i> Buy</a>\r\n  \r\n\t  <a [href]=\"album.SpotifyUrl\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-volume-up\"></i> Listen</a>\r\n\t  <button (click)=\"deleteAlbum(album)\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-remove\"></i> Delete</button>\r\n\t</div>\r\n  \r\n\t<div class=\"separator\"></div>\r\n  \r\n\t<error-display [error]=\"error\"></error-display>\r\n  \r\n\t<div class=\"row\" [@slideIn]=\"'in'\">\r\n\t  <div class=\"col-sm-3\">\r\n\t\t<img [src]=\"album.ImageUrl\" *ngIf=\"album.ImageUrl\" class=\"album-image-big\" />\r\n\t  </div>\r\n\t  <div class=\"col-sm-9\">\r\n\t\t<h2 class=\"album-title-big\">\r\n\t\t  {{album.Title}}\r\n\t\t</h2>\r\n  \r\n\t\t<div class=\"album-artist\">\r\n  \r\n\t\t  by <a [routerLink]=\"['/artist',album.ArtistId]\">{{album.Artist.ArtistName}}</a>\r\n\t\t  {{(album.Year ? 'in ' + album.Year : '')}}\r\n\t\t</div>\r\n\t\t<div [innerHTML]=\"album.Description\" class=\"line-breaks\"></div>\r\n  \r\n\t\t<div style=\"margin: 10px 0\" class=\"pull-right\">\r\n\t\t  &nbsp;\r\n\t\t  <a *ngIf=\"album.AmazonUrl\" [href]=\"album.AmazonUrl\" class=\"btn btn-link btn-sm\" target=\"_amazon\"><i class=\"fa fa-dollar\"></i> Buy</a> &nbsp;&nbsp;\r\n\t\t  <a *ngIf=\"album.SpotifyUrl\" [href]=\"album.SpotifyUrl\" class=\"btn btn-link btn-sm\" target=\"_spotify\"><i class=\"fa fa-volume-up\"></i> Play</a>\r\n\t\t</div>\r\n  \r\n  \r\n\t\t<album-songlist [tracks]=\"album.Tracks\"></album-songlist>\r\n  \r\n\t\t<!--<table class=\" table table-striped small\">-->\r\n\t\t  <!--<tr *ngFor=\"let song of album.Tracks\">-->\r\n\t\t\t<!--<td>{{song.SongName}}</td>-->\r\n\t\t\t<!--<td>{{song.Length}}</td>-->\r\n\t\t  <!--</tr>-->\r\n\t\t<!--</table>-->\r\n  \r\n\t\t<hr />\r\n\t\tMore from\r\n\t\t<a [routerLink]=\"['/artist',album.ArtistId]\">\r\n\t\t  {{album.Artist.ArtistName}}<br />\r\n\t\t  <img *ngIf=\"album.Artist.ImageUrl\" [src]=\"album.Artist.ImageUrl\"\r\n\t\t\t   style=\"height: 100px; border-radius: 5px;box-shadow: 2px 2px 3px #535353\" />\r\n\t\t</a>\r\n\t  </div>\r\n\t</div>\r\n  </div>\r\n "

/***/ }),

/***/ "./src/app/albums/albumDisplay.ts":
/*!****************************************!*\
  !*** ./src/app/albums/albumDisplay.ts ***!
  \****************************************/
/*! exports provided: AlbumDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDisplay", function() { return AlbumDisplay; });
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albumService */ "./src/app/albums/albumService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_album__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../business/album */ "./src/app/business/album.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import {Component, OnInit, Input, style, animate, state, transition, trigger, OnDestroy} from '@angular/core';







var AlbumDisplay = /** @class */ (function () {
    function AlbumDisplay(route, router, config, albumService) {
        this.route = route;
        this.router = router;
        this.config = config;
        this.albumService = albumService;
        this.album = new _business_album__WEBPACK_IMPORTED_MODULE_6__["Album"]();
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]();
        this.aniFrame = 'in';
    }
    AlbumDisplay.prototype.ngOnInit = function () {
        var _this = this;
        this.config.isSearchAllowed = false;
        this.config.activeTab = "albums";
        this.aniFrame = 'in';
        //console.log("AlbumDisplay");
        if (!this.album.Title) {
            var id = this.route.snapshot.params["id"];
            if (id < 1)
                return;
            this.albumService.getAlbum(id)
                .subscribe(function (result) {
                _this.album = result;
            }, function (err) { return _this.error.error(err); });
        }
    };
    AlbumDisplay.prototype.ngOnDestroy = function () {
        this.aniFrame = 'out';
        console.log("ngDestroy");
    };
    AlbumDisplay.prototype.deleteAlbum = function (album) {
        var _this = this;
        this.albumService.deleteAlbum(album)
            .subscribe(function (result) {
            _this.error.info("Album '" + album.Title + "' has been deleted.");
            setTimeout(function () { return _this.router.navigate(["/albums"]); }, 1500);
        }, function (err) { return _this.error.error(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        __metadata("design:type", _business_album__WEBPACK_IMPORTED_MODULE_6__["Album"])
    ], AlbumDisplay.prototype, "album", void 0);
    AlbumDisplay = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'album-display',
            template: __webpack_require__(/*! ./albumDisplay.html */ "./src/app/albums/albumDisplay.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_4__["slideIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _albumService__WEBPACK_IMPORTED_MODULE_0__["AlbumService"]])
    ], AlbumDisplay);
    return AlbumDisplay;
}());



/***/ }),

/***/ "./src/app/albums/albumEditor.html":
/*!*****************************************!*\
  !*** ./src/app/albums/albumEditor.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  >\r\n\r\n\t<div *ngIf=\"album.Id !== 0\" class=\"btn-group\" style=\"margin-bottom: 10px;\">\r\n\t  <a routerLink=\"/albums\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-list\"></i> List</a>\r\n\t  <a [routerLink]=\"['/album',album.Id]\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-eye\"></i> View</a>\r\n\t  <a [href]=\"album.AmazonUrl\" class=\"btn btn-sm btn-default\"><i class=\"fa fa-dollar\"></i> Buy</a>\r\n\t</div>\r\n  \r\n\t<div class=\"separator\"></div>\r\n  \r\n\t<error-display [error]=\"error\"></error-display>\r\n  \r\n\t<div class=\"row\"  [ngClass]=\"{ 'hidden': !loaded}\" [@slideIn]=\"'in'\">\r\n  \r\n\t  <div class=\"col-sm-5\">\r\n\t\t<form name=\"form1\" action=\"javascript:{}\" #form1=\"ngForm\" novalidate>\r\n\t\t  <div class=\"form-group\">\r\n\t\t\t<label for=\"AlbumName\">Album Name:</label>\r\n\t\t\t<input id=\"AlbumName\" type=\"text\" class=\"form-control input-sm\"\r\n\t\t\t\t   placeholder=\"Album Name\"\r\n\t\t\t\t   name=\"Title\" required\r\n\t\t\t\t   [(ngModel)]=\"album.Title\" autofocus />\r\n  \r\n\t\t  </div>\r\n\t\t  <div class=\"form-group\">\r\n\t\t\t<label for=\"BandName\">Band Name:</label>\r\n\t\t\t<input type=\"text\" class=\"form-control input-sm typeahead\" id=\"BandName\"\r\n\t\t\t\t   required\r\n\t\t\t\t   autocomplete=\"off\"\r\n\t\t\t\t   data-provide=\"typeahead\"\r\n\t\t\t\t   placeholder=\"Band Name\"\r\n\t\t\t\t   name=\"ArtistName\"\r\n\t\t\t\t   [(ngModel)]=\"album.Artist.ArtistName\" />\r\n  \r\n  \r\n\t\t  </div>\r\n\t\t  <div class=\"form-group\">\r\n\t\t\t<label for=\"Description\">Album Description:</label>\r\n\t\t\t<textarea class=\"form-control input-sm\" id=\"Description\"\r\n\t\t\t\t\t  placeholder=\"Album description or review\"\r\n\t\t\t\t\t  required\r\n\t\t\t\t\t  [(ngModel)]=\"album.Description\"\r\n\t\t\t\t\t  name=\"Description\"\r\n\t\t\t\t\t  style=\"height: 115px\"></textarea>\r\n  \r\n\t\t  </div>\r\n  \r\n\t\t  <div class=\"form-group\">\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t  <span class=\"input-group-addon\" title=\"Image Url\"><i class=\"fa fa-image fa-fw\"></i></span>\r\n\t\t\t  <input type=\"text\" class=\"form-control input-sm\" id=\"ImageUrl\"\r\n\t\t\t\t\t required\r\n\t\t\t\t\t name=\"ImageUrl\"\r\n\t\t\t\t\t placeholder=\"Image Url\" [(ngModel)]=\"album.ImageUrl\" />\r\n  \r\n\t\t\t</div>\r\n\t\t  </div>\r\n  \r\n\t\t  <div class=\"form-group\">\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t  <span class=\"input-group-addon\" title=\"Url where to buy\"><i class=\"fa fa-dollar fa-fw\"></i></span>\r\n\t\t\t  <input type=\"text\" class=\"form-control input-sm\" id=\"AmazonUrl\"\r\n\t\t\t\t\t placeholder=\"Purchase Url\"\r\n\t\t\t\t\t name=\"AmazonUrl\"\r\n\t\t\t\t\t [(ngModel)]=\"album.AmazonUrl\"/>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n  \r\n\t\t  <div class=\"form-group\">\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t  <span class=\"input-group-addon\" title=\"Url where to buy\"><i class=\"fa fa-spotify fa-fw\"></i></span>\r\n\t\t\t  <input type=\"text\" class=\"form-control input-sm\" id=\"SpotifyUrl\"\r\n\t\t\t\t\t placeholder=\"Listen Url\"\r\n\t\t\t\t\t name=\"SpotifyUrl\"\r\n\t\t\t\t\t [(ngModel)]=\"album.SpotifyUrl\" />\r\n\t\t\t</div>\r\n\t\t  </div>\r\n  \r\n\t\t  <div class=\"form-group\">\r\n\t\t\t<label for=\"YearReleased\">Year released:</label>\r\n\t\t\t<input type=\"number\" class=\"form-control input-sm\" id=\"YearReleased\"\r\n\t\t\t\t   required\r\n\t\t\t\t   name=\"Year\"\r\n\t\t\t\t   placeholder=\"Year of album release\"\r\n\t\t\t\t   [(ngModel)]=\"album.Year\"/>\r\n\t\t  </div>\r\n  \r\n\t\t  <hr/>\r\n  \r\n\t\t  <album-songlist [tracks]=\"album.Tracks\" [allowEditing]=\"true\"></album-songlist>\r\n  \r\n\t\t  <div class=\"well well-sm\">\r\n\t\t\t<button type=\"submit\" (click)=\"saveAlbum(album)\"\r\n\t\t\t\t\tclass=\"btn btn-success\"\r\n\t\t\t\t\t[disabled]=\"form1.invalid\" accesskey=\"S\">\r\n\t\t\t  <i class=\"fa fa-check\"></i> Save\r\n\t\t\t</button>\r\n\t\t\t<a [routerLink]=\"['/album',album.Id]\" class=\"btn btn-default\">\r\n\t\t\t  <i class=\"fa fa-remove\"></i> Cancel\r\n\t\t\t</a>\r\n\t\t  </div>\r\n  \r\n\t\t  <div class=\"separator\"></div>\r\n  \r\n\t\t</form>\r\n\t  </div>\r\n  \r\n\t  <div class=\"col-sm-7\">\r\n\t\t<h3>Preview</h3>\r\n\t\t<img [src]=\"album.ImageUrl\" onerror=\"this.src=''\" class=\"album-image-big\"/>\r\n\t\t<div style=\"margin-top: 10px;\">\r\n\t\t  <h2 class=\"album-title-big\">{{album.Title}}</h2>\r\n\t\t  <div class=\"album-artist\">by {{album.Artist.ArtistName}} {{(album.Year ? 'in ' + album.Year : '')}}\r\n\t\t\t- <a [href]=\"album.AmazonUrl\" *ngIf=\"album.AmazonUrl\"><i class=\"fa fa-dollar\"></i> Buy on Amazon</a>\r\n\t\t  </div>\r\n\t\t  <div class=\"album-descript line-breaks\" [innerHTML]=\"album.Description\"></div>\r\n  \r\n\t\t  <hr/>\r\n  \r\n\t\t  <album-songlist [tracks]=\"album.Tracks\"></album-songlist>\r\n  \r\n\t\t</div>\r\n\t  </div>\r\n  \r\n  \r\n\t</div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/albums/albumEditor.ts":
/*!***************************************!*\
  !*** ./src/app/albums/albumEditor.ts ***!
  \***************************************/
/*! exports provided: AlbumEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumEditor", function() { return AlbumEditor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albumService */ "./src/app/albums/albumService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _business_album__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../business/album */ "./src/app/business/album.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlbumEditor = /** @class */ (function () {
    function AlbumEditor(route, router, albumService, config, user) {
        this.route = route;
        this.router = router;
        this.albumService = albumService;
        this.config = config;
        this.user = user;
        this.album = new _business_album__WEBPACK_IMPORTED_MODULE_6__["Album"]();
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]();
        this.loaded = false;
        this.aniFrame = 'in';
    }
    AlbumEditor.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.user.isAuthenticated) {
            this.router.navigate(['/login']);
            return;
        }
        this.config.isSearchAllowed = false;
        this.bandTypeAhead();
        var id = this.route.snapshot.params["id"];
        if (id < 1) {
            this.loaded = true;
            this.album = this.albumService.newAlbum();
            return;
        }
        this.albumService.getAlbum(id)
            .subscribe(function (result) {
            _this.album = result;
            _this.loaded = true;
        }, function (err) {
            _this.error.error(err);
        });
    };
    AlbumEditor.prototype.saveAlbum = function (album) {
        var _this = this;
        return this.albumService.saveAlbum(album)
            .subscribe(function (album) {
            var msg = album.Title + " has been saved.";
            _this.error.info(msg);
            toastr.success(msg);
            window.document.getElementById("MainView").scrollTop = 0;
            setTimeout(function () {
                this.router.navigate(["/album", album.Id]);
            }, 1500);
        }, function (err) {
            var msg = "Unable to save album: " + err.message;
            _this.error.error(msg);
            toastr.error(msg);
            if (err.response && err.response.status == 401) {
                _this.user.isAuthenticated = false;
                _this.router.navigate(["login"]);
            }
        });
    };
    ;
    AlbumEditor.prototype.bandTypeAhead = function () {
        var $input = $("#BandName");
        var config = this.config;
        // delay slightly to ensure that the
        // typeahead component is loaded when
        // doing a full browser refresh
        setTimeout(function () {
            $input.typeahead({
                source: [],
                autoselect: true,
                minLength: 0
            });
            $input.keyup(function () {
                var s = $(this).val();
                var url = config.urls.url("artistLookup") + s;
                $.getJSON(url, function (data) {
                    $input.data('typeahead').source = data;
                });
            });
        }, 1000);
    };
    AlbumEditor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'album-editor',
            template: __webpack_require__(/*! ./albumEditor.html */ "./src/app/albums/albumEditor.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_7__["slideIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _albumService__WEBPACK_IMPORTED_MODULE_1__["AlbumService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_4__["AppConfiguration"],
            _business_userInfo__WEBPACK_IMPORTED_MODULE_5__["UserInfo"]])
    ], AlbumEditor);
    return AlbumEditor;
}());



/***/ }),

/***/ "./src/app/albums/albumList.html":
/*!***************************************!*\
  !*** ./src/app/albums/albumList.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid slide-animation\" [@slideIn]=\"'in'\">\r\n\r\n    <error-display [error]=\"error\"></error-display>\r\n\r\n    <a routerLink=\"/album/edit/0\" class=\"btn btn-sm btn-success pull-right\" (sclick)=\"addAlbum()\"><i class=\"fa fa-plus\"></i> Add Album</a>\r\n    <div class=\"page-header-text\">\r\n        <i class=\"fa fa-list\">\r\n        </i> Albums <span class=\"badge\">{{filteredAlbumList.length}}</span>\r\n    </div>\r\n\r\n    <div class=\"container\" *ngIf=\"busy\">\r\n        <i class=\"fa fa-circle-o-notch fa-spin fa-5x\"\r\n           style=\"display: block; text-align: center; margin-top: 70px;\"></i>\r\n    </div>\r\n\r\n\r\n    <a class=\"album\" role=\"button\" style=\"text-decoration: none; color: inherit\"\r\n         *ngFor=\"let album of filteredAlbumList\"\r\n         (click)=\"albumClick(album)\" >\r\n\r\n        <div class=\"album-overlay\">\r\n            <a routerLink=\"['/album/edit',{{album.Id}}]\">\r\n              <i class=\"fa fa-edit\" title=\"Edit\"></i>\r\n            </a>\r\n            &nbsp;\r\n            <a (click)=\"deleteAlbum(album)\">\r\n              <i class=\"fa fa-remove\" title=\"Delete\"></i>\r\n            </a>\r\n        </div>\r\n\r\n        <div>\r\n            <img [src]=\"album.ImageUrl\" class=\"album-image\" />\r\n            <div style=\"padding-left: 80px;\">\r\n                <div class=\"album-title\">{{album.Title}}</div>\r\n                <div class=\"album-artist\">by <b>{{album.Artist.ArtistName}}</b> {{(album.Year ? 'in ' + album.Year : '')}}</div>\r\n                <div class=\"album-descript\">{{album.Description}}</div>\r\n            </div>\r\n        </div>\r\n    </a>\r\n</div>\r\n\r\n "

/***/ }),

/***/ "./src/app/albums/albumList.ts":
/*!*************************************!*\
  !*** ./src/app/albums/albumList.ts ***!
  \*************************************/
/*! exports provided: AlbumList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumList", function() { return AlbumList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albumService */ "./src/app/albums/albumService.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumList = /** @class */ (function () {
    function AlbumList(router, albumService, config) {
        this.router = router;
        this.albumService = albumService;
        this.config = config;
        this.albumList = [];
        this.busy = true;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]();
    }
    AlbumList.prototype.ngOnInit = function () {
        this.getAlbums();
        this.config.isSearchAllowed = true;
        this.config.activeTab = "albums";
        this.config.searchText = "";
        // ??? Non-DOM way to do this?
        setTimeout(function () {
            $("#SearchBox").focus();
        }, 200);
    };
    Object.defineProperty(AlbumList.prototype, "filteredAlbumList", {
        get: function () {
            if (this.config.searchText && this.config.searchText.length > 1) {
                var lsearchText = this.config.searchText.toLowerCase();
                return this.albumList.filter(function (a) {
                    return a.Title.toLowerCase().includes(lsearchText) ||
                        a.Artist.ArtistName.toLowerCase().includes(lsearchText);
                });
            }
            return this.albumList;
        },
        enumerable: true,
        configurable: true
    });
    AlbumList.prototype.getAlbums = function () {
        var _this = this;
        this.busy = true;
        this.albumList = [];
        this.albumService.getAlbums()
            .subscribe(function (albums) {
            _this.albumList = albums;
            _this.busy = false;
            // reset scroll position of the list
            setTimeout(function () { return $("#MainView").scrollTop(_this.albumService.listScrollPos); }, 100);
        }, function (err) {
            if (!err.message)
                _this.error.error("Unable to load albums right now. Most likely the server is not responding.");
            else
                _this.error.error(err);
            _this.busy = false;
        });
    };
    AlbumList.prototype.albumClick = function (album) {
        this.albumService.listScrollPos = $("#MainView").scrollTop();
        this.router.navigate(['/album', album.Id]);
    };
    AlbumList.prototype.addAlbum = function () {
    };
    AlbumList.prototype.deleteAlbum = function (album) {
    };
    AlbumList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'album-list',
            template: __webpack_require__(/*! ./albumList.html */ "./src/app/albums/albumList.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_5__["slideIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _albumService__WEBPACK_IMPORTED_MODULE_1__["AlbumService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"]])
    ], AlbumList);
    return AlbumList;
}());



/***/ }),

/***/ "./src/app/albums/albumService.ts":
/*!****************************************!*\
  !*** ./src/app/albums/albumService.ts ***!
  \****************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _business_album__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/album */ "./src/app/business/album.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumService = /** @class */ (function () {
    function AlbumService(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.albumList = [];
        this.album = new _business_album__WEBPACK_IMPORTED_MODULE_5__["Album"]();
        //artistList: Artist[] = [];
        this.listScrollPos = 0;
    }
    AlbumService.prototype.getAlbums = function () {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("albums"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (albumList) { return _this.albumList = albumList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.getAlbum = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("album", id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (album) {
            _this.album = album;
            if (!_this.albumList || _this.albumList.length < 1)
                _this.getAlbums(); // load up albums in background
            return _this.album;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.newAlbum = function () {
        this.album = new _business_album__WEBPACK_IMPORTED_MODULE_5__["Album"]();
        return this.album;
    };
    AlbumService.prototype.saveAlbum = function (album) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url("album"), album, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (album) {
            _this.album = album;
            // explicitly update the list with the updated data
            _this.updateAlbum(_this.album);
            return _this.album;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parseObservableResponseError));
    };
    AlbumService.prototype.deleteAlbum = function (album) {
        var _this = this;
        return this.httpClient.delete(this.config.urls.url("album", album.Id), this.config.requestHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            if (result)
                _this.removeAlbum(album); // client side remove
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_3__["ErrorInfo"]().parsePromiseResponseError));
    };
    /**
     * Updates the .albumList property by updating the actual
     * index entry in the existing list, adding new entries and
     * removing 0 entries.
     * @param album  - the album to update
     */
    AlbumService.prototype.updateAlbum = function (album) {
        var i = this.albumList.findIndex(function (a) { return (a.Id == album.Id); });
        if (i > -1)
            this.albumList[i] = album;
        else {
            this.albumList.push(album);
            this.albumList.sort(function (a, b) {
                var aTitle = a.Title.toLocaleLowerCase();
                var bTitle = b.Title.toLocaleLowerCase();
                if (aTitle > bTitle)
                    return 1;
                if (aTitle < bTitle)
                    return -1;
                return 0;
            });
        }
        this.albumList = this.albumList.filter(function (a) { return a.Id != 0; });
    };
    AlbumService.prototype.removeAlbum = function (album) {
        this.albumList = this.albumList.filter(function (a) { return a.Id != album.Id; });
    };
    AlbumService.prototype.addSong = function (track) {
        this.album.Tracks.push(track);
    };
    AlbumService.prototype.removeSong = function (track) {
        var idx = this.album.Tracks.findIndex(function (t) { return track.Id == t.Id; });
        if (idx > -1)
            this.album.Tracks.splice(idx, 1);
    };
    AlbumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "./src/app/albums/albumSongList.html":
/*!*******************************************!*\
  !*** ./src/app/albums/albumSongList.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allowEditing\">\r\n\t<button (click)=\"addTrack(track)\" accesskey=\"a\"\r\n\t\t\t*ngIf=\"!isSongVisible\" title=\"Add Song (alt-a)\"\r\n\t\t\tclass=\"btn btn-info btn-xs\" style=\"margin-bottom: 10px;\">\r\n\t  <i class=\"fa fa-plus-circle\"></i> Add Song\r\n\t</button>\r\n  \r\n\t<div *ngIf=\"isSongVisible\" class=\"well well-sm\">\r\n  \r\n\t  <div class=\"row\">\r\n\t\t<div class=\" col-sm-9\">\r\n\t\t  <input class=\"form-control input-sm\" id=\"songSongName\"\r\n\t\t\t\t placeholder=\"Name of the song\"\r\n\t\t\t\t name=\"songSongName\"\r\n\t\t\t\t [(ngModel)]=\"track.SongName\"/>\r\n  \r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t  <input class=\"form-control input-sm\" id=\"Length\"\r\n\t\t\t\t name=\"Length\"\r\n\t\t\t\t [(ngModel)]=\"track.Length\"\r\n\t\t\t\t placeholder=\"0:00\"/>\r\n\t\t</div>\r\n\t  </div>\r\n  \r\n\t  <button class=\"btn btn-success btn-xs\"\r\n\t\t\t  (click)=\"saveTrack(track)\"\r\n\t\t\t  [disabled]=\"!track.SongName\"\r\n\t\t\t  style=\"margin-top: 8px;\" accesskey=\"\">\r\n\t\t<i class=\"fa fa-plus-circle\"></i> Save Track\r\n\t  </button>\r\n\t  <button class=\"btn btn-default btn-xs\"\r\n\t\t\t  (click)=\"cancelTrack()\"\r\n\t\t\t  style=\"margin-top: 8px;\">\r\n\t\t<i class=\"fa fa-times\"></i> Cancel\r\n\t  </button>\r\n\t</div>\r\n  </div>\r\n  \r\n  <table class=\" table table-striped small\">\r\n\t<tr *ngFor=\"let track of tracks\">\r\n\t  <td>{{track.SongName}}</td>\r\n\t  <td>{{track.Length}}</td>\r\n\t  <td>\r\n\t\t<button *ngIf=\"allowEditing\" (click)=\"removeTrack(track)\"\r\n\t\t\t\tclass=\"btn btn-xs btn-danger\">\r\n\t\t  <i class=\"fa fa-remove\"></i> Remove\r\n\t\t</button>\r\n\t  </td>\r\n\t</tr>\r\n  </table>\r\n "

/***/ }),

/***/ "./src/app/albums/albumSongList.ts":
/*!*****************************************!*\
  !*** ./src/app/albums/albumSongList.ts ***!
  \*****************************************/
/*! exports provided: AlbumSongList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumSongList", function() { return AlbumSongList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _albumService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albumService */ "./src/app/albums/albumService.ts");
/* harmony import */ var _business_Track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/Track */ "./src/app/business/Track.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumSongList = /** @class */ (function () {
    function AlbumSongList(albumService) {
        this.albumService = albumService;
        this.tracks = [];
        this.allowEditing = false;
        this.isSongVisible = false;
        this.track = new _business_Track__WEBPACK_IMPORTED_MODULE_2__["Track"]();
    }
    AlbumSongList.prototype.ngOnInit = function () {
    };
    AlbumSongList.prototype.addTrack = function (track) {
        this.track = new _business_Track__WEBPACK_IMPORTED_MODULE_2__["Track"]();
        this.isSongVisible = true;
    };
    AlbumSongList.prototype.cancelTrack = function () {
        this.track = new _business_Track__WEBPACK_IMPORTED_MODULE_2__["Track"]();
        this.isSongVisible = false;
    };
    AlbumSongList.prototype.saveTrack = function (track) {
        this.albumService.addSong(track);
        this.isSongVisible = false;
    };
    AlbumSongList.prototype.removeTrack = function (track) {
        this.albumService.removeSong(track);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlbumSongList.prototype, "tracks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlbumSongList.prototype, "allowEditing", void 0);
    AlbumSongList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'album-songlist',
            template: __webpack_require__(/*! ./albumSongList.html */ "./src/app/albums/albumSongList.html")
        }),
        __metadata("design:paramtypes", [_albumService__WEBPACK_IMPORTED_MODULE_1__["AlbumService"]])
    ], AlbumSongList);
    return AlbumSongList;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums/albumDisplay */ "./src/app/albums/albumDisplay.ts");
/* harmony import */ var _albums_albumEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums/albumEditor */ "./src/app/albums/albumEditor.ts");
/* harmony import */ var _artists_artistList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artists/artistList */ "./src/app/artists/artistList.ts");
/* harmony import */ var _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artists/artistDisplay */ "./src/app/artists/artistDisplay.ts");
/* harmony import */ var _common_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/login */ "./src/app/common/login.ts");
/* harmony import */ var _albums_albumList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./albums/albumList */ "./src/app/albums/albumList.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'albums', pathMatch: 'full' },
    { path: 'albums', component: _albums_albumList__WEBPACK_IMPORTED_MODULE_7__["AlbumList"] },
    { path: 'album/:id', component: _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_2__["AlbumDisplay"] },
    { path: 'album/edit/:id', component: _albums_albumEditor__WEBPACK_IMPORTED_MODULE_3__["AlbumEditor"] },
    { path: 'artists', component: _artists_artistList__WEBPACK_IMPORTED_MODULE_4__["ArtistList"] },
    { path: 'artist/:id', component: _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_5__["ArtistDisplay"] },
    //	{path: 'options', component: OptionsComponent },
    { path: 'login', component: _common_login__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'logout', component: _common_login__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<app-header></app-header>\r\n\r\n<div style=\"margin-top: 72px; padding: 1px;\">\r\n\r\n        <div id=\"MainView\" >\r\n            <router-outlet autoscroll=\"true\"></router-outlet>\r\n        </div>\r\n        <app-footer></app-footer>\r\n\r\n</div>\r\n\r\n<body>\r\n</body>\r\n\r\n<footer>\r\n  <hr/>\r\n  &copy West Wind Technologies\r\n</footer>\r\n"

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
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business/userInfo */ "./src/app/business/userInfo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(user) {
        var _this = this;
        this.user = user;
        this.title = 'Test Application';
        // check authentication when the page is loaded
        // fire and forget - service updates the auth
        // status model
        this.user.checkAuthentication()
            .subscribe();
        // re-check infrequently - once every 2 minutes
        setInterval(function () {
            var previousStatus = user.isAuthenticated;
            _this.user.checkAuthentication()
                .subscribe(function (isAuthenticated) {
                if (!isAuthenticated && previousStatus)
                    toastr.warning("Your session has expired. Please log in again.");
            });
        }, 120000);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_business_userInfo__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_appFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/appFooter */ "./src/app/common/appFooter.ts");
/* harmony import */ var _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./albums/albumDisplay */ "./src/app/albums/albumDisplay.ts");
/* harmony import */ var _albums_albumEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./albums/albumEditor */ "./src/app/albums/albumEditor.ts");
/* harmony import */ var _artists_artistList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./artists/artistList */ "./src/app/artists/artistList.ts");
/* harmony import */ var _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./artists/artistDisplay */ "./src/app/artists/artistDisplay.ts");
/* harmony import */ var _albums_albumService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./albums/albumService */ "./src/app/albums/albumService.ts");
/* harmony import */ var _artists_artistService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./artists/artistService */ "./src/app/artists/artistService.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _albums_albumSongList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./albums/albumSongList */ "./src/app/albums/albumSongList.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _artists_artistEditor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./artists/artistEditor */ "./src/app/artists/artistEditor.ts");
/* harmony import */ var _common_login__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/login */ "./src/app/common/login.ts");
/* harmony import */ var _business_album__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./business/album */ "./src/app/business/album.ts");
/* harmony import */ var _business_artist__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./business/artist */ "./src/app/business/artist.ts");
/* harmony import */ var _business_Track__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./business/Track */ "./src/app/business/Track.ts");
/* harmony import */ var _albums_albumList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./albums/albumList */ "./src/app/albums/albumList.ts");
/* harmony import */ var _common_appHeader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./common/appHeader */ "./src/app/common/appHeader.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // legacy
 // use this
// components





// services





// directives and shared components


//import {OptionsComponent} from "./Options/options";






//import {HttpClient} from "./business/HttpClient";
//import {AboutComponent} from "./options/about";
//declare var $:any;
//declare var toastr:any;
// Enable production mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
            ],
            // components
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _common_appHeader__WEBPACK_IMPORTED_MODULE_25__["AppHeader"],
                _common_appFooter__WEBPACK_IMPORTED_MODULE_8__["AppFooter"],
                //AboutComponent,
                _albums_albumList__WEBPACK_IMPORTED_MODULE_24__["AlbumList"],
                _albums_albumDisplay__WEBPACK_IMPORTED_MODULE_9__["AlbumDisplay"],
                _albums_albumEditor__WEBPACK_IMPORTED_MODULE_10__["AlbumEditor"],
                _albums_albumSongList__WEBPACK_IMPORTED_MODULE_17__["AlbumSongList"],
                _artists_artistList__WEBPACK_IMPORTED_MODULE_11__["ArtistList"],
                _artists_artistDisplay__WEBPACK_IMPORTED_MODULE_12__["ArtistDisplay"],
                _artists_artistEditor__WEBPACK_IMPORTED_MODULE_19__["ArtistEditor"],
                _common_errorDisplay__WEBPACK_IMPORTED_MODULE_18__["ErrorDisplay"],
                _common_login__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            ],
            // services, pipes and providers
            providers: [
                _albums_albumService__WEBPACK_IMPORTED_MODULE_13__["AlbumService"],
                _artists_artistService__WEBPACK_IMPORTED_MODULE_14__["ArtistService"],
                _business_appConfiguration__WEBPACK_IMPORTED_MODULE_15__["AppConfiguration"],
                _business_userInfo__WEBPACK_IMPORTED_MODULE_16__["UserInfo"],
                _common_errorDisplay__WEBPACK_IMPORTED_MODULE_18__["ErrorInfo"],
                _business_album__WEBPACK_IMPORTED_MODULE_21__["Album"],
                _business_artist__WEBPACK_IMPORTED_MODULE_22__["Artist"],
                _business_Track__WEBPACK_IMPORTED_MODULE_23__["Track"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artists/artistDisplay.html":
/*!********************************************!*\
  !*** ./src/app/artists/artistDisplay.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\" [@slideIn]=\"'in'\">\r\n\r\n    <div class=\"btn-group\" style=\"margin-bottom: 10px;\">\r\n      <a routerLink=\"/artists\" class=\"btn btn-sm btn-default\">\r\n        <i class=\"fa fa-list\"></i>\r\n        Artists</a>\r\n      <a (click)=\"editArtist()\"\r\n         class=\"btn btn-sm btn-default\">\r\n        <i class=\"fa fa-edit\"></i>\r\n        Edit\r\n      </a>\r\n  \r\n      <button (click)=\"deleteArtist(artist)\"\r\n              class=\"btn btn-sm btn-default\">\r\n        <i class=\"fa fa-remove\"></i>\r\n        Delete\r\n      </button>\r\n    </div>\r\n  \r\n    <error-display [error]=\"error\"></error-display>\r\n  \r\n  \r\n    <h2>{{artist.ArtistName}}</h2>\r\n  \r\n    <div class=\"separator\"></div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <img [src]=\"artist.ImageUrl\"\r\n             style=\"width: 97%; margin-bottom: 8px; border-radius: 4px; box-shadow: 2px 2px 4px #535353\" />\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"line-breaks\">{{artist.Description }}</div>\r\n  \r\n        <a class=\"small\" *ngIf=\"artist.AmazonUrl\" href=\"{{artist.AmazonUrl}}\">{{artist.ArtistName}} on Amazon</a>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n    <h3>Albums</h3>\r\n    <div class=\"separator\"></div>\r\n  \r\n    <div class=\"album\" *ngFor=\"let album of artist.Albums\" style=\"text-decorataion: none;\"\r\n         (click)=\"albumClick(album)\">\r\n      <div class=\"album-overlay\">\r\n        <a [routerLink]=\"['/album/edit',album.Id]\">\r\n          <i class=\"fa fa-edit\" title=\"Edit\"></i></a> &nbsp;\r\n        <a (click)=\"deleteAlbum(album)\">\r\n          <i class=\"fa fa-remove\" title=\"Delete\"></i></a>\r\n      </div>\r\n  \r\n      <div>\r\n        <img [src]=\"album.ImageUrl\"  class=\"album-image\" *ngIf=\"album.ImageUrl\"  />\r\n        <div style=\"padding-left: 80px;\">\r\n          <div class=\"album-title\">{{album.Title}}</div>\r\n          <div class=\"album-artist\">\r\n            {{(album.Year ? 'in ' + album.Year : '')}}\r\n          </div>\r\n          <div class=\"album-descript\">{{album.Description}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <a class=\"btn btn-sm btn-success\" routerLink=\"/album/edit/0\">\r\n      <i class=\"fa fa-plus\"></i>\r\n      Add Album\r\n    </a>\r\n  \r\n  \r\n  \r\n  </div>\r\n  \r\n  <!-- modal edit dialog -->\r\n  <artist-editor [artist]=\"artist\"></artist-editor>"

/***/ }),

/***/ "./src/app/artists/artistDisplay.ts":
/*!******************************************!*\
  !*** ./src/app/artists/artistDisplay.ts ***!
  \******************************************/
/*! exports provided: ArtistDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistDisplay", function() { return ArtistDisplay; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artistService */ "./src/app/artists/artistService.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _artistEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artistEditor */ "./src/app/artists/artistEditor.ts");
/* harmony import */ var _business_artist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../business/artist */ "./src/app/business/artist.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ArtistDisplay = /** @class */ (function () {
    function ArtistDisplay(route, artistService, config, router, user) {
        this.route = route;
        this.artistService = artistService;
        this.config = config;
        this.router = router;
        this.user = user;
        this.artist = new _business_artist__WEBPACK_IMPORTED_MODULE_7__["Artist"]();
        this.albums = [];
        this.artistId = null;
        this.formActive = true;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorInfo"]();
    }
    ArtistDisplay.prototype.ngOnInit = function () {
        var _this = this;
        this.config.isSearchAllowed = false;
        var id = this.route.snapshot.params["id"];
        if (id < 1)
            return;
        this.artistService.getArtist(id)
            .subscribe(function (result) {
            _this.artist = result.Artist;
            _this.albums = result.Albums;
        }, function (err) {
            _this.error.error(err);
        });
    };
    ArtistDisplay.prototype.editArtist = function () {
        if (!this.user.isAuthenticated) {
            this.router.navigate(["login"]);
            return;
        }
        this.editor.showEditor();
    };
    ;
    ArtistDisplay.prototype.albumClick = function (album) {
        //window.location.hash = "album/" + album.Id;
        this.router.navigate(['/album', album.Id]);
    };
    ArtistDisplay.prototype.addAlbum = function () {
    };
    ArtistDisplay.prototype.deleteArtist = function (artist) {
        var _this = this;
        this.artistService.deleteArtist(artist)
            .subscribe(function (result) {
            _this.error.info("Album deleted.");
            setTimeout(function () {
                _this.router.navigate(["/artists"]);
                _this.artistService.artistList =
                    _this.artistService.artistList.filter(function (art) { return art.Id != artist.Id; });
            }, 1200);
        }, function (err) { console.log(err); _this.error.error(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_artistEditor__WEBPACK_IMPORTED_MODULE_6__["ArtistEditor"]),
        __metadata("design:type", _artistEditor__WEBPACK_IMPORTED_MODULE_6__["ArtistEditor"])
    ], ArtistDisplay.prototype, "editor", void 0);
    ArtistDisplay = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'artist-display',
            template: __webpack_require__(/*! ./artistDisplay.html */ "./src/app/artists/artistDisplay.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_8__["slideIn"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _artistService__WEBPACK_IMPORTED_MODULE_1__["ArtistService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_2__["AppConfiguration"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _business_userInfo__WEBPACK_IMPORTED_MODULE_4__["UserInfo"]])
    ], ArtistDisplay);
    return ArtistDisplay;
}());



/***/ }),

/***/ "./src/app/artists/artistEditor.html":
/*!*******************************************!*\
  !*** ./src/app/artists/artistEditor.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"EditModal\"\r\n     tabindex=\"-1\" role=\"dialog\">\r\n\r\n  <div class=\"modal-dialog\" role=\"document\" >\r\n    <div class=\"modal-content\" >\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n        <h3 class=\"modal-title\" id=\"myModalLabel\">Artist Info</h3>\r\n      </div>\r\n\r\n      <form name=\"form1\"\r\n            action=\"javascript:{}\" novalidate\r\n            #form1=\"ngForm\"  >\r\n\r\n      <div class=\"modal-body\">\r\n         <div class=\"form-group\">\r\n            <label for=\"ArtistName\">Artist Name:</label>\r\n            <input name=\"ArtistName\" id=\"ArtistName\" type=\"text\"\r\n                   class=\"form-control input-sm\"\r\n                   placeholder=\"Artist Name\" required\r\n                   [(ngModel)]=\"artist.ArtistName\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"Description\">Bio:</label>\r\n            <textarea type=\"text\" class=\"form-control input-sm\"\r\n                      name=\"Description\" id=\"Description\"\r\n                      required\r\n                      style=\"height: 80px;\"\r\n                      minlength=\"20\"\r\n                      placeholder=\"Band Bio\" [(ngModel)]=\"artist.Description\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"ImageUrl\">Image Url:</label>\r\n            <input type=\"text\" class=\"form-control input-sm\"\r\n                   id=\"ImageUrl\" name=\"ImageUrl\"\r\n                   placeholder=\"Image Url\" [(ngModel)]=\"artist.ImageUrl\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"AmazonUrl\">Amazon Url:</label>\r\n            <input type=\"text\" class=\"form-control input-sm\"\r\n                   name=\"AmazonUrl\" id=\"AmazonUrl\"\r\n                   placeholder=\"Link to Artist Amazon Page\" [(ngModel)]=\"artist.AmazonUrl\" />\r\n          </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n          <i class=\"fa fa-remove\"></i> Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\"\r\n                [disabled]=\"form1.pristine || form1.invalid\" accesskey=\"S\"\r\n                (click)=\"saveArtist(artist)\">\r\n          <i class=\"fa fa-check\"></i>\r\n          Save changes\r\n        </button>\r\n      </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n "

/***/ }),

/***/ "./src/app/artists/artistEditor.ts":
/*!*****************************************!*\
  !*** ./src/app/artists/artistEditor.ts ***!
  \*****************************************/
/*! exports provided: ArtistEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistEditor", function() { return ArtistEditor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artistService */ "./src/app/artists/artistService.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _business_artist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../business/artist */ "./src/app/business/artist.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;




var ArtistEditor = /** @class */ (function () {
    function ArtistEditor(artistService, config, user) {
        this.artistService = artistService;
        this.config = config;
        this.user = user;
        this.artist = new _business_artist__WEBPACK_IMPORTED_MODULE_5__["Artist"]();
        this.albums = [];
        this.formActive = false;
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]();
        console.log("ArtistEditor ctor");
    }
    ArtistEditor.prototype.ngOnInit = function () {
        this.config.isSearchAllowed = false;
    };
    ArtistEditor.prototype.showEditor = function () {
        $("#EditModal").modal("show");
    };
    ArtistEditor.prototype.saveArtist = function (artist) {
        var _this = this;
        this.artistService.saveArtist(artist)
            .subscribe(function (result) {
            _this.artist = result.Artist;
            _this.albums = result.Albums;
            $("#EditModal").modal("hide");
            _this.formActive = false;
            setTimeout(function () {
                _this.formActive = true;
            }, 0);
            _this.error.info("Artist has been saved");
        }, function (err) {
            _this.error.error(err);
            if (err.response && err.response.status == 401) {
                window.location.hash = "login";
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _business_artist__WEBPACK_IMPORTED_MODULE_5__["Artist"])
    ], ArtistEditor.prototype, "artist", void 0);
    ArtistEditor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'artist-editor',
            template: __webpack_require__(/*! ./artistEditor.html */ "./src/app/artists/artistEditor.html")
        }),
        __metadata("design:paramtypes", [_artistService__WEBPACK_IMPORTED_MODULE_1__["ArtistService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"],
            _business_userInfo__WEBPACK_IMPORTED_MODULE_4__["UserInfo"]])
    ], ArtistEditor);
    return ArtistEditor;
}());



/***/ }),

/***/ "./src/app/artists/artistList.html":
/*!*****************************************!*\
  !*** ./src/app/artists/artistList.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\" [@slideInLeft]=\"'in'\" >\r\n\r\n    <error-display [error]=\"error\"></error-display>\r\n  \r\n    <div class=\"list-group\">\r\n      <a routerLink=\"/artists\" class=\"list-group-item active\">\r\n        <i class=\"fa fa-list\"></i> Artists\r\n        <span class=\"badge\">{{artistList.length}}</span>\r\n      </a>\r\n  \r\n      <a class=\"list-group-item\"\r\n         *ngFor=\"let artist of filteredArtistList\"\r\n         (click)=\"artistClick(artist)\" role=\"button\">\r\n        <i class=\"fa fa-users\" style=\"color: steelblue;\"></i> &nbsp;\r\n        <span class=\"badge\">{{artist.AlbumCount}}</span>\r\n        {{artist.ArtistName}}\r\n      </a>\r\n    </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/artists/artistList.ts":
/*!***************************************!*\
  !*** ./src/app/artists/artistList.ts ***!
  \***************************************/
/*! exports provided: ArtistList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistList", function() { return ArtistList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _artistService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artistService */ "./src/app/artists/artistService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/animations */ "./src/app/common/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistList = /** @class */ (function () {
    function ArtistList(router, artistService, config) {
        this.router = router;
        this.artistService = artistService;
        this.config = config;
        this.artistList = [];
        this.error = new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]();
    }
    ArtistList.prototype.ngOnInit = function () {
        this.getArtists();
        this.config.searchText = "";
        this.config.isSearchAllowed = true;
        this.config.activeTab = "artists";
        setTimeout(function () {
            $("#SearchBox").focus();
        }, 200);
    };
    Object.defineProperty(ArtistList.prototype, "filteredArtistList", {
        get: function () {
            if (this.config.searchText && this.config.searchText.length > 1) {
                var lsearchText = this.config.searchText.toLowerCase();
                return this.artistList.filter(function (a) {
                    return a.ArtistName.toLowerCase().includes(lsearchText);
                });
            }
            return this.artistList;
        },
        enumerable: true,
        configurable: true
    });
    ArtistList.prototype.getArtists = function () {
        var _this = this;
        this.artistService.getArtists()
            .subscribe(function (artists) {
            _this.artistList = artists;
            setTimeout(function () {
                $("#MainView").scrollTop(_this.artistService.listScrollPos);
                _this.artistService.listScrollPos = 0;
            }, 20);
            return _this.artistList;
        }, function (err) {
            if (!err.message)
                _this.error.error("Unable to load artists right now. Most likely the server is not responding.");
            else
                _this.error.error(err);
        });
    };
    ArtistList.prototype.artistClick = function (artist) {
        // Manual Navigation
        this.router.navigate(['/artist', artist.Id]);
        this.artistService.listScrollPos = $("#MainView").scrollTop();
    };
    ArtistList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'artist-list',
            template: __webpack_require__(/*! ./artistList.html */ "./src/app/artists/artistList.html"),
            animations: [_common_animations__WEBPACK_IMPORTED_MODULE_5__["slideInLeft"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _artistService__WEBPACK_IMPORTED_MODULE_2__["ArtistService"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"]])
    ], ArtistList);
    return ArtistList;
}());



/***/ }),

/***/ "./src/app/artists/artistService.ts":
/*!******************************************!*\
  !*** ./src/app/artists/artistService.ts ***!
  \******************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistService = /** @class */ (function () {
    function ArtistService(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.artistList = [];
        this.artist = null;
        this.albums = [];
        this.error = "";
        this.listScrollPos = 0;
        console.log("ArtistService ctor");
    }
    ArtistService.prototype.getArtists = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        // use locally cached version
        if (force !== true && (this.artistList && this.artistList.length > 0))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.artistList);
        return this.httpClient.get(this.config.urls.url("artists"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (artistList) {
            _this.artistList = artistList;
            return _this.artistList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService.prototype.getArtist = function (id) {
        var _this = this;
        return this.httpClient.get(this.config.urls.url("artist", id), this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (artistResult) {
            _this.artist = artistResult.Artist;
            _this.artist.Albums = artistResult.Albums;
            if (!_this.artistList || _this.artistList.length < 1)
                _this.getArtists();
            return artistResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService.prototype.saveArtist = function (artist) {
        var _this = this;
        return this.httpClient.post(this.config.urls.url("saveArtist"), artist, this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (artistResult) {
            _this.artist = artistResult.Artist;
            _this.artist.Albums = artistResult.Albums;
            _this.updateArtist(artistResult.Artist);
            return artistResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorInfo"]().parseObservableResponseError));
    };
    // Update the artistList with an artist
    ArtistService.prototype.updateArtist = function (artist) {
        var idx = this.artistList.findIndex(function (art) { return art.Id == artist.Id; });
        if (idx < 0)
            this.artistList.push(artist);
        else {
            this.artistList[idx] = artist;
        }
    };
    ArtistService.prototype.deleteArtist = function (artist) {
        return this.httpClient.delete(this.config.urls.url("artist", artist.Id), this.config.requestHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_5__["ErrorInfo"]().parseObservableResponseError));
    };
    ArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _business_appConfiguration__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/business/Track.ts":
/*!***********************************!*\
  !*** ./src/app/business/Track.ts ***!
  \***********************************/
/*! exports provided: Track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Track = /** @class */ (function () {
    function Track() {
        this.Id = 0;
        this.AlbumId = 0;
        this.SongName = null;
        this.Length = null;
        this.Bytes = 0;
        this.UnitPrice = 0;
    }
    Track = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Track);
    return Track;
}());



/***/ }),

/***/ "./src/app/business/album.ts":
/*!***********************************!*\
  !*** ./src/app/business/album.ts ***!
  \***********************************/
/*! exports provided: Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artist */ "./src/app/business/artist.ts");

var Album = /** @class */ (function () {
    function Album() {
        this.Id = 0;
        this.ArtistId = 0;
        this.Title = null;
        this.Description = null;
        this.Year = 0;
        this.ImageUrl = null;
        this.AmazonUrl = null;
        this.SpotifyUrl = null;
        this.Artist = new _artist__WEBPACK_IMPORTED_MODULE_0__["Artist"]();
        this.Tracks = [];
    }
    return Album;
}());



/***/ }),

/***/ "./src/app/business/appConfiguration.ts":
/*!**********************************************!*\
  !*** ./src/app/business/appConfiguration.ts ***!
  \**********************************************/
/*! exports provided: AppConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfiguration", function() { return AppConfiguration; });
/* harmony import */ var _applicationStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicationStats */ "./src/app/business/applicationStats.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppConfiguration = /** @class */ (function () {
    function AppConfiguration() {
        var _this = this;
        // top level search text
        this.searchText = "";
        this.activeTab = "albums";
        this.isSearchAllowed = true;
        this.applicationStats = new _applicationStats__WEBPACK_IMPORTED_MODULE_0__["ApplicationStats"]();
        this.urls = {
            baseUrl: "./",
            //baseUrl: "http://localhost/albumviewer/",
            //baseUrl: "http://localhost:5000/",
            //baseUrl: "https://albumviewer2swf.west-wind.com/",
            albums: "api/albums",
            album: "api/album",
            artists: "api/artists",
            artist: "api/artist",
            artistLookup: "api/artistlookup?search=",
            saveArtist: "api/artist",
            login: "api/login",
            logout: "api/logout",
            isAuthenticated: "api/isAuthenticated",
            reloadData: "api/reloadData",
            applicationStats: "api/applicationstats",
            url: function (name, parm1, parm2, parm3) {
                var url = _this.urls.baseUrl + _this.urls[name];
                if (parm1)
                    url += "/" + parm1;
                if (parm2)
                    url += "/" + parm2;
                if (parm3)
                    url += "/" + parm3;
                return url;
            }
        };
        /**
         * Http Request options to for requests
         * @type {RequestOptions}
         */
        this.requestHeaders = { withCredentials: true };
        console.log("AppConfiguration ctor");
        this.setToastrOptions();
        if (location.port && (location.port == "3000") || (location.port == "4200"))
            this.urls.baseUrl = "http://localhost:5000/"; // kestrel
        //this.urls.baseUrl = "http://localhost:26448/"; // iis Express
        //this.urls.baseUrl = "http://localhost/albumviewer/"; // iis          
        //this.urls.baseUrl = "https://albumviewer.west-wind.com/";  // online
    }
    AppConfiguration.prototype.setToastrOptions = function () {
        console.log("-----------> setToastrOptions");
        toastr.options.closeButton = true;
        console.log("-----------> setToastrOptions 2");
        toastr.options.positionClass = "toast-bottom-right";
    };
    AppConfiguration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppConfiguration);
    return AppConfiguration;
}());



/***/ }),

/***/ "./src/app/business/applicationStats.ts":
/*!**********************************************!*\
  !*** ./src/app/business/applicationStats.ts ***!
  \**********************************************/
/*! exports provided: ApplicationStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStats", function() { return ApplicationStats; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicationStats = /** @class */ (function () {
    function ApplicationStats() {
        this.OsPlatform = null;
        this.AngularVersion = "Unknown";
        this.AspDotnetVersion = "Unknown";
    }
    ApplicationStats = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ApplicationStats);
    return ApplicationStats;
}());



/***/ }),

/***/ "./src/app/business/artist.ts":
/*!************************************!*\
  !*** ./src/app/business/artist.ts ***!
  \************************************/
/*! exports provided: Artist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artist", function() { return Artist; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Artist = /** @class */ (function () {
    function Artist() {
        this.Id = 0;
        this.ArtistName = null;
        this.Description = null;
        this.ImageUrl = null;
        this.AmazonUrl = null;
        this.AlbumCount = 0;
        this.Albums = [];
    }
    Artist = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Artist);
    return Artist;
}());



/***/ }),

/***/ "./src/app/business/userInfo.ts":
/*!**************************************!*\
  !*** ./src/app/business/userInfo.ts ***!
  \**************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _appConfiguration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appConfiguration */ "./src/app/business/appConfiguration.ts");
/* harmony import */ var _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserInfo = /** @class */ (function () {
    function UserInfo(http, config) {
        this.http = http;
        this.config = config;
        this.isAdmin = false;
        this.userName = null;
        this.sessionStarted = new Date();
        this._isAuthenticated = false;
        // initialize isAuthenticate from localstorage
        var isAuthenticated = localStorage.getItem("av_isAuthenticated");
        this._isAuthenticated = !isAuthenticated || isAuthenticated === 'false' ? false : true;
    }
    Object.defineProperty(UserInfo.prototype, "isAuthenticated", {
        get: function () {
            return this._isAuthenticated;
        },
        set: function (val) {
            this._isAuthenticated = val || false;
            // cache authentication
            localStorage.setItem('av_isAuthenticated', this._isAuthenticated.toString());
        },
        enumerable: true,
        configurable: true
    });
    ;
    UserInfo.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.config.urls.url("login"), {
            username: username,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (response) {
            if (response.status === 401)
                _this.isAuthenticated = false;
            return new _common_errorDisplay__WEBPACK_IMPORTED_MODULE_4__["ErrorInfo"]().parseObservableResponseError(response);
        }));
    };
    UserInfo.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.config.urls.url("logout"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (success) {
            _this.isAuthenticated = false;
            return true;
        }));
    };
    /**
     * Calls to the server to check authentication and then
     * updates the local isAuthenticated flag
     * @returns {Observable<t>}
     */
    UserInfo.prototype.checkAuthentication = function () {
        var _this = this;
        var url = this.config.urls.url("isAuthenticated");
        console.log(url);
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            _this.isAuthenticated = result;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (response) {
            _this.isAuthenticated = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(response);
        }));
    };
    UserInfo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _appConfiguration__WEBPACK_IMPORTED_MODULE_3__["AppConfiguration"]])
    ], UserInfo);
    return UserInfo;
}());



/***/ }),

/***/ "./src/app/common/animations.ts":
/*!**************************************!*\
  !*** ./src/app/common/animations.ts ***!
  \**************************************/
/*! exports provided: slideIn, slideInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideIn", function() { return slideIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInLeft", function() { return slideInLeft; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// from '@angular';
var slideIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out'))
]);
var slideInLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInLeft', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out'))
]);


/***/ }),

/***/ "./src/app/common/appFooter.html":
/*!***************************************!*\
  !*** ./src/app/common/appFooter.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner banner-bottom\">\r\n  <nav id=\"Toolbar\">\r\n    <a routerLink=\"/albums\" [ngClass]=\"{ selected: config.activeTab == 'albums'}\" >\r\n      <img src=\"images/record.png\" title=\"Albums\" /> <span>Albums</span>\r\n    </a>\r\n    <a routerLink=\"/artists\" [ngClass]=\"{ selected: config.activeTab == 'artists'}\">\r\n      <img src=\"images/artists32.png\" title=\"Artists\" /> <span>Artists</span>\r\n    </a>\r\n    <a routerLink=\"/options\" [ngClass]=\"{ selected: config.activeTab == 'options'}\">\r\n      <img src=\"images/gear.png\" title=\"Options\" /> <span>Options</span>\r\n    </a>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/common/appFooter.ts":
/*!*************************************!*\
  !*** ./src/app/common/appFooter.ts ***!
  \*************************************/
/*! exports provided: AppFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return AppFooter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppFooter = /** @class */ (function () {
    function AppFooter(config) {
        this.config = config;
    }
    AppFooter.prototype.ngOnInit = function () {
    };
    AppFooter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'app-footer',
            template: __webpack_require__(/*! ./appFooter.html */ "./src/app/common/appFooter.html")
        }),
        __metadata("design:paramtypes", [_business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"]])
    ], AppFooter);
    return AppFooter;
}());



/***/ }),

/***/ "./src/app/common/appHeader.html":
/*!***************************************!*\
  !*** ./src/app/common/appHeader.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"TitleBar\" class=\"statusbar-push\">\r\n    <a routerLink=\"/albums\">\r\n        <img src=\"images/headphone-head.png\"\r\n             style=\"height: 35px; float: left\" />\r\n        <div style=\"float: left; margin-left: 5px; line-height: 1.2\">\r\n            <i style=\"color: steelblue; font-size: 0.8em; font-weight: bold;\">West Wind</i><br />\r\n            <i style=\"color: whitesmoke; font-size: 1.25em; font-weight: bold;\">AlbumViewer</i>\r\n        </div>\r\n    </a>\r\n</div>\r\n\r\n\r\n<div style=\"margin: 0; padding: 0; border: none;\">\r\n    <div class=\"banner statusbar-push\">\r\n        <nav id=\"Toolbar-Top\" class=\"pull-right\">\r\n\r\n            <a  routerLink=\"/albums\" [ngClass]=\"{ selected: config.activeTab == 'albums'}\">\r\n                <img src=\"images/record.png\" title=\"Albums\" /> <span>Albums</span>\r\n            </a>\r\n            <a routerLink=\"/artists\" [ngClass]=\"{ selected: config.activeTab == 'artists'}\">\r\n                <img src=\"images/artists32.png\" title=\"Artists\" /> <span>Artists</span>\r\n            </a>\r\n            <a routerLink=\"/options\" [ngClass]=\"{ selected: config.activeTab == 'options'}\">\r\n                <img src=\"images/gear.png\" title=\"Options\" /> <span>Options</span>\r\n            </a>\r\n        </nav>\r\n\r\n\r\n        <nav id=\"TopMenu\" class=\"pull-right\">\r\n            <form style=\"float: left; width: 140px; padding-top: 2px;\">\r\n                <input id=\"SearchBox\" type=\"text\"\r\n                       class=\"form-control\" placeholder=\"Search...\"\r\n                       name=\"searchText\"\r\n                       [(ngModel)]=\"config.searchText\"\r\n                       *ngIf=\"config.isSearchAllowed\">\r\n            </form>\r\n        </nav>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/appHeader.ts":
/*!*************************************!*\
  !*** ./src/app/common/appHeader.ts ***!
  \*************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/appConfiguration */ "./src/app/business/appConfiguration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeader = /** @class */ (function () {
    function AppHeader(config) {
        this.config = config;
    }
    AppHeader.prototype.ngOnInit = function () {
    };
    AppHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'app-header',
            template: __webpack_require__(/*! ./appHeader.html */ "./src/app/common/appHeader.html")
        }),
        __metadata("design:paramtypes", [_business_appConfiguration__WEBPACK_IMPORTED_MODULE_1__["AppConfiguration"]])
    ], AppHeader);
    return AppHeader;
}());



/***/ }),

/***/ "./src/app/common/errorDisplay.ts":
/*!****************************************!*\
  !*** ./src/app/common/errorDisplay.ts ***!
  \****************************************/
/*! exports provided: ErrorDisplay, ErrorInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDisplay", function() { return ErrorDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInfo", function() { return ErrorInfo; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 *   A Bootstrap based alert display
 */
var ErrorDisplay = /** @class */ (function () {
    function ErrorDisplay() {
        /**
         * Error object that is bound to the component.
         * @type {ErrorInfo}
         */
        this.error = new ErrorInfo();
    }
    ErrorDisplay.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", ErrorInfo)
    ], ErrorDisplay.prototype, "error", void 0);
    ErrorDisplay = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            //moduleId: module.id,
            selector: 'error-display',
            //templateUrl: 'errorDisplay.html'
            template: "\n        <div *ngIf=\"error.message\"\n             class=\"alert alert-{{error.icon}} alert-dismissable\">\n            <button *ngIf=\"error.dismissable\" type=\"button\" class=\"close\"\n                    data-dismiss=\"alert\" aria-hidden=\"true\">\n                <i class=\"fa fa-remove\"></i>\n            </button>\n            <div *ngIf=\"error.header\" style=\"font-size: 1.5em; font-weight: bold\">\n                <i class=\"fa fa-{{error.imageIcon}}\" style=\"color: {{error.iconColor}}\"></i>\n                {{error.header}}\n            </div>\n            <i *ngIf=\"!error.header\"\n               class=\"fa fa-{{error.imageIcon}}\"\n               style=\"color: {{error.iconColor}}\"></i>\n            <strong>{{error.message}}</strong>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], ErrorDisplay);
    return ErrorDisplay;
}());

var ErrorInfo = /** @class */ (function () {
    function ErrorInfo() {
        this.response = null;
        this.reset();
    }
    ErrorInfo.prototype.reset = function () {
        this.message = "";
        this.header = "";
        this.dismissable = false;
        this.icon = "warning";
        this.imageIcon = "warning";
        this.iconColor = "inherit";
    };
    /**
     * Low level method to set message properties
     * @param msg - the message to set to
     * @param icon? - sets the icon property (warning*)
     * @param iconColor? - sets the icon color (left as is)
     */
    ErrorInfo.prototype.show = function (msg, icon, iconColor) {
        this.message = msg;
        this.icon = icon ? icon : "warning";
        if (iconColor)
            this.iconColor = iconColor;
        this.fixupIcons();
        // if(this.icon == "warning")
        //   toastr.warning(this.message);
        // if(this.icon == "info")
        //   toastr.info(this.message);
        // if (this.icon == "success")
        //   toastr.success(this.message);
    };
    /**
     * Displays an error alert
     * @param msg  - Either a message string or error object with .message property
     */
    ErrorInfo.prototype.error = function (msg) {
        if (typeof (msg) === 'object' && msg.message)
            this.message = msg.message;
        else
            this.message = msg;
        this.show(this.message, "warning");
    };
    /**
     * DIsplays an info style alert
     * @param msg - message to display
     */
    ErrorInfo.prototype.info = function (msg) {
        this.show(msg, "info");
    };
    /**
     * Fixes up icons and colors based on standard icon settings
     * this method is called in internally after any of the helper
     * methods are called. You can call this when setting any icon
     * related properties manually.
     */
    ErrorInfo.prototype.fixupIcons = function () {
        var err = this;
        if (err.icon === "info")
            err.imageIcon = "info-circle";
        if (err.icon === "error" || err.icon === "danger" || err.icon === "warning") {
            err.imageIcon = "warning";
            err.iconColor = "firebrick";
        }
        if (err.icon === "success") {
            err.imageIcon = "check";
            err.iconColor = "green";
        }
    };
    /**
     * Parse a toPromise() .catch() clause error
     * from a response object and returns an errorInfo object
     * @param response
     * @returns {Promise<void>|Promise<T>}
     */
    ErrorInfo.prototype.parsePromiseResponseError = function (response) {
        if (response.hasOwnProperty("message"))
            return Promise.reject(response);
        if (response.hasOwnProperty("Message")) {
            response.message = response.Message;
            return Promise.reject(response);
        }
        var err = new ErrorInfo();
        err.response = response;
        err.message = response.statusText;
        try {
            var data = response.json();
            if (data && data.message)
                err.message = data.message;
        }
        catch (ex) {
        }
        return Promise.reject(err);
    };
    ErrorInfo.prototype.parseObservableResponseError = function (response) {
        var err = new ErrorInfo();
        // HttpClient has an `error` property for raw JSON response
        if (response.hasOwnProperty("error")) {
            try {
                err = JSON.parse(response.error);
            }
            catch (ex) { }
            if (err.hasOwnProperty("message"))
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
            if (err.hasOwnProperty("Message")) {
                err.message = err["Message"];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
            }
        }
        if (response.hasOwnProperty("message"))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(response);
        if (response.hasOwnProperty("Message")) {
            response.message = response.Message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(response);
        }
        err.response = response;
        err.message = response.statusText;
        try {
            var data = response.json();
            if (data && data.message)
                err.message = data.message;
        }
        catch (ex) {
        }
        if (!err.message)
            err.message = "Unknown server failure.";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
    };
    return ErrorInfo;
}());



/***/ }),

/***/ "./src/app/common/login.html":
/*!***********************************!*\
  !*** ./src/app/common/login.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"page-header-text\">\r\n    AlbumViewer Login\r\n  </div>\r\n\r\n  <error-display [error]=\"error\"></error-display>\r\n\r\n  <div id=\"WebLogin\" class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n      Please sign in\r\n    </div>\r\n\r\n\r\n    <form class=\"panel-body\" name=\"form1\" #form1=\"ngForm\">\r\n      <div class=\"form-group\">\r\n          <div class=\"input-group\">\r\n              <div class=\"input-group-addon\">\r\n                <i class=\"fa fa-fw fa-user\"></i>\r\n              </div>\r\n              <input type=\"text\" name=\"WebLogin_txtUsername\"\r\n                   id=\"WebLogin_txtUsername\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Enter your user name\"\r\n                   [(ngModel)]=\"username\"\r\n                   autocapitalize=\"off\"\r\n                   autocomplete=\"off\"\r\n                   spellcheck=\"false\"\r\n                   autocorrect=\"off\" required />\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fa fa-fw fa-unlock-alt\"></i>\r\n          </div>\r\n          <input type=\"password\" name=\"password\"\r\n                 id=\"password\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Enter your password\"\r\n                 [(ngModel)]=\"password\"\r\n                 autocapitalize=\"off\"\r\n                 autocomplete=\"off\"\r\n                 spellcheck=\"false\"\r\n                 autocorrect=\"off\"\r\n                 required />\r\n        </div>\r\n      </div>\r\n      <div class=\"small \" >You can use: uid: test / pwd: test</div>\r\n      <hr />\r\n\r\n      <button class=\"btn btn-primary\"\r\n              type=\"button\"\r\n              (click)=\"login()\"\r\n              [disabled]=\"form1.invalid || form1.pristine\" >\r\n        <i class=\"fa fa-unlock-alt\"></i>\r\n        Login\r\n      </button>\r\n\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn btn-default btn-sm pull-right\" style=\"display:block\"\r\n                type=\"button\"\r\n                (click)=\"logout()\" [disabled]=\"!user.isAuthenticated\">\r\n          <i class=\"fa fa-unlock-alt\"></i>\r\n          Logout\r\n        </button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/common/login.ts":
/*!*********************************!*\
  !*** ./src/app/common/login.ts ***!
  \*********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../business/userInfo */ "./src/app/business/userInfo.ts");
/* harmony import */ var _errorDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorDisplay */ "./src/app/common/errorDisplay.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(user, route, router) {
        this.user = user;
        this.route = route;
        this.router = router;
        this.username = "";
        this.password = "";
        this.error = new _errorDisplay__WEBPACK_IMPORTED_MODULE_2__["ErrorInfo"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.url[0].path == "logout")
            this.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user.login(this.username, this.password)
            .subscribe(function () {
            _this.user.isAuthenticated = true;
            toastr.success("You are logged in.");
            _this.router.navigate(["/albums"]);
        }, function (err) {
            _this.error.error(err);
            _this.password = "";
            toastr.warning("Login failed: " + err.message);
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.user.logout()
            .subscribe(function (success) {
            toastr.success("Logged out.");
            _this.router.navigate(["/albums"]);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'login',
            template: __webpack_require__(/*! ./login.html */ "./src/app/common/login.html")
        }),
        __metadata("design:paramtypes", [_business_userInfo__WEBPACK_IMPORTED_MODULE_1__["UserInfo"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GhislainZeleu\Desktop\Web-Topol\my-first-angular5\ghislain-one-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map