# Starbucks Heatmap :coffee:

Mapa de calor de las cafeterias :copyright: Starbucks en el gran Santiago, para el Curso de **"Desarrollo y Programción de Visualización de Datos Geográficos en Internet"** versión 2019 de la Facultad de Arquitectura y Ubanismo (FAU) de la Universidad de Chile.

## Objetivo

El objetivo es presentar la concentración/distribución de las cafeterias de la cadena :copyright: Starbucks en el gran Santiago.

## Proceso

Tras definir el objetivo y con las herramientas y técnicas enseñadas durante el curso se procedió a realizar el siguiente proceso:

* Identifacar las fuentes donde encontrar la información, en este caso el sitio web chileno de la cadena [http://www.starbucks.cl/store-locator/search](http://www.starbucks.cl/store-locator/search)
* Inspeccionar el código del sitio para entender su estructura
* Mediante el uso de `NodeJS` y la libreria `request` se procedio recolectar la información
* La información recibió un procesamiento el cual la estructuró para un mejor manejo de ésta
* Utilizando la libreria `Leafleft` y su plugin `Leaflet.heat` se preparo un mapa de calor
* Disponer en `GitHub` para el acceso público

## Uso

El mapa puede ser visualizado en el siguiente enlace [https://github.com/alemelomeza/fau-project](https://github.com/alemelomeza/fau-project)