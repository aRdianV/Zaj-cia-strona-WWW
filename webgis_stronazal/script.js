//alert("hello");//

require (["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery","esri/layers/GraphicsLayer","esri/widgets/Sketch",
 "esri/layers/FeatureLayer", "esri/geometry/support/webMercatorUtils"],
   function(Map, MapView, WebMap, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer){
    let map1 = new Map({basemap:"satellite"});
    let map2 = new Map({basemap:"topo"});
    let map3 = new Map({basemap:"osm"});
    let map4 = new WebMap({ //słowo klucz new + nazwa modułu
      portalItem: {
       id: "8cd95545d6284c959a64678b23fef8c0"
      }
   });
   var view = new MapView({
      container: "view_div",
      map: map4,})
   /*let basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "satellite"
    })
    
   view.ui.add(basemapToggle, "bottom-right");*/
   
   let basemapGallery = new BasemapGallery({
      view: view,
      source: {
        portal: {
          url: "https://www.arcgis.com",
          useVectorBasemaps: true  // Load vector tile basemaps
        }
      }
    });
    view.ui.add(basemapGallery, "top-right");
   
    let mapContainer = new MapView({
        container: "mapid",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map4,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        /*zoom: 5*/ 
        
      }); 
      var graphicsLayer = new GraphicsLayer();
      
      let map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
      });
      var sketch = new Sketch({
         view: view,
         layer: graphicsLayer
       });
       view.ui.add(sketch, "top-right"); 
      
       var stateLayer = new FeatureLayer({
         url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
       });
 
       map4.add(stateLayer, 0);
       
       mapview.on("click", function(evt){
         let cords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
         
     });
       
      document.getElementById("przycisk1").onclick = function(){
         console.log('klik')
         mapContainer.map = map1;
      }
      document.getElementById("przycisk2").onclick = function(){
         console.log('klik')
         mapContainer.map = map2;
      }
      document.getElementById("przycisk3").onclick = function(){
         console.log('klik')
         mapContainer.map = map3;
      }
      document.getElementById("przycisk4").onclick = function(){
         console.log('klik')
         mapContainer.map = map4;
      }
   

   })

   