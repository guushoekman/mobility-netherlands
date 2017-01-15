function originTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
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
			{x: "Native Dutch", y: 21.02},
			{x: "Western foreigner", y: 19.81},
			{x: "Non-western foreigner", y: 13.36}
	  ]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Native Dutch", y: 8.38},
			{x: "Western foreigner", y: 8.64},
			{x: "Non-western foreigner", y: 9.01}
	  ]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Native Dutch", y: 0.52},
			{x: "Western foreigner", y: 0},
			{x: "Non-western foreigner", y: 0}
	  ]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Native Dutch", y: 4.62},
			{x: "Western foreigner", y: 5.06},
			{x: "Non-western foreigner", y: 5.07}
	  ]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Native Dutch", y: 2.16},
			{x: "Western foreigner", y: 2.92},
			{x: "Non-western foreigner", y: 8.96}
	  ]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Native Dutch", y: 12.48},
			{x: "Western foreigner", y: 12.17},
			{x: "Non-western foreigner", y: 11.09}
	  ]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Native Dutch", y: 8.8},
			{x: "Western foreigner", y: 9.55},
			{x: "Non-western foreigner", y: 11.46}
	  ]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Native Dutch", y: 1.69},
			{x: "Western foreigner", y: 0},
			{x: "Non-western foreigner", y: 1.96}
	  ]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Minutes per day by origin <div class="btn-group" role="group"><button onclick="originTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="originDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

	$('#chart-definitions').html('<h3>Notes and definitons</h3><p>Until 2016, the Dutch government used the phrases <i>autochtoon</i> and <i>allochtoon</i> to caterogise people based on their origin. <i>Autochtoon</i> translates to the English autochthonous, meaning indigenous or native. <i>Allochtoon</i> is harder to translate but is basically someone whose country of origin is <i>not</i> the Netherlands. A person!s country of origin is determined by looking at the place of birth of the parents. If both parents are born outside of the Netherlands the place of birth of the mother is taken to determine if the person in question is a Western or non Western <i>allochtoon</i>. As of 2016, the term <i>allochtoon</i> is no longer used by the Dutch government. It <i>is</i> used here since the data is from 2015. I have used the word foreigner, though <i>allochtoon</i> has more meaning to it. </p><dl class="row"><dt class="col-sm-3">Native Dutch</dt><dd class="col-sm-9">Person whose country of origin is the Netherlands</dd><dt class="col-sm-3">Western foreigner</dt><dd class="col-sm-9">Person whose country of origin is in Europe (except Turkey), North-America, Oceania, Japan or Indonesia</dd><dt class="col-sm-3">Non-western foreigner</dt><dd class="col-sm-9">Person whose country of origin is in Africa, Asia (except Japan and Indonesia), Latin-America or Turkey</dd></dl>');
}