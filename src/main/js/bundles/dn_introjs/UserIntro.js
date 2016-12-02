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
    "dojo/_base/Deferred",
    "dojo/dom-construct",
    "dojo/query",
    "dojo/_base/window",
    "./intro",
    "ct/_Connect",
    "ct/async",
    "ct/array"
], function (declare, d_lang, d_array, Deferred, domConstruct, query, win, introjs, _Connect, ct_async, ct_array) {
    return declare([_Connect], {
        overlayUtils: null,
        overlayCount: 0,
        activate: function () {
            this.inherited(arguments);
        },
        initializeIntro: function () {
            var intro = this._intro = introjs();
            var properties = this._properties;
            this.addStartCssClass();
            this._steps = properties.steps;
            intro.setOptions({
                showStepNumbers: properties.showStepNumbers,
                showBullets: properties.showBullets,
                showProgress: properties.showProgress,
                showButtons: properties.showButtons,
                keyboardNavigation: properties.keyboardNavigation,
                exitOnEsc: properties.exitOnEsc,
                exitOnOverlayClick: properties.exitOnOverlayClick,
                disableInteraction: properties.disableInteraction,
                nextLabel: properties.nextLabel + "<span class='icon-arrow-right'></span>",
                prevLabel: "<span class='icon-arrow-left'></span>" + properties.prevLabel,
                skipLabel: properties.skipLabel,
                doneLabel: properties.doneLabel,
                steps: properties.steps
            });
            intro.onbeforechange(d_lang.hitch(this, this.beforeStep));
            intro.onchange(d_lang.hitch(this, this.onStep));
            intro.onafterchange(d_lang.hitch(this, this.afterStep));
            this.startIntro(intro);
        },
        addStartCssClass: function () {
            var appCtx = this._appCtx;
            if (appCtx._applicationRootNode.addClassName !== undefined) {
                appCtx._applicationRootNode.addClassName("dn_introjs_initializing");
            } else {
                appCtx._applicationRootNode.className = appCtx._applicationRootNode.className + " dn_introjs_initializing";
            }
        },
        removeStartCssClass: function () {
            var appCtx = this._appCtx;
            if (appCtx._applicationRootNode.removeClassName !== undefined) {
                appCtx._applicationRootNode.removeClassName("dn_introjs_initializing");
            } else {
                appCtx._applicationRootNode.className = appCtx._applicationRootNode.className.replace("dn_introjs_initializing", "");
            }
        },
        startIntro: function (intro) {
            var tools = [];
            d_array.forEach(this._properties.steps, function (step) {
                if (step.toolId) {
                    var tool = this.getTool(step.toolId);
                    tool.set("active", true);
                    ct_async(function () {
                        tool.set("active", false);
                    }, this, 500);
                    tools.push(tool);
                }
            }, this);
            var n = tools.length;
            if (n > 0) {
                var lastTool = tools[n - 1];
                var con = new _Connect();
                var that = this;
                con.connect(lastTool, "onDeactivate", function () {
                    con.disconnect();
                    intro.start();
                    ct_async(function () {
                        that.removeStartCssClass();
                    }, this, 500);
                });
            } else {
                this.removeStartCssClass();
                intro.start();
            }
        },
        beforeStep: function () {
            var activeTool = this._activeTool;
            if (activeTool) {
                activeTool.set("active", false);
            }
            var intro = this._intro;
            var currentStep = intro._currentStep;
            var step = intro._introItems[currentStep];
            var stepElement = this._steps[currentStep].element;
            if (step.toolId) {
                var tool = this._activeTool = this.getTool(step.toolId);
                tool.set("active", true);
            }
            /*if (stepElement) {
             step.element = document.querySelector(stepElement);
             if (!step.element)
             intro.nextStep();
             }*/
        },
        onStep: function () {
        },
        afterStep: function () {
            //var intro = this._intro;
            //intro.refresh();
        },
        getTool: function (toolId) {
            var tools = this._tools;
            return ct_array.arraySearchFirst(tools, {
                id: toolId
            });
        }
    });
});
