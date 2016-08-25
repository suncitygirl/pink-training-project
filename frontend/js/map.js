(function () {

  ymaps.ready(init);
  var myMap;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.9363, 30.321132],
      zoom: [16],
      controls: []
    }),
    myMap.behaviors.disable("scrollZoom");
    myMap.controls.add("zoomControl");

    // myPlacemark = new ymaps.Placemark([59.93866675783276,30.32307250000002], {
    //   hintContent: "г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8",
    // }, {
    //   iconLayout: "default#image"
    // });
    //
    // myMap.geoObjects.add(myPlacemark);
  }
})();
