import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";
import TableFilter from "react-table-filter";
import 'react-table-filter/lib/styles.css';

class Designs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }

    filterUpdated = (newData, filterConfiguration) => {
        this.setState({
            "tableData": newData
        });
    };

    getCells = (data) => {
        return data.map((item, index) => {
            return (
                <tr key={'row_' + index}>
                    <td>
                        <button onClick={() => this.props.setSelectedImageDataset(item)} type='button' className='table-column btn btn-link text-left p-0'>{item["Participant ID"]}</button>
                    </td>
                    <td>
                        {item["Data Type"]}
                    </td>
                    <td>
                        {item["Tissue Type"]}
                    </td>
                    <td>
                        {item["Image Type"]}
                    </td>
                    <td>
                        {item["Level"]}
                    </td>
                    <td>
                        {item["Source File"]}
                    </td>
                </tr>
            );
        });

    };

    async componentDidMount() {
     	let data =     [{
            "Participant ID": '123-abc',
            "Data Type": 'Foo Type',
            "Image Type": "3D Cyto",
            "Level": "L01",
            "Tissue Type": "AKI",
            "Source File": "foo.jpg"
        },{
            "Participant ID": '123-abc',
            "Data Type": 'Foo Type',
            "Image Type": "3D Cyto",
            "Level": "L01",
            "Tissue Type": "AKI",
            "Source File": "foo.jpg"
        },{
            "Participant ID": '123-abc',
            "Data Type": 'Foo Type',
            "Image Type": "3D Cyto",
            "Level": "L01",
            "Tissue Type": "AKI",
            "Source File": "foo.jpg"
        },{
            "Participant ID": '123-abc',
            "Data Type": 'Foo Type',
            "Image Type": "3D Cyto",
            "Level": "L01",
            "Tissue Type": "AKI",
            "Source File": "foo.jpg"
        }];
        this.setState({ "tableData": data });
        this.tableFilterNode.reset(data, true);
    }

    render() {
        return (
            <Container id='outer-wrapper' className={"multi-container-container"}>
                <Row>
                    <Col md={12}>
                        <Container className="mt-3 rounded border p-3 shadow-sm">
                            <Row><Col><h5>Welcome to the kpmp cra template design page</h5></Col></Row>
                            <Row><Col><p>Here you can see all of the latest common designs and components</p></Col></Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Container className="mt-3 rounded border p-3 shadow-sm">
                            <Row><Col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel felis vitae odio dignissim rhoncus vulputate non leo. Morbi consectetur magna nisl, eget sagittis massa pellentesque vitae. In eu sodales nisl, ac tincidunt elit. Quisque sollicitudin iaculis ligula ut ullamcorper. Nam et metus a sapien hendrerit consectetur. Maecenas et est nisi. Curabitur laoreet odio et mi dignissim sollicitudin. Ut vitae varius diam, non mollis felis. </p></Col></Row>
                        </Container>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Container className="mt-3 rounded border p-3 shadow-sm">
                            <Row><Col><h1>I'm an h1 tag</h1></Col></Row>
                            <Row><Col><h2>I'm an h2 tag</h2></Col></Row>
                            <Row><Col><h3>I'm an h3 tag</h3></Col></Row>
                            <Row><Col><h4>I'm an h4 tag</h4></Col></Row>
                            <Row><Col><h5>I'm an h5 tag</h5></Col></Row>
                            <Row><Col><h6>I'm an h6 tag</h6></Col></Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Container className="mt-3 rounded border p-3 shadow-sm">
                            <Row><Col><a href="#" target="_blank" rel="nofollow">I'm a simple link</a></Col></Row>
                        </Container>
                        </Col>
                        <Col md={6}>
                        <Container className="mt-3 rounded border p-3 shadow-sm">
                            <button type="button" class="btn btn-primary">Primary</button>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            <button type="button" class="btn btn-success">Success</button>
                            <button type="button" class="btn btn-danger">Danger</button>
                            <button type="button" class="btn btn-warning">Warning</button>
                            <button type="button" class="btn btn-info">Info</button>
                            <button type="button" class="btn btn-light">Light</button>
                            <button type="button" class="btn btn-dark">Dark</button>
                            <button type="button" class="btn btn-link">Link</button>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Container className='rounded border shadow-sm my-3 pl-0 pr-0 pb-0 overflow-auto'>
                            <table className="table table-hover table-striped mb-0" width="100%">
                                <thead>
                                    <TableFilter
                                        rows={this.state.tableData}
                                        onFilterUpdate={this.filterUpdated}
                                        ref={(node) => { this.tableFilterNode = node; }}>
                                        <th filterkey="Participant ID">
                                            PARTICIPANT ID
                                        </th>
                                        <th filterkey="Data Type">
                                            DATA TYPE
                                        </th>
                                        <th filterkey="Tissue Type">
                                            TISSUE TYPE
                                        </th>
                                        <th filterkey="Image Type">
                                            IMAGE TYPE
                                        </th>
                                        <th filterkey="Level">
                                            LEVEL
                                        </th>
                                        <th filterkey="Source File">
                                            FILE NAME
                                        </th>
                                    </TableFilter>
                                </thead>
                                <tbody>
                                    {this.getCells(this.state.tableData)}
                                </tbody>
                            </table>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Designs;
