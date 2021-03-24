import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Form, FormGroup, Input } from "reactstrap";
class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            details: '',
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return(
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add New Task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="title">Title</Label>
                                <Input type="text" id="title" name="title" 
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="date">Date</Label>
                                <Input type="date" id="date" name="date" 
                                    value={this.state.date}
                                    onChange={this.handleInputChange} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="details">Details</Label>
                                <Input type="textarea" rows="4" id="details" name="details"
                                    placeholder="Details"
                                    value={this.state.details}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <div className="row">
                                <Button className="d-block ml-3 mr-auto" onClick={this.toggleModal} color="danger">Cancel</Button>
                                <Button className="d-block mr-3 ml-auto" onClick={this.toggleModal} type="submit" value="submit" color="primary">Submit</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
                <Button onClick={this.toggleModal} className="mt-5 mb-5">
                    <i className="fa fa-plus fa-lg" /> Add Task
                </Button>
            </React.Fragment>
        );
    };
}
export default AddTaskForm;