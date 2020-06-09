//
// Final Project for CIS 399 - Data Visualization @ University of Oregon S'20
// Sean Wilson - swilso17@uoregon.edu - 05/28/20
//

//------------------------------------------------------------------------------
// Country data structure
//------------------------------------------------------------------------------

class country {

  // ----PARAMETERS----

  // ---Country---
  // Country

  // ---Infrastructure---
  // Area(sq km)
  // Highways(km)
  // Population
  // Railways(km)
  // Labor force
  // Unemployment rate(%)

  // ---Health---
  // Birth rate(births/1000 population)
  // Death rate(deaths/1000 population)
  // Life expectancy at birth(years)
  // Infant mortality rate(deaths/1000 live births)
  // Total fertility rate(children born/woman)
  // HIV/AIDS - deaths
  // HIV/AIDS - people living with HIV/AIDS

  // ---Economic---
  // Debt - external
  // Inflation rate (consumer prices)(%)
  // Imports
  // Exports
  // GDP

  // ---Military---
  // Military expenditures - dollar figure
  // Military expenditures - percent of GDP(%)

  // ---Gas---
  // Natural gas - consumption(cu m)
  // Natural gas - production(cu m)
  // Natural gas - exports(cu m)
  // Natural gas - imports(cu m)

  // ---Oil---
  // Oil - consumption(bbl/day)
  // Oil - production(bbl/day)
  // Oil - exports(bbl/day)
  // Oil - imports(bbl/day)

  // ---Technology---
  // Electricity - consumption(kWh)
  // Electricity - production(kWh)
  // Internet hosts
  // Internet users
  // Telephones - main lines in use
  // Telephones - mobile cellular

    constructor(country, area, highway, population, railway, laborF, unempR,
                birthR, deathR, lExpect, infMort, fertRate, aidsDeath, aidsLive,
                debt, infRate, importt, exportt, gdp,
                militDollar, militGDP,
                gasConsump, gasProd, gasExport, gasImport,
                oilConsump, oilProd, oilExport, oilImport,
                elecConsump, elecProd, iHosts, iUsers, teleLand, teleMobile) {

        this.country = country;
        this.area = area;
        this.highway = highway;
        this.population = population;
        this.railway = railway;
        this.laborF = laborF;
        this.unempR = unempR;

        this.birthR = birthR;
        this.deathR = deathR;
        this.lExpect = lExpect;
        this.infMort = infMort;
        this.fertRate = fertRate;
        this.aidsDeath = aidsDeath;
        this.aidsLive = aidsLive;

        this.debt = debt;
        this.infRate = infRate;
        this.importt = importt
        this.exportt = exportt;
        this.gdp = gdp;

        this.militDollar = militDollar;
        this.militGDP = militGDP;

        this.gasConsump = gasConsump;
        this.gasProd = gasProd;
        this.gasExport = gasExport;
        this.gasImport = gasImport;

        this.oilConsump = oilConsump;
        this.oilProd = oilProd;
        this.oilExport = oilExport;
        this.oilImport = oilImport;

        this.elecConsump = elecConsump;
        this.elecProd = elecProd;
        this.iHosts = iHosts;
        this.iUsers = iUsers;
        this.teleLand = teleLand;
        this.teleMobile = teleMobile;
    }
}

//------------------------------------------------------------------------------
// Function that reads in worldfactbook data
//------------------------------------------------------------------------------

let countries = []
let countriesData = []

function readCountryData(){

  d3.csv('data/factbook.csv')
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {

        let filler = new country(data[i]['Country'],
                                 data[i]['Area(sq km)'],
                                 data[i]['Highways(km)'],
                                 data[i]['Population'],
                                 data[i]['Railways(km)'],
                                 data[i]['Labor force'],
                                 data[i]['Unemployment rate(%)'],

                                 data[i]['Birth rate(births/1000 population)'],
                                 data[i]['Death rate(deaths/1000 population)'],
                                 data[i]['Life expectancy at birth(years)'],
                                 data[i]['Infant mortality rate(deaths/1000 live births)'],
                                 data[i]['Total fertility rate(children born/woman)'],
                                 data[i]['HIV/AIDS - deaths'],
                                 data[i]['HIV/AIDS - people living with HIV/AIDS'],

                                 data[i]['Debt - external'],
                                 data[i]['Inflation rate (consumer prices)(%)'],
                                 data[i]['Imports'],
                                 data[i]['Exports'],
                                 data[i]['GDP'],

                                 data[i]['Military expenditures - dollar figure'],
                                 data[i]['Military expenditures - percent of GDP(%)'],

                                 data[i]['Natural gas - consumption(cu m)'],
                                 data[i]['Natural gas - production(cu m)'],
                                 data[i]['Natural gas - exports(cu m)'],
                                 data[i]['Natural gas - imports(cu m)'],

                                 data[i]['Oil - consumption(bbl/day)'],
                                 data[i]['Oil - production(bbl/day)'],
                                 data[i]['Oil - exports(bbl/day)'],
                                 data[i]['Oil - imports(bbl/day)'],

                                 data[i]['Electricity - consumption(kWh)'],
                                 data[i]['Electricity - production(kWh)'],
                                 data[i]['Internet hosts'],
                                 data[i]['Internet users'],
                                 data[i]['Telephones - main lines in use'],
                                 data[i]['Telephones - mobile cellular']);

        countries.push(data[i]['Country']);
        countriesData.push(filler);

      }
    })
    .catch(function(error){
       console.log(error);
    })
}

