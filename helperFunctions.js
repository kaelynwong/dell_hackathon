function random_rgb() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

const overallLifespanAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const productLIfespanAxis = overallLifespanAxis;
const proportionRecycledAxis = [
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
];
const recycledGenderAxis = ["Male", "Female"];
const recycledAgeAxis = [
  "Below 16",
  "16-20",
  "21-30",
  "31-40",
  "41-50",
  "Above 50",
];
const recycledRegionAxis = ["EMEA", "DAO", "APJ"];

const overallLifespanGraphLabels = [
  "Number of years product owned",
  "Frequency (%)",
];
const productLifespanGraphLabels = [
  "Number of years product owned",
  "Frequency (%)",
];
const proportionRecycledGraphLabels = [
  "Year at which products are predicted to fail",
  "No. of products (10 thousands)",
];
const recycledGenderGraphLabels = ["Gender", "Amount Recycled/Discarded (%)"];
const recycledAgeGraphLabels = ["Age Range", "Amount Recycled/Discarded (%)"];
const recycledRegionGraphLabels = ["Region", "Amount Recycled/Discarded (%)"];
