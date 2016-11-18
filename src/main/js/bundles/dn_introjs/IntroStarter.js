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
    "dojo/cookie"
], function (declare,
             d_cookie) {
    return declare([], {
        activate: function () {
            this.inherited(arguments);
            var userIntro = this._userIntro;
            var properties = userIntro._properties;
            var startIntroOnStartup = properties.startIntroOnStartup;
            var enableCookie = properties.enableCookie;
            if (startIntroOnStartup) {
                if (enableCookie) {
                    var cookieKey = "ShowIntroduction";
                    var value = d_cookie(cookieKey);
                    if (value === "false") {
                        // do nothing
                    } else {
                        this._tool.set("active", true);
                    }
                } else {
                    var startIntro = this._startIntroOnStartupChecker && this._startIntroOnStartupChecker.getStartIntroOnStartupValue();
                    if (startIntro) {
                        this._tool.set("active", true);
                    }
                }
            }
        }
    });
});
		