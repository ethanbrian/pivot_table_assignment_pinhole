import React from "react";
import {
  IDataOptions,
  PivotViewComponent,
} from "@syncfusion/ej2-react-pivotview";
import "./App.css";

export let pivotData = [
  {
    sales: 261.96,
    quantity: 52824,
    Category: "Furniture",
    subCategory: "Book Cases",
    state: "Kentucky",
  },
  {
    sales: 20,
    quantity: 1,
    Category: "Office Supplies",
    subCategory: "Art",
    state: "New York",
  },
  {
    sales: 48.48,
    quantity: 4,
    Category: "Office Supplies",
    subCategory: "Binders",
    state: "New York",
  },
  {
    sales: 31,
    quantity: 52824,
    Category: "Furniture",
    subCategory: "Book Cases",
    state: "Kentucky",
  },
  {
    sales: 83.92,
    quantity: 4,
    Category: "Office Supplies",
    subCategory: "Storage",
    state: "Michigan",
  },
  {
    sales: 6.096,
    quantity: 3,
    Category: "Furniture",
    subCategory: "Furnishings",
    state: "Michigan",
  },
  {
    sales: 41.568,
    quantity: 2,
    Category: "Furniture",
    subCategory: "Furnishings",
    state: "California",
  },
  {
    sales: 230.28,
    quantity: 3,
    Category: "Furniture",
    subCategory: "Chairs",
    state: "California",
  },
  {
    sales: 18.288,
    quantity: 6,
    Category: "Office Supplies",
    subCategory: "Binders",
    state: "California",
  },
  {
    sales: 5.78,
    quantity: 2,
    Category: "Office Supplies",
    subCategory: "Labels",
    state: "California",
  },
  {
    sales: 121.68,
    quantity: 13,
    Category: "Office Supplies",
    subCategory: "Binders",
    state: "California",
  },
  {
    sales: 4.17,
    quantity: 3,
    Category: "Office Supplies",
    subCategory: "Art",
    state: "New Mexico",
  },
  {
    sales: 67.04,
    quantity: 4,
    Category: "Technology",
    subCategory: "Phones",
    state: "New Mexico",
  },
  {
    sales: 37.32,
    quantity: 3,
    Category: "Office Supplies",
    subCategory: "Storage",
    state: "New Mexico",
  },
  {
    sales: 18.45,
    quantity: 5,
    Category: "Office Supplies",
    subCategory: "Labels",
    state: "California",
  },
  {
    sales: 25.92,
    quantity: 4,
    Category: "Office Supplies",
    subCategory: "Paper",
    state: "Missouri",
  },
  {
    sales: 11199.968,
    quantity: 4,
    Category: "Technology",
    subCategory: "Copiers",
    state: "New York",
  },
  {
    sales: 63.9,
    quantity: 5,
    Category: "Office Supplies",
    subCategory: "Envelopes",
    state: "New York",
  },
  {
    sales: 60.34,
    quantity: 7,
    Category: "Office Supplies",
    subCategory: "Appliances",
    state: "Nebraska",
  },
  {
    sales: 52.99,
    quantity: 1,
    Category: "Technology",
    subCategory: "phones",
    state: "New York",
  },
  {
    sales: 60.864,
    quantity: 4,
    Category: "Technology",
    subCategory: "Accessories",
    state: "Ohio",
  },
  {
    sales: 5.78,
    quantity: 2,
    Category: "Technology",
    subCategory: "Machines",
    state: "Ohio",
  },
  {
    sales: 731.94,
    quantity: 2,
    Category: "Furniture",
    subCategory: "Chairs",
    state: "Kentucky",
  },
  {
    sales: 957.5775,
    quantity: 2,
    Category: "Furniture",
    subCategory: "Tables",
    state: "Florida",
  },
  {
    sales: 22.368,
    quantity: 2,
    Category: "Office Supplies",
    subCategory: "Storage",
    state: "Florida",
  },
];

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.dataSourceSettings = {
      columns: [{ name: "state", caption: "states" }],
      dataSource: pivotData,
      expandAll: false,
      filters: [],
      drilledMembers: [{ name: "Country", items: ["France"] }],
      formatSettings: [{ name: "Amount", format: "C0" }],
      rows: [{ name: "Category" }, { name: "subCategory" }],
      values: [{ name: "sales", caption: "Sold Amount" }],
    };
  }
  render() {
    return (
      <PivotViewComponent
        ref={(d) => (this.pivotObj = d)}
        id="PivotView"
        height={350}
        dataSourceSettings={this.dataSourceSettings}
      ></PivotViewComponent>
    );
  }
}
export default App;
