import React, {Component} from 'react'
import * as SRD from "storm-react-diagrams"
require("storm-react-diagrams/dist/style.min.css")

// del key will remove anything selected including links

// shift and drag will trigger a multi selection box

// shift and select nodes/links/points will select multiple nodes

// drag canvas will drag the complete diagram

// mouse wheel will zoom in or out the entire diagram

// click link and drag will create a new link anchor/point that you can then drag around

// click node-port and drag will create a new link that is anchored to the port, allowing you to drag the link to another connecting port

// 1) setup the diagram engine
var engine = new SRD.DiagramEngine();
engine.installDefaultFactories();

// 2) setup the diagram model
var model = new SRD.DiagramModel();


class Diagram extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount(){
    const {listDiagram} = this.props
    // 3) create a default node

    listDiagram.map((e)=>{
      let rgbColor = "rgb(0,192,255)"
      if(e["side"] === false){
        rgbColor = "rgb(229, 3, 0)"
      }
      let node = new SRD.DefaultNodeModel(e['name'], rgbColor)
      let port1 = node.addOutPort(e['port']);
      node.setPosition(100, 100);
      model.addNode(node)
    })
    engine.setDiagramModel(model);
  }

  // do i need this here because the handleClick is in the upper component
  // how to update when only redux state is updating?
  componentDidUpdate (prevProps) {
    // check if the listDiagram store has increased in size and render the new node onto the diagram from the last new item
    if(this.props.listDiagram.length > prevProps.listDiagram.length){
      let lastObj = this.props.listDiagram[this.props.listDiagram.length -1]
      let rgbColor = "rgb(0,192,255)"
      if(lastObj["side"] === false){
        rgbColor = "rgb(229, 3, 0)"
      }

      let node = new SRD.DefaultNodeModel(lastObj['name'], rgbColor)
      let port1 = node.addOutPort(lastObj['port']);
      node.setPosition(100, 100);
      model.addNode(node)
    }
    engine.setDiagramModel(model);
}

  render() {
    return (
      <div>
        <SRD.DiagramWidget diagramEngine={engine} />
      </div>
    )
  }
}

export default Diagram
