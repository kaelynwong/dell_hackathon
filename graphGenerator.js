const graphDataGenerator = function (
  graphTypeInput,
  jsonData,
  axisLabels,
  stacked = false,
  productLine
) {
  // console.log(productLine);
  const configData = { labels: axisLabels, datasets: [] };
  if (graphTypeInput == "bar") {
    const colors = [];
    // const colorGenerated = random_rgb();
    // console.log(jsonData);
    let index = 0;
    for (let dataEntry in jsonData) {
      const dataPoints = [];
      // console.log(barChartColors[index]);
      for (let dataPoint in jsonData[dataEntry]) {
        dataPoints.push(jsonData[dataEntry][dataPoint]);
        colors.push(barChartColors[index]);
      }
      const newEntry = {
        label: dataEntry,
        data: dataPoints,
        // backgroundColor: colors,
        backgroundColor: barChartColors[index],
      };
      configData.datasets.push(newEntry);
      index += 1;
    }
  } else {
    //This will be line charts
    let productIndex;

    // console.log(productLine);
    if (productLine == "lattitude") {
      productIndex = 0;
    } else if (productLine == "inspiron") {
      productIndex = 1;
    } else if (productLine == "xps") {
      //productLine == 'xps'
      productIndex = 2;
    } else {
      productIndex = 3;
    }

    // console.log(productLineColors[productIndex]);
    let index = 0;
    for (let dataEntry in jsonData) {
      const dataPoints = [];

      for (let dataPoint in jsonData[dataEntry]) {
        dataPoints.push(jsonData[dataEntry][dataPoint]);
      }
      const newEntry = {
        label: dataEntry,
        data: dataPoints,
        borderColor: productLineColors[productIndex][index],
        tension: 0.5,
      };
      configData.datasets.push(newEntry);
      index += 1;
    }
  }

  const toReturn = {
    type: graphTypeInput,
    data: configData,
    options: { responsive: true },
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
