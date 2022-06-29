//================DOM ELEMENTS==========================
const overallLifespanChartDomEl = document.getElementById(
  "overall-lifespan-chart"
);

const productLifeSpanDomEl = document.getElementById("product-lifespan-chart");
const proportionrecycledDomEl = document.getElementById(
  "proportion-recycled-chart"
);
const recycledGenderChartDomEl = document.getElementById(
  "recycled-gender-chart"
);
const recycledRegionChartDomEl = document.getElementById(
  "recycled-region-chart"
);
const recycledAgeChartDomEl = document.getElementById("recycled-age-chart");

//================Generate the all products lifespan graph==========================
let productLifeSpanConfig = graphDataGenerator(
  false,
  "line",
  dellData.overallData.productLifespan,
  productLifespanGraphLabels,
  overallLifespanAxis
);
let productLifespanChart = new Chart(
  productLifeSpanDomEl,
  productLifeSpanConfig
);

//================Generate the proportion recycled graph==========================
// proportionrecycledDomEl;
let proportionRecycledConfig = graphDataGenerator(
  true,
  "bar",
  dellData.overallData.proportionRecycled,
  proportionRecycledGraphLabels,
  proportionRecycledAxis,
  true
);
// console.log(proportionRecycledConfig);
let proportionRecycledChart = new Chart(
  proportionrecycledDomEl,
  proportionRecycledConfig
);
//================Generate the demographics: gender graph==========================
// recycledGenderChartDomEl;
let recycledGenderConfig = graphDataGenerator(
  true,
  "bar",
  dellData.overallData.demographics.gender,
  recycledGenderGraphLabels,
  recycledGenderAxis,
  true
);
let recycledGenderChart = new Chart(
  recycledGenderChartDomEl,
  recycledGenderConfig
);

//================Generate the demographics: region graph==========================
// recycledRegionChartDomEl;

let recycledRegionConfig = graphDataGenerator(
  true,
  "bar",
  dellData.overallData.demographics.region,
  recycledRegionGraphLabels,
  recycledRegionAxis,
  true
);
let recycledRegionChart = new Chart(
  recycledRegionChartDomEl,
  recycledRegionConfig
);
//================Generate the demographics: age graph==========================
// recycledAgeChartDomEl;
let recycledAgeConfig = graphDataGenerator(
  true,
  "bar",
  dellData.overallData.demographics.age,
  recycledAgeGraphLabels,
  recycledAgeAxis,
  true
);
let recycledAgeChart = new Chart(recycledAgeChartDomEl, recycledAgeConfig);

//================Generate the first graph==========================
//Graph 1: The lifespan of the products
//Get the labels
const graph1Labels = overallLifespanAxis;
const graph1Dataset = { datasets: [] };
let index = 0;
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
    lineTension: 0.4,
    borderColor: productColors[index],
    backgroundColor: productColors[index],
  };
  graph1Dataset.datasets.push(entry);
  index += 1;
}

graph1Dataset.labels = graph1Labels;

const graph1Data = {
  type: "line",
  data: graph1Dataset,
  options: {
    scales: {
      y: {
        title: {
          text: overallLifespanGraphLabels[1],
          display: true,
        },
      },
      x: {
        title: {
          text: overallLifespanGraphLabels[0],
          display: true,
        },
      },
    },
    // responsive: true,
    // maintainAspectRatio: false,
    onClick(e) {
      const points = overallLifespanChart.getElementsAtEventForMode(
        e,
        "nearest",
        { intersect: true },
        false
      );
      if (points.length) {
        const firstPoint = points[0];
        const label = overallLifespanChart.data.labels[firstPoint.index];
        const value =
          overallLifespanChart.data.datasets[firstPoint.datasetIndex].data[
            firstPoint.index
          ];

        //productSelected is the product that is clicked by the user on the graph
        const productSelected =
          overallLifespanChart.data.datasets[
            firstPoint.datasetIndex
          ].label.toLowerCase();
        // console.log(productSelected);

        //This function aims to change the other colors to grey and also update the chosen graph to its color
        for (let dataset in graph1Dataset.datasets) {
          // console.log(graph1Dataset.datasets[dataset]);
          let x = graph1Dataset.datasets[dataset];
          console.log(x);
          if (x.label != productSelected.toUpperCase()) {
            x.borderColor = "#a9a9a9";
            x.backgroundColor = "#a9a9a9";
          } else {
            if (productSelected == "lattitude") {
              x.borderColor = productColors[0];
              x.backgroundColor = productColors[0];
            } else if (productSelected == "inspiron") {
              x.borderColor = productColors[1];
              x.backgroundColor = productColors[1];
            } else {
              x.borderColor = productColors[2];
              x.backgroundColor = productColors[2];
            }
          }
        }
        overallLifespanChart.update();

        const productSelectedData = dellData.products[productSelected];

        productLifespanChart.destroy();
        productLifeSpanConfig = graphDataGenerator(
          false,
          "line",
          productSelectedData.productLifespan,
          productLifespanGraphLabels,
          overallLifespanAxis,
          false,
          productSelected
        );
        productLifespanChart = new Chart(
          productLifeSpanDomEl,
          productLifeSpanConfig
        );

        proportionRecycledChart.destroy();
        proportionRecycledConfig = graphDataGenerator(
          true,
          "bar",
          productSelectedData.proportionRecycled,
          proportionRecycledGraphLabels,
          proportionRecycledAxis,
          true
        );
        proportionRecycledChart = new Chart(
          proportionrecycledDomEl,
          proportionRecycledConfig
        );

        recycledGenderChart.destroy();
        recycledGenderConfig = graphDataGenerator(
          true,
          "bar",
          productSelectedData.demographics.gender,
          recycledGenderGraphLabels,
          recycledGenderAxis,
          true
        );
        recycledGenderChart = new Chart(
          recycledGenderChartDomEl,
          recycledGenderConfig
        );

        recycledRegionChart.destroy();
        recycledRegionConfig = graphDataGenerator(
          true,
          "bar",
          productSelectedData.demographics.region,
          recycledRegionGraphLabels,
          recycledRegionAxis,
          true
        );
        recycledRegionChart = new Chart(
          recycledRegionChartDomEl,
          recycledRegionConfig
        );

        recycledAgeChart.destroy();
        recycledAgeConfig = graphDataGenerator(
          true,
          "bar",
          productSelectedData.demographics.age,
          recycledAgeGraphLabels,
          recycledAgeAxis,
          true
        );
        recycledAgeChart = new Chart(recycledAgeChartDomEl, recycledAgeConfig);
      }
    },
  },
};

const overallLifespanChart = new Chart(overallLifespanChartDomEl, graph1Data);
