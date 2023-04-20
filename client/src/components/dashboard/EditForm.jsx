import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditClient(props){
    const {title, children, openPopup, setOpenPopup} = props
    return (
        <Dialog 
        open={openPopup}
        onClose={()=>setOpenPopup(false)}   
        >
            <DialogTitle>
                <div>{title}</div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
} 