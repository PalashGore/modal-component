import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalComponent extends React.Component {
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
            
        )
    }
}

export default ModalComponent;