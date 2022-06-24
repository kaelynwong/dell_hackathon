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
  "line",
  dellData.overallData.productLifespan,
  overallLifespanAxis
);
let productLifespanChart = new Chart(
  productLifeSpanDomEl,
  productLifeSpanConfig
);

//================Generate the proportion recycled graph==========================
// proportionrecycledDomEl;
let proportionRecycledConfig = graphDataGenerator(
  "bar",
  dellData.overallData.proportionRecycled,
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
  "bar",
  dellData.overallData.demographics.gender,
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
  "bar",
  dellData.overallData.demographics.region,
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
  "bar",
  dellData.overallData.demographics.age,
  recycledAgeAxis,
  true
);
let recycledAgeChart = new Chart(recycledAgeChartDomEl, recycledAgeConfig);

//================Generate the first graph==========================
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
    borderColor: random_rgb(),
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
      // let existingGraphs = false;
      // console.log(existingGraphs);
      if (points.length) {
        // if (existingGraphs) {
        //   console.log("GRAPHS EXISTS!");
        //   productLifespanChart.destroy();
        //   proportionRecycledChart.destroy();
        //   recycledGenderChart.destroy();
        //   recycledRegionChart.destroy();
        //   recycledAgeChart.destroy();
        // }
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
        const productSelectedData = dellData.products[productSelected];
        // console.log(productSelectedData.productLifespan);
        //TODO: Change all these graphs into

        productLifespanChart.destroy();
        productLifeSpanConfig = graphDataGenerator(
          "line",
          productSelectedData.productLifespan,
          overallLifespanAxis
        );
        productLifespanChart = new Chart(
          productLifeSpanDomEl,
          productLifeSpanConfig
        );

        proportionRecycledChart.destroy();
        proportionRecycledConfig = graphDataGenerator(
          "bar",
          productSelectedData.proportionRecycled,
          proportionRecycledAxis
        );
        proportionRecycledChart = new Chart(
          proportionrecycledDomEl,
          proportionRecycledConfig
        );

        recycledGenderChart.destroy();
        recycledGenderConfig = graphDataGenerator(
          "bar",
          productSelectedData.demographics.gender,
          recycledGenderAxis
        );
        recycledGenderChart = new Chart(
          recycledGenderChartDomEl,
          recycledGenderConfig
        );

        recycledRegionChart.destroy();
        recycledRegionConfig = graphDataGenerator(
          "bar",
          productSelectedData.demographics.region,
          recycledRegionAxis
        );
        recycledRegionChart = new Chart(
          recycledRegionChartDomEl,
          recycledRegionConfig
        );

        recycledAgeChart.destroy();
        recycledAgeConfig = graphDataGenerator(
          "bar",
          productSelectedData.demographics.age,
          recycledAgeAxis
        );
        recycledAgeChart = new Chart(recycledAgeChartDomEl, recycledAgeConfig);
        // console.log("Created graphs");
        // existingGraphs = true;
        // console.log(existingGraphs);
      }
    },
  },
};

const overallLifespanChart = new Chart(overallLifespanChartDomEl, graph1Data);
