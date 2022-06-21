function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

//Graph 1: The lifespan of the products
//Get the labels
const graph1Labels = [1, 2, 3, 4, 5];
const graph1Dataset = { datasets: [] };

for (let prod in dellData.products) {
  const currProd = dellData.products[prod];

  const lifespanData = [];
  const currProdLifespanData = currProd.lifespan;
  for (let year in currProdLifespanData) {
    lifespanData.push(currProdLifespanData[year]);
  }

  let entry = {
    label: prod.toUpperCase(),
    data: lifespanData,
    tension: 0.5,
    borderColor: random_rgba(),
  };
  graph1Dataset.datasets.push(entry);
}

graph1Dataset.labels = graph1Labels;

const graph1Data = {
  type: "line",
  data: graph1Dataset,
  options: {
    onClick(e) {
      const points = overallLifespanChart.getElementsAtEventForMode(
        e,
        "nearest",
        { intersect: true },
        false
      );
      // console.log("Click handler");

      if (points.length) {
        // console.log("Inside handler");
        const firstPoint = points[0];
        const label = overallLifespanChart.data.labels[firstPoint.index];
        const value =
          overallLifespanChart.data.datasets[firstPoint.datasetIndex].data[
            firstPoint.index
          ];
        console.log(firstPoint, label, value);
        console.log(
          overallLifespanChart.data.datasets[firstPoint.datasetIndex]
        );
        // console.log(myChart1.config.type);
        // myChart.config.type = "bar";
        // myChart.update();
      }
    },
  },
};

// const graph1Config = graphDataGenerator("line");

const overallLifespanChartDomEl = document.getElementById(
  "overall-lifespan-chart"
);
const overallLifespanChart = new Chart(overallLifespanChartDomEl, graph1Data);
// Get the dataset

// const testData = graphDataGenerator(
//   "bar",
//   dellData.products.lattitude.productLifespan,
//   "testname",
//   ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"]
// );

const generateGraph = function () {
  const testConfig = graphDataGenerator(
    "line",
    dellData.products.lattitude.demographics.region,
    "testname",
    ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"]
  );
  const testEl = document.getElementById("product-lifespan-chart");
  const testGraph = new Chart(testEl, testConfig);
};

generateGraph();
