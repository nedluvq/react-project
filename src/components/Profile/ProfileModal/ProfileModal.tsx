import {FC} from "react";
import {Box, Button, Modal, Stack, TextField} from "@mui/material";
import {style} from "../../../styles/profileStyles.ts";
import {buttonStyles} from "../../../styles/buttonStyles.ts";
import {updatePhotoUrl, updateUserData} from "../../../api/auth.service.ts";
import IProfile from "../types.ts";

const ProfileModal: FC<IProfile> = (props) => {
    return (
        <>
            <Button onClick={props.handleOpen} sx={buttonStyles}>Edit your profile</Button>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction="column" spacing={2}>
                        <TextField
                            label="First Name"
                            onChange={(e) => props.setFirstName(e.target.value)}
                        />
                        <TextField
                            label="Last Name"
                            onChange={(e) => props.setLastName(e.target.value)}
                        />
                        <TextField
                            label="Avatar"
                            onChange={(e) => props.setPhotoURL(e.target.value)}
                        />
                        <Button
                            type="submit"
                            sx={buttonStyles}
                            onClick={() => {
                                updateUserData(props.firstName, props.lastName);
                                updatePhotoUrl(props.photoURL)
                                props.handleClose();
                            }}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default ProfileModal;
