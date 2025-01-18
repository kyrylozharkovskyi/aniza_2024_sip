var wms_layers = [];


        var lyr_OSMwhite_0 = new ol.layer.Tile({
            'title': 'OSM light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Gbokowodywm_1 = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
              url: "https://wody.isok.gov.pl/gpservices/KZGW/MZP20_Glebokosc_WysokiePrawdopodPowodzi/MapServer/WMSServer",
              attributions: ' ',
              params: {
                "LAYERS": "1",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: 'Głębokość wody <0.5 - >4 [m]',
            opacity: 0.700000,

          });
        wms_layers.push([lyr_Gbokowodywm_1, 0]);

        var lyr_Wodypowierzchniowe_2 = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
              url: "https://wody.isok.gov.pl/gpservices/KZGW/MZP20_Glebokosc_WysokiePrawdopodPowodzi/MapServer/WMSServer",
              attributions: ' ',
              params: {
                "LAYERS": "4",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: 'Wody powierzchniowe',
            opacity: 0.500000,

          });
        wms_layers.push([lyr_Wodypowierzchniowe_2, 0]);



var format_VMAPL22002_2 = new ol.format.GeoJSON();
var features_VMAPL22002_2 = format_VMAPL22002_2.readFeatures(json_VMAPL22002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAPL22002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAPL22002_2.addFeatures(features_VMAPL22002_2);
var lyr_VMAPL22002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAPL22002_2, 
                style: style_VMAPL22002_2,
                popuplayertitle: 'VMAP L2 2002',
                interactive: false,
                title: '<img src="styles/legend/VMAPL22002_2.png" /> VMAP L2 2002'
            });
var format_Santinel2024_3 = new ol.format.GeoJSON();
var features_Santinel2024_3 = format_Santinel2024_3.readFeatures(json_Santinel2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Santinel2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Santinel2024_3.addFeatures(features_Santinel2024_3);
var lyr_Santinel2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Santinel2024_3, 
                style: style_Santinel2024_3,
                popuplayertitle: 'Santinel 2024',
                interactive: false,
                title: '<img src="styles/legend/Santinel2024_3.png" /> Santinel 2024'
            });
var format_Historycznetopo1940_4 = new ol.format.GeoJSON();
var features_Historycznetopo1940_4 = format_Historycznetopo1940_4.readFeatures(json_Historycznetopo1940_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Historycznetopo1940_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Historycznetopo1940_4.addFeatures(features_Historycznetopo1940_4);
var lyr_Historycznetopo1940_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Historycznetopo1940_4, 
                style: style_Historycznetopo1940_4,
                popuplayertitle: 'Historyczne topo 1940',
                interactive: false,
                title: '<img src="styles/legend/Historycznetopo1940_4.png" /> Historyczne topo 1940'
            });
var format_AnalizaHistSantinel_5 = new ol.format.GeoJSON();
var features_AnalizaHistSantinel_5 = format_AnalizaHistSantinel_5.readFeatures(json_AnalizaHistSantinel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalizaHistSantinel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalizaHistSantinel_5.addFeatures(features_AnalizaHistSantinel_5);
var lyr_AnalizaHistSantinel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalizaHistSantinel_5, 
                style: style_AnalizaHistSantinel_5,
                popuplayertitle: 'Analiza Hist. Santinel',
                interactive: false,
    title: 'Analiza Historyczna a Santinel<br />\
    <img src="styles/legend/AnalizaHistSantinel_5_0.png" /> -100 - -72<br />\
    <img src="styles/legend/AnalizaHistSantinel_5_1.png" /> -72 - -38<br />\
    <img src="styles/legend/AnalizaHistSantinel_5_2.png" /> -38 - -12<br />\
    <img src="styles/legend/AnalizaHistSantinel_5_3.png" /> -12 - 19<br />\
    <img src="styles/legend/AnalizaHistSantinel_5_4.png" /> 19 - 63<br />\
    <img src="styles/legend/AnalizaHistSantinel_5_5.png" /> 63 - 100<br />'
        });

lyr_OSMwhite_0.setVisible(true);
lyr_GoogleSatellite_1.setVisible(false);
lyr_Gbokowodywm_1.setVisible(false);
lyr_Wodypowierzchniowe_2.setVisible(false);
lyr_VMAPL22002_2.setVisible(true);lyr_Santinel2024_3.setVisible(true);lyr_Historycznetopo1940_4.setVisible(true);lyr_AnalizaHistSantinel_5.setVisible(false);
var layersList = [
    lyr_OSMwhite_0,
    lyr_GoogleSatellite_1,
    lyr_Gbokowodywm_1,
    lyr_Wodypowierzchniowe_2,

    lyr_VMAPL22002_2,
    lyr_Santinel2024_3,
    lyr_Historycznetopo1940_4,
    lyr_AnalizaHistSantinel_5];


lyr_VMAPL22002_2.set('fieldAliases', {'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Field': 'Field', 'pow': 'pow', 'obwod': 'obwod', 'wsp_zw': 'wsp_zw', });
lyr_Santinel2024_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Historycznetopo1940_4.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Field': 'Field', 'pow': 'pow', 'obw': 'obw', 'wsp_zw': 'wsp_zw', 'Field1': 'Field1', });
lyr_AnalizaHistSantinel_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'proc_A': 'proc_A', 'proc_B': 'proc_B', 'proc_C': 'proc_C', 'roznica_A_': 'roznica_A_', 'roznica_B_': 'roznica_B_', });
lyr_VMAPL22002_2.set('fieldImages', {'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Field': 'TextEdit', 'pow': 'TextEdit', 'obwod': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_Santinel2024_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Historycznetopo1940_4.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Field': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'wsp_zw': 'TextEdit', 'Field1': 'TextEdit', });
lyr_AnalizaHistSantinel_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'proc_A': 'TextEdit', 'proc_B': 'TextEdit', 'proc_C': 'TextEdit', 'roznica_A_': 'TextEdit', 'roznica_B_': 'TextEdit', });
lyr_VMAPL22002_2.set('fieldLabels', {'POWIERZCHN': 'no label', 'ID': 'no label', 'Field': 'no label', 'pow': 'no label', 'obwod': 'no label', 'wsp_zw': 'no label', });
lyr_Santinel2024_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Historycznetopo1940_4.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Field': 'no label', 'pow': 'no label', 'obw': 'no label', 'wsp_zw': 'no label', 'Field1': 'no label', });
lyr_AnalizaHistSantinel_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'proc_A': 'no label', 'proc_B': 'no label', 'proc_C': 'no label', 'roznica_A_': 'no label', 'roznica_B_': 'no label', });
lyr_AnalizaHistSantinel_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});