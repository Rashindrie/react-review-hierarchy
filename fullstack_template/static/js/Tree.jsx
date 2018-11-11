import React, {Component} from "react";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app
import {reviews, centroid_reviews} from "./FormatData";
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {Dropdown, Button, NavItem, Icon} from 'react-materialize'

export default class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: reviews,
            centroidTreeData: centroid_reviews
        };
    }

    render() {
        return (
            <div>
                <div align="right" class="col s6">
                    <Dropdown trigger={
                        <Button floating icon={"label_outline"}/>
                    }>
                        <NavItem onClick={()=> {document.getElementById("customized").style.display='block';document.getElementById("centroid").style.display='none'}}>Customized label</NavItem>
                        <NavItem divider/>
                        <NavItem onClick={()=> {document.getElementById("customized").style.display='none';document.getElementById("centroid").style.display='block'}}>Centroid-Based label</NavItem>
                    </Dropdown>
                </div>

                <div id="customized" style={{display: 'block'}}>
                    <Collapsible>
                        <CollapsibleItem header='Restaurant' icon='restaurant_menu'>
                            <div style={{height: 800}}>
                                <SortableTree
                                    treeData={this.state.treeData}
                                    onChange={treeData => this.setState({treeData})}
                                    rowHeight={75}
                                />
                            </div>
                        </CollapsibleItem>
                    </Collapsible>
                </div>

                <div id={"centroid"} style={{display: 'none'}}>
                    <Collapsible>
                        <CollapsibleItem header='Restaurant' icon='restaurant_menu'>
                            <div style={{height: 800}}>
                                <SortableTree
                                    treeData={this.state.centroidTreeData}
                                    onChange={centroidTreeData => this.setState({centroidTreeData})}
                                    rowHeight={75}
                                />
                            </div>
                        </CollapsibleItem>
                    </Collapsible>
                </div>
            </div>


        );
    }
}

