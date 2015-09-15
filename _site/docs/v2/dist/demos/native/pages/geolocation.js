System.register("pages/geolocation", ["ionic/ionic"], function (_export) {
    "use strict";

    var IonicView, Geolocation, __decorate, __metadata, GeolocationPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            Geolocation = _ionicIonic.Geolocation;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            GeolocationPage = (function () {
                function GeolocationPage() {
                    _classCallCheck(this, GeolocationPage);
                }

                _createClass(GeolocationPage, [{
                    key: "doGetLocation",
                    value: function doGetLocation() {
                        var _this = this;

                        console.log('Getting location');
                        this.gettingLocation = true;
                        Geolocation.getCurrentPosition().then(function (pos) {
                            _this.gettingLocation = false;
                            console.log('Got location', pos);
                            _this.location = pos;
                        }, function (err) {
                            _this.gettingLocation = false;
                            console.error('Unable to get location', err);
                        });
                    }
                }, {
                    key: "doTrackLocation",
                    value: function doTrackLocation() {
                        var _this2 = this;

                        this.gettingTrackLocation = true;
                        Geolocation.watchPosition().source.subscribe(function (pos) {
                            _this2.gettingTrackLocation = false;
                            console.log('Got location', pos);
                            _this2.trackLocation = pos;
                        }, function (err) {
                            _this2.gettingTrackLocation = false;
                            console.error('Unable to get location', pos);
                        });
                    }
                }]);

                return GeolocationPage;
            })();

            _export("GeolocationPage", GeolocationPage);

            _export("GeolocationPage", GeolocationPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar>\n    <a menu-toggle>\n      <icon menu></icon>\n    </a>\n    <ion-title>Geolocation</ion-title>\n  </ion-navbar>\n  <ion-content class=\"padding\">\n    <h2>Geolocation</h2>\n    <button primary outline (click)=\"doGetLocation()\">Get Location</button>\n    <div>\n      <b *ng-if=\"gettingLocation\">Fetching location...</b>\n      <b *ng-if=\"location\">{{location.coords.latitude}}, {{location.coords.longitude}}</b>\n    </div>\n    <button primary outline (click)=\"doTrackLocation()\">Track Location</button>\n    <div>\n      <b *ng-if=\"gettingTrackLocation\">Fetching location...</b>\n      <b *ng-if=\"trackLocation\">{{trackLocation.coords.latitude}}, {{trackLocation.coords.longitude}}</b>\n    </div>\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [])], GeolocationPage));
        }
    };
});