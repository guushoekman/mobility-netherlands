function densityDistance() {

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
			{x: "Very strongly urban", y: 11.08},
			{x: "Strongly urban", y: 15.39},
			{x: "Moderately urban", y: 16.12},
			{x: "Little urban", y: 17.5},
			{x: "Not urban", y: 18.55}
		]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Very strongly urban", y: 5.23},
			{x: "Strongly urban", y: 6.24},
			{x: "Moderately urban", y: 6.04},
			{x: "Little urban", y: 6.53},
			{x: "Not urban", y: 6.99}
		]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Very strongly urban", y: 0.18},
			{x: "Strongly urban", y: 0.19},
			{x: "Moderately urban", y: 0.15},
			{x: "Little urban", y: 0.17},
			{x: "Not urban", y: 0}
		]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Very strongly urban", y: 4.07},
			{x: "Strongly urban", y: 2.67},
			{x: "Moderately urban", y: 2.41},
			{x: "Little urban", y: 1.93},
			{x: "Not urban", y: 1.39}
		]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Very strongly urban", y: 1.54},
			{x: "Strongly urban", y: 0.88},
			{x: "Moderately urban", y: 0.63},
			{x: "Little urban", y: 0.64},
			{x: "Not urban", y: 0}
		]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Very strongly urban", y: 2.73},
			{x: "Strongly urban", y: 2.41},
			{x: "Moderately urban", y: 2.41},
			{x: "Little urban", y: 2.63},
			{x: "Not urban", y: 2.66}
		]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Very strongly urban", y: 0.97},
			{x: "Strongly urban", y: 0.84},
			{x: "Moderately urban", y: 0.72},
			{x: "Little urban", y: 0.72},
			{x: "Not urban", y: 0.71}
		]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Very strongly urban", y: 0.74},
			{x: "Strongly urban", y: 0.76},
			{x: "Moderately urban", y: 1.08},
			{x: "Little urban", y: 1.05},
			{x: "Not urban", y: 1.41}
		]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Kilometres per day by population density <div class="btn-group" role="group"><button onclick="densityTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="densityDistance()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

}