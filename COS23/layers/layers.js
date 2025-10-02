var wms_layers = [];


        var lyr_ImagemSatlite_0 = new ol.layer.Tile({
            'title': 'Imagem Satélite',
            'type':'base',
            'opacity': 1.000000,
            
maxResolution:33.60563942737588,

            minResolution:0.23803796229422672,

            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_InformaodeBase_1 = new ol.format.GeoJSON();
var features_InformaodeBase_1 = format_InformaodeBase_1.readFeatures(json_InformaodeBase_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InformaodeBase_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InformaodeBase_1.addFeatures(features_InformaodeBase_1);
var lyr_InformaodeBase_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InformaodeBase_1, 
                style: style_InformaodeBase_1,
                popuplayertitle: 'Informação de Base',
                interactive: false,
    title: 'Informação de Base<br />\
    <img src="styles/legend/InformaodeBase_1_0.png" /> Freguesias<br />\
    <img src="styles/legend/InformaodeBase_1_1.png" /> Concelhos<br />\
    <img src="styles/legend/InformaodeBase_1_2.png" /> Oceano Atlântico<br />' });
var format_COS2018_2 = new ol.format.GeoJSON();
var features_COS2018_2 = format_COS2018_2.readFeatures(json_COS2018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COS2018_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COS2018_2.addFeatures(features_COS2018_2);
var lyr_COS2018_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COS2018_2, 
                style: style_COS2018_2,
                popuplayertitle: 'COS 2018',
                interactive: true,
    title: 'COS 2018<br />\
    <img src="styles/legend/COS2018_2_0.png" /> Territórios artificializados<br />\
    <img src="styles/legend/COS2018_2_1.png" /> Agricultura<br />\
    <img src="styles/legend/COS2018_2_2.png" /> Pastagens<br />\
    <img src="styles/legend/COS2018_2_3.png" /> Superfícies agroflorestais(SAF)<br />\
    <img src="styles/legend/COS2018_2_4.png" /> Florestas<br />\
    <img src="styles/legend/COS2018_2_5.png" /> Matos<br />\
    <img src="styles/legend/COS2018_2_6.png" /> Espaços descobertos ou com pouca vegetação<br />\
    <img src="styles/legend/COS2018_2_7.png" /> Zonas Húmidas<br />\
    <img src="styles/legend/COS2018_2_8.png" /> Massas de água superficiais<br />' });
var format_COS2023_3 = new ol.format.GeoJSON();
var features_COS2023_3 = format_COS2023_3.readFeatures(json_COS2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COS2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COS2023_3.addFeatures(features_COS2023_3);
var lyr_COS2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COS2023_3, 
                style: style_COS2023_3,
                popuplayertitle: 'COS 2023',
                interactive: true,
    title: 'COS 2023<br />\
    <img src="styles/legend/COS2023_3_0.png" /> Territórios artificializados<br />\
    <img src="styles/legend/COS2023_3_1.png" /> Agricultura<br />\
    <img src="styles/legend/COS2023_3_2.png" /> Pastagens<br />\
    <img src="styles/legend/COS2023_3_3.png" /> Superfícies agroflorestais(SAF)<br />\
    <img src="styles/legend/COS2023_3_4.png" /> Florestas<br />\
    <img src="styles/legend/COS2023_3_5.png" /> Matos<br />\
    <img src="styles/legend/COS2023_3_6.png" /> Espaços descobertos ou com pouca vegetação<br />\
    <img src="styles/legend/COS2023_3_7.png" /> Zonas Húmidas<br />\
    <img src="styles/legend/COS2023_3_8.png" /> Massas de água superficiais<br />' });
