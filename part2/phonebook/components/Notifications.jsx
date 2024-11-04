const Notifications = ({message, isSuccessful}) => {
    if (!message) {
        return null;
    }

    return (
        <div className={isSuccessful ? 'notif-valid' : 'notif-invalid'}>
            {message}
        </div>
    )
}

export default Notifications;