
var map = L.map('mapid').setView([35.710179967079,139.52309261622], 14);

var gsi = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
  attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'></a>"
});

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
});

var baseMaps = {
  "法政大学" : gsi,
  "OpenStreetMap" : osm
};

L.control.layers(baseMaps).addTo(map);
gsi.addTo(map);
// マーカーを表示する
var marker = L.marker([35.710179967079,139.52309261622]).addTo(map);
//上のマーカーにポップアップを追加する。
marker.bindPopup("法政大学").openPopup(); map = L.map('mapid').setView([35.710179967079,139.52309261622], 14);