var format_TransfernciasCOS2018COS2023_4 = new ol.format.GeoJSON();
var features_TransfernciasCOS2018COS2023_4 = format_TransfernciasCOS2018COS2023_4.readFeatures(json_TransfernciasCOS2018COS2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransfernciasCOS2018COS2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransfernciasCOS2018COS2023_4.addFeatures(features_TransfernciasCOS2018COS2023_4);
var lyr_TransfernciasCOS2018COS2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransfernciasCOS2018COS2023_4, 
                style: style_TransfernciasCOS2018COS2023_4,
                popuplayertitle: 'Transferências COS 2018 - COS 2023',
                interactive: true,
    title: 'Transferências COS 2018 - COS 2023<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_0.png" /> Territórios artificializados - Agricultura<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_1.png" /> Territórios artificializados - Florestas<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_2.png" /> Territórios artificializados - Matos<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_3.png" /> Agricultura - Territórios artificializados<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_4.png" /> Agricultura - Pastagens<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_5.png" /> Agricultura - Florestas<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_6.png" /> Agricultura - Matos<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_7.png" /> Agricultura - Massas de água superficiais<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_8.png" /> Pastagens - Territórios artificializados<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_9.png" /> Pastagens - Agricultura<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_10.png" /> Pastagens - Florestas<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_11.png" /> Florestas - Territórios artificializados<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_12.png" /> Florestas - Agricultura<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_13.png" /> Florestas - Pastagens<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_14.png" /> Florestas - Matos<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_15.png" /> Florestas - Massas de água superficiais<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_16.png" /> Matos - Territórios artificializados<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_17.png" /> Matos - Agricultura<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_18.png" /> Matos - Pastagens<br />\
    <img src="styles/legend/TransfernciasCOS2018COS2023_4_19.png" /> Matos - Florestas<br />' });
var group_TransfernciasdeUsodoSoloCOS2018COS2023TorresVedras = new ol.layer.Group({
                                layers: [lyr_COS2018_2,lyr_COS2023_3,lyr_TransfernciasCOS2018COS2023_4,],
                                fold: 'close',
                                title: 'Transferências de Uso do Solo – COS 2018 → COS 2023 (Torres Vedras)'});
var group_InformaodeBase = new ol.layer.Group({
                                layers: [lyr_ImagemSatlite_0,lyr_InformaodeBase_1,],
                                fold: 'close',
                                title: 'Informação de Base'});

