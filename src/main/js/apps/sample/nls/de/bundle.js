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
    apptitle: "map.apps - Intro.js Sample",
    custominfo: {
        imprint: {
            title: "Impressum",
            tooltip: "Zeige Impressum",
            content: "<p>F\u00FCgen Sie hier Ihr Impressum ein.</p>"
        }
    },
    agssearch: {
        countries: {
            title: "L\u00E4nder in Europa (Suche auf ArcGIS for Server Map Service)",
            description: "Suche nach L\u00E4ndern in Europa",
            placeHolder: "Land..."
        }
    },
    basemaptoggler: {
        ui: {
            labelTitle: "Hintergrund"
        }
    },
    bookmarks: {
        ui: {
            toolTitle: "R\u00E4umliche Lesezeichen setzen",
            clearButton: "Alle Lesezeichen l\u00F6schen",
            deleteMessage: "Wollen Sie wirklich alle Lesezeichen l\u00F6schen?",
            deleteTitle: "Sind Sie sicher?",
            deleteWarning: "Diese Aktion kann nicht r\u00FCckg\u00E4ngig gemacht werden!"
        },
        predefined: {
            europe: "Europa",
            germany: "Deutschland"
        }
    },
    contentviewer: {
        regions: {
            title: "EU27 Biografische Regionen 2011",
            search: "Suche nach weiteren Informationen!"
        }
    },
    map: {
        glasspane: {
            settlements: {
                tel: "Telefon",
                link: "Homepage aufrufen"
            }
        },
        base: {
            topo: {
                title: "Topographische Karte",
                description: "Eine topographische Weltkarte"
            },
            aerial: {
                title: "Luftbild",
                description: "Luftbildaufnahmen der gesamten Welt"
            },
            streets: {
                title: "Stra\u00DFen",
                description: "Eine detaillierte Stra\u00DFenkarte"
            }
        },
        operational: {
            bathingwater: {
                title: "Badegew\u00E4sser",
                description: "<div style=''><div><p><span>Diese Karte zeigt Messpunkte und Daten f\u00FCr Badegew\u00E4sserqualit\u00E4t von 2004 bis 2014. F\u00FCr Ma\u00DFst\u00E4be 1:5.000.001 und kleiner sind die Daten auf L\u00E4nderebene aggregiert. Hier werden Diagramme mit den Prozentwerten f\u00FCr K\u00FCsten- und Binnengew\u00E4sser zusammen angezeigt. Zahlen zu den Badegew\u00E4ssern einer bestimmten Kategorie werden in einem Pop-Up Fenster angezeigt. F\u00FCr die Ma\u00DFst\u00E4be 1:5.000.000 bis 1:700.001 werden die einzelnen Messpunkte dargestellt. Diese sind entsprechend ihrer Klassifizierung eingef\u00E4rbt. Die Symbolgr\u00F6\u00DFe h\u00E4ngt vom Kartenma\u00DFstab ab (in detaillierteren Ma\u00DFst\u00E4ben sind die Symbole gr\u00F6\u00DFer). F\u00FCr die Ma\u00DFst\u00E4be 1:700.000 und gr\u00F6\u00DFer werden quadratische Symbole dargestellt. Alle Symbole (Diagramme, Punkte und Quadrate) sind gem\u00E4\u00DF des erreichten Qualit\u00E4tsstatus gef\u00E4rbt. Historische Daten werden in einem Pop-Up Fenster dargestellt, welches mit einem Klick auf einen Messpunkt f\u00FCr Badegew\u00E4sserqualit\u00E4t ge\u00F6ffnet werden kann. Beurteilungen werden auf Grundlage der Direktive 2006/7/EG (Klassifikation nach Kategorien Ausgezeichnet, Gut, Ausreichend...) und auf Grundlage der Direktive 76/160/EWG (Klassifikation nach Kategorien CG, CI, NC...) vorgenommen. \u00DCberwachungskriterien wie das Entnehmen einer Vorsaisonsprobe, einem Minimum von vier Proben pro Saison sowie mindestens einer Probe pro Monat m\u00FCssen von allen Badegew\u00E4ssern erf\u00FCllt werden. Wenn diese Regeln befolgt werden, wird das Gew\u00E4sser als 'ausreichend beprobt' bezeichnet. Falls mindestens ein \u00DCberwachungskriterium nicht erf\u00FCllt worden ist, wird das Wasser als 'unzureichend beprobt' bezeichnet. In solchen F\u00E4llen kann die Badegew\u00E4sserqualit\u00E4t immer noch erhoben werden, wenn mindestens vier Proben pro Badesaison (drei Proben, falls die Badesaison nicht l\u00E4nger als acht Wochen andauert oder die Region speziellen geographischen Gegebenheiten ausgesetzt ist) verf\u00FCgbar sind und ann\u00E4hernd gleichverteilt \u00FCber die Saison entnommen worden sind. Die Badegew\u00E4sserqualit\u00E4t kann erhoben werden, wenn Daten von vier aufeinanderfolgenden Badesaisons verf\u00FCgbar sind. Badegew\u00E4sser werden nach einer der Badegew\u00E4sserqualit\u00E4tsklassen klassifiziert (Ausgezeichnet, Gut, Ausreichend oder Mangelhaft). Falls Datens\u00E4tze \u00FCber iEnterokokken sowie E.coli noch nicht f\u00FCr vier aufeinanderfolgende Badesaisons verf\u00FCgbar sind, so wird die Badegew\u00E4sserqualit\u00E4t auf Grundlage der Daten des aktuellen Jahres ermittelt. In diesem Fall wird die Badegew\u00E4sserqualit\u00E4t mit Hilfe von \u00DCbergangsregelungen ermittelt.</span><span> </span><span> Badegew\u00E4sser werden nach folgenden </span><span> Qualtit\u00E4tskategorien klassifiziert: </span><span>CG, CI, NC</span><span>.</span></p></div></div>",
                layers: {
                    title: "Badegew\u00E4sserqualit\u00E4t"
                }
            },
            regions: {
                title: "Biogeographische Regionen",
                description: "Der Biogeographische Reogionen-Datensatz beinhaltet die offiziellen Abgrenzungen, welche Einsatz in der Flora-Fauna-Habitat-Richtlinie (92/43/EWG) sowie im EMERALD Network, welches im Rahmen der Konvention zur Erhaltung wild lebender Pflanzen und Tiere und ihrer Lebensr\u00E4ume (Berner Abkommen) entstand, finden.",
                    layers: {
                        0: "EU27 Biogeographische Regionen 2011",
                        1: "EU27 Biogeographische Regionen 2008",
                        2: "EU27 Biogeographische Regionen 2005",
                        3: "EU27 Biogeographische Regionen 2011 Grenzen"
                    }
            },
            natura2000: {
                title: "Natura 2000 Schutzgebiete",
                    description: "Natura 2000 ist das Hauptinstrument der Europ\u00E4ischen Union zum Bewahren der Biodiversit\u00E4t. Es ist ein \u00F6kologisches Netzwerk von gesch\u00FCtzten Regionen und wurde zum Schutz von seltenen Arten und Habitaten ins Leben gerufen. Natura 2000 basiert auf der Vogelschutzrichtlinie von 1979 sowie auf der FFH-Richtlinie von 1992. Es beinhaltet Schutzma\u00DFnahmen f\u00FCr viele \u00D6kosysteme und sichert die Gesundheit und Robustheit von Europas Umwelt und Natur.",
                    layers: {
                        1: "Fl\u00E4chen nach der FFH-Richtlinie",
                        2: "Ma\u00DFstab kleiner als 1:10.000.000",
                        3: "Ma\u00DFstab zwischen 1:100.000 und 1:10.000.000",
                        4: "Ma\u00DFstab gr\u00F6\u00DFer als 1:100.000",
                        5: "Vogelschutzgebiete",
                        6: "Ma\u00DFstab kleiner als 1:10,000,000",
                        7: "Ma\u00DFstab zwischen 1:100,000 und 1:10,000,000",
                        8: "Ma\u00DFstab gr\u00F6\u00DFer als 1:100,000"
                    }
            }
        }
    },
    resultcenter: {
        fields: {
            title: "Titel"
        }
    },
    templates: {
        templates: {
            seasons: {
                mapflow: {
                    title: "Karteninhalt"
                }
            }
        }
    },
    toolsets: {
        whatdoyouwant: "Was m\u00f6chten Sie tun?",
        redliningTools: "Zeichnen",
        redliningToolsTooltip: "Zeichen- und Editier-Werkzeuge",
        navigationTools: "Navigationswerkzeuge nutzen",
        navigationToolsTooltip: "Werkzeuge zur Kartennavigation",
        mapviewTools: "Kartenwerkzeuge",
        mapviewToolsTooltip: "Kartenwerkzeuge"
    },
    fields: {
        id: "ID",
        title: "Titel",
        adapter: "Dienst",
        type: "Typ"
    },
    intro: {
        familiarise: "Diese Einf\u00fchrung dient dazu Sie mit den Elementen und Funktionalit\u00e4ten von map.apps vertraut zu machen.",
        navigation: "Klicken und halten Sie die linke Maustaste, um die Karte zu verschieben.",
        mapview: "Mit diesen Tasten kontrollieren Sie die Kartenansicht.",
        basemap: "Mit Hilfe der Dropdown-Liste k\u00f6nnen Sie die Hintergrundkarte wechseln.",
        theme: "Hier k\u00f6nnen Sie das aktuelle Farbschema wechseln.",
        language: "Eine andere Sprache k\u00f6nnen Sie hier ausw\u00e4hlen.",
        functions: "Zus\u00e4tzliche Funktionalit\u00e4t wird durch die Tasten in dieser Dropdown-Liste zur Verf\u00fcgung gestellt. Sie fungieren als Schalter und aktivieren oder deaktivieren die angegebene Funktionalit\u00e4t.",
        mapflow: "Hier k\u00f6nnen Sie die dargestellten Inhalte der Karte beeinflussen.",
        legend: "Verwenden Sie die Legende, um die Symbolisierung der aktuell angezeigten Layer zu sehen.",
        omnisearch: "Suchen Sie mit Hilfe der Omnisearch nach Adressen und Orten.",
        featureinfo: "Einige Daten k\u00f6nnen n\u00e4her untersucht werden. Klicken Sie dazu auf die Karte, um weitere Informationen abzufragen.",
        donotshow: "Soll der Willkommensbildschirm erneut angezeigt werden.",
        okButton: "Ok",
        closeButton: "Schliessen",
        mapScaling: "mapScaling",
        mapLoading: "mapLoading",
        next: "Weiter",
        back: "Zur\u00fcck",
        skip: "\u00dcberspringen",
        done: "Beenden"
    }
});