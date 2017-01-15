function monthTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.yAxis.tickFormat(d3.format(".2s"));
		chart.tooltip.valueFormatter(function (d) { return d > 0 ? d : 0; });
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
      {x: "January", y: 18.94},
      {x: "February", y: 19.14},
      {x: "March", y: 19.36},
      {x: "April", y: 19.84},
      {x: "May", y: 18.75},
      {x: "June", y: 22.57},
      {x: "July", y: 19.53},
      {x: "August", y: 18.25},
      {x: "September", y: 21.68},
      {x: "October", y: 20.71},
      {x: "November", y: 21.49},
      {x: "December", y: 19.42}
    ]
  },
  {
    key: "Car (passenger)",
    color: "#fc9272",
    values:
    [
      {x: "January", y: 8.07},
      {x: "February", y: 8.06},
      {x: "March", y: 9.37},
      {x: "April", y: 8.62},
      {x: "May", y: 9.63},
      {x: "June", y: 8.82},
      {x: "July", y: 7.76},
      {x: "August", y: 7.91},
      {x: "September", y: 8.3},
      {x: "October", y: 8.05},
      {x: "November", y: 8.36},
      {x: "December", y: 8.72}
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
      {x: "January", y: 4.14},
      {x: "February", y: 4.6},
      {x: "March", y: 6.15},
      {x: "April", y: 4.66},
      {x: "May", y: 4.01},
      {x: "June", y: 4.21},
      {x: "July", y: 3.85},
      {x: "August", y: 3.74},
      {x: "September", y: 6.44},
      {x: "October", y: 5.47},
      {x: "November", y: 5},
      {x: "December", y: 4.22}
    ]
  },
  {
    key: "Bus/tram/metro",
    color: "#9ecae1",
    values:
    [
      {x: "January", y: 3.66},
      {x: "February", y: 2.97},
      {x: "March", y: 2.93},
      {x: "April", y: 3.47},
      {x: "May", y: 2.72},
      {x: "June", y: 3.45},
      {x: "July", y: 3.02},
      {x: "August", y: 2.01},
      {x: "September", y: 2.8},
      {x: "October", y: 3.64},
      {x: "November", y: 3.16},
      {x: "December", y: 2.77}
    ]
  },
  {
    key: "Bicycle",
    color: "#74c476",
    values:
    [
      {x: "January", y: 9.32},
      {x: "February", y: 10.18},
      {x: "March", y: 12.54},
      {x: "April", y: 14.6},
      {x: "May", y: 13.05},
      {x: "June", y: 14.28},
      {x: "July", y: 12.27},
      {x: "August", y: 12.95},
      {x: "September", y: 13.46},
      {x: "October", y: 12.95},
      {x: "November", y: 11.17},
      {x: "December", y: 10.75}
    ]
  },
  {
    key: "Walking",
    color: "#a1d99b",
    values:
    [
      {x: "January", y: 8.05},
      {x: "February", y: 8.65},
      {x: "March", y: 9.24},
      {x: "April", y: 9.3},
      {x: "May", y: 11.36},
      {x: "June", y: 11.04},
      {x: "July", y: 7.94},
      {x: "August", y: 8.6},
      {x: "September", y: 8.97},
      {x: "October", y: 9.88},
      {x: "November", y: 8.79},
      {x: "December", y: 8.52}
    ]
  },
  {
    key: "Other",
    color: "#bcbddc",
    values:
    [
      {x: "January", y: 1.78},
      {x: "February", y: 0},
      {x: "March", y: 1.11},
      {x: "April", y: 1.71},
      {x: "May", y: 1.9},
      {x: "June", y: 2.47},
      {x: "July", y: 2.11},
      {x: "August", y: 2.22},
      {x: "September", y: 1.69},
      {x: "October", y: 1.74},
      {x: "November", y: 1.18},
      {x: "December", y: 0}
    ]
  }
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Minutes per day by month <div class="btn-group" role="group"><button onclick="monthTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="monthDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

  $('#chart-definitions').html('');
}