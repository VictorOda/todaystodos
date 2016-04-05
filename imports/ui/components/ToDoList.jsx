import React, { Component } from 'react';

import ToDoForm from './ToDoForm.jsx';
import ToDo from './ToDo.jsx';

export default class ToDoList extends Component {
    render() {
        return (
            <ul className="list">
                <ToDoForm />
                <ToDo title="Meteor+React+Ionic"/>
                <ToDo title="Lavar a louça"/>
                <ToDo title="Sair com o Lil"/>
                <ToDo title="Teste"/>
                <ToDo title="Arrumar a cama"/>
            </ul>
        );
    }
}
