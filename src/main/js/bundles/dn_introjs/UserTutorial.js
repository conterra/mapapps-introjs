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
    "dojo/dom-construct",
    "dojo/query",
    "dojo/_base/window",
    "./intro",
    "ct/async"
], function (declare, d_lang, domConstruct, query, win, introjs, ct_async) {
    return declare([], {
        overlayUtils: null,
        _activated: false,
        overlayCount: 0,
        activate: function () {
            //ct_async(function () {
                //this.addGlobalOverlay();
                this.startTutorial();
                this._activated = true;
            //}, this, 2000);
        },
        isActivated: function () {
            return this._activated;
        },
        startTutorial: function () {
            var tutorial = this._i18n.get().intro;
            var intro = introjs();
            intro.setOptions({
                showStepNumbers: false,
                exitOnOverlayClick: false,
                nextLabel: tutorial.next + " &rarr;",
                prevLabel: "&larr; " + tutorial.back,
                skipLabel: tutorial.skip,
                doneLabel: tutorial.done,
                steps: [
                    {
                        intro: tutorial.familiarise
                    },
                    {
                        intro: tutorial.navigation
                    },
                    {
                        element: document.querySelector('.esriLargeSlider'), // zoom buttons
                        intro: tutorial.zoom,
                        position: 'left'
                    },
                    {
                        element: document.querySelector('.headerRight'), // basemaptoggler
                        intro: tutorial.basemap,
                        position: 'left'
                    },
                    {
                        element: document.querySelector('.dockingBarBottomLeft'), // mapflow
                        intro: tutorial.features,
                        position: 'top'
                    },
                    {
                        element: document.querySelector('.dockingBarBottomRight'), // legend
                        intro: tutorial.legend,
                        position: 'top'
                    },
                    {
                        element: document.querySelector('.ctTool_ec_feature_infoTool'),
                        intro: tutorial.featureinfo,
                        position: 'top'
                    }
                ]
            });
            intro.start();
            intro.oncomplete(d_lang.hitch(this, function () {
                this.removeGlobalOverlay();
            }));
            intro.onexit(d_lang.hitch(this, function () {
                this.removeGlobalOverlay();
            }));
        },
        addGlobalOverlay: function () {
            this.overlayCount++;

            console.info("overlay added. count: " + this.overlayCount);

            var overlay = query('.ec-overlay');
            if (overlay && overlay.length > 0) {
                console.log("got an overlay!");
                return true;
            }

            domConstruct.create('div', {
                class: 'ec-overlay',
                style: 'top: 0;bottom: 0; left: 0;right: 0;position: fixed;background: grey;opacity: 0.5;'
            }, win.body());
        },

        removeGlobalOverlay: function () {
            if (this.overlayCount === 0) {
                console.info("Could not remove overlay. None existing.");
                return false;
            }

            this.overlayCount--;

            console.info("overlay removed. count: " + this.overlayCount);

            if (this.overlayCount === 0) {
                query('.ec-overlay').forEach(domConstruct.destroy);
            }

            return true;
        }
    });
});