//------------------------------------------------------------------------------
// Function that reads in country codes data
//------------------------------------------------------------------------------

let codes = [];

function countryCodes(){
  d3.csv('data/countryCodes.csv')
    .then(function(data) {

      for (var i = 0; i < data.length; i++) {
        let temp = [data[i].Country, data[i].code3]
        codes.push(temp);
      }

      let newCodes = [
        ["Holy See (Vatican City)", 'VAT'],
        ["Serbia and Montenegro", 'MNE'],
        ["Bolivia", 'BOL'],
        ["Gambia The", 'GMB'],
        ["Korea North", 'PRK'],
        ["Falkland Islands (Islas Malvinas)", 'FLK'],
        ["Niger", 'NER'],
        ["Bahamas The", 'BHS'],
        ["Faroe Islands", 'FRO'],
        ["Cocos (Keeling) Islands", 'CCK'],
        ["East Timor", 'TLS'],
        ["British Virgin Islands", 'VGB'],
        ["Iran", 'IRN'],
        ["Russia", 'RUS'],
        ["Swaziland", 'SWZ'],
        ["Marshall Islands", 'MHL'],
        ["Syria", 'SYR'],
        ["Comoros", 'COM'],
        ["Congo Democratic Republic of the", 'COD'],
        ["Laos", 'LAO'],
        ["Cook Islands", 'COK'],
        ["Macau", 'MAC'],
        ["Sudan", 'SDN'],
        ["Reunion", 'REU'],
        ["Macedonia", 'MKD'],
        ["Cayman Islands", 'CYM'],
        ["Philippines", 'PHL'],
        ["Cote d'Ivoire", 'CIV'],
        ["Vietnam", 'VNM'],
        ["Moldova", 'MDA'],
        ["Congo Republic of the", 'COG'],
        ["Virgin Islands", 'VIR'],
        ["Taiwan", 'TWN'],
        ["Gaza Strip", 'GZA'],
        ["Saint Helena", 'SHN'],
        ["Netherlands", 'NLD'],
        ["Turks and Caicos Islands", 'TCA'],
        ["Pitcairn Islands", 'PCN'],
        ["Northern Mariana Islands", 'MNP'],
        ["Dominican Republic", 'DOM'],
        ["Man Isle of", 'IMN'],
        ["Brunei", 'BRN'],
        ["West Bank", 'TKM'],
        ["Midway Islands", 'MID'],
        ["British Indian Ocean Territory", 'IOT'],
        ["Svalbard", 'SJM'],
        ["Central African Republic", 'CAF'],
        ["Burma", 'MMR'],
        ["Micronesia Federated States of", 'FSM'],
        ["Czech Republic", 'CZE'],
        ["United Arab Emirates", 'ARE'],
        ["Venezuela", 'VEN'],
        ["Tanzania", 'TZA'],
        ["United States", 'USA'],
        ['Jan Mayen', 'SVN'],
        ['Ethiopia', 'ETH'],
        ['South Sudan', 'SSD'],
        ["Korea South", 'KOR'],
      ];

      for (var i = 0; i < newCodes.length; i++) {
        codes.push(newCodes[i]);
      }

      let cList = document.getElementById('hl');
      for (var i = 0; i < codes.length; i++) {
        let option = document.createElement('option');

        option.appendChild(document.createTextNode(codes[i][0]));
        option.value = codes[i][1];
        cList.appendChild(option);
      }

    })
    .catch(function(error){
       console.log(error);
    })
}

//------------------------------------------------------------------------------
// Function that draws the map w/ given projection code
// Parameters: proj: projection - BG, GRAT, MAP: Map colors
//------------------------------------------------------------------------------

function drawMap(proj, BG, GRAT, MAP, OUT){

  d3.json('data/world.json').then(mapData => {

    // remove any previously drawn map
    d3.select("#map-chart").select('svg').remove();

    let height = window.innerHeight-265;
    let width = window.innerWidth-10;

    // default projection
    let projection = d3.geoAlbers().scale(240).translate([width/2, height/2]);

    if(proj == 1){
      projection = d3.geoAlbers().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 2){
      projection = d3.geoAzimuthalEqualArea().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 3){
      projection = d3.geoAzimuthalEquidistant().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 4){
      projection = d3.geoConicConformal().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 5){
      projection = d3.geoConicEqualArea().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 6){
      projection = d3.geoConicEquidistant().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 7){
      projection = d3.geoEquirectangular().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 8){
      projection = d3.geoGnomonic().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 9){
      projection = d3.geoMercator().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 10){
      projection = d3.geoOrthographic().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 11){
      projection = d3.geoStereographic().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 12){
      projection = d3.geoTransverseMercator().scale(240).translate([width/2, height/2]);
    }
    else if(proj == 13){
      projection = d3.geoWinkel3().scale(240).translate([width/2, height/2]);
    }

    //draw the map w/ selected projection
    let geojson = topojson.feature(mapData, mapData.objects.countries);
    let path = d3.geoPath().projection(projection);
    let svg = d3.select("#map-chart").append('svg').attr('height', height).attr('width', width).style('background', BG);
    let graticule = d3.geoGraticule();


    svg.selectAll("path")
        .data(geojson.features)
        .join("path")
        .attr('id', function (d) {
          return(d.id);
         })
        .attr('fill', MAP)
        .attr('stroke', OUT)
        .attr("d", path);

    svg.append('path')
        .datum(graticule)
        .attr('d', path)
        .attr('fill', 'transparent')
        .attr('opacity', "0.2")
        .attr('stroke', GRAT);

    highlight();

  });
}

