class Map {
    constructor(optionsReceived) {
        this.options = Object.assign({}, optionsReceived);
        this.cache = {};
    }
    init() {
        this.initializeCache();
        this.initializeEvents();
        return this;
    }
    initializeCache() {
        this.cache.window = $(window);
        this.cache.document = $(document);
        this.cache.body = $('body');
        this.cache.page = $('.thnr__page');  
        this.cache.contact = $('.thnr__contact-us'); 
        this.cache.map = $('#thnr__map');
    }
    
   initializeEvents() {
        this.cache.window.on('load', () => {
            this.showGoogleMaps();
        });
        
    }

showGoogleMaps() {
    var mapOptions = {
        zoom: 13,
        streetViewControl: false,
        scaleControl: true,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {lat: 50.459085, lng: 30.468437}
    
    };
    
    var map = new google.maps.Map(document.getElementById('thnr__map'), mapOptions);

   
var contentString1 = '<div id="content" style="text-align: center; font-family: Montserrat, sans-serif; color:#d40000">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<div id="bodyContent">'+
    '<p>метро Берестейская</p>'+
    '<p>проспект Победы, 80/57</p>'+
    '</div>'+
    '</div>';

var contentString2 = '<div id="content" style="text-align: center; font-family: Montserrat, sans-serif; color:#d40000">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<div id="bodyContent">'+
    '<p>метро Крещатик</p>'+
    '<p>улица Лютеранская, 13</p>'+
    '</div>'+
    '</div>';

var infowindow1 = new google.maps.InfoWindow({
            content: contentString1
        });
    
var infowindow2 = new google.maps.InfoWindow({
            content: contentString2
        });
var coordinate1 = new google.maps.LatLng(50.45848248, 30.42355523);
var marker1 = new google.maps.Marker({
            position: coordinate1,
            map: map,
            draggable: false,
            title: '#TheNailRoom'
        });
var coordinate2 = new google.maps.LatLng(50.44536693, 30.52532868);
var marker2 = new google.maps.Marker({
            position: coordinate2,
            map: map,
            draggable: false,
            title: '#TheNailRoom'
        });

var bounds = new google.maps.LatLngBounds();
        bounds.extend(coordinate1);
        bounds.extend(coordinate2);
        map.fitBounds(bounds);

marker1.addListener('click', function() {
            infowindow1.open(map, marker1),
            infowindow2.close(map, marker2);
        });
marker2.addListener('click', function() {
            infowindow2.open(map, marker2),
            infowindow1.close(map, marker1);
        });


}


}

module.exports = Map;