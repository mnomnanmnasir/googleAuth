import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function CreateTask({ open, setOpen, handleCreateDeal, dealForm, setDealForm }) {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2">Add Deal</Typography>
                <div style={{ marginTop: "20px" }}>
                    <TextField onChange={(e) => setDealForm({ ...dealForm, contactPerson: e.target.value })} value={dealForm?.contactPerson} sx={{ margin: "10px 0" }} fullWidth id="outlined-basic" label="Contact person" variant="outlined" />
                    <TextField onChange={(e) => setDealForm({ ...dealForm, organization: e.target.value })} value={dealForm?.organization} sx={{ margin: "10px 0" }} fullWidth id="outlined-basic" label="Organization" variant="outlined" />
                    <TextField onChange={(e) => setDealForm({ ...dealForm, title: e.target.value })} value={dealForm?.title} sx={{ margin: "10px 0" }} fullWidth id="outlined-basic" label="Title" variant="outlined" />
                    <TextField onChange={(e) => setDealForm({ ...dealForm, value: e.target.value })} value={dealForm?.value} sx={{ margin: "10px 0" }} fullWidth id="outlined-basic" label="Value" variant="outlined" />
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginTop: 20,
                        width: "100%"
                    }}>
                        <button
                            onClick={() => {
                                handleClose()
                                setDealForm({
                                    contactPerson: "",
                                    organization: "",
                                    title: "",
                                    value: "",
                                })
                            }}
                            style={{
                                width: "200px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "40px",
                                borderRadius: "6px",
                                border: "1px solid grey",
                                outline: "none",
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "black",
                                marginTop: 40,
                            }}>Cancel</button>
                        <button
                            onClick={() => {
                                handleCreateDeal()
                                handleClose()
                                setDealForm({
                                    contactPerson: "",
                                    organization: "",
                                    title: "",
                                    value: "",
                                })
                            }}
                            style={{
                                width: "200px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#2d8647",
                                height: "40px",
                                borderRadius: "6px",
                                border: "none",
                                outline: "none",
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "whitesmoke",
                                marginTop: 40,
                                marginLeft: 10
                            }}>Save</button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}