//------------------------------------------------------------------------------
// Highlights map based on select
//------------------------------------------------------------------------------

function highlight(){

  let start1 = document.getElementById("startC").value;
  let end1 = document.getElementById("midC").value;

  let start2 = document.getElementById("midC").value;
  let end2 = document.getElementById("endC").value;

  // Using found js library which creates color ramps. Open licsense.
  let rainbow1 = new Rainbow();
  rainbow1.setNumberRange(1, 132);
  rainbow1.setSpectrum(start1, end1);

  let rainbow2 = new Rainbow();
  rainbow2.setNumberRange(1, 132);
  rainbow2.setSpectrum(start2, end2);

  let colors1 = [];
  let colors2 = [];

  for (var i = 1; i <= 132; i++) {
    let hexColour1 = rainbow1.colourAt(i);
    let hexColour2 = rainbow2.colourAt(i);
    colors1.push('#' + hexColour1);
    colors2.push('#' + hexColour2);
  }

  // Info to be visualized
  let metric = document.getElementById("metric").value;
  let metricText = document.getElementById('metric').selectedOptions[0].text;
  // Focused Info to be displayed
  let focusInfo = '';
  let focusCountryID = document.getElementById('hl').value;
  let focusCountry = document.getElementById('hl').selectedOptions[0].text;
  let focusIndex = 0;

  countriesData.sort((a, b) => ( Number(a[metric]) > Number(b[metric]) ) ? 1 : -1)

  // Color the sorted country list with color ramp
  for (var i = 0; i < 132; i++) {
    for (var j = 0; j < codes.length; j++) {
      if (codes[j][0]==countriesData[i].country) {
        if (codes[j][1] == focusCountryID) {
          focusInfo = countriesData[i][metric];
          focusIndex = i;
        }
        let subject1 = '#'+codes[j][1];
        d3.select(subject1).attr('fill', colors1[i]);
        break;
      }
    }
  }
  for (var i = 0; i < 132; i++) {
    for (var j = 0; j < codes.length; j++) {
      if (codes[j][0]==countriesData[132+i].country) {
        if (codes[j][1] == focusCountryID) {
          focusInfo = countriesData[i][metric];
          focusIndex = 132+i;
        }
        let subject2 = '#'+codes[j][1];
        d3.select(subject2).attr('fill', colors2[i]);
        break;
      }
    }
  }

  let map = document.getElementById("map").value;

  for (var i = 0; i < countriesData.length; i++) {
    // console.log(countriesData[i].country+' : '+countriesData[i][metric]);
    if (countriesData[i][metric] == "") {
      for (var j = 0; j < codes.length; j++) {
        if (codes[j][0]==countriesData[i].country) {
          let subject = '#'+codes[j][1];
          d3.select(subject).attr('fill', map);
          break;
        }
      }
    }
  }

  function suff(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
  }

  focusIndex = 264-focusIndex;

  let info = 'The value of '+metricText+' of '+focusCountry+' is '+focusInfo+' and ranks '+suff(focusIndex)+' for '+metricText+' in the World';

  if (focusInfo == '') {
    console.log('The value '+metricText+' of '+focusCountry+' is not available');
    document.getElementById("info").innerHTML = 'The value '+metricText+' of '+focusCountry+' is not available';
  }
  else{
    console.log(info);
    document.getElementById("info").innerHTML = info;
  }

  let previous = d3.select('#'+focusCountryID).attr('fill');

  d3.select('#'+focusCountryID).transition()
                               .duration(2000)
                               .attr('fill', 'red')
                               .transition()
                               .duration(3000)
                               .attr('fill', previous)
                               .transition()
                              .duration(2000)
                              .attr('fill', 'red')
                              .transition()
                              .duration(3000)
                              .attr('fill', previous);

}

//------------------------------------------------------------------------------
// Calls drawMap with selected projection
//------------------------------------------------------------------------------

function changeProjection(){

  let bg = document.getElementById("bg").value;
  let grat = document.getElementById("grat").value;
  let map = document.getElementById("map").value;
  let out = document.getElementById("out").value;

  let choice = document.getElementById("projection").value;

  drawMap(+choice, bg, grat, map, out);
}

//------------------------------------------------------------------------------
// Main()?
//------------------------------------------------------------------------------

function setUp(){

  countryCodes();

  readCountryData();

  changeProjection();

}
