//Arguemnts:
//Type of graph, options(?), data
//

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

const graphDataGenerator = function (graphTypeInput, jsonData, axisLabels) {
  const configData = { labels: axisLabels, datasets: [] };

  // const graphName = graphName;
  for (let dataEntry in jsonData) {
    const dataPoints = [];
    // labels.push(dataEntry);
    for (let dataPoint in jsonData[dataEntry]) {
      dataPoints.push(jsonData[dataEntry][dataPoint]);
    }
    // console.log(dataEntry);
    const newEntry = {
      label: dataEntry,
      data: dataPoints,
      borderColor: random_rgba(),
    };
    configData.datasets.push(newEntry);
  }

  const toReturn = {
    type: graphTypeInput,
    data: configData,
    options: {},
  };
  return toReturn;
};
