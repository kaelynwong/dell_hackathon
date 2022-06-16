nv.addGraph(function () {
  var chart = nv.models.lineChart().useInteractiveGuideline(true);
  chart.xAxis.axisLabel("Time (ms)").tickFormat(d3.format(",r"));

  chart.yAxis.axisLabel("Voltage (v)").tickFormat(d3.format(".02f"));

  d3.select("#line-chart svg")
    .datum(dataLineChart())
    .transition()
    .duration(500)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

nv.addGraph(function () {
  var chart = nv.models
    .discreteBarChart()
    .x(function (d) {
      return d.label;
    })
    .y(function (d) {
      return d.value;
    })
    .staggerLabels(true)
    .tooltips(false)
    .showValues(true);

  d3.select("#bar-chart svg")
    .datum(barChartData)
    .transition()
    .duration(500)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});
