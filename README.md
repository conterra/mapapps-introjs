# mapapps-introjs

❗️ This bundle is no longer maintained. You may use https://github.com/conterra/mapapps-intro instead, which extends functionality of this bundle. ❗️

This bundle allows you to create your own step-by-step guide in map.apps based on the introjs framework.
https://github.com/usablica/intro.js/

:heavy_exclamation_mark: desktop-only

Installation Guide
------------------

1. First, you need to add the bundle "dn_introjs" to your app.
2. After that, change the intro properties in the app.json:

```
"dn_introjs": {
    "UserIntro": {
        "startIntroOnStartup": true,                // Enable / Disable intro-start on startup
        "showStepNumbers": false,                   // Show steps number in the red circle or not
        "showBullets": false,                       // Show introduction bullets or not
        "showProgress": true,                       // Show introduction progress or not
        "showButtons": true,                        // Show introduction navigation buttons or not
        "keyboardNavigation": true,                 // Navigating with keyboard or not
        "exitOnEsc": true,                          // Exit introduction when pressing Escape button
        "exitOnOverlayClick": false,                // Exit introduction when clicking on overlay layer
        "disableInteraction": false,                // Disable an interaction inside element or not
        "nextLabel": "${intro.next}",               // Next button label
        "prevLabel": "${intro.back}",               // Previous button label
        "skipLabel": "${intro.skip}",               // Skip button label
        "doneLabel": "${intro.done}",               // Done button label
        "steps": [
          {
            "intro": "${intro.familiarise}"
          },
          {
            "element": ".mapview_tools",
            "intro": "${intro.mapview}",
            "position": "left"
          },
          {
            "element": ".basemapToggler",
            "intro": "${intro.basemap}",
            "position": "bottom"
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
            "element": ".ctTool_basemapgalleryToggleTool",
            "intro": "${intro.gallery}",
            "position": "top"
          },
          {
            "element": ".ctBasemapGallery",
            "intro": "${intro.galleryTool}",
            "position": "bottom",
            "toolId": "basemapgalleryToggleTool"
          },
          {
            "element": ".ctTool_followmeToggleTool",
            "intro": "${intro.followme}",
            "position": "top"
          },
          {
            "element": ".ctTool_mapflowToggleTool",
            "intro": "${intro.mapflow}",
            "position": "top"
          },
          {
            "element": ".ctMapFlow",
            "intro": "${intro.mapflowTool}",
            "position": "top",
            "toolId": "mapflowToggleTool"
          },
          {
            "element": ".ctTool_routingToggleTool",
            "intro": "${intro.routing}",
            "position": "top"
          },
          {
            "element": ".ctTool_legendToggleTool",
            "intro": "${intro.legend}",
            "position": "top"
          },
          {
            "element": ".themeSelector",
            "intro": "${intro.theme}",
            "position": "bottom"
          },
          {
            "element": ".languageToggler",
            "intro": "${intro.language}",
            "position": "bottom"
          },
          {
            "intro": "${intro.featureinfo}"
          }
        ]
    }
}
```

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
