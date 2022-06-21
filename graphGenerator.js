//Arguemnts:
//Type of graph, options(?), data
//

const graphDataGenerator = function (
  graphTypeInput,
  jsonData,
  graphName,
  axisLabels
) {
  const graphType = graphTypeInput;
  const axis = axisLabels; //This labels refer to the AXIS

  const graphDatasets = [];

  // const graphName = graphName;
  for (let dataEntry in jsonData) {
    const dataPoints = [];
    // labels.push(dataEntry);
    const newEntry = { label: jsonData[dataEntry], data: dataPoints };
    graphDatasets.push(newEntry);
  }

  const toReturn = { labels: axis, datasets: graphDatasets };
  return toReturn;
};
