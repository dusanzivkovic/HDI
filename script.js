const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/voyager/style.json?key=API_KEY',
    center: [7, 20], 
    zoom: 1.8,
});

U.init(map)

map.U.onLoad(() => {
    map.U.addGeoJSON('states', 'countries.geojson')
    map.U.addFillLayer('states', 'states', {fillColor: 'rgba(0, 0, 0, 0)', fillOutlineColor: 'rgba(212, 212, 212, 1)'})
})

const c = new MapboxChoropleth({
    tableUrl: 'csvData.csv',
    tableNumericField: 'hdi',
    tableIdField: 'country',
    geometryUrl: 'countries.geojson',
    geometryIdField: 'SOVEREIGNT',
    binCount: 7,
    colorScheme: 'BuPu',
    legendElement: '#legend',
})

c.addTo(map)
