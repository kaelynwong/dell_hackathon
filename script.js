const overallLifespanChartDomEl = document.getElementById(
  "overall-lifespan-chart"
);

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

      if (points.length) {
        const firstPoint = points[0];
        const label = overallLifespanChart.data.labels[firstPoint.index];
        const value =
          overallLifespanChart.data.datasets[firstPoint.datasetIndex].data[
            firstPoint.index
          ];

        const productSelected =
          overallLifespanChart.data.datasets[
            firstPoint.datasetIndex
          ].label.toLowerCase();
        const productSelectedData = dellData.products[productSelected];
        console.log(productSelectedData);

        const productLifeSpanDomEl = document.getElementById(
          "product-lifespan-chart"
        );
        const proportionrecycledDomEl = document.getElementById(
          "proportion-recycled-chart"
        );
        const recycledGenderChartDomEl = document.getElementById(
          "recycled-gender-chart"
        );
        const recycledRegionChartDomEl = document.getElementById(
          "recycled-region-chart"
        );
        const recycledAgeChartDomEl =
          document.getElementById("recycled-age-chart");

        const productLifeSpanConfig = graphDataGenerator(
          "line",
          productSelectedData.productLifespan,
          ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"]
        );
        const productLifespanChart = new Chart(
          productLifeSpanDomEl,
          productLifeSpanConfig
        );

        const proportionRecycledConfig = graphDataGenerator(
          "bar",
          productSelectedData.proportionRecycled,
          [
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
          ]
        );
        console.log(proportionRecycledConfig);
        const proportionRecycledChart = new Chart(
          proportionrecycledDomEl,
          proportionRecycledConfig
        );

        const recycledGenderConfig = graphDataGenerator(
          "bar",
          productSelectedData.demographics.gender,
          ["Male", "Female"]
        );
        const recycledGenderChart = new Chart(
          recycledGenderChartDomEl,
          recycledGenderConfig
        );

        const recycledRegionConfig = graphDataGenerator(
          "bar",
          productSelectedData.demographics.region,
          ["EMEA", "DAO", "APJ"]
        );
        const recycledRegionChart = new Chart(
          recycledRegionChartDomEl,
          recycledRegionConfig
        );

        const recycledAgeConfig = graphDataGenerator(
          "bar",
          productSelectedData.demographics.age,
          ["Below 16", "16-20", "21-30", "31-40", "41-50", "Above 50"]
        );
        const recycledAgeChart = new Chart(
          recycledAgeChartDomEl,
          recycledAgeConfig
        );
      }
    },
  },
};

const overallLifespanChart = new Chart(overallLifespanChartDomEl, graph1Data);
