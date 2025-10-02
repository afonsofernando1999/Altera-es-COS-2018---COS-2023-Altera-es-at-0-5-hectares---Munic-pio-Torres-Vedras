var size = 0;
var placement = 'point';
function categories_COS2023_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Territórios artificializados':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,0,77,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Agricultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,244,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pastagens':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,166,77,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Superfícies agroflorestais(SAF)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(160,215,166,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Florestas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,166,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Matos':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,255,128,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Espaços descobertos ou com pouca vegetação':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,239,239,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zonas Húmidas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,166,255,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Massas de água superficiais':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,180,230,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_COS2023_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("COS23_n1_L");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_COS2023_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
