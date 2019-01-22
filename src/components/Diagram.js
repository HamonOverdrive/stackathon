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
      let node = new SRD.DefaultNodeModel(e['name'], "rgb(0,192,255)")
      let port1 = node.addOutPort(e['port']);
      node.setPosition(100, 100);
      model.addNode(node)
    })
    // var node1 = new SRD.DefaultNodeModel("Node 1", "rgb(0,192,255)");
    // let port1 = node1.addOutPort("Out");
    // node1.setPosition(100, 100);

    // 4) create another default node
    // var node2 = new SRD.DefaultNodeModel("Node 2", "rgb(192,255,0)");
    // let port2 = node2.addInPort("In");
    // node2.setPosition(400, 100);

    // 5) link the ports
    // let link1 = port1.link(port2);

    // 6) add the models to the root graph
    // model.addAll(node1, node2, link1);
    // 7) load model into engine
    engine.setDiagramModel(model);
  }

  componentDidUpdate (prevProps) {
    // check if the listDiagram store has increased in size and render the new node onto the diagram from the last new item
    if(this.props.listDiagram > prevProps.listDiagram){
      let lastObj = this.props.listDiagram[this.props.listDiagram.length -1]

      let node = new SRD.DefaultNodeModel(lastObj['name'], "rgb(0,192,255)")
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
