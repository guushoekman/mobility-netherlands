function monthDistance() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of kilometres per day')
		chart.yAxis.axisLabelDistance(-10);
		if ($(window).width() <=800) {
		  chart.staggerLabels(true);
		};
	;

	d3.select('#chart svg').datum([
	{
		key: "Car (driver)",
		color: "#fb6a4a",
		values:
		[
			{x: "January", y: 14.57},
			{x: "February", y: 14.7},
			{x: "March", y: 14.19},
			{x: "April", y: 15.71},
			{x: "May", y: 14.57},
			{x: "June", y: 17.83},
			{x: "July", y: 15.23},
			{x: "August", y: 14.37},
			{x: "September", y: 16.57},
			{x: "October", y: 15.77},
			{x: "November", y: 15.47},
			{x: "December", y: 14.71}
		]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "January", y: 5.4},
			{x: "February", y: 5.41},
			{x: "March", y: 6.4},
			{x: "April", y: 6.14},
			{x: "May", y: 7.38},
			{x: "June", y: 6.45},
			{x: "July", y: 5.63},
			{x: "August", y: 6.57},
			{x: "September", y: 5.66},
			{x: "October", y: 5.72},
			{x: "November", y: 6.05},
			{x: "December", y: 6.5}
		]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "January", y: 0},
			{x: "February", y: 0},
			{x: "March", y: 0},
			{x: "April", y: 0},
			{x: "May", y: 0},
			{x: "June", y: 0},
			{x: "July", y: 0},
			{x: "August", y: 0},
			{x: "September", y: 0},
			{x: "October", y: 0},
			{x: "November", y: 0},
			{x: "December", y: 0}
		]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "January", y: 2.28},
			{x: "February", y: 2.86},
			{x: "March", y: 3.5},
			{x: "April", y: 2.72},
			{x: "May", y: 2.32},
			{x: "June", y: 2.58},
			{x: "July", y: 1.76},
			{x: "August", y: 2.03},
			{x: "September", y: 3.52},
			{x: "October", y: 3.51},
			{x: "November", y: 2.53},
			{x: "December", y: 2.29}
		]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "January", y: 0.89},
			{x: "February", y: 0.96},
			{x: "March", y: 0.9},
			{x: "April", y: 0.99},
			{x: "May", y: 0.83},
			{x: "June", y: 1.01},
			{x: "July", y: 0.81},
			{x: "August", y: 0.61},
			{x: "September", y: 1.05},
			{x: "October", y: 1.13},
			{x: "November", y: 0.94},
			{x: "December", y: 0.84}
		]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "January", y: 1.88},
			{x: "February", y: 2.1},
			{x: "March", y: 2.71},
			{x: "April", y: 2.93},
			{x: "May", y: 2.75},
			{x: "June", y: 2.8},
			{x: "July", y: 2.6},
			{x: "August", y: 2.67},
			{x: "September", y: 2.84},
			{x: "October", y: 2.78},
			{x: "November", y: 2.35},
			{x: "December", y: 2.19}
		]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "January", y: 0.74},
			{x: "February", y: 0.8},
			{x: "March", y: 0.9},
			{x: "April", y: 0.8},
			{x: "May", y: 0.91},
			{x: "June", y: 0.89},
			{x: "July", y: 0.7},
			{x: "August", y: 0.74},
			{x: "September", y: 0.82},
			{x: "October", y: 0.88},
			{x: "November", y: 0.78},
			{x: "December", y: 0.75}
		]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "January", y: 1.01},
			{x: "February", y: 0},
			{x: "March", y: 0.68},
			{x: "April", y: 0.84},
			{x: "May", y: 0.96},
			{x: "June", y: 1.44},
			{x: "July", y: 0.83},
			{x: "August", y: 1.06},
			{x: "September", y: 1.12},
			{x: "October", y: 1.1},
			{x: "November", y: 0.64},
			{x: "December", y: 0}
		]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Kilometres per day by month <div class="btn-group" role="group"><button onclick="monthTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="monthDistance()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');
}