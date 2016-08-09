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
define({
    root: {
        apptitle: "map.apps - Intro.js Sample",
        custominfo: {
            imprint: {
                title: "Imprint",
                tooltip: "Show imprint",
                content: "<p>Add your imprint here.</p>"
            }
        },
        agssearch: {
            countries: {
                title: "Countries in Europe (Search on ArcGIS for Server Map Service)",
                description: "Search for countries in Europe",
                placeHolder: "Country..."
            }
        },
        basemaptoggler: {
            ui: {
                labelTitle: "Basemap"
            }
        },
        bookmarks: {
            ui: {
                toolTitle: "Set spatial bookmarks",
                clearButton: "Clear all bookmarks",
                deleteMessage: "Do you really want to clear all bookmarks?",
                deleteTitle: "Are you sure?",
                deleteWarning: "This cannot be undone!"
            },
            predefined: {
                europe: "Europe",
                germany: "Germany"
            }
        },
        contentviewer: {
            regions: {
                title: "EU27 Biogeographical Regions 2011",
                search: "Search for more information!"
            }
        },
        map: {
            glasspane: {
                settlements: {
                    tel: "Telephone",
                    link: "Open Homepage"
                }
            },
            base: {
                "topo": {
                    title: "Topo",
                    description: "A topographic world map"
                },
                "aerial": {
                    title: "Aerial",
                    description: "Aerial views of the whole world"
                },
                "streets": {
                    title: "Streets",
                    description: "A detailed world street map"
                }
            },
            operational: {
                bathingwater: {
                    title: "Bathing Water",
                    description: "<div style=''><div><p><span>Map shows monitoring water locations and quality of bathing water from 2004 till 2014. For the scale 1:5.000.001 and less detailed, data are aggregated by country. In such case, stacked bars show percentage of bathing water quality for coastal and inland waters together. Number of bathing waters within certain category is seen in pop up window which can be turned on with a click on one of the countries. For the scale range 1:5 000.000 to 1:700,001, individual bathing water sites (points) are visible instead of classified stacked charts and are coloured according to the classification of bathing water quality. Symbol size depends on the map scale (in more detailed map scales symbols are bigger). For the scales 1:700,000 and more detailed, symbol of bather in a square appears instead of points. All symbols (charts, circles and squares with bather) are coloured according to achieved quality status. Historical data is seen in pop-up windows which can be opened with a click on individual bathing water monitoring site. Assessment is done according to assessment rules of the Directive 2006/7/EC (classification into categories Excellent, Good, Sufficient...) and of the Directive76/160/EEC (classification into categories CG, CI, NC...). Monitoring requirements such as the taking of a pre-season sample, a minimum of four samples per season and a minimum of one sample per month must be met for all bathing waters. If these rules are satisfied, the bathing water is categorised as 'sampling frequency satisfied'. If at least one monitoring requirement is not fulfilled the bathing water is categorised as 'sampling frequency not satisfied'. In such cases, bathing water can still be quality assessed if at least four samples per season (three samples if the season does not exceed eight weeks or the region is subject to special geographical constraints) are available and are more or less equally distributed throughout the season. Assessment of bathing water quality is possible when the bathing-water sample dataset is available for four consecutive seasons. Bathing waters are accordingly classified to one of the bathing-water quality classes (excellent, good, sufficient, or poor). If intestinal enterococci and Escherichia coli sample datasets for four consecutive seasons are not yet available, the assessment of bathing water quality is made by using the data from the latest year only. In this case, the assessment of bathing water quality is conducted under a set of transitional rules.</span><span> </span><span>Bathing waters are accordingly classified</span><span> into quality categories: </span><span>CG, CI, NC</span><span>.</span></p></div></div>",
                    layers: {
                        title: "Bathing water quality"
                    }
                },
                regions: {
                    title: "Biogeographical Regions",
                    description: "The bio-geographic regions dataset contains the official delineations used in the Habitats Directive (92/43/EEC) and for the EMERALD Network set up under the Convention on the Conservation of European Wildlife and Natural Habitats (Bern Convention)",
                    layers: {
                        0: "EU27 Bio Geographical Regions 2011",
                        1: "EU27 Biogeographical Regions 2008",
                        2: "EU27 Biogeographical Regions 2005",
                        3: "EU27 Bio Geographical Regions 2011 outline"
                    }
                },
                natura2000: {
                    title: "Natura 2000 Protected Sites",
                    description: "Natura 2000 is the key instrument to protect biodiversity in the European Union. It is an ecological network of protected areas, set up to ensure the survival of Europe's most valuable species and habitats. Natura 2000 is based on the 1979 Birds Directive and the 1992 Habitats Directive. The green infrastructure it provides safeguards numerous ecosystem services and ensures that Europe's natural systems remain healthy and resilient.",
                    layers: {
                        1: "Habitats Directive Sites (SCI)",
                        2: "Scale under 1:10,000,000",
                        3: "Scale between 1:100.000 and 1:10,000,000",
                        4: "Scale above 1:100,000",
                        5: "Bird Directive Sites (SPA)",
                        6: "Scale under 1:10,000,000",
                        7: "Scale between 1:100,000 and 1:10,000,000",
                        8: "Scale above 1:100,000"
                    }
                }
            }
        },
        resultcenter: {
            fields: {
                title: "Title"
            }
        },
        templates: {
            templates: {
                seasons: {
                    mapflow: {
                        title: "Map Content"
                    }
                }
            }
        },
        toolsets: {
            whatdoyouwant: "What do you want to do?",
            redliningTools: "Redlining",
            redliningToolsTooltip: "Redlining-Tools",
            navigationTools: "Use navigation tools",
            navigationToolsTooltip: "Tools for map navigation",
            mapviewTools: "Map Tools",
            mapviewToolsTooltip: "Map Tools"
        },
        fields: {
            id: "ID",
            title: "Title",
            adapter: "Service",
            type: "Type"
        },
        intro: {
            familiarise: "This introduction has the aim to familiarise you with the elements and functionality of map.apps.",
            mapview: "These buttons allow you to control the mapview.",
            basemap: "You can change the basemap by selecting an entry of this dropdown list.",
            theme: "Change the map.apps theme.",
            language: "Choose another language.",
            functions: "Additional functionality is available here.",
            mapflow: "This button opens the mapflow. It allows you to change the map content.",
            legend: "The legend shows the layer symbology.",
            omnisearch: "Search here and configure the search message.",
            featureinfo: "Click on the map to query additional information.",
            followme: "Here you are able to work toghether with other user.",
            gallery: "Choose another map contentin the gallery.",
            routing: "Here you can calculate a route between two points.",
            okButton: "Ok",
            closeButton: "Close",
            mapScaling: "mapScaling",
            mapLoading: "mapLoading",
            next: "next",
            back: "back",
            skip: "skip",
            done: "done"
        }
    },
    "de": true
});