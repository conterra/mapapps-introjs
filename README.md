# mapapps-introjs

This bundle allows you to create your own step-by-step guide in map.apps.

### Sample App ###
http://www.mapapps.de/mapapps/resources/apps/downloads_introjs/index.html

### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`

Installation Guide
------------------

1. First, you need to add the bundle "dn_introjs" to your app.
2. After that, change the intro properties in the app.json:

```
"dn_introjs": {
    "UserIntro": {
        "showStepNumbers": false,                   // Show steps number in the red circle or not
        "showBullets": true,                        // Show introduction bullets or not
        "showProgress": false,                      // Show introduction progress or not
        "showButtons": true,                        // Show introduction navigation buttons or not
        "keyboardNavigation": true,                 // Navigating with keyboard or not
        "exitOnEsc": true,                          // Exit introduction when pressing Escape button
        "exitOnOverlayClick": false,                // Exit introduction when clicking on overlay layer
        "disableInteraction": false,                // Disable an interaction inside element or not
        "nextLabel": "${intro.next}",               // Next button label
        "prevLabel": "${intro.back}",               // Previous button label
        "skipLabel": "${intro.skip}",               // Skip button label
        "doneLabel": "${intro.done}",               // Done button label
        "steps": [                                  // Step definition
            {
                "intro": "${intro.familiarise}"
            },
            {
                "intro": "${intro.navigation}"
            },
            {
                "element": ".mapview_tools",
                "intro": "${intro.mapview}",
                "position": "left"
            },
            {
                "element": ".themeSelector",
                "intro": "${intro.theme}",
                "position": "bottom"
            },
            {
                "element": ".basemapToggler",
                "intro": "${intro.basemap}",
                "position": "bottom"
            },
            {
                "element": ".languageToggler",
                "intro": "${intro.language}",
                "position": "left"
            },
            {
                "element": ".omnisearch",
                "intro": "${intro.omnisearch}",
                "position": "right"
            },
            {
                "element": ".ctWDYWBtn",
                "intro": "${intro.functions}",
                "position": "right"
            },
            {
                "element": ".ctTool_mapflowToggleTool",
                "intro": "${intro.mapflow}",
                "position": "top"
            },
            {
                "element": ".ctTool_legendToggleTool",
                "intro": "${intro.legend}",
                "position": "top"
            },
            {
                "intro": "${intro.featureinfo}"
            }
        ]
    }
},
```