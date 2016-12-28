function educationTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.xAxis.axisLabel('Level of education')
	;

	d3.select('#chart svg').datum([
	{
		key: "Car (driver)",
		color: "#fb6a4a",
		values:
		[
			{x: "Low", y: 13.11},
			{x: "Middle", y: 25.24},
			{x: "High", y: 33.65}
	  ]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Low", y: 7.36},
			{x: "Middle", y: 6.65},
			{x: "High", y: 6.39}
	  ]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Low", y: 0.89},
			{x: "Middle", y: 0.69},
			{x: "High", y: 0.21}
	  ]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Low", y: 2.45},
			{x: "Middle", y: 6.25},
			{x: "High", y: 7.93}
	  ]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Low", y: 3.36},
			{x: "Middle", y: 3.8},
			{x: "High", y: 2.66}
	  ]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Low", y: 11.72},
			{x: "Middle", y: 9.91},
			{x: "High", y: 13.09}
	  ]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Low", y: 8.66},
			{x: "Middle", y: 8.23},
			{x: "High", y: 9.52}
	  ]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Low", y: 1.88},
			{x: "Middle", y: 1.72},
			{x: "High", y: 1.11}
	  ]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Minutes per day by education level <div class="btn-group" role="group"><button onclick="educationTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="educationDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');
}