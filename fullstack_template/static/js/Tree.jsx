import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app
import {reviews} from "./FormatData";

export default class Tree extends Component {
  constructor(props) {
    super(props);
    console.log(reviews);
    this.state = {
      treeData: reviews,
    };
  }

  render() {
    return (
      <div style={{  }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}

