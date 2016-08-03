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
        overlayCount: 0,
        activate: function () {
            ct_async(function () {
                this.startTutorial();
            }, this, 1000);
        },
        startTutorial: function () {
            var i18n = this._i18n.get().intro;
            var intro = introjs();
            intro.setOptions({
                showStepNumbers: false,
                showBullets: true,
                exitOnOverlayClick: false,
                nextLabel: i18n.next + " &rarr;",
                prevLabel: "&larr; " + i18n.back,
                skipLabel: i18n.skip,
                doneLabel: i18n.done,
                steps: [
                    {
                        intro: i18n.familiarise
                    },
                    {
                        intro: i18n.navigation
                    },
                    {
                        element: document.querySelector('.mapview_tools'), // mapview
                        intro: i18n.mapview,
                        position: 'left'
                    },
                    {
                        element: document.querySelector('.themeSelector'), // theme selector
                        intro: i18n.theme,
                        position: 'bottom'
                    },
                    {
                        element: document.querySelector('.basemapToggler'), // basemap toggler
                        intro: i18n.basemap,
                        position: 'bottom'
                    },
                    {
                        element: document.querySelector('.languageToggler'), // language toggler
                        intro: i18n.language,
                        position: 'bottom'
                    },
                    {
                        element: document.querySelector('.omnisearch'), // omnisearch
                        intro: i18n.omnisearch,
                        position: 'bottom'
                    },
                    {
                        element: document.querySelector('.ctWDYWBtn'), // functions
                        intro: i18n.functions,
                        position: 'right'
                    },
                    {
                        element: document.querySelector('.ctTool_mapflowToggleTool'), // mapflow
                        intro: i18n.mapflow,
                        position: 'top'
                    },
                    {
                        element: document.querySelector('.ctTool_legendToggleTool'), // legend
                        intro: i18n.legend,
                        position: 'top'
                    },
                    {
                        intro: i18n.featureinfo
                    }
                ]
            });
            intro.start();
        }
    });
});
