import React from 'react';

import './Modal.css';

const projectmodal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(-15vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Add New Project</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                    <br/><br/>
                </div>
                <div className="modal-footer">
                </div>
            </div>
        </div>
    )
}

export default projectmodal;