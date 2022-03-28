(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans|Quicksand|Montserrat');\n/* \r\n    Created on : Nov 25, 2017, 2:51:30 PM\r\n    Author     : Edwin Angkasa\r\n    Last Modified: April 06, 2019, 5:46:00 PM\r\n*/\nbody {\r\n    font-size: 17px;\r\n    overflow: hidden;\r\n}\nth {\r\n\ttext-align: center;\r\n}\n/*DASHBOARD*/\na {\r\n\tcursor: pointer;\r\n}\n#header_row {\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-color: #006400;\r\n\tpadding-bottom: 10px;\r\n}\n* {\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\nh1, h2, h3, h4, p, a, button, ul, ol, tr, label {\r\n\tfont-weight: normal;\r\n}\nh2 {\r\n\tfont-size: 24px;\r\n}\n#dashboard_nav, .login_page {\r\n\tpadding: 0px;\r\n\theight: 80vh;\r\n    font-size: 20px;\r\n}\n.red_text {\r\n\tcolor: #FF0000;\r\n}\n.department_nav, .form_nav {\r\n\tborder-bottom: solid 1px #ccc;\r\n}\n#dashboard_content {\r\n    height: 80vh;\r\n\toverflow: auto;\r\n}\n.dashboard_content_nav {\r\n\tdisplay: none;\r\n\theight: 80vh;\r\n}\n/* DARKER BACKGROUND COLOR */\n.darker_whp {\r\n\tbackground-color: #006400;\r\n}\n#login_button {\r\n\tfont-size: 18px;\r\n}\n.topbar_button {\r\n\tfont-size: 18px;\r\n\tcolor: #FFF;\r\n}\na.topbar_button:hover {\r\n\ttext-decoration: none !important;\r\n\ttext-shadow: 0 0 5px !important;\r\n\tcolor: #FFF;\r\n}\na.topbar_button:active {\r\n\ttext-decoration: none !important;\r\n\tcolor: #FFF !important;\r\n}\n.login_page {\r\n\tbackground-color: #006400;\r\n}\n.login_form {\r\n\tbackground-color: #FFF;\t\r\n\tborder-radius: 5%;\r\n\tmin-width: 33%;\r\n\tpadding: 30px;\r\n}\n.header_subtitle{\r\n\tfont-family: Open Sans, sans-serif;\r\n\tfont-style: italic;\r\n\tcolor: #FFF;\r\n}\n.header_subtitle_role {\r\n\tfont-family: Open Sans, sans-serif;\r\n\tfont-style: italic;\r\n}\n.header_content_height {\r\n\theight: 66px;\r\n\tline-height: 66px;\r\n}\n.viewport85height {\r\n\theight: 85vh;\r\n}\n.title_line_height {\r\n\tline-height: 100%;\r\n}\n.signature_bg {\r\n\tbackground-color: #eaeaea;\r\n}\n#close_button_signature{\r\n\tposition: fixed;\r\n\ttop:0;\r\n\tright:0;\r\n}\n.margin_modalbtn{\r\n\tmargin-top: 25px;\r\n\tmargin-bottom: 10px;\r\n}\n.fill {\r\n\twidth: 100%;\r\n}\n.white_text {\r\n\tcolor: #FFF;\r\n}\n.white_bg {\r\n\tbackground-color: #FFF;\r\n}\n.pad_right_30 {\r\n\tpadding-right: 30px;\r\n}\n.pad_top_15 {\r\n\tpadding-top: 15px;\r\n}\n.header_small_text {\r\n\tfont-size: 18px;\r\n}\n.view_form_input {\r\n\tfont-size: 16px;\r\n\tcolor: #3e3e3e;\r\n\tpadding-top: 5px;\r\n}\n.view_form_textarea {\r\n\tfont-size: 15px;\r\n\tcolor: #000000;\r\n}\n.top_bar {\r\n\tposition: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    background-color: #FFF;\r\n}\n/* Button Color */\n.button {\r\n\tbackground-color: #32CD32;\r\n\tcolor: #FFFFFF;\r\n}\n.button:hover {\r\n\tbackground-color: #228B22;\r\n\tcolor: #FFFFFF;\r\n}\n/* Multiple Pages form (Tablet/Mobile) */\n.static_body {\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n}\n.page_fragment{\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n\tdisplay: none;\r\n}\n.top_bar_form {\r\n\tposition: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 10vh;\r\n    background-color: transparent;\r\n}\n.margin_top_form {\r\n\tmargin-top: 5vh;\r\n}\n.content_form{\r\n\theight:70vh;\r\n\tmargin: 0;\r\n}\n.area_button{\r\n\theight: 35vh;\r\n\twidth: 90%;\r\n}\n.next_button{\r\n\tmargin-top: 10px;\r\n\theight: 10vh;\r\n\tfont-size: 16px;\r\n\tmin-width: 200px;\r\n}\n.area_text{\r\n\tfont-size: 24px;\r\n\tfont-weight: bold;\r\n}\n/* Desktop Exclusive */\n@media (min-width: 768px) {\r\n\t/* Sidebar Nav */ \r\n\t\r\n\t.sidebar-nav .navbar .navbar-collapse {\r\n\t\tpadding: 0;\r\n\t\theight: 100%;\r\n\t\tmax-height: none;\r\n\t}\r\n\t.navbar .navbar-nav {\r\n\t\tpadding: 0;\r\n\t\theight: 100vh;\r\n\t\tmax-height: none;\r\n\t}\r\n\t\r\n\t.sidebar-nav .navbar ul {\r\n\t\tfloat: none;\r\n\t\tdisplay: block;\r\n\t}\r\n\t\r\n\t.badge-error {\r\n\t\tbackground-color: #ea3f34;\r\n\t}\r\n\t\r\n\t.redColor {\r\n\t\tcolor: #ea3f34;\r\n    }\r\n    \r\n    .error_msg {\r\n        color: #ea3f34;\r\n        font-style: italic;\r\n        text-align: center;\r\n\t}\r\n\t\r\n\t.sidebarStyle {\r\n\t\tcolor: #01451b;\r\n\t\t/*font-family: 'Open Sans', sans-serif;*/\r\n\t\tfont-family: 'Montserrat', sans-serif;\r\n\t}\r\n\t\r\n\t.alert_number_style {\r\n\t\tfont-weight: bold;\r\n\t}\r\n\t\r\n\t.sidebar-nav .navbar li {\r\n\t\tfloat: none;\r\n\t}\r\n\t.sidebar-nav .navbar li a {\r\n\t\tpadding-top: 20px;\r\n\t\tpadding-bottom: 20px;\r\n\t\tpadding-left: 35px;\r\n\t}\r\n\t\r\n\t.sidebar-nav .form_submenu a {\r\n\t\tpadding-left: 60px !important;\r\n\t\tpadding-top: 15px !important;\r\n\t\tpadding-bottom: 15px !important;\r\n\t}\r\n\t\r\n\t.department_nav, .form_nav {\r\n\t\tfont-size: 110%;\r\n\t\tfont-weight: bold;\r\n\t\tcolor: #01451b;\r\n\t}\r\n    \r\n    .nav>li.form_submenu {\r\n        display:none;\r\n    }\r\n\r\n\t.form_submenu {\r\n\t\tfont-weight: bold;\r\n        font-size: 85%;\r\n        display:none;\r\n\t}\r\n\t\r\n\t.navbar-default {\r\n\t\tbackground-color: #cecece;\r\n\t\tborder-color: #fff;\r\n\t}\r\n\t\r\n\t.navbar-default .navbar-nav>li>a {\r\n\t\t/* color: #333; */\r\n\t\tcolor: #01451b;\r\n\t}\r\n\t\r\n\t.navbar-default .navbar-nav>.active>a,\r\n\t .navbar-default .navbar-nav>.active>a:focus,\r\n\t  .navbar-default .navbar-nav>.active>a:hover {\r\n\t\tbackground-color: #fff;\r\n\t\tcolor: #01451b;\r\n\t}\r\n\t\r\n\t.form_nav {\r\n\t\tbackground-color: #eaeaea;\r\n\t}\r\n\t\r\n\t/* Login Form */ \r\n\t.login_form {\r\n\t\tmin-width: 500px;\r\n\t}\r\n\t.padded-sm {\r\n\t\tpadding-left: 30%;\r\n\t}\r\n\t\r\n\t.sidebar_a_style {\r\n\t\tpadding-left: 20px;\r\n\t}\r\n}\n/*FORMS*/\n.form_title {\r\n/*    background-color: #9cbf96;\r\n    color: #FFF;*/\r\n}\n.margin_top_15 {\r\n    margin-top: 15px;\r\n}\n.margin_right_50 {\r\n    margin-right: 50px;\r\n}\n.search_suggestion_entry {\r\n\tpadding: 6px 12px;\r\n\tz-index: 1;\r\n\tborder: 1px solid #d4d4d4;\r\n}\n.search_suggestion_entry:hover {\r\n\tbackground-color: #d4d4d4;\r\n}\n.margin_right_15 {\r\n    margin-right: 15px;\r\n}\n.margin_addform {\r\n    margin-top: 25px;\r\n    margin-left: 25px;\r\n}\n.button_addform {\r\n\twidth: 120px !important;\r\n  \theight: 150px !important;\r\n  \tfont-size: 20px;\r\n  \tfont-weight: bold;\r\n  \tborder-radius: 10%;\r\n  \tpadding-top: 40px; /* Safari */\r\n   transition-duration: 0.4s;\r\n}\n.margin_bottom_15 {\r\n    margin-bottom: 15px;\r\n}\n.margin_bottom_form {\r\n    margin-bottom: 150px;\r\n}\n.group_label_text {\r\n    color: #077634;\r\n\tfont-size: 20px;\r\n\tpadding-bottom: 5px;\r\n}\nlabel {\r\n    margin-top: 5px;\r\n}\n.large_label {\r\n\tfont-size: 24px;\r\n\tfont-weight: bold;\r\n}\n.nissho_logo {\r\n    height: 75px;\r\n    width: auto;\r\n}\n.x_button {\r\n    background-color: #FF3F3F;\r\n    color: #FFF;\r\n    font-weight: bold;\r\n}\n.button_partlist {\r\n\twidth: 100px;\r\n}\n.button_maintlist {\r\n\twidth: 150px;\r\n}\n.note_item_spacing {\r\n\tmargin-top: 15px;\r\n\tmargin-bottom: 25px;\r\n}\ninput[type=text], input[type=date], input[type=time], input[type=url], input[type=email], input[type=password], input[type=tel] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n}\n.vertical-center {\r\n\tmin-height: 100%;  /* Fallback for browsers do NOT support vh unit */\r\n\tmin-height: 100vh; /* These two lines are counted as one :-)       */\r\n\t\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\n.table_view {\r\n\t/* border: 2px solid #cccccc; */\r\n}\n/* Table style for dashboard viewing */\n.table_heading {\r\n\tcolor: #323131;\r\n\tbackground-color: #dddddd;\r\n\tfont-weight: bold;\r\n}\n.table-responsive {\r\n\tborder: none;\r\n}\n.table_body {\r\n\tbackground-color: #fbfbfb;\r\n\tcolor: #676767;\r\n\tborder-top: 2px solid #aaaaaa;\r\n}\n.table_cell_heading {\r\n\tpadding: 15px !important;\r\n}\n.table_cell_wide {\r\n\tpadding: 20px !important;\r\n}\n.table_body_bold {\r\n\tcolor: #555555;\r\n\tfont-weight: bold;\r\n\tfont-size: 120%;\r\n}\n.back_btn, .back_btn:hover, .back_btn:focus {\r\n\tcolor: #01451b;\r\n}\n.jobnum_set_bg{\r\n\tbackground-color: #D2ECC7;\r\n}\n.jobnum_set_bg:hover {\r\n\tbackground-color: #a1ea82 !important;\r\n}\n.pad_minimum{\r\n\tpadding: 0 2px !important;\r\n}\n/* MODALS */\n.uploaded_img {\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\n.uploaded_img:hover {opacity: 0.7;}\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 3;\r\n    padding-top: 100px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0,0.9);\r\n}\n.modal-content {\r\n    margin: auto;\r\n    display: block;\r\n    width: 80%;\r\n    max-width: 700px;\r\n    -webkit-animation-name: zoom;\r\n            animation-name: zoom;\r\n    -webkit-animation-duration: 0.6s;\r\n            animation-duration: 0.6s;\r\n}\n.auto_width {\r\n    width: auto;\r\n}\n.modal_body_warning{\r\n\tcolor: #FF0000;\r\n\tfont-style: italic;\r\n}\n@-webkit-keyframes zoom {\r\n    from {transform:scale(0)} \r\n    to {transform:scale(1)}\r\n}\n@keyframes zoom {\r\n    from {transform:scale(0)} \r\n    to {transform:scale(1)}\r\n}\n.close_modal_btn {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 35px;\r\n    color: #f1f1f1;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    transition: 0.3s;\r\n}\n.close_modal_btn:hover,\r\n.close_modal_btn:focus {\r\n    color: #bbb;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\n/* Tablet (horizontal) and above */\n@media (min-width: 768px) {\r\n\t.tablet_hidden, .desktop_hidden {\r\n\t\tdisplay:none;\r\n\t}\r\n}\n/* TABLET and MOBILE */\n@media (max-width: 1050px) { \r\n\t#header_row {\r\n\t\tpadding-bottom: 10px;\r\n\t}\r\n}\n@media (max-width: 767px) { \r\n\t#header_row {\r\n\t\tpadding-bottom: 10px;\r\n\t}\r\n\t#dashboard_nav{\r\n\t\theight: 10vh;\r\n\t\tz-index: 5;\r\n\t}\r\n\t.modal-content {\r\n        width: 100%;\r\n    }\r\n    .mobile_tablet_hidden {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.margin_addform {\r\n\t\tpadding:0;\r\n\t\tmargin:0;\r\n\t}\r\n}\n/*MOBILE EXCLUSIVE*/\n@media (max-width: 480px) { \r\n\t#header_row {\r\n\t\tpadding-bottom: 10px;\r\n\t}\r\n    .pad_right_5 {\r\n        padding-right: 5px;\r\n    }\r\n    .pad_left_none {\r\n        padding-left: 0px;\r\n    }\r\n    input[type='radio'] {\r\n        margin-left: 8px;\r\n        margin-right: 8px;\r\n        transform: scale(1.5);\r\n    }\r\n    .login_form {\r\n\t\tmin-width: 85vw;\r\n\t}\r\n\t.mobile_hidden {\r\n\t\tdisplay:none;\r\n\t}\r\n\th2{\r\n\t\tfont-size: 24px;\r\n\t}\r\n}\n/*Audrey's Changes 5/7/2018 for WOClientAuthorization/Completion.jsp */\n.group_heading {\r\n\tpadding-top: 15px;\r\n\tfont-size: 30px;\r\n}\n.blackbold {\r\n\tfont-size: 18px;\r\n}\n.pooding{\r\n\tfont-size: 22px;\r\n\tpadding-top: 15px;\r\n}\n.pood {\r\n\tfont-size: 22px;\r\n\tpadding-top: 20px;\r\n}\nhtml, body { height: 100%; }\nbody { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.loader {\r\ndisplay: inline-block;\r\n  border: 3px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 4px solid #3498db;\r\n  width: 18px;\r\n  height: 18px;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: loadspin 2s linear infinite;\r\n}\n.lds-ring {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\n.lds-ring div {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  position: absolute;\r\n  width: 51px;\r\n  height: 51px;\r\n  margin: 6px;\r\n  border: 6px solid #fff;\r\n  border-radius: 50%;\r\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  border-color: #fff transparent transparent transparent;\r\n}\n.lds-ring div:nth-child(1) {\r\n  -webkit-animation-delay: -0.45s;\r\n          animation-delay: -0.45s;\r\n}\n.lds-ring div:nth-child(2) {\r\n  -webkit-animation-delay: -0.3s;\r\n          animation-delay: -0.3s;\r\n}\n.lds-ring div:nth-child(3) {\r\n  -webkit-animation-delay: -0.15s;\r\n          animation-delay: -0.15s;\r\n}\n@-webkit-keyframes lds-ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n@keyframes lds-ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/* Safari */\n@-webkit-keyframes loadspin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\n@keyframes loadspin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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QyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjtBQUVBLGFBQWEsWUFBWSxFQUFFO0FBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFO0FBRXJFO0FBQ0EscUJBQXFCO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDLEVBQUUsV0FBVztFQUN2RCxzQ0FBc0M7QUFDeEM7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzRUFBOEQ7VUFBOUQsOERBQThEO0VBQzlELHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FBUEE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFHQSxXQUFXO0FBQ1g7RUFDRSxLQUFLLCtCQUErQixFQUFFO0VBQ3RDLE9BQU8saUNBQWlDLEVBQUU7QUFDNUM7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQyIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG4gICAgQ3JlYXRlZCBvbiA6IE5vdiAyNSwgMjAxNywgMjo1MTozMCBQTVxyXG4gICAgQXV0aG9yICAgICA6IEVkd2luIEFuZ2thc2FcclxuICAgIExhc3QgTW9kaWZpZWQ6IEFwcmlsIDA2LCAyMDE5LCA1OjQ2OjAwIFBNXHJcbiovXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc3xRdWlja3NhbmR8TW9udHNlcnJhdCcpO1xyXG5cclxuYm9keSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG50aCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKkRBU0hCT0FSRCovXHJcblxyXG5hIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNoZWFkZXJfcm93IHtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNjQwMDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuKiB7XHJcblx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIHAsIGEsIGJ1dHRvbiwgdWwsIG9sLCB0ciwgbGFiZWwge1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbiNkYXNoYm9hcmRfbmF2LCAubG9naW5fcGFnZSB7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGhlaWdodDogODB2aDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnJlZF90ZXh0IHtcclxuXHRjb2xvcjogI0ZGMDAwMDtcclxufVxyXG5cclxuLmRlcGFydG1lbnRfbmF2LCAuZm9ybV9uYXYge1xyXG5cdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG59XHJcblxyXG4jZGFzaGJvYXJkX2NvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkX2NvbnRlbnRfbmF2IHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdGhlaWdodDogODB2aDtcclxufVxyXG5cclxuLyogREFSS0VSIEJBQ0tHUk9VTkQgQ09MT1IgKi9cclxuLmRhcmtlcl93aHAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDY0MDA7XHJcbn1cclxuXHJcbiNsb2dpbl9idXR0b24ge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnRvcGJhcl9idXR0b24ge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuYS50b3BiYXJfYnV0dG9uOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHR0ZXh0LXNoYWRvdzogMCAwIDVweCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG5hLnRvcGJhcl9idXR0b246YWN0aXZlIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW5fcGFnZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNjQwMDtcclxufVxyXG5cclxuLmxvZ2luX2Zvcm0ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHRcclxuXHRib3JkZXItcmFkaXVzOiA1JTtcclxuXHRtaW4td2lkdGg6IDMzJTtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyX3N1YnRpdGxle1xyXG5cdGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4uaGVhZGVyX3N1YnRpdGxlX3JvbGUge1xyXG5cdGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uaGVhZGVyX2NvbnRlbnRfaGVpZ2h0IHtcclxuXHRoZWlnaHQ6IDY2cHg7XHJcblx0bGluZS1oZWlnaHQ6IDY2cHg7XHJcbn1cclxuXHJcbi52aWV3cG9ydDg1aGVpZ2h0IHtcclxuXHRoZWlnaHQ6IDg1dmg7XHJcbn1cclxuXHJcbi50aXRsZV9saW5lX2hlaWdodCB7XHJcblx0bGluZS1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWduYXR1cmVfYmcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XHJcbn1cclxuXHJcbiNjbG9zZV9idXR0b25fc2lnbmF0dXJle1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6MDtcclxuXHRyaWdodDowO1xyXG59XHJcblxyXG4ubWFyZ2luX21vZGFsYnRue1xyXG5cdG1hcmdpbi10b3A6IDI1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZpbGwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2hpdGVfdGV4dCB7XHJcblx0Y29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi53aGl0ZV9iZyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLnBhZF9yaWdodF8zMCB7XHJcblx0cGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLnBhZF90b3BfMTUge1xyXG5cdHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyX3NtYWxsX3RleHQge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnZpZXdfZm9ybV9pbnB1dCB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiAjM2UzZTNlO1xyXG5cdHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi52aWV3X2Zvcm1fdGV4dGFyZWEge1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLnRvcF9iYXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4vKiBCdXR0b24gQ29sb3IgKi9cclxuLmJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyQ0QzMjtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzIyOEIyMjtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLyogTXVsdGlwbGUgUGFnZXMgZm9ybSAoVGFibGV0L01vYmlsZSkgKi8gXHJcbi5zdGF0aWNfYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnBhZ2VfZnJhZ21lbnR7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b3BfYmFyX2Zvcm0ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1hcmdpbl90b3BfZm9ybSB7XHJcblx0bWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4uY29udGVudF9mb3Jte1xyXG5cdGhlaWdodDo3MHZoO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFyZWFfYnV0dG9ue1xyXG5cdGhlaWdodDogMzV2aDtcclxuXHR3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ubmV4dF9idXR0b257XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRoZWlnaHQ6IDEwdmg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5hcmVhX3RleHR7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBEZXNrdG9wIEV4Y2x1c2l2ZSAqLyBcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0LyogU2lkZWJhciBOYXYgKi8gXHJcblx0XHJcblx0LnNpZGViYXItbmF2IC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bWF4LWhlaWdodDogbm9uZTtcclxuXHR9XHJcblx0Lm5hdmJhciAubmF2YmFyLW5hdiB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHRcdG1heC1oZWlnaHQ6IG5vbmU7XHJcblx0fVxyXG5cdFxyXG5cdC5zaWRlYmFyLW5hdiAubmF2YmFyIHVsIHtcclxuXHRcdGZsb2F0OiBub25lO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cdFxyXG5cdC5iYWRnZS1lcnJvciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWEzZjM0O1xyXG5cdH1cclxuXHRcclxuXHQucmVkQ29sb3Ige1xyXG5cdFx0Y29sb3I6ICNlYTNmMzQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lcnJvcl9tc2cge1xyXG4gICAgICAgIGNvbG9yOiAjZWEzZjM0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5zaWRlYmFyU3R5bGUge1xyXG5cdFx0Y29sb3I6ICMwMTQ1MWI7XHJcblx0XHQvKmZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsqL1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHR9XHJcblx0XHJcblx0LmFsZXJ0X251bWJlcl9zdHlsZSB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0XHJcblx0LnNpZGViYXItbmF2IC5uYXZiYXIgbGkge1xyXG5cdFx0ZmxvYXQ6IG5vbmU7XHJcblx0fVxyXG5cdC5zaWRlYmFyLW5hdiAubmF2YmFyIGxpIGEge1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHRcdHBhZGRpbmctbGVmdDogMzVweDtcclxuXHR9XHJcblx0XHJcblx0LnNpZGViYXItbmF2IC5mb3JtX3N1Ym1lbnUgYSB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHRcclxuXHQuZGVwYXJ0bWVudF9uYXYsIC5mb3JtX25hdiB7XHJcblx0XHRmb250LXNpemU6IDExMCU7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGNvbG9yOiAjMDE0NTFiO1xyXG5cdH1cclxuICAgIFxyXG4gICAgLm5hdj5saS5mb3JtX3N1Ym1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuXHJcblx0LmZvcm1fc3VibWVudSB7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDg1JTtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdFxyXG5cdC5uYXZiYXItZGVmYXVsdCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHRcclxuXHQubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YSB7XHJcblx0XHQvKiBjb2xvcjogIzMzMzsgKi9cclxuXHRcdGNvbG9yOiAjMDE0NTFiO1xyXG5cdH1cclxuXHRcclxuXHQubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+LmFjdGl2ZT5hLFxyXG5cdCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+LmFjdGl2ZT5hOmZvY3VzLFxyXG5cdCAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Y29sb3I6ICMwMTQ1MWI7XHJcblx0fVxyXG5cdFxyXG5cdC5mb3JtX25hdiB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xyXG5cdH1cclxuXHRcclxuXHQvKiBMb2dpbiBGb3JtICovIFxyXG5cdC5sb2dpbl9mb3JtIHtcclxuXHRcdG1pbi13aWR0aDogNTAwcHg7XHJcblx0fVxyXG5cdC5wYWRkZWQtc20ge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAzMCU7XHJcblx0fVxyXG5cdFxyXG5cdC5zaWRlYmFyX2Ffc3R5bGUge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuLypGT1JNUyovXHJcbi5mb3JtX3RpdGxlIHtcclxuLyogICAgYmFja2dyb3VuZC1jb2xvcjogIzljYmY5NjtcclxuICAgIGNvbG9yOiAjRkZGOyovXHJcbn1cclxuXHJcbi5tYXJnaW5fdG9wXzE1IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5fcmlnaHRfNTAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoX3N1Z2dlc3Rpb25fZW50cnkge1xyXG5cdHBhZGRpbmc6IDZweCAxMnB4O1xyXG5cdHotaW5kZXg6IDE7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxufVxyXG5cclxuLnNlYXJjaF9zdWdnZXN0aW9uX2VudHJ5OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xyXG59XHJcblxyXG4ubWFyZ2luX3JpZ2h0XzE1IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLm1hcmdpbl9hZGRmb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmJ1dHRvbl9hZGRmb3JtIHtcclxuXHR3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICBcdGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICBcdGZvbnQtc2l6ZTogMjBweDtcclxuICBcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIFx0Ym9yZGVyLXJhZGl1czogMTAlO1xyXG4gIFx0cGFkZGluZy10b3A6IDQwcHg7XHJcbiAgXHQtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxufVxyXG5cclxuLm1hcmdpbl9ib3R0b21fMTUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1hcmdpbl9ib3R0b21fZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxufVxyXG5cclxuLmdyb3VwX2xhYmVsX3RleHQge1xyXG4gICAgY29sb3I6ICMwNzc2MzQ7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmxhcmdlX2xhYmVsIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uaXNzaG9fbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnhfYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjNGM0Y7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnV0dG9uX3BhcnRsaXN0IHtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5idXR0b25fbWFpbnRsaXN0IHtcclxuXHR3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5ub3RlX2l0ZW1fc3BhY2luZyB7XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWRhdGVdLCBpbnB1dFt0eXBlPXRpbWVdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT10ZWxdIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuXHRtaW4taGVpZ2h0OiAxMDAlOyAgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIGRvIE5PVCBzdXBwb3J0IHZoIHVuaXQgKi9cclxuXHRtaW4taGVpZ2h0OiAxMDB2aDsgLyogVGhlc2UgdHdvIGxpbmVzIGFyZSBjb3VudGVkIGFzIG9uZSA6LSkgICAgICAgKi9cclxuXHRcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZV92aWV3IHtcclxuXHQvKiBib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjOyAqL1xyXG59XHJcblxyXG4vKiBUYWJsZSBzdHlsZSBmb3IgZGFzaGJvYXJkIHZpZXdpbmcgKi9cclxuLnRhYmxlX2hlYWRpbmcge1xyXG5cdGNvbG9yOiAjMzIzMTMxO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZV9ib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG5cdGNvbG9yOiAjNjc2NzY3O1xyXG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCAjYWFhYWFhO1xyXG59XHJcblxyXG4udGFibGVfY2VsbF9oZWFkaW5nIHtcclxuXHRwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZV9jZWxsX3dpZGUge1xyXG5cdHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlX2JvZHlfYm9sZCB7XHJcblx0Y29sb3I6ICM1NTU1NTU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4uYmFja19idG4sIC5iYWNrX2J0bjpob3ZlciwgLmJhY2tfYnRuOmZvY3VzIHtcclxuXHRjb2xvcjogIzAxNDUxYjtcclxufVxyXG5cclxuLmpvYm51bV9zZXRfYmd7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0QyRUNDNztcclxufVxyXG5cclxuLmpvYm51bV9zZXRfYmc6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNhMWVhODIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZF9taW5pbXVte1xyXG5cdHBhZGRpbmc6IDAgMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1PREFMUyAqL1xyXG4udXBsb2FkZWRfaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi51cGxvYWRlZF9pbWc6aG92ZXIge29wYWNpdHk6IDAuNzt9XHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogem9vbTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuLmF1dG9fd2lkdGgge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbF9ib2R5X3dhcm5pbmd7XHJcblx0Y29sb3I6ICNGRjAwMDA7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb20ge1xyXG4gICAgZnJvbSB7dHJhbnNmb3JtOnNjYWxlKDApfSBcclxuICAgIHRvIHt0cmFuc2Zvcm06c2NhbGUoMSl9XHJcbn1cclxuXHJcbi5jbG9zZV9tb2RhbF9idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNsb3NlX21vZGFsX2J0bjpob3ZlcixcclxuLmNsb3NlX21vZGFsX2J0bjpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2JiYjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogVGFibGV0IChob3Jpem9udGFsKSBhbmQgYWJvdmUgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0LnRhYmxldF9oaWRkZW4sIC5kZXNrdG9wX2hpZGRlbiB7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG59XHJcblxyXG4vKiBUQUJMRVQgYW5kIE1PQklMRSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7IFxyXG5cdCNoZWFkZXJfcm93IHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG5cdCNoZWFkZXJfcm93IHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHQjZGFzaGJvYXJkX25hdntcclxuXHRcdGhlaWdodDogMTB2aDtcclxuXHRcdHotaW5kZXg6IDU7XHJcblx0fVxyXG5cdC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tb2JpbGVfdGFibGV0X2hpZGRlbiB7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5tYXJnaW5fYWRkZm9ybSB7XHJcblx0XHRwYWRkaW5nOjA7XHJcblx0XHRtYXJnaW46MDtcclxuXHR9XHJcbn1cclxuXHJcbi8qTU9CSUxFIEVYQ0xVU0lWRSovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkgeyBcclxuXHQjaGVhZGVyX3JvdyB7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbiAgICAucGFkX3JpZ2h0XzUge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5wYWRfbGVmdF9ub25lIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2Zvcm0ge1xyXG5cdFx0bWluLXdpZHRoOiA4NXZ3O1xyXG5cdH1cclxuXHQubW9iaWxlX2hpZGRlbiB7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdGgye1xyXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdH1cclxufVxyXG5cdFxyXG5cdFxyXG4vKkF1ZHJleSdzIENoYW5nZXMgNS83LzIwMTggZm9yIFdPQ2xpZW50QXV0aG9yaXphdGlvbi9Db21wbGV0aW9uLmpzcCAqL1x0XHJcbi5ncm91cF9oZWFkaW5nIHtcclxuXHRwYWRkaW5nLXRvcDogMTVweDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmJsYWNrYm9sZCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5wb29kaW5ne1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4ucG9vZCB7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XHJcbmJvZHkgeyBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxyXG5cclxuLmxvYWRlciB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICBhbmltYXRpb246IGxvYWRzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLmxkcy1yaW5nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG4ubGRzLXJpbmcgZGl2IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNTFweDtcclxuICBoZWlnaHQ6IDUxcHg7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxufVxyXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBTYWZhcmkgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\personitech-webclient-nissho\src\styles.css */"./src/styles.css");


/***/ })

},[[4,"runtime"]]]);
//# sourceMappingURL=styles.js.map