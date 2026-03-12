const ControllerView = () => {

    const sendDataToMainView = () => {
        window.electronAPI.sendData( "status: 'Updated!', value: 42" );
    }

    return (
        <div>
            controllerUi

            <button onClick={() => sendDataToMainView()}>
                send something
            </button>
        </div>
    )
}
export default ControllerView;
