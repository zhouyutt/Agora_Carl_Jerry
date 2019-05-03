var map = new BMap.Map("map");
// var point = new BMap.Point(116.404, 39.915);
// map.centerAndZoom(point, 15);
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function (r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        map.panTo(new BMap.Point(r.point.lng, r.point.lat));
        map.centerAndZoom(r.point, 15);
    } else {
        alert('failed' + this.getStatus());
    }
});
