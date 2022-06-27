const graphDataGenerator = function (
  graphLegendBool,
  graphTypeInput,
  jsonData,
  axesLabels,
  xAxisLabels,
  stacked = false,
  productLine
) {
  // console.log(productLine);
  // console.log(axesLabels);
  const configData = { labels: xAxisLabels, datasets: [] };
  let graphScales = {};
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

    graphScales.x = {
      stacked: true,
      title: {
        display: true,
        text: axesLabels[0],
      },
    };
    graphScales.y = {
      stacked: true,
      title: {
        display: true,
        text: axesLabels[1],
      },
    };
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
        backgroundColor: productLineColors[productIndex][index],
        tension: 0.5,
      };
      configData.datasets.push(newEntry);
      index += 1;
    }

    // let graphScales = {};
    graphScales.x = {
      title: {
        display: true,
        text: axesLabels[0],
      },
    };
    graphScales.y = {
      title: {
        display: true,
        text: axesLabels[1],
      },
    };
  }

  console.log(graphScales);
  const toReturn = {
    type: graphTypeInput,
    data: configData,
    options: {
      scales: graphScales,
      responsive: true,
      plugins: {
        legend: {
          display: graphLegendBool,
        },
      },
    },
  };

  // if (stacked == true) {
  //   toReturn.options.scales.x = { stacked: true };
  //   toReturn.options.scales.y = { stacked: true };
  // }
  // console.log(toReturn);

  // toReturn.options.scales.y.title = {
  //   text: axesLabels[1],
  //   display: true,
  // };
  // toReturn.options.scales.x.title = {
  //   text: axesLabels[0],
  //   display: true,
  // };

  console.log(toReturn);
  return toReturn;
};
