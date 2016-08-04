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
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/dom-construct",
    "dojo/query",
    "dojo/_base/window",
    "./intro",
    "ct/async"
], function (declare, d_lang, d_array, domConstruct, query, win, introjs, ct_async) {
    return declare([], {
        overlayUtils: null,
        overlayCount: 0,
        activate: function () {
            ct_async(function () {
                //this.startIntro();
            }, this, 1000);
        },
        startIntro: function () {
            var intro = introjs();
            var properties = this._properties;
            var steps = properties.steps;
            d_array.forEach(steps, function (step) {
                if (step.element && typeof step.element !== "object")
                    step.element = document.querySelector(step.element);
            });
            intro.setOptions({
                showStepNumbers: properties.showStepNumbers,
                showBullets: properties.showBullets,
                showProgress: properties.showProgress,
                showButtons: properties.showButtons,
                keyboardNavigation: properties.keyboardNavigation,
                exitOnEsc: properties.exitOnEsc,
                exitOnOverlayClick: properties.exitOnOverlayClick,
                nextLabel: properties.nextLabel + " &rarr;",
                prevLabel: "&larr; " + properties.prevLabel,
                skipLabel: properties.skipLabel,
                doneLabel: properties.doneLabel,
                steps: properties.steps
            });
            intro.start();
        }
    });
});
