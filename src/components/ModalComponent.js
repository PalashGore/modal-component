import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalComponent extends React.Component {

    render() {

        return (
            <div>                
                <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} centered={this.props.centered}>
                    <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
                    <ModalBody>
                         {this.props.modalBody}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.toggle}>Do Something</Button>
                        <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>      
        )
    }
}

export default ModalComponent;