//Arguemnts:
//Type of graph, options(?), data
//

const graphDataGenerator = function (graphTypeInput, jsonData, axisLabels) {
  const configData = { labels: axisLabels, datasets: [] };

  if (graphTypeInput == "bar") {
    const colors = [];
    const colorGenerated = random_rgb();

    for (let dataEntry in jsonData) {
      const dataPoints = [];

      for (let dataPoint in jsonData[dataEntry]) {
        dataPoints.push(jsonData[dataEntry][dataPoint]);
        colors.push(colorGenerated);
      }
      const newEntry = {
        label: dataEntry,
        data: dataPoints,
        backgroundColor: colors,
      };
      configData.datasets.push(newEntry);
    }
  } else {
    //This will be line charts
    for (let dataEntry in jsonData) {
      const dataPoints = [];

      for (let dataPoint in jsonData[dataEntry]) {
        dataPoints.push(jsonData[dataEntry][dataPoint]);
      }
      const newEntry = {
        label: dataEntry,
        data: dataPoints,
        borderColor: random_rgb(),
      };
      configData.datasets.push(newEntry);
    }
  }

  const toReturn = {
    type: graphTypeInput,
    data: configData,
    options: {},
  };
  return toReturn;
};
