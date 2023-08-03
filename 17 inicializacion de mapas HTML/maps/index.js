//AIzaSyAqxk1z1e9IvVbY9YogHj5rd3mZfs9lq68
let marker, map;

function initMap() {
    //console.log("inicializando mapa")
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marker = new google.maps.Marker({ //marker significa la parte de el punto rojo de la ubicacion
        position: posicion,
        map,
        title: "Posicion Inicial"
    })

    //posicion de nosotros o geolocalizacion
    //marker.setPosition({lat, lng})
    
    geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalizacion")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.log(error)
}

