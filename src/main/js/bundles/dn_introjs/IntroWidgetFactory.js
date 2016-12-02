/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "dojo/_base/Deferred",
    "dojo/aspect",
    "dojo/cookie",
    "ct/_when",
    "ct/array",
    "ct/_Connect",
    "./IntroWidget"
], function (declare,
             d_array,
             Deferred,
             d_aspect,
             d_cookie,
             ct_when,
             ct_array,
             _Connect,
             IntroWidget) {
    return declare([_Connect], {
        createInstance: function () {
            this.inherited(arguments);
            return this.widget;
        },
        activate: function () {
            this.inherited(arguments);
            var i18n = this._i18n.get();
            var userIntro = this._userIntro;
            var properties = userIntro._properties;
            var startIntroOnStartup = properties.startIntroOnStartup;
            var widget = this.widget = new IntroWidget({
                source: this,
                i18n: i18n,
                startIntroOnStartup: startIntroOnStartup
            });
            this.connect(widget, "onStart", this.start);
            widget.resize();
        },
        start: function () {
            this._userIntro.initializeIntro();
            if (this.widget._checkBox.get("value") === "agreed")
                this.disableIntro();
            this._tool.set("active", false);
        },
        disableIntro: function () {
            var cookieKey = "ShowIntroduction";
            d_cookie(cookieKey, false);
        },
        enableIntro: function () {
            var cookieKey = "ShowIntroduction";
            d_cookie(cookieKey, true);
        }
    });
});
		