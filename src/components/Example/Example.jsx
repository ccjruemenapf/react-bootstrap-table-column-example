import React from 'react';
import { connectToStores } from 'fluxible-addons-react';

import ExampleStore from '../../stores/ExampleStore.jsx';
import Select from 'react-select';
import {Row, Col} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css';

import SaveListInStore from '../../actions/example/SaveListInStore.jsx';

class Example extends React.Component {
    logChange(values) {
        var data = values.map(value => {
            return value.value;
        });
        context.executeAction(SaveListInStore, data);
    }

    render() {
        var testData = [{
            id: "234567581",
            name: "Peter",
            mail: "peterPeterPeterPeterPeterPeter@example.de",
            surname: "schnatz",
            town: "London",
            age: "12",
            number: "63464363",
            like: "Pasta",
            money: "1345",
            example: "yes"
        }, {
            id: "234567811",
            name: "Sep",
            mail: "SepSepSep@example.de",
            surname: "Natz",
            town: "Soul",
            age: "22",
            number: "6634643634",
            like: "pig",
            money: "3241",
            example: "yes"
        }, {
            id: "454567891",
            name: "Denis",
            mail: "DenisDenisDenisDenisDenisDenisDenis@example.de",
            surname: "Platz",
            town: "NY",
            age: "33",
            number: "5435435",
            like: "cow",
            money: "5534",
            example: "yes"
        }, {
            id: "234563891",
            name: "Chris",
            mail: "ChrisChrisChrisChris@example.de",
            surname: "Rast",
            town: "Berlin",
            age: "23",
            number: "66346436",
            like: "cola",
            money: "54353",
            example: "yes"
        }, {
            id: "234567891",
            name: "Jay",
            mail: "JayJayJayJayJayJay@example.de",
            surname: "Matz",
            town: "Tokio",
            age: "34",
            number: "543536",
            like: "fanta",
            money: "31987965",
            example: "yes"
        }, {
            id: "123456789",
            name: "Hanna",
            mail: "Hanna@example.de",
            surname: "Raps",
            town: "Moskau",
            age: "44",
            number: "4235523",
            like: "pizza",
            money: "654645",
            example: "yes"
        }];

        let column = this.props.columns.map(headline => {
            return (
                <TableHeaderColumn dataField={headline} width="120">{headline}</TableHeaderColumn>
            );
        });

        let createOptions = [{
            value: 'surname',
            label: 'surname'
        }, {
            value: 'town',
            label: 'town'
        }, {
            value: 'age',
            label: 'age'
        }, {
            value: 'number',
            label: 'number'
        }, {
            value: 'like',
            label: 'like'
        }, {
            value: 'example',
            label: 'example'
        }, {
            value: 'money',
            label: 'money'
        }];

        return (
            <div className=".container-fluid">
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <h1>Example</h1>
                        <Select name="form-field-name" value={this.props.columns} placeholder="Add Columns"
                                options={createOptions} onChange={this.logChange.bind(this)} multi={true}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <BootstrapTable height="250px" data={testData}>
                            <TableHeaderColumn dataField="id" width="60" isKey={true}>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="name" width="115">Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="mail">Mail</TableHeaderColumn>
                            {column}
                        </BootstrapTable>
                    </Col>
                </Row>
            </div>
        );
    }
}

Example = connectToStores(Example, [ExampleStore], (context, props) => ({
    columns: context.getStore(ExampleStore).getColumns()
}));

export default Example;
