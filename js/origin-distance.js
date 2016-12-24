function originDistance() {

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
			{x: "Native", y: 16.44},
			{x: "Western immigrant", y: 14.6},
			{x: "Non-western immigrant", y: 8.45}
	  ]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Native", y: 6.26},
			{x: "Western immigrant", y: 6},
			{x: "Non-western immigrant", y: 5.26}
	  ]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Native", y: 0.18},
			{x: "Western immigrant", y: 0},
			{x: "Non-western immigrant", y: 0}
	  ]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Native", y: 2.64},
			{x: "Western immigrant", y: 3},
			{x: "Non-western immigrant", y: 2.58}
	  ]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Native", y: 0.73},
			{x: "Western immigrant", y: 0.86},
			{x: "Non-western immigrant", y: 2.14}
	  ]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Native", y: 2.71},
			{x: "Western immigrant", y: 2.34},
			{x: "Non-western immigrant", y: 1.68}
	  ]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Native", y: 0.78},
			{x: "Western immigrant", y: 0.85},
			{x: "Non-western immigrant", y: 0.97}
	  ]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Native", y: 0.97},
			{x: "Western immigrant", y: 0},
			{x: "Non-western immigrant", y: 0.94}
	  ]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Kilometres per day by origin <div class="btn-group" role="group"><button onclick="originTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="originDistance()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

}