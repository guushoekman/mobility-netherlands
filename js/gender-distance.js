function genderDistance() {

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
      {x: "Male", y: 20.59},
      {x: "Female", y: 10.08},
     ]
  },
  {
    key: "Car (passenger)",
    color: "#fc9272",
    values:
     [
      {x: "Male", y: 4.31},
      {x: "Female", y: 7.89},
     ]
  },
  {
    key: "Moped",
    color: "#fcbba1",
    values:
     [
      {x: "Male", y: 0.83},
      {x: "Female", y: 0.13},
     ]
  },
  {
    key: "Train",
    color: "#6baed6",
    values:
     [
      {x: "Male", y: 2.66},
      {x: "Female", y: 2.67},
     ]
  },
  {
    key: "Bus/tram/metro",
    color: "#9ecae1",
    values:
     [
      {x: "Male", y: 0.83},
      {x: "Female", y: 0.99},
     ]
  },
  {
    key: "Bicycle",
    color: "#74c476",
    values:
     [
      {x: "Male", y: 2.72},
      {x: "Female", y: 2.38},
     ]
  },
  {
    key: "Walking",
    color: "#a1d99b",
    values:
     [
      {x: "Male", y: 0.76},
      {x: "Female", y: 0.86},
     ]
  },
  {
    key: "Other",
    color: "#bcbddc",
    values:
     [
      {x: "Male", y: 1.44},
      {x: "Female", y: 0.43}, 
     ]
  }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Kilometres per day by gender <div class="btn-group" role="group"><button onclick="genderTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="genderDistance()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

}