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

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_services/AuthTknInterceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/AuthTknInterceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthTknInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTknInterceptor", function() { return AuthTknInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthTknInterceptor = /** @class */ (function () {
    function AuthTknInterceptor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthTknInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.status === 401) {
                // 401 handled in auth.interceptor
                _this.auth.logout();
                _this.router.navigate(['/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    AuthTknInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AuthTknInterceptor);
    return AuthTknInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        // protected basePath = 'https://api.personitech.com:8443/ProcessSmart';
        this.basePath = 'https://tnitminister.com:8443/ProcessSmart';
    }
    AuthenticationService.prototype.login = function (uname_login, pass_login) {
        // const body = new URLSearchParams();
        // body.set('uname_login', uname_login);
        // body.set('pass_login', pass_login);
        // const options = {
        //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        // };
        return this.http.post(this.basePath + "/ClientLogin?uname_login=" + uname_login + "&pass_login=" + pass_login, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (session) {
            //Check if user belongs in this client (client ID in environments/environment[.prod].ts)
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].allow_client != session.user.client_id) {
                return null;
            }
            // login successful if there's a token in the response
            else if (session && session.apiKey) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(session));
                return session;
            }
            else {
                return null;
            }
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/custom-download-service.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/_services/custom-download-service.service.ts ***!
  \**************************************************************/
/*! exports provided: CustomDownloadServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDownloadServiceService", function() { return CustomDownloadServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");




var CustomDownloadServiceService = /** @class */ (function () {
    function CustomDownloadServiceService(httpClient) {
        this.httpClient = httpClient;
        // protected basePath = 'https://api.personitech.com:8443/ProcessSmart';
        this.basePath = 'https://tnitminister.com:8443/ProcessSmart';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
    }
    /**
     * Download PDF of a Walkthru form (Punchlist)
     * @param id Form ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    CustomDownloadServiceService.prototype.downloadWalkthroughPDF = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadFormPDF.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('formId', id);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/pdf',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadWalkthroughPDF", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    /**
     * Download PDF of a Walkthru form (Punchlist)
     * @param id Form ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    CustomDownloadServiceService.prototype.downloadWalkthroughDocx = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadFormPDF.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('formId', id);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadWalkthroughDocx", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    /**
     * Download Work Order PDF
     * @param id
     */
    CustomDownloadServiceService.prototype.downloadWorkOrderPDF = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadFormPDF.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('formId', id);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/pdf',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadWorkOrderPDF", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    /**
     * Download Purchase Order PDF
     * @param id
     */
    CustomDownloadServiceService.prototype.downloadPurchaseOrderPDF = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadFormPDF.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('formId', id);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/pdf',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadPurchaseOrderPDF", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    /**
     * Download Work Order Spreadsheet
     * @param id
     */
    CustomDownloadServiceService.prototype.downloadWorkOrderXls = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadFormPDF.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('formId', id);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/vnd.ms-excel',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadWorkOrderXls", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    /**
     * Download Stock Transfer Spreadsheet
     * @param id
     */
    CustomDownloadServiceService.prototype.downloadStockTransferXls = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadFormPDF.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('formId', id);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/vnd.ms-excel',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadStockTransferXls", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    /**
     * Download Irrigation Repair Form PDF
     * @param id
     */
    CustomDownloadServiceService.prototype.downloadIrrigationRepairPDF = function (id) {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadFormPDF.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('formId', id);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/pdf',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadIrrigationRepairPDF", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    CustomDownloadServiceService.prototype.downloadIrrigationRepairPDF_zip = function (idList) {
        if (idList === null || idList === undefined) {
            throw new Error('Required parameter id was null or undefined when calling downloadFormPDF.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('formIds', idList.join());
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/zip'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadIrrigationRepairPDFs", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    CustomDownloadServiceService.prototype.downloadAllWithJobnum_zip = function (jobnum) {
        if (!jobnum) {
            throw new Error('Required parameter jobnum was null or undefined when calling downloadAllWithJobnum_zip.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('jobnum', jobnum);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/zip'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadAllFilesWithJobnum", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    /**
     * Change a form's state (process number)
     * @param id Form ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    CustomDownloadServiceService.prototype.setActiveAllFormWithJobnum = function (jobnum, isActive, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (!jobnum) {
            throw new Error('Required parameter type jobnum was null or undefined when calling setActiveAllFormWithJobnum.');
        }
        if (!isActive) {
            throw new Error('Required parameter isActive was null or undefined when calling setActiveAllFormWithJobnum.');
        }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('jobnum', jobnum);
        params = params.append('isActive', '' + isActive);
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/setActiveAllFormWithJobnum", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress,
            params: params
        });
    };
    CustomDownloadServiceService.prototype.downloadDataUsageXls = function (months) {
        if (months === null || months === undefined) {
            throw new Error('Required parameter months was null or undefined when calling downloadDataUsageXls.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('months', months);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/pdf',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/GetDataUsageXls", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    CustomDownloadServiceService.prototype.downloadStockTransferMaterialUsage = function (start_date, end_date, filler_id) {
        if (start_date === null || start_date === undefined) {
            throw new Error('Required parameter start_date was null or undefined when calling downloadStockTransferMaterialUsage.');
        }
        if (end_date === null || end_date === undefined) {
            throw new Error('Required parameter end_date was null or undefined when calling downloadStockTransferMaterialUsage.');
        }
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('start_date', start_date);
        params = params.append('end_date', end_date);
        if (filler_id) {
            params = params.append('fillerId', filler_id);
        }
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/vnd.ms-excel',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/GetStockTransferHistoryXls", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    CustomDownloadServiceService.prototype.downloadStockTransferMonthlySummary = function (month) {
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('period', 'month');
        params = params.append('periodNum', month);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/vnd.ms-excel',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadStockTransferSummary", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    CustomDownloadServiceService.prototype.downloadCustomerListXls = function () {
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/vnd.ms-excel',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadCustomerList", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    CustomDownloadServiceService.prototype.downloadMaterialsListXls = function (deptId) {
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('deptId', deptId);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/vnd.ms-excel',
            'text/plain'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/DownloadInventoryList", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params,
            responseType: 'blob'
        });
    };
    CustomDownloadServiceService.prototype.getIRFHeaders = function (limit) {
        this.defaultHeaders = this.defaultHeaders.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).apiKey);
        var headers = this.defaultHeaders;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('limit', limit);
        // authentication (bearerAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.basePath + "/forms/47/getIRFHeaders", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            params: params
        });
    };
    CustomDownloadServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomDownloadServiceService);
    return CustomDownloadServiceService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });




/***/ }),

/***/ "./src/app/_services/newApi.ts":
/*!*************************************!*\
  !*** ./src/app/_services/newApi.ts ***!
  \*************************************/
/*! exports provided: NewApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewApiService", function() { return NewApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var NewApiService = /** @class */ (function () {
    function NewApiService(http) {
        this.http = http;
        // protected basePath = 'https://api.personitech.com:8443/ProcessSmart';
        this.basePath = 'https://tnitminister.com:8443/ProcessSmart';
    }
    NewApiService.prototype.getViewPurchaseOrder = function (uname_login) {
        var token = localStorage.getItem('currentUser');
        console.log("data", JSON.parse(token).apiKey);
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer " + JSON.parse(token).apiKey
        });
        return this.http.get(this.basePath + "/getViewPurchaseOrder/54/id?l=10000&o=DESC&p=1&jn=13285-10", { headers: httpHeaders });
    };
    NewApiService.prototype.getViewWalkThrough = function (typeId, processNum, uId) {
        console.log("itemsList", typeId, processNum, uId);
        if (uId == undefined) {
            uId = 0;
        }
        var token = localStorage.getItem('currentUser');
        console.log("data", JSON.parse(token).apiKey);
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer " + JSON.parse(token).apiKey
        });
        return this.http.get(this.basePath + "/formWalkThrough/" + typeId + "/id?l=10000&o=DESC&p=" + processNum + "&f=" + 0, { headers: httpHeaders });
    };
    NewApiService.prototype.getProcessnum = function (typeId) {
        console.log("working", typeId);
        var token = localStorage.getItem('currentUser');
        console.log("data", JSON.parse(token).apiKey);
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': "Bearer " + JSON.parse(token).apiKey
        });
        return this.http.get(this.basePath + "/formWalkThrough/" + typeId + "/id?l=10000&o=DESC", { headers: httpHeaders });
    };
    NewApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewApiService);
    return NewApiService;
}());



/***/ }),

/***/ "./src/app/_services/shared.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/shared.service.ts ***!
  \*********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SharedService = /** @class */ (function () {
    function SharedService(router, fms) {
        this.router = router;
        this.fms = fms;
        this.admin_role_id = '1';
        this.sharedNode = {
            success: '',
            error: ''
        };
        this.num_uploads = 0;
        this.redirect_to = '/';
        this.alerts = {
            wt_2: 0,
            wt_3: 0,
            irf_1: 0,
            irf_2: 0,
            irf_3: 0
        };
        this.uploadModalActive = 'none';
    }
    SharedService.prototype.activateUploadModal = function () {
        this.uploadModalActive = 'block';
    };
    SharedService.prototype.closeUploadModal = function () {
        this.uploadModalActive = 'none';
    };
    SharedService.prototype.setRedirect = function (destination) {
        this.redirect_to = destination;
    };
    SharedService.prototype.redirect = function () {
        this.router.navigate([this.redirect_to]);
    };
    SharedService.prototype.addUploadCount = function () {
        this.num_uploads++;
    };
    SharedService.prototype.reduceUploadCount = function () {
        this.num_uploads--;
    };
    SharedService.prototype.showSuccess = function (message) {
        this.sharedNode.success = message;
        if (document.getElementById('suc_msg')) {
            document.getElementById('suc_msg').style.display = "block";
        }
    };
    SharedService.prototype.showError = function (message) {
        this.sharedNode.error = message;
        if (document.getElementById('err_msg')) {
            document.getElementById('err_msg').style.display = "block";
        }
    };
    SharedService.prototype.toHtmlDate = function (datestr) {
        var date;
        if (datestr) {
            date = new Date(datestr);
        }
        else {
            date = new Date();
        }
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    SharedService.prototype.toHtmlDateStr = function (date) {
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    //Create Unique ID
    SharedService.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    //Count number of forms up to 1 year ago
    SharedService.prototype.countForm = function (varName, typeId, filler_id, process_num) {
        var _this = this;
        //Start date is a year ago
        var start_date = new Date();
        start_date.setDate(start_date.getDate() - 365);
        //End date is a year in the future
        var end_date = new Date();
        end_date.setDate(end_date.getDate() + 365);
        this.fms.getFormCount(typeId, this.toHtmlDateStr(start_date), this.toHtmlDateStr(end_date), filler_id, process_num)
            .subscribe(function (data) {
            _this.alerts[varName] = +data.count;
        });
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/administration/form-employees/form-employees.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/administration/form-employees/form-employees.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aW9uL2Zvcm0tZW1wbG95ZWVzL2Zvcm0tZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/administration/form-employees/form-employees.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/administration/form-employees/form-employees.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='modal fade' id='deactivateItem' tabindex='-10' role='dialog' data-backdrop='false'>\r\n\t<div class='modal-dialog' role='document'>\r\n\t\t<div class='modal-content'>\r\n\t\t\t<form (ngSubmit)=\"onDeactivate()\" class='text-center'> \r\n\t\t\t\t<div class='modal-header'>\r\n\t\t\t\t\t<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\r\n\t\t\t\t\t<h4 class='modal-title'>Deactivate Account</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='modal-body modal_body_warning'>\r\n\t\t\t\t\t<b>Deactivate {{model.name}}'s account?</b><br>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='modal-footer text-center'>\r\n\t\t\t\t\t<button type='button' class='btn' data-dismiss='modal' aria-label='Close'>Cancel</button>\r\n\t\t\t\t\t<button type='submit' class='btn btn-danger'>Deactivate</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class='modal fade' id='reactivateItem' tabindex='-10' role='dialog' data-backdrop='false'>\r\n\t<div class='modal-dialog' role='document'>\r\n\t\t<div class='modal-content'>\r\n\t\t\t<form (ngSubmit)=\"onReactivate()\" class='text-center'> \r\n\t\t\t\t<div class='modal-header'>\r\n\t\t\t\t\t<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>\r\n\t\t\t\t\t<h4 class='modal-title'>Reactivate Account</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='modal-body'>\r\n\t\t\t\t\t<b>Reactivate {{model.name}}'s account?</b><br>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='modal-footer text-center'>\r\n\t\t\t\t\t<button type='button' class='btn' data-dismiss='modal' aria-label='Close'>Cancel</button>\r\n\t\t\t\t\t<button type='submit' class='btn btn-primary'>Reactivate</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t<!-- Only Admin may deactivate non-Admin, active users -->\r\n\t\t<div *ngIf=\"(getRole(roleId) == 'Administrator') && model_id && model.is_active && (getRole(model.role_id) != 'Administrator')\"\r\n\t\t\tclass=\"col-xs-12 text-right\">\r\n\t\t\t<a class='btn btn-lg btn-danger pull-right' data-toggle='modal' data-target='#deactivateItem'>\r\n\t\t\t<b><span class='glyphicon glyphicon-trash'></span> Deactivate</b></a>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"model_id && !model.is_active\" class=\"col-xs-12 text-right\">\r\n\t\t\t<a class='btn btn-lg btn-info pull-right' data-toggle='modal' data-target='#reactivateItem'>\r\n\t\t\t<b>Reactivate</b></a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\"></div>\r\n\t\t<div class=\"col-sm-8 col-xs-12\">\r\n        \t<div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n\t\t            <h2 *ngIf=\"model_id\" class=\"text-center\">User Profile</h2>\r\n\t\t            <h2 *ngIf=\"!model_id\" class=\"text-center\">New User</h2>\r\n\t         \t</div>\r\n\t        </div>\r\n            <form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n                <div class=\"row form-group\" *ngIf=\"getRole(roleId) == 'Administrator' || !model_id\">\r\n\t                <div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t                    <label for=\"name\">Name</label>\r\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"John Doe\" id=\"name\" name=\"name\" required [(ngModel)]=\"model.name\">\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"row form-group\" \r\n\t            \t*ngIf=\"(getRole(roleId) == 'Administrator' || !model_id) && getRole(model.role_id) != 'Administrator'\">\r\n\t                <div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t                    <label for=\"role_id\">Role</label>\r\n\t                    <select id=\"role_id\" class=\"form-control\" [(ngModel)]=\"model.role_id\" name=\"role_id\" required>\r\n\t                    \t<option selected disabled hidden [value]=\"0\">-- Select Role --</option>\r\n\t                    \t<ng-container *ngFor=\"let a of rolesList\">\r\n\t                        <option *ngIf=\"a.title != 'Administrator'\" [value]=\"a.id\">\r\n\t\t                    \t{{a.title}}\r\n\t\t                    </option>\r\n\t                        </ng-container>\r\n\t                    </select>\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"row form-group\" *ngIf=\"getRole(roleId) == 'Administrator' || !model_id\">\r\n\t                <div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t                    <label for=\"username\">Login Username</label>\r\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"johndoe\" id=\"username\" name=\"username\" required [(ngModel)]=\"model.username\">\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"row form-group\">\r\n\t                <div *ngIf=\"model_id\" class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t                    <label for=\"password\">New Password</label>\r\n\t                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\">\r\n\t                </div>\r\n\t                <div *ngIf=\"!model_id\" class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t                    <label for=\"password\">Password</label>\r\n\t                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"password\" name=\"password\" required [(ngModel)]=\"model.password\">\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"row form-group\">\r\n\t                <div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t                    <label for=\"email\">Email</label>\r\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"email@email.com\" id=\"email\" name=\"email\" required [(ngModel)]=\"model.email\">\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"row form-group\">\r\n\t                <div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t                    <label for=\"phone\">Phone Number</label>\r\n\t                    <input type=\"text\" class=\"form-control\" placeholder=\"(123)456-7890\" id=\"phone\" name=\"phone\" [(ngModel)]=\"model.phone\">\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"row form-group\">\r\n\t                <div class=\"col-xs-6 col-md-3 col-md-offset-2 text-left\">\r\n\t                    <label for=\"language_preference\">Language Preference</label>\r\n\t                    <select id=\"language_preference\" class=\"form-control\" [(ngModel)]=\"model.language_preference\" name=\"language_preference\" required>\r\n\t                        <ng-container *ngFor=\"let a of langList\">\r\n\t                        <option [value]=\"a.abbr\">\r\n\t\t                    \t{{a.title}}\r\n\t\t                    </option>\r\n\t                        </ng-container>\r\n\t                    </select>\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"row\">\r\n\t                <div class=\"col-xs-12 col-md-4 col-md-offset-4 text-center\"> \r\n\t                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!nisshoForm.form.valid\"><b>Submit</b></button>\r\n\t                </div>\r\n\t            </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administration/form-employees/form-employees.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/administration/form-employees/form-employees.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEmployeesComponent", function() { return FormEmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");






var FormEmployeesComponent = /** @class */ (function () {
    function FormEmployeesComponent(adms, ssv, router, route) {
        this.adms = adms;
        this.ssv = ssv;
        this.router = router;
        this.route = route;
    }
    FormEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Language list
        this.langList = [];
        this.langList.push({ abbr: 'en', title: 'English' });
        this.langList.push({ abbr: 'es', title: 'Spanish' });
        //Authentication
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        var uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.route.params.subscribe(function (params) {
            _this.model_id = params['id'];
            if (_this.model_id) {
                //Existing profile - User must be Admin or their own profile
                if (_this.roleId != _this.ssv.admin_role_id && _this.model_id != uid) {
                    _this.adms.logout();
                    _this.router.navigate(['/login']);
                }
                _this.loadModel();
            }
            else {
                //New profile - User must be Admin
                if (_this.roleId != _this.ssv.admin_role_id) {
                    _this.adms.logout();
                    _this.router.navigate(['/login']);
                }
                _this.model = {
                    'id': '0',
                    'role_id': '0',
                    'language_preference': 'en'
                };
            }
        });
        this.populateRoles();
    };
    FormEmployeesComponent.prototype.populateRoles = function () {
        var _this = this;
        this.adms.getRoles()
            .subscribe(function (itemsList) {
            _this.rolesList = itemsList;
        });
    };
    FormEmployeesComponent.prototype.loadModel = function () {
        var _this = this;
        this.adms.getUser(this.model_id)
            .subscribe(function (model) {
            model.password = "";
            _this.model = model;
        });
    };
    FormEmployeesComponent.prototype.onSubmit = function () {
        var _this = this;
        //Submit the form to the server
        console.log(JSON.stringify(this.model));
        if (this.model_id) {
            this.adms.updateUser(this.model, this.model_id)
                .subscribe(function (data) {
                // Page redirect when getting response
                _this.ssv.showSuccess('Profile successfully updated!');
                _this.router.navigate(['/form-employee/' + _this.model_id]);
            }, function (error) {
                // Display error message
                console.log(error);
                _this.ssv.showError('Error: Username is taken');
            });
        }
        else {
            this.adms.newUser(this.model)
                .subscribe(function (data) {
                // Page redirect when getting response
                _this.ssv.showSuccess('User successfully created!');
                _this.router.navigate(['/view-employees']);
            }, function (error) {
                // Display error message
                console.log(error);
                _this.ssv.showError('Error: Username has been taken!');
            });
        }
    };
    FormEmployeesComponent.prototype.onDeactivate = function () {
        var _this = this;
        this.adms.deactivateUser(this.model_id)
            .subscribe(function (data) {
            // Page redirect when getting response
            _this.ssv.showSuccess('Account successfully deactivated!');
            _this.router.navigate(['/view-employees']);
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to deactivate account!');
        });
    };
    FormEmployeesComponent.prototype.onReactivate = function () {
        var _this = this;
        this.adms.reactivateUser(this.model_id)
            .subscribe(function (data) {
            // Page redirect when getting response
            _this.ssv.showSuccess('Account successfully reactivated!');
            _this.router.navigate(['/view-employees']);
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to reactivate account!');
        });
    };
    FormEmployeesComponent.prototype.getRole = function (roleId) {
        if (this.rolesList) {
            var role = this.rolesList.find(function (x) { return x.id == roleId; });
            if (role) {
                return role.title;
            }
        }
        else
            return "-";
    };
    FormEmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-employees',
            template: __webpack_require__(/*! ./form-employees.component.html */ "./src/app/administration/form-employees/form-employees.component.html"),
            styles: [__webpack_require__(/*! ./form-employees.component.css */ "./src/app/administration/form-employees/form-employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FormEmployeesComponent);
    return FormEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/administration/form-roles/form-roles.component.css":
/*!********************************************************************!*\
  !*** ./src/app/administration/form-roles/form-roles.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aW9uL2Zvcm0tcm9sZXMvZm9ybS1yb2xlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/administration/form-roles/form-roles.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/administration/form-roles/form-roles.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  form-roles works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/administration/form-roles/form-roles.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/administration/form-roles/form-roles.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRolesComponent", function() { return FormRolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");





var FormRolesComponent = /** @class */ (function () {
    function FormRolesComponent(adms, ssv, router) {
        this.adms = adms;
        this.ssv = ssv;
        this.router = router;
    }
    FormRolesComponent.prototype.ngOnInit = function () {
        //Authentication
        if (JSON.parse(localStorage.getItem('currentUser')).user.role_id != '1') {
            this.router.navigate(['/login']);
        }
    };
    FormRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-roles',
            template: __webpack_require__(/*! ./form-roles.component.html */ "./src/app/administration/form-roles/form-roles.component.html"),
            styles: [__webpack_require__(/*! ./form-roles.component.css */ "./src/app/administration/form-roles/form-roles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormRolesComponent);
    return FormRolesComponent;
}());



/***/ }),

/***/ "./src/app/administration/view-employees/view-employees.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/administration/view-employees/view-employees.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aW9uL3ZpZXctZW1wbG95ZWVzL3ZpZXctZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/administration/view-employees/view-employees.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/administration/view-employees/view-employees.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">User List</h3>\r\n   \t<div class=\"col-sm-6 text-right\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm\" routerLink=\"/form-employee\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New User\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-6 text-left\">\r\n\t\t<button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"onDownloadXls()\">\r\n\t\t\t<span class=\"glyphicon glyphicon-download-alt\"></span> Download\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15 form-inline text-left\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Name...\" [(ngModel)]=\"search_name\" (input)=\"searchItem()\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-4 col-sm-offset-4 text-left input-group\">\r\n               <div class=\"input-group-addon\">Role:</div>\r\n               <select class=\"form-control\" [(ngModel)]=\"role_id\" (change)=\"searchItem()\">\r\n               \t\t<option selected [value]=\"0\">All</option>\r\n               \t\t<ng-container *ngFor=\"let a of rolesList\">\r\n               \t\t<option *ngIf=\"a.title != 'Administrator'\" [value]=\"a.id\">\r\n                    \t{{a.title}}\r\n                    </option>\r\n               \t\t</ng-container>\r\n               </select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNothing here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Name</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Role</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Login Username</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-4\">Contact</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">\r\n                    \t<a routerLink=\"/form-employee/{{item.uid}}\" routerLinkActive=\"active\">\r\n                    \t\t<b>{{item.name}}</b>\r\n                    \t</a>\r\n                   \t</td>\r\n                    <td class=\"col-sm-3\">{{getRole(item.role_id)}}</td>\r\n                    <td class=\"col-sm-2\">{{item.username}}</td>\r\n                    <td class=\"col-sm-4\">\r\n                        <span class=\"glyphicon glyphicon-envelope\"></span> {{item.email? item.email : '-'}}<br>\r\n                        <span class=\"glyphicon glyphicon-phone\"></span> {{item.phone? item.phone : '-'}}\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/administration/view-employees/view-employees.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/administration/view-employees/view-employees.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEmployeesComponent", function() { return ViewEmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);







var ViewEmployeesComponent = /** @class */ (function () {
    function ViewEmployeesComponent(adms, ssv, router, route, dcs) {
        this.adms = adms;
        this.ssv = ssv;
        this.router = router;
        this.route = route;
        this.dcs = dcs;
        this.search_name = "";
        this.role_id = '0';
        this.is_active = '1';
    }
    ViewEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Authentication
        if (JSON.parse(localStorage.getItem('currentUser')).user.role_id != this.ssv.admin_role_id) {
            this.router.navigate(['/login']);
        }
        this.route.params.subscribe(function (params) {
            var status = params['status'];
            if (status == 'inactive') {
                _this.is_active = '0';
            }
        });
        this.populateItems();
        this.populateRoles();
    };
    ViewEmployeesComponent.prototype.populateItems = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (itemsList) {
            itemsList = itemsList.filter(function (x) { return x.is_active == _this.is_active
                && x.role_id != _this.ssv.admin_role_id; });
            _this.itemsList = itemsList;
            _this.partialItemsList = itemsList;
        });
    };
    ViewEmployeesComponent.prototype.populateRoles = function () {
        var _this = this;
        this.adms.getRoles()
            .subscribe(function (rolesList) {
            _this.rolesList = rolesList;
        });
    };
    ViewEmployeesComponent.prototype.searchItem = function () {
        var _this = this;
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.name.toLowerCase().includes(_this.search_name.toLowerCase()));
            });
            if (this.role_id !== '0' && this.rolesList) {
                this.partialItemsList = this.partialItemsList.filter(function (x) { return x.role_id == _this.role_id; });
            }
        }
    };
    ViewEmployeesComponent.prototype.onDownloadXls = function () {
        var _this = this;
        this.dcs.DownloadUsersList()
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(res, 'UserList.xls', { type: 'application/vnd.ms-excel' });
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to download user list!');
        });
    };
    ViewEmployeesComponent.prototype.getRole = function (input) {
        if (this.rolesList) {
            return this.rolesList.find(function (x) { return x.id == input; }).title;
        }
        else
            return "-";
    };
    ViewEmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-employees',
            template: __webpack_require__(/*! ./view-employees.component.html */ "./src/app/administration/view-employees/view-employees.component.html"),
            styles: [__webpack_require__(/*! ./view-employees.component.css */ "./src/app/administration/view-employees/view-employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"]])
    ], ViewEmployeesComponent);
    return ViewEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/administration/view-roles/view-roles.component.css":
/*!********************************************************************!*\
  !*** ./src/app/administration/view-roles/view-roles.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aW9uL3ZpZXctcm9sZXMvdmlldy1yb2xlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/administration/view-roles/view-roles.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/administration/view-roles/view-roles.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Roles List</h3>\r\n   \t<div class=\"col-sm-12 text-center\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/form-roles\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Role\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Role...\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNothing here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-4 col-lg-3\">No.</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-8 col-lg-9 text-left\">Title</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList; let i = index\" class=\"table_body\">\r\n                \t<td class=\"col-sm-2\">{{i+1}}</td>\r\n                    <td class=\"col-sm-10 text-left\">{{item.title}}</td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/administration/view-roles/view-roles.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/administration/view-roles/view-roles.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRolesComponent", function() { return ViewRolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");





var ViewRolesComponent = /** @class */ (function () {
    function ViewRolesComponent(adms, ssv, router) {
        this.adms = adms;
        this.ssv = ssv;
        this.router = router;
    }
    ViewRolesComponent.prototype.ngOnInit = function () {
        //Authentication
        if (JSON.parse(localStorage.getItem('currentUser')).user.role_id != '1') {
            this.router.navigate(['/login']);
        }
        this.populateRoles();
    };
    ViewRolesComponent.prototype.populateRoles = function () {
        var _this = this;
        this.adms.getRoles()
            .subscribe(function (itemsList) {
            _this.itemsList = itemsList;
            _this.partialItemsList = itemsList;
        });
    };
    ViewRolesComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.title.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    ViewRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-roles',
            template: __webpack_require__(/*! ./view-roles.component.html */ "./src/app/administration/view-roles/view-roles.component.html"),
            styles: [__webpack_require__(/*! ./view-roles.component.css */ "./src/app/administration/view-roles/view-roles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewRolesComponent);
    return ViewRolesComponent;
}());



/***/ }),

/***/ "./src/app/api/S3Manager.ts":
/*!**********************************!*\
  !*** ./src/app/api/S3Manager.ts ***!
  \**********************************/
/*! exports provided: S3Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3Manager", function() { return S3Manager; });
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "./node_modules/aws-sdk/clients/s3.js");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);


/**
  * This class handles Upload and     static uploadInstructorAttachment(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
Download operations from Amazon S3
  */
var S3Manager = /** @class */ (function () {
    function S3Manager() {
    }
    S3Manager.getAssetAttachmentKey = function (filename) {
        return this.s3_AssetPath + filename;
    };
    S3Manager.getInstructorAttachmentKey = function (filename) {
        return this.s3_InstructorPath + filename;
    };
    S3Manager.getServiceLogAttachmentKey = function (filename, clientId) {
        return this.s3_ServiceLogPath + clientId + '/' + filename;
    };
    S3Manager.getFormAttachmentKey = function (filename, clientId) {
        return this.s3_FormsPath + clientId + '/' + filename;
    };
    S3Manager.getFormAttachmentUrl = function (filename, clientId) {
        return 'https://s3-' + this.region + '.amazonaws.com/' + this.bucket + '/' +
            this.getFormAttachmentKey(filename, clientId);
    };
    S3Manager.downloadAssetAttachment = function (filename) {
        var accessKeyId = this.accessKeyId;
        var secretAccessKey = this.secretAccessKey;
        var region = this.region;
        var mimeType = this.getMimeType(filename);
        var s3 = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        });
        var params = {
            Bucket: this.bucket,
            Key: S3Manager.getAssetAttachmentKey(filename),
        };
        s3.getObject(params, function (err, data) {
            if (err)
                console.log(err);
            else {
                var blob = new Blob([data.Body], { type: mimeType });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, filename);
            }
        });
    };
    S3Manager.downloadFormAttachment = function (filename, clientId) {
        var accessKeyId = this.accessKeyId;
        var secretAccessKey = this.secretAccessKey;
        var region = this.region;
        var mimeType = this.getMimeType(filename);
        var s3 = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        });
        var params = {
            Bucket: this.bucket,
            Key: S3Manager.getFormAttachmentKey(filename, clientId),
        };
        s3.getObject(params, function (err, data) {
            if (err)
                console.log(err);
            else {
                var blob = new Blob([data.Body], { type: mimeType });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, filename);
            }
        });
    };
    S3Manager.downloadInstructorAttachment = function (filename) {
        var accessKeyId = this.accessKeyId;
        var secretAccessKey = this.secretAccessKey;
        var region = this.region;
        var mimeType = this.getMimeType(filename);
        var s3 = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        });
        var params = {
            Bucket: this.bucket,
            Key: S3Manager.getInstructorAttachmentKey(filename),
        };
        s3.getObject(params, function (err, data) {
            if (err)
                console.log(err);
            else {
                var blob = new Blob([data.Body], { type: mimeType });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, filename);
            }
        });
    };
    S3Manager.uploadInstructorAttachment = function (file, filename) {
        var contentType = file.type;
        var accessKeyId = this.accessKeyId;
        var secretAccessKey = this.secretAccessKey;
        var region = this.region;
        var s3 = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        });
        var params = {
            Bucket: this.bucket,
            Key: S3Manager.getInstructorAttachmentKey(filename),
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        s3.upload(params, function (err, data) {
            if (err) {
                console.log(err);
                return false;
            }
        });
    };
    S3Manager.uploadAttachment = function (file, key, redirect_to, ssv, router) {
        var contentType = file.type;
        var accessKeyId = this.accessKeyId;
        var secretAccessKey = this.secretAccessKey;
        var region = this.region;
        this.upload_error = false;
        var s3 = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        });
        var params = {
            Bucket: this.bucket,
            Key: key,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        s3.upload(params, function (err, data) {
            if (err) {
                //Retry
                console.log('Upload Error, Retrying...');
                s3.upload(params, function (err1, data1) {
                    if (err1) {
                        this.upload_error = true;
                        return false;
                    }
                    else if (redirect_to) {
                        S3Manager.num_uploads_done++;
                        if (S3Manager.num_uploads_done >= S3Manager.num_uploads_total || S3Manager.num_uploads_total == 1) {
                            //Reset upload modal
                            if (ssv) {
                                ssv.closeUploadModal();
                                //Redirect the page
                                ssv.showSuccess('Form successfully updated!');
                            }
                            if (router)
                                router.navigate([redirect_to]);
                        }
                        return;
                    }
                });
            }
            else if (redirect_to) {
                S3Manager.num_uploads_done++;
                console.log('File Upload Progress: ' + S3Manager.num_uploads_done + ' of ' + S3Manager.num_uploads_total);
                if (S3Manager.num_uploads_done == S3Manager.num_uploads_total) {
                    if (ssv) {
                        //Reset upload modal
                        ssv.closeUploadModal();
                        //Redirect the page
                        ssv.showSuccess('Form successfully updated!');
                    }
                    if (router)
                        router.navigate([redirect_to]);
                }
                return;
            }
            else {
                console.log('Redirect to: is null');
            }
        });
    };
    S3Manager.uploadAssetAttachment = function (file, filename) {
        this.uploadAttachment(file, this.getAssetAttachmentKey(filename));
    };
    S3Manager.uploadAllFormAttachments = function (files, filenames, clientId, redirect_to, uploads_total, ssv, router) {
        if (!files || !filenames || filenames.length <= 0) {
            return;
        }
        console.log('Uploading all attachments: ' + uploads_total);
        S3Manager.num_uploads_done = 0;
        if (uploads_total) {
            S3Manager.num_uploads_total = uploads_total;
        }
        else {
            S3Manager.num_uploads_total = 1;
        }
        for (var i = 0; i < filenames.length; i++) {
            console.log('File Upload? ' + (files[i] != null));
            if (files[i]) {
                this.uploadAttachment(files[i], this.getFormAttachmentKey(filenames[i], clientId), redirect_to, ssv, router);
            }
        }
    };
    S3Manager.uploadFormAttachment = function (file, filename, clientId, redirect_to) {
        this.uploadAttachment(file, this.getFormAttachmentKey(filename, clientId), redirect_to);
    };
    S3Manager.downloadServiceLogAttachment = function (filename, clientId) {
        var accessKeyId = this.accessKeyId;
        var secretAccessKey = this.secretAccessKey;
        var region = this.region;
        var mimeType = this.getMimeType(filename);
        var s3 = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_0__({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        });
        var params = {
            Bucket: this.bucket,
            Key: S3Manager.getServiceLogAttachmentKey(filename, clientId),
        };
        s3.getObject(params, function (err, data) {
            if (err)
                console.log(err, err);
            else {
                var blob = new Blob([data.Body], { type: mimeType });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, filename);
            }
        });
    };
    S3Manager.getMimeType = function (filename) {
        if (filename == null || filename == '') {
            return null;
        }
        //Get extension's lowercase
        var filetype = filename.substr(filename.lastIndexOf('.') + 1).toLowerCase();
        switch (filetype) {
            case 'jpg': return 'image/jpeg';
            case 'png': return 'image/png';
            case 'pdf': return 'application/pdf';
            case 'doc': return 'application/msword';
            case 'docx': return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            case 'xls': return 'application/vnd.ms-excel';
            case 'xlsx': return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            case 'txt': return 'text/plain';
            default: return null;
        }
    };
    S3Manager.s3_BasePath = 'https://process-smart-attachments.s3.amazonaws.com';
    S3Manager.s3_AssetPath = 'assets/';
    S3Manager.s3_InstructorPath = 'instructors/';
    S3Manager.s3_ServiceLogPath = 'service-log/';
    S3Manager.s3_FormsPath = 'forms/';
    //Credentials
    S3Manager.accessKeyId = 'AKIAJPF26MNTRGMYQECQ';
    S3Manager.secretAccessKey = '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';
    S3Manager.region = 'us-west-1';
    S3Manager.bucket = 'process-smart-attachments';
    S3Manager.upload_error = false;
    return S3Manager;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'Dashboard | Process Smart';
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-sidebar/dashboard-sidebar.component */ "./src/app/dashboard-sidebar/dashboard-sidebar.component.ts");
/* harmony import */ var _dashboard_topbar_dashboard_topbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-topbar/dashboard-topbar.component */ "./src/app/dashboard-topbar/dashboard-topbar.component.ts");
/* harmony import */ var _dashboard_content_dashboard_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-content/dashboard-content.component */ "./src/app/dashboard-content/dashboard-content.component.ts");
/* harmony import */ var _general_app_updates_app_updates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general/app-updates/app-updates.component */ "./src/app/general/app-updates/app-updates.component.ts");
/* harmony import */ var _general_bug_report_bug_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./general/bug-report/bug-report.component */ "./src/app/general/bug-report/bug-report.component.ts");
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-user-idle */ "./node_modules/angular-user-idle/fesm5/angular-user-idle.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forms_view_work_order_view_work_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forms/view-work-order/view-work-order.component */ "./src/app/forms/view-work-order/view-work-order.component.ts");
/* harmony import */ var _forms_view_stock_transfer_view_stock_transfer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forms/view-stock-transfer/view-stock-transfer.component */ "./src/app/forms/view-stock-transfer/view-stock-transfer.component.ts");
/* harmony import */ var _forms_view_irrigation_repair_view_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./forms/view-irrigation-repair/view-irrigation-repair.component */ "./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.ts");
/* harmony import */ var _forms_view_purchase_order_view_purchase_order_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forms/view-purchase-order/view-purchase-order.component */ "./src/app/forms/view-purchase-order/view-purchase-order.component.ts");
/* harmony import */ var _forms_view_walkthrough_view_walkthrough_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./forms/view-walkthrough/view-walkthrough.component */ "./src/app/forms/view-walkthrough/view-walkthrough.component.ts");
/* harmony import */ var _forms_view_cost_summary_view_cost_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./forms/view-cost-summary/view-cost-summary.component */ "./src/app/forms/view-cost-summary/view-cost-summary.component.ts");
/* harmony import */ var _forms_view_m_work_order_view_m_work_order_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./forms/view-m-work-order/view-m-work-order.component */ "./src/app/forms/view-m-work-order/view-m-work-order.component.ts");
/* harmony import */ var _forms_view_c_work_order_view_c_work_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./forms/view-c-work-order/view-c-work-order.component */ "./src/app/forms/view-c-work-order/view-c-work-order.component.ts");
/* harmony import */ var _inventory_view_materials_view_materials_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./inventory/view-materials/view-materials.component */ "./src/app/inventory/view-materials/view-materials.component.ts");
/* harmony import */ var _inventory_view_containers_view_containers_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./inventory/view-containers/view-containers.component */ "./src/app/inventory/view-containers/view-containers.component.ts");
/* harmony import */ var _customers_view_customers_view_customers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./customers/view-customers/view-customers.component */ "./src/app/customers/view-customers/view-customers.component.ts");
/* harmony import */ var _forms_fill_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./forms/fill/work-order/work-order.component */ "./src/app/forms/fill/work-order/work-order.component.ts");
/* harmony import */ var _forms_fill_walkthrough_walkthrough_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./forms/fill/walkthrough/walkthrough.component */ "./src/app/forms/fill/walkthrough/walkthrough.component.ts");
/* harmony import */ var _forms_fill_irrigation_repair_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./forms/fill/irrigation-repair/irrigation-repair.component */ "./src/app/forms/fill/irrigation-repair/irrigation-repair.component.ts");
/* harmony import */ var _administration_view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./administration/view-employees/view-employees.component */ "./src/app/administration/view-employees/view-employees.component.ts");
/* harmony import */ var _administration_view_roles_view_roles_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./administration/view-roles/view-roles.component */ "./src/app/administration/view-roles/view-roles.component.ts");
/* harmony import */ var _administration_form_employees_form_employees_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./administration/form-employees/form-employees.component */ "./src/app/administration/form-employees/form-employees.component.ts");
/* harmony import */ var _administration_form_roles_form_roles_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./administration/form-roles/form-roles.component */ "./src/app/administration/form-roles/form-roles.component.ts");
/* harmony import */ var _forms_fill_stock_transfer_stock_transfer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./forms/fill/stock-transfer/stock-transfer.component */ "./src/app/forms/fill/stock-transfer/stock-transfer.component.ts");
/* harmony import */ var _forms_fill_irrigation_repair_parts_irrigation_repair_parts_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./forms/fill/irrigation-repair-parts/irrigation-repair-parts.component */ "./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _inventory_form_materials_form_materials_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./inventory/form-materials/form-materials.component */ "./src/app/inventory/form-materials/form-materials.component.ts");
/* harmony import */ var _inventory_form_containers_form_containers_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./inventory/form-containers/form-containers.component */ "./src/app/inventory/form-containers/form-containers.component.ts");
/* harmony import */ var _inventory_view_truck_inventory_view_truck_inventory_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./inventory/view-truck-inventory/view-truck-inventory.component */ "./src/app/inventory/view-truck-inventory/view-truck-inventory.component.ts");
/* harmony import */ var _inventory_form_truck_inventory_form_truck_inventory_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./inventory/form-truck-inventory/form-truck-inventory.component */ "./src/app/inventory/form-truck-inventory/form-truck-inventory.component.ts");
/* harmony import */ var _view_stock_transfer_statistics_view_stock_transfer_statistics_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./view-stock-transfer-statistics/view-stock-transfer-statistics.component */ "./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.ts");
/* harmony import */ var _forms_fill_start_job_start_job_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./forms/fill/start-job/start-job.component */ "./src/app/forms/fill/start-job/start-job.component.ts");
/* harmony import */ var _forms_fill_m_work_order_m_work_order_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./forms/fill/m-work-order/m-work-order.component */ "./src/app/forms/fill/m-work-order/m-work-order.component.ts");
/* harmony import */ var _general_update_constants_update_constants_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./general/update-constants/update-constants.component */ "./src/app/general/update-constants/update-constants.component.ts");
/* harmony import */ var _customers_form_customers_form_customers_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./customers/form-customers/form-customers.component */ "./src/app/customers/form-customers/form-customers.component.ts");
/* harmony import */ var _general_view_data_usage_view_data_usage_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./general/view-data-usage/view-data-usage.component */ "./src/app/general/view-data-usage/view-data-usage.component.ts");
/* harmony import */ var _forms_fill_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./forms/fill/purchase-order/purchase-order.component */ "./src/app/forms/fill/purchase-order/purchase-order.component.ts");
/* harmony import */ var _view_stock_by_truck_view_stock_by_truck_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./view-stock-by-truck/view-stock-by-truck.component */ "./src/app/view-stock-by-truck/view-stock-by-truck.component.ts");
/* harmony import */ var _populate_update_customers_list_update_customers_list_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./populate/update-customers-list/update-customers-list.component */ "./src/app/populate/update-customers-list/update-customers-list.component.ts");
/* harmony import */ var src_app_services_AuthTknInterceptor__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! src/app/_services/AuthTknInterceptor */ "./src/app/_services/AuthTknInterceptor.ts");
/* harmony import */ var _services_newApi__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./_services/newApi */ "./src/app/_services/newApi.ts");
























































var appRoutes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        data: { title: 'Login | WHP' }
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        data: { title: 'Dashboard | WHP' }
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: '**', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] }
];
var globalSettings = { siteKey: '6Leu6ZoUAAAAALOkQhWaXPKJDdacexAejMCT7PnI' };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["DashboardSidebarComponent"],
                _dashboard_topbar_dashboard_topbar_component__WEBPACK_IMPORTED_MODULE_12__["DashboardTopbarComponent"],
                _dashboard_content_dashboard_content_component__WEBPACK_IMPORTED_MODULE_13__["DashboardContentComponent"],
                _general_app_updates_app_updates_component__WEBPACK_IMPORTED_MODULE_14__["AppUpdatesComponent"],
                _general_bug_report_bug_report_component__WEBPACK_IMPORTED_MODULE_15__["BugReportComponent"],
                _forms_view_work_order_view_work_order_component__WEBPACK_IMPORTED_MODULE_20__["ViewWorkOrderComponent"],
                _forms_view_stock_transfer_view_stock_transfer_component__WEBPACK_IMPORTED_MODULE_21__["ViewStockTransferComponent"],
                _forms_view_irrigation_repair_view_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_22__["ViewIrrigationRepairComponent"],
                _forms_view_purchase_order_view_purchase_order_component__WEBPACK_IMPORTED_MODULE_23__["ViewPurchaseOrderComponent"],
                _forms_view_walkthrough_view_walkthrough_component__WEBPACK_IMPORTED_MODULE_24__["ViewWalkthroughComponent"],
                _forms_view_cost_summary_view_cost_summary_component__WEBPACK_IMPORTED_MODULE_25__["ViewCostSummaryComponent"],
                _forms_view_m_work_order_view_m_work_order_component__WEBPACK_IMPORTED_MODULE_26__["ViewMWorkOrderComponent"],
                _forms_view_c_work_order_view_c_work_order_component__WEBPACK_IMPORTED_MODULE_27__["ViewCWorkOrderComponent"],
                _inventory_view_materials_view_materials_component__WEBPACK_IMPORTED_MODULE_28__["ViewMaterialsComponent"],
                _inventory_view_containers_view_containers_component__WEBPACK_IMPORTED_MODULE_29__["ViewContainersComponent"],
                _customers_view_customers_view_customers_component__WEBPACK_IMPORTED_MODULE_30__["ViewCustomersComponent"],
                _forms_fill_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_31__["WorkOrderComponent"],
                _forms_fill_walkthrough_walkthrough_component__WEBPACK_IMPORTED_MODULE_32__["WalkthroughComponent"],
                _forms_fill_irrigation_repair_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_33__["IrrigationRepairComponent"],
                _administration_view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_34__["ViewEmployeesComponent"],
                _administration_view_roles_view_roles_component__WEBPACK_IMPORTED_MODULE_35__["ViewRolesComponent"],
                _administration_form_employees_form_employees_component__WEBPACK_IMPORTED_MODULE_36__["FormEmployeesComponent"],
                _administration_form_roles_form_roles_component__WEBPACK_IMPORTED_MODULE_37__["FormRolesComponent"],
                _forms_fill_stock_transfer_stock_transfer_component__WEBPACK_IMPORTED_MODULE_38__["StockTransferComponent"],
                _forms_fill_irrigation_repair_parts_irrigation_repair_parts_component__WEBPACK_IMPORTED_MODULE_39__["IrrigationRepairPartsComponent"],
                _inventory_form_materials_form_materials_component__WEBPACK_IMPORTED_MODULE_41__["FormMaterialsComponent"],
                _inventory_form_containers_form_containers_component__WEBPACK_IMPORTED_MODULE_42__["FormContainersComponent"],
                _inventory_view_truck_inventory_view_truck_inventory_component__WEBPACK_IMPORTED_MODULE_43__["ViewTruckInventoryComponent"],
                _inventory_form_truck_inventory_form_truck_inventory_component__WEBPACK_IMPORTED_MODULE_44__["FormTruckInventoryComponent"],
                _view_stock_transfer_statistics_view_stock_transfer_statistics_component__WEBPACK_IMPORTED_MODULE_45__["ViewStockTransferStatisticsComponent"],
                _forms_fill_start_job_start_job_component__WEBPACK_IMPORTED_MODULE_46__["StartJobComponent"],
                _forms_fill_m_work_order_m_work_order_component__WEBPACK_IMPORTED_MODULE_47__["MWorkOrderComponent"],
                _general_update_constants_update_constants_component__WEBPACK_IMPORTED_MODULE_48__["UpdateConstantsComponent"],
                _customers_form_customers_form_customers_component__WEBPACK_IMPORTED_MODULE_49__["FormCustomersComponent"],
                _general_view_data_usage_view_data_usage_component__WEBPACK_IMPORTED_MODULE_50__["ViewDataUsageComponent"],
                _forms_fill_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_51__["PurchaseOrderComponent"],
                _view_stock_by_truck_view_stock_by_truck_component__WEBPACK_IMPORTED_MODULE_52__["ViewStockByTruckComponent"],
                _populate_update_customers_list_update_customers_list_component__WEBPACK_IMPORTED_MODULE_53__["UpdateCustomersListComponent"]
            ],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_6__["ApiModule"],
                // Idle: seconds before warning pops up, Timeout: seconds before app logs out after warning,
                // Ping(optional): seconds before periodic action fires
                // UserIdleModule.forRoot({idle: 10, timeout: 10, ping: 15}),
                // Refresh token every 15 minutes, inactivity logout after 30 minutes
                angular_user_idle__WEBPACK_IMPORTED_MODULE_16__["UserIdleModule"].forRoot({ idle: 10, timeout: 1800, ping: 900 }),
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaModule"].forRoot()
            ],
            providers: [
                _services_newApi__WEBPACK_IMPORTED_MODULE_55__["NewApiService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__["HashLocationStrategy"] },
                { provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RECAPTCHA_SETTINGS"], useValue: globalSettings },
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } },
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_40__["CookieService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: src_app_services_AuthTknInterceptor__WEBPACK_IMPORTED_MODULE_54__["AuthTknInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _general_app_updates_app_updates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general/app-updates/app-updates.component */ "./src/app/general/app-updates/app-updates.component.ts");
/* harmony import */ var _general_bug_report_bug_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general/bug-report/bug-report.component */ "./src/app/general/bug-report/bug-report.component.ts");
/* harmony import */ var src_app_forms_view_work_order_view_work_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/forms/view-work-order/view-work-order.component */ "./src/app/forms/view-work-order/view-work-order.component.ts");
/* harmony import */ var src_app_forms_view_stock_transfer_view_stock_transfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/forms/view-stock-transfer/view-stock-transfer.component */ "./src/app/forms/view-stock-transfer/view-stock-transfer.component.ts");
/* harmony import */ var src_app_forms_view_irrigation_repair_view_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/forms/view-irrigation-repair/view-irrigation-repair.component */ "./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.ts");
/* harmony import */ var src_app_forms_view_purchase_order_view_purchase_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/forms/view-purchase-order/view-purchase-order.component */ "./src/app/forms/view-purchase-order/view-purchase-order.component.ts");
/* harmony import */ var src_app_forms_view_walkthrough_view_walkthrough_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/forms/view-walkthrough/view-walkthrough.component */ "./src/app/forms/view-walkthrough/view-walkthrough.component.ts");
/* harmony import */ var src_app_forms_view_cost_summary_view_cost_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/forms/view-cost-summary/view-cost-summary.component */ "./src/app/forms/view-cost-summary/view-cost-summary.component.ts");
/* harmony import */ var src_app_forms_view_m_work_order_view_m_work_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/forms/view-m-work-order/view-m-work-order.component */ "./src/app/forms/view-m-work-order/view-m-work-order.component.ts");
/* harmony import */ var src_app_forms_view_c_work_order_view_c_work_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/forms/view-c-work-order/view-c-work-order.component */ "./src/app/forms/view-c-work-order/view-c-work-order.component.ts");
/* harmony import */ var src_app_inventory_view_materials_view_materials_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/inventory/view-materials/view-materials.component */ "./src/app/inventory/view-materials/view-materials.component.ts");
/* harmony import */ var src_app_inventory_view_containers_view_containers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/inventory/view-containers/view-containers.component */ "./src/app/inventory/view-containers/view-containers.component.ts");
/* harmony import */ var src_app_customers_view_customers_view_customers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/customers/view-customers/view-customers.component */ "./src/app/customers/view-customers/view-customers.component.ts");
/* harmony import */ var src_app_forms_fill_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/forms/fill/work-order/work-order.component */ "./src/app/forms/fill/work-order/work-order.component.ts");
/* harmony import */ var src_app_administration_view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/administration/view-employees/view-employees.component */ "./src/app/administration/view-employees/view-employees.component.ts");
/* harmony import */ var src_app_administration_form_employees_form_employees_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/administration/form-employees/form-employees.component */ "./src/app/administration/form-employees/form-employees.component.ts");
/* harmony import */ var src_app_forms_fill_walkthrough_walkthrough_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/forms/fill/walkthrough/walkthrough.component */ "./src/app/forms/fill/walkthrough/walkthrough.component.ts");
/* harmony import */ var src_app_forms_fill_irrigation_repair_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/forms/fill/irrigation-repair/irrigation-repair.component */ "./src/app/forms/fill/irrigation-repair/irrigation-repair.component.ts");
/* harmony import */ var src_app_forms_fill_stock_transfer_stock_transfer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/forms/fill/stock-transfer/stock-transfer.component */ "./src/app/forms/fill/stock-transfer/stock-transfer.component.ts");
/* harmony import */ var src_app_forms_fill_irrigation_repair_parts_irrigation_repair_parts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component */ "./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.ts");
/* harmony import */ var src_app_view_stock_transfer_statistics_view_stock_transfer_statistics_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component */ "./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.ts");
/* harmony import */ var src_app_forms_fill_start_job_start_job_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/forms/fill/start-job/start-job.component */ "./src/app/forms/fill/start-job/start-job.component.ts");
/* harmony import */ var src_app_general_update_constants_update_constants_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/general/update-constants/update-constants.component */ "./src/app/general/update-constants/update-constants.component.ts");
/* harmony import */ var src_app_inventory_form_materials_form_materials_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/inventory/form-materials/form-materials.component */ "./src/app/inventory/form-materials/form-materials.component.ts");
/* harmony import */ var src_app_inventory_form_containers_form_containers_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/inventory/form-containers/form-containers.component */ "./src/app/inventory/form-containers/form-containers.component.ts");
/* harmony import */ var src_app_inventory_view_truck_inventory_view_truck_inventory_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/inventory/view-truck-inventory/view-truck-inventory.component */ "./src/app/inventory/view-truck-inventory/view-truck-inventory.component.ts");
/* harmony import */ var src_app_inventory_form_truck_inventory_form_truck_inventory_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/inventory/form-truck-inventory/form-truck-inventory.component */ "./src/app/inventory/form-truck-inventory/form-truck-inventory.component.ts");
/* harmony import */ var src_app_customers_form_customers_form_customers_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/customers/form-customers/form-customers.component */ "./src/app/customers/form-customers/form-customers.component.ts");
/* harmony import */ var src_app_general_view_data_usage_view_data_usage_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/general/view-data-usage/view-data-usage.component */ "./src/app/general/view-data-usage/view-data-usage.component.ts");
/* harmony import */ var src_app_forms_fill_m_work_order_m_work_order_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/forms/fill/m-work-order/m-work-order.component */ "./src/app/forms/fill/m-work-order/m-work-order.component.ts");
/* harmony import */ var src_app_forms_fill_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/forms/fill/purchase-order/purchase-order.component */ "./src/app/forms/fill/purchase-order/purchase-order.component.ts");
/* harmony import */ var src_app_view_stock_by_truck_view_stock_by_truck_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/view-stock-by-truck/view-stock-by-truck.component */ "./src/app/view-stock-by-truck/view-stock-by-truck.component.ts");
/* harmony import */ var src_app_populate_update_customers_list_update_customers_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/populate/update-customers-list/update-customers-list.component */ "./src/app/populate/update-customers-list/update-customers-list.component.ts");





































var appRoutes = [
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            // Forms
            { path: 'view-work-order/:processNum', component: src_app_forms_view_work_order_view_work_order_component__WEBPACK_IMPORTED_MODULE_6__["ViewWorkOrderComponent"] },
            { path: 'view-work-order', component: src_app_forms_view_work_order_view_work_order_component__WEBPACK_IMPORTED_MODULE_6__["ViewWorkOrderComponent"] },
            { path: 'view-stock-transfer/:processNum', component: src_app_forms_view_stock_transfer_view_stock_transfer_component__WEBPACK_IMPORTED_MODULE_7__["ViewStockTransferComponent"] },
            { path: 'view-stock-transfer', component: src_app_forms_view_stock_transfer_view_stock_transfer_component__WEBPACK_IMPORTED_MODULE_7__["ViewStockTransferComponent"] },
            { path: 'view-irrigation-repair/:processNum/:jobnum', component: src_app_forms_view_irrigation_repair_view_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_8__["ViewIrrigationRepairComponent"] },
            { path: 'view-irrigation-repair/:processNum', component: src_app_forms_view_irrigation_repair_view_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_8__["ViewIrrigationRepairComponent"] },
            { path: 'view-irrigation-repair', component: src_app_forms_view_irrigation_repair_view_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_8__["ViewIrrigationRepairComponent"] },
            { path: 'view-purchase-order/:processNum/:jobnum', component: src_app_forms_view_purchase_order_view_purchase_order_component__WEBPACK_IMPORTED_MODULE_9__["ViewPurchaseOrderComponent"] },
            { path: 'view-purchase-order/:processNum', component: src_app_forms_view_purchase_order_view_purchase_order_component__WEBPACK_IMPORTED_MODULE_9__["ViewPurchaseOrderComponent"] },
            { path: 'view-purchase-order', component: src_app_forms_view_purchase_order_view_purchase_order_component__WEBPACK_IMPORTED_MODULE_9__["ViewPurchaseOrderComponent"] },
            { path: 'view-walkthrough/:processNum', component: src_app_forms_view_walkthrough_view_walkthrough_component__WEBPACK_IMPORTED_MODULE_10__["ViewWalkthroughComponent"] },
            { path: 'view-walkthrough', component: src_app_forms_view_walkthrough_view_walkthrough_component__WEBPACK_IMPORTED_MODULE_10__["ViewWalkthroughComponent"] },
            { path: 'view-cost-summary/:processNum', component: src_app_forms_view_cost_summary_view_cost_summary_component__WEBPACK_IMPORTED_MODULE_11__["ViewCostSummaryComponent"] },
            { path: 'view-cost-summary', component: src_app_forms_view_cost_summary_view_cost_summary_component__WEBPACK_IMPORTED_MODULE_11__["ViewCostSummaryComponent"] },
            { path: 'view-m-work-order/:processNum', component: src_app_forms_view_m_work_order_view_m_work_order_component__WEBPACK_IMPORTED_MODULE_12__["ViewMWorkOrderComponent"] },
            { path: 'view-m-work-order', component: src_app_forms_view_m_work_order_view_m_work_order_component__WEBPACK_IMPORTED_MODULE_12__["ViewMWorkOrderComponent"] },
            { path: 'view-c-work-order/:processNum', component: src_app_forms_view_c_work_order_view_c_work_order_component__WEBPACK_IMPORTED_MODULE_13__["ViewCWorkOrderComponent"] },
            { path: 'view-c-work-order', component: src_app_forms_view_c_work_order_view_c_work_order_component__WEBPACK_IMPORTED_MODULE_13__["ViewCWorkOrderComponent"] },
            { path: 'work-order/:formId', component: src_app_forms_fill_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_17__["WorkOrderComponent"] },
            { path: 'work-order', component: src_app_forms_fill_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_17__["WorkOrderComponent"] },
            { path: 'start-job', component: src_app_forms_fill_start_job_start_job_component__WEBPACK_IMPORTED_MODULE_25__["StartJobComponent"] },
            { path: 'stock-transfer/jobnum/:jobnum', component: src_app_forms_fill_stock_transfer_stock_transfer_component__WEBPACK_IMPORTED_MODULE_22__["StockTransferComponent"] },
            { path: 'stock-transfer/:formId', component: src_app_forms_fill_stock_transfer_stock_transfer_component__WEBPACK_IMPORTED_MODULE_22__["StockTransferComponent"] },
            { path: 'stock-transfer', component: src_app_forms_fill_stock_transfer_stock_transfer_component__WEBPACK_IMPORTED_MODULE_22__["StockTransferComponent"] },
            { path: 'irrigation-repair/:formId', component: src_app_forms_fill_irrigation_repair_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_21__["IrrigationRepairComponent"] },
            { path: 'irrigation-repair', component: src_app_forms_fill_irrigation_repair_irrigation_repair_component__WEBPACK_IMPORTED_MODULE_21__["IrrigationRepairComponent"] },
            { path: 'irrigation-repair-parts/:formId', component: src_app_forms_fill_irrigation_repair_parts_irrigation_repair_parts_component__WEBPACK_IMPORTED_MODULE_23__["IrrigationRepairPartsComponent"] },
            { path: 'purchase-order/:formId', component: src_app_forms_fill_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_34__["PurchaseOrderComponent"] },
            { path: 'purchase-order', component: src_app_forms_fill_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_34__["PurchaseOrderComponent"] },
            { path: 'walkthrough/:formId', component: src_app_forms_fill_walkthrough_walkthrough_component__WEBPACK_IMPORTED_MODULE_20__["WalkthroughComponent"] },
            { path: 'walkthrough', component: src_app_forms_fill_walkthrough_walkthrough_component__WEBPACK_IMPORTED_MODULE_20__["WalkthroughComponent"] },
            { path: 'cost-summary/:formId', component: src_app_forms_view_cost_summary_view_cost_summary_component__WEBPACK_IMPORTED_MODULE_11__["ViewCostSummaryComponent"] },
            { path: 'cost-summary', component: src_app_forms_view_cost_summary_view_cost_summary_component__WEBPACK_IMPORTED_MODULE_11__["ViewCostSummaryComponent"] },
            { path: 'm-work-order/:formId', component: src_app_forms_fill_m_work_order_m_work_order_component__WEBPACK_IMPORTED_MODULE_33__["MWorkOrderComponent"] },
            { path: 'm-work-order', component: src_app_forms_fill_m_work_order_m_work_order_component__WEBPACK_IMPORTED_MODULE_33__["MWorkOrderComponent"] },
            { path: 'c-work-order/:formId', component: src_app_forms_view_c_work_order_view_c_work_order_component__WEBPACK_IMPORTED_MODULE_13__["ViewCWorkOrderComponent"] },
            { path: 'c-work-order', component: src_app_forms_view_c_work_order_view_c_work_order_component__WEBPACK_IMPORTED_MODULE_13__["ViewCWorkOrderComponent"] },
            // Inventory
            { path: 'view-materials/:id', component: src_app_inventory_view_materials_view_materials_component__WEBPACK_IMPORTED_MODULE_14__["ViewMaterialsComponent"] },
            { path: 'view-materials', component: src_app_inventory_view_materials_view_materials_component__WEBPACK_IMPORTED_MODULE_14__["ViewMaterialsComponent"] },
            { path: 'view-containers/:id', component: src_app_inventory_view_containers_view_containers_component__WEBPACK_IMPORTED_MODULE_15__["ViewContainersComponent"] },
            { path: 'view-containers', component: src_app_inventory_view_containers_view_containers_component__WEBPACK_IMPORTED_MODULE_15__["ViewContainersComponent"] },
            { path: 'view-truck-inventory/:id', component: src_app_inventory_view_truck_inventory_view_truck_inventory_component__WEBPACK_IMPORTED_MODULE_29__["ViewTruckInventoryComponent"] },
            { path: 'view-truck-inventory', component: src_app_inventory_view_truck_inventory_view_truck_inventory_component__WEBPACK_IMPORTED_MODULE_29__["ViewTruckInventoryComponent"] },
            { path: 'stock-transfer-statistics', component: src_app_view_stock_transfer_statistics_view_stock_transfer_statistics_component__WEBPACK_IMPORTED_MODULE_24__["ViewStockTransferStatisticsComponent"] },
            { path: 'form-materials/:deptId/:id', component: src_app_inventory_form_materials_form_materials_component__WEBPACK_IMPORTED_MODULE_27__["FormMaterialsComponent"] },
            { path: 'form-materials/:deptId', component: src_app_inventory_form_materials_form_materials_component__WEBPACK_IMPORTED_MODULE_27__["FormMaterialsComponent"] },
            { path: 'form-containers/:deptId/:id', component: src_app_inventory_form_containers_form_containers_component__WEBPACK_IMPORTED_MODULE_28__["FormContainersComponent"] },
            { path: 'form-containers/:deptId', component: src_app_inventory_form_containers_form_containers_component__WEBPACK_IMPORTED_MODULE_28__["FormContainersComponent"] },
            { path: 'form-truck-inventory/:deptId/:id', component: src_app_inventory_form_truck_inventory_form_truck_inventory_component__WEBPACK_IMPORTED_MODULE_30__["FormTruckInventoryComponent"] },
            { path: 'form-truck-inventory/:deptId', component: src_app_inventory_form_truck_inventory_form_truck_inventory_component__WEBPACK_IMPORTED_MODULE_30__["FormTruckInventoryComponent"] },
            //Customers
            { path: 'view-customers/:deptId', component: src_app_customers_view_customers_view_customers_component__WEBPACK_IMPORTED_MODULE_16__["ViewCustomersComponent"] },
            { path: 'form-customers/:deptId/:id', component: src_app_customers_form_customers_form_customers_component__WEBPACK_IMPORTED_MODULE_31__["FormCustomersComponent"] },
            { path: 'form-customers/:deptId', component: src_app_customers_form_customers_form_customers_component__WEBPACK_IMPORTED_MODULE_31__["FormCustomersComponent"] },
            //Admin
            { path: 'view-employees', component: src_app_administration_view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_18__["ViewEmployeesComponent"] },
            { path: 'view-employees/:status', component: src_app_administration_view_employees_view_employees_component__WEBPACK_IMPORTED_MODULE_18__["ViewEmployeesComponent"] },
            { path: 'form-employee', component: src_app_administration_form_employees_form_employees_component__WEBPACK_IMPORTED_MODULE_19__["FormEmployeesComponent"] },
            { path: 'form-employee/:id', component: src_app_administration_form_employees_form_employees_component__WEBPACK_IMPORTED_MODULE_19__["FormEmployeesComponent"] },
            // General
            { path: 'app-updates', component: _general_app_updates_app_updates_component__WEBPACK_IMPORTED_MODULE_4__["AppUpdatesComponent"] },
            { path: 'bug-report', component: _general_bug_report_bug_report_component__WEBPACK_IMPORTED_MODULE_5__["BugReportComponent"] },
            { path: 'view-data-usage', component: src_app_general_view_data_usage_view_data_usage_component__WEBPACK_IMPORTED_MODULE_32__["ViewDataUsageComponent"] },
            { path: 'view-monthly-stock', component: src_app_view_stock_by_truck_view_stock_by_truck_component__WEBPACK_IMPORTED_MODULE_35__["ViewStockByTruckComponent"] },
            { path: 'update-constants', component: src_app_general_update_constants_update_constants_component__WEBPACK_IMPORTED_MODULE_26__["UpdateConstantsComponent"] },
            { path: 'update-customers-list-csv', component: src_app_populate_update_customers_list_update_customers_list_component__WEBPACK_IMPORTED_MODULE_36__["UpdateCustomersListComponent"] }
        ],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    // otherwise redirect to home page
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/customers/form-customers/form-customers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/form-customers/form-customers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9mb3JtLWN1c3RvbWVycy9mb3JtLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customers/form-customers/form-customers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/form-customers/form-customers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This page fragment is to be included under Dashboard <body> tag -->\r\n\r\n<div class='modal fade' id='deactivateCustomer' tabindex='-10' role='dialog' data-backdrop='false'>  \r\n    <div class='modal-dialog' role='document'>  \r\n        <div class='modal-content'>  \r\n        <div class='modal-header'>  \r\n            <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>  \r\n            <h4 class='modal-title'>Delete Customer</h4>  \r\n        </div>  \r\n        <div class='modal-body modal_body_warning'>  \r\n        <input type='hidden' name='id' value='invId'>  \r\n        <b>Warning: This will remove this customer from the system.</b><br>  \r\n        </div>  \r\n        <div class='modal-footer text-center'>  \r\n            <button type='button' class='btn' data-dismiss='modal' aria-label='Close'>Cancel</button>  \r\n            <button type='button' (click)=\"DeleteCustomer()\" class='btn btn-danger'>Delete</button>  \r\n        </div>  \r\n        </div>  \r\n    </div>  \r\n</div>\r\n\r\n<div class='row'>\r\n\t<div class='col col-sm-offset-1 text-left'>\r\n\t\t<h3><a class='back_btn' routerLink=\"/view-customers/{{deptId}}\"><span class='glyphicon glyphicon-chevron-left'></span>Back</a></h3>\r\n\t</div>\r\n</div>\r\n<div class='row' *ngIf=\"customerId\">\r\n    <div class='col-xs-12 col-md-10 col-md-offset-1 text-left'>\r\n        <h3>\r\n            <a title='Delete' class='btn btn-lg btn-danger pull-right' href='#' data-toggle='modal' data-target='#deactivateCustomer'> \r\n                <b><span class='glyphicon glyphicon-trash'></span> Delete</b>\r\n            </a>\r\n        </h3>\r\n    </div>\r\n</div>\r\n<div class='row text-center'>\r\n\t<h3 class='text-capitalize' style='color: #323131;'>Create/Update Contact</h3>\r\n\t<div class='col-sm-10 col-sm-offset-1 text-left'>\r\n\t\t<form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n\t\t\t<div class='row margin_top_15'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='jobnum'>Job #:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='jobnum' name='jobnum' class='form-control' placeholder='Job #' required [(ngModel)]=\"model.jobnum\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='project_name'>Job Name:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' name='project_name' class='form-control' placeholder='Job Name' required [(ngModel)]=\"model.project_name\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='contract_amt'>Contract Amount ($):</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='contract_amt' name='contract_amt' class='form-control' placeholder='Contract Amount ($)' required [(ngModel)]=\"model.contract_amt\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='address'>Job Address / Main Streets:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='address' name='address' class='form-control' placeholder='Job Address' required [(ngModel)]=\"model.address\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='city'>Job City:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='city' name='city' class='form-control' placeholder='Job City' required [(ngModel)]=\"model.city\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='management'>Client / Property Management:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='management' name='management' class='form-control' placeholder='Client / Property Management' required [(ngModel)]=\"model.management\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='contact'>Contact Person:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='contact' name='contact' class='form-control' placeholder='Contact' required [(ngModel)]=\"model.contact\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='phone'>Phone:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='phone' name='phone' class='form-control' placeholder='Contact Phone' required [(ngModel)]=\"model.phone\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='email'>Contact Email:</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='email' name='email' class='form-control' placeholder='Contact Email' required [(ngModel)]=\"model.email\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-4'>\r\n\t\t\t\t\t<label for='email'>Project Manager</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-8'>\r\n\t\t\t\t\t<input type='text' id='project_manager' name='project_manager' class='form-control' placeholder='Nissho Project Manager' required [(ngModel)]=\"model.project_manager\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row margin_top_15'>\r\n\t\t\t\t<div class='col-sm-12 text-center'>\r\n\t\t\t\t\t<button type='submit' class='btn btn-lg btn-success'>Save Changes</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/customers/form-customers/form-customers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/form-customers/form-customers.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCustomersComponent", function() { return FormCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");






var FormCustomersComponent = /** @class */ (function () {
    function FormCustomersComponent(route, router, ssv, adms) {
        this.route = route;
        this.router = router;
        this.ssv = ssv;
        this.adms = adms;
    }
    FormCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        var clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        //Load or create new form
        this.route.params.subscribe(function (params) {
            _this.deptId = params['deptId'];
            _this.customerId = params['id'];
            if (_this.customerId) {
                //Load Customer detail
                _this.getModel();
            }
            else {
                //Create a new form
                _this.model = {
                    department_id: _this.deptId,
                    client_id: clientId
                };
            }
        });
    };
    FormCustomersComponent.prototype.DeleteCustomer = function () {
        var _this = this;
        if (!this.customerId)
            return;
        this.adms.deleteCustomer(this.customerId)
            .subscribe(function (data) {
            _this.ssv.showSuccess('Client successfully deleted!');
            _this.router.navigate(['/view-customers/' + _this.deptId]);
        }, function (error) {
            // Display error message
            _this.ssv.showError('Unable to delete Client!');
            console.log(error);
        });
    };
    FormCustomersComponent.prototype.onSubmit = function () {
        var _this = this;
        //Update DB if exists, or create a new one otherwise
        if (this.customerId) {
            this.adms.updateCustomer(this.model, this.customerId)
                .subscribe(function (data) {
                _this.ssv.showSuccess('Client successfully updated!');
                _this.router.navigate(['/view-customers/' + _this.deptId]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update Client!');
                console.log(error);
            });
        }
        else {
            this.adms.newCustomer(this.model)
                .subscribe(function (data) {
                // Page redirect when getting response
                _this.ssv.showSuccess('Client successfully added!');
                _this.router.navigate(['/view-customers/' + _this.deptId]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to add new client!');
                console.log(error);
            });
        }
    };
    FormCustomersComponent.prototype.getModel = function () {
        var _this = this;
        this.adms.getCustomer(this.customerId)
            .subscribe(function (model) { return _this.model = model; });
    };
    Object.defineProperty(FormCustomersComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FormCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-customers',
            template: __webpack_require__(/*! ./form-customers.component.html */ "./src/app/customers/form-customers/form-customers.component.html"),
            styles: [__webpack_require__(/*! ./form-customers.component.css */ "./src/app/customers/form-customers/form-customers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"]])
    ], FormCustomersComponent);
    return FormCustomersComponent;
}());



/***/ }),

/***/ "./src/app/customers/view-customers/view-customers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/view-customers/view-customers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy92aWV3LWN1c3RvbWVycy92aWV3LWN1c3RvbWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customers/view-customers/view-customers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/view-customers/view-customers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Master Contact List</h3>\r\n   \t<div class=\"col-sm-6 text-right\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/form-customers/{{deptId}}\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> Add Client\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-6 text-left\">\r\n\t\t<button type=\"button\" *ngIf=\"!is_downloading_list\" class=\"btn btn-info btn-sm button\" (click)=\"downloadAll()\">Download All</button>\r\n\t\t<span *ngIf=\"is_downloading_list\" class=\"loader\"></span>\r\n\t</div>\r\n\t<div class=\"col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Project or Job #\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Project</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Job #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Management</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Contact</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.project_name}}</td>\r\n                    <td class=\"col-sm-2\">{{item.jobnum}}</td>\r\n                    <td class=\"col-sm-2\">{{item.management}}</td>\r\n                    <td class=\"col-sm-3\">{{item.contact}}<br>{{item.phone}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                        <a routerLink=\"/form-customers/{{deptId}}/{{item.id}}\">Details</a>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/customers/view-customers/view-customers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/view-customers/view-customers.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersComponent", function() { return ViewCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);







var ViewCustomersComponent = /** @class */ (function () {
    function ViewCustomersComponent(route, adms, ssv, cds) {
        this.route = route;
        this.adms = adms;
        this.ssv = ssv;
        this.cds = cds;
    }
    ViewCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.deptId = params['deptId'];
            _this.populateItems();
        });
        this.is_downloading_list = false;
        //Date
        var date = new Date();
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
    };
    ViewCustomersComponent.prototype.populateItems = function () {
        var _this = this;
        this.adms.getCustomersByDept(this.deptId)
            .subscribe(function (itemsList) {
            //Sort by name (ascending)
            if (itemsList) {
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.project_name > b.project_name ? 1 : a.project_name < b.project_name ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewCustomersComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (!x.jobnum || !x.project_name ||
                    x.jobnum.toLowerCase().includes(input.toLowerCase())) ||
                    x.project_name.toLowerCase().includes(input.toLowerCase());
            });
        }
    };
    ViewCustomersComponent.prototype.downloadAll = function () {
        var _this = this;
        this.is_downloading_list = true;
        this.cds.downloadCustomerListXls()
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(res, 'CustomerList.xls', { type: 'application/vnd.ms-excel' });
            _this.is_downloading_list = false;
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to download list!');
            _this.is_downloading_list = false;
        });
    };
    ViewCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-customers',
            template: __webpack_require__(/*! ./view-customers.component.html */ "./src/app/customers/view-customers/view-customers.component.html"),
            styles: [__webpack_require__(/*! ./view-customers.component.css */ "./src/app/customers/view-customers/view-customers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_4__["CustomDownloadServiceService"]])
    ], ViewCustomersComponent);
    return ViewCustomersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-content/dashboard-content.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-content/dashboard-content.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1jb250ZW50L2Rhc2hib2FyZC1jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-content/dashboard-content.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard-content/dashboard-content.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"suc_msg\" *ngIf=\"success\" class=\"alert alert-success alert-dismissable text-center\">\r\n    <a class=\"close\" data-dismiss=\"alert\">&times;</a>\r\n    <strong>{{success}}</strong>\r\n</div>\r\n<div id=\"err_msg\" *ngIf=\"error\" class=\"alert alert-danger alert-dismissable text-center\">\r\n    <a class=\"close\" data-dismiss=\"alert\">&times;</a>\r\n    <strong>{{error}}</strong>\r\n</div>\r\n\r\n<input type=\"hidden\" id=\"last_page\" value=\"nav_fillforms_pool_chem\"/>\r\n<script>\r\n    let last_page = document.getElementById(\"last_page\").value;\r\n    $('.dashboard_content_nav').css(\"display\",\"none\");\r\n    $('#'+last_page+\"_container\").css(\"display\",\"block\");\r\n</script>"

/***/ }),

/***/ "./src/app/dashboard-content/dashboard-content.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-content/dashboard-content.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContentComponent", function() { return DashboardContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardContentComponent = /** @class */ (function () {
    function DashboardContentComponent() {
        this.success = 'Success message here';
        this.error = 'Error!!';
    }
    DashboardContentComponent.prototype.ngOnInit = function () {
    };
    DashboardContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-content',
            template: __webpack_require__(/*! ./dashboard-content.component.html */ "./src/app/dashboard-content/dashboard-content.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-content.component.css */ "./src/app/dashboard-content/dashboard-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardContentComponent);
    return DashboardContentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-sidebar/dashboard-sidebar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-sidebar/dashboard-sidebar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1zaWRlYmFyL2Rhc2hib2FyZC1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-sidebar/dashboard-sidebar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard-sidebar/dashboard-sidebar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-nav\">\r\n    <div class=\"navbar navbar-default\" role=\"navigation\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".sidebar-navbar-collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <span class=\"visible-xs navbar-brand\">Actions:</span>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse sidebar-navbar-collapse sidebarStyle\">\r\n            <ul class=\"nav navbar-nav\">\r\n            <ng-container *ngIf=\"authorizedFeatures\">\r\n                <!-- 1. Administrator -->\r\n                <ng-container *ngIf=\"authorizedFeatures.includes(6)\">\r\n                <li id=\"nav_form_user_management\" class=\"form_nav\">\r\n                    <a>User Management <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_users\" class=\"form_submenu user_management_submenu\" routerLink=\"/view-employees\" routerLinkActive=\"active\">\r\n                    <a>Users</a>\r\n                </li>\r\n                <li id=\"nav_users_deactivated\" class=\"form_submenu user_management_submenu\" routerLink=\"/view-employees/inactive\" routerLinkActive=\"active\">\r\n                    <a>Deactivated Users</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 2. Management -->\r\n                <ng-container *ngIf=\"roleId == '2'\">\r\n                <li id=\"nav_form_wop\" class=\"form_nav\">\r\n                    <a>Work Proposals\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_wop_pending\" class=\"form_submenu wop_submenu\" routerLink=\"/view-m-work-order/2\" routerLinkActive=\"active\">\r\n                    <a>Pending Approval</a>\r\n                </li>\r\n                <li id=\"nav_wop_active_not_scheduled\" class=\"form_submenu wop_submenu\" routerLink=\"/view-m-work-order/4\" routerLinkActive=\"active\">\r\n                    <a>Assign Work</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_wo\" class=\"form_nav\">\r\n                    <a>Work Order\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_wo_pending\" class=\"form_submenu wo_submenu\" routerLink=\"/view-work-order/2\" routerLinkActive=\"active\">\r\n                    <a>Pending Approval</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_walkthrough\" class=\"form_nav\">\r\n                    <a>Walkthrough\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_walkthrough_pending\" class=\"form_submenu walkthrough_submenu\" routerLink=\"/view-walkthrough/2\" routerLinkActive=\"active\">\r\n                    <a>Draft</a>\r\n                </li>\r\n                <li id=\"nav_walkthrough_assign\" class=\"form_submenu walkthrough_submenu\" routerLink=\"/view-walkthrough/3\" routerLinkActive=\"active\">\r\n                    <a>Punchlist</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_app_statistics\" class=\"form_nav\" routerLink=\"/view-data-usage\" routerLinkActive=\"active\">\r\n                    <a>App Statistics</a>\r\n                </li>\r\n                <li id=\"nav_app_updates\" class=\"form_nav\" routerLink=\"/app-updates\" routerLinkActive=\"active\">\r\n                    <a>App Updates</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 3. Maintenance Project Manager -->\r\n                <ng-container *ngIf=\"roleId == '3'\">\r\n                <li id=\"nav_form_walkthrough\" class=\"form_nav\">\r\n                    <a>Walkthrough\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_walkthrough_pending\" class=\"form_submenu walkthrough_submenu\" routerLink=\"/view-walkthrough/2\" routerLinkActive=\"active\">\r\n                    <a>Draft</a>\r\n                </li>\r\n                <li id=\"nav_walkthrough_assign\" class=\"form_submenu walkthrough_submenu\" routerLink=\"/view-walkthrough/3\" routerLinkActive=\"active\">\r\n                    <a>Punchlist</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_wop\" class=\"form_nav\">\r\n                    <a>Work Order\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n\t\t\t\t<li id=\"nav_wop_draft\" class=\"form_submenu wop_submenu\" routerLink=\"/view-m-work-order/1\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a>Drafts</a>\r\n\t\t\t\t</li>\r\n                <li id=\"nav_wop_pending\" class=\"form_submenu wop_submenu\" routerLink=\"/view-m-work-order/2\" routerLinkActive=\"active\">\r\n                    <a>Pending Approval</a>\r\n                </li>\r\n                <li id=\"nav_wop_active\" class=\"form_submenu wop_submenu\" routerLink=\"/view-m-work-order/5\" routerLinkActive=\"active\">\r\n                    <a>In Progress</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_new_po\" class=\"form_nav\">\r\n\t\t\t\t\t<a>New PO<span class=\"glyphicon glyphicon-plus pull-right\"></span></a>\r\n\t\t\t\t</li>\r\n                \r\n                <li id=\"nav_app_updates\" class=\"form_nav\" routerLink=\"/app-updates\" routerLinkActive=\"active\">\r\n                    <a>App Updates</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 4. Irrigation Manager -->\r\n                <ng-container *ngIf=\"roleId == '4'\">\r\n                <li id=\"nav_form_newform\" class=\"form_nav\">\r\n                    <a>New Form\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_newform_irf\" class=\"form_submenu newform_submenu\" routerLink=\"/irrigation-repair\" routerLinkActive=\"active\">\r\n                    <a>Irrigation Repair<span class=\"glyphicon glyphicon-plus pull-right\"></span></a>\r\n                </li>\r\n                <li id=\"nav_newform_po\" class=\"form_submenu newform_submenu\" routerLink=\"/purchase-order\" routerLinkActive=\"active\">\r\n                    <a>Purchase Order<span class=\"glyphicon glyphicon-plus pull-right\"></span></a>\r\n                </li>\r\n                \r\n\t\t\t\t<li id=\"nav_form_drafts\" class=\"form_nav\">\r\n                    <a>Drafts\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_drafts_irf\" class=\"form_submenu drafts_submenu\" routerLink=\"/view-irrigation-repair/1\" routerLinkActive=\"active\">\r\n                    <a>Irrigation Repair</a>\r\n                </li>\r\n                <li id=\"nav_drafts_po\" class=\"form_submenu drafts_submenu\" routerLink=\"/view-purchase-order/1\" routerLinkActive=\"active\">\r\n                    <a>Purchase Order</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_irfapproval\" class=\"form_nav\" routerLink=\"/view-irrigation-repair/2\" routerLinkActive=\"active\">\r\n                    <a>Pending Approval/ Revision</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_sent\" class=\"form_nav\">\r\n                    <a>Sent\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_sent_irf\" class=\"form_submenu sent_submenu\" routerLink=\"/view-irrigation-repair/3\" routerLinkActive=\"active\">\r\n                    <a>Irrigation Repair</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_app_updates\" class=\"form_nav\" routerLink=\"/app-updates\" routerLinkActive=\"active\">\r\n                    <a>App Updates</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 6. Technician -->\r\n                <ng-container *ngIf=\"roleId == '6'\">\r\n                <li id=\"nav_form_newform\" class=\"form_nav\">\r\n                    <a>New Form\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_newform_irf\" class=\"form_submenu newform_submenu\" routerLink=\"/irrigation-repair\" routerLinkActive=\"active\">\r\n                    <a>Irrigation Repair<span class=\"glyphicon glyphicon-plus pull-right\"></span></a>\r\n                </li>\r\n                \r\n\t\t\t\t<li id=\"nav_form_drafts\" class=\"form_nav\">\r\n                    <a>Drafts\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_drafts_irf\" class=\"form_submenu drafts_submenu\" routerLink=\"/view-irrigation-repair/1\" routerLinkActive=\"active\">\r\n                    <a>Irrigation Repair</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_app_updates\" class=\"form_nav\" routerLink=\"/app-updates\" routerLinkActive=\"active\">\r\n                    <a>App Updates</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 5. Office Manager -->\r\n                <ng-container *ngIf=\"roleId == '5'\">\r\n                <li id=\"nav_form_actions\" class=\"form_nav\">\r\n                    <a>Actions <span *ngIf=\"(ssv.alerts.wt_3 + ssv.alerts.irf_3) > 0\" class=\"badge badge-pill badge-error\">{{ssv.alerts.wt_3 + ssv.alerts.irf_3}}</span>\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_actions_punchlist\" class=\"form_submenu actions_submenu\" routerLink=\"/view-walkthrough/3\" routerLinkActive=\"active\">\r\n                    <a>Punchlists <span *ngIf=\"ssv.alerts.wt_3\" class=\"pull-right alert_number_style\">({{ssv.alerts.wt_3}})</span></a>\r\n                </li>\r\n                <li id=\"nav_actions_assign_jobnum\" class=\"form_submenu actions_submenu\" routerLink=\"/view-irrigation-repair/3\" routerLinkActive=\"active\">\r\n                    <a>Assign Job # <span *ngIf=\"ssv.alerts.irf_3\" class=\"pull-right alert_number_style\">({{ssv.alerts.irf_3}})</span></a>\r\n                </li>\r\n                <li id=\"nav_actions_awaiting_po\" class=\"form_submenu actions_submenu\" routerLink=\"/view-purchase-order/2\" routerLinkActive=\"active\">\r\n                    <a>Awaiting PO Parts</a>\r\n                </li>\r\n                <li id=\"nav_actions_assign_jobnum\" class=\"form_submenu actions_submenu\" routerLink=\"/view-work-order/3\" routerLinkActive=\"active\">\r\n                    <a>Send to Billing</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_new_wo\" class=\"form_nav\" routerLink=\"/start-job\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a>New Work Order</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id=\"nav_view_wo\" class=\"form_nav\" routerLink=\"/view-work-order\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a>Work Orders <span *ngIf=\"ssv.alerts.wo_1 > 0\" class=\"badge badge-pill badge-error\">{{ssv.alerts.wo_1}}</span>\r\n                    </a>\r\n\t\t\t\t\r\n\t\t\t\t<li id=\"nav_form_forms\" class=\"form_nav\">\r\n                    <a>Forms\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_forms_po\" class=\"form_submenu forms_submenu\" routerLink=\"/view-purchase-order/2\" routerLinkActive=\"active\">\r\n                    <a>Purchase Order</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_inventory\" class=\"form_nav\">\r\n                    <a>Inventory <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_inventory_materials\" class=\"form_submenu inventory_submenu\" routerLink=\"/view-materials/1\" routerLinkActive=\"active\">\r\n                    <a>Parts List</a>\r\n                </li>\r\n                <li id=\"nav_inventory_containers\" class=\"form_submenu inventory_submenu\" routerLink=\"/view-containers/1\" routerLinkActive=\"active\">\r\n                    <a>Trucks</a>\r\n                </li>\r\n                <li id=\"nav_inventory_st\" class=\"form_submenu inventory_submenu\" routerLink=\"/view-monthly-stock\" routerLinkActive=\"active\">\r\n                    <a>Stock Transfer</a>\r\n                </li>\r\n                <li id=\"nav_inventory_pricing\" class=\"form_submenu inventory_submenu\" routerLink=\"/update-constants\" routerLinkActive=\"active\">\r\n                    <a>Pricing</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_customers\" class=\"form_nav\">\r\n                    <a>Contact List<span class=\"glyphicon glyphicon-chevron-down pull-right\"></span></a>\r\n                </li>\r\n                <li id=\"nav_customers_irrigation\" class=\"form_submenu customers_submenu\" routerLink=\"/view-customers/2\" routerLinkActive=\"active\">\r\n                    <a>Irrigation/Maintenance</a>\r\n                </li>\r\n                <li id=\"nav_customers_janitorial\" class=\"form_submenu customers_submenu\" routerLink=\"/view-customers/6\" routerLinkActive=\"active\">\r\n                    <a>Janitorial</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 7. Customer Service -->\r\n                <ng-container *ngIf=\"roleId == '7'\">\r\n                <li id=\"nav_form_actions\" class=\"form_nav\">\r\n                    <a>Actions <span *ngIf=\"ssv.alerts.wt_3 > 0\" class=\"badge badge-pill badge-error\">{{ssv.alerts.wt_3}}</span>\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_actions_punchlist\" class=\"form_submenu actions_submenu\" routerLink=\"/view-walkthrough/3\" routerLinkActive=\"active\">\r\n                    <a>Punchlists <span *ngIf=\"ssv.alerts.wt_3\" class=\"pull-right alert_number_style\">({{ssv.alerts.wt_3}})</span></a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_customers\" class=\"form_nav\">\r\n                    <a>Contact List<span class=\"glyphicon glyphicon-chevron-down pull-right\"></span></a>\r\n                </li>\r\n                <li id=\"nav_customers_irrigation\" class=\"form_submenu customers_submenu\" routerLink=\"/view-customers/2\" routerLinkActive=\"active\">\r\n                    <a>Irrigation/Maintenance</a>\r\n                </li>\r\n                <li id=\"nav_customers_janitorial\" class=\"form_submenu customers_submenu\" routerLink=\"/view-customers/6\" routerLinkActive=\"active\">\r\n                    <a>Janitorial</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 21. Irrigation Staff -->\r\n                <ng-container *ngIf=\"roleId == '21'\">\r\n                <li id=\"nav_form_actions\" class=\"form_nav\">\r\n                    <a>Actions <span *ngIf=\"ssv.alerts.irf_3 > 0\" class=\"badge badge-pill badge-error\">{{ssv.alerts.irf_3}}</span>\r\n                    <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_actions_punchlist\" class=\"form_submenu actions_submenu\" routerLink=\"/view-walkthrough/3\" routerLinkActive=\"active\">\r\n                    <a>Punchlists <span *ngIf=\"ssv.alerts.wt_3\" class=\"pull-right alert_number_style\">({{ssv.alerts.wt_3}})</span></a>\r\n                </li>\r\n                <li id=\"nav_actions_assign_jobnum\" class=\"form_submenu actions_submenu\" routerLink=\"/view-irrigation-repair/3\" routerLinkActive=\"active\">\r\n                    <a>Assign Job # <span *ngIf=\"ssv.alerts.irf_3\" class=\"pull-right alert_number_style\">({{ssv.alerts.irf_3}})</span></a>\r\n                </li>\r\n                <li id=\"nav_actions_awaiting_po\" class=\"form_submenu actions_submenu\" routerLink=\"/view-purchase-order/2\" routerLinkActive=\"active\">\r\n                    <a>Awaiting PO Parts</a>\r\n                </li>\r\n                <li id=\"nav_actions_assign_jobnum\" class=\"form_submenu actions_submenu\" routerLink=\"/view-work-order/3\" routerLinkActive=\"active\">\r\n                    <a>Send to Billing</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_new_wo\" class=\"form_nav\" routerLink=\"/start-job\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a>New Work Order</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li id=\"nav_view_wo\" class=\"form_nav\" routerLink=\"/view-work-order\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<a>Work Orders <span *ngIf=\"ssv.alerts.wo_1 > 0\" class=\"badge badge-pill badge-error\">{{ssv.alerts.wo_1}}</span>\r\n                    </a>\r\n                <li id=\"nav_view_po\" class=\"form_nav\" routerLink=\"/view-purchase-order/2\" routerLinkActive=\"active\">\r\n                    <a>Purchase Order</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_inventory\" class=\"form_nav\">\r\n                    <a>Inventory <span class=\"glyphicon glyphicon-chevron-down pull-right\"></span>\r\n                    </a>\r\n                </li>\r\n                <li id=\"nav_inventory_materials\" class=\"form_submenu inventory_submenu\" routerLink=\"/view-materials/1\" routerLinkActive=\"active\">\r\n                    <a>Parts List</a>\r\n                </li>\r\n                <li id=\"nav_inventory_containers\" class=\"form_submenu inventory_submenu\" routerLink=\"/view-containers/1\" routerLinkActive=\"active\">\r\n                    <a>Trucks</a>\r\n                </li>\r\n                <li id=\"nav_inventory_st\" class=\"form_submenu inventory_submenu\" routerLink=\"/view-monthly-stock\" routerLinkActive=\"active\">\r\n                    <a>Stock Transfer</a>\r\n                </li>\r\n                <li id=\"nav_inventory_pricing\" class=\"form_submenu inventory_submenu\" routerLink=\"/update-constants\" routerLinkActive=\"active\">\r\n                    <a>Pricing</a>\r\n                </li>\r\n                \r\n                <li id=\"nav_form_customers\" class=\"form_nav\">\r\n                    <a>Contact List<span class=\"glyphicon glyphicon-chevron-down pull-right\"></span></a>\r\n                </li>\r\n                <li id=\"nav_customers_irrigation\" class=\"form_submenu customers_submenu\" routerLink=\"/view-customers/2\" routerLinkActive=\"active\">\r\n                    <a>Irrigation/Maintenance</a>\r\n                </li>\r\n                <li id=\"nav_customers_janitorial\" class=\"form_submenu customers_submenu\" routerLink=\"/view-customers/6\" routerLinkActive=\"active\">\r\n                    <a>Janitorial</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 12. Janitorial Manager -->\r\n                <ng-container *ngIf=\"roleId == '12'\">\r\n                <li id=\"nav_project_overview\" class=\"form_nav\" routerLink=\"/stock-transfer-statistics\" routerLinkActive=\"active\">\r\n                    <a>Project Overview</a>\r\n                </li>\r\n                <li id=\"nav_materials\" class=\"form_nav\" routerLink=\"/view-materials/6\" routerLinkActive=\"active\">\r\n                    <a>Materials</a>\r\n                </li>\r\n                <li id=\"nav_trucks\" class=\"form_nav\" routerLink=\"/view-containers/6\" routerLinkActive=\"active\">\r\n                    <a>Trucks</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- 13. Porter -->\r\n                <ng-container *ngIf=\"roleId == '13'\">\r\n                <li id=\"nav_stock_transfer\" class=\"form_nav\" routerLink=\"/view-stock-transfer\" routerLinkActive=\"active\">\r\n                    <a>Stock Transfers</a>\r\n                </li>\r\n                <li id=\"nav_app_updates\" class=\"form_nav\" routerLink=\"/app-updates\" routerLinkActive=\"active\">\r\n                    <a>App Updates</a>\r\n                </li>\r\n                </ng-container>\r\n                \r\n                <!-- General -->\r\n                <li id=\"nav_bugs\" class=\"form_nav\">\r\n\t\t\t\t\t<a routerLink=\"/bug-report\" routerLinkActive=\"active\"><i class=\"fas fa-bug\"></i> Bug/Error Report</a>\r\n\t\t\t\t</li>\r\n            </ng-container>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<script>\r\n    //By default, hide all submenu\r\n\t$( \".form_submenu\" ).toggle();\r\n</script>"

/***/ }),

/***/ "./src/app/dashboard-sidebar/dashboard-sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-sidebar/dashboard-sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidebarComponent", function() { return DashboardSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");





var DashboardSidebarComponent = /** @class */ (function () {
    // TODO: populate form types of this client
    function DashboardSidebarComponent(fs, as, aus, router, ssv) {
        this.fs = fs;
        this.as = as;
        this.aus = aus;
        this.router = router;
        this.ssv = ssv;
    }
    DashboardSidebarComponent.prototype.ngOnInit = function () {
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        //Get counts for alert
        this.ssv.countForm('wt_3', '49', null, '3');
        this.ssv.countForm('irf_3', '47', null, '3');
        this.ssv.countForm('wo_1', '45', null, '1');
        this.retrieveFormtypes();
        this.retrieveRolePermissions();
        this.retrieveFormPermissions();
    };
    DashboardSidebarComponent.prototype.retrieveFormtypes = function () {
        var _this = this;
        this.fs.getFormTypes()
            .subscribe(function (itemsList) {
            _this.formsList = itemsList;
            if (!_this.authorizedForms && _this.allowedList) {
                _this.authorizedForms = itemsList.filter(function (x) { return _this.allowedList.includes(x.id); });
            }
            //Remove refresh Count from localStorage
            localStorage.removeItem("numRefresh");
        }, function (error) {
            //Refresh once.
            var numRefresh = localStorage.getItem("numRefresh");
            if (numRefresh) {
                if (+numRefresh >= 3) {
                    localStorage.removeItem("numRefresh");
                    _this.router.navigate(['/login']);
                }
                else {
                    localStorage.setItem("numRefresh", "" + (+localStorage.getItem("numRefresh") + 1));
                    // @ts-ignore
                    Android.reloadWebview();
                    window.location.reload();
                }
            }
            else {
                localStorage.setItem("numRefresh", "1");
                // @ts-ignore
                Android.reloadWebview();
                window.location.reload();
            }
        });
    };
    DashboardSidebarComponent.prototype.retrieveRolePermissions = function () {
        var _this = this;
        this.aus.getRolePermissions(this.roleId)
            .subscribe(function (itemsList) {
            _this.authorizedFeatures = itemsList.map(function (x) { return x.feature_id; });
        }, function (error) {
        });
    };
    DashboardSidebarComponent.prototype.retrieveFormPermissions = function () {
        var _this = this;
        this.aus.getFormPermissions(this.roleId)
            .subscribe(function (itemsList) {
            _this.allowedList = itemsList.map(function (x) { return x.form_type_id; });
            if (!_this.authorizedForms && _this.formsList) {
                _this.authorizedForms = _this.formsList.filter(function (x) { return _this.allowedList.includes(x.id); });
            }
        }, function (error) {
        });
    };
    DashboardSidebarComponent.prototype.countForm = function (formId) {
        return '';
    };
    DashboardSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-sidebar',
            template: __webpack_require__(/*! ./dashboard-sidebar.component.html */ "./src/app/dashboard-sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidebar.component.css */ "./src/app/dashboard-sidebar/dashboard-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-topbar/dashboard-topbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-topbar/dashboard-topbar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC10b3BiYXIvZGFzaGJvYXJkLXRvcGJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard-topbar/dashboard-topbar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-topbar/dashboard-topbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header_logo\" class=\"col-xs-3 col-sm-6\">\r\n    <div class=\"header_title row\">\r\n        <div class=\"col-xs-12 col-sm-3 col-lg-2 margin_top_15\">\r\n            <img src=\"./assets/images/nissho_logo_round.png\" class=\"nissho_logo\">\r\n        </div>\r\n        <div class=\"col-sm-9 col-lg-10 mobile_tablet_hidden white_text\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <h2>Nissho of California</h2>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col header_small_text header_subtitle_role\">\r\n                Workflow Management System\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-xs-3 col-sm-3 white_text text-center\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h2 *ngIf=\"user\">Hello, {{user.name}}</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mobile_hidden\">\r\n        <div *ngIf=\"user\" class=\"col header_small_text\">\r\n            {{user.role}}\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-xs-6 col-sm-3 text-right white_text pad_right_30\">\r\n    <h2 class=\"header_content_height\">\r\n    \t<a id=\"topbar_refresh\" class=\"glyphicon glyphicon-refresh pad_right_30 topbar_button hidden-lg\" (click)=\"onRefresh()\"></a>\r\n    \t<a routerLink=\"/form-employee/{{user.uid}}\" routerLinkActive=\"active\" id=\"topbar_profile\" class=\"pad_right_30 topbar_button\">\r\n        \t<span class=\"glyphicon glyphicon-user\"></span>\r\n        \t<span class=\"hidden-xs hidden-sm\"> My Profile</span>\r\n       \t</a>\r\n        <a [routerLink]=\"['/login']\" class=\"topbar_button\" id=\"topbar_logout\">\r\n        \t<span class=\"glyphicon glyphicon-log-out\"></span>\r\n        \t<span class=\"hidden-xs hidden-sm\"> Logout</span>\r\n       \t</a>\r\n    </h2>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard-topbar/dashboard-topbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-topbar/dashboard-topbar.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardTopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTopbarComponent", function() { return DashboardTopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");



var DashboardTopbarComponent = /** @class */ (function () {
    function DashboardTopbarComponent(auts) {
        this.auts = auts;
    }
    DashboardTopbarComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
        this.setRole(this.user.role_id);
    };
    DashboardTopbarComponent.prototype.setRole = function (rid) {
        var _this = this;
        this.auts.getRole(rid)
            .subscribe(function (role) { return _this.user.role = role.title; });
    };
    DashboardTopbarComponent.prototype.onRefresh = function () {
        var userAgent = window.navigator.userAgent.toLowerCase(), safari = /safari/.test(userAgent), ios = /iphone|ipod|ipad/.test(userAgent);
        if (ios) {
            window.location.reload();
        }
        else {
            // @ts-ignore
            Android.reloadWebview();
        }
        ;
    };
    DashboardTopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-topbar',
            template: __webpack_require__(/*! ./dashboard-topbar.component.html */ "./src/app/dashboard-topbar/dashboard-topbar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-topbar.component.css */ "./src/app/dashboard-topbar/dashboard-topbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], DashboardTopbarComponent);
    return DashboardTopbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"noscroll container-fluid\">\r\n\t<!-- GLOBAL MODALS -->\r\n\t<div class=\"modal\" id=\"uploadFormModal\" tabindex=\"-1\" [ngStyle]=\"{'display':ssv.uploadModalActive}\">\r\n\t  <div class=\"modal-dialog\" role=\"document\" [ngStyle]=\"{'display':ssv.uploadModalActive}\">\r\n\t    <div class=\"modal-content\">\r\n\t      <div class=\"modal-header text-center\">\r\n\t      \t<h4 class=\"modal-title\"><b>Just a moment</b></h4>\r\n\t      </div>\r\n\t      <div class=\"modal-body text-center margin_top_15 margin_bottom_15\">\r\n         \tSaving your form...\r\n\t      </div>\r\n\t    </div><!-- /.modal-content -->\r\n\t  </div><!-- /.modal-dialog -->\r\n\t</div><!-- /.modal -->\r\n\t\r\n    <!-- TOPBAR -->\r\n    <div id=\"header_row\" class=\"row\">\r\n        <app-dashboard-topbar></app-dashboard-topbar>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!-- SIDEBAR -->\r\n        <div id=\"dashboard_nav\" class=\"col-xs-12 col-sm-3\">\r\n            <app-dashboard-sidebar></app-dashboard-sidebar>\r\n        </div>\r\n        <!-- CONTENT -->\r\n        <div id=\"dashboard_content\" class=\"col-xs-12 col-sm-9\">\r\n            <div id=\"suc_msg\" *ngIf=\"success\" class=\"alert alert-success alert-dismissable text-center\">\r\n                <a class=\"close\" onclick=\"$('#suc_msg').hide()\">&times;</a>\r\n                <strong>{{success}}</strong>\r\n            </div>\r\n            <div id=\"err_msg\" *ngIf=\"error\" class=\"alert alert-danger alert-dismissable text-center\">\r\n            \t<a class=\"close\" onclick=\"$('#err_msg').hide()\">&times;</a>\r\n                <strong>{{error}}</strong>\r\n            </div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-user-idle */ "./node_modules/angular-user-idle/fesm5/angular-user-idle.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/shared.service */ "./src/app/_services/shared.service.ts");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userIdle, router, auth, ssv) {
        this.userIdle = userIdle;
        this.router = router;
        this.auth = auth;
        this.ssv = ssv;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check session. Redirect to login page if it doesn't exist
        if (!localStorage.getItem('currentUser')) {
            this.auth.logout();
            this.router.navigate(['/login']);
            return;
        }
        this.session = JSON.parse(localStorage.getItem('currentUser'));
        // Start watching for user inactivity.
        this.userIdle.startWatching();
        // Start watching when user idle is starting.
        this.userIdle.onTimerStart().subscribe(function (count) {
            // if (!this.inactiveUser) {
            //     this.inactiveUser = true;
            //     this.popupTimeoutWarning();
            // }
        });
        // Logs out when time is up.
        this.userIdle.onTimeout().subscribe(function () {
            // remove user from local storage to log user out
            _this.auth.logout();
            _this.router.navigate(['/login']);
        });
        // Send a keepalive request every 10 minutes
        this.userIdle.ping$.subscribe(function () {
            // Check session. Redirect to login page if it doesn't exist
            if (localStorage.getItem('currentUser') === null) {
                _this.auth.logout();
                _this.router.navigate(['/login']);
            }
            // Keepalive using getrole() request
            _this.auth.getRole(_this.session.user.role_id).subscribe(function (role) { }, function (error) {
                _this.auth.logout();
                _this.router.navigate(['/login']);
            });
        });
        // Open default page based on role
        switch (this.session.user.role_id) {
            //Admin
            case 1:
                this.router.navigate(['/view-employees']);
                break;
            //Management/VP (Tom), Maintenance Project manager
            case 2:
            case 3:
                this.router.navigate(['/view-walkthrough/2']);
                break;
            //Office Manager (Kalyn), Customer Service (Ayla)
            case 5:
            case 7:
                this.router.navigate(['/view-walkthrough/3']);
                break;
            //Irrigation Manager (Dan)
            case 4:
                this.router.navigate(['/view-irrigation-repair/2']);
                break;
            //Irrigation Technician
            case 6:
                this.router.navigate(['/view-irrigation-repair/1']);
                break;
            //Irrigation Staff (Jose Reyes)
            case 21:
                this.router.navigate(['/view-irrigation-repair/3']);
                break;
            //Purchasing Staff, Construction Office Staff
            case 8:
            case 11:
                this.router.navigate(['/view-purchase-order']);
                break;
            //Accounting Staff
            case 9:
                this.router.navigate(['/view-work-order']);
                break;
            //Construction PM
            case 10:
                this.router.navigate(['/view-c-work-order']);
                break;
            //Janitorial Manager
            case 12:
                this.router.navigate(['/view-materials/6']);
                break;
            //Porter
            case 13:
                this.router.navigate(['/view-stock-transfer/1']);
                break;
        }
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.userIdle.stopTimer();
        this.userIdle.stopWatching();
    };
    DashboardComponent.prototype.clicked = function () {
        this.userIdle.stopTimer();
    };
    Object.defineProperty(DashboardComponent.prototype, "success", {
        get: function () {
            return this.ssv.sharedNode.success;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "error", {
        get: function () {
            return this.ssv.sharedNode.error;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DashboardComponent.prototype, "clicked", null);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_user_idle__WEBPACK_IMPORTED_MODULE_2__["UserIdleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2ZpbGwvaXJyaWdhdGlvbi1yZXBhaXItcGFydHMvaXJyaWdhdGlvbi1yZXBhaXItcGFydHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 text-left\">\r\n\t\t\t<h3><a (click)=\"onSubmit()\" class=\"back_btn\"><span class=\"glyphicon glyphicon-chevron-left\"></span>{{FN_BACK_TO_FORM}}</a></h3>\r\n\t\t</div>\r\n\t</div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n        \t<form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n            <h2 style=\"margin-top:50px;\">\r\n                <span class=\"form_title\">{{FN_IRRIGATION_PARTS}}</span>\r\n            </h2>\r\n                <div class=\"form-group\" id=\"materials_container\">\r\n                   <label class=\"group_label_text\">{{FN_MATERIAL_USED}}</label>\r\n              \t\t<div class=\"row\" *ngFor=\"let mat of matList; let i = index\">\r\n              \t\t\t<div class=\"col-xs-7 col-sm-7 pad_right_5\">\r\n          \t\t\t\t\t<input type=\"text\" id=\"matname{{i}}\" class='form-control' autocomplete=\"off\" placeholder=\"{{FN_SEARCH_ITEM}}\"\r\n          \t\t\t\t\t (input)=\"searchItem($event.target.value,i)\" value=\"{{getMaterialName(mat.material_id)}}\"/>\r\n          \t\t\t\t\t<input type=\"hidden\" name=\"material{{i}}\" [(ngModel)]=\"mat.material_id\" required/>\r\n          \t\t\t\t\t<div *ngIf=\"currFocus == i\" id=\"mat_suggestions{{i}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_part of suggestedPartsList\" (click)=\"onSuggestionSelected(i,sugg_part.id,sugg_part.description,sugg_part.price)\">\r\n\t\t\t\t\t\t\t\t\t<b>[{{sugg_part.id}}]</b> {{sugg_part.description}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-3 col-sm-3 pad_right_5 pad_left_none\">\r\n              \t\t\t\t<input type=\"text\" class='form-control' name=\"quantity{{i}}\" [(ngModel)]=\"mat.quantity\" placeholder=\"{{FN_QUANTITY}}\" required/>\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none\">\r\n             \t\t\t\t<a type=\"text\" class='btn btn-danger pull-right x_button' (click)=\"onDeleteMaterial(i)\">X</a>\r\n             \t\t\t</div>\r\n              \t\t</div>\r\n               </div>\r\n               <div class=\"form-group row margin_top_15 margin_bottom_form\">\r\n                    <div class=\"col-xs-12 col-sm-12\">\r\n                        <a id=\"ladd_row\" class=\"btn btn-default pull-left\" (click)=\"addMaterial()\"><b>+{{FN_ADD_MATERIAL}}</b></a>\r\n                    </div>\r\n               \t</div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IrrigationRepairPartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrrigationRepairPartsComponent", function() { return IrrigationRepairPartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");






var IrrigationRepairPartsComponent = /** @class */ (function () {
    function IrrigationRepairPartsComponent(route, fms, ssv, ims, router) {
        this.route = route;
        this.fms = fms;
        this.ssv = ssv;
        this.ims = ims;
        this.router = router;
        this.typeId = '47';
        //LANGUAGE SUPPORT
        this.FN_BACK_TO_FORM = "Back to Form";
        this.FN_MATERIAL = "Material";
        this.FN_MATERIAL_USED = "Materials Used";
        this.FN_ADD_MATERIAL = "Add Material";
        this.FN_QUANTITY = "qty";
        this.FN_SEARCH_ITEM = "Search part...";
        this.FN_IRRIGATION_PARTS = "Irrigation Parts";
    }
    IrrigationRepairPartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initFieldNames();
        this.getPartsList();
        this.route.params.subscribe(function (params) {
            _this.formId = params['formId'];
            if (_this.formId) {
                //Load Form
                _this.getModel();
            }
            else {
                //Form does not exist
                _this.router.navigate(['/']);
            }
        });
    };
    IrrigationRepairPartsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.model.process_number == '3') {
            this.router.navigate(['/irrigation-repair/' + this.formId]);
            return;
        }
        //Validate & Collect all materials
        this.matList.forEach(function (x) { return x.quantity ? x.quantity : x.quantity = '1'; });
        this.model.inputTables.materials = this.matList;
        //Upload form data to DB
        if (this.formId) {
            //Update an existing form
            this.fms.updateForm(this.model, this.typeId, this.formId)
                .subscribe(function (data) {
                _this.ssv.showSuccess('Form successfully updated!');
                _this.router.navigate(['/irrigation-repair/' + _this.formId]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update form!');
            });
        }
        else {
            //Form does not exist
            this.router.navigate(['/']);
        }
    };
    IrrigationRepairPartsComponent.prototype.getModel = function () {
        var _this = this;
        this.fms.getForm(this.typeId, this.formId)
            .subscribe(function (model) {
            model.created_date = _this.toHtmlDate(model.created_date);
            model.last_modified_date = _this.toHtmlDate(null);
            _this.model = model;
            _this.matList = model.inputTables.materials;
        });
    };
    //MULTI INPUT FIELDS    
    IrrigationRepairPartsComponent.prototype.addMaterial = function () {
        var mat = { 'form_id': this.typeId, 'material_id': '0' };
        if (!this.matList) {
            this.matList = [];
        }
        this.matList.push(mat);
    };
    IrrigationRepairPartsComponent.prototype.onDeleteMaterial = function (itemIdx) {
        var deletedItem = this.matList[itemIdx];
        this.matList.splice(itemIdx, 1);
        this.suggestedPartsList = [];
        //Delete from server
        var inputMap = { "inputMap": deletedItem };
        this.fms.deleteMultiInput(inputMap, this.typeId, 'materials', 'material_id')
            .subscribe(function (data) { }, function (error) { console.log(error); });
    };
    //MATERIAL SEARCH
    IrrigationRepairPartsComponent.prototype.getPartsList = function () {
        var _this = this;
        this.ims.getMaterials('1')
            .subscribe(function (list) {
            _this.partsList = list;
        });
    };
    /**
     * When a suggestion is selected, assign part ID to matList at position == itemNum
     * Empty out suggestions for future use
     * @param itemNum
     */
    IrrigationRepairPartsComponent.prototype.onSuggestionSelected = function (itemNum, matId, matName) {
        this.matList[itemNum].material_id = "" + matId;
        document.getElementById('matname' + itemNum).value = matName;
        this.suggestedPartsList = [];
    };
    IrrigationRepairPartsComponent.prototype.searchItem = function (input, itemIdx) {
        this.currFocus = itemIdx;
        if (!input) {
            this.suggestedPartsList = [];
            return;
        }
        if (this.partsList) {
            this.suggestedPartsList = this.partsList.filter(function (x) {
                return (x.description.toLowerCase().includes(input.toLowerCase())) ||
                    (x.id == input);
            });
        }
    };
    IrrigationRepairPartsComponent.prototype.getMaterialName = function (matId) {
        if (this.partsList) {
            var part = this.partsList.find(function (x) { return x.id == matId; });
            if (part) {
                return part.description;
            }
        }
        return '';
    };
    IrrigationRepairPartsComponent.prototype.toHtmlDate = function (datestr) {
        var date;
        if (datestr) {
            date = new Date(datestr);
        }
        else {
            date = new Date();
        }
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    IrrigationRepairPartsComponent.prototype.initFieldNames = function () {
        var language = JSON.parse(localStorage.getItem('currentUser')).user.language_preference;
        console.log('Language is ' + language);
        if (language === 'es') {
            this.FN_BACK_TO_FORM = "Regresar al Formulario";
            this.FN_MATERIAL = "Materiales";
            this.FN_MATERIAL_USED = "Materiales Utilizado";
            this.FN_ADD_MATERIAL = "Añadir Materiales";
            this.FN_QUANTITY = "Cantidad";
            this.FN_SEARCH_ITEM = "Buscar...";
            this.FN_IRRIGATION_PARTS = "Partes de Irrigación";
        }
    };
    Object.defineProperty(IrrigationRepairPartsComponent.prototype, "mdiagnostic", {
        //DIAGNOSTIC
        get: function () { return JSON.stringify(this.matList); },
        enumerable: true,
        configurable: true
    });
    IrrigationRepairPartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-irrigation-repair-parts',
            template: __webpack_require__(/*! ./irrigation-repair-parts.component.html */ "./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.html"),
            styles: [__webpack_require__(/*! ./irrigation-repair-parts.component.css */ "./src/app/forms/fill/irrigation-repair-parts/irrigation-repair-parts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["InventoryManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IrrigationRepairPartsComponent);
    return IrrigationRepairPartsComponent;
}());



/***/ }),

/***/ "./src/app/forms/fill/irrigation-repair/irrigation-repair.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/forms/fill/irrigation-repair/irrigation-repair.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label, .form_title {\r\n\tfont-weight: bold;\r\n}\r\n\r\nlabel.radio-inline {\r\n\tfont-weight: normal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZmlsbC9pcnJpZ2F0aW9uLXJlcGFpci9pcnJpZ2F0aW9uLXJlcGFpci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvZmlsbC9pcnJpZ2F0aW9uLXJlcGFpci9pcnJpZ2F0aW9uLXJlcGFpci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwsIC5mb3JtX3RpdGxlIHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxubGFiZWwucmFkaW8taW5saW5lIHtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/forms/fill/irrigation-repair/irrigation-repair.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/forms/fill/irrigation-repair/irrigation-repair.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6 text-left\">\r\n\t\t\t<h3><a (click)=\"onSubmitBack()\" class=\"back_btn\">\r\n\t\t\t<span class=\"glyphicon glyphicon-chevron-left\"></span> {{FN_SAVE_BACK}}\r\n\t\t\t</a></h3>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6 text-right\">\r\n\t\t\t<h3><a (click)=\"onSubmitPartsList()\" class=\"back_btn\">\r\n\t\t\t{{FN_PARTS_USED}} <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t</a></h3>\r\n\t\t</div>\r\n\t</div>\r\n   <div class=\"row\">\r\n       <div class=\"col-xs-12\">\r\n       \t<form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n           <h2 style=\"margin-top:50px;\" class=\"text-center\">\r\n                <span class=\"form_title\">{{FN_TITLE}}</span>\r\n            </h2>\r\n            \r\n                <div class=\"form-group\">\r\n                    <label class=\"group_label_text\">{{FN_JOB_INFO}}</label>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"csr_num\">CSR #</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"csr_num\" name=\"csr_num\" [(ngModel)]=\"model.inputMap.csr_num\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"job_num\">Job #</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"job_num\" name=\"job_num\" [(ngModel)]=\"model.inputMap.job_num\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"tech_name\">{{FN_TECH_NAME}}*</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"tech_name\" name=\"tech_name\" [(ngModel)]=\"model.inputMap.tech_name\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"job_name\">{{FN_JOB_NAME}}*</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"job_name\" name=\"job_name\" [(ngModel)]=\"model.inputMap.job_name\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"job_location\">{{FN_JOB_LOCATION}}*</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"job_location\" name=\"job_location\" [(ngModel)]=\"model.inputMap.job_location\" required>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"group_label_text\">{{FN_WORK_HOURS}}</label>\r\n                    <div class=\"row\">\r\n                    \t<div class=\"col-sm-4 col-xs-12\">\r\n                            <label for=\"date\">{{FN_DATE}}*</label>\r\n                            <input type=\"date\" class=\"form-control\" id=\"date\" name=\"date\" [(ngModel)]=\"model.inputMap.date\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 col-xs-6\">\r\n                            <label for=\"start_time\">{{FN_START_TIME}}*</label>\r\n                            <input type=\"time\" autocomplete=\"off\" class=\"form-control\" name=\"start_time\" [(ngModel)]=\"model.inputMap.start_time\" required>\r\n                        </div>\r\n                        <div class=\"col-sm-6 col-xs-6\">\r\n                            <label for=\"end_time\">{{FN_END_TIME}}*</label>\r\n                            <input type=\"time\" autocomplete=\"off\" class=\"form-control\" name=\"end_time\" [(ngModel)]=\"model.inputMap.end_time\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 col-xs-4 pad_right_5\">\r\n                            <label for=\"tech_hours\">{{FN_TECH_HOURS}}</label>\r\n                            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"tech_hours\" name=\"tech_hours\" [(ngModel)]=\"model.inputMap.tech_hours\">\r\n                        </div>\r\n                        <div class=\"col-sm-4 col-xs-4 pad_left_none pad_right_5\">\r\n                            <label for=\"ot_hours\">{{FN_OT_HOURS}}</label>\r\n                            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"ot_hours\" name=\"ot_hours\" [(ngModel)]=\"model.inputMap.ot_hours\">\r\n                        </div>\r\n                        <div class=\"col-sm-4 col-xs-4 pad_left_none\">\r\n                            <label for=\"labor_hours\">{{FN_LABOR_HOURS}}</label>\r\n                            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"labor_hours\" name=\"labor_hours\" [(ngModel)]=\"model.inputMap.labor_hours\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label class=\"group_label_text\">{{FN_WORK_DETAILS}}</label>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"problem\">{{FN_PROBLEM}}*</label>\r\n                            <textarea class=\"form-control\" id=\"problem\" name=\"problem\" [(ngModel)]=\"model.inputMap.problem\" required></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"repair_made\">{{FN_REPAIR_MADE}}*</label>\r\n                            <textarea class=\"form-control\" id=\"repair_made\" name=\"repair_made\" [(ngModel)]=\"model.inputMap.repair_made\" required></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                \t\t<div class=\"col-xs-12 col-sm-12\">\r\n               \t\t\t\t<label for=\"wo_image\">{{ADD_PICS}}</label>\r\n               \t\t\t</div>\r\n               \t\t\t<!-- Attachment 1 -->\r\n               \t\t\t<div *ngIf=\"model.inputMap.attachment1 && !attachment1\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<img src=\"{{getS3FormPicUrl(model.inputMap.attachment1)}}\" class=\"uploaded_img img-responsive\">\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"!model.inputMap.attachment1 || attachment1\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment1 (change)=\"onFileAdded(attachment1.files,1)\">\r\n               \t\t\t</div>\r\n               \t\t\t<!-- Attachment 2 -->\r\n               \t\t\t<div *ngIf=\"model.inputMap.attachment2 && !attachment2\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<img src=\"{{getS3FormPicUrl(model.inputMap.attachment2)}}\" class=\"uploaded_img img-responsive\">\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"!model.inputMap.attachment2 || attachment2\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment2 (change)=\"onFileAdded(attachment2.files,2)\">\r\n               \t\t\t</div>\r\n               \t\t\t<!-- Attachment 3 -->\r\n               \t\t\t<div *ngIf=\"model.inputMap.attachment3 && !attachment3\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<img src=\"{{getS3FormPicUrl(model.inputMap.attachment3)}}\" class=\"uploaded_img img-responsive\">\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"!model.inputMap.attachment3 || attachment3\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment3 (change)=\"onFileAdded(attachment3.files,3)\">\r\n               \t\t\t</div>\r\n               \t\t\t<!-- Attachment 4 -->\r\n               \t\t\t<div *ngIf=\"model.inputMap.attachment4 && !attachment4\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<img src=\"{{getS3FormPicUrl(model.inputMap.attachment4)}}\" class=\"uploaded_img img-responsive\">\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"!model.inputMap.attachment4 || attachment4\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment4 (change)=\"onFileAdded(attachment4.files,4)\">\r\n               \t\t\t</div>\r\n               \t\t\t<!-- Attachment 5 -->\r\n               \t\t\t<div *ngIf=\"model.inputMap.attachment5 && !attachment5\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<img src=\"{{getS3FormPicUrl(model.inputMap.attachment5)}}\" class=\"uploaded_img img-responsive\">\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"!model.inputMap.attachment5 || attachment5\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment5 (change)=\"onFileAdded(attachment5.files,5)\">\r\n               \t\t\t</div>\r\n                \t</div>\r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"emergency_call\">{{FN_EMERGENCY_CALL}}</label>\r\n                            <div id=\"emergency_call\" class=\"form-check form-check-inline\">\r\n                            \t<label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"emergency_call\" value=\"1\" [(ngModel)]=\"model.inputMap.emergency_call\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"emergency_call\" value=\"0\" [(ngModel)]=\"model.inputMap.emergency_call\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"on_checklist\">{{FN_ON_CHECKLIST}}</label>\r\n                            <div id=\"on_checklist\" class=\"form-check form-check-inline\">\r\n                            \t<label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"on_checklist\" value=\"1\" [(ngModel)]=\"model.inputMap.on_checklist\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"on_checklist\" value=\"0\" [(ngModel)]=\"model.inputMap.on_checklist\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"nissho_area\">{{FN_NISSHO_AREA}}</label>\r\n                            <div id=\"nissho_area\" class=\"form-check form-check-inline\">\r\n                            \t<label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"nissho_area\" value=\"1\" [(ngModel)]=\"model.inputMap.nissho_area\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"nissho_area\" value=\"0\" [(ngModel)]=\"model.inputMap.nissho_area\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"customer_service_call\">{{FN_CS_CALL}}</label>\r\n                            <div id=\"customer_service_call\" class=\"form-check form-check-inline\">\r\n                            \t<label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"customer_service_call\" value=\"1\" [(ngModel)]=\"model.inputMap.customer_service_call\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"customer_service_call\" value=\"0\" [(ngModel)]=\"model.inputMap.customer_service_call\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"legend_in_controllers\">{{FN_LEGEND_IN}}</label>\r\n                            <div id=\"legend_in_controllers\" class=\"form-check form-check-inline\">\r\n                            \t<label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"legend_in_controllers\" value=\"1\" [(ngModel)]=\"model.inputMap.legend_in_controllers\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"legend_in_controllers\" value=\"0\" [(ngModel)]=\"model.inputMap.legend_in_controllers\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"chart_in_controllers\">{{FN_CHART_IN}}</label>\r\n                            <div id=\"chart_in_controllers\" class=\"form-check form-check-inline\">\r\n\t\t\t\t\t              <label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"chart_in_controllers\" value=\"1\" [(ngModel)]=\"model.inputMap.chart_in_controllers\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"chart_in_controllers\" value=\"0\" [(ngModel)]=\"model.inputMap.chart_in_controllers\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"job_complete\">{{FN_JOB_COMPLETE}}</label>\r\n                            <div id=\"job_complete\" class=\"form-check form-check-inline\">\r\n                                <label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"job_complete\" value=\"1\" [(ngModel)]=\"model.inputMap.job_complete\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"job_complete\" value=\"0\" [(ngModel)]=\"model.inputMap.job_complete\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"po_used\">{{FN_PO_USED}}</label>\r\n                            <div id=\"po_used\" class=\"form-check form-check-inline\">\r\n                            \t<label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"po_used\" value=\"1\" [(ngModel)]=\"model.inputMap.po_used\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"po_used\" value=\"0\" [(ngModel)]=\"model.inputMap.po_used\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                            <label for=\"evaluation\">Evaluation</label>\r\n                            <div id=\"evaluation\" class=\"form-check form-check-inline\">\r\n                                <label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"evaluation\" value=\"1\" [(ngModel)]=\"model.inputMap.evaluation\"> {{FN_YES}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"evaluation\" value=\"0\" [(ngModel)]=\"model.inputMap.evaluation\"> {{FN_NO}}\r\n\t\t\t\t\t\t\t\t</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center margin_bottom_form\">\r\n                \t<ng-container *ngIf=\"model.process_number != '3'\">\r\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmitProceed()\" \r\n\t                    [disabled]=\"!nisshoForm.form.valid\">{{FN_SUBMIT_FORM}}</button>\r\n                    <button id=\"loading\" class=\"hidden\" type=\"button\"></button>\r\n                    </ng-container>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/fill/irrigation-repair/irrigation-repair.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/forms/fill/irrigation-repair/irrigation-repair.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IrrigationRepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrrigationRepairComponent", function() { return IrrigationRepairComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/S3Manager */ "./src/app/api/S3Manager.ts");







var IrrigationRepairComponent = /** @class */ (function () {
    function IrrigationRepairComponent(route, fms, ssv, aus, adms, router, ems) {
        this.route = route;
        this.fms = fms;
        this.ssv = ssv;
        this.aus = aus;
        this.adms = adms;
        this.router = router;
        this.ems = ems;
        this.typeId = '47';
        this.goToParts = false;
        //Field Names
        this.FN_SAVE_BACK = "Save & Back";
        this.FN_PARTS_LIST = "Parts List";
        this.FN_TITLE = "Irrigation Repair";
        this.FN_JOB_INFO = "Job Information";
        this.FN_TECH_NAME = "Tech Name";
        this.FN_JOB_NAME = "Job Name";
        this.FN_JOB_LOCATION = "Job Location";
        this.FN_WORK_HOURS = "Work Hours";
        this.FN_DATE = "Date";
        this.FN_START_TIME = "Start Time";
        this.FN_END_TIME = "End Time";
        this.FN_TECH_HOURS = "Tech Hours";
        this.FN_OT_HOURS = "O/T Hours";
        this.FN_LABOR_HOURS = "Labor Hours";
        this.FN_WORK_DETAILS = "Work Details";
        this.FN_PROBLEM = "Problem";
        this.FN_REPAIR_MADE = "Repair Made";
        this.FN_EMERGENCY_CALL = "Emergency Call";
        this.FN_ON_CHECKLIST = "On Checklist";
        this.FN_NISSHO_AREA = "Nissho Area";
        this.FN_CS_CALL = "Customer Service Call";
        this.FN_LEGEND_IN = "Legend in Controllers";
        this.FN_CHART_IN = "Charts in Controllers";
        this.FN_JOB_COMPLETE = "Job Complete";
        this.FN_PO_USED = "PO Used";
        this.FN_SUBMIT_FORM = "Submit Form";
        this.FN_YES = "Yes";
        this.FN_NO = "No";
        this.FN_BACK_TO_FORM = "Back to Form";
        this.FN_PARTS_USED = "Parts List";
        this.FN_IRRIGATION_PARTS = "Irrigation Parts";
        this.FN_MATERIAL = "Material";
        this.FN_ADD_MATERIAL = "Add Material";
        this.FN_QUANTITY = "qty";
        this.ADD_PICS = "Upload Pictures";
    }
    IrrigationRepairComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get user info from session
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.fillerName = JSON.parse(localStorage.getItem('currentUser')).user.name;
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        this.initFieldNames();
        this.populateNames();
        //Get form ID if specified on route.
        //If specified, load the form.
        this.route.params.subscribe(function (params) {
            _this.formId = params['formId'];
            if (_this.formId) {
                //Load Form
                _this.getModel();
            }
            else {
                //Create a new form
                _this.model = {
                    'id': _this.formId,
                    'type_id': _this.typeId,
                    'status_id': '1',
                    'process_number': '1',
                    'created_date': _this.toHtmlDate(null),
                    'last_modified_date': _this.toHtmlDate(null),
                    'filler_id': _this.fillerUid,
                    'modifier_id': _this.fillerUid,
                    'inputMap': {
                        'date': _this.toHtmlDate(null),
                        'tech_name': _this.fillerName
                    },
                    "inputTables": {
                        "materials": []
                    }
                };
            }
        });
    };
    IrrigationRepairComponent.prototype.populateNames = function () {
        var _this = this;
        this.aus.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    IrrigationRepairComponent.prototype.getModel = function () {
        var _this = this;
        this.fms.getForm(this.typeId, this.formId)
            .subscribe(function (model) {
            model.created_date = _this.toHtmlDate(model.created_date);
            model.last_modified_date = _this.toHtmlDate(null);
            _this.model = model;
            _this.matList = model.inputTables.materials;
        });
    };
    IrrigationRepairComponent.prototype.onSubmit = function () {
        var _this = this;
        //Collect all materials and labor
        this.model.inputTables.materials = this.matList;
        //Ensure number fields are filled
        if (!this.model.inputMap.tech_hours || isNaN(this.model.inputMap.tech_hours) ||
            this.model.inputMap.tech_hours.replace(/^\s+/, '').replace(/\s+$/, '') === '') {
            this.model.inputMap.tech_hours = '0';
        }
        if (!this.model.inputMap.ot_hours || isNaN(this.model.inputMap.ot_hours) ||
            this.model.inputMap.ot_hours.replace(/^\s+/, '').replace(/\s+$/, '') === '') {
            this.model.inputMap.ot_hours = '0';
        }
        if (!this.model.inputMap.labor_hours || isNaN(this.model.inputMap.labor_hours) ||
            this.model.inputMap.labor_hours.replace(/^\s+/, '').replace(/\s+$/, '') === '') {
            this.model.inputMap.labor_hours = '0';
        }
        //Check if there are attachments to upload
        var filesToUpload = [null, null, null, null, null];
        var fileNames = ["", "", "", "", ""];
        var numUploads = 0;
        for (var num = 1; num <= 5; num++) {
            if (this.model.inputMap['attachment' + num] && this['attachment' + num]) {
                filesToUpload[numUploads] = this['attachment' + num];
                fileNames[numUploads] = this.model.inputMap['attachment' + num];
                numUploads++;
            }
        }
        console.log('Number of uploads: ' + numUploads);
        if (numUploads > 0) {
            this.ssv.activateUploadModal();
        }
        //Upload form data to DB
        if (this.formId) {
            //Update an existing form
            this.fms.updateForm(this.model, this.typeId, this.formId)
                .subscribe(function (data) {
                var navUrl = _this.navigation + (_this.goToParts ? _this.formId : "");
                if (numUploads > 0) {
                    src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__["S3Manager"].uploadAllFormAttachments(filesToUpload, fileNames, _this.clientId, navUrl, numUploads, _this.ssv, _this.router);
                }
                _this.onUpdateFormSuccess();
                if (numUploads == 0) {
                    //Redirect immediately if no uploads
                    _this.router.navigate([navUrl]);
                }
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update form!');
            });
        }
        else {
            //Create a new form
            this.fms.newForm(this.model, this.typeId)
                .subscribe(function (data) {
                _this.formId = data['formId'];
                var navUrl = _this.navigation + (_this.goToParts ? data['formId'] : "");
                if (numUploads > 0) {
                    src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__["S3Manager"].uploadAllFormAttachments(filesToUpload, fileNames, _this.clientId, navUrl, numUploads, _this.ssv, _this.router);
                }
                _this.onCreateFormSuccess(data['formId']);
                if (numUploads == 0) {
                    //Redirect immediately if no uploads
                    _this.router.navigate([navUrl]);
                }
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to create form!');
            });
        }
    };
    IrrigationRepairComponent.prototype.onCreateFormSuccess = function (formId) {
        this.ssv.showSuccess('Form successfully updated!');
    };
    IrrigationRepairComponent.prototype.onUpdateFormSuccess = function () {
        this.ssv.showSuccess('Form successfully updated!');
        if (this.model.process_number == '2') {
            //Email from Tech to I.Manager (role = 4)
            var recipient = this.usersList.find(function (x) { return x.role_id == '4' && x.is_active == '1'; });
            this.sendTechSubmissionEmail(recipient.uid);
        }
        else if (this.model.process_number == '3') {
            //Send email to Irrigation Staff (role = 21)
            var recipient = this.usersList.find(function (x) { return x.role_id == '21' && x.is_active == '21'; });
            this.sendIRFManagerApprovalEmail(recipient.uid);
        }
    };
    //Submit to Irrigation Manager
    IrrigationRepairComponent.prototype.onSubmitProceed = function () {
        //No more submission after manager approval (step 3 onwards)
        if (this.model.process_number == '3') {
            return;
        }
        //Update process number if form is submitted (not just saved as draft)
        this.navigation = '/view-irrigation-repair/3';
        if (this.roleId == '4') {
            //Irrigation Manager doesn't need approval
            this.model.process_number = '3';
            this.navigation = '/view-irrigation-repair/3';
        }
        else {
            this.model.process_number = '2';
            this.navigation = '/view-irrigation-repair/2';
        }
        this.onSubmit();
    };
    //Submit and redirect to view forms page
    IrrigationRepairComponent.prototype.onSubmitBack = function () {
        this.navigation = '/view-irrigation-repair/' + this.model.process_number;
        //No more submission after manager approval (step 3 onwards)
        if (this.model.process_number == '3') {
            this.router.navigate([this.navigation]);
            return;
        }
        this.onSubmit();
    };
    //Submit and redirect to parts list page
    IrrigationRepairComponent.prototype.onSubmitPartsList = function () {
        this.goToParts = true;
        this.navigation = '/irrigation-repair-parts/';
        //No more submission after manager approval (step 3 onwards)
        if (this.model.process_number == '3') {
            this.router.navigate([this.navigation + this.formId]);
            return;
        }
        this.onSubmit();
    };
    IrrigationRepairComponent.prototype.onDownloadAttachment = function (num) {
        var filename = this.model.inputMap['attachment' + num];
        src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__["S3Manager"].downloadFormAttachment(filename, this.clientId);
    };
    //Filename = form[GUID]_att[num].[ext]
    IrrigationRepairComponent.prototype.onFileAdded = function (files, num) {
        if (files === undefined || files.length == 0) {
            this['attachment' + num] = null;
            this.model['attachment' + num] = '';
        }
        else {
            var ext = files[0].name.substr(files[0].name.lastIndexOf('.'));
            this['attachment' + num] = files[0];
            this.model.inputMap['attachment' + num] = 'form' + this.newGuid() + '_att' + num + ext;
        }
    };
    //Create Unique ID
    IrrigationRepairComponent.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    IrrigationRepairComponent.prototype.toHtmlDate = function (datestr) {
        var date;
        if (datestr) {
            date = new Date(datestr);
        }
        else {
            date = new Date();
        }
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    //Send email to Irrigation Manager for approval
    IrrigationRepairComponent.prototype.sendTechSubmissionEmail = function (recipientId) {
        var _this = this;
        //Get form filler as recipient
        this.aus.getUser(recipientId).subscribe(function (user) {
            console.log(JSON.stringify(user));
            if (user.email) {
                //Send Email
                var recipientList = [user.email];
                var ccList = [];
                var bccList = [];
                var subject = "Pending Approval - Irrigation Repair";
                var content = user.name + ","
                    + "<br><br>An Irrigation repair has been completed."
                    + "<br>Please review and assign a job number to the repair forms.";
                var email = { 'subject': subject,
                    'body': content,
                    'to': recipientList,
                    'cc': ccList,
                    'bcc': bccList };
                console.log(JSON.stringify(email));
                _this.ems.sendEmail(email).subscribe(function (data) { });
            }
            else {
                console.log('Email recipient not found');
            }
        }, function (error) {
            console.log(error);
            // Display error message
            _this.ssv.showError('Error: Email recipient not found!');
        });
    };
    //Send to Irrigation Staff for Approval & Job Number
    IrrigationRepairComponent.prototype.sendIRFManagerApprovalEmail = function (recipientId) {
        var _this = this;
        //Get form filler as recipient
        this.aus.getUser(recipientId).subscribe(function (user) {
            console.log(JSON.stringify(user));
            if (user.email) {
                //Send Email
                var recipientList = [user.email];
                var ccList = [];
                var bccList = [];
                var subject = "Irrigation Repair Job Number Request";
                var content = user.name + ","
                    + "<br><br>An Irrigation Repair requires your approval."
                    + "<br>Please login to the Dashboard to review the repair.";
                var email = { 'subject': subject,
                    'body': content,
                    'to': recipientList,
                    'cc': ccList,
                    'bcc': bccList };
                console.log(JSON.stringify(email));
                _this.ems.sendEmail(email).subscribe(function (data) { });
            }
            else {
                console.log('Email recipient not found');
            }
        }, function (error) {
            console.log(error);
            // Display error message
            _this.ssv.showError('Error: Email recipient not found!');
        });
    };
    Object.defineProperty(IrrigationRepairComponent.prototype, "diagnostic", {
        //DIAGNOSTIC
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IrrigationRepairComponent.prototype, "mdiagnostic", {
        get: function () { return JSON.stringify(this.matList); },
        enumerable: true,
        configurable: true
    });
    IrrigationRepairComponent.prototype.getS3FormPicUrl = function (filename) {
        return src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__["S3Manager"].getFormAttachmentUrl(filename, this.clientId);
    };
    IrrigationRepairComponent.prototype.initFieldNames = function () {
        var language = JSON.parse(localStorage.getItem('currentUser')).user.language_preference;
        if (language === 'es') {
            this.FN_SAVE_BACK = "Guardar & Retroceder";
            this.FN_PARTS_LIST = "Lista de Piezas";
            this.FN_TITLE = "Reparación de Irrigación";
            this.FN_JOB_INFO = "Información de Trabajo";
            this.FN_TECH_NAME = "Nombre de Técnico";
            this.FN_JOB_NAME = "Nombre de trabajo";
            this.FN_JOB_LOCATION = "Lugar de trabajo";
            this.FN_WORK_HOURS = "Horas de trabajo";
            this.FN_DATE = "Fecha";
            this.FN_START_TIME = "Hora de comienzo";
            this.FN_END_TIME = "Hora del fin";
            this.FN_TECH_HOURS = "Horas de trabajo";
            this.FN_OT_HOURS = "Horas Extras";
            this.FN_LABOR_HOURS = "Horas totales";
            this.FN_WORK_DETAILS = "Detalles de trabajo";
            this.FN_PROBLEM = "Problema";
            this.FN_REPAIR_MADE = "Reparación hecho";
            this.FN_EMERGENCY_CALL = "Llamada de emergencia";
            this.FN_ON_CHECKLIST = "En lista de verificación";
            this.FN_NISSHO_AREA = "área de Nissho";
            this.FN_CS_CALL = "Llamada de servicio de cliente";
            this.FN_LEGEND_IN = "Leyenda en controles";
            this.FN_CHART_IN = "Gráfica en controles";
            this.FN_JOB_COMPLETE = "Trabajo completado";
            this.FN_PO_USED = "PO usado";
            this.FN_SUBMIT_FORM = "Enviar";
            this.FN_YES = "Si";
            this.FN_NO = "No";
            this.FN_BACK_TO_FORM = "Regresar al Formulario";
            this.FN_PARTS_USED = "Partes Usados";
            this.FN_IRRIGATION_PARTS = "Partes de Irrigación";
            this.FN_MATERIAL = "Materiales";
            this.FN_ADD_MATERIAL = "Añadir Materiales";
            this.FN_QUANTITY = "Cantidad";
            this.ADD_PICS = "Añadir Foto";
        }
    };
    IrrigationRepairComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-irrigation-repair',
            template: __webpack_require__(/*! ./irrigation-repair.component.html */ "./src/app/forms/fill/irrigation-repair/irrigation-repair.component.html"),
            styles: [__webpack_require__(/*! ./irrigation-repair.component.css */ "./src/app/forms/fill/irrigation-repair/irrigation-repair.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["EmailNotificationService"]])
    ], IrrigationRepairComponent);
    return IrrigationRepairComponent;
}());



/***/ }),

/***/ "./src/app/forms/fill/m-work-order/m-work-order.component.css":
/*!********************************************************************!*\
  !*** ./src/app/forms/fill/m-work-order/m-work-order.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2ZpbGwvbS13b3JrLW9yZGVyL20td29yay1vcmRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/forms/fill/m-work-order/m-work-order.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/forms/fill/m-work-order/m-work-order.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col col-sm-offset-1 text-left\">\r\n\t\t\t<h3><a routerLink=\"/view-work-order\" class=\"back_btn\"><span class=\"glyphicon glyphicon-chevron-left\"></span>Back</a></h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\"></div>\r\n\t\t<div class=\"col-sm-8 col-xs-12\">\r\n        \t<div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n\t\t            <h2 class=\"text-center\">Work Order Form</h2>\r\n\t         \t</div>\r\n\t        </div>\r\n            <form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n                 <div class=\"form-group\">\r\n                     <label class=\"group_label_text\">Project Information</label>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-6 col-xs-12\">\r\n                             <label for=\"job_number\">Nissho Job #</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"job_number\" name=\"job_number\" [(ngModel)]=\"model.inputMap.job_num\">\r\n                         </div>\r\n                         <div class=\"col-sm-6 col-xs-12\">\r\n                             <label for=\"po_number\">IWO #</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"po_number\" name=\"po_number\"  [(ngModel)]=\"model.inputMap.po_num\">\r\n                         </div>\r\n                     </div>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-12 col-xs-12\">\r\n                             <label for=\"project_name\">Project Name</label>\r\n                             <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"project_name\" name=\"project_name\" (input)=\"searchCustomer($event.target.value)\" [(ngModel)]=\"model.inputMap.project_name\" required>\r\n                         \t<div *ngIf=\"custRecList\" id=\"customer_suggestion\">\r\n\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_part of custRecList\" (click)=\"onCustomerSelected(sugg_part.id)\">\r\n\t\t\t\t\t\t\t\t\t{{sugg_part.project_name}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                     <label class=\"group_label_text\">Client Information</label>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-12 col-xs-12\">\r\n                             <label for=\"client_name\">Client Name</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"client_name\" name=\"client_name\" [(ngModel)]=\"model.inputMap.client_name\" required>\r\n                         </div>\r\n                     </div>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-6 col-xs-6\">\r\n                             <label for=\"client_phone\">Client Phone #</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"client_phone\" name=\"client_phone\" [(ngModel)]=\"model.inputMap.client_phone\">\r\n                         </div>\r\n                         <div class=\"col-sm-6 col-xs-6\">\r\n                             <label for=\"client_email\">Client Email</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"client_email\" name=\"client_email\" [(ngModel)]=\"model.inputMap.client_email\">\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-8 col-xs-8\">\r\n                             <label for=\"auth_by_print\">Authorized by (Print)</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"auth_by_print\" name=\"auth_by_print\" [(ngModel)]=\"model.inputMap.auth_by\">\r\n                         </div>\r\n                         <div class=\"col-sm-4 col-xs-4\">\r\n                             <label for=\"auth_date\">Date</label>\r\n                             <input type=\"date\" class=\"form-control\" id=\"auth_date\" name=\"auth_date\" [(ngModel)]=\"model.inputMap.client_signature_date\">\r\n                         </div>\r\n                     </div>\r\n                 </div>            \r\n                     \r\n               <div class=\"form-group\" id=\"materials_container\">\r\n                   <label class=\"group_label_text\">Materials</label>\r\n              \t\t<div class=\"row\">\r\n              \t\t\t<div class=\"col-xs-6 col-sm-6 pad_right_5\">\r\n          \t\t\t\t\t<input type=\"text\" class='form-control' value=\"Irrigation materials\" disabled />\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-2 col-sm-2 pad_right_5 pad_left_none\">\r\n              \t\t\t\t<input type=\"text\" class='form-control' value=\"1\" disabled />\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-4 col-sm-4 pad_right_5 pad_left_none text-right\">\r\n              \t\t\t\t{{total_cost | currency}}\r\n              \t\t\t</div>\r\n              \t\t</div>\r\n               </div>\r\n               <div class=\"form-group\" id=\"labors_container\">\r\n                   <label class=\"group_label_text\">Labor</label>\r\n             \t\t<div class=\"row\" *ngFor=\"let lab of labList; let i = index\">\r\n             \t\t\t<div class=\"col-xs-6 col-sm-6 pad_right_5 pad_left_none\">\r\n              \t\t\t\t<input type=\"text\" class='form-control' name=\"labor{{i}}\" [(ngModel)]=\"lab.labor\" placeholder=\"Labor\" required/>\r\n              \t\t\t</div>\r\n             \t\t\t<div class=\"col-xs-2 col-sm-2 pad_right_5 pad_left_none\">\r\n              \t\t\t\t<input type=\"text\" class='form-control' name=\"hours{{i}}\" [(ngModel)]=\"lab.hours\" placeholder=\"hrs\" required/>\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-2 col-sm-2 pad_right_5 pad_left_none\">\r\n              \t\t\t\t<input type=\"text\" class='form-control' name=\"rate{{i}}\" [(ngModel)]=\"lab.rate\" placeholder=\"rate\" required/>\r\n              \t\t\t</div>\r\n             \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none\">\r\n             \t\t\t\t<a type=\"text\" class='btn btn-danger pull-right x_button' (click)=\"onDeleteLabor(i)\">X</a>\r\n             \t\t\t</div>\r\n             \t\t</div>\r\n                </div>\r\n                <div class=\"form-group row margin_top_15\">\r\n                    <div class=\"col-xs-12 col-sm-12\">\r\n                        <a id=\"ladd_row\" class=\"btn btn-default pull-left\" (click)=\"addLabor()\"><b>+Add Labor</b></a>\r\n                    </div>\r\n               \t</div>\r\n               \t<div class=\"form-group\">\r\n                \t<label class=\"group_label_text\">Work Information</label>\r\n                \t<div class=\"row\">\r\n\t\t\t        \t<div class=\"col-xs-12 col-md-6 text-left\">\r\n\t\t\t\t            <label for=\"attachment1\">Picture 1</label>\r\n\t\t\t\t            <span *ngIf=\"model.inputMap.attachment1 == null\"><input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment1 (change)=\"onFileAdded(attachment1.files,1)\"></span>\r\n                    \t\t<span *ngIf=\"model.inputMap.attachment1 != null\"><a (click)=\"onDownloadAttachment(1)\"> (Download)</a></span><br>\r\n\t\t\t         \t</div>\r\n\t\t\t         \t<div class=\"col-xs-12 col-md-6 text-left\">\r\n\t\t\t\t            <label for=\"attachment2\">Picture 2</label>\r\n\t\t\t\t            <span *ngIf=\"model.inputMap.attachment2 == null\"><input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment2 (change)=\"onFileAdded(attachment2.files,2)\"></span>\r\n                    \t\t<span *ngIf=\"model.inputMap.attachment2 != null\"><a (click)=\"onDownloadAttachment(2)\"> (Download)</a></span><br>\r\n\t\t\t         \t</div>\r\n\t\t            </div>\r\n                \t<div class=\"row\">\r\n                \t\t<div class=\"col-xs-12 col-sm-12\">\r\n                \t\t\t<label for=\"work_description\">Work Description</label>\r\n                \t\t\t<textarea class=\"form-control\" id=\"work_description\" name=\"work_description\" [(ngModel)]=\"model.inputMap.work_description\"></textarea>\r\n                \t\t</div>\r\n                \t</div>\r\n                </div>\r\n               \t\r\n                <div class=\"row\">\r\n\t                <div class=\"col-xs-6 text-right margin_bottom_15\">\r\n\t                \t<button type=\"submit\" class=\"btn btn-info\"><b>Save as Draft</b></button>\r\n\t                </div>\r\n\t                <div class=\"col-xs-6 text-left margin_bottom_15\">\r\n\t                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmitProceed()\" [disabled]=\"!nisshoForm.form.valid\"><b>Submit Form</b></button>\r\n\t                </div>\r\n\t            </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/fill/m-work-order/m-work-order.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forms/fill/m-work-order/m-work-order.component.ts ***!
  \*******************************************************************/
/*! exports provided: MWorkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MWorkOrderComponent", function() { return MWorkOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/S3Manager */ "./src/app/api/S3Manager.ts");






var MWorkOrderComponent = /** @class */ (function () {
    function MWorkOrderComponent(route, fms, ssv, ims, adms, router) {
        this.route = route;
        this.fms = fms;
        this.ssv = ssv;
        this.ims = ims;
        this.adms = adms;
        this.router = router;
        this.typeId = '51';
        this.isDraft = true;
    }
    MWorkOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total_cost = '0';
        //Get user info from session
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        //Populate parts and customers for search
        this.getPartsList();
        this.getCustomersList();
        //Get form ID if specified on route.
        //If specified, load the form.
        this.route.params.subscribe(function (params) {
            _this.formId = params['formId'];
            if (_this.formId) {
                //Load Form
                _this.getModel();
            }
            else {
                //Create a new form
                _this.model = {
                    'id': _this.formId,
                    'type_id': _this.typeId,
                    'status_id': '1',
                    'process_number': '1',
                    'created_date': _this.toHtmlDate(null),
                    'last_modified_date': _this.toHtmlDate(null),
                    'filler_id': _this.fillerUid,
                    'modifier_id': _this.fillerUid,
                    'inputMap': {},
                    "inputTables": {
                        "materials": [],
                        "labors": []
                    }
                };
                _this.matList = [];
                _this.labList = [];
            }
        });
    };
    MWorkOrderComponent.prototype.getModel = function () {
        var _this = this;
        this.fms.getForm(this.typeId, this.formId)
            .subscribe(function (model) {
            model.created_date = _this.toHtmlDate(model.created_date);
            model.last_modified_date = _this.toHtmlDate(null);
            _this.model = model;
            _this.matList = model.inputTables.materials;
            _this.labList = model.inputTables.labors;
        });
    };
    MWorkOrderComponent.prototype.getStockTransferTotalCost = function () {
    };
    MWorkOrderComponent.prototype.onSubmit = function () {
        var _this = this;
        //Collect all materials and labor
        this.model.inputTables.materials = this.matList;
        this.model.inputTables.labors = this.labList;
        //Upload form data to DB
        if (this.formId) {
            //Update an existing form
            this.fms.updateForm(this.model, this.typeId, this.formId)
                .subscribe(function (data) {
                _this.ssv.showSuccess('Form successfully updated!');
                _this.router.navigate(['/view-m-work-order/' + _this.model.process_number]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update form!');
            });
        }
        else {
            //Create a new form
            this.fms.newForm(this.model, this.typeId)
                .subscribe(function (data) {
                // Page redirect when getting response
                _this.ssv.showSuccess('Form successfully updated!');
                _this.router.navigate(['/view-m-work-order/' + _this.model.process_number]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update form!');
            });
        }
        //Save attachments in S3
        for (var num = 1; num <= 2; num++) {
            if (this.model.inputMap['attachment' + num] && this['attachment' + num]) {
                src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__["S3Manager"].uploadFormAttachment(this['attachment' + num], this.model.inputMap['attachment' + num], this.clientId);
            }
        }
    };
    //Submit to Irrigation Manager
    MWorkOrderComponent.prototype.onSubmitProceed = function () {
        //Update process number if form is submitted (not just saved as draft)
        this.model.process_number = '2';
        this.onSubmit();
    };
    MWorkOrderComponent.prototype.onDownloadAttachment = function (num) {
        var filename = this.model.inputMap['attachment' + num];
        src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__["S3Manager"].downloadFormAttachment(filename, this.clientId);
    };
    //Filename = form[GUID]_att[num].[ext]
    MWorkOrderComponent.prototype.onFileAdded = function (files, num) {
        if (files === undefined || files.length == 0) {
            this['attachment' + num] = null;
            this.model['attachment' + num] = '';
        }
        else {
            var ext = files[0].name.substr(files[0].name.lastIndexOf('.'));
            this['attachment' + num] = files[0];
            this.model.inputMap['attachment' + num] = 'form' + this.newGuid() + '_att' + num + ext;
        }
    };
    //Create Unique ID
    MWorkOrderComponent.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    MWorkOrderComponent.prototype.toHtmlDate = function (datestr) {
        var date;
        if (datestr) {
            date = new Date(datestr);
        }
        else {
            date = new Date();
        }
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    //MULTI INPUT FIELDS    
    MWorkOrderComponent.prototype.addMaterial = function () {
        var mat = { 'form_id': this.formId, 'material_id': '0' };
        this.matList.push(mat);
    };
    MWorkOrderComponent.prototype.onDeleteMaterial = function (itemIdx) {
        var deletedItem = this.matList[itemIdx];
        this.matList.splice(itemIdx, 1);
        this.suggestedPartsList = [];
        //Delete from server
        var inputMap = { "inputMap": deletedItem };
        this.fms.deleteMultiInput(inputMap, this.typeId, 'materials', 'material_id')
            .subscribe(function (data) { }, function (error) { console.log(error); });
    };
    MWorkOrderComponent.prototype.addLabor = function () {
        var lab = { 'form_id': this.formId };
        this.labList.push(lab);
    };
    MWorkOrderComponent.prototype.onDeleteLabor = function (itemIdx) {
        this.labList.splice(itemIdx, 1);
    };
    //MATERIAL SEARCH
    MWorkOrderComponent.prototype.getPartsList = function () {
        var _this = this;
        this.ims.getMaterials('1')
            .subscribe(function (list) {
            _this.partsList = list;
        });
    };
    /**
     * When a suggestion is selected, assign part ID to matList at position == itemNum
     * Empty out suggestions for future use
     * @param itemNum
     */
    MWorkOrderComponent.prototype.onSuggestionSelected = function (itemNum, matId, matName) {
        this.matList[itemNum].material_id = "" + matId;
        document.getElementById('matname' + itemNum).value = matName;
        this.suggestedPartsList = [];
    };
    MWorkOrderComponent.prototype.searchItem = function (input, itemIdx) {
        this.currFocus = itemIdx;
        if (this.partsList) {
            this.suggestedPartsList = this.partsList.filter(function (x) {
                return (x.description.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    MWorkOrderComponent.prototype.getMaterialName = function (matId) {
        if (this.partsList) {
            var part = this.partsList.find(function (x) { return x.id == matId; });
            if (part) {
                return part.description;
            }
        }
        return '';
    };
    //CUSTOMER SEARCH
    MWorkOrderComponent.prototype.getCustomersList = function () {
        var _this = this;
        this.adms.getCustomersByDept('2')
            .subscribe(function (list) {
            _this.customersList = list;
        });
    };
    MWorkOrderComponent.prototype.onCustomerSelected = function (custId) {
        var customer = this.customersList.find(function (x) { return x.id == custId; });
        this.model.inputMap.project_name = customer.project_name;
        this.model.inputMap.client_name = customer.contact;
        this.model.inputMap.client_phone = customer.phone;
        this.model.inputMap.client_email = customer.email;
        this.custRecList = [];
    };
    MWorkOrderComponent.prototype.searchCustomer = function (input) {
        if (this.customersList) {
            this.custRecList = this.customersList.filter(function (x) {
                return (x.project_name.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    Object.defineProperty(MWorkOrderComponent.prototype, "diagnostic", {
        //DIAGNOSTIC
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MWorkOrderComponent.prototype, "mdiagnostic", {
        get: function () { return JSON.stringify(this.matList); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MWorkOrderComponent.prototype, "ldiagnostic", {
        get: function () { return JSON.stringify(this.labList); },
        enumerable: true,
        configurable: true
    });
    MWorkOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-m-work-order',
            template: __webpack_require__(/*! ./m-work-order.component.html */ "./src/app/forms/fill/m-work-order/m-work-order.component.html"),
            styles: [__webpack_require__(/*! ./m-work-order.component.css */ "./src/app/forms/fill/m-work-order/m-work-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__["FormManagementService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__["InventoryManagementService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__["AdministrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MWorkOrderComponent);
    return MWorkOrderComponent;
}());



/***/ }),

/***/ "./src/app/forms/fill/purchase-order/purchase-order.component.css":
/*!************************************************************************!*\
  !*** ./src/app/forms/fill/purchase-order/purchase-order.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2ZpbGwvcHVyY2hhc2Utb3JkZXIvcHVyY2hhc2Utb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forms/fill/purchase-order/purchase-order.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/forms/fill/purchase-order/purchase-order.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col col-sm-offset-1 text-left\">\r\n\t\t\t<h3><a routerLink=\"/view-purchase-order/{{model.process_number}}\" class=\"back_btn\"><span class=\"glyphicon glyphicon-chevron-left\"></span>Back</a></h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t    <div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n\t\t            <h2 class=\"text-center\">Purchase Order</h2>\r\n\t         \t</div>\r\n\t        </div>\r\n\t\t    <form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n\t\t    \t<div class=\"form-group\">\r\n\t\t            <label class=\"group_label_text\">Requisition</label>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-sm-6 col-xs-6\">\r\n\t\t                    <label for=\"req_date\">Date</label>\r\n\t\t                    <input type=\"date\" class=\"form-control\" id=\"req_date\" name=\"req_date\" [(ngModel)]=\"model.inputMap.req_date\">\r\n\t\t                </div>\r\n\t\t                <div class=\"col-sm-6 col-xs-6\">\r\n\t\t                    <label for=\"job_num\">Job Number</label>\r\n\t\t                    <input type=\"text\" class=\"form-control\" id=\"job_num\" name=\"job_num\" [(ngModel)]=\"model.inputMap.job_num\">\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-sm-12 col-xs-12\">\r\n\t\t                \t<label for=\"project_name\">Job Name</label>\r\n                             <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"project_name\" name=\"job_name\" (input)=\"searchCustomer($event.target.value)\" [(ngModel)]=\"model.inputMap.job_name\" required>\r\n                         \t<div *ngIf=\"custRecList\" id=\"customer_suggestion\">\r\n\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_part of custRecList\" (click)=\"onCustomerSelected(sugg_part.id)\">\r\n\t\t\t\t\t\t\t\t\t{{sugg_part.project_name}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-sm-6 col-xs-6\">\r\n\t\t                    <label for=\"ord_no\">Order No</label>\r\n\t\t                    <input type=\"text\" class=\"form-control\" id=\"ord_no\" name=\"ord_no\" [(ngModel)]=\"model.inputMap.order_num\">\r\n\t\t                </div>\r\n\t\t                <div class=\"col-sm-6 col-xs-6\">\r\n\t\t                    <label for=\"tract_no\">Tract No</label>\r\n\t\t                    <input type=\"text\" class=\"form-control\" id=\"tract_no\" name=\"tract_no\" [(ngModel)]=\"model.inputMap.tract_num\">\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-sm-12 col-xs-12\">\r\n\t\t                    <label for=\"lot_nums\">Lot Numbers</label>\r\n\t\t                    <input type=\"text\" class=\"form-control\" id=\"lot_nums\" name=\"lot_nums\" [(ngModel)]=\"model.inputMap.lot_nums\">\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-sm-12 col-xs-12\">\r\n\t\t                    <label for=\"client\">Client</label>\r\n\t\t                    <input type=\"text\" class=\"form-control\" id=\"client\" name=\"client\" [(ngModel)]=\"model.inputMap.client\">\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-sm-6 col-xs-6\">\r\n\t\t                    <label for=\"delivery_date2\">Delivery Date</label>\r\n\t\t                    <input type=\"date\" class=\"form-control\" id=\"delivery_date2\" name=\"delivery_date2\" [(ngModel)]=\"model.inputMap.delivery_date2\">\r\n\t\t                </div>\r\n\t\t                <div class=\"col-sm-6 col-xs-6\">\r\n\t\t                    <label for=\"delivery_time2\">Delivery Time</label>\r\n\t\t                    <input type=\"time\" class=\"form-control\" name=\"delivery_time2\" [(ngModel)]=\"model.inputMap.delivery_time2\">\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-sm-12 col-xs-12\">\r\n\t\t                    <label for=\"ord_by2\">Ordered by</label>\r\n\t\t                    <input type=\"text\" class=\"form-control\" id=\"ord_by2\" name=\"ord_by2\" [(ngModel)]=\"model.inputMap.ordered_by\">\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-xs-12 col-sm-12\">\r\n\t\t                    <label for=\"deliver_to\">Deliver to:</label>\r\n\t\t                    <div id=\"deliver_to\" class=\"form-check form-check-inline\">\r\n                            \t<label class=\"radio-inline\" style=\"margin-top:0;\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"deliver_to\" value=\"site\" [(ngModel)]=\"model.inputMap.deliver_to\"> Job Site\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"deliver_to\" value=\"yard\" [(ngModel)]=\"model.inputMap.deliver_to\"> Yard\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"deliver_to\" value=\"will_call\" [(ngModel)]=\"model.inputMap.deliver_to\"> Will Call\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t                    </div>\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t        </div>\r\n\t\t        <div class=\"form-group\" id=\"materials_container\">\r\n\t\t            <label class=\"group_label_text\">Order Details</label>\r\n\t\t            \t<div class=\"row\" *ngFor=\"let mat of matList; let i = index\">\r\n\t            \t\t\t<div class=\"col-xs-6 col-sm-4\">\r\n\t            \t\t\t\t<label>Description</label>\r\n\t           \t\t\t\t\t<input type=\"text\" id=\"matname{{i}}\" class='form-control' autocomplete=\"off\" placeholder=\"Search part...\"\r\n\t          \t\t\t\t\t \t(input)=\"searchItem($event.target.value,i)\" value=\"{{getMaterialName(mat.material_id)}}\"/>\r\n\t          \t\t\t\t\t<input type=\"hidden\" name=\"material{{i}}\" [(ngModel)]=\"mat.material_id\" required/>\r\n\t          \t\t\t\t\t<div *ngIf=\"currFocus == i\" id=\"mat_suggestions{{i}}\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_part of suggestedPartsList\" (click)=\"onSuggestionSelected(i,sugg_part.id,sugg_part.description,sugg_part.price)\">\r\n\t\t\t\t\t\t\t\t\t\t<b>[{{sugg_part.id}}]</b> {{sugg_part.description}}\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t            \t\t\t</div>\r\n\t            \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none\">\r\n\t            \t\t\t\t<label>Order qty</label>\r\n\t            \t\t\t\t<input type=\"text\" class='form-control' name=\"quantity{{i}}\" [(ngModel)]=\"mat.quantity\" placeholder=\"qty\" required/>\r\n\t            \t\t\t</div>\r\n\t            \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none\">\r\n\t            \t\t\t\t<label>Back Order</label>\r\n\t            \t\t\t\t<input type=\"text\" class='form-control' name=\"back_order{{i}}\" [(ngModel)]=\"mat.back_order\"/>\r\n\t            \t\t\t</div>\r\n\t            \t\t\t<div class=\"col-xs-2 col-sm-1 pad_left_none\">\r\n\t            \t\t\t\t<label>Unit</label>\r\n\t            \t\t\t\t<input type=\"text\" class='form-control' name=\"unit{{i}}\" [(ngModel)]=\"mat.unit\"/>\r\n\t            \t\t\t</div>\r\n\t            \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none\">\r\n\t            \t\t\t\t<label>Unit Price</label>\r\n\t            \t\t\t\t<input type=\"text\" class='form-control' name=\"price{{i}}\" [(ngModel)]=\"mat.price\"/>\r\n\t            \t\t\t</div>\r\n\t            \t\t\t<div class=\"col-xs-2 col-sm-1 pad_left_none\">\r\n\t            \t\t\t\t<a type=\"text\" class='btn btn-danger pull-right x_button' (click)=\"onDeleteMaterial(i)\">X</a>\r\n\t            \t\t\t</div>\r\n\t            \t\t\t<div class=\"col-xs-12 col-sm-12 text-right\">\r\n\t            \t\t\t\t<label>Subtotal: </label><span class=\"view_form_input\">{{mat.price * mat.quantity | currency}}</span>\r\n\t            \t\t\t</div>\r\n\t            \t\t</div>\r\n\t\t            </div>\r\n\t\t            <div class=\"form-group row margin_top_15\">\r\n\t                    <div class=\"col-xs-12 col-sm-12\">\r\n\t                        <a id=\"ladd_row\" class=\"btn btn-default pull-left\" (click)=\"addMaterial()\"><b>+Add Item</b></a>\r\n\t                    </div>\r\n\t               \t</div>\r\n\t\t            <div class=\"row\">\r\n\t\t                <div class=\"col-xs-12 col-sm-12 text-right margin_top_15\">\r\n\t\t                    <b>Total: {{total_cost}}</b>\r\n\t\t                </div>\r\n\t\t            </div>    \r\n\t\t                \r\n\t\t            <div class=\"form-group\">\r\n\t\t            \t<div class=\"row\">\r\n\t\t            \t\t<div class=\"col-xs-12 col-sm-12\">\r\n\t\t            \t\t\t<label for=\"dir_remarks\">Directions/Remarks</label>\r\n\t\t            \t\t\t<textarea class=\"form-control\" id=\"dir_remarks\" name=\"dir_remarks\" [(ngModel)]=\"model.inputMap.remarks\"></textarea>\r\n\t\t            \t\t</div>\r\n\t\t            \t</div>\r\n\t\t            </div>\r\n\t\t            <div class=\"form-group\">\r\n\t\t            \t<div class=\"row\">\r\n\t\t            \t\t<div class=\"col-xs-12 col-sm-6\">\r\n\t\t            \t\t\t<label for=\"req_by_name\">Requested by</label>\r\n\t\t            \t\t\t<input type=\"text\" class=\"form-control\" id=\"req_by_name\" name=\"req_by_name\" [(ngModel)]=\"model.inputMap.requested_by\">\r\n\t            \t\t\t</div>\r\n            \t\t\t</div>\r\n           \t\t\t</div>\r\n\t\t            <div class=\"row\" *ngIf=\"model\">\r\n\t\t                <div class=\"col-xs-6 text-right margin_bottom_15\">\r\n\t\t                \t<button type=\"submit\" class=\"btn btn-info\"><b>Save Changes</b></button>\r\n\t\t                </div>\r\n\t\t                <div class=\"col-xs-6 text-left margin_bottom_15\" *ngIf=\"model.process_number == '1'\">\r\n\t\t                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmitProceed()\" [disabled]=\"!nisshoForm.form.valid\"><b>Submit Form</b></button>\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t        </form>\r\n\t\t    </div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/fill/purchase-order/purchase-order.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/forms/fill/purchase-order/purchase-order.component.ts ***!
  \***********************************************************************/
/*! exports provided: PurchaseOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderComponent", function() { return PurchaseOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");






var PurchaseOrderComponent = /** @class */ (function () {
    function PurchaseOrderComponent(route, fms, ssv, aus, adms, router, ems, ims) {
        this.route = route;
        this.fms = fms;
        this.ssv = ssv;
        this.aus = aus;
        this.adms = adms;
        this.router = router;
        this.ems = ems;
        this.ims = ims;
        this.typeId = '48';
    }
    PurchaseOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get user info from session
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.fillerName = JSON.parse(localStorage.getItem('currentUser')).user.name;
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        this.populateNames();
        this.getPartsList();
        this.getCustomersList();
        //Get form ID if specified on route.
        //If specified, load the form.
        this.route.params.subscribe(function (params) {
            _this.formId = params['formId'];
            if (_this.formId) {
                //Load Form
                _this.getModel();
            }
            else {
                //Create a new form
                _this.model = {
                    'id': _this.formId,
                    'type_id': _this.typeId,
                    'status_id': '1',
                    'process_number': '1',
                    'created_date': _this.ssv.toHtmlDate(null),
                    'last_modified_date': _this.ssv.toHtmlDate(null),
                    'filler_id': _this.fillerUid,
                    'modifier_id': _this.fillerUid,
                    'inputMap': {
                        'req_date': _this.ssv.toHtmlDate(null),
                        'requested_by': _this.fillerName
                    },
                    "inputTables": {
                        "materials": []
                    }
                };
            }
        });
    };
    PurchaseOrderComponent.prototype.populateNames = function () {
        var _this = this;
        this.aus.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    PurchaseOrderComponent.prototype.getModel = function () {
        var _this = this;
        this.fms.getForm(this.typeId, this.formId)
            .subscribe(function (model) {
            model.created_date = _this.ssv.toHtmlDate(model.created_date);
            model.last_modified_date = _this.ssv.toHtmlDate(null);
            _this.model = model;
            _this.matList = model.inputTables.materials;
        });
    };
    PurchaseOrderComponent.prototype.onSubmit = function () {
        var _this = this;
        //Collect all materials and labor
        this.model.inputTables.materials = this.matList;
        //Upload form data to DB
        if (this.formId) {
            //Update an existing form
            this.fms.updateForm(this.model, this.typeId, this.formId)
                .subscribe(function (data) {
                //If submitted by Dan, email Natalie
                if (_this.roleId == '4' && _this.model.process_number == '2') {
                    //Email from Tech to I.Manager (role = 4) to Customer Service (role = 7)
                    var recipient = _this.usersList.find(function (x) { return x.role_id == '7' && x.is_active == '1'; });
                    _this.sendIManagerSubmissionEmail(recipient.uid);
                    _this.ssv.showSuccess('Form successfully submitted!');
                    _this.router.navigate(['/view-purchase-order/1']);
                }
                else {
                    _this.ssv.showSuccess('Form successfully updated!');
                    _this.router.navigate(['/view-purchase-order/2']);
                }
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update form!');
            });
        }
        else {
            //Create a new form
            this.fms.newForm(this.model, this.typeId)
                .subscribe(function (data) {
                //If submitted by Dan and is not draft, email Natalie
                //If submitted by Dan, email Natalie
                if (_this.roleId == '4' && _this.model.process_number == '2') {
                    //Email from Tech to I.Manager (role = 4) to Customer Service (role = 7)
                    var recipient = _this.usersList.find(function (x) { return x.role_id == '7' && x.is_active == '1'; });
                    _this.sendIManagerSubmissionEmail(recipient.uid);
                    _this.ssv.showSuccess('Form successfully submitted!');
                    _this.router.navigate(['/view-purchase-order/1']);
                }
                else {
                    _this.ssv.showSuccess('Form successfully updated!');
                    _this.router.navigate(['/view-purchase-order/2']);
                }
            });
        }
    };
    //Submit to Irrigation Manager
    PurchaseOrderComponent.prototype.onSubmitProceed = function () {
        //Update process number if form is submitted (not just saved as draft)
        this.model.process_number = '2';
        this.onSubmit();
    };
    //Send email to Irrigation Manager for approval
    PurchaseOrderComponent.prototype.sendIManagerSubmissionEmail = function (recipientId) {
        var _this = this;
        //Get form filler as recipient
        this.aus.getUser(recipientId).subscribe(function (user) {
            console.log(JSON.stringify(user));
            if (user.email) {
                //Send Email
                var recipientList = [user.email];
                var ccList = [];
                var bccList = [];
                var subject = "Purchase Order - Waiting for Review";
                var content = user.name + ","
                    + "<br><br>A Purchase Order has been submitted for review."
                    + "<br>Please review and assign a job number to the form.";
                var email = { 'subject': subject,
                    'body': content,
                    'to': recipientList,
                    'cc': ccList,
                    'bcc': bccList };
                _this.ems.sendEmail(email).subscribe(function (data) { });
            }
            else {
                console.log('Email recipient not found');
            }
        }, function (error) {
            console.log(error);
            // Display error message
            _this.ssv.showError('Error: Email recipient not found!');
        });
    };
    //MULTI INPUT FIELDS    
    PurchaseOrderComponent.prototype.addMaterial = function () {
        var mat = { 'form_id': this.typeId, 'material_id': '0' };
        if (!this.matList) {
            this.matList = [];
        }
        this.matList.push(mat);
    };
    PurchaseOrderComponent.prototype.onDeleteMaterial = function (itemIdx) {
        var deletedItem = this.matList[itemIdx];
        this.matList.splice(itemIdx, 1);
        this.suggestedPartsList = [];
        //Delete from server
        var inputMap = { "inputMap": deletedItem };
        this.fms.deleteMultiInput(inputMap, this.typeId, 'materials', 'material_id')
            .subscribe(function (data) { }, function (error) { console.log(error); });
    };
    //MATERIAL SEARCH
    PurchaseOrderComponent.prototype.getPartsList = function () {
        var _this = this;
        this.ims.getMaterials('1')
            .subscribe(function (list) {
            _this.partsList = list;
        });
    };
    /**
     * When a suggestion is selected, assign part ID to matList at position == itemNum
     * Empty out suggestions for future use
     * @param itemNum
     */
    PurchaseOrderComponent.prototype.onSuggestionSelected = function (itemNum, matId, matName) {
        this.matList[itemNum].material_id = "" + matId;
        var part = this.partsList.find(function (x) { return x.id == matId; });
        if (part) {
            this.matList[itemNum].price = "" + part.price;
            this.matList[itemNum].unit = part.unit;
        }
        document.getElementById('matname' + itemNum).value = matName;
        this.suggestedPartsList = [];
    };
    PurchaseOrderComponent.prototype.searchItem = function (input, itemIdx) {
        this.currFocus = itemIdx;
        if (!input) {
            this.suggestedPartsList = [];
            return;
        }
        if (this.partsList) {
            this.suggestedPartsList = this.partsList.filter(function (x) {
                return (x.description.toLowerCase().includes(input.toLowerCase())) ||
                    (x.id == input);
            });
        }
    };
    PurchaseOrderComponent.prototype.getMaterialName = function (matId) {
        if (this.partsList) {
            var part = this.partsList.find(function (x) { return x.id == matId; });
            if (part) {
                return part.description;
            }
        }
        return '';
    };
    //CUSTOMER SEARCH
    PurchaseOrderComponent.prototype.getCustomersList = function () {
        var _this = this;
        this.adms.getCustomersByDept('2')
            .subscribe(function (list) {
            _this.customersList = list;
        });
    };
    PurchaseOrderComponent.prototype.onCustomerSelected = function (custId) {
        var customer = this.customersList.find(function (x) { return x.id == custId; });
        this.model.inputMap.job_name = customer.project_name;
        this.model.inputMap.job_num = customer.jobnum;
        this.model.inputMap.client = customer.management;
        this.custRecList = [];
    };
    PurchaseOrderComponent.prototype.searchCustomer = function (input) {
        if (this.customersList) {
            this.custRecList = this.customersList.filter(function (x) {
                return (x.project_name.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    PurchaseOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order',
            template: __webpack_require__(/*! ./purchase-order.component.html */ "./src/app/forms/fill/purchase-order/purchase-order.component.html"),
            styles: [__webpack_require__(/*! ./purchase-order.component.css */ "./src/app/forms/fill/purchase-order/purchase-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["FormManagementService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["AdministrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["EmailNotificationService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["InventoryManagementService"]])
    ], PurchaseOrderComponent);
    return PurchaseOrderComponent;
}());



/***/ }),

/***/ "./src/app/forms/fill/start-job/start-job.component.css":
/*!**************************************************************!*\
  !*** ./src/app/forms/fill/start-job/start-job.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2ZpbGwvc3RhcnQtam9iL3N0YXJ0LWpvYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/forms/fill/start-job/start-job.component.html":
/*!***************************************************************!*\
  !*** ./src/app/forms/fill/start-job/start-job.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This page fragment is to be included under Dashboard <body> tag -->\r\n\r\n<div class=\"row margin_addform text-left\">\r\n   \t<h2 class=\"text-center\">Start a Job</h2>\r\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 margin_addform\">\r\n    \t<form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n    \t\t<div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-4 col-md-offset-4 text-left\">\r\n\t\t            <label for=\"job_number\">Enter Job Number</label>\r\n\t         \t</div>\r\n            </div>\r\n            <div class=\"row\">\r\n            \t<div class=\"col-xs-6 col-md-4 col-md-offset-4 text-left\">\r\n\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Job #\" name=\"job_number\" [(ngModel)]=\"job_number\" required>\r\n\t         \t</div>\r\n\t         \t<div class=\"col-xs-6 col-md-4 text-left\">\r\n\t                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!nisshoForm.form.valid\"><b>Start Job</b></button>\r\n\t            </div>\r\n            </div>\r\n    \t</form>\t\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/fill/start-job/start-job.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/fill/start-job/start-job.component.ts ***!
  \*************************************************************/
/*! exports provided: StartJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartJobComponent", function() { return StartJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StartJobComponent = /** @class */ (function () {
    function StartJobComponent(fms, ssv, router) {
        this.fms = fms;
        this.ssv = ssv;
        this.router = router;
        this.typeId = '45'; //Work Order
        this.typeId2 = '54'; //Stock Transfer
    }
    StartJobComponent.prototype.ngOnInit = function () {
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.populateJobNumberList();
        this.jobNumsAvailable = [];
        //Init Work Order model
        this.model = {
            'id': '0',
            'type_id': this.typeId,
            'status_id': '1',
            'process_number': '1',
            'created_date': this.ssv.toHtmlDate(null),
            'last_modified_date': this.ssv.toHtmlDate(null),
            'filler_id': this.fillerUid,
            'modifier_id': this.fillerUid,
            'inputMap': {
                'date': this.ssv.toHtmlDate(null)
            },
            "inputTables": {
                "materials": [],
                "labors": []
            }
        };
        //Init Stock Transfer model
        this.model2 = {
            'id': '0',
            'type_id': this.typeId2,
            'status_id': '1',
            'process_number': '1',
            'created_date': this.ssv.toHtmlDate(null),
            'last_modified_date': this.ssv.toHtmlDate(null),
            'filler_id': this.fillerUid,
            'modifier_id': this.fillerUid,
            'inputMap': {
                'date': this.ssv.toHtmlDate(null)
            },
            "inputTables": {
                "materials": []
            }
        };
    };
    StartJobComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.jobNumsAvailable.includes(this.job_number)) {
            //Create a new work order
            this.model.inputMap.job_num = this.job_number;
            this.fms.newForm(this.model, this.typeId)
                .subscribe(function (data) {
                var woId = data['formId'];
                //If successful, create a new stock transfer
                _this.model2.inputMap.job_num = _this.job_number;
                _this.fms.newForm(_this.model2, _this.typeId2)
                    .subscribe(function (data) {
                    // Page redirect when getting response
                    _this.ssv.showSuccess('Form successfully created!');
                    _this.router.navigate(['/work-order/' + woId]);
                }, function (error) {
                    // Display error message
                    _this.ssv.showError('Unable to create stock transfer!');
                });
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to start job!');
            });
        }
        else {
            this.ssv.showError('Error: job number taken!');
        }
    };
    StartJobComponent.prototype.populateJobNumberList = function () {
        var _this = this;
        //Get job numbers from non-deleted Work Orders (type = '45')
        this.fms.getForms(this.typeId, 1000, 'DESC', 0)
            .subscribe(function (WOList) {
            if (WOList) {
                _this.jobNumsAvailable = WOList.filter(function (x) { return x.is_deleted == '0'; }).map(function (x) { return x.inputMap.job_num; });
            }
        });
    };
    StartJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-job',
            template: __webpack_require__(/*! ./start-job.component.html */ "./src/app/forms/fill/start-job/start-job.component.html"),
            styles: [__webpack_require__(/*! ./start-job.component.css */ "./src/app/forms/fill/start-job/start-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StartJobComponent);
    return StartJobComponent;
}());



/***/ }),

/***/ "./src/app/forms/fill/stock-transfer/stock-transfer.component.css":
/*!************************************************************************!*\
  !*** ./src/app/forms/fill/stock-transfer/stock-transfer.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2ZpbGwvc3RvY2stdHJhbnNmZXIvc3RvY2stdHJhbnNmZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forms/fill/stock-transfer/stock-transfer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/forms/fill/stock-transfer/stock-transfer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col col-sm-offset-1 text-left\">\r\n\t\t\t<h3><a routerLink=\"/view-stock-transfer\" class=\"back_btn\"><span class=\"glyphicon glyphicon-chevron-left\"></span>Back</a></h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-2 col-md-1\"></div>\r\n\t\t<div class=\"col-lg-8 col-md-10 col-xs-12\">\r\n        \t<div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n\t\t            <h2 class=\"text-center\">Stock Transfer</h2>\r\n\t         \t</div>\r\n\t        </div>\r\n            <form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n                 <div class=\"form-group\">\r\n                     <label class=\"group_label_text\">Project Information</label>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-6 col-xs-12\">\r\n                             <label for=\"job_num\">Job Number</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"job_num\" name=\"job_num\" [(ngModel)]=\"model.inputMap.job_num\">\r\n                         </div>\r\n                         <div class=\"col-sm-6 col-xs-12\">\r\n                             <label for=\"date\">Date</label>\r\n                             <input type=\"date\" class=\"form-control\" id=\"date\" name=\"date\"  [(ngModel)]=\"model.inputMap.date\">\r\n                         </div>\r\n                     </div>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-12 col-xs-12\">\r\n                             <label for=\"project_name\">Project Name</label>\r\n                             <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"project_name\" name=\"project_name\" (input)=\"searchCustomer($event.target.value)\" [(ngModel)]=\"model.inputMap.name\" required>\r\n                         \t<div *ngIf=\"custRecList\" id=\"customer_suggestion\">\r\n\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_part of custRecList\" (click)=\"onCustomerSelected(sugg_part.id)\">\r\n\t\t\t\t\t\t\t\t\t{{sugg_part.project_name}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n                     \r\n               <div class=\"form-group\" id=\"materials_container\">\r\n                   <label class=\"group_label_text\">Materials Used</label>\r\n              \t\t<div class=\"row\" *ngFor=\"let mat of matList; let i = index\">\r\n              \t\t\t<div class=\"col-xs-7 col-sm-7 pad_right_5\">\r\n          \t\t\t\t\t<input type=\"text\" id=\"matname{{i}}\" class='form-control' autocomplete=\"off\" placeholder=\"Search part...\"\r\n          \t\t\t\t\t (input)=\"searchItem($event.target.value,i)\" value=\"{{getMaterialName(mat.material_id)}}\"/>\r\n          \t\t\t\t\t<input type=\"hidden\" name=\"material{{i}}\" [(ngModel)]=\"mat.material_id\" required/>\r\n          \t\t\t\t\t<div *ngIf=\"currFocus == i\" id=\"mat_suggestions{{i}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_part of suggestedPartsList\" (click)=\"onSuggestionSelected(i,sugg_part.id,sugg_part.description,sugg_part.price)\">\r\n\t\t\t\t\t\t\t\t\t{{sugg_part.description}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-3 col-sm-3 pad_right_5 pad_left_none\">\r\n              \t\t\t\t<input type=\"text\" class='form-control' name=\"quantity{{i}}\" [(ngModel)]=\"mat.quantity\" placeholder=\"qty\" required/>\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none\">\r\n             \t\t\t\t<a type=\"text\" class='btn btn-danger pull-right x_button' (click)=\"onDeleteMaterial(i)\">X</a>\r\n             \t\t\t</div>\r\n              \t\t</div>\r\n               </div>\r\n               <div class=\"form-group row margin_top_15\">\r\n                    <div class=\"col-xs-12 col-sm-12\">\r\n                        <a id=\"ladd_row\" class=\"btn btn-default pull-left\" (click)=\"addMaterial()\"><b>+Add Material</b></a>\r\n                    \t<button id=\"scan_button\" type=\"button\" (click)=\"scanPart()\" class=\"btn btn-default pull-right\"><b>SCAN</b></button>\r\n                    </div>\r\n               \t</div>\r\n               \t\r\n                <div class=\"row\">\r\n\t                <div class=\"col-xs-6 text-right margin_bottom_15\">\r\n\t                \t<button type=\"submit\" class=\"btn btn-info\"><b>Save as Draft</b></button>\r\n\t                </div>\r\n\t                <div class=\"col-xs-6 text-left margin_bottom_15\">\r\n\t                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmitProceed()\" [disabled]=\"!nisshoForm.form.valid\"><b>Submit Form</b></button>\r\n\t                </div>\r\n\t            </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-lg-2\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/fill/stock-transfer/stock-transfer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/forms/fill/stock-transfer/stock-transfer.component.ts ***!
  \***********************************************************************/
/*! exports provided: StockTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockTransferComponent", function() { return StockTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var StockTransferComponent = /** @class */ (function () {
    function StockTransferComponent(route, fms, ssv, adms, ims, router, coos) {
        this.route = route;
        this.fms = fms;
        this.ssv = ssv;
        this.adms = adms;
        this.ims = ims;
        this.router = router;
        this.coos = coos;
        this.typeId = '46';
        this.iosScanFlag = false;
        this.isDraft = true;
    }
    StockTransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get user info from session
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        //Populate customers for search
        this.getPartsList();
        this.getCustomersList();
        //Get form ID if specified on route.
        //If specified, load the form.
        this.route.params.subscribe(function (params) {
            _this.formId = params['formId'];
            if (_this.formId) {
                //Save form ID in cookie
                //document.cookie = 'formId=' + this.formId + '; max-age=86400; path="/"';
                _this.coos.set('formId', _this.formId, null, '/');
                //Load Form
                _this.getModel();
            }
            else {
                //Create a new form
                _this.model = {
                    'id': _this.formId,
                    'type_id': _this.typeId,
                    'status_id': '1',
                    'process_number': '1',
                    'created_date': _this.toHtmlDate(null),
                    'last_modified_date': _this.toHtmlDate(null),
                    'filler_id': _this.fillerUid,
                    'modifier_id': _this.fillerUid,
                    'inputMap': {
                        "date": _this.toHtmlDate(null)
                    },
                    "inputTables": {
                        "materials": []
                    }
                };
                _this.matList = [];
            }
        });
    };
    StockTransferComponent.prototype.getModel = function () {
        var _this = this;
        this.fms.getForm(this.typeId, this.formId)
            .subscribe(function (model) {
            model.created_date = _this.toHtmlDate(model.created_date);
            model.last_modified_date = _this.toHtmlDate(null);
            _this.model = model;
            _this.matList = model.inputTables.materials;
        });
    };
    StockTransferComponent.prototype.onSubmit = function () {
        var _this = this;
        //Collect all materials and labor
        this.model.inputTables.materials = this.matList;
        //Get api key
        var apiKey = JSON.parse(localStorage.getItem('currentUser')).apiKey;
        var form_id = this.formId;
        //Upload form data to DB
        if (this.formId) {
            //Update an existing form
            this.fms.updateForm(this.model, this.typeId, this.formId)
                .subscribe(function (data) {
                //Save form ID in cookie
                //document.cookie = 'formId=' + data['formId'] + '; max-age=86400; path="/"';
                _this.coos.set('formId', _this.formId, null, '/');
                if (_this.iosScanFlag) {
                    _this.iosScanFlag = false;
                    //console.log("Sending to: "+"scanpart://nissho/"+this.formId+"/"+apiKey);
                    setTimeout(function () { document.location.href = "scanpart://nissho/" + form_id + "/" + apiKey; }, 250);
                }
                else {
                    _this.ssv.showSuccess('Form successfully updated!');
                    // @ts-ignore
                    Android.reloadWebview();
                    if (_this.model.process_number == '2') {
                        _this.router.navigate(['/view-stock-transfer/1']);
                    }
                }
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update form!');
            });
        }
        else {
            //Create a new form
            this.fms.newForm(this.model, this.typeId)
                .subscribe(function (data) {
                //Save form ID in cookie
                //document.cookie = 'formId=' + data['formId'] + '; max-age=86400; path="/"';
                _this.coos.set('formId', data['formId'], null, '/');
                _this.formId = data['formId'];
                // Page redirect when getting response
                _this.ssv.showSuccess('Form successfully updated!');
                if (_this.iosScanFlag) {
                    _this.iosScanFlag = false;
                    //console.log("Sending to: "+"scanpart://nissho/"+data['formId']+"/"+apiKey);
                    setTimeout(function () { document.location.href = "scanpart://nissho/" + data['formId'] + "/" + apiKey; }, 250);
                }
                else {
                    // @ts-ignore
                    Android.reloadWebview();
                    if (_this.model.process_number == '2') {
                        _this.router.navigate(['/view-stock-transfer/1']);
                    }
                    else {
                        _this.router.navigate(['/stock-transfer/' + data['formId']]);
                    }
                }
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update form!');
            });
        }
    };
    StockTransferComponent.prototype.onSubmitProceed = function () {
        //Update process number if form is submitted (not just saved as draft)
        this.model.process_number = '2';
        this.onSubmit();
    };
    StockTransferComponent.prototype.toHtmlDate = function (datestr) {
        var date;
        if (datestr) {
            date = new Date(datestr);
        }
        else {
            date = new Date();
        }
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    //MULTI INPUT FIELDS    
    StockTransferComponent.prototype.addMaterial = function () {
        var mat = { 'form_id': this.typeId, 'material_id': '0' };
        this.matList.push(mat);
    };
    StockTransferComponent.prototype.onDeleteMaterial = function (itemIdx) {
        var deletedItem = this.matList[itemIdx];
        this.matList.splice(itemIdx, 1);
        this.suggestedPartsList = [];
        //Delete from server
        var inputMap = { "inputMap": deletedItem };
        this.fms.deleteMultiInput(inputMap, this.typeId, 'materials', 'material_id')
            .subscribe(function (data) { }, function (error) { console.log(error); });
    };
    //MATERIAL SEARCH
    StockTransferComponent.prototype.getPartsList = function () {
        var _this = this;
        this.ims.getMaterials('6')
            .subscribe(function (list) {
            _this.partsList = list;
        });
    };
    /**
     * When a suggestion is selected, assign part ID to matList at position == itemNum
     * Empty out suggestions for future use
     * @param itemNum
     */
    StockTransferComponent.prototype.onSuggestionSelected = function (itemNum, matId, matName, price) {
        this.matList[itemNum].material_id = "" + matId;
        if (price) {
            this.matList[itemNum].price = "" + price;
        }
        else {
            this.matList[itemNum].price = "0";
        }
        document.getElementById('matname' + itemNum).value = matName;
        this.suggestedPartsList = [];
    };
    StockTransferComponent.prototype.searchItem = function (input, itemIdx) {
        this.currFocus = itemIdx;
        if (this.partsList) {
            this.suggestedPartsList = this.partsList.filter(function (x) {
                return (x.description.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    StockTransferComponent.prototype.getMaterialName = function (matId) {
        if (this.partsList) {
            var part = this.partsList.find(function (x) { return x.id == matId; });
            if (part) {
                return part.description;
            }
        }
        return '';
    };
    //CUSTOMER SEARCH
    StockTransferComponent.prototype.getCustomersList = function () {
        var _this = this;
        this.adms.getCustomersByDept('6')
            .subscribe(function (list) {
            _this.customersList = list;
        });
    };
    StockTransferComponent.prototype.onCustomerSelected = function (custId) {
        var customer = this.customersList.find(function (x) { return x.id == custId; });
        this.model.inputMap.name = customer.project_name;
        this.model.inputMap.job_num = customer.jobnum;
        this.custRecList = [];
    };
    StockTransferComponent.prototype.searchCustomer = function (input) {
        if (this.customersList) {
            this.custRecList = this.customersList.filter(function (x) {
                return (x.project_name.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    StockTransferComponent.prototype.scanPart = function () {
        //Call Android Scanner function
        //Check if user is using iOS
        var userAgent = window.navigator.userAgent.toLowerCase(), safari = /safari/.test(userAgent), ios = /iphone|ipod|ipad/.test(userAgent);
        if (ios) {
            console.log('IS IOS');
            if (safari) {
                //Safari browser
            }
            else if (!safari) {
                //Webview
                //Navigate to a fake URL
                //setTimeout(function(){document.location.href="scanpart://nissho/irrigation"},250)
                this.iosScanFlag = true;
                this.onSubmit();
            }
            ;
        }
        else {
            this.onSubmit();
            //Call Android Scanner function
            console.log('Not IOS');
            // @ts-ignore
            Android.startScan();
        }
        ;
    };
    StockTransferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-transfer',
            template: __webpack_require__(/*! ./stock-transfer.component.html */ "./src/app/forms/fill/stock-transfer/stock-transfer.component.html"),
            styles: [__webpack_require__(/*! ./stock-transfer.component.css */ "./src/app/forms/fill/stock-transfer/stock-transfer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["FormManagementService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["AdministrationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_3__["InventoryManagementService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], StockTransferComponent);
    return StockTransferComponent;
}());



/***/ }),

/***/ "./src/app/forms/fill/walkthrough/walkthrough.component.css":
/*!******************************************************************!*\
  !*** ./src/app/forms/fill/walkthrough/walkthrough.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2ZpbGwvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forms/fill/walkthrough/walkthrough.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/forms/fill/walkthrough/walkthrough.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade nmodal_layer\" id=\"deleteWTModal\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Confirm Note Deletion</h4>\r\n      </div>\r\n      <div class=\"modal-body modal_body_warning text-center\">\r\n\t\t<b>Delete Note #{{focusedId+1}}?</b><br>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" (click)=\"onDeleteNote()\" class=\"btn btn-danger margin_right_15\">Delete</button>\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col col-sm-offset-1 text-left\">\r\n\t\t\t<h3><a routerLink=\"/view-walkthrough/2\" class=\"back_btn\"><span class=\"glyphicon glyphicon-chevron-left\"></span>Back</a></h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-xs-12\">\r\n        \t<div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n\t\t            <h2 class=\"text-center\">Walkthrough Form</h2>\r\n\t         \t</div>\r\n\t        </div>\r\n            <form *ngIf=\"model\" (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n                <div class=\"form-group\">\r\n                \t<label class=\"group_label_text\">Project Info</label>\r\n                \t<div class=\"row\">\r\n                        <div class=\"col-xs-12 col-sm-6\">\r\n                        \t<label for=\"walkthrough_type\">Walkthrough Type</label>\r\n              \t\t\t\t<select class=\"form-control\" name=\"walkthrough_type\" [(ngModel)]=\"model.inputMap.walkthrough_type\">\r\n               \t\t\t\t\t\t<option value=\"HOA\" selected>HOA</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Job\">Job</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Models\">Models</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Turnover\">Turnover</option>\r\n\t\t\t\t\t\t\t</select>\r\n           \t\t\t\t</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 col-xs-12\">\r\n                             <label for=\"project_name\">Project Name</label>\r\n                             <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"project_name\" name=\"project_name\" (input)=\"searchCustomer($event.target.value)\" [(ngModel)]=\"model.inputMap.project_name\" required>\r\n                         \t<div *ngIf=\"custRecList\" id=\"customer_suggestion\">\r\n\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_part of custRecList\" (click)=\"onCustomerSelected(sugg_part.id)\">\r\n\t\t\t\t\t\t\t\t\t{{sugg_part.project_name}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n                         </div>\r\n                        <div class=\"col-sm-6 col-xs-12\">\r\n                            <label for=\"lot_numbers\">Site</label>\r\n                            <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"lot_numbers\" name=\"lot_numbers\" [(ngModel)]=\"model.inputMap.lot_numbers\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"management_company\">Management Company / Developer</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"management_company\" name=\"management_company\" [(ngModel)]=\"model.inputMap.management_company\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 col-xs-12\">\r\n                            <label for=\"management_email\">Management Email</label>\r\n                        \t<textarea class=\"form-control\" id=\"management_email\" name=\"management_email\" [(ngModel)]=\"model.inputMap.management_email\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                \t\t<div class=\"col-xs-12 col-sm-12\">\r\n                \t\t\t<label for=\"attending\">Attending</label>\r\n                \t\t\t<textarea class=\"form-control\" id=\"attending\" name=\"attending\" [(ngModel)]=\"model.inputMap.attending\" required></textarea>\r\n                \t\t</div>\r\n                \t</div>\r\n                \t<div class=\"row\">\r\n                \t\t<div class=\"col-sm-4 col-xs-12\">\r\n                            <label for=\"date\">Date</label>\r\n                            <input type=\"date\" class=\"form-control\" id=\"date\" name=\"date\" [(ngModel)]=\"model.inputMap.date\">\r\n                        </div>\r\n                \t\t<div class=\"col-sm-4 col-sm-offset-2 col-xs-12\">\r\n                \t\t\t<label for=\"complete_by\">Complete by</label>\r\n                            <input type=\"date\" class=\"form-control\" id=\"complete_by\" name=\"complete_by\" [(ngModel)]=\"model.inputMap.complete_by\">\r\n                \t\t</div>\r\n                \t</div>\r\n                </div>\r\n                <div id=\"notes_container\">\r\n                    <label class=\"group_label_text\">Notes</label>\r\n                   \t<div class=\"row form-group\" *ngFor=\"let note of notesList; let i = index\">\r\n             \t\t\t<div class=\"col-xs-3 col-sm-3 large_label\">\r\n               \t\t\t\tItem #{{i+1}}\r\n               \t\t\t</div>\r\n               \t\t\t<div class=\"col-xs-2 col-sm-2 col-xs-offset-7 col-sm-offset-7 pad_left_none\">\r\n               \t\t\t\t<a type=\"text\" class='btn btn-danger pull-right x_button' \r\n               \t\t\t\t(click)=\"onClickForm(i)\" data-toggle=\"modal\" data-target=\"#deleteWTModal\">X</a>\r\n               \t\t\t</div>\r\n               \t\t\t<div class=\"col-xs-12 col-sm-12\">\r\n               \t\t\t\t<label>Area/Location</label>\r\n               \t\t\t\t<input type=\"text\" class='form-control' name=\"address{{i}}\" [(ngModel)]=\"note.address\"/>\r\n               \t\t\t</div>\r\n               \t\t\t<div class=\"col-xs-12 col-sm-12\">\r\n               \t\t\t\t<label>Description</label>\r\n               \t\t\t\t<textarea class=\"form-control\" name=\"description{{i}}\" [(ngModel)]=\"note.description\"></textarea>\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"note.attachment1 && !attachments1[i]\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<img src=\"{{getS3FormPicUrl(note.attachment1)}}\" class=\"uploaded_img img-responsive\">\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"!note.attachment1 || attachments1[i]\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<input type=\"file\" class=\"form-control\" accept=\"image/*\" (change)=\"onFileAdded($event,i,1)\">\r\n               \t\t\t</div>\r\n               \t\t\t\r\n               \t\t\t<div *ngIf=\"note.attachment2 && !attachments2[i]\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<img src=\"{{getS3FormPicUrl(note.attachment2)}}\" class=\"uploaded_img img-responsive\">\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"!note.attachment2 || attachments2[i]\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<input type=\"file\" class=\"form-control\" accept=\"image/*\" (change)=\"onFileAdded($event,i,2)\">\r\n               \t\t\t</div>\r\n               \t\t\t\r\n               \t\t\t<div *ngIf=\"note.attachment3 && !attachments3[i]\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<img src=\"{{getS3FormPicUrl(note.attachment3)}}\" class=\"uploaded_img img-responsive\">\r\n               \t\t\t</div>\r\n               \t\t\t<div *ngIf=\"!note.attachment3 || attachments3[i]\" class=\"col-xs-12 col-sm-6 col-md-4\">\r\n               \t\t\t\t<input type=\"file\" class=\"form-control\" accept=\"image/*\" (change)=\"onFileAdded($event,i,3)\">\r\n               \t\t\t</div>\r\n             \t\t</div>\r\n                </div>\r\n                <div class=\"form-group row margin_top_15\">\r\n                    <div class=\"col-xs-12 col-sm-12\">\r\n                        <a id=\"ladd_row\" class=\"btn btn-default pull-left\" (click)=\"addNote()\"><b>+Add Note</b></a>\r\n                    </div>\r\n               \t</div>\r\n                <div class=\"row\" *ngIf=\"!isSubmitting\">\r\n\t                <div class=\"col-xs-6 text-right margin_bottom_form\">\r\n\t                \t<button type=\"submit\" class=\"btn btn-info\"><b>Save as Draft</b></button>\r\n\t                </div>\r\n\t                <div class=\"col-xs-6 text-left margin_bottom_form\">\r\n\t                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmitProceed()\" [disabled]=\"!nisshoForm.form.valid\"><b>Submit Form</b></button>\r\n\t                </div>\r\n\t            </div>\r\n\t            <div class=\"row\" *ngIf=\"isSubmitting\">\r\n\t                <div class=\"col-xs-12 text-center margin_bottom_form\">\r\n\t                \t<span class=\"loader\"></span> Saving...\r\n\t                </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/fill/walkthrough/walkthrough.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/forms/fill/walkthrough/walkthrough.component.ts ***!
  \*****************************************************************/
/*! exports provided: WalkthroughComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughComponent", function() { return WalkthroughComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/S3Manager */ "./src/app/api/S3Manager.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");







var WalkthroughComponent = /** @class */ (function () {
    function WalkthroughComponent(route, fms, ssv, aus, router, adms, ems) {
        this.route = route;
        this.fms = fms;
        this.ssv = ssv;
        this.aus = aus;
        this.router = router;
        this.adms = adms;
        this.ems = ems;
        this.typeId = '49';
        this.isDraft = true;
        this.isSubmitting = false;
    }
    WalkthroughComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get user info from session
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.fillerName = JSON.parse(localStorage.getItem('currentUser')).user.name;
        this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        //Populate customers for search
        this.getCustomersList();
        //Create list of empty attachment slots
        this.attachments1 = [];
        this.attachments2 = [];
        this.attachments3 = [];
        //Get form ID if specified on route.
        //If specified, load the form.
        this.route.params.subscribe(function (params) {
            _this.formId = params['formId'];
            if (_this.formId) {
                //Load Form
                _this.getModel();
            }
            else {
                //Create a new form
                _this.model = {
                    'id': '0',
                    'type_id': _this.typeId,
                    'status_id': '1',
                    'process_number': '2',
                    'created_date': _this.toHtmlDate(null),
                    'last_modified_date': _this.toHtmlDate(null),
                    'filler_id': _this.fillerUid,
                    'modifier_id': _this.fillerUid,
                    'inputMap': {},
                    "inputTables": {
                        "notes": []
                    }
                };
                _this.notesList = [];
                _this.nextItemNum = 1;
            }
        });
    };
    WalkthroughComponent.prototype.getModel = function () {
        var _this = this;
        this.fms.getForm(this.typeId, this.formId)
            .subscribe(function (model) {
            model.created_date = _this.toHtmlDate(model.created_date);
            model.last_modified_date = _this.toHtmlDate(null);
            if (model.inputMap.date) {
                var date = new Date(model.inputMap.date);
                date.setDate(date.getDate() + 15);
                model.inputMap.complete_by = _this.ssv.toHtmlDateStr(date);
            }
            _this.model = model;
            _this.notesList = model.inputTables.notes;
            _this.nextItemNum = +_this.notesList[_this.notesList.length - 1].item_number + 1;
            for (var i = 0; i < _this.notesList.length; i++) {
                _this.attachments1.push(null);
                _this.attachments2.push(null);
                _this.attachments3.push(null);
            }
        });
    };
    WalkthroughComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        //Add "-" to empty note fields
        this.notesList.forEach(function (n) {
            if (!n.address) {
                n.address = '-';
            }
            if (!n.description) {
                n.description = '-';
            }
        });
        //Collect all notes
        this.model.inputTables.notes = this.notesList;
        //Upload form data to DB
        if (this.formId) {
            //Update an existing form
            this.fms.updateForm(this.model, this.typeId, this.formId)
                .subscribe(function (data) {
                //Save attachments in S3
                for (var num = 1; num <= 3; num++) {
                    for (var noteIdx = 0; noteIdx < _this.attachments1.length; noteIdx++) {
                        if (_this.model.inputTables.notes[noteIdx]['attachment' + num] && _this['attachments' + num][noteIdx]) {
                            src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_3__["S3Manager"].uploadFormAttachment(_this['attachments' + num][noteIdx], _this.model.inputTables.notes[noteIdx]['attachment' + num], _this.clientId);
                        }
                    }
                }
                // Page redirect when getting response
                if (_this.model.process_number == '3') {
                    _this.notifyPunchlistReady();
                    _this.ssv.showSuccess('Walkthrough successfully sent!');
                }
                else {
                    _this.ssv.showSuccess('Walkthrough successfully updated!');
                }
                _this.router.navigate(['/view-walkthrough/2']);
            }, function (error) {
                // Display error message
                _this.isSubmitting = false;
                _this.ssv.showError('Unable to update form!');
            });
        }
        else {
            //Create a new form
            this.fms.newForm(this.model, this.typeId)
                .subscribe(function (data) {
                //Save attachments in S3
                for (var num = 1; num <= 3; num++) {
                    for (var noteIdx = 0; noteIdx < _this.attachments1.length; noteIdx++) {
                        if (_this.model.inputTables.notes[noteIdx]['attachment' + num] && _this['attachments' + num][noteIdx]) {
                            src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_3__["S3Manager"].uploadFormAttachment(_this['attachments' + num][noteIdx], _this.model.inputTables.notes[noteIdx]['attachment' + num], _this.clientId);
                        }
                    }
                }
                // Page redirect when getting response
                if (_this.model.process_number == '3') {
                    _this.notifyPunchlistReady();
                    _this.ssv.showSuccess('Walkthrough successfully sent!');
                }
                else {
                    _this.ssv.showSuccess('Walkthrough successfully updated!');
                }
                _this.router.navigate(['/view-walkthrough/2']);
            }, function (error) {
                // Display error message
                _this.isSubmitting = false;
                _this.ssv.showError('Unable to update form!');
            });
        }
    };
    WalkthroughComponent.prototype.onClickForm = function (id) {
        this.focusedId = +id;
    };
    WalkthroughComponent.prototype.onSubmitProceed = function () {
        //Update process number if form is submitted (not just saved as draft)
        this.model.process_number = '3';
        this.onSubmit();
    };
    WalkthroughComponent.prototype.toHtmlDate = function (datestr) {
        var date;
        if (datestr) {
            date = new Date(datestr);
        }
        else {
            date = new Date();
        }
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    //MULTI INPUT FIELDS    
    WalkthroughComponent.prototype.addNote = function () {
        var fid;
        if (this.formId) {
            fid = this.formId;
        }
        else {
            fid = '0';
        }
        var mat = { 'form_id': fid, 'item_number': '' + this.nextItemNum };
        this.notesList.push(mat);
        //Add counter to next item number
        this.nextItemNum++;
        //Add attachment size
        this.attachments1.push(null);
        this.attachments2.push(null);
        this.attachments3.push(null);
    };
    WalkthroughComponent.prototype.onDeleteNote = function () {
        document.getElementById('deleteWTModal').style.display = "none";
        var note = this.notesList[this.focusedId];
        this.notesList.splice(this.focusedId, 1);
        //Delete attachment(s)
        this.attachments1.splice(this.focusedId, 1);
        this.attachments2.splice(this.focusedId, 1);
        this.attachments3.splice(this.focusedId, 1);
        //Delete from server
        var inputMap = { "inputMap": note };
        this.fms.deleteMultiInput(inputMap, this.typeId, 'notes', 'item_number')
            .subscribe(function (data) { }, function (error) { console.log(error); });
    };
    //CUSTOMER SEARCH
    WalkthroughComponent.prototype.getCustomersList = function () {
        var _this = this;
        this.aus.getCustomers()
            .subscribe(function (list) {
            _this.customersList = list;
        });
    };
    WalkthroughComponent.prototype.onCustomerSelected = function (custId) {
        var customer = this.customersList.find(function (x) { return x.id == custId; });
        this.model.inputMap.project_name = customer.project_name;
        this.model.inputMap.management_company = customer.management;
        this.model.inputMap.management_email = customer.email;
        this.custRecList = [];
    };
    WalkthroughComponent.prototype.searchCustomer = function (input) {
        if (this.customersList) {
            this.custRecList = this.customersList.filter(function (x) {
                return (x.project_name.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    WalkthroughComponent.prototype.notifyPunchlistReady = function () {
        var _this = this;
        //Get Ayla's email
        this.adms.getUser('57').subscribe(function (user) {
            if (user.email) {
                //Send Email
                var recipientList = [user.email];
                var ccList = [];
                var bccList = [];
                var subject = "Punchlist Ready";
                var content = user.name + ","
                    + "<br><br>A Punchlist is ready for download."
                    + "<br>Please download the punchlist from the dashboard.";
                var email = { 'subject': subject,
                    'body': content,
                    'to': recipientList,
                    'cc': ccList,
                    'bcc': bccList };
                _this.ems.sendEmail(email).subscribe(function (data) { });
            }
            else {
                console.log('Email recipient not found');
            }
        }, function (error) {
            console.log(error);
            // Display error message
            _this.ssv.showError('Error: Email recipient not found!');
        });
    };
    WalkthroughComponent.prototype.onFileAdded = function (event, noteIdx, num) {
        if (event.target.files === undefined || event.target.files.length == 0) {
            this['attachments' + num][noteIdx] = null;
            delete this.notesList[noteIdx]['attachment' + num];
        }
        else {
            var ext = event.target.files[0].name.substr(event.target.files[0].name.lastIndexOf('.'));
            this['attachments' + num][noteIdx] = event.target.files[0];
            this.notesList[noteIdx]['attachment' + num] = 'form' + this.ssv.newGuid() + '_note' + (+noteIdx + 1) + '_att' + num + ext;
        }
    };
    Object.defineProperty(WalkthroughComponent.prototype, "diagnostic", {
        //DIAGNOSTIC
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "ndiagnostic", {
        get: function () { return JSON.stringify(this.notesList); },
        enumerable: true,
        configurable: true
    });
    WalkthroughComponent.prototype.getS3FormPicUrl = function (filename) {
        return src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_3__["S3Manager"].getFormAttachmentUrl(filename, this.clientId);
    };
    WalkthroughComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-walkthrough',
            template: __webpack_require__(/*! ./walkthrough.component.html */ "./src/app/forms/fill/walkthrough/walkthrough.component.html"),
            styles: [__webpack_require__(/*! ./walkthrough.component.css */ "./src/app/forms/fill/walkthrough/walkthrough.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["EmailNotificationService"]])
    ], WalkthroughComponent);
    return WalkthroughComponent;
}());



/***/ }),

/***/ "./src/app/forms/fill/work-order/work-order.component.css":
/*!****************************************************************!*\
  !*** ./src/app/forms/fill/work-order/work-order.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n\tfont-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZmlsbC93b3JrLW9yZGVyL3dvcmstb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2ZpbGwvd29yay1vcmRlci93b3JrLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forms/fill/work-order/work-order.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/forms/fill/work-order/work-order.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Deletion Modal -->\r\n<div class=\"modal fade\" id=\"deletionConfirmation\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form (ngSubmit)=\"onDelete()\" #nisshoForm=\"ngForm\">\r\n      <div class=\"modal-header\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Delete Work Order</h4>\r\n      </div>\r\n      <div class=\"modal-body modal_body_warning\">\r\n\t\t<b>Warning: This will delete the Work Order and <u>ALL forms with the same job number</u> from the system.</b><br>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"submit\" class=\"btn btn-danger\">Delete</button>\r\n      \t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n      </form>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col col-sm-offset-1 text-left\">\r\n\t\t\t<h3><a routerLink=\"/view-work-order/1\" class=\"back_btn\"><span class=\"glyphicon glyphicon-chevron-left\"></span>Back w/o saving</a>\r\n\t\t\t<a data-toggle=\"modal\" data-target=\"#deletionConfirmation\" class=\"btn btn-danger btn-lg pull-right\">Delete WO</a></h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\"></div>\r\n\t\t<div class=\"col-sm-8 col-xs-12\">\r\n        \t<div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n\t\t            <h2 class=\"text-center\">Work Order Form</h2>\r\n\t         \t</div>\r\n\t        </div>\r\n            <form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n                 <div class=\"form-group\">\r\n                     <label class=\"group_label_text\">Project Information</label>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-6 col-xs-12\">\r\n                             <label for=\"job_number\">Nissho Job #</label>\r\n\t\t\t\t\t\t\t<div><i>{{job_number}}</i></div>\r\n                         </div>\r\n                         <div class=\"col-sm-6 col-xs-12\">\r\n                             <label for=\"po_number\">IWO #</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"po_number\" name=\"po_number\"  [(ngModel)]=\"model.inputMap.po_num\">\r\n                         </div>\r\n                     </div>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-12 col-xs-12\">\r\n                             <label for=\"project_name\">Project Name</label>\r\n                             <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"project_name\" name=\"project_name\" (input)=\"searchCustomer($event.target.value)\" [(ngModel)]=\"model.inputMap.project_name\" required>\r\n                         \t<div *ngIf=\"custRecList\" id=\"customer_suggestion\">\r\n\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_part of custRecList\" (click)=\"onCustomerSelected(sugg_part.id)\">\r\n\t\t\t\t\t\t\t\t\t{{sugg_part.project_name}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n                         </div>\r\n                     </div>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-12 col-xs-12\">\r\n                             <label for=\"pm_name\">Project Manager</label>\r\n                             <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"pm_name\" name=\"pm_name\" (input)=\"searchPM($event.target.value)\" [(ngModel)]=\"model.inputMap.project_manager\" required>\r\n                         \t<div *ngIf=\"pmRecList\" id=\"pm_suggestion\">\r\n\t\t\t\t\t\t\t\t<div class=\"search_suggestion_entry\" *ngFor=\"let sugg_pm of pmRecList\" (click)=\"onPMSelected(sugg_pm)\">\r\n\t\t\t\t\t\t\t\t\t{{sugg_pm}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                     <label class=\"group_label_text\">Client Information</label>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-12 col-xs-12\">\r\n                             <label for=\"client_name\">Client Name</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"client_name\" name=\"client_name\" [(ngModel)]=\"model.inputMap.client_name\" required>\r\n                         </div>\r\n                     </div>\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-6 col-xs-6\">\r\n                             <label for=\"client_phone\">Client Phone #</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"client_phone\" name=\"client_phone\" [(ngModel)]=\"model.inputMap.client_phone\">\r\n                         </div>\r\n                         <div class=\"col-sm-6 col-xs-6\">\r\n                             <label for=\"client_email\">Client Email</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"client_email\" name=\"client_email\" [(ngModel)]=\"model.inputMap.client_email\">\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                     <div class=\"row\">\r\n                         <div class=\"col-sm-8 col-xs-8\">\r\n                             <label for=\"auth_by_print\">Authorized by (Print)</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"auth_by_print\" name=\"auth_by_print\" [(ngModel)]=\"model.inputMap.auth_by\">\r\n                         </div>\r\n                         <div class=\"col-sm-4 col-xs-4\">\r\n                             <label for=\"auth_date\">Date</label>\r\n                             <input type=\"date\" class=\"form-control\" id=\"auth_date\" name=\"auth_date\" [(ngModel)]=\"model.inputMap.client_signature_date\">\r\n                         </div>\r\n                     </div>\r\n                 </div>            \r\n                     \r\n               <div class=\"form-group\" id=\"materials_container\">\r\n                   <label class=\"group_label_text\">Materials</label>\r\n              \t\t<div class=\"row\">\r\n              \t\t\t<div class=\"col-xs-6 col-sm-6 pad_right_5\">\r\n          \t\t\t\t\tIrrigation materials:\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-6 col-sm-6 pad_left_none text-right\">\r\n              \t\t\t\t{{getStockTransferTotalCost() | currency}}\r\n              \t\t\t</div>\r\n              \t\t</div>\r\n               </div>\r\n               <div class=\"form-group\" id=\"labors_container\">\r\n                   <label class=\"group_label_text\">Labor</label>\r\n             \t\t<div class=\"row\">\r\n              \t\t\t<div class=\"col-xs-6 col-sm-6 pad_right_5\">\r\n          \t\t\t\t\tIrrigation Technician:\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-4 col-sm-4 pad_right_5 pad_left_none\">\r\n              \t\t\t\t{{tech_hours}} hrs x {{constants.tech_rate | currency}} =\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none text-right\">\r\n              \t\t\t\t{{tech_hours * constants.tech_rate | currency}}\r\n              \t\t\t</div>\r\n              \t\t</div>\r\n              \t\t<div *ngIf=\"labor_hours > 0\" class=\"row\">\r\n              \t\t\t<div class=\"col-xs-6 col-sm-6 pad_right_5\">\r\n          \t\t\t\t\tLabor:\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-4 col-sm-4 pad_right_5 pad_left_none\">\r\n              \t\t\t\t{{labor_hours}} hrs x {{constants.tech_labor_rate | currency}} =\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none text-right\">\r\n              \t\t\t\t{{labor_hours * constants.tech_labor_rate | currency}}\r\n              \t\t\t</div>\r\n              \t\t</div>\r\n              \t\t<div *ngIf=\"ot_hours > 0\" class=\"row\">\r\n              \t\t\t<div class=\"col-xs-6 col-sm-6 pad_right_5\">\r\n          \t\t\t\t\tOvertime:\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-4 col-sm-4 pad_right_5 pad_left_none\">\r\n              \t\t\t\t{{ot_hours}} hrs x {{constants.tech_ot_rate | currency}} =\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-2 col-sm-2 pad_left_none text-right\">\r\n              \t\t\t\t{{ot_hours * constants.tech_ot_rate | currency}}\r\n              \t\t\t</div>\r\n              \t\t</div>\r\n              \t\t<div *ngIf=\"ot_hours > 0\" class=\"row\">\r\n              \t\t\t<div class=\"col-xs-6 col-sm-6 pad_right_5\">\r\n          \t\t\t\t\t<b>Total Labor Cost :</b>\r\n              \t\t\t</div>\r\n              \t\t\t<div class=\"col-xs-2 col-xs-offset-4 col-sm-2 col-sm-offset-4 pad_left_none text-right\">\r\n              \t\t\t\t<b>{{total_lab_cost | currency}}</b>\r\n              \t\t\t</div>\r\n              \t\t</div>\r\n                </div>\r\n               \t<div class=\"form-group\">\r\n                \t<label class=\"group_label_text\">Work Information</label>\r\n                \t<div class=\"row\">\r\n\t\t\t        \t<div class=\"col-xs-12 col-md-6 text-left\">\r\n\t\t\t\t            <label for=\"attachment1\">Picture 1</label>\r\n\t\t\t\t            <span *ngIf=\"model.inputMap.attachment1 == null\"><input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment1 (change)=\"onFileAdded(attachment1.files,1)\"></span>\r\n                    \t\t<span *ngIf=\"model.inputMap.attachment1 != null\"><a (click)=\"onDownloadAttachment(1)\"> (Download)</a></span><br>\r\n\t\t\t         \t</div>\r\n\t\t\t         \t<div class=\"col-xs-12 col-md-6 text-left\">\r\n\t\t\t\t            <label for=\"attachment2\">Picture 2</label>\r\n\t\t\t\t            <span *ngIf=\"model.inputMap.attachment2 == null\"><input type=\"file\" class=\"form-control\" accept=\"image/*\" #attachment2 (change)=\"onFileAdded(attachment2.files,2)\"></span>\r\n                    \t\t<span *ngIf=\"model.inputMap.attachment2 != null\"><a (click)=\"onDownloadAttachment(2)\"> (Download)</a></span><br>\r\n\t\t\t         \t</div>\r\n\t\t            </div>\r\n                \t<div class=\"row\">\r\n                \t\t<div class=\"col-xs-12 col-sm-12\">\r\n                \t\t\t<label for=\"work_location\">Location</label>\r\n                \t\t\t<input type=\"text\" class=\"form-control\" id=\"work_location\" name=\"location\" [(ngModel)]=\"model.inputMap.location\">\r\n                \t\t</div>\r\n                \t</div>\r\n                \t<div class=\"row\">\r\n                \t\t<div class=\"col-xs-12 col-sm-12\">\r\n                \t\t\t<label for=\"work_description\">Work Description</label>\r\n                \t\t\t<textarea class=\"form-control\" id=\"work_description\" name=\"work_description\" [(ngModel)]=\"model.inputMap.work_description\"></textarea>\r\n                \t\t</div>\r\n                \t</div>\r\n                </div>\r\n               \t\r\n                <div class=\"row\" *ngIf=\"model && model.process_number == '1'\">\r\n\t                <div class=\"col-xs-12 text-center margin_bottom_15\">\r\n\t                \t<button type=\"submit\" class=\"btn btn-info\"><b>Save Changes</b></button>\r\n\t                </div>\r\n\t            </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/fill/work-order/work-order.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/forms/fill/work-order/work-order.component.ts ***!
  \***************************************************************/
/*! exports provided: WorkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderComponent", function() { return WorkOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/S3Manager */ "./src/app/api/S3Manager.ts");






var WorkOrderComponent = /** @class */ (function () {
    function WorkOrderComponent(route, fms, ssv, ims, adms, aus, router) {
        this.route = route;
        this.fms = fms;
        this.ssv = ssv;
        this.ims = ims;
        this.adms = adms;
        this.aus = aus;
        this.router = router;
        this.typeId = '45';
        this.isDraft = true;
    }
    WorkOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total_mat_cost = 0.0;
        this.total_lab_cost = 0.0;
        this.tech_hours = 2.0;
        this.ot_hours = 0.0;
        this.labor_hours = 0.0;
        this.repairFormList = [];
        //Get user info from session
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        //Populate parts and customers for search
        this.getConstants();
        this.getCustomersList();
        this.getPMList();
        //Get form ID if specified on route.
        //If specified, load the form.
        this.route.params.subscribe(function (params) {
            _this.formId = params['formId'];
            if (_this.formId) {
                //Load Form
                _this.getModel();
            }
        });
    };
    WorkOrderComponent.prototype.getModel = function () {
        var _this = this;
        this.fms.getForm(this.typeId, this.formId)
            .subscribe(function (model) {
            model.created_date = _this.toHtmlDate(model.created_date);
            model.last_modified_date = _this.toHtmlDate(null);
            _this.model = model;
            _this.matList = model.inputTables.materials;
            _this.labList = model.inputTables.labors;
            _this.job_number = model.inputMap.job_num;
            if (!model.inputMap.work_description) {
                _this.model.inputMap.work_description = "Technician was dispatched to above location for ";
            }
            //Populate Forms
            _this.populateST(model.inputMap.job_num);
            _this.populateIRFs(model.inputMap.job_num);
        });
    };
    WorkOrderComponent.prototype.populateST = function (jobnum) {
        var _this = this;
        this.fms.getForms('54', 1000, 'DESC', 0)
            .subscribe(function (list) {
            _this.stockTransfer = list.find(function (x) { return x.is_deleted == '0' && x.inputMap.job_num == jobnum; });
        });
    };
    WorkOrderComponent.prototype.populateIRFs = function (jobnum) {
        var _this = this;
        this.fms.getForms('47', 1000, 'DESC', 0)
            .subscribe(function (list) {
            _this.repairFormList = list.filter(function (x) { return x.is_deleted == '0' && x.inputMap.job_num == jobnum; });
            _this.setIrrigationRepairTotalLaborHrs();
        });
    };
    //TOTAL LABOR HOURS
    WorkOrderComponent.prototype.setIrrigationRepairTotalLaborHrs = function () {
        this.tech_hours = this.repairFormList.reduce(function (sum, irf) {
            return sum + (+irf.inputMap.tech_hours);
        }, 0);
        this.labor_hours = this.repairFormList.reduce(function (sum, irf) {
            return sum + (+irf.inputMap.labor_hours);
        }, 0);
        this.ot_hours = this.repairFormList.reduce(function (sum, irf) {
            return sum + (+irf.inputMap.ot_hours);
        }, 0);
        if (this.tech_hours < 2.0) {
            this.tech_hours = 2;
        }
        this.tech_hours += Math.floor(this.tech_hours / 2) * 0.25;
        this.labor_hours += Math.floor(this.labor_hours / 2) * 0.25;
        this.ot_hours += Math.floor(this.ot_hours / 2) * 0.25;
        this.total_lab_cost = (this.tech_hours * this.constants.tech_rate) +
            (this.labor_hours * this.constants.tech_labor_rate) +
            (this.ot_hours * this.constants.tech_ot_rate);
    };
    //TOTAL MATERIAL COST
    WorkOrderComponent.prototype.getStockTransferTotalCost = function () {
        var _this = this;
        if (this.total_mat_cost) {
            return this.total_mat_cost;
        }
        else if (this.stockTransfer && this.stockTransfer.inputTables && this.stockTransfer.inputTables.materials) {
            //Add up all part qty * price each, add tax on top of them and apply markup
            this.total_mat_cost = this.stockTransfer.inputTables.materials.reduce(function (sum, mat) {
                return sum + (+mat.quantity * +mat.price) + ((+mat.quantity * +mat.price) * _this.constants.tax_rate / 100);
            }, 0);
            //Apply markup
            this.total_mat_cost = this.total_mat_cost * 100 / this.constants.markup_rate;
            return this.total_mat_cost;
        }
        else {
            return 0;
        }
    };
    WorkOrderComponent.prototype.getConstants = function () {
        var _this = this;
        this.adms.getConstants()
            .subscribe(function (data) {
            _this.constants = data;
        }, function (error) {
            _this.ssv.showError('Error: Failed to retrieve pricing rates!');
        });
    };
    WorkOrderComponent.prototype.onSubmit = function () {
        var _this = this;
        //Collect all materials and labor
        this.model.inputTables.materials = this.matList;
        this.model.inputTables.labors = this.labList;
        //Form validation
        if (!this.validateForm()) {
            return;
        }
        //Upload form data to DB
        if (this.formId) {
            //Update an existing form
            this.fms.updateForm(this.model, this.typeId, this.formId)
                .subscribe(function (data) {
                _this.ssv.showSuccess('Form successfully updated!');
                _this.router.navigate(['/view-work-order/' + _this.model.process_number]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to update form!');
            });
        }
        else {
            //Create a new form
            this.model.inputMap.date = this.toHtmlDate(null);
            this.fms.newForm(this.model, this.typeId)
                .subscribe(function (data) {
                // Page redirect when getting response
                _this.ssv.showSuccess('Form successfully updated!');
                _this.router.navigate(['/view-work-order/' + _this.model.process_number]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to create new form!');
            });
        }
        //Save attachments in S3
        for (var num = 1; num <= 2; num++) {
            if (this.model.inputMap['attachment' + num] && this['attachment' + num]) {
                src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__["S3Manager"].uploadFormAttachment(this['attachment' + num], this.model.inputMap['attachment' + num], this.clientId);
            }
        }
    };
    //Submit to Irrigation Manager
    WorkOrderComponent.prototype.onSubmitProceed = function () {
        //Update process number if form is submitted (not just saved as draft)
        this.model.process_number = '2';
        this.onSubmit();
    };
    //Deactivate work order form and all activeIRFs, STs and POs with the same job number
    WorkOrderComponent.prototype.onDelete = function () {
        var _this = this;
        console.log('here');
        this.fms.setFormDeactivateStatus(this.typeId, this.formId, true)
            .subscribe(function (data) {
            //Deactivate IRFs w/ the same jobnum
            _this.deactivateIRFs();
            //Deactivate ST w/ the same jobnum
            _this.deactivateSTs();
            //Deactivate POs w/ the same jobnum
            //this.deactivatePOs();
            _this.ssv.showSuccess("Work Order successfully deleted");
            _this.router.navigate(['/view-work-order/x']);
        }, function (error) {
            _this.ssv.showError("Form(s) failed to be deleted");
            console.log(error);
        });
    };
    WorkOrderComponent.prototype.validateForm = function () {
        if (this.exceedChar(this.model.inputMap.po_num, 50)) {
            this.ssv.showError("IWO# cannot exceed 50 characters!");
            return false;
        }
        if (this.exceedChar(this.model.inputMap.project_name, 100)) {
            this.ssv.showError("Project Name cannot exceed 100 characters!");
            return false;
        }
        if (this.exceedChar(this.model.inputMap.client_name, 100)) {
            this.ssv.showError("Client Name cannot exceed 100 characters!");
            return false;
        }
        if (this.exceedChar(this.model.inputMap.client_phone, 100)) {
            this.ssv.showError("Client Phone cannot exceed 50 characters!");
            return false;
        }
        if (this.exceedChar(this.model.inputMap.client_email, 100)) {
            this.ssv.showError("Client Email cannot exceed 100 characters!");
            return false;
        }
        if (this.exceedChar(this.model.inputMap.auth_by, 100)) {
            this.ssv.showError("Authorized By cannot exceed 100 characters!");
            return false;
        }
        if (this.exceedChar(this.model.inputMap.work_description, 3000)) {
            this.ssv.showError("Work Description cannot exceed 3000 characters!");
            return false;
        }
        return true;
    };
    WorkOrderComponent.prototype.exceedChar = function (s, n) {
        if (!s) {
            return false;
        }
        return s.length > n;
    };
    WorkOrderComponent.prototype.deactivateIRFs = function () {
        var _this = this;
        //Get IDs of all IRFs with this job number
        this.repairFormList.forEach(function (x) {
            _this.fms.setFormDeactivateStatus(x.type_id, x.id, true)
                .subscribe(function (data) {
                console.log('Deleted IRF ' + x.id);
            }, function (error) {
                console.log(error);
            });
        });
    };
    WorkOrderComponent.prototype.deactivateSTs = function () {
        var _this = this;
        //Get ID of Stock Transfer with this job number
        this.fms.setFormDeactivateStatus(this.stockTransfer.type_id, this.stockTransfer.id, true)
            .subscribe(function (data) {
            console.log('Deleted ST ' + _this.stockTransfer.id);
        }, function (error) {
            console.log(error);
        });
    };
    WorkOrderComponent.prototype.onDownloadAttachment = function (num) {
        var filename = this.model.inputMap['attachment' + num];
        src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_5__["S3Manager"].downloadFormAttachment(filename, this.clientId);
    };
    //Filename = form[GUID]_att[num].[ext]
    WorkOrderComponent.prototype.onFileAdded = function (files, num) {
        if (files === undefined || files.length == 0) {
            this['attachment' + num] = null;
            this.model.inputMap['attachment' + num] = '';
        }
        else {
            var ext = files[0].name.substr(files[0].name.lastIndexOf('.'));
            this['attachment' + num] = files[0];
            this.model.inputMap['attachment' + num] = 'form' + this.newGuid() + '_att' + num + ext;
        }
    };
    //Create Unique ID
    WorkOrderComponent.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    WorkOrderComponent.prototype.toHtmlDate = function (datestr) {
        var date;
        if (datestr) {
            date = new Date(datestr);
        }
        else {
            date = new Date();
        }
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    //PM SEARCH
    WorkOrderComponent.prototype.getPMList = function () {
        var _this = this;
        this.aus.getUsers()
            .subscribe(function (list) {
            if (list) {
                _this.pmList = list.filter(function (x) { return x.role_id == '2' || x.role_id == '3'; })
                    .map(function (x) { return x.name; });
            }
        });
    };
    WorkOrderComponent.prototype.onPMSelected = function (pmName) {
        this.model.inputMap.project_manager = pmName;
        this.pmRecList = [];
    };
    WorkOrderComponent.prototype.searchPM = function (input) {
        if (this.pmList) {
            this.pmRecList = this.pmList.filter(function (x) {
                return (x.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    //CUSTOMER SEARCH
    WorkOrderComponent.prototype.getCustomersList = function () {
        var _this = this;
        this.adms.getCustomers()
            .subscribe(function (list) {
            _this.customersList = list;
        });
    };
    WorkOrderComponent.prototype.onCustomerSelected = function (custId) {
        var customer = this.customersList.find(function (x) { return x.id == custId; });
        this.model.inputMap.project_name = customer.project_name;
        this.model.inputMap.client_name = customer.management;
        this.model.inputMap.client_phone = customer.phone;
        this.model.inputMap.client_email = customer.email;
        this.model.inputMap.auth_by = customer.contact;
        this.model.inputMap.project_manager = customer.project_manager;
        this.custRecList = [];
    };
    WorkOrderComponent.prototype.searchCustomer = function (input) {
        if (this.customersList) {
            this.custRecList = this.customersList.filter(function (x) {
                return (x.project_name.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    Object.defineProperty(WorkOrderComponent.prototype, "diagnostic", {
        //DIAGNOSTIC
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkOrderComponent.prototype, "mdiagnostic", {
        get: function () { return JSON.stringify(this.matList); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkOrderComponent.prototype, "ldiagnostic", {
        get: function () { return JSON.stringify(this.labList); },
        enumerable: true,
        configurable: true
    });
    WorkOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-order',
            template: __webpack_require__(/*! ./work-order.component.html */ "./src/app/forms/fill/work-order/work-order.component.html"),
            styles: [__webpack_require__(/*! ./work-order.component.css */ "./src/app/forms/fill/work-order/work-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__["FormManagementService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__["InventoryManagementService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__["AdministrationService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WorkOrderComponent);
    return WorkOrderComponent;
}());



/***/ }),

/***/ "./src/app/forms/view-c-work-order/view-c-work-order.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/forms/view-c-work-order/view-c-work-order.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3ZpZXctYy13b3JrLW9yZGVyL3ZpZXctYy13b3JrLW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forms/view-c-work-order/view-c-work-order.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/forms/view-c-work-order/view-c-work-order.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Work Order</h3>\r\n   \t<div class=\"col-sm-12 text-center\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/m-work-order\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Form\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Project or Job #\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Project</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Job #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">PO #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Last Modified</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.inputMap.project_name}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.job_num}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.po_num}}</td>\r\n                    <td class=\"col-sm-3\">{{item.last_modified_date | date}}<br>by {{getEmployeeName(item.modifier_id)}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                        <a>PDF</a> - <a>XLS</a><br><a>Recall</a>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/view-c-work-order/view-c-work-order.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms/view-c-work-order/view-c-work-order.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewCWorkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCWorkOrderComponent", function() { return ViewCWorkOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewCWorkOrderComponent = /** @class */ (function () {
    function ViewCWorkOrderComponent(fms, adms, dcs, ssv, route) {
        this.fms = fms;
        this.adms = adms;
        this.dcs = dcs;
        this.ssv = ssv;
        this.route = route;
        this.formId = '52';
    }
    ViewCWorkOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populateNames();
        this.route.params.subscribe(function (params) {
            _this.processNum = params['processNum'];
            _this.populateItems();
        });
        var uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
    };
    ViewCWorkOrderComponent.prototype.populateItems = function () {
        var _this = this;
        this.fms.getForms(this.formId, 20, 'DESC', 0)
            .subscribe(function (itemsList) {
            if (_this.processNum) {
                itemsList = itemsList.filter(function (x) { return x.process_number == _this.processNum; });
            }
            if (itemsList) {
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewCWorkOrderComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewCWorkOrderComponent.prototype.getEmployeeName = function (uid) {
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewCWorkOrderComponent.prototype.onDownload = function (id) {
        //  this.dcs.DownloadWorkOrder(id)
        //  .subscribe(
        //      res => {
        //          saveAs(res, 'WorkOrder.xls', 
        //              { type: 'application/vnd.ms-excel' })
        //      },
        //      error => {
        //          // Display error message
        //          this.ssv.showError('Error: Unable to download form!');
        //      }
        //  );
    };
    ViewCWorkOrderComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.inputMap.job_num.toLowerCase().includes(input.toLowerCase())) ||
                    x.inputMap.project_name.toLowerCase().includes(input.toLowerCase());
            });
        }
    };
    ViewCWorkOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-c-work-order',
            template: __webpack_require__(/*! ./view-c-work-order.component.html */ "./src/app/forms/view-c-work-order/view-c-work-order.component.html"),
            styles: [__webpack_require__(/*! ./view-c-work-order.component.css */ "./src/app/forms/view-c-work-order/view-c-work-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ViewCWorkOrderComponent);
    return ViewCWorkOrderComponent;
}());



/***/ }),

/***/ "./src/app/forms/view-cost-summary/view-cost-summary.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/forms/view-cost-summary/view-cost-summary.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3ZpZXctY29zdC1zdW1tYXJ5L3ZpZXctY29zdC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forms/view-cost-summary/view-cost-summary.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/forms/view-cost-summary/view-cost-summary.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Work Order</h3>\r\n   \t<div class=\"col-sm-12 text-center\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/work-order\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Form\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Project\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Project</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Client</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Date</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Last Modified</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.inputMap.job_name}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.client}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.date | date}}</td>\r\n                    <td class=\"col-sm-3\">{{item.last_modified_date | date}}<br>by {{getEmployeeName(item.modifier_id)}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                        <a>PDF</a> - <a>XLS</a><br>\r\n                        <a>Edit</a>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/view-cost-summary/view-cost-summary.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms/view-cost-summary/view-cost-summary.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewCostSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCostSummaryComponent", function() { return ViewCostSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewCostSummaryComponent = /** @class */ (function () {
    function ViewCostSummaryComponent(fms, adms, dcs, ssv, route) {
        this.fms = fms;
        this.adms = adms;
        this.dcs = dcs;
        this.ssv = ssv;
        this.route = route;
        this.formId = '50';
    }
    ViewCostSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populateNames();
        this.route.params.subscribe(function (params) {
            _this.processNum = params['processNum'];
            _this.populateItems();
        });
        var uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
    };
    ViewCostSummaryComponent.prototype.populateItems = function () {
        var _this = this;
        this.fms.getForms(this.formId, 20, 'DESC', 0)
            .subscribe(function (itemsList) {
            if (_this.processNum) {
                itemsList = itemsList.filter(function (x) { return x.process_number == _this.processNum; });
            }
            if (itemsList) {
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewCostSummaryComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewCostSummaryComponent.prototype.getEmployeeName = function (uid) {
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewCostSummaryComponent.prototype.onDownload = function (id) {
        //  this.dcs.DownloadWorkOrder(id)
        //      .subscribe(
        //          res => {
        //              saveAs(res, 'WorkOrder.xls', 
        //                  { type: 'application/vnd.ms-excel' })
        //          },
        //          error => {
        //              // Display error message
        //              this.ssv.showError('Error: Unable to download form!');
        //          }
        //      );
    };
    ViewCostSummaryComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.inputMap.job_num.toLowerCase().includes(input.toLowerCase())) ||
                    x.inputMap.project_name.toLowerCase().includes(input.toLowerCase());
            });
        }
    };
    ViewCostSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-cost-summary',
            template: __webpack_require__(/*! ./view-cost-summary.component.html */ "./src/app/forms/view-cost-summary/view-cost-summary.component.html"),
            styles: [__webpack_require__(/*! ./view-cost-summary.component.css */ "./src/app/forms/view-cost-summary/view-cost-summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ViewCostSummaryComponent);
    return ViewCostSummaryComponent;
}());



/***/ }),

/***/ "./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big_checkbox{\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tpadding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdmlldy1pcnJpZ2F0aW9uLXJlcGFpci92aWV3LWlycmlnYXRpb24tcmVwYWlyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3ZpZXctaXJyaWdhdGlvbi1yZXBhaXIvdmlldy1pcnJpZ2F0aW9uLXJlcGFpci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZ19jaGVja2JveHtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0cGFkZGluZzogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MODALS -->\r\n<div class=\"modal fade nmodal_layer\" id=\"approveIRF\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Approve or Reject</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\t\t<div class=\"form-group text-left\">\r\n         \t<label for=\"decision_reason\">If REJECT, Enter Reason: </label>\r\n\t\t\t<textarea class=\"form-control\" name=\"reject_reason\" [(ngModel)]=\"reject_reason\"></textarea>\r\n      \t</div>\r\n      \t<div class=\"text-center\">\r\n      \t\t<button type=\"button\" (click)=\"onIrrigationManagerApprove()\" class=\"btn btn-success margin_right_15\"><span class=\"glyphicon glyphicon-ok\"></span> Approve</button>\r\n\t\t\t<button type=\"button\" (click)=\"onIrrigationManagerReject()\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Reject</button>\r\n      \t</div>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"modal fade nmodal_layer\" id=\"approveCIRF\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Approve or Reject</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\t\t<div class=\"form-group text-left\">\r\n\t\t\t<label for=\"job_number\"><b>APPROVE</b> - Enter Job Number: </label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"jobnum\" [(ngModel)]=\"jobnum\">\r\n\t\t\t<h5 class=\"red_text\"><b><i>Form will be assigned to a work order with the same job number</i></b></h5>\r\n\t\t</div>\r\n\t\t<div class=\"form-group text-left\">\r\n         \t<label for=\"decision_reason\">REJECT - Enter Reason for Rejection: </label>\r\n\t\t\t<textarea class=\"form-control\" name=\"reject_reason\" [(ngModel)]=\"reject_reason\"></textarea>\r\n      \t</div>\r\n      \t<div class=\"text-center\">\r\n\t\t\t<button type=\"button\" (click)=\"onCustomerServiceApprove()\" class=\"btn btn-success margin_right_15\"><span class=\"glyphicon glyphicon-ok\"></span> Approve</button>\r\n\t\t\t<button type=\"button\" (click)=\"onCustomerServiceReject()\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Reject</button>\r\n      \t</div>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"modal fade nmodal_layer\" id=\"changeCIRF\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Change Job Number</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\t\t<div class=\"form-group text-left\">\r\n\t\t\t<label for=\"job_number\">Enter new Job Number: </label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"jobnum\" [(ngModel)]=\"jobnum\">\r\n\t\t\t<h5 class=\"red_text\"><b><i>Form will be assigned to work order with the same job number</i></b></h5>\r\n\t\t</div>\r\n      \t<div class=\"text-center\">\r\n\t\t\t<button type=\"button\" (click)=\"onCustomerServiceApprove()\" class=\"btn btn-success margin_right_15\"><span class=\"glyphicon glyphicon-ok\"></span> Save Changes</button>\r\n      \t</div>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"modal fade nmodal_layer\" id=\"deleteIRFModal\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Delete Irrigation Repair Form</h4>\r\n      </div>\r\n      <div class=\"modal-body modal_body_warning\">\r\n\t\t<b>Warning: This will remove the Irrigation Repair Form from the system.</b><br>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger margin_right_15\">Delete</button>\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"modal fade nmodal_layer\" id=\"recallIRF\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Recall Irrigation Repair Form</h4>\r\n      </div>\r\n      <div class=\"modal-body modal_body_warning\">\r\n\t\t<b>Recall Irrigation Repair Backup to allow edit?</b><br>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" (click)=\"onRecall()\" class=\"btn btn-primary margin_right_15\">Recall</button>\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Irrigation Repair - {{formProcessState}}</h3>\r\n   \t<div class=\"col-sm-12 text-center\" *ngIf=\"roleId == '4' || roleId == '6'\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/irrigation-repair\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Form\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-12 text-center\" *ngIf=\"paramJobnum\">\r\n\t\t<button *ngIf=\"!downloadingAll\" type=\"button\" class=\"btn btn-info btn-sm button\" (click)=\"onDownloadAll()\">\r\n\t\t\t<span class=\"glyphicon glyphicon-download-alt\"></span> Download All\r\n\t\t</button>\r\n\t\t<span *ngIf=\"downloadingAll\">\r\n\t\t\tDownloading...\r\n\t\t</span>\r\n\t</div>\r\n\t<div class=\"col-sm-2 col-sm-offset-5 text-center\" *ngIf=\"!paramJobnum && userPermission.includes(3)\">\r\n\t\t<input type=\"text\" class=\"form-control\" name=\"jobnum\" [(ngModel)]=\"jobnum\" placeholder=\"Enter job number...\">\r\n\t</div>\r\n\t<div class=\"col-sm-1 text-center\" *ngIf=\"!paramJobnum && userPermission.includes(3)\">\r\n\t\t<button *ngIf=\"!downloadingAll\" type=\"button\" class=\"btn btn-info btn-sm button\" (click)=\"assignJobnumToIRFs()\">\r\n\t\t\tAssign All\r\n\t\t</button>\r\n\t\t<span *ngIf=\"downloadingAll\">\r\n\t\t\tAssigning...\r\n\t\t</span>\r\n\t</div>\r\n\t<div class=\"col-sm-4\"></div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Project or Job #\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n       \t\t\t\t<th class=\"table_cell_heading col-sm-1\" *ngIf=\"!paramJobnum\"></th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Project</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Job # / CSR #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Date</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Last Modified</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                \t<td *ngIf=\"!paramJobnum && item.process_number == 3\" class=\"col-sm-1\"><input type=\"checkbox\" (click)=\"toggleIrf(item.id)\" id=\"cb{{item.id}}\" class=\"big_checkbox\"/></td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.job_name? item.inputMap.job_name : 'Unspecified'}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.job_num}}<br>{{item.inputMap.csr_num? ('CSR: ' + item.inputMap.csr_num) : ''}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.date | date}}</td>\r\n                    <td class=\"col-sm-3\">{{item.last_modified_date | date}}<br>by {{getEmployeeName(item.modifier_id)}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                    \t<ng-container *ngIf=\"item.process_number == 1 && userPermission.includes(1)\">\r\n                    \t\t<a *ngIf=\"!item.is_downloading_pdf\" (click)=\"onDownloadPDF(item.id)\">View</a><span *ngIf=\"item.is_downloading_pdf\" class=\"loader\"></span>\r\n                    \t\t<br><a routerLink=\"/irrigation-repair/{{item.id}}\">Edit</a>\r\n                    \t\t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#deleteIRFModal\">Delete</a>\r\n                    \t</ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 2 && userPermission.includes(2)\">\r\n                        \t<a routerLink=\"/irrigation-repair/{{item.id}}\">Edit</a> - <a *ngIf=\"!item.is_downloading_pdf\" (click)=\"onDownloadPDF(item.id)\">PDF</a><span *ngIf=\"item.is_downloading_pdf\" class=\"loader\"></span>\r\n                        \t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#approveIRF\">Review</a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.process_number == 3 && userPermission.includes(3)\">\r\n                        <a *ngIf=\"!item.is_downloading_pdf\" (click)=\"onDownloadPDF(item.id)\">View</a><span *ngIf=\"item.is_downloading_pdf\" class=\"loader\"></span>\r\n                        <br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#approveCIRF\">Review</a>\r\n                        \t<br>\r\n                        \t<a *ngIf=\"item.inputMap.attachment1\" href=\"{{getS3FormPicUrl(item.inputMap.attachment1)}}\" target=\"_blank\">Pic 1 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment2\" href=\"{{getS3FormPicUrl(item.inputMap.attachment2)}}\" target=\"_blank\">Pic 2 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment3\" href=\"{{getS3FormPicUrl(item.inputMap.attachment3)}}\" target=\"_blank\">Pic 3 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment4\" href=\"{{getS3FormPicUrl(item.inputMap.attachment4)}}\" target=\"_blank\">Pic 4 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment5\" href=\"{{getS3FormPicUrl(item.inputMap.attachment5)}}\" target=\"_blank\">Pic 5 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment6\" href=\"{{getS3FormPicUrl(item.inputMap.attachment6)}}\" target=\"_blank\">Pic 6 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment7\" href=\"{{getS3FormPicUrl(item.inputMap.attachment7)}}\" target=\"_blank\">Pic 7 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment8\" href=\"{{getS3FormPicUrl(item.inputMap.attachment8)}}\" target=\"_blank\">Pic 8 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment9\" href=\"{{getS3FormPicUrl(item.inputMap.attachment9)}}\" target=\"_blank\">Pic 9 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment10\" href=\"{{getS3FormPicUrl(item.inputMap.attachment10)}}\" target=\"_blank\">Pic 10</a>\r\n                        \t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#deleteIRFModal\">Delete</a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.process_number == 3 && !userPermission.includes(3)\">\r\n                        \t<a routerLink=\"/irrigation-repair/{{item.id}}\">View</a>\r\n\t\t\t\t\t\t\t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#recallIRF\">Recall</a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.process_number == 4\">\r\n                        \t<a *ngIf=\"!item.is_downloading_pdf\" (click)=\"onDownloadPDF(item.id)\">View</a><span *ngIf=\"item.is_downloading_pdf\" class=\"loader\"></span>\r\n                        \t<br>\r\n                        \t<a *ngIf=\"item.inputMap.attachment1\" href=\"{{getS3FormPicUrl(item.inputMap.attachment1)}}\" target=\"_blank\">Pic 1 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment2\" href=\"{{getS3FormPicUrl(item.inputMap.attachment2)}}\" target=\"_blank\">Pic 2 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment3\" href=\"{{getS3FormPicUrl(item.inputMap.attachment3)}}\" target=\"_blank\">Pic 3 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment4\" href=\"{{getS3FormPicUrl(item.inputMap.attachment4)}}\" target=\"_blank\">Pic 4 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment5\" href=\"{{getS3FormPicUrl(item.inputMap.attachment5)}}\" target=\"_blank\">Pic 5 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment6\" href=\"{{getS3FormPicUrl(item.inputMap.attachment6)}}\" target=\"_blank\">Pic 6 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment7\" href=\"{{getS3FormPicUrl(item.inputMap.attachment7)}}\" target=\"_blank\">Pic 7 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment8\" href=\"{{getS3FormPicUrl(item.inputMap.attachment8)}}\" target=\"_blank\">Pic 8 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment9\" href=\"{{getS3FormPicUrl(item.inputMap.attachment9)}}\" target=\"_blank\">Pic 9 &nbsp;</a>\r\n                        \t<a *ngIf=\"item.inputMap.attachment10\" href=\"{{getS3FormPicUrl(item.inputMap.attachment10)}}\" target=\"_blank\">Pic 10 &nbsp;</a>\r\n                        \t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#changeCIRF\">Change Job #</a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewIrrigationRepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewIrrigationRepairComponent", function() { return ViewIrrigationRepairComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");
/* harmony import */ var src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/S3Manager */ "./src/app/api/S3Manager.ts");
/* harmony import */ var src_app_services_newApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/newApi */ "./src/app/_services/newApi.ts");










var ViewIrrigationRepairComponent = /** @class */ (function () {
    function ViewIrrigationRepairComponent(fms, adms, dcs, ssv, cds, route, ems, router, ims, nas) {
        this.fms = fms;
        this.adms = adms;
        this.dcs = dcs;
        this.ssv = ssv;
        this.cds = cds;
        this.route = route;
        this.ems = ems;
        this.router = router;
        this.ims = ims;
        this.nas = nas;
        this.typeId = '47';
        this.typeId3 = '45'; //Work Order
        this.typeId2 = '54'; //Stock Transfer
    }
    ViewIrrigationRepairComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIRFList = [];
        this.reject_reason = '';
        this.uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        this.initEmptyWoAndSt();
        this.populateNames();
        this.populatePermissions();
        this.populateWOList();
        this.populateSTList();
        this.populateMatList();
        this.downloadingAll = false;
        this.route.params.subscribe(function (params) {
            _this.processNum = params['processNum'];
            _this.paramJobnum = params['jobnum'];
            _this.populateItems();
            switch (_this.processNum) {
                case '1':
                    _this.formProcessState = 'Draft';
                    break;
                case '2':
                    _this.formProcessState = 'Waiting Manager Approval';
                    break;
                case '3':
                    _this.formProcessState = 'Awaiting Office Staff Approval';
                    break;
                case '4':
                    _this.formProcessState = 'Assigned to Work Order';
                    break;
                default:
                    _this.formProcessState = 'All';
                    break;
            }
        });
        // this.nas.getViewPurchaseOrder(this.roleId).subscribe(data => {
        //     console.log("data", data)
        // })
    };
    ViewIrrigationRepairComponent.prototype.populateMatList = function () {
        var _this = this;
        this.ims.getMaterials('1')
            .subscribe(function (matList) {
            _this.matList = matList;
        });
    };
    ViewIrrigationRepairComponent.prototype.populateItems = function () {
        // this.fms.getForms(this.typeId, 10000, 'DESC', 0)
        //     .subscribe(itemsList => {
        //         console.log("this.processNum", this.processNum, this.paramJobnum)
        //         if (this.processNum) {
        //             //Only include ones at this current process number
        //             itemsList = itemsList.filter(x => x.process_number == this.processNum);
        var _this = this;
        //             //Only include non-deleted forms
        //             itemsList = itemsList.filter(x => x.is_deleted == '0');
        //             //If available, filter by job number
        //             if (this.paramJobnum) {
        //                 itemsList = itemsList.filter(x => x.inputMap.job_num != null && x.inputMap.job_num.trim() == this.paramJobnum);
        //             }
        //             //If this is drafts list or user is technician, only allow owner to see
        //             if (this.processNum == '1' || this.roleId == '6') {
        //                 itemsList = itemsList.filter(x => x.filler_id == this.uid);
        //             }
        //             if (itemsList) {
        //                 this.ssv.alerts['irf_' + this.processNum] = itemsList.length;
        //             }
        //         }
        //         if (itemsList) {
        //             this.itemsList = itemsList.sort((a, b) => {
        //                 return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
        //             });
        //         }
        //         this.partialItemsList = itemsList;
        //     });
        this.nas.getViewWalkThrough(this.typeId, this.processNum, this.uid).subscribe(function (itemsList) {
            console.log("itemsList", itemsList);
            if (itemsList) {
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewIrrigationRepairComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewIrrigationRepairComponent.prototype.populatePermissions = function () {
        var _this = this;
        var role_id = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.adms.getFormPermissions(role_id)
            .subscribe(function (list) { return _this.userPermission = list.filter(function (x) { return x.form_type_id == _this.typeId; }).map(function (x) { return x.process_num; }); });
    };
    ViewIrrigationRepairComponent.prototype.getEmployeeName = function (uid) {
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewIrrigationRepairComponent.prototype.onDownloadPDF = function (id) {
        var _this = this;
        //Disable download until response received
        this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = true;
        this.cds.downloadIrrigationRepairPDF(id)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'IrrigationForm.pdf', { type: 'application/pdf' });
            //Re-enable download
            _this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = false;
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to download form!');
            //Re-enable download
            _this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = false;
        });
    };
    ViewIrrigationRepairComponent.prototype.searchItem = function (input) {
        var _this = this;
        if (this.partialItemsList && this.itemsList) {
            if (!input) {
                this.partialItemsList = this.itemsList;
            }
            else {
                this.partialItemsList = this.itemsList.filter(function (x) {
                    return ((x.inputMap.job_num && x.inputMap.job_num.toLowerCase().includes(input.toLowerCase()))) ||
                        (x.inputMap.job_name && x.inputMap.job_name.toLowerCase().includes(input.toLowerCase())) ||
                        (x.filler_id && _this.getEmployeeName(x.filler_id).toLowerCase().includes(input.toLowerCase()));
                });
            }
        }
    };
    ViewIrrigationRepairComponent.prototype.onSubmit = function (state, id, actionVerb) {
        var _this = this;
        //Close all modals
        document.getElementById('approveIRF').style.display = "none";
        document.getElementById('approveCIRF').style.display = "none";
        document.getElementById('deleteIRFModal').style.display = "none";
        //Update form
        this.fms.setFormState(this.typeId, id, state)
            .subscribe(function (data) {
            _this.ssv.countForm('irf_3', '47', null, '3');
            _this.ssv.showSuccess('Form successfully ' + actionVerb + '!');
            _this.router.navigate(['/view-irrigation-repair/' + state]);
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Form failed to be ' + actionVerb + '!');
        });
    };
    ViewIrrigationRepairComponent.prototype.onIrrigationManagerApprove = function () {
        var _this = this;
        var model = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
        //Change form state
        this.onSubmit('3', this.focusedId, 'approved');
        //Send email to Customer Service (role = 7)
        var recipient = this.usersList.find(function (x) { return x.role_id == '7' && x.is_active == '1'; });
        this.sendIRFManagerApprovalEmail(recipient.uid);
    };
    ViewIrrigationRepairComponent.prototype.onIrrigationManagerReject = function () {
        var _this = this;
        var model = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
        //Change form state
        this.onSubmit('1', this.focusedId, 'rejected');
        //Send email to Technician
        var recipient = this.usersList.find(function (x) { return x.uid == model.filler_id; });
        this.sendIRFManagerRejectionEmail(recipient.uid);
    };
    /**
     * 1. Create WO and ST
     * 2. For all IRFs, assign jobnum
     */
    ViewIrrigationRepairComponent.prototype.onCustomerServiceApproveAll = function () {
        this.createWoAndStThenAssignIRFs();
    };
    ViewIrrigationRepairComponent.prototype.addToIrfList = function (irfId) {
        var index = this.selectedIRFList.indexOf(irfId, 0);
        if (index === -1) {
            this.selectedIRFList.push(irfId);
        }
    };
    ViewIrrigationRepairComponent.prototype.removeFromIrfList = function (irfId) {
        var index = this.selectedIRFList.indexOf(irfId, 0);
        if (index > -1) {
            this.selectedIRFList.splice(index, 1);
        }
    };
    ViewIrrigationRepairComponent.prototype.initEmptyWoAndSt = function () {
        //Init Work Order model
        this.model = {
            'id': '0',
            'type_id': this.typeId3,
            'status_id': '1',
            'process_number': '1',
            'created_date': this.ssv.toHtmlDate(null),
            'last_modified_date': this.ssv.toHtmlDate(null),
            'filler_id': this.fillerUid,
            'modifier_id': this.fillerUid,
            'inputMap': {
                'date': this.ssv.toHtmlDate(null)
            },
            "inputTables": {
                "materials": [],
                "labors": []
            }
        };
        //Init Stock Transfer model
        this.model2 = {
            'id': '0',
            'type_id': this.typeId2,
            'status_id': '1',
            'process_number': '1',
            'created_date': this.ssv.toHtmlDate(null),
            'last_modified_date': this.ssv.toHtmlDate(null),
            'filler_id': this.fillerUid,
            'modifier_id': this.fillerUid,
            'inputMap': {
                'date': this.ssv.toHtmlDate(null)
            },
            "inputTables": {
                "materials": []
            }
        };
    };
    ViewIrrigationRepairComponent.prototype.createWoAndStThenAssignIRFs = function () {
        var _this = this;
        //Create a new work order and ST, then assign IRFs
        this.model.inputMap.job_num = this.jobnum;
        this.fms.newForm(this.model, this.typeId)
            .subscribe(function (data) {
            var woId = data['formId'];
            //If successful, create a new stock transfer
            _this.model2.inputMap.job_num = _this.jobnum;
            _this.fms.newForm(_this.model2, _this.typeId2)
                .subscribe(function (data) {
                // Created ST successfully, now assign IRFs
                _this.assignJobnumToIRFs();
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to create stock transfer!');
            });
        }, function (error) {
            // Display error message
            _this.ssv.showError('Unable to start job!');
        });
    };
    ViewIrrigationRepairComponent.prototype.toggleIrf = function (id) {
        console.log('toggling ' + id);
        if (this.selectedIRFList.includes(id)) {
            var index = this.selectedIRFList.indexOf(id, 0);
            if (index > -1) {
                this.selectedIRFList.splice(index, 1);
            }
        }
        else {
            this.selectedIRFList.push(id);
        }
    };
    //Iterate over list of IRF IDs and assign one by one
    ViewIrrigationRepairComponent.prototype.assignJobnumToIRFs = function () {
        var _this = this;
        var countIrf = this.selectedIRFList.length;
        if (countIrf <= 0) {
            console.log('Error: Empty IRF list');
            return;
        }
        var materialsToAdd = [];
        var irfLeft = countIrf;
        var _loop_1 = function (i) {
            var model = this_1.itemsList.find(function (x) { return x.id == _this.selectedIRFList[i]; });
            if (model) {
                model.created_date = this_1.toHtmlDate(null);
                model.last_modified_date = this_1.toHtmlDate(null);
                model.process_number = '4';
                model.inputMap.job_num = this_1.jobnum;
                this_1.fms.updateForm(model, this_1.typeId, this_1.selectedIRFList[i])
                    .subscribe(function (data) {
                    //IRF Update successful; now update stock transfer and work order
                    //Get IRF matlist (to add to ST)
                    irfLeft--;
                    var irfMatList = model.inputTables.materials;
                    var _loop_2 = function (j) {
                        var itemIdx = materialsToAdd.findIndex(function (x) { return x.material_id == irfMatList[j].material_id; });
                        if (itemIdx === -1) {
                            //Current material list to add to ST does not contain the i-th material in this IRF
                            materialsToAdd.push(irfMatList[j]);
                        }
                        else {
                            //Material already exists, add its quantity
                            materialsToAdd[itemIdx].quantity = '' + (+materialsToAdd[itemIdx].quantity + +irfMatList[j].quantity);
                        }
                    };
                    for (var j = 0; j < irfMatList.length; j++) {
                        _loop_2(j);
                    }
                    if (irfLeft <= 0) {
                        //Update stock transfer with aggregate materials from all IRFs
                        _this.updateStockTransfer(_this.jobnum, materialsToAdd);
                    }
                }, function (error) {
                    // Display error message
                    _this.ssv.showError('Error: Failed to approve form!');
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < countIrf; i++) {
            _loop_1(i);
        }
    };
    ViewIrrigationRepairComponent.prototype.onCustomerServiceApprove = function () {
        var _this = this;
        //Close all modals
        document.getElementById('approveIRF').style.display = "none";
        document.getElementById('approveCIRF').style.display = "none";
        document.getElementById('deleteIRFModal').style.display = "none";
        document.getElementById('changeCIRF').style.display = "none";
        //Update form
        if (this.jobnum && this.jobNumsAvailable.includes(this.jobnum)) {
            var model_1 = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
            if (model_1) {
                model_1.created_date = this.toHtmlDate(null);
                model_1.last_modified_date = this.toHtmlDate(null);
                model_1.process_number = '4';
                model_1.inputMap.job_num = this.jobnum;
                this.fms.updateForm(model_1, this.typeId, this.focusedId)
                    .subscribe(function (data) {
                    //IRF Update successful; now update stock transfer and work order
                    //Get IRF matlist (to add to ST)
                    var irfMatList = model_1.inputTables.materials;
                    _this.updateStockTransfer(_this.jobnum, irfMatList);
                    //Delete IRF materials from ST with the previous job number so we don't add duplicate items
                    if (_this.paramJobnum) {
                        _this.removeMatListFromST(_this.paramJobnum, irfMatList);
                    }
                }, function (error) {
                    // Display error message
                    _this.ssv.showError('Error: Failed to approve form!');
                });
            }
        }
        else {
            this.ssv.showError('Error: Job number does not exist!');
            //Close all modals
            document.getElementById('approveIRF').style.display = "none";
            document.getElementById('approveCIRF').style.display = "none";
            document.getElementById('deleteIRFModal').style.display = "none";
            document.getElementById('changeCIRF').style.display = "none";
        }
    };
    ViewIrrigationRepairComponent.prototype.onCustomerServiceReject = function () {
        var _this = this;
        var model = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
        //Change form state
        this.onSubmit('2', this.focusedId, 'rejected');
        //Send email to Irrigation Manager (approver) 
        var recipient = this.usersList.find(function (x) { return x.role_id == '4' && x.is_active == '1'; });
        this.sendIRFCSRejectionEmail(recipient.uid);
    };
    ViewIrrigationRepairComponent.prototype.removeMatListFromST = function (jobnum, irfMatList) {
        var _this = this;
        //Get Stock Transfer
        var st = this.getStockTransfer(jobnum);
        if (!st.inputTables) {
            st.inputTables = [];
        }
        if (!st.inputTables.materials) {
            st.inputTables.materials = [];
        }
        //Iterate over IRF and add parts/quantity
        var matToDelete = [];
        irfMatList.forEach(function (x) {
            //Find part in ST
            var y = st.inputTables.materials.find(function (y) { return y.material_id == x.material_id; });
            //Get parts pricing from materials list
            var price = _this.matList.find(function (z) { return z.id == x.material_id; }).price;
            //Update Qty if it exists in ST
            if (y) {
                //Material found in Stock Transfer
                y.quantity = "" + (+y.quantity - +x.quantity);
                //Delete if quantity reaches 0
                if (y.quantity == '0') {
                    matToDelete.push(y.material_id);
                }
            }
            //If Material not found in ST, ignore
        });
        //Update qty in form
        st.created_date = this.ssv.toHtmlDate(st.created_date);
        st.last_modified_date = this.ssv.toHtmlDate(null);
        this.fms.updateForm(st, '54', st.id)
            .subscribe(function (data) {
            //Delete if quantity reaches 0
            matToDelete.forEach(function (y) {
                var body = {
                    "inputMap": {
                        "form_id": "" + st.id,
                        "material_id": "" + y
                    }
                };
                _this.fms.deleteMultiInput(body, '54', 'materials', 'material_id')
                    .subscribe(function (data) { console.log('Deleted'); });
            });
        }, function (error) {
            console.log('ST Update error');
        });
    };
    //If material to add already exists in ST, update their qty in ST;
    //Otherwise, add this item to ST
    ViewIrrigationRepairComponent.prototype.updateStockTransfer = function (jobnum, irfMatList) {
        var _this = this;
        //Get Stock Transfer
        var st = this.getStockTransfer(jobnum);
        if (!st.inputTables) {
            st.inputTables = [];
        }
        if (!st.inputTables.materials) {
            st.inputTables.materials = [];
        }
        //Iterate over IRF and add parts/quantity
        irfMatList.forEach(function (x) {
            //Find part in ST
            var y = st.inputTables.materials.find(function (y) { return y.material_id == x.material_id; });
            //Get parts pricing from materials list
            var price = _this.matList.find(function (z) { return z.id == x.material_id; }).price;
            //Update Qty & price if it exists in ST
            if (y) {
                //Material found in Stock Transfer
                y.quantity = "" + (+x.quantity + +y.quantity);
                y.price = "" + (Math.round(+price * 100) / 100);
            }
            else {
                //Material not found in ST, create a new one
                x.price = "" + (Math.round(+price * 100) / 100);
                st.inputTables.materials.push(x);
            }
        });
        //Fix dates
        st.created_date = this.ssv.toHtmlDate(st.created_date);
        st.last_modified_date = this.ssv.toHtmlDate(null);
        this.fms.updateForm(st, '54', st.id)
            .subscribe(function (data) {
            _this.ssv.showSuccess('Form successfully approved!');
            //this.router.navigate(['/view-irrigation-repair/3']);
            _this.redirectTo('/view-irrigation-repair/3');
        }, function (error) {
            console.log('ST Update error');
        });
    };
    ViewIrrigationRepairComponent.prototype.redirectTo = function (uri) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([uri]);
        });
    };
    ViewIrrigationRepairComponent.prototype.onDelete = function () {
        var _this = this;
        //Close all modals
        document.getElementById('approveIRF').style.display = "none";
        document.getElementById('approveCIRF').style.display = "none";
        document.getElementById('deleteIRFModal').style.display = "none";
        this.fms.setFormDeactivateStatus(this.typeId, this.focusedId, true)
            .subscribe(function (data) {
            _this.ssv.showSuccess('Form successfully deleted!');
            window.location.reload();
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Form deletion failed!');
        });
    };
    ViewIrrigationRepairComponent.prototype.onRecall = function () {
        var _this = this;
        //Close all modals
        document.getElementById('recallIRF').style.display = "none";
        this.fms.setFormState(this.typeId, this.focusedId, '2')
            .subscribe(function (data) {
            // Page redirect when getting response
            _this.ssv.showSuccess('Form successfully recalled.');
            _this.router.navigate(['/view-irrigation-repair/2']);
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to recall form!');
        });
    };
    ViewIrrigationRepairComponent.prototype.onClickForm = function (id) {
        this.focusedId = id;
    };
    //Send email to Technician
    ViewIrrigationRepairComponent.prototype.sendIRFManagerRejectionEmail = function (recipientId) {
        var _this = this;
        //Get form filler as recipient
        this.adms.getUser(recipientId).subscribe(function (user) {
            if (user.email) {
                //Send Email
                var recipientList = [user.email];
                var ccList = [];
                var bccList = [];
                var subject = "Irrigation Repair Form Revision Request";
                var content = user.name + ","
                    + "<br><br>An Irrigation Repair form has been rejected"
                    + (!_this.reject_reason ? "." : " with the following reason:<br><i>" + _this.reject_reason + "</i>")
                    + "<br><br>Please login to the Dashboard to revise or discard the form."
                    + "<br>The form will be placed in the <i>Draft</i> section.";
                var email = {
                    'subject': subject,
                    'body': content,
                    'to': recipientList,
                    'cc': ccList,
                    'bcc': bccList
                };
                _this.ems.sendEmail(email).subscribe(function (data) { });
            }
            else {
                console.log('Email recipient not found');
            }
        }, function (error) {
            console.log(error);
            // Display error message
            _this.ssv.showError('Error: Email recipient not found!');
        });
    };
    //Send email to Irrigation Manager
    ViewIrrigationRepairComponent.prototype.sendIRFCSRejectionEmail = function (recipientId) {
        var _this = this;
        //Get form filler as recipient
        this.adms.getUser(recipientId).subscribe(function (user) {
            if (user.email) {
                //Send Email
                var recipientList = [user.email];
                var ccList = [];
                var bccList = [];
                var subject = "Irrigation Repair Form Revision Request";
                var content = user.name + ","
                    + "<br><br>An Irrigation Repair form has been rejected"
                    + (!_this.reject_reason ? "." : " with the following reason:<br><i>" + _this.reject_reason + "</i>")
                    + "<br><br>Please login to the Dashboard to revise or discard the form."
                    + "<br>The form will be placed in the <i>Draft</i> section.";
                var email = {
                    'subject': subject,
                    'body': content,
                    'to': recipientList,
                    'cc': ccList,
                    'bcc': bccList
                };
                _this.ems.sendEmail(email).subscribe(function (data) { });
            }
            else {
                console.log('Email recipient not found');
            }
        }, function (error) {
            console.log(error);
            // Display error message
            _this.ssv.showError('Error: Email recipient not found!');
        });
    };
    //Send email to Customer Service
    ViewIrrigationRepairComponent.prototype.sendIRFManagerApprovalEmail = function (recipientId) {
        var _this = this;
        //Get form filler as recipient
        this.adms.getUser(recipientId).subscribe(function (user) {
            if (user.email) {
                //Send Email
                var recipientList = [user.email];
                var ccList = [];
                var bccList = [];
                var subject = "Irrigation Repair Job Number Request";
                var content = user.name + ","
                    + "<br><br>An Irrigation Repair requires your approval."
                    + "<br>Please login to the Dashboard to review the repair.";
                var email = {
                    'subject': subject,
                    'body': content,
                    'to': recipientList,
                    'cc': ccList,
                    'bcc': bccList
                };
                _this.ems.sendEmail(email).subscribe(function (data) { });
            }
            else {
                console.log('Email recipient not found');
            }
        }, function (error) {
            console.log(error);
            // Display error message
            _this.ssv.showError('Error: Email recipient not found!');
        });
    };
    //Get active Stock Transfer with this job number
    ViewIrrigationRepairComponent.prototype.getStockTransfer = function (jobnum) {
        if (!jobnum || !this.stList) {
            this.ssv.showError('Error: Cannot find corresponding Stock Transfer!');
        }
        var st = this.stList.find(function (x) { return x.inputMap.job_num == jobnum; });
        return st;
    };
    //Get active Work Order with this job number
    ViewIrrigationRepairComponent.prototype.getWorkOrder = function (jobnum) {
        if (!jobnum || !this.stList) {
            this.ssv.showError('Error: Cannot find corresponding Work Order!');
        }
        return this.woList.find(function (x) { return x.inputMap.job_num == jobnum; });
    };
    ViewIrrigationRepairComponent.prototype.populateWOList = function () {
        var _this = this;
        this.nas.getProcessnum('45')
            .subscribe(function (itemsList) {
            if (_this.processNum) {
                //Only include non-deleted forms
                itemsList = itemsList.filter(function (x) { return x.is_deleted == '0'; });
                //Populate job number list
                _this.jobNumsAvailable = itemsList.map(function (x) { return x.inputMap.job_num; });
                //Find one with matching job number
                if (_this.paramJobnum) {
                    itemsList = itemsList.filter(function (x) { return x.inputMap.job_num == _this.paramJobnum; });
                }
            }
            //Populate Work Order list
            if (itemsList) {
                _this.woList = itemsList;
            }
        });
    };
    ViewIrrigationRepairComponent.prototype.populateSTList = function () {
        var _this = this;
        // this.fms.getForms('54', 10000, 'DESC', 0)
        this.nas.getProcessnum('54')
            .subscribe(function (itemsList) {
            if (_this.processNum) {
                //Only include non-deleted forms
                itemsList = itemsList.filter(function (x) { return x.is_deleted == '0'; });
                //Find one with matching job number
                //                if(this.paramJobnum){
                //                    itemsList = itemsList.filter(x => x.inputMap.job_num == this.paramJobnum);
                //                }
            }
            //Populate Stock Transfer list
            if (itemsList) {
                _this.stList = itemsList;
            }
        });
    };
    //Download zip of all irrigation repairs of the same job number
    ViewIrrigationRepairComponent.prototype.onDownloadAll = function () {
        var _this = this;
        if (this.itemsList && this.paramJobnum) {
            var id_list = this.itemsList.map(function (x) { return x.id; });
            this.downloadingAll = true;
            this.cds.downloadIrrigationRepairPDF_zip(id_list)
                .subscribe(function (res) {
                _this.downloadingAll = false;
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'irflist.zip', { type: 'application/zip' });
            }, function (error) {
                _this.downloadingAll = false;
                // Display error message
                console.log(error);
                _this.ssv.showError('Error: Unable to download forms!');
            });
        }
    };
    ViewIrrigationRepairComponent.prototype.getS3FormPicUrl = function (filename) {
        return src_app_api_S3Manager__WEBPACK_IMPORTED_MODULE_7__["S3Manager"].getFormAttachmentUrl(filename, this.clientId);
    };
    ViewIrrigationRepairComponent.prototype.toHtmlDate = function (datestr) {
        var date;
        if (datestr) {
            date = new Date(datestr);
        }
        else {
            date = new Date();
        }
        var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };
    ViewIrrigationRepairComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-irrigation-repair',
            template: __webpack_require__(/*! ./view-irrigation-repair.component.html */ "./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.html"),
            styles: [__webpack_require__(/*! ./view-irrigation-repair.component.css */ "./src/app/forms/view-irrigation-repair/view-irrigation-repair.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_6__["CustomDownloadServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["EmailNotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["InventoryManagementService"], src_app_services_newApi__WEBPACK_IMPORTED_MODULE_8__["NewApiService"]])
    ], ViewIrrigationRepairComponent);
    return ViewIrrigationRepairComponent;
}());



/***/ }),

/***/ "./src/app/forms/view-m-work-order/view-m-work-order.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/forms/view-m-work-order/view-m-work-order.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3ZpZXctbS13b3JrLW9yZGVyL3ZpZXctbS13b3JrLW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forms/view-m-work-order/view-m-work-order.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/forms/view-m-work-order/view-m-work-order.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MODALS -->\r\n<div class=\"modal fade nmodal_layer\" id=\"approveIRF\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Approve or Reject</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\t\t<div class=\"form-group text-left\">\r\n         \t<label for=\"decision_reason\">If REJECT, Enter Reason: </label>\r\n\t\t\t<textarea class=\"form-control\" name=\"reject_reason\" [(ngModel)]=\"reject_reason\"></textarea>\r\n      \t</div>\r\n      \t<div class=\"text-center\">\r\n      \t\t<button type=\"button\" (click)=\"onApprove()\" class=\"btn btn-success margin_right_15\"><span class=\"glyphicon glyphicon-ok\"></span> Approve</button>\r\n\t\t\t<button type=\"button\" (click)=\"onReject()\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Reject</button>\r\n      \t</div>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Work Order Proposal - {{formProcessState}}</h3>\r\n   \t<div class=\"col-sm-12 text-center\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/m-work-order\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Form\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Project or Job #\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Project</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Job #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">PO #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Last Modified</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.inputMap.project_name}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.job_num}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.po_num}}</td>\r\n                    <td class=\"col-sm-3\">{{item.last_modified_date | date}}<br>by {{getEmployeeName(item.modifier_id)}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                        <ng-container *ngIf=\"item.process_number == 1 && userPermission.includes(1)\">\r\n                    \t\t<a routerLink=\"/m-work-order/{{item.id}}\">Edit</a> - <a (click)=\"onDownloadXls(item.id)\">XLS</a>\r\n                    \t</ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 2 && userPermission.includes(1)\">\r\n                    \t\t<a (click)=\"onRecall(item.id)\">Recall</a>\r\n                    \t</ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 2 && userPermission.includes(2)\">\r\n                    \t\t<a routerLink=\"/m-work-order/{{item.id}}\">View</a> - <a (click)=\"onDownloadXls(item.id)\">Download</a>\r\n                        \t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#approveIRF\">Review</a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.process_number == 3 && userPermission.includes(3)\">\r\n                        \t<a (click)=\"onDownloadXls(item.id)\">Download</a>\r\n                        \t<br><a routerLink=\"/m-work-order/{{item.id}}\">View & Delete</a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/view-m-work-order/view-m-work-order.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms/view-m-work-order/view-m-work-order.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewMWorkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMWorkOrderComponent", function() { return ViewMWorkOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ViewMWorkOrderComponent = /** @class */ (function () {
    function ViewMWorkOrderComponent(fms, adms, dcs, ssv, route, router) {
        this.fms = fms;
        this.adms = adms;
        this.dcs = dcs;
        this.ssv = ssv;
        this.route = route;
        this.router = router;
        this.typeId = '51';
    }
    ViewMWorkOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
        this.populateNames();
        this.populatePermissions();
        this.route.params.subscribe(function (params) {
            _this.processNum = params['processNum'];
            _this.populateItems();
            switch (_this.processNum) {
                case '1':
                    _this.formProcessState = 'Draft';
                    break;
                case '2':
                    _this.formProcessState = 'Pending Management Approval';
                    break;
                case '3':
                    _this.formProcessState = 'Awaiting Job Number';
                    break;
                case '4':
                    _this.formProcessState = 'Awaiting Job Assignment';
                    break;
                case '5':
                    _this.formProcessState = 'Active Job';
                    break;
                case '6':
                    _this.formProcessState = 'Ready for Billing';
                    break;
                case '7':
                    _this.formProcessState = 'Pending for Archival';
                    break;
                default:
                    _this.formProcessState = 'All';
                    break;
            }
        });
    };
    ViewMWorkOrderComponent.prototype.populatePermissions = function () {
        var _this = this;
        var role_id = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.adms.getFormPermissions(role_id)
            .subscribe(function (list) { return _this.userPermission = list.map(function (x) { return x.process_num; }); });
    };
    /**
     * Reject form and send it back to Customer Service for submission (process #1)
     * @param id
     */
    ViewMWorkOrderComponent.prototype.onReject = function () {
        var _this = this;
        var model = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
        //Change form state
        this.onSubmit('1', this.focusedId, 'rejected');
        //Send email to Technician
        var recipient = this.usersList.find(function (x) { return x.uid == model.filler_id; });
        //TODO: Email sender
    };
    ViewMWorkOrderComponent.prototype.onApprove = function () {
        var _this = this;
        var model = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
        //Change form state
        this.onSubmit('3', this.focusedId, 'approved');
        //Send email to Customer Service (role = 7)
        var recipient = this.usersList.find(function (x) { return x.role_id == '7' && x.is_active == '1'; });
        //TODO: Email sender
    };
    ViewMWorkOrderComponent.prototype.onClickForm = function (id) {
        this.focusedId = id;
    };
    ViewMWorkOrderComponent.prototype.onSubmit = function (state, id, actionVerb) {
        var _this = this;
        //Close all modals
        document.getElementById('approveIRF').style.display = "none";
        document.getElementById('deleteIRFModal').style.display = "none";
        //Update form
        this.fms.setFormState(this.typeId, id, state)
            .subscribe(function (data) {
            _this.ssv.showSuccess('Form successfully ' + actionVerb + '!');
            _this.router.navigate(['/view-work-order/' + state]);
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Form failed to be ' + actionVerb + '!');
        });
    };
    ViewMWorkOrderComponent.prototype.populateItems = function () {
        var _this = this;
        this.fms.getForms(this.typeId, 50, 'DESC', 0)
            .subscribe(function (itemsList) {
            if (_this.processNum) {
                itemsList = itemsList.filter(function (x) { return x.process_number == _this.processNum; });
            }
            //Exclude deleted forms
            itemsList = itemsList.filter(function (x) { return x.is_deleted == '0'; });
            //If this is drafts list or user is PM, only allow owner to see
            if (_this.processNum == '1' || _this.roleId == '3') {
                itemsList = itemsList.filter(function (x) { return x.filler_id == _this.uid; });
            }
            if (itemsList) {
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewMWorkOrderComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewMWorkOrderComponent.prototype.getEmployeeName = function (uid) {
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewMWorkOrderComponent.prototype.onDownload = function (id) {
        //  this.dcs.DownloadWorkOrder(id)
        //  .subscribe(
        //      res => {
        //          saveAs(res, 'WorkOrder.xls', 
        //              { type: 'application/vnd.ms-excel' })
        //      },
        //      error => {
        //          // Display error message
        //          this.ssv.showError('Error: Unable to download form!');
        //      }
        //  );
    };
    ViewMWorkOrderComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.inputMap.job_num.toLowerCase().includes(input.toLowerCase())) ||
                    x.inputMap.project_name.toLowerCase().includes(input.toLowerCase());
            });
        }
    };
    ViewMWorkOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-m-work-order',
            template: __webpack_require__(/*! ./view-m-work-order.component.html */ "./src/app/forms/view-m-work-order/view-m-work-order.component.html"),
            styles: [__webpack_require__(/*! ./view-m-work-order.component.css */ "./src/app/forms/view-m-work-order/view-m-work-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewMWorkOrderComponent);
    return ViewMWorkOrderComponent;
}());



/***/ }),

/***/ "./src/app/forms/view-purchase-order/view-purchase-order.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/forms/view-purchase-order/view-purchase-order.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3ZpZXctcHVyY2hhc2Utb3JkZXIvdmlldy1wdXJjaGFzZS1vcmRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/forms/view-purchase-order/view-purchase-order.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/forms/view-purchase-order/view-purchase-order.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Purchase Order - {{formProcessState}}</h3>\r\n   \t<div class=\"col-sm-12 text-center\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/purchase-order\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Form\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Job # or PO #\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Job # / PO #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Job Name</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Date Ordered</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Last Modified</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.inputMap.job_num}}<br>{{item.inputMap.po_num}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.job_name? item.inputMap.job_name : 'Not specified'}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.date_ordered | date}}</td>\r\n                    <td class=\"col-sm-3\">{{item.last_modified_date | date}}<br>by {{getEmployeeName(item.modifier_id)}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                        <ng-container *ngIf=\"item.process_number == 1 && userPermission.includes(1)\">\r\n                    \t\t<a routerLink=\"/purchase-order/{{item.id}}\">Edit</a>\r\n                    \t</ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 2 && userPermission.includes(2)\">\r\n                        \t<a routerLink=\"/purchase-order/{{item.id}}\">Edit</a>\r\n\t\t\t\t\t\t\t<br><a *ngIf=\"!item.is_downloading_pdf\" (click)=\"onDownloadPDF(item.id)\">Download</a><span *ngIf=\"item.is_downloading_pdf\" class=\"loader\"></span>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/view-purchase-order/view-purchase-order.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/forms/view-purchase-order/view-purchase-order.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewPurchaseOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPurchaseOrderComponent", function() { return ViewPurchaseOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");







var ViewPurchaseOrderComponent = /** @class */ (function () {
    function ViewPurchaseOrderComponent(fms, adms, dcs, ssv, route, cds) {
        this.fms = fms;
        this.adms = adms;
        this.dcs = dcs;
        this.ssv = ssv;
        this.route = route;
        this.cds = cds;
        this.typeId = '48';
    }
    ViewPurchaseOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populateNames();
        this.populatePermissions();
        this.route.params.subscribe(function (params) {
            _this.processNum = params['processNum'];
            _this.paramJobnum = params['jobnum'];
            _this.populateItems();
            switch (_this.processNum) {
                case '1':
                    _this.formProcessState = 'Draft';
                    break;
                case '2':
                    _this.formProcessState = 'Waiting for Order';
                    break;
                case '3':
                    _this.formProcessState = 'Completed';
                    break;
                default:
                    _this.formProcessState = 'All';
                    break;
            }
        });
        var uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
    };
    ViewPurchaseOrderComponent.prototype.populatePermissions = function () {
        var _this = this;
        var role_id = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.adms.getFormPermissions(role_id)
            .subscribe(function (list) { return _this.userPermission = list.filter(function (x) { return x.form_type_id == _this.typeId; }).map(function (x) { return x.process_num; }); });
    };
    ViewPurchaseOrderComponent.prototype.populateItems = function () {
        var _this = this;
        this.fms.getForms(this.typeId, 20, 'DESC', 0)
            .subscribe(function (itemsList) {
            if (_this.processNum) {
                itemsList = itemsList.filter(function (x) { return x.process_number == _this.processNum; });
            }
            //Only include non-deleted forms
            itemsList = itemsList.filter(function (x) { return x.is_deleted == '0'; });
            //If available, filter by job number
            if (_this.paramJobnum) {
                itemsList = itemsList.filter(function (x) { return x.inputMap.job_num == _this.paramJobnum; });
            }
            if (itemsList) {
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewPurchaseOrderComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewPurchaseOrderComponent.prototype.getEmployeeName = function (uid) {
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewPurchaseOrderComponent.prototype.onDownloadPDF = function (id) {
        var _this = this;
        //Disable download until response received
        this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = true;
        this.cds.downloadPurchaseOrderPDF(id)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'PurchaseOrder.pdf', { type: 'application/pdf' });
            //Re-enable download
            _this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = false;
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to download form!');
            //Re-enable download
            _this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = false;
        });
    };
    ViewPurchaseOrderComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.inputMap.job_num.toLowerCase().includes(input.toLowerCase())) ||
                    x.inputMap.po_num.toLowerCase().includes(input.toLowerCase());
            });
        }
    };
    ViewPurchaseOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-purchase-order',
            template: __webpack_require__(/*! ./view-purchase-order.component.html */ "./src/app/forms/view-purchase-order/view-purchase-order.component.html"),
            styles: [__webpack_require__(/*! ./view-purchase-order.component.css */ "./src/app/forms/view-purchase-order/view-purchase-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_6__["CustomDownloadServiceService"]])
    ], ViewPurchaseOrderComponent);
    return ViewPurchaseOrderComponent;
}());



/***/ }),

/***/ "./src/app/forms/view-stock-transfer/view-stock-transfer.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/forms/view-stock-transfer/view-stock-transfer.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3ZpZXctc3RvY2stdHJhbnNmZXIvdmlldy1zdG9jay10cmFuc2Zlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/forms/view-stock-transfer/view-stock-transfer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/forms/view-stock-transfer/view-stock-transfer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Stock Transfer</h3>\r\n   \t<div class=\"col-sm-12 text-center\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/stock-transfer\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Entry\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Project or Job #\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Project</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Job #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Date</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Last Modified</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.inputMap.name}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.job_num}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.date | date}}</td>\r\n                    <td class=\"col-sm-3\">{{item.last_modified_date | date}}<br>by {{getEmployeeName(item.modifier_id)}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                        <ng-container *ngIf=\"item.process_number == 1 && userPermission.includes(1)\">\r\n                        \t<a routerLink=\"/stock-transfer/{{item.id}}\">Edit</a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.process_number == 2 && userPermission.includes(1)\">\r\n                        \t-\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/view-stock-transfer/view-stock-transfer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/forms/view-stock-transfer/view-stock-transfer.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewStockTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStockTransferComponent", function() { return ViewStockTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewStockTransferComponent = /** @class */ (function () {
    function ViewStockTransferComponent(fms, adms, dcs, ssv, route) {
        this.fms = fms;
        this.adms = adms;
        this.dcs = dcs;
        this.ssv = ssv;
        this.route = route;
        this.formId = '46';
    }
    ViewStockTransferComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populatePermissions();
        this.populateNames();
        this.route.params.subscribe(function (params) {
            _this.processNum = params['processNum'];
        });
        this.populateItems();
        this.uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
    };
    ViewStockTransferComponent.prototype.populateItems = function () {
        var _this = this;
        this.fms.getForms(this.formId, 50, 'DESC', 0)
            .subscribe(function (itemsList) {
            if (itemsList) {
                if (_this.processNum) {
                    itemsList = itemsList.filter(function (x) { return x.process_number == _this.processNum; });
                }
                if (_this.roleId == '13') {
                    itemsList = itemsList.filter(function (x) { return x.filler_id == _this.uid; });
                }
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewStockTransferComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewStockTransferComponent.prototype.populatePermissions = function () {
        var _this = this;
        var role_id = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.adms.getFormPermissions(role_id)
            .subscribe(function (list) { return _this.userPermission = list.map(function (x) { return x.process_num; }); });
    };
    ViewStockTransferComponent.prototype.getEmployeeName = function (uid) {
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewStockTransferComponent.prototype.onDownload = function (id) {
        //  this.dcs.DownloadWorkOrder(id)
        //      .subscribe(
        //          res => {
        //              saveAs(res, 'WorkOrder.xls', 
        //                  { type: 'application/vnd.ms-excel' })
        //          },
        //          error => {
        //              // Display error message
        //              this.ssv.showError('Error: Unable to download form!');
        //          }
        //      );
    };
    ViewStockTransferComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.inputMap.job_num.toLowerCase().includes(input.toLowerCase())) ||
                    x.inputMap.name.toLowerCase().includes(input.toLowerCase());
            });
        }
    };
    ViewStockTransferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-stock-transfer',
            template: __webpack_require__(/*! ./view-stock-transfer.component.html */ "./src/app/forms/view-stock-transfer/view-stock-transfer.component.html"),
            styles: [__webpack_require__(/*! ./view-stock-transfer.component.css */ "./src/app/forms/view-stock-transfer/view-stock-transfer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ViewStockTransferComponent);
    return ViewStockTransferComponent;
}());



/***/ }),

/***/ "./src/app/forms/view-walkthrough/view-walkthrough.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/forms/view-walkthrough/view-walkthrough.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3ZpZXctd2Fsa3Rocm91Z2gvdmlldy13YWxrdGhyb3VnaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/forms/view-walkthrough/view-walkthrough.component.html":
/*!************************************************************************!*\
  !*** ./src/app/forms/view-walkthrough/view-walkthrough.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MODALS -->\r\n<div class=\"modal fade nmodal_layer\" id=\"approveIRF\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Reject Walkthrough</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\t\t<div class=\"form-group text-left\">\r\n         \t<label for=\"decision_reason\">Enter Reason: </label>\r\n\t\t\t<textarea class=\"form-control\" name=\"reject_reason\" [(ngModel)]=\"reject_reason\"></textarea>\r\n      \t</div>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" (click)=\"onReject()\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Reject</button>\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"modal fade nmodal_layer\" id=\"deleteIRFModal\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Delete Walkthrough Form</h4>\r\n      </div>\r\n      <div class=\"modal-body modal_body_warning\">\r\n\t\t<b>Warning: This will remove the Walkthrough Form from the system.</b><br>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger margin_right_15\">Delete</button>\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Walkthrough Forms</h3>\r\n   \t<div class=\"col-sm-12 text-center\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/walkthrough\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Form\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Project...\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"userPermission && partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Project</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Status</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Created</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Modified</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.inputMap.project_name}}</td>\r\n                    <td class=\"col-sm-2\">{{item.process_number == '2'? 'Draft' : 'Completed'}}</td>\r\n                    <td class=\"col-sm-2\">{{item.created_date | date}}<br>by {{getEmployeeName(item.filler_id)}}</td>\r\n                    <td class=\"col-sm-2\">{{item.last_modified_date | date}}<br>by {{getEmployeeName(item.modifier_id)}}</td>\r\n                    <td class=\"col-sm-3\">\r\n                        <ng-container *ngIf=\"item.process_number == 1 && userPermission.includes(2)\">\r\n                        \t<span class=\"red_text\">UPLOADING...</span>\r\n                        </ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 2 && userPermission.includes(2)\">\r\n                    \t\t<a routerLink=\"/walkthrough/{{item.id}}\">Edit</a>\r\n                    \t\t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#deleteIRFModal\">Delete</a>\r\n                    \t</ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 3 && userPermission.includes(2)\">\r\n                    \t\t<a (click)=\"onRecall(item.id)\">Recall</a>\r\n                    \t</ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 3 && userPermission.includes(3)\">\r\n                    \t\t<a *ngIf=\"!item.is_downloading_pdf\" (click)=\"onDownloadPDF(item.id)\">PDF</a><span *ngIf=\"item.is_downloading_pdf\" class=\"loader\"></span>\r\n                        \t/\r\n                        \t<a *ngIf=\"!item.is_downloading_docx\" (click)=\"onDownloadDocx(item.id)\">DOCX</a><span *ngIf=\"item.is_downloading_docx\" class=\"loader\"></span>\r\n                        \t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#approveIRF\">Reject</a>\r\n                        \t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#deleteIRFModal\">Delete</a>\r\n                        </ng-container>\r\n                   </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/view-walkthrough/view-walkthrough.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/forms/view-walkthrough/view-walkthrough.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewWalkthroughComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWalkthroughComponent", function() { return ViewWalkthroughComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_newApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/newApi */ "./src/app/_services/newApi.ts");









var ViewWalkthroughComponent = /** @class */ (function () {
    function ViewWalkthroughComponent(fms, adms, cds, ssv, route, router, ems, nas) {
        this.fms = fms;
        this.adms = adms;
        this.cds = cds;
        this.ssv = ssv;
        this.route = route;
        this.router = router;
        this.ems = ems;
        this.nas = nas;
        this.typeId = '49';
    }
    ViewWalkthroughComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reject_reason = "";
        this.populatePermissions();
        this.populateNames();
        this.route.params.subscribe(function (params) {
            _this.processNum = params['processNum'];
            _this.populateItems();
        });
        this.uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
    };
    ViewWalkthroughComponent.prototype.populateItems = function () {
        var _this = this;
        console.log("processNum", this.processNum, this.uid, this.typeId);
        // this.fms.getForms(this.typeId, 200, 'DESC', 0)
        //     .subscribe(itemsList => {
        //        const newItem = itemsList.filter((x: any) => x.id == 35035);
        //         console.log("itemsList", newItem)
        //         if (this.processNum && itemsList) {
        //             itemsList = itemsList.filter(x => x.process_number == this.processNum);
        //             //Filter out deleted ones
        //             itemsList = itemsList.filter(x => x.is_deleted == '0');
        //             //Filter by user if PM or Management
        //             if (this.roleId == '3' || this.roleId == '2') {
        //                 itemsList = itemsList.filter(x => x.filler_id == this.uid);
        //             }
        //             if (itemsList) {
        //                 this.ssv.alerts['wt_' + this.processNum] = itemsList.length;
        //             }
        //             this.itemsList = itemsList.sort((a, b) => {
        //                 return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
        //             });
        //         }
        //         // this.partialItemsList = itemsList;
        //     });
        this.nas.getViewWalkThrough(this.typeId, this.processNum, this.uid).subscribe(function (itemsList) {
            if (itemsList) {
                _this.ssv.alerts['wt_' + _this.processNum] = itemsList.length;
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewWalkthroughComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewWalkthroughComponent.prototype.populatePermissions = function () {
        var _this = this;
        var role_id = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.adms.getFormPermissions(role_id)
            .subscribe(function (list) { return _this.userPermission = list.filter(function (x) { return x.form_type_id == _this.typeId; }).map(function (x) { return x.process_num; }); });
    };
    ViewWalkthroughComponent.prototype.getEmployeeName = function (uid) {
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewWalkthroughComponent.prototype.onDownloadPDF = function (id) {
        var _this = this;
        //Disable download until response received
        this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = true;
        this.cds.downloadWalkthroughPDF(id)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'Punchlist.pdf', { type: 'application/pdf' });
            //Re-enable download
            _this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = false;
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to download form!');
            //Re-enable download
            _this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_pdf = false;
        });
    };
    ViewWalkthroughComponent.prototype.onDownloadDocx = function (id) {
        var _this = this;
        this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_docx = true;
        this.cds.downloadWalkthroughDocx(id)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'Punchlist.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            _this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_docx = false;
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to download form!');
            _this.partialItemsList.find(function (x) { return x.id == id; }).is_downloading_docx = false;
        });
    };
    ViewWalkthroughComponent.prototype.onDelete = function () {
        var _this = this;
        //Close all modals
        document.getElementById('approveIRF').style.display = "none";
        document.getElementById('deleteIRFModal').style.display = "none";
        this.fms.setFormDeactivateStatus(this.typeId, this.focusedId, true)
            .subscribe(function (data) {
            _this.ssv.countForm('wt_3', '49', null, '3');
            _this.ssv.showSuccess('Form successfully deleted!');
            window.location.reload();
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Form deletion failed!');
        });
    };
    ViewWalkthroughComponent.prototype.onRecall = function (id) {
        var _this = this;
        this.fms.setFormState(this.typeId, id, '2')
            .subscribe(function (data) {
            _this.ssv.countForm('wt_3', '49', null, '3');
            // Page redirect when getting response
            _this.ssv.showSuccess('Form successfully recalled.');
            window.location.reload();
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to recall form!');
        });
    };
    ViewWalkthroughComponent.prototype.onReject = function () {
        var _this = this;
        var model = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
        //Change form state
        this.fms.setFormState(this.typeId, this.focusedId, '2')
            .subscribe(function (data) {
            _this.ssv.countForm('wt_3', '49', null, '3');
            // Page redirect when getting response
            //Email project manager
            _this.notifyPunchlistRejection(_this.focusedId, model.filler_id);
            _this.ssv.showSuccess('Form successfully returned to Project Manager.');
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to reject form!');
        });
    };
    ViewWalkthroughComponent.prototype.onClickForm = function (id) {
        this.focusedId = id;
    };
    ViewWalkthroughComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return x.inputMap.project_name.toLowerCase().includes(input.toLowerCase());
            });
        }
    };
    /**
     * Notify walkthrough proposal rejection to the Project Manager
     * @param note - Management note containing reason for rejection
     * @throws Exception when form retrieval from database fails or email cannot be sent
     */
    ViewWalkthroughComponent.prototype.notifyPunchlistRejection = function (formId, fillerId) {
        var _this = this;
        //Get form filler as recipient
        this.adms.getUser(fillerId).subscribe(function (user) {
            if (user.email) {
                //Send Email
                var recipientList = [user.email];
                var ccList = [];
                var bccList = [];
                var subject = "Punchlist Revision Request";
                var content = user.name + ","
                    + "<br><br>A Punchlist has been returned"
                    + (_this.note ? "." : " with the following note:<br><i>" + _this.note + "</i>")
                    + "<br><br>Please login to the Dashboard to revise or discard the form."
                    + "<br>The form will be placed in the <i>Draft</i> section.";
                var email = {
                    'subject': subject,
                    'body': content,
                    'to': recipientList,
                    'cc': ccList,
                    'bcc': bccList
                };
                console.log(JSON.stringify(email));
                _this.ems.sendEmail(email).subscribe(function (data) { return window.location.reload(); });
            }
            else {
                console.log('Email recipient not found');
            }
        }, function (error) {
            console.log(error);
            // Display error message
            _this.ssv.showError('Error: Email recipient not found!');
        });
    };
    ViewWalkthroughComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-walkthrough',
            template: __webpack_require__(/*! ./view-walkthrough.component.html */ "./src/app/forms/view-walkthrough/view-walkthrough.component.html"),
            styles: [__webpack_require__(/*! ./view-walkthrough.component.css */ "./src/app/forms/view-walkthrough/view-walkthrough.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_5__["CustomDownloadServiceService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["EmailNotificationService"], src_app_services_newApi__WEBPACK_IMPORTED_MODULE_7__["NewApiService"]])
    ], ViewWalkthroughComponent);
    return ViewWalkthroughComponent;
}());



/***/ }),

/***/ "./src/app/forms/view-work-order/view-work-order.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/forms/view-work-order/view-work-order.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3ZpZXctd29yay1vcmRlci92aWV3LXdvcmstb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forms/view-work-order/view-work-order.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/forms/view-work-order/view-work-order.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MODALS -->\r\n<div class=\"modal fade nmodal_layer\" id=\"approveIRF\" tabindex=\"-1\" role=\"dialog\" data-backdrop=\"false\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n      \t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      \t<h4 class=\"modal-title\">Approve or Reject</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\t\t<div class=\"form-group text-left\">\r\n         \t<label for=\"decision_reason\">If REJECT, Enter Reason: </label>\r\n\t\t\t<textarea class=\"form-control\" name=\"reject_reason\" [(ngModel)]=\"reject_reason\"></textarea>\r\n      \t</div>\r\n      \t<div class=\"text-center\">\r\n      \t\t<button type=\"button\" (click)=\"onApprove()\" class=\"btn btn-success margin_right_15\"><span class=\"glyphicon glyphicon-ok\"></span> Approve</button>\r\n\t\t\t<button type=\"button\" (click)=\"onReject()\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-remove\"></span> Reject</button>\r\n      \t</div>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n      \t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Work Order - {{formProcessState}}</h3>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Project or Job #\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Project</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-1\">Job #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">IWO #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Tech Name</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Start Date\r\n           \t\t\t\t<a (click)=\"sortListByDate()\">\r\n           \t\t\t\t\t<span class=\"glyphicon glyphicon-sort\"></span>\r\n           \t\t\t\t</a>\r\n         \t\t\t</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.inputMap.project_name}}</td>\r\n                    <td class=\"col-sm-1\">{{item.inputMap.job_num}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.po_num}}</td>\r\n                    <td class=\"col-sm-2\">{{irfHeadersMap && item.inputMap.job_num && irfHeadersMap[item.inputMap.job_num]? getEmployeeName(irfHeadersMap[item.inputMap.job_num].filler_id) : '-'}}</td>\r\n                    <td class=\"col-sm-2\">{{item.inputMap.date | date}}<br>by {{getEmployeeName(item.modifier_id)}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                    \t<ng-container *ngIf=\"item.process_number == 1 && userPermission.includes(1)\">\r\n                    \t\t<a routerLink=\"/work-order/{{item.id}}\">Edit</a> - <a (click)=\"onDownloadXls(item.id)\">XLS</a>\r\n                    \t\t<br><a routerLink=\"/view-irrigation-repair/4/{{item.inputMap.job_num}}\">View Repairs</a>\r\n                    \t\t<br><a (click)=\"onDownloadStockTransfer(item.inputMap.job_num)\">Stock Transfer <span class=\"glyphicon glyphicon-download-alt\"></span></a> \r\n                    \t\t<br><a *ngIf=\"!downloadingAll\" (click)=\"onDownloadAll(item.inputMap.job_num)\">Download All <span class=\"glyphicon glyphicon-download-alt\"></span></a>\r\n                    \t\t<span *ngIf=\"downloadingAll\">downloading...</span>\r\n                    \t</ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 2 && userPermission.includes(1)\">\r\n                    \t\t<a (click)=\"onRecall(item.id)\">Recall</a>\r\n                    \t</ng-container>\r\n                    \t<ng-container *ngIf=\"item.process_number == 2 && userPermission.includes(2)\">\r\n                    \t\t<a routerLink=\"/work-order/{{item.id}}\">View</a> - <a (click)=\"onDownloadXls(item.id)\">Download</a>\r\n                        \t<br><a (click)=\"onClickForm(item.id)\" data-toggle=\"modal\" data-target=\"#approveIRF\">Review</a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.process_number == 3 && userPermission.includes(3)\">\r\n                        \t<a (click)=\"onDownloadXls(item.id)\">Download</a>\r\n                        \t<br><a routerLink=\"/work-order/{{item.id}}\">View & Delete</a>\r\n                        \t<br><a routerLink=\"/view-irrigation-repair/4/{{item.inputMap.job_num}}\">View Repairs</a>\r\n                    \t\t<br><a (click)=\"onDownloadStockTransfer(item.inputMap.job_num)\">Stock Transfer <span class=\"glyphicon glyphicon-download-alt\"></span></a> \r\n                    \t\t<br><a routerLink=\"/view-purchase-order/1/{{item.inputMap.job_num}}\">View PO</a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/forms/view-work-order/view-work-order.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/view-work-order/view-work-order.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewWorkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewWorkOrderComponent", function() { return ViewWorkOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ViewWorkOrderComponent = /** @class */ (function () {
    function ViewWorkOrderComponent(fms, adms, dcs, cds, router, ssv, route) {
        this.fms = fms;
        this.adms = adms;
        this.dcs = dcs;
        this.cds = cds;
        this.router = router;
        this.ssv = ssv;
        this.route = route;
        this.typeId = '45';
        this.sortAsc = true;
        this.downloadingAll = false;
    }
    ViewWorkOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.processNum = params['processNum'];
            if (_this.processNum == 'x') {
                _this.router.navigate(['/view-work-order']);
                return;
            }
            _this.uid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
            _this.roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
            _this.clientId = JSON.parse(localStorage.getItem('currentUser')).user.client_id;
            _this.populateNames();
            _this.populatePermissions();
            _this.populateItems();
            _this.populateSTForms();
            switch (_this.processNum) {
                case '1':
                    _this.formProcessState = 'Draft';
                    break;
                case '2':
                    _this.formProcessState = 'Waiting Management Approval';
                    break;
                case '3':
                    _this.formProcessState = 'Ready for Billing';
                    break;
                case '4':
                    _this.formProcessState = 'Pending Archival';
                    break;
                default:
                    _this.formProcessState = 'All';
                    break;
            }
            _this.getIRFHeadersMap();
        });
    };
    ViewWorkOrderComponent.prototype.populateItems = function () {
        var _this = this;
        this.fms.getForms(this.typeId, 10000, 'DESC', 0)
            .subscribe(function (itemsList) {
            if (_this.processNum) {
                itemsList = itemsList.filter(function (x) { return x.process_number == _this.processNum; });
            }
            //Exclude deleted forms
            itemsList = itemsList.filter(function (x) { return x.is_deleted == '0'; });
            if (itemsList) {
                _this.itemsList = itemsList.sort(function (a, b) {
                    return (a.id < b.id ? 1 : a.id > b.id ? -1 : 0);
                });
            }
            _this.partialItemsList = itemsList;
        });
    };
    ViewWorkOrderComponent.prototype.sortListByDate = function () {
        if (this.partialItemsList) {
            this.sortAsc = !this.sortAsc;
            if (this.sortAsc) {
                this.partialItemsList = this.partialItemsList.sort(function (a, b) {
                    return (a.inputMap.date < b.inputMap.date ? 1 : a.inputMap.date > b.inputMap.date ? -1 : 0);
                });
            }
            else {
                this.partialItemsList = this.partialItemsList.sort(function (a, b) {
                    return (a.inputMap.date > b.inputMap.date ? 1 : a.inputMap.date < b.inputMap.date ? -1 : 0);
                });
            }
        }
    };
    ViewWorkOrderComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewWorkOrderComponent.prototype.populatePermissions = function () {
        var _this = this;
        var role_id = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        this.adms.getFormPermissions(role_id)
            .subscribe(function (list) { return _this.userPermission = list.map(function (x) { return x.process_num; }); });
    };
    ViewWorkOrderComponent.prototype.getEmployeeName = function (uid) {
        console.log('Getting employee ' + uid);
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewWorkOrderComponent.prototype.onDownloadPDF = function (id) {
        var _this = this;
        this.cds.downloadWorkOrderPDF(id)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'WorkOrder.pdf', { type: 'application/pdf' });
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to download form!');
        });
    };
    ViewWorkOrderComponent.prototype.onDownloadXls = function (id) {
        var _this = this;
        this.cds.downloadWorkOrderXls(id)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'WorkOrder.xls', { type: 'application/vnd.ms-excel' });
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to download form!');
        });
    };
    ViewWorkOrderComponent.prototype.onDownloadAll = function (jobnum) {
        var _this = this;
        this.downloadingAll = true;
        this.cds.downloadAllWithJobnum_zip(jobnum)
            .subscribe(function (res) {
            _this.downloadingAll = false;
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'forms' + jobnum + '.zip', { type: 'application/zip' });
        }, function (error) {
            _this.downloadingAll = false;
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to download forms!');
        });
    };
    ViewWorkOrderComponent.prototype.deactivateAllFormWithJobnum = function (jobnum) {
        //Get IDs of all IRFs with this job number
        this.cds.setActiveAllFormWithJobnum(jobnum, false)
            .subscribe(function (data) {
            console.log('Deleted All forms with job number ' + jobnum);
        }, function (error) {
            console.log(error);
        });
    };
    ViewWorkOrderComponent.prototype.onClickForm = function (id) {
        this.focusedId = id;
    };
    /**
     * Reject form and send it back to Customer Service for submission (process #1)
     * @param id
     */
    ViewWorkOrderComponent.prototype.onReject = function () {
        var _this = this;
        var model = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
        //Change form state
        this.onSubmit('1', this.focusedId, 'rejected');
        //Send email to Technician
        var recipient = this.usersList.find(function (x) { return x.uid == model.filler_id; });
        //TODO: Email sender
    };
    ViewWorkOrderComponent.prototype.onApprove = function () {
        var _this = this;
        var model = this.itemsList.find(function (x) { return x.id == _this.focusedId; });
        //Change form state
        this.onSubmit('3', this.focusedId, 'approved');
        //Send email to Customer Service (role = 7)
        var recipient = this.usersList.find(function (x) { return x.role_id == '7' && x.is_active == '1'; });
        //TODO: Email sender
    };
    ViewWorkOrderComponent.prototype.onSubmit = function (state, id, actionVerb) {
        var _this = this;
        //Close all modals
        document.getElementById('approveIRF').style.display = "none";
        document.getElementById('deleteIRFModal').style.display = "none";
        //Update form
        this.fms.setFormState(this.typeId, id, state)
            .subscribe(function (data) {
            _this.ssv.showSuccess('Form successfully ' + actionVerb + '!');
            _this.router.navigate(['/view-work-order/' + state]);
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Form failed to be ' + actionVerb + '!');
        });
    };
    /**
     * Recall form and make it available to edit (process #1)
     * @param id
     */
    ViewWorkOrderComponent.prototype.onRecall = function (id) {
        var _this = this;
        this.fms.setFormState(this.typeId, id, '1')
            .subscribe(function (data) {
            // Page redirect when getting response
            _this.ssv.showSuccess('Form successfully recalled!');
            _this.router.navigate(['/view-work-order']);
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to recall form!');
        });
    };
    ViewWorkOrderComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return ((x.inputMap.job_num && x.inputMap.job_num.toLowerCase().includes(input.toLowerCase()))) ||
                    (x.inputMap.project_name && x.inputMap.project_name.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    ViewWorkOrderComponent.prototype.populateSTForms = function () {
        var _this = this;
        this.fms.getForms('54', 10000, 'DESC', 0)
            .subscribe(function (itemsList) {
            _this.stockTransferList = itemsList.filter(function (x) { return x; });
        });
    };
    //Get ID of a stock transfer that has this job number
    ViewWorkOrderComponent.prototype.getStockTransferId = function (jobnum) {
        var st = this.stockTransferList.find(function (x) { return x.inputMap.job_num == jobnum; });
        if (st) {
            return st.id;
        }
    };
    ViewWorkOrderComponent.prototype.onDownloadStockTransfer = function (jobnum) {
        var _this = this;
        var st = this.stockTransferList.find(function (x) { return x.inputMap.job_num == jobnum; });
        if (st) {
            //Download XLS
            this.cds.downloadStockTransferXls(st.id)
                .subscribe(function (res) {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'StockTransfer.xls', { type: 'application/vnd.ms-excel' });
            }, function (error) {
                // Display error message
                _this.ssv.showError('Error: Unable to download form!');
            });
        }
    };
    ViewWorkOrderComponent.prototype.getIRFHeadersMap = function () {
        var _this = this;
        this.cds.getIRFHeaders('10000')
            .subscribe(function (data) {
            _this.irfHeadersMap = data;
        });
    };
    ViewWorkOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-work-order',
            template: __webpack_require__(/*! ./view-work-order.component.html */ "./src/app/forms/view-work-order/view-work-order.component.html"),
            styles: [__webpack_require__(/*! ./view-work-order.component.css */ "./src/app/forms/view-work-order/view-work-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_5__["CustomDownloadServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ViewWorkOrderComponent);
    return ViewWorkOrderComponent;
}());



/***/ }),

/***/ "./src/app/general/app-updates/app-updates.component.css":
/*!***************************************************************!*\
  !*** ./src/app/general/app-updates/app-updates.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvYXBwLXVwZGF0ZXMvYXBwLXVwZGF0ZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/general/app-updates/app-updates.component.html":
/*!****************************************************************!*\
  !*** ./src/app/general/app-updates/app-updates.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This page fragment is to be included under AdminDashboard <body> tag -->\r\n\r\n<div class=\"row margin_addform\">\r\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 margin_addform\">\r\n    \t<div class=\"row\">\r\n    \t\t<div class=\"col text-center\">\r\n    \t\t\t<h2>App Updates</h2>\r\n    \t\t\t<b><i>{{version}} ({{release_date}})</i></b>\r\n        \t</div>\r\n        </div>\r\n    \t<div class=\"row margin_top_15 text-center\">\r\n    \t\t<div class=\"col\">\r\n\t        \t<a target=\"_self\" href=\"{{downloadLink}}\" class=\"btn btn-lg btn-default\" download=\"NisshoApp.apk\">\r\n\t        \t\t<b>Android <span class=\"glyphicon glyphicon-download-alt\"></span></b>\r\n\t        \t</a>\r\n        \t</div>\r\n        </div>\r\n        <div class=\"row margin_top_15\">\r\n    \t\t<div class=\"text-left col-xs-12 col-md-8 col-md-offset-2\">\r\n    \t\t\t<h4><u>To Update your app on your Android device:</u></h4>\r\n    \t\t\t<ol>\r\n    \t\t\t\t<li>Tap on the <b>Android</b> button to download the App.</li>\r\n    \t\t\t\t<li>Open the downloaded file to run the update.</li>\r\n    \t\t\t\t<li>If prompted, allow your device to install from sources other than Play Store:\r\n    \t\t\t\t\t<ol type=\"a\">\r\n    \t\t\t\t\t\t<li>Open tablet Settings > Lock Screen and Security</li>\r\n    \t\t\t\t\t\t<li>Under <i>Security</i>, switch on <i>Unknown sources</i></li>\r\n    \t\t\t\t\t</ol>\r\n    \t\t\t\t</li>\r\n    \t\t\t</ol>\r\n        \t</div>\r\n        </div>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/general/app-updates/app-updates.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/general/app-updates/app-updates.component.ts ***!
  \**************************************************************/
/*! exports provided: AppUpdatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUpdatesComponent", function() { return AppUpdatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppUpdatesComponent = /** @class */ (function () {
    function AppUpdatesComponent() {
    }
    AppUpdatesComponent.prototype.ngOnInit = function () {
        var roleId = JSON.parse(localStorage.getItem('currentUser')).user.role_id;
        switch (roleId) {
            //Maintenance App(Tom and PMs)
            case 2:
            case 3:
                this.downloadLink = 'https://s3-us-west-1.amazonaws.com/process-smart-attachments/android_apk/1/NisshoMaintenance.apk';
                this.version = 'v.3.2';
                this.release_date = '07/10/2019';
                break;
            //Irrigation App
            case 4:
            case 6:
                this.downloadLink = 'https://s3-us-west-1.amazonaws.com/process-smart-attachments/android_apk/1/NisshoIrrigation.apk';
                this.version = 'v.3.0';
                this.release_date = '05/13/2019';
                break;
            //Janitorial App
            case 13:
                this.downloadLink = 'https://s3-us-west-1.amazonaws.com/process-smart-attachments/android_apk/1/NisshoJanitorial.apk';
                this.version = 'v.2.0';
                this.release_date = '05/13/2019';
                break;
            default: this.downloadLink = '';
        }
    };
    AppUpdatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-updates',
            template: __webpack_require__(/*! ./app-updates.component.html */ "./src/app/general/app-updates/app-updates.component.html"),
            styles: [__webpack_require__(/*! ./app-updates.component.css */ "./src/app/general/app-updates/app-updates.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppUpdatesComponent);
    return AppUpdatesComponent;
}());



/***/ }),

/***/ "./src/app/general/bug-report/bug-report.component.css":
/*!*************************************************************!*\
  !*** ./src/app/general/bug-report/bug-report.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvYnVnLXJlcG9ydC9idWctcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/general/bug-report/bug-report.component.html":
/*!**************************************************************!*\
  !*** ./src/app/general/bug-report/bug-report.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-left margin_top_15\">\r\n   \t<h2 class=\"text-center\">Bug/Error Report</h2>\r\n    <div class=\"col-xs-12 margin_top_15\">\r\n    \t<form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n            <div class=\"row form-group\">\r\n            \t<div class=\"col-xs-8 col-xs-offset-2\">\r\n            \t\t<div class='text-left'>\r\n\t            \t\t<label for=\"message\">Specify Details</label>\r\n\t\t\t            <textarea required [(ngModel)]=\"bugDetails\" id=\"message\" name=\"message\" class=\"form-control\" placeholder=\"Specify bug/error encountered...\" rows=\"5\"></textarea> \r\n\t\t\t\t\t</div>\r\n\t         \t</div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n            \t<div class=\"col-xs-12 text-center\">\r\n\t                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!nisshoForm.form.valid\"><b>Send</b></button>\r\n\t            </div>\r\n            </div>\r\n    \t</form>\t\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/general/bug-report/bug-report.component.ts":
/*!************************************************************!*\
  !*** ./src/app/general/bug-report/bug-report.component.ts ***!
  \************************************************************/
/*! exports provided: BugReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugReportComponent", function() { return BugReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");





var BugReportComponent = /** @class */ (function () {
    function BugReportComponent(ems, ssv, router) {
        this.ems = ems;
        this.ssv = ssv;
        this.router = router;
    }
    BugReportComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    };
    BugReportComponent.prototype.onSubmit = function () {
        var _this = this;
        //Send Email
        var recipientList = ['ttchan@personitech.com'];
        var ccList = ['eangkasa@personitech.com'];
        var bccList = [];
        var subject = "Nissho Bug Report";
        var content = "I have encountered the following bug/error:<br><i>"
            + (!this.bugDetails ? "Unspecified" : this.bugDetails)
            + "</i><br><br><b>Sent by: </b>" + this.user.name
            + "<br><b>Phone: </b>" + this.user.phone
            + "<br><b>Email: </b>" + this.user.email;
        var email = { 'subject': subject,
            'body': content,
            'to': recipientList,
            'cc': ccList,
            'bcc': bccList };
        this.ems.sendEmail(email)
            .subscribe(function (data) {
            _this.router.navigate(['/']);
            _this.ssv.showSuccess('Bug Report successfully submitted!');
        }, function (error) {
            _this.router.navigate(['/']);
            _this.ssv.showError('Failed to send bug report: Please re-login and try again');
        });
    };
    BugReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bug-report',
            template: __webpack_require__(/*! ./bug-report.component.html */ "./src/app/general/bug-report/bug-report.component.html"),
            styles: [__webpack_require__(/*! ./bug-report.component.css */ "./src/app/general/bug-report/bug-report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["EmailNotificationService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BugReportComponent);
    return BugReportComponent;
}());



/***/ }),

/***/ "./src/app/general/update-constants/update-constants.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/general/update-constants/update-constants.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvdXBkYXRlLWNvbnN0YW50cy91cGRhdGUtY29uc3RhbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/general/update-constants/update-constants.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/general/update-constants/update-constants.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-left\">\r\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n    \t<form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\" *ngIf=\"constants\">\r\n   \t\t   \t<div class=\"row\">\r\n\t\t    \t<div class=\"col-xs-6 col-md-4 col-md-offset-4 text-left\">\r\n\t\t    \t\t<h2 class=\"text-center\">Pricing Rates</h2>\r\n\t\t  \t\t</div>\r\n\t\t    </div>\r\n           \t\t<div class=\"form-group row\" >\r\n\t            \t<div class=\"col-xs-6 col-md-4 col-md-offset-4 text-left\">\r\n\t            \t\t<label for=\"tax_rate\">Tax Rate (%)</label>\r\n\t\t\t            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"constants.tax_rate\" placeholder=\"8.25\" id=\"tax_rate\" name=\"tax_rate\" required>\r\n\t\t         \t</div>\r\n\t            </div>\r\n           \t\t<div class=\"form-group row\">\r\n\t            \t<div class=\"col-xs-6 col-md-4 col-md-offset-4 text-left\">\r\n\t            \t<label for=\"markup\">Markup Value (%)</label>\r\n\t\t\t            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"constants.markup_rate\" placeholder=\"38.00\" id=\"markup\" name=\"markup\" required>\r\n\t\t         \t</div>\r\n           \t\t</div>\r\n           \t\t<div class=\"form-group row\">\r\n\t            \t<div class=\"col-xs-6 col-md-4 col-md-offset-4 text-left\">\r\n\t            \t<label for=\"tech_rate\">Irrigation Tech Hourly Rate ($)</label>\r\n\t\t\t            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"constants.tech_rate\" placeholder=\"55.00\" id=\"tech_rate\" name=\"tech_rate\" required>\r\n\t\t         \t</div>\r\n           \t\t</div>\r\n            <div class=\"form-group row\">\r\n            \t<div class=\"text-center\">\r\n\t                <button type=\"submit\" class=\"btn btn-success\"><b>Submit Changes</b></button>\r\n\t            </div>\r\n            </div>\r\n    \t</form>\t\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/general/update-constants/update-constants.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/general/update-constants/update-constants.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateConstantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateConstantsComponent", function() { return UpdateConstantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UpdateConstantsComponent = /** @class */ (function () {
    function UpdateConstantsComponent(adms, ssv, router) {
        this.adms = adms;
        this.ssv = ssv;
        this.router = router;
    }
    UpdateConstantsComponent.prototype.ngOnInit = function () {
        this.populateConstants();
    };
    UpdateConstantsComponent.prototype.populateConstants = function () {
        var _this = this;
        this.adms.getConstants()
            .subscribe(function (constants) { return _this.constants = constants; });
    };
    UpdateConstantsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.adms.updateConstants(this.constants)
            .subscribe(function (data) {
            _this.ssv.showSuccess('Pricing successfully updated!');
            _this.router.navigate(['/update-constants']);
        }, function (error) {
            // Display error message
            _this.ssv.showError('Unable to update pricing!');
        });
    };
    UpdateConstantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-constants',
            template: __webpack_require__(/*! ./update-constants.component.html */ "./src/app/general/update-constants/update-constants.component.html"),
            styles: [__webpack_require__(/*! ./update-constants.component.css */ "./src/app/general/update-constants/update-constants.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UpdateConstantsComponent);
    return UpdateConstantsComponent;
}());



/***/ }),

/***/ "./src/app/general/view-data-usage/view-data-usage.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/general/view-data-usage/view-data-usage.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwvdmlldy1kYXRhLXVzYWdlL3ZpZXctZGF0YS11c2FnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/general/view-data-usage/view-data-usage.component.html":
/*!************************************************************************!*\
  !*** ./src/app/general/view-data-usage/view-data-usage.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_addform text-center\">\r\n   \t<h3 class=\"text-capitalize\" style=\"color: #323131;\">Nissho App Data Usage ({{curr_monthyear | date:'MMM y'}})</h3>\r\n   \t\r\n\t<div class=\"col-sm-10 col-sm-offset-1 table-responsive\">\r\n\t\t<div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-xs-6 text-right\">\r\n\t\t\t\t<a (click)=\"onDownloadXls(12)\" class='btn btn-info btn-sm'><b>Usage History</b> <span class='glyphicon glyphicon-download-alt'></span></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-6 text-left\">\r\n\t\t\t\t<a (click)=\"onDownloadXls(3)\" class='btn btn-info btn-sm'><b>Past 3 Months</b> <span class='glyphicon glyphicon-download-alt'></span></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!itemsList\">\r\n\t\t\tNo usage yet!\r\n        </i>\r\n        <table *ngIf=\"itemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-xs-3\">User</th>\r\n           \t\t\t<th class=\"table_cell_heading col-xs-3\">Role</th>\r\n           \t\t\t<th class=\"table_cell_heading col-xs-3\">Upload Size</th>\r\n           \t\t\t<th class=\"table_cell_heading col-xs-3\">Download Size</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t            <tr *ngFor=\"let key of keyList\" class=\"table_body\">\r\n\t               <td class=\"table_cell_wide col-xs-3\">{{getName(key)}}</td>\r\n\t               <td class=\"table_cell_wide col-xs-3\">{{getRole(key)}}</td>\r\n\t               <td class=\"table_cell_wide col-xs-3\">{{itemsList[key][0]/1000000.0 | number: '1.2'}} MB</td>\r\n\t               <td class=\"table_cell_wide col-xs-3\">{{itemsList[key][1]/1000000.0 | number: '1.2'}} MB</td>\r\n\t            </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/general/view-data-usage/view-data-usage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/general/view-data-usage/view-data-usage.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewDataUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDataUsageComponent", function() { return ViewDataUsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");






var ViewDataUsageComponent = /** @class */ (function () {
    function ViewDataUsageComponent(cds, adms, ssv, aus) {
        this.cds = cds;
        this.adms = adms;
        this.ssv = ssv;
        this.aus = aus;
    }
    ViewDataUsageComponent.prototype.ngOnInit = function () {
        this.curr_monthyear = new Date();
        this.populateUsage();
        this.populateNames();
        this.populateRoles();
    };
    ViewDataUsageComponent.prototype.populateNames = function () {
        var _this = this;
        this.aus.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewDataUsageComponent.prototype.populateRoles = function () {
        var _this = this;
        this.aus.getRoles()
            .subscribe(function (rolesList) { return _this.rolesList = rolesList; });
    };
    ViewDataUsageComponent.prototype.populateUsage = function () {
        var _this = this;
        this.adms.getDataUsage(1)
            .subscribe(function (itemsList) {
            var curStartOfMonth = _this.ssv.toHtmlDate(null);
            curStartOfMonth = curStartOfMonth.substring(0, curStartOfMonth.lastIndexOf('-')) + '-01';
            _this.keyList = Object.keys(itemsList[curStartOfMonth]);
            _this.itemsList = itemsList[curStartOfMonth];
        }, function (error) {
        });
    };
    ViewDataUsageComponent.prototype.onDownloadXls = function (months) {
        var _this = this;
        this.cds.downloadDataUsageXls(months)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(res, 'DataUsage.xls', { type: 'application/vnd.ms-excel' });
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to download data usage!');
        });
    };
    ViewDataUsageComponent.prototype.getName = function (id) {
        var user = this.usersList.find(function (x) { return x.uid == id; });
        if (user) {
            return user.name;
        }
        return '-';
    };
    ViewDataUsageComponent.prototype.getRole = function (id) {
        var user = this.usersList.find(function (x) { return x.uid == id; });
        if (user) {
            var role = this.rolesList.find(function (x) { return x.id == user.role_id; });
            if (role) {
                return role.title;
            }
        }
        return '-';
    };
    ViewDataUsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-data-usage',
            template: __webpack_require__(/*! ./view-data-usage.component.html */ "./src/app/general/view-data-usage/view-data-usage.component.html"),
            styles: [__webpack_require__(/*! ./view-data-usage.component.css */ "./src/app/general/view-data-usage/view-data-usage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomDownloadServiceService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ViewDataUsageComponent);
    return ViewDataUsageComponent;
}());



/***/ }),

/***/ "./src/app/inventory/form-containers/form-containers.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/inventory/form-containers/form-containers.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9mb3JtLWNvbnRhaW5lcnMvZm9ybS1jb250YWluZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/inventory/form-containers/form-containers.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/inventory/form-containers/form-containers.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-left\">\r\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\r\n   \t\t<div class=\"row\">\r\n        \t<div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n\t            <h2 class=\"text-center\">Add New Truck</h2>\r\n         \t</div>\r\n        </div>\r\n    \t<form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n    \t\t<div class=\"row form-group\">\r\n\t        \t<div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t\t            <label for=\"name\">Truck Number</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"2053\" id=\"name\" name=\"name\" required [(ngModel)]=\"model.name\">\r\n\t         \t</div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n\t        \t<div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t\t            <label for=\"description\">Crew</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"182\" id=\"description\" name=\"description\" required [(ngModel)]=\"model.description\">\r\n\t         \t</div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n    \t\t\t<div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t\t            <label for=\"supervisor_id\">Truck Supervisor</label>\r\n\t         \t\t<select id=\"supervisor_id\" class=\"form-control\" [(ngModel)]=\"model.supervisor_id\" name=\"supervisor_id\" required>\r\n                    \t<option selected disabled hidden [value]=\"0\">-- Select Supervisor --</option>\r\n                        <option *ngFor=\"let a of usersList\" [value]=\"a.uid\">{{a.name}}</option>\r\n                    </select>\r\n\t         \t</div>\r\n            </div>\r\n            <div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-4 col-md-offset-4 text-center\">\r\n\t\t            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!nisshoForm.form.valid\"><b>Submit</b></button>\r\n\t         \t</div>\r\n            </div>\r\n    \t</form>\t\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/inventory/form-containers/form-containers.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/inventory/form-containers/form-containers.component.ts ***!
  \************************************************************************/
/*! exports provided: FormContainersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainersComponent", function() { return FormContainersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");






var FormContainersComponent = /** @class */ (function () {
    function FormContainersComponent(ims, route, router, ssv, adms) {
        this.ims = ims;
        this.route = route;
        this.router = router;
        this.ssv = ssv;
        this.adms = adms;
    }
    FormContainersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        //Load or create new form
        this.route.params.subscribe(function (params) {
            _this.deptId = params['deptId'];
            _this.truckId = params['id'];
            if (_this.truckId) {
                //Load Truck detail
                _this.getModel();
            }
            else {
                //Create a new form
                _this.model = {
                    department_id: _this.deptId,
                    supervisor_id: '0'
                };
            }
        });
        this.populateNames();
    };
    FormContainersComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) {
            if (_this.deptId == '1') {
                usersList = usersList.filter(function (x) { return x.role_id == '4' || x.role_id == '6'; });
            }
            else if (_this.deptId == '6') {
                usersList = usersList.filter(function (x) { return x.role_id == '13'; });
            }
            _this.usersList = usersList;
        });
    };
    FormContainersComponent.prototype.onSubmit = function () {
        var _this = this;
        //Update DB if exists, or create a new one otherwise
        if (this.truckId) {
            this.ims.updateContainer(this.model, this.deptId, this.truckId)
                .subscribe(function (data) {
                _this.ssv.showSuccess('Truck successfully updated!');
                _this.router.navigate(['/form-containers/' + _this.deptId + '/' + _this.truckId]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to add new Truck!');
                console.log(error);
            });
        }
        else {
            this.ims.newContainer(this.model, this.deptId)
                .subscribe(function (data) {
                // Page redirect when getting response
                _this.ssv.showSuccess('Truck successfully added!');
                _this.router.navigate(['/view-containers/' + _this.deptId]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to add new Truck!');
                console.log(error);
            });
        }
    };
    FormContainersComponent.prototype.getModel = function () {
        var _this = this;
        this.ims.getContainer(this.deptId, this.truckId)
            .subscribe(function (model) { return _this.model = model; });
    };
    Object.defineProperty(FormContainersComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FormContainersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-containers',
            template: __webpack_require__(/*! ./form-containers.component.html */ "./src/app/inventory/form-containers/form-containers.component.html"),
            styles: [__webpack_require__(/*! ./form-containers.component.css */ "./src/app/inventory/form-containers/form-containers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["InventoryManagementService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], FormContainersComponent);
    return FormContainersComponent;
}());



/***/ }),

/***/ "./src/app/inventory/form-materials/form-materials.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/inventory/form-materials/form-materials.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9mb3JtLW1hdGVyaWFscy9mb3JtLW1hdGVyaWFscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/inventory/form-materials/form-materials.component.html":
/*!************************************************************************!*\
  !*** ./src/app/inventory/form-materials/form-materials.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col col-sm-offset-1 text-left\">\r\n\t\t<h3><a routerLink=\"/view-materials/{{deptId}}\" class=\"back_btn\"><span class=\"glyphicon glyphicon-chevron-left\"></span>Back</a></h3>\r\n\t</div>\r\n</div>\r\n<div class=\"row text-left\">\r\n    <div class=\"col-xs-12 col-sm-10 col-sm-offset-1\">\r\n   \t\t<div class=\"row\">\r\n        \t<div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n\t            <h2 class=\"text-center\" *ngIf=\"!materialId\">Add New Material</h2>\r\n\t            <h2 class=\"text-center\" *ngIf=\"materialId\">Update Material</h2>\r\n         \t</div>\r\n        </div>\r\n    \t<form (ngSubmit)=\"onSubmit()\" #nisshoForm=\"ngForm\">\r\n    \t\t<div class=\"row form-group\">\r\n\t        \t<div class=\"col-xs-12 col-md-8 col-md-offset-2 text-left\">\r\n\t\t            <label for=\"description\">Material Name</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"R/B 4x30 Side Strip nozzle\" id=\"description\" name=\"description\" required [(ngModel)]=\"model.description\">\r\n\t         \t</div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n\t        \t<div class=\"col-xs-12 col-md-4 col-md-offset-2 text-left\">\r\n\t\t            <label for=\"part_num\">Vendor Part #</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"15SST\" id=\"part_num\" name=\"part_num\" required [(ngModel)]=\"model.part_num\">\r\n\t         \t</div>\r\n\t         \t<div class=\"col-xs-12 col-md-4 text-left\">\r\n\t\t            <label for=\"price\">Price</label>\r\n\t\t            <input type=\"text\" class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"model.price\" required>\r\n\t         \t</div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n    \t\t\t<div class=\"col-xs-12 col-md-4 col-md-offset-2 text-left\">\r\n\t\t            <label for=\"unit\">Unit</label>\r\n\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"ea\" id=\"unit\" name=\"unit\" [(ngModel)]=\"model.unit\">\r\n\t         \t</div>\r\n\t        \t<div class=\"col-xs-12 col-md-4 text-left\">\r\n\t\t            <label for=\"default_max_qty\">Max Qty</label>\r\n\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"30\" id=\"default_max_qty\" name=\"default_max_qty\" [(ngModel)]=\"model.default_max_qty\">\r\n\t         \t</div>\r\n            </div>\r\n            <div class=\"row\">\r\n\t        \t<div class=\"col-xs-12 col-md-4 col-md-offset-4 text-center\">\r\n\t\t            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!nisshoForm.form.valid\"><b>Submit</b></button>\r\n\t         \t</div>\r\n            </div>\r\n    \t</form>\t\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/inventory/form-materials/form-materials.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/inventory/form-materials/form-materials.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormMaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMaterialsComponent", function() { return FormMaterialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");





var FormMaterialsComponent = /** @class */ (function () {
    function FormMaterialsComponent(ims, route, router, ssv) {
        this.ims = ims;
        this.route = route;
        this.router = router;
        this.ssv = ssv;
    }
    FormMaterialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fillerUid = JSON.parse(localStorage.getItem('currentUser')).user.uid;
        //Load or create new form
        this.route.params.subscribe(function (params) {
            _this.deptId = params['deptId'];
            _this.materialId = params['id'];
            if (_this.materialId) {
                //Load Material detail
                _this.getModel();
            }
            else {
                //Create a new form
                _this.model = {
                    department_id: _this.deptId,
                    package_qty: '0',
                    package_unit: 'ea'
                };
            }
        });
    };
    FormMaterialsComponent.prototype.onSubmit = function () {
        var _this = this;
        //Update DB if exists, or create a new one otherwise
        if (this.materialId) {
            this.ims.updateMaterial(this.model, this.deptId, this.materialId)
                .subscribe(function (data) {
                _this.ssv.showSuccess('Material successfully updated!');
                _this.router.navigate(['/form-materials/' + _this.deptId + '/' + _this.materialId]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to add new material!');
                console.log(error);
            });
        }
        else {
            this.ims.newMaterial(this.model, this.deptId)
                .subscribe(function (data) {
                // Page redirect when getting response
                _this.ssv.showSuccess('Material successfully added!');
                _this.router.navigate(['/view-materials/' + _this.deptId]);
            }, function (error) {
                // Display error message
                _this.ssv.showError('Unable to add new material!');
                console.log(error);
            });
        }
    };
    FormMaterialsComponent.prototype.getModel = function () {
        var _this = this;
        this.ims.getMaterial(this.deptId, this.materialId)
            .subscribe(function (model) { return _this.model = model; });
    };
    Object.defineProperty(FormMaterialsComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FormMaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-materials',
            template: __webpack_require__(/*! ./form-materials.component.html */ "./src/app/inventory/form-materials/form-materials.component.html"),
            styles: [__webpack_require__(/*! ./form-materials.component.css */ "./src/app/inventory/form-materials/form-materials.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["InventoryManagementService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], FormMaterialsComponent);
    return FormMaterialsComponent;
}());



/***/ }),

/***/ "./src/app/inventory/form-truck-inventory/form-truck-inventory.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/inventory/form-truck-inventory/form-truck-inventory.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9mb3JtLXRydWNrLWludmVudG9yeS9mb3JtLXRydWNrLWludmVudG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/inventory/form-truck-inventory/form-truck-inventory.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/inventory/form-truck-inventory/form-truck-inventory.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  form-truck-inventory works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/inventory/form-truck-inventory/form-truck-inventory.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/inventory/form-truck-inventory/form-truck-inventory.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FormTruckInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTruckInventoryComponent", function() { return FormTruckInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormTruckInventoryComponent = /** @class */ (function () {
    function FormTruckInventoryComponent() {
    }
    FormTruckInventoryComponent.prototype.ngOnInit = function () {
    };
    FormTruckInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-truck-inventory',
            template: __webpack_require__(/*! ./form-truck-inventory.component.html */ "./src/app/inventory/form-truck-inventory/form-truck-inventory.component.html"),
            styles: [__webpack_require__(/*! ./form-truck-inventory.component.css */ "./src/app/inventory/form-truck-inventory/form-truck-inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormTruckInventoryComponent);
    return FormTruckInventoryComponent;
}());



/***/ }),

/***/ "./src/app/inventory/view-containers/view-containers.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/inventory/view-containers/view-containers.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS92aWV3LWNvbnRhaW5lcnMvdmlldy1jb250YWluZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/inventory/view-containers/view-containers.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/inventory/view-containers/view-containers.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Trucks</h3>\r\n   \t<div class=\"col-sm-12 text-center\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/form-containers/{{deptId}}\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Truck\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Truck...\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Crew</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Truck #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\" *ngIf=\"deptId == '1'\">Technician</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\" *ngIf=\"deptId == '6'\">Porter</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-3\">Details</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-3\">{{item.description}}</td>\r\n                    <td class=\"col-sm-3\"><b>{{item.name}}</b></td>\r\n                    <td class=\"col-sm-3\">{{getEmployeeName(item.supervisor_id)}}</td>\r\n                    <td class=\"col-sm-3\">\r\n                        <a routerLink=\"/form-containers/{{deptId}}/{{item.id}}\">Edit Truck</a>\r\n                        <br><a routerLink=\"/view-truck-inventory/{{item.id}}\">View Inventory</a>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/inventory/view-containers/view-containers.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/inventory/view-containers/view-containers.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewContainersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContainersComponent", function() { return ViewContainersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ViewContainersComponent = /** @class */ (function () {
    function ViewContainersComponent(ims, adms, dcs, ssv, route) {
        this.ims = ims;
        this.adms = adms;
        this.dcs = dcs;
        this.ssv = ssv;
        this.route = route;
    }
    ViewContainersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.deptId = params['id'];
            if (_this.deptId) {
                _this.populateItems();
                _this.populateNames();
            }
        });
    };
    ViewContainersComponent.prototype.populateItems = function () {
        var _this = this;
        this.ims.getContainers(this.deptId)
            .subscribe(function (itemsList) {
            _this.itemsList = itemsList;
            _this.partialItemsList = itemsList;
        });
    };
    ViewContainersComponent.prototype.populateNames = function () {
        var _this = this;
        this.adms.getUsers()
            .subscribe(function (usersList) { return _this.usersList = usersList; });
    };
    ViewContainersComponent.prototype.getEmployeeName = function (uid) {
        if (uid == null || this.usersList == null) {
            return '';
        }
        var user = this.usersList.find(function (x) { return x.uid === uid; });
        return (user ? user.name : '-');
    };
    ViewContainersComponent.prototype.onDownload = function (id) {
    };
    ViewContainersComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.name.toLowerCase().includes(input.toLowerCase())) ||
                    (x.description.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    ViewContainersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-containers',
            template: __webpack_require__(/*! ./view-containers.component.html */ "./src/app/inventory/view-containers/view-containers.component.html"),
            styles: [__webpack_require__(/*! ./view-containers.component.css */ "./src/app/inventory/view-containers/view-containers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["InventoryManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ViewContainersComponent);
    return ViewContainersComponent;
}());



/***/ }),

/***/ "./src/app/inventory/view-materials/view-materials.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/inventory/view-materials/view-materials.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS92aWV3LW1hdGVyaWFscy92aWV3LW1hdGVyaWFscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/inventory/view-materials/view-materials.component.html":
/*!************************************************************************!*\
  !*** ./src/app/inventory/view-materials/view-materials.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_top_15 text-center\">\r\n   \t<h3 class=\"text-capitalize\">Materials</h3>\r\n   \t<div class=\"col-sm-6 text-right\">\r\n\t\t<button type=\"button\" class=\"btn btn-success btn-sm button\" routerLink=\"/form-materials/{{deptId}}\">\r\n\t\t\t<span class=\"glyphicon glyphicon-plus\"></span> New Material\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-sm-6 text-left\">\r\n\t\t<button type=\"button\" *ngIf=\"!is_downloading_list\" class=\"btn btn-info btn-sm button\" (click)=\"downloadAll()\">Download All</button>\r\n\t\t<span *ngIf=\"is_downloading_list\" class=\"loader\"></span>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-sm-offset-1 col-xs-12 margin_top_15 table-responsive\">\r\n        <div class=\"row margin_bottom_15\">\r\n\t\t\t<div class=\"col-sm-4 text-left input-group\">\r\n\t               <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n\t               <input type=\"text\" id=\"filterForm\" class=\"form-control\" placeholder=\"Search Material...\" (input)=\"searchItem($event.target.value)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<i *ngIf=\"!partialItemsList\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <table *ngIf=\"partialItemsList\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Part #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-4\">Description</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Price</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Unit</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Actions</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of partialItemsList\" class=\"table_body\">\r\n                    <td class=\"col-sm-2\">{{item.part_num}}</td>\r\n                    <td class=\"col-sm-4\"><b>{{item.description}}</b></td>\r\n                    <td class=\"col-sm-2\">{{item.price | currency}}</td>\r\n                    <td class=\"col-sm-2\">{{item.unit}}</td>\r\n                    <td class=\"col-sm-2\">\r\n                        <a routerLink=\"/form-materials/{{deptId}}/{{item.id}}\">Edit</a>\r\n                    </td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/inventory/view-materials/view-materials.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/inventory/view-materials/view-materials.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewMaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMaterialsComponent", function() { return ViewMaterialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ViewMaterialsComponent = /** @class */ (function () {
    function ViewMaterialsComponent(ims, adms, dcs, ssv, route, cds) {
        this.ims = ims;
        this.adms = adms;
        this.dcs = dcs;
        this.ssv = ssv;
        this.route = route;
        this.cds = cds;
    }
    ViewMaterialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.deptId = params['id'];
            if (_this.deptId) {
                _this.populateItems();
            }
        });
        this.is_downloading_list = false;
    };
    ViewMaterialsComponent.prototype.populateItems = function () {
        var _this = this;
        this.ims.getMaterials(this.deptId)
            .subscribe(function (itemsList) {
            _this.itemsList = itemsList;
            _this.partialItemsList = itemsList;
        });
    };
    ViewMaterialsComponent.prototype.downloadAll = function () {
        var _this = this;
        this.is_downloading_list = true;
        this.cds.downloadMaterialsListXls(this.deptId)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(res, 'InventoryList.xls', { type: 'application/vnd.ms-excel' });
            _this.is_downloading_list = false;
        }, function (error) {
            // Display error message
            console.log(error);
            _this.ssv.showError('Error: Unable to download list!');
            _this.is_downloading_list = false;
        });
    };
    ViewMaterialsComponent.prototype.searchItem = function (input) {
        if (this.partialItemsList && this.itemsList) {
            this.partialItemsList = this.itemsList.filter(function (x) {
                return (x.description.toLowerCase().includes(input.toLowerCase()));
            });
        }
    };
    ViewMaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-materials',
            template: __webpack_require__(/*! ./view-materials.component.html */ "./src/app/inventory/view-materials/view-materials.component.html"),
            styles: [__webpack_require__(/*! ./view-materials.component.css */ "./src/app/inventory/view-materials/view-materials.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["InventoryManagementService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["DocumentConversionService"], src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_4__["CustomDownloadServiceService"]])
    ], ViewMaterialsComponent);
    return ViewMaterialsComponent;
}());



/***/ }),

/***/ "./src/app/inventory/view-truck-inventory/view-truck-inventory.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/inventory/view-truck-inventory/view-truck-inventory.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS92aWV3LXRydWNrLWludmVudG9yeS92aWV3LXRydWNrLWludmVudG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/inventory/view-truck-inventory/view-truck-inventory.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/inventory/view-truck-inventory/view-truck-inventory.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inventory/view-truck-inventory/view-truck-inventory.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/inventory/view-truck-inventory/view-truck-inventory.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewTruckInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTruckInventoryComponent", function() { return ViewTruckInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewTruckInventoryComponent = /** @class */ (function () {
    function ViewTruckInventoryComponent() {
    }
    ViewTruckInventoryComponent.prototype.ngOnInit = function () {
    };
    ViewTruckInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-truck-inventory',
            template: __webpack_require__(/*! ./view-truck-inventory.component.html */ "./src/app/inventory/view-truck-inventory/view-truck-inventory.component.html"),
            styles: [__webpack_require__(/*! ./view-truck-inventory.component.css */ "./src/app/inventory/view-truck-inventory/view-truck-inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewTruckInventoryComponent);
    return ViewTruckInventoryComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login_page vertical-center\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-xs-12 login_form\">\r\n            <FORM [formGroup]=\"loginForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-xs-12 padded-sm\">\r\n                        <h2>\r\n                            <img src=\"./assets/images/nissho_logo_round.png\" class=\"nissho_logo\">\r\n                            <span class=\"form_title\">Login</span>\r\n                        </h2>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-xs-12\">\r\n                                <label for=\"uname_login\">Username</label>\r\n                                <input type=\"text\" formControlName=\"uname_login\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.uname_login.errors }\" />\r\n                                <div *ngIf=\"submitted && f.uname_login.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.uname_login.errors.required\" class=\"error_msg\">Username is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-xs-12\">\r\n                                <label for=\"pass_login\">Password</label>\r\n                                <input type=\"password\" formControlName=\"pass_login\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pass_login.errors }\" />\r\n                                <div *ngIf=\"submitted && f.pass_login.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.pass_login.errors.required\" class=\"error_msg\">Password is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n                <div class=\"error_msg\" *ngIf=\"error !== ''\">{{error}}</div>\r\n                <div class=\"text-center margin_bottom_15\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-lg fill\" id=\"login_button\" (click)=\"onLoginClick()\">Login</button>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                </div>\r\n            </FORM>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, ssv, authenticationService, coos) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.ssv = ssv;
        this.authenticationService = authenticationService;
        this.coos = coos;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.recaptchaStr = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            uname_login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pass_login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // reset login status
        this.ssv.sharedNode.error = '';
        this.ssv.sharedNode.success = '';
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.uname_login.value, this.f.pass_login.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            if (data === null) {
                _this.error = 'Invalid Username or Password!';
                _this.loading = false;
            }
            else {
                if (data.user.is_active == 1) {
                    //Make sure current user is set
                    if (data && data.apiKey) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(data));
                    }
                    //Save apiKey in cookie
                    _this.coos.set('NisshoApiKey', data.apiKey, null, '/');
                    _this.loading = false;
                    _this.router.navigate([_this.returnUrl]);
                }
                else {
                    _this.authenticationService.logout();
                    _this.error = 'Invalid Username or Password!';
                    _this.loading = false;
                }
            }
        }, function (error) {
            _this.error = 'Invalid Username or Password!';
            _this.loading = false;
        });
    };
    LoginComponent.prototype.onLoginClick = function () {
        //        if(environment.production === true){
        //            if (this.recaptchaStr) {
        //                captchaRef.reset();
        //            }
        //            captchaRef.execute();
        //        }
        //        else{
        //            this.onSubmit();
        //        }
        this.onSubmit();
    };
    LoginComponent.prototype.resolved = function (captchaResponse) {
        this.recaptchaStr = captchaResponse;
        if (this.recaptchaStr) {
            this.onSubmit();
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/populate/update-customers-list/update-customers-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/populate/update-customers-list/update-customers-list.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVsYXRlL3VwZGF0ZS1jdXN0b21lcnMtbGlzdC91cGRhdGUtY3VzdG9tZXJzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/populate/update-customers-list/update-customers-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/populate/update-customers-list/update-customers-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <label>Browse file:</label>\r\n  <input type='file' (change)=\"fileChanged($event)\">\r\n  <button type=\"button\" (click)=\"populateCustomersList()\">Populate</button>\r\n</div>"

/***/ }),

/***/ "./src/app/populate/update-customers-list/update-customers-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/populate/update-customers-list/update-customers-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UpdateCustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomersListComponent", function() { return UpdateCustomersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");



var UpdateCustomersListComponent = /** @class */ (function () {
    function UpdateCustomersListComponent(adms) {
        this.adms = adms;
    }
    UpdateCustomersListComponent.prototype.ngOnInit = function () {
    };
    UpdateCustomersListComponent.prototype.fileChanged = function (e) {
        this.file = e.target.files[0];
    };
    UpdateCustomersListComponent.prototype.populateCustomersList = function () {
        /*let fileReader = new FileReader();
        fileReader.onload = (e) => {
            //Skip the first line
            
            //Parse the result (in Customer array)
            const cArr = fileReader.result.split(/\r?\n/);
            cArr.forEach(crow => {
                const c = crow.split(',');
                if(c){
                    let deptId = '2';
                    if(c[1] && c[1].toLowerCase().includes('janitorial')){
                        deptId = '6';
                    }
                    const customer = <Customer> {
                            client_id: '1',
                            project_name: c[1] ? c[1].trim() : '',
                            jobnum: c[0] ? c[0].trim() : '',
                            contract_amt: '0',
                            address: c[2] ? c[2].trim() : '',
                            city: c[3] ? c[3].trim() : '',
                            management: c[4] ? c[4].trim() : '',
                            contact: c[5] ? c[5].trim() : '',
                            phone: c[6] ? c[6].trim() : '',
                            email: c[11] ? c[11].trim() : '',
                            department_id: deptId
                    }
                    
                    //Send request to server
                    this.adms.newCustomer(customer)
                        .subscribe(data => {
                            console.log('created');
                        },
                        error => {
                            console.log('error for '+c[0]+ ' - ' + c[1]);
                        })
                }
            })
            
        }
        fileReader.readAsText(this.file);*/
    };
    UpdateCustomersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-customers-list',
            template: __webpack_require__(/*! ./update-customers-list.component.html */ "./src/app/populate/update-customers-list/update-customers-list.component.html"),
            styles: [__webpack_require__(/*! ./update-customers-list.component.css */ "./src/app/populate/update-customers-list/update-customers-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"]])
    ], UpdateCustomersListComponent);
    return UpdateCustomersListComponent;
}());



/***/ }),

/***/ "./src/app/view-stock-by-truck/view-stock-by-truck.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/view-stock-by-truck/view-stock-by-truck.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctc3RvY2stYnktdHJ1Y2svdmlldy1zdG9jay1ieS10cnVjay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view-stock-by-truck/view-stock-by-truck.component.html":
/*!************************************************************************!*\
  !*** ./src/app/view-stock-by-truck/view-stock-by-truck.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_addform text-center\">\r\n   \t<h3 class=\"text-capitalize\">Material Usage</h3>\r\n\t<div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n\t\t<div class=\"row text-center\">\r\n        \t<div class=\"col-xs-12\">\r\n        \t\t<form class=\"form-inline\" (ngSubmit)=\"populateItems()\" #stockForm=\"ngForm\">\r\n                    <div class=\"form-group margin_right_15\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-addon\">Truck:</div>\r\n\t\t\t\t            <select class=\"form-control\" name=\"chosenSupervisorId\" [(ngModel)]=\"chosenSupervisorId\" required>\r\n\t\t\t           \t\t\t<option *ngFor=\"let s of truckList\" value=\"{{s.supervisor_id}}\">{{s.name}} ({{s.description}})</option>\r\n\t\t\t\t\t\t\t</select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group margin_right_15\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-addon\">Month:</div>\r\n\t\t\t\t            <select class=\"form-control\" name=\"chosenDate\" [(ngModel)]=\"chosenDate\" required>\r\n\t\t\t           \t\t\t<option *ngFor=\"let s of monthChoices\" value=\"{{s | date:'yyyy-MM-dd'}}\">{{s | date:'MMM y'}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn button btn-info\" (click)=\"onDownload()\" [disabled]=\"!stockForm.form.valid\">Download</button>\r\n                </form>\r\n        \t</div>\r\n        </div>\r\n   \t</div>\r\n   \t<div class=\"col-md-1\"></div>\r\n</div>\r\n<div class=\"row margin_addform text-center\">\r\n   \t<h3 class=\"text-capitalize\">Monthly Stock Transfer Summary</h3>\r\n   \t<div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n\t\t<div class=\"row text-center\">\r\n        \t<div class=\"col-xs-12\">\r\n        \t\t<form class=\"form-inline\" #stSummaryForm=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-addon\">Month:</div>\r\n\t\t\t\t            <select class=\"form-control\" name=\"chosenMonth\" [(ngModel)]=\"chosenMonth\" required>\r\n\t\t\t           \t\t\t<option *ngFor=\"let s of monthChoices\" value=\"{{s | date:'MM'}}\">{{s | date:'MMM y'}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn button btn-info\" (click)=\"onDownloadMonthlySummary()\" [disabled]=\"!stSummaryForm.form.valid\">Download</button>\r\n                </form>\r\n        \t</div>\r\n        </div>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/view-stock-by-truck/view-stock-by-truck.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/view-stock-by-truck/view-stock-by-truck.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewStockByTruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStockByTruckComponent", function() { return ViewStockByTruckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/shared.service */ "./src/app/_services/shared.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






var ViewStockByTruckComponent = /** @class */ (function () {
    function ViewStockByTruckComponent(aus, fms, ims, cds, ssv) {
        this.aus = aus;
        this.fms = fms;
        this.ims = ims;
        this.cds = cds;
        this.ssv = ssv;
        this.typeId = '54';
        this.deptId = '1';
    }
    ViewStockByTruckComponent.prototype.ngOnInit = function () {
        this.populateTrucks();
        this.populateMaterials();
        this.populateUsers();
        this.populateMonthChoices();
        this.totalCost = '0';
    };
    ViewStockByTruckComponent.prototype.populateMonthChoices = function () {
        var curDate = new Date();
        curDate.setDate(1);
        var prevDate = new Date();
        prevDate.setDate(1);
        prevDate.setMonth(prevDate.getMonth() - 1);
        var prev2Date = new Date();
        prev2Date.setDate(1);
        prev2Date.setMonth(prev2Date.getMonth() - 2);
        this.monthChoices = [prev2Date, prevDate, curDate];
    };
    ViewStockByTruckComponent.prototype.populateMaterials = function () {
        var _this = this;
        this.ims.getMaterials(this.deptId)
            .subscribe(function (itemsList) {
            _this.partsList = itemsList;
        });
    };
    ViewStockByTruckComponent.prototype.populateUsers = function () {
        var _this = this;
        this.aus.getUsers()
            .subscribe(function (itemsList) {
            _this.userslist = itemsList;
        });
    };
    ViewStockByTruckComponent.prototype.populateTrucks = function () {
        var _this = this;
        this.ims.getContainers(this.deptId)
            .subscribe(function (itemsList) {
            _this.truckList = itemsList;
        });
    };
    ViewStockByTruckComponent.prototype.populateItems = function () {
        var _this = this;
        if (!this.chosenDate || !this.chosenSupervisorId)
            return;
        var lastDayOfMonth = new Date(+this.chosenDate.substring(0, 4), +this.chosenDate.substring(5, 7), 0);
        var l = this.ssv.toHtmlDateStr(lastDayOfMonth);
        this.fms.getFormsByDate(this.typeId, this.chosenDate, l, this.chosenSupervisorId)
            .subscribe(function (itemsList) {
            _this.matDict = {};
            _this.keyArr = [];
            if (!itemsList) {
                return;
            }
            console.log('Driver is ' + _this.chosenSupervisorId);
            var materialList = itemsList.map(function (x) { return x.inputTables.materials; });
            //Iterate over array of arrays of materials
            materialList.forEach(function (y) {
                //Operate on this array of materials
                y.forEach(function (x) {
                    if (_this.matDict[x.material_id]) {
                        _this.matDict[x.material_id].quantity = '' + (+_this.matDict[x.material_id].quantity + +x.quantity);
                    }
                    else {
                        _this.keyArr.push(x.material_id);
                        _this.matDict[x.material_id] = x;
                    }
                });
            });
            var totalCost = 0;
            _this.keyArr.forEach(function (i) {
                var v = _this.matDict[i];
                var mat = _this.partsList.find(function (x) { return x.id == v.material_id; });
                if (mat) {
                    v.part_num = mat.part_num;
                    v.description = mat.description;
                    v.unit = mat.unit;
                    v.price = mat.price;
                    v.total = +v.quantity * +mat.price;
                    totalCost += +v.total;
                }
            });
            _this.totalCost = "" + totalCost;
        });
    };
    ViewStockByTruckComponent.prototype.onDownload = function () {
        var _this = this;
        if (!this.chosenDate || !this.chosenSupervisorId)
            return;
        var lastDayOfMonth = new Date(+this.chosenDate.substring(0, 4), +this.chosenDate.substring(5, 7), 0);
        var l = this.ssv.toHtmlDateStr(lastDayOfMonth);
        this.cds.downloadStockTransferMaterialUsage(this.chosenDate, l, this.chosenSupervisorId)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(res, 'MonthlyStockTransfer.xls', { type: 'application/vnd.ms-excel' });
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to download usage history!');
        });
    };
    ViewStockByTruckComponent.prototype.onDownloadMonthlySummary = function () {
        var _this = this;
        if (!this.chosenMonth)
            return;
        this.cds.downloadStockTransferMonthlySummary(this.chosenMonth)
            .subscribe(function (res) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(res, 'MonthlyStockTransferSummary.xls', { type: 'application/vnd.ms-excel' });
        }, function (error) {
            // Display error message
            _this.ssv.showError('Error: Unable to download monthly stock transfer summary!');
        });
    };
    ViewStockByTruckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-stock-by-truck',
            template: __webpack_require__(/*! ./view-stock-by-truck.component.html */ "./src/app/view-stock-by-truck/view-stock-by-truck.component.html"),
            styles: [__webpack_require__(/*! ./view-stock-by-truck.component.css */ "./src/app/view-stock-by-truck/view-stock-by-truck.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["FormManagementService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["InventoryManagementService"], src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomDownloadServiceService"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], ViewStockByTruckComponent);
    return ViewStockByTruckComponent;
}());



/***/ }),

/***/ "./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctc3RvY2stdHJhbnNmZXItc3RhdGlzdGljcy92aWV3LXN0b2NrLXRyYW5zZmVyLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin_addform text-center\">\r\n   \t<h3 class=\"text-capitalize\">Stock Usage This Month</h3>\r\n\t<div class=\"col-xs-12 col-md-10 col-md-offset-1\">\r\n\t\t<div class=\"row form-group text-center\">\r\n        \t<div class=\"col-xs-12 col-sm-8 col-md-6 col-lg-4 col-sm-offset-2 col-md-offset-3 col-lg-offset-4\">\r\n\t            <select class=\"form-control\" (change)=\"populateItems($event.target.value)\">\r\n\t            \t<option hidden disabled selected value=\"0\"> -- Select a Project -- </option>\r\n           \t\t\t<option *ngFor=\"let s of projectList\" value=\"{{s.jobnum}}\">{{s.project_name}} ({{s.jobnum}})</option>\r\n\t\t\t\t</select>\r\n        \t</div>\r\n        </div>\r\n       \t<i *ngIf=\"!usageHistory\">\r\n\t\t\tNo items here!\r\n        </i>\r\n        <h3 class=\"text-left\"><b>Total Cost: {{totalCost | currency}}</b></h3>\r\n        <table *ngIf=\"usageHistory\" class=\"table table_view table-hover\">\r\n   \t\t\t<thead>\r\n       \t\t\t<tr class=\"table_heading\">\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Item #</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-4\">Description</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-1\">Qty</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-1\">Unit</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Price</th>\r\n           \t\t\t<th class=\"table_cell_heading col-sm-2\">Total Cost</th>\r\n       \t\t\t</tr>\r\n  \t\t\t</thead>\r\n\t\t\t<tbody>\r\n                <tr *ngFor=\"let item of usageHistory\" class=\"table_body\">\r\n                    <td class=\"col-sm-2\">{{item.part_num}}</td>\r\n                    <td class=\"col-sm-4\">{{item.description}}</td>\r\n                    <td class=\"col-sm-1\">{{item.quantity}}</td>\r\n                    <td class=\"col-sm-1\">{{item.unit}}</td>\r\n                    <td class=\"col-sm-2\">{{item.price | currency}}</td>\r\n                    <td class=\"col-sm-2\">{{item.total | currency}}</td>\r\n                </tr>\r\n\t         </tbody>\r\n        </table>\r\n   \t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ViewStockTransferStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStockTransferStatisticsComponent", function() { return ViewStockTransferStatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process-smart-ng6-lib */ "./node_modules/process-smart-ng6-lib/fesm5/process-smart-ng6-lib.js");
/* harmony import */ var src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/custom-download-service.service */ "./src/app/_services/custom-download-service.service.ts");




var ViewStockTransferStatisticsComponent = /** @class */ (function () {
    function ViewStockTransferStatisticsComponent(ls, adms, ims, cds) {
        this.ls = ls;
        this.adms = adms;
        this.ims = ims;
        this.cds = cds;
        this.typeId = '46';
        this.deptId = '6';
    }
    ViewStockTransferStatisticsComponent.prototype.ngOnInit = function () {
        this.populateProjects();
        this.populateMaterials();
        this.totalCost = '0';
    };
    ViewStockTransferStatisticsComponent.prototype.populateMaterials = function () {
        var _this = this;
        this.ims.getMaterials(this.deptId)
            .subscribe(function (itemsList) {
            _this.partsList = itemsList;
        });
    };
    ViewStockTransferStatisticsComponent.prototype.populateProjects = function () {
        var _this = this;
        this.adms.getCustomersByDept(this.deptId)
            .subscribe(function (itemsList) {
            _this.projectList = itemsList;
        });
    };
    ViewStockTransferStatisticsComponent.prototype.populateItems = function (jobNum) {
        var _this = this;
        this.ls.getJobUsageStatistics('6', jobNum)
            .subscribe(function (itemsList) {
            _this.usageHistory = itemsList;
            var totalCost = 0;
            _this.usageHistory.forEach(function (v, i, obj) {
                var mat = _this.partsList.find(function (x) { return x.id == v.item_num; });
                if (mat) {
                    v.part_num = mat.part_num;
                    v.description = mat.description;
                    v.unit = mat.unit;
                    v.price = mat.price;
                    v.total = +v.quantity * +mat.price;
                    totalCost += +v.total;
                }
            });
            _this.totalCost = "" + totalCost;
        });
    };
    ViewStockTransferStatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-stock-transfer-statistics',
            template: __webpack_require__(/*! ./view-stock-transfer-statistics.component.html */ "./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.html"),
            styles: [__webpack_require__(/*! ./view-stock-transfer-statistics.component.css */ "./src/app/view-stock-transfer-statistics/view-stock-transfer-statistics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["LoggingService"], process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["AdministrationService"],
            process_smart_ng6_lib__WEBPACK_IMPORTED_MODULE_2__["InventoryManagementService"], src_app_services_custom_download_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomDownloadServiceService"]])
    ], ViewStockTransferStatisticsComponent);
    return ViewStockTransferStatisticsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    allow_client: 1
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\personitech-webclient-nissho\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map