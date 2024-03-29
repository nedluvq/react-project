export default interface IProfile {
    photoURL: string,
    firstName: string,
    lastName: string,
    email: string,
    open: boolean,
    handleOpen: () => void,
    handleClose: () => void,
    setFirstName: (e: string) => void,
    setLastName: (e: string) => void,
    setPhotoURL: (e: string) => void,

}