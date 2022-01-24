import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    backgroundColor: 'background.paper',
    border: '2px solid #362682',
    boxShadow: 5,
    p: 2,
};

const ServiceDetailsModal = ({ openModal, setOpenModal, addServices }) => {
    const handleClose = () => setOpenModal(false);
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {addServices ? <span>
                        <CloseIcon onClick={handleClose} sx={{ position: 'absolute', top: '3px', right: '3px', fontSize: '15px', color: 'red', fontWeight: '900' }} />
                        <form action="">
                            <h3 className="title">Add new category</h3>
                            <div className="mt-2">
                                <input style={{ borderRadius: "1rem" }} name="title" required placeholder='Add new category' type="text" />
                            </div>
                            <div className="mt-2" style={{ textItems: 'center' }}>
                                <button className='primaryBtn '>Add category</button>
                            </div>
                        </form>
                    </span> :
                        <>
                            <CloseIcon onClick={handleClose} sx={{ position: 'absolute', top: '3px', right: '3px', fontSize: '18px', color: 'red', fontWeight: 'bold' }} />
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </>
                    }
                </Box>
            </Modal>
        </div>
    );
}
export default ServiceDetailsModal;