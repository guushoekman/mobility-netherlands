function provinceDistance() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of kilometres per day')
		chart.yAxis.axisLabelDistance(-10);
	;

	d3.select('#chart svg').datum([
	{
		key: "Car (driver)",
		color: "#fb6a4a",
		values:
		[
			{x: "Netherlands", y: 15.3},
			{x: "Drenthe", y: 20.45},
			{x: "Flevoland", y: 19.81},
			{x: "Friesland", y: 16.56},
			{x: "Gelderland", y: 16.74},
			{x: "Groningen", y: 15.21},
			{x: "Limburg", y: 14.93},
			{x: "Noord-Brabant", y: 16.45},
			{x: "Noord-Holland", y: 13.05},
			{x: "Overijssel", y: 14.67},
			{x: "Utrecht", y: 16.23},
			{x: "Zeeland", y: 16.18},
			{x: "Zuid-Holland", y: 13.9}
	  ]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Netherlands", y: 6.11},
			{x: "Drenthe", y: 7.79},
			{x: "Flevoland", y: 9.74},
			{x: "Friesland", y: 7.49},
			{x: "Gelderland", y: 6.64},
			{x: "Groningen", y: 7.73},
			{x: "Limburg", y: 5.07},
			{x: "Noord-Brabant", y: 5.99},
			{x: "Noord-Holland", y: 5.54},
			{x: "Overijssel", y: 6.01},
			{x: "Utrecht", y: 6.36},
			{x: "Zeeland", y: 5.5},
			{x: "Zuid-Holland", y: 5.54}
	  ]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Netherlands", y: 0.18},
			{x: "Drenthe", y: 0},
			{x: "Flevoland", y: 0},
			{x: "Friesland", y: 0},
			{x: "Gelderland", y: 0},
			{x: "Groningen", y: 0},
			{x: "Limburg", y: 0},
			{x: "Noord-Brabant", y: 0},
			{x: "Noord-Holland", y: 0.23},
			{x: "Overijssel", y: 0},
			{x: "Utrecht", y: 0},
			{x: "Zeeland", y: 0},
			{x: "Zuid-Holland", y: 0.17}
	  ]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Netherlands", y: 2.66},
			{x: "Drenthe", y: 0},
			{x: "Flevoland", y: 0},
			{x: "Friesland", y: 0},
			{x: "Gelderland", y: 2.78},
			{x: "Groningen", y: 0},
			{x: "Limburg", y: 2.76},
			{x: "Noord-Brabant", y: 2.32},
			{x: "Noord-Holland", y: 3.2},
			{x: "Overijssel", y: 2.43},
			{x: "Utrecht", y: 3.54},
			{x: "Zeeland", y: 0},
			{x: "Zuid-Holland", y: 2.46}
	  ]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Netherlands", y: 0.91},
			{x: "Drenthe", y: 0},
			{x: "Flevoland", y: 0},
			{x: "Friesland", y: 0},
			{x: "Gelderland", y: 0.7},
			{x: "Groningen", y: 0},
			{x: "Limburg", y: 0},
			{x: "Noord-Brabant", y: 0.61},
			{x: "Noord-Holland", y: 1.34},
			{x: "Overijssel", y: 0},
			{x: "Utrecht", y: 0.74},
			{x: "Zeeland", y: 0},
			{x: "Zuid-Holland", y: 1.32}
	  ]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Netherlands", y: 2.55},
			{x: "Drenthe", y: 2.77},
			{x: "Flevoland", y: 1.69},
			{x: "Friesland", y: 2.63},
			{x: "Gelderland", y: 2.58},
			{x: "Groningen", y: 3.41},
			{x: "Limburg", y: 1.83},
			{x: "Noord-Brabant", y: 2.54},
			{x: "Noord-Holland", y: 2.76},
			{x: "Overijssel", y: 2.89},
			{x: "Utrecht", y: 2.78},
			{x: "Zeeland", y: 2.92},
			{x: "Zuid-Holland", y: 2.28}
	  ]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Netherlands", y: 0.81},
			{x: "Drenthe", y: 0.59},
			{x: "Flevoland", y: 0.92},
			{x: "Friesland", y: 0.82},
			{x: "Gelderland", y: 0.75},
			{x: "Groningen", y: 0.73},
			{x: "Limburg", y: 0.88},
			{x: "Noord-Brabant", y: 0.74},
			{x: "Noord-Holland", y: 0.86},
			{x: "Overijssel", y: 0.69},
			{x: "Utrecht", y: 0.88},
			{x: "Zeeland", y: 0.85},
			{x: "Zuid-Holland", y: 0.87}
	  ]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Netherlands", y: 0.93},
			{x: "Drenthe", y: 0},
			{x: "Flevoland", y: 0},
			{x: "Friesland", y: 0},
			{x: "Gelderland", y: 1.09},
			{x: "Groningen", y: 0},
			{x: "Limburg", y: 0},
			{x: "Noord-Brabant", y: 1.08},
			{x: "Noord-Holland", y: 0.85},
			{x: "Overijssel", y: 1},
			{x: "Utrecht", y: 0},
			{x: "Zeeland", y: 0},
			{x: "Zuid-Holland", y: 0.75}
	  ]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Kilometres per day by province <button onclick="provinceTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button></h4>');
}