ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [47.273992, 38.907490],
            zoom: 15
        }),

        myPlacemark1 = new ymaps.Placemark([47.273992, 38.907490], {
            balloonContent: 'Автомат с водой'
        }, {
            iconLayout: 'default#image',
     
        }),
        myPlacemark2 = new ymaps.Placemark([47.275711, 38.906397], {
            balloonContent: 'Магазин Виктория'
        }, {
            iconLayout: 'default#image',
     
        }),
        myPlacemark4 = new ymaps.Placemark([47.273363, 38.898884], {
            balloonContent: 'Магазин Виктория'
        }, {
            iconLayout: 'default#image',
     
        }),
           myPlacemark3 = new ymaps.Placemark([47.275533, 38.905039], {
            balloonContent: 'Автомат с водой'
        }, {
            iconLayout: 'default#image',
     
        })
        
      
         

    myMap.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4);
}
