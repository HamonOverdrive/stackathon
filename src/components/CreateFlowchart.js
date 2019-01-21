import React, {Component} from 'react'
import {Button, Container, Menu, Visibility, Segment, Image, Divider, Grid, Header, Dropdown} from 'semantic-ui-react'
import {DiagramContainer} from '../containers'

class CreateFlowchart extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      optionList: []
    }

    // Bind this to function updateData (This eliminates the error)
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount(){

    // Your parse code, but not seperated in a function
    var csvFilePath = require("./dragunov1.csv");
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      // Here this is also available. So we can call our custom class method
      complete: this.updateData
    });
  }

  updateData(result) {
    const data = result.data;
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({data: data}); // or shorter ES syntax: this.setState({ data });

    // Here this loops the csv data to the correct structure to populate semantic ui react dropdown field
    let newObj = data.map((e)=>{
      return{
        key: e["Command"].toString(),
        value: e["Block frame"].toString(),
        text: e["Command"].toString(),
      }
    })
    this.setState({optionList: newObj})
  }




  render() {
    return(
      <div>
    <Grid celled='internally'>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as='h1'>Please create your flowchart</Header>
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Dropdown placeholder='Block frame' search selection options={this.state.optionList} />
          <Button primary>Add Move</Button>
        </Grid.Column>
        <Grid.Column width={10}>
          <DiagramContainer />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>

      </div>
    )
  }

}

export default CreateFlowchart;
