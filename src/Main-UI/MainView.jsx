import {useEffect, useState} from "react";

const MainView = () => {
    const [uiState, setUiState] = useState("")

    useEffect(() => {
        window.electronAPI.onReceiveData((data) => {
            console.log("Received in UI:", data);
            setUiState(data);
        });
    }, []);
    return (
        <div>
            mainUi
            <div>{uiState}</div>
        </div>

    )
}
export default MainView;
