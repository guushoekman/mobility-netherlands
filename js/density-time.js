function densityTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.yAxis.tickFormat(d3.format(".2s"));
		chart.tooltip.valueFormatter(function (d) { return d > 0 ? d : 0; })
		if ($(window).width() <=575) {
		  chart.staggerLabels(true);
		};
	;

	d3.select('#chart svg').datum([
	{
		key: "Car (driver)",
		color: "#fb6a4a",
		values:
		[
			{x: "Very strongly urban", y: 16.12},
			{x: "Strongly urban", y: 20.02},
			{x: "Moderately urban", y: 21.11},
			{x: "Little urban", y: 21.7},
			{x: "Not urban", y: 23.03}
		]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Very strongly urban", y: 7.77},
			{x: "Strongly urban", y: 8.76},
			{x: "Moderately urban", y: 8.47},
			{x: "Little urban", y: 8.57},
			{x: "Not urban", y: 9.08}
		]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Very strongly urban", y: 0.62},
			{x: "Strongly urban", y: 0.59},
			{x: "Moderately urban", y: 0.42},
			{x: "Little urban", y: 0.42},
			{x: "Not urban", y: 0}
		]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Very strongly urban", y: 7.22},
			{x: "Strongly urban", y: 4.65},
			{x: "Moderately urban", y: 4.59},
			{x: "Little urban", y: 3.25},
			{x: "Not urban", y: 2.46}
		]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Very strongly urban", y: 6.69},
			{x: "Strongly urban", y: 2.58},
			{x: "Moderately urban", y: 1.89},
			{x: "Little urban", y: 1.48},
			{x: "Not urban", y: 0}
		]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Very strongly urban", y: 14},
			{x: "Strongly urban", y: 11.82},
			{x: "Moderately urban", y: 11.17},
			{x: "Little urban", y: 12.29},
			{x: "Not urban", y: 11.76}
		]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Very strongly urban", y: 10.14},
			{x: "Strongly urban", y: 9.86},
			{x: "Moderately urban", y: 8.14},
			{x: "Little urban", y: 8.54},
			{x: "Not urban", y: 8.15}
		]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Very strongly urban", y: 1.65},
			{x: "Strongly urban", y: 1.38},
			{x: "Moderately urban", y: 1.9},
			{x: "Little urban", y: 1.79},
			{x: "Not urban", y: 1.91}
		]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Minutes per day by population density <div class="btn-group" role="group"><button onclick="densityTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="densityDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

	$('#chart-definitions').html('<h3>Notes and definitons</h3><dl class="row"><p class="col-xs-12">Density is assigned to every neighbourhood or municipality based of the number of addresses within a circle with a radius of 1 kilometre divided by the area of that circle. The density is expressed in km<sup>2</sup>.</p><dt class="col-sm-3">Very strongly urban</dt><dd class="col-sm-9">2500 or more addresses per km<sup>2</sup></dd><dt class="col-sm-3">Strongly urban</dt><dd class="col-sm-9">Between 1500 and 2500 addresses per km<sup>2</sup></dd><dt class="col-sm-3">Moderately urban</dt><dd class="col-sm-9">Between 1000 and 1500 addresses per km<sup>2</sup></dd><dt class="col-sm-3">Little urban</dt><dd class="col-sm-9">Between 500 and 1000 addresses per km<sup>2</sup></dd><dt class="col-sm-3">Not urban</dt><dd class="col-sm-9">500 or fewer addresses per km<sup>2</sup></dd>');
}