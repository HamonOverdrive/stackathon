import React, {Component} from 'react'
import {Button, Container, Menu, Visibility, Segment, Image, Divider, Grid, Header} from 'semantic-ui-react'
import {DiagramContainer} from '../containers'

class CreateFlowchart extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount(){
    //
        // Your parse code, but not seperated in a function
        // var csvFilePath = require("../../utils/dragunov.csv");
        // var Papa = require("papaparser");
        // Papa.parse(csvFilePath, {
        //   complete: function(results) {
        //     console.log("Finished:", results.data);
        //   }
        // });
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
