function originDistance() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of kilometres per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.yAxis.tickFormat(d3.format(".2s"));
		chart.tooltip.valueFormatter(function (d) { return d > 0 ? d : 0; })
		if ($(window).width() <=400) {
		  chart.staggerLabels(true);
		};
	;

	d3.select('#chart svg').datum([
	{
		key: "Car (driver)",
		color: "#fb6a4a",
		values:
		[
			{x: "Native Dutch", y: 16.44},
			{x: "Western foreigner", y: 14.6},
			{x: "Non-western foreigner", y: 8.45}
	  ]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Native Dutch", y: 6.26},
			{x: "Western foreigner", y: 6},
			{x: "Non-western foreigner", y: 5.26}
	  ]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Native Dutch", y: 0.18},
			{x: "Western foreigner", y: 0},
			{x: "Non-western foreigner", y: 0}
	  ]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Native Dutch", y: 2.64},
			{x: "Western foreigner", y: 3},
			{x: "Non-western foreigner", y: 2.58}
	  ]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Native Dutch", y: 0.73},
			{x: "Western foreigner", y: 0.86},
			{x: "Non-western foreigner", y: 2.14}
	  ]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Native Dutch", y: 2.71},
			{x: "Western foreigner", y: 2.34},
			{x: "Non-western foreigner", y: 1.68}
	  ]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Native Dutch", y: 0.78},
			{x: "Western foreigner", y: 0.85},
			{x: "Non-western foreigner", y: 0.97}
	  ]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Native Dutch", y: 0.97},
			{x: "Western foreigner", y: 0},
			{x: "Non-western foreigner", y: 0.94}
	  ]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Kilometres per day by origin <div class="btn-group" role="group"><button onclick="originTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="originDistance()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

	$('#chart-definitions').html('<h3>Notes and definitons</h3><p>Until 2016, the Dutch government used the phrases <i>autochtoon</i> and <i>allochtoon</i> to caterogise people based on their origin. <i>Autochtoon</i> translates to the English autochthonous, meaning indigenous or native. <i>Allochtoon</i> is harder to translate but is basically someone whose country of origin is <i>not</i> the Netherlands. A person!s country of origin is determined by looking at the place of birth of the parents. If both parents are born outside of the Netherlands the place of birth of the mother is taken to determine if the person in question is a Western or non Western <i>allochtoon</i>. As of 2016, the term <i>allochtoon</i> is no longer used by the Dutch government. It <i>is</i> used here because the data is from 2015.</p><dl class="row"><dt class="col-sm-3">Native Dutch</dt><dd class="col-sm-9">person whose parents are both born in the Netherlands</dd><dt class="col-sm-3">Western foreigner</dt><dd class="col-sm-9">person whose country of origin is in Europe (except Turkey), North-America, Oceania, Japan or Indonesia</dd><dt class="col-sm-3">Non-western foreigner</dt><dd class="col-sm-9">person whose country of origin is in Africa, Asia (except Japan and Indonesia), Latin-America or Turkey</dd></dl>');
}