//alert("hello");//

require (["esri/Map", "esri/views/MapView", "esri/WebMap"],
   function(Map, MapView, WebMap){
    let map1 = new Map({basemap:"satellite"});
    let map2 = new Map({basemap:"topo"});
    let map3 = new Map({basemap:"osm"});
    let map4 = new WebMap({ //słowo klucz new + nazwa modułu
      portalItem: {
       id: "8cd95545d6284c959a64678b23fef8c0"
      }
   });
    let mapContainer = new MapView({
        container: "mapid",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map4,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        /*zoom: 5*/ 
        
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

   