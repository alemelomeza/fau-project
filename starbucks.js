const request = require('request')
const fs = require('fs')

const LOCATION = {
    lat: -33.468484,
    lng: -70.61865799999998
}
// https://openapi.starbucks.com/v1/stores/nearby?callback=jQuery17209513094314474935_1562802205867&radius=50&limit=50&latLng=-33.468484%2C-70.61865799999998&ignore=storeNumber%2CownershipTypeCode%2CtimeZoneInfo%2CextendedHours&brandCodes=Starbucks&access_token=h7XsQKJ85vPtVAAoaYwUWtOhGZJp&_=1562802206078
const URI = `https://openapi.starbucks.com/v1/stores/nearby?callback=jQuery17206872230634064445_1562801232558&limit=50&latLng=${LOCATION.lat}%2C${LOCATION.lng}&ignore=storeNumber%2CownershipTypeCode%2CtimeZoneInfo%2CextendedHours&brandCodes=Starbucks&access_token=h7XsQKJ85vPtVAAoaYwUWtOhGZJp&_=1562801232991`

request(URI, (error, response, body) => {
    const data = JSON.parse(body.replace(/jQuery17206872230634064445_1562801232558|\(|\)/gi, ''))
    const geojson = {
        type: 'FeatureCollection',
        features: []
    }

    data.stores.forEach(store => {
        geojson.features.push({
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: [ store.store.coordinates.latitude, store.store.coordinates.longitude ]
            }
        })
    });

    try {
        fs.writeFileSync('stores.geojson', JSON.stringify(geojson))
    } catch (err) {
        console.log(err)
    }
})