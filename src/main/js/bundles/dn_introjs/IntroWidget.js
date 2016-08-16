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
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/IntroWidget.html",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/form/Button",
    "dijit/form/CheckBox",
    "ct/util/css",
    "ct/_Connect"
], function (declare,
             _Widget,
             _TemplatedMixin,
             _WidgetsInTemplateMixin,
             templateStringContent,
             BorderContainer,
             ContentPane,
             Button,
             CheckBox,
             ct_css,
             _Connect) {
    return declare([_Widget, _TemplatedMixin,
        _WidgetsInTemplateMixin, _Connect], {
        templateString: templateStringContent,
        baseClass: "introWidget",
        postCreate: function () {
            this.inherited(arguments);
            if (!this.startIntroOnStartup)
                ct_css.switchHidden(this._bottomContainer, true);
        },
        resize: function (dims) {
            this._container.resize(dims);
        },
        onStart: function () {
        }
    });
});
		