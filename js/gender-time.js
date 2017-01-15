function genderTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.yAxis.tickFormat(d3.format(".2s"));
		chart.tooltip.valueFormatter(function (d) { return d > 0 ? d : 0; });
	;

	d3.select('#chart svg').datum([
  {
    key: "Car (driver)",
    color: "#fb6a4a",
    values:
     [
      {x: "Male", y: 25.19},
      {x: "Female", y: 14.83},
     ]
  },
  {
    key: "Car (passenger)",
    color: "#fc9272",
    values:
     [
      {x: "Male", y: 6.21},
      {x: "Female", y: 10.72},
     ]
  },
  {
    key: "Moped",
    color: "#fcbba1",
    values:
     [
      {x: "Male", y: 0.64},
      {x: "Female", y: 0.41},
     ]
  },
  {
    key: "Train",
    color: "#6baed6",
    values:
     [
      {x: "Male", y: 4.65},
      {x: "Female", y: 4.79},
     ]
  },
  {
    key: "Bus/tram/metro",
    color: "#9ecae1",
    values:
     [
      {x: "Male", y: 2.52},
      {x: "Female", y: 3.58},
     ]
  },
  {
    key: "Bicycle",
    color: "#74c476",
    values:
     [
      {x: "Male", y: 12.59},
      {x: "Female", y: 11.98},
     ]
  },
  {
    key: "Walking",
    color: "#a1d99b",
    values:
     [
      {x: "Male", y: 8.32},
      {x: "Female", y: 10.06},
     ]
  },
  {
    key: "Other",
    color: "#bcbddc",
    values:
     [
      {x: "Male", y: 2.21},
      {x: "Female", y: 1.12}, 
     ]
  }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Minutes per day by gender <div class="btn-group" role="group"><button onclick="genderTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="genderDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

  $('#chart-definitions').html('');

}