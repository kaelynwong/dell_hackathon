const graphDataGenerator = function (
  graphTypeInput,
  jsonData,
  axisLabels,
  stacked = false
) {
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

  if (stacked == true) {
    toReturn.options.scales = {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    };
  }
  return toReturn;
};