lyr_ImagemSatlite_0.setVisible(true);lyr_InformaodeBase_1.setVisible(true);lyr_COS2018_2.setVisible(false);lyr_COS2023_3.setVisible(false);lyr_TransfernciasCOS2018COS2023_4.setVisible(true);
var layersList = [group_InformaodeBase,group_TransfernciasdeUsodoSoloCOS2018COS2023TorresVedras];
lyr_InformaodeBase_1.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'dico': 'dico', 'concelho': 'concelho', 'distrito': 'distrito', 'n_freguesi': 'n_freguesi', 'nutsiii': 'nutsiii', 'nutsii': 'nutsii', 'nutsi': 'nutsi', 'alt_max': 'alt_max', 'alt_min': 'alt_min', 'area_ha': 'area_ha', 'perim_km': 'perim_km', 'freguesia': 'freguesia', 'des_simplificada': 'Freguesia', 'web_mapping': 'web_mapping', });
lyr_COS2018_2.set('fieldAliases', {'fid': 'fid', 'COS18_n1_C': 'COS18_n1_C', 'COS18_n1_L': 'COS18_n1_L', 'COS18_n2_C': 'COS18_n2_C', 'COS18_n2_L': 'COS18_n2_L', 'COS18_n3_C': 'COS18_n3_C', 'COS18_n3_L': 'COS18_n3_L', 'COS18_n4_C': 'COS18_n4_C', 'COS18_n4_L': 'COS18_n4_L', 'AREA_ha': 'AREA_ha', });
lyr_COS2023_3.set('fieldAliases', {'fid': 'fid', 'COS23_n1_C': 'COS23_n1_C', 'COS23_n1_L': 'Classificação COS - Nível 1', 'COS23_n2_C': 'COS23_n2_C', 'COS23_n2_L': 'COS23_n2_L', 'COS23_n3_C': 'COS23_n3_C', 'COS23_n3_L': 'COS23_n3_L', 'COS23_n4_C': 'COS23_n4_C', 'COS23_n4_L': 'COS23_n4_L', 'AREA_ha': 'AREA_ha', });
lyr_TransfernciasCOS2018COS2023_4.set('fieldAliases', {'fid': 'fid', 'COS18_n1_C': 'COS18_n1_C', 'COS18_n1_L': 'COS18_n1_L', '2023_COS23': '2023_COS23', '2023_COS_1': '2023_COS_1', '2023_AREA_': 'Área (hectares)', 'Processos': 'Processos', 'Transf': 'Transferências', });
lyr_InformaodeBase_1.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'dico': 'TextEdit', 'concelho': 'TextEdit', 'distrito': 'TextEdit', 'n_freguesi': 'TextEdit', 'nutsiii': 'TextEdit', 'nutsii': 'TextEdit', 'nutsi': 'TextEdit', 'alt_max': 'TextEdit', 'alt_min': 'TextEdit', 'area_ha': 'TextEdit', 'perim_km': 'TextEdit', 'freguesia': 'TextEdit', 'des_simplificada': 'TextEdit', 'web_mapping': 'TextEdit', });
lyr_COS2018_2.set('fieldImages', {'fid': 'TextEdit', 'COS18_n1_C': 'TextEdit', 'COS18_n1_L': 'TextEdit', 'COS18_n2_C': 'Hidden', 'COS18_n2_L': 'Hidden', 'COS18_n3_C': 'Hidden', 'COS18_n3_L': 'Hidden', 'COS18_n4_C': 'Hidden', 'COS18_n4_L': 'TextEdit', 'AREA_ha': 'Hidden', });
lyr_COS2023_3.set('fieldImages', {'fid': 'TextEdit', 'COS23_n1_C': 'TextEdit', 'COS23_n1_L': 'TextEdit', 'COS23_n2_C': 'Hidden', 'COS23_n2_L': 'Hidden', 'COS23_n3_C': 'Hidden', 'COS23_n3_L': 'Hidden', 'COS23_n4_C': 'Hidden', 'COS23_n4_L': 'TextEdit', 'AREA_ha': 'Hidden', });
lyr_TransfernciasCOS2018COS2023_4.set('fieldImages', {'fid': 'TextEdit', 'COS18_n1_C': 'Hidden', 'COS18_n1_L': 'TextEdit', '2023_COS23': 'Hidden', '2023_COS_1': 'TextEdit', '2023_AREA_': 'TextEdit', 'Processos': 'Hidden', 'Transf': 'TextEdit', });
lyr_InformaodeBase_1.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'dico': 'no label', 'concelho': 'no label', 'distrito': 'no label', 'n_freguesi': 'no label', 'nutsiii': 'no label', 'nutsii': 'no label', 'nutsi': 'no label', 'alt_max': 'no label', 'alt_min': 'no label', 'area_ha': 'no label', 'perim_km': 'no label', 'freguesia': 'no label', 'des_simplificada': 'no label', 'web_mapping': 'no label', });
lyr_COS2018_2.set('fieldLabels', {'fid': 'hidden field', 'COS18_n1_C': 'hidden field', 'COS18_n1_L': 'header label - visible with data', 'COS18_n4_L': 'hidden field', });
lyr_COS2023_3.set('fieldLabels', {'fid': 'hidden field', 'COS23_n1_C': 'hidden field', 'COS23_n1_L': 'header label - visible with data', 'COS23_n4_L': 'hidden field', });
lyr_TransfernciasCOS2018COS2023_4.set('fieldLabels', {'fid': 'hidden field', 'COS18_n1_L': 'hidden field', '2023_COS_1': 'hidden field', '2023_AREA_': 'header label - visible with data', 'Transf': 'header label - visible with data', });
lyr_TransfernciasCOS2018COS2023_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});