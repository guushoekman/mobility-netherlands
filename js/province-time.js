function provinceTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
	;

	d3.select('#chart svg').datum([
	{   
	  key: "Car (driver)",
	  color: "#fb6a4a",
	  values:
	  [
      {x: "Netherlands", y: 19.97},
      {x: "Drenthe", y: 24.34},
      {x: "Flevoland", y: 22.46},
      {x: "Friesland", y: 19.53},
      {x: "Gelderland", y: 20.9},
      {x: "Groningen", y: 18.46},
      {x: "Limburg", y: 20.45},
      {x: "Noord-Brabant", y: 21.61},
      {x: "Noord-Holland", y: 18.12},
      {x: "Overijssel", y: 18.78},
      {x: "Utrecht", y: 20.45},
      {x: "Zeeland", y: 18.79},
      {x: "Zuid-Holland", y: 19.39}
	  ]
	},
	{   
	  key: "Car (passenger)",
	  color: "#fc9272",
	  values:
	  [
      {x: "Netherlands", y: 8.48},
      {x: "Drenthe", y: 9.54},
      {x: "Flevoland", y: 11.41},
      {x: "Friesland", y: 8.71},
      {x: "Gelderland", y: 8.72},
      {x: "Groningen", y: 8.36},
      {x: "Limburg", y: 7.58},
      {x: "Noord-Brabant", y: 8.67},
      {x: "Noord-Holland", y: 8.17},
      {x: "Overijssel", y: 8.14},
      {x: "Utrecht", y: 9.15},
      {x: "Zeeland", y: 8.08},
      {x: "Zuid-Holland", y: 8.16}
	  ]
	},
	{   
	  key: "Moped",
	  color: "#fcbba1",
	  values:
	  [
      {x: "Netherlands", y: 0.52},
      {x: "Drenthe", y: 0},
      {x: "Flevoland", y: 0},
      {x: "Friesland", y: 0},
      {x: "Gelderland", y: 0},
      {x: "Groningen", y: 0},
      {x: "Limburg", y: 0},
      {x: "Noord-Brabant", y: 0},
      {x: "Noord-Holland", y: 0.86},
      {x: "Overijssel", y: 0},
      {x: "Utrecht", y: 0},
      {x: "Zeeland", y: 0},
      {x: "Zuid-Holland", y: 0.48}
	  ]
	},
	{   
	  key: "Train",
	  color: "#6baed6",
	  values:
	  [
      {x: "Netherlands", y: 4.72},
      {x: "Drenthe", y: 0},
      {x: "Flevoland", y: 0},
      {x: "Friesland", y: 0},
      {x: "Gelderland", y: 4.87},
      {x: "Groningen", y: 0},
      {x: "Limburg", y: 3.97},
      {x: "Noord-Brabant", y: 4.04},
      {x: "Noord-Holland", y: 6.12},
      {x: "Overijssel", y: 3.51},
      {x: "Utrecht", y: 6.47},
      {x: "Zeeland", y: 0},
      {x: "Zuid-Holland", y: 4.47}
	  ]
	},
	{   
	  key: "Bus/tram/metro",
	  color: "#9ecae1",
	  values:
	  [
      {x: "Netherlands", y: 3.06},
      {x: "Drenthe", y: 0},
      {x: "Flevoland", y: 0},
      {x: "Friesland", y: 0},
      {x: "Gelderland", y: 1.69},
      {x: "Groningen", y: 0},
      {x: "Limburg", y: 0},
      {x: "Noord-Brabant", y: 1.8},
      {x: "Noord-Holland", y: 5.1},
      {x: "Overijssel", y: 0},
      {x: "Utrecht", y: 2.82},
      {x: "Zeeland", y: 0},
      {x: "Zuid-Holland", y: 4.95}
	  ]
	},
	{   
	  key: "Bicycle",
	  color: "#74c476",
	  values:
	  [
      {x: "Netherlands", y: 12.28},
      {x: "Drenthe", y: 13.12},
      {x: "Flevoland", y: 7.49},
      {x: "Friesland", y: 12.35},
      {x: "Gelderland", y: 12.28},
      {x: "Groningen", y: 15.87},
      {x: "Limburg", y: 8.85},
      {x: "Noord-Brabant", y: 11.71},
      {x: "Noord-Holland", y: 13.72},
      {x: "Overijssel", y: 13.31},
      {x: "Utrecht", y: 12.67},
      {x: "Zeeland", y: 12.62},
      {x: "Zuid-Holland", y: 11.95}
	  ]
	},
	{   
	  key: "Walking",
	  color: "#a1d99b",
	  values:
	  [
      {x: "Netherlands", y: 9.2},
      {x: "Drenthe", y: 7.72},
      {x: "Flevoland", y: 9.8},
      {x: "Friesland", y: 10.06},
      {x: "Gelderland", y: 8.59},
      {x: "Groningen", y: 7.43},
      {x: "Limburg", y: 10.62},
      {x: "Noord-Brabant", y: 8.8},
      {x: "Noord-Holland", y: 9.18},
      {x: "Overijssel", y: 7.86},
      {x: "Utrecht", y: 9.52},
      {x: "Zeeland", y: 10.29},
      {x: "Zuid-Holland", y: 9.84}
	  ]
	},
	{   
	  key: "Other",
	  color: "#bcbddc",
	  values:
	  [
      {x: "Netherlands", y: 1.66},
      {x: "Drenthe", y: 0},
      {x: "Flevoland", y: 0},
      {x: "Friesland", y: 0},
      {x: "Gelderland", y: 1.75},
      {x: "Groningen", y: 0},
      {x: "Limburg", y: 0},
      {x: "Noord-Brabant", y: 1.88},
      {x: "Noord-Holland", y: 1.71},
      {x: "Overijssel", y: 1.69},
      {x: "Utrecht", y: 0},
      {x: "Zeeland", y: 0},
      {x: "Zuid-Holland", y: 1.6}
	  ]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Minutes per day by province <button onclick="provinceDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></h4>');
}