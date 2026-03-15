import {useEffect, useState} from "react";
import PriceCard from "./PriceCard.jsx";
import BtlIcon from "../assets/BtlIcon.jsx";

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
            <BtlIcon height={200} width={200} color={"#797988"}></BtlIcon>
            <br/>
            <PriceCard buy={7279} label={"Gram Altın"} purity={"24 Ayar"} sell={"7322"} trend={"asd"}></PriceCard>
        </div>

    )
}
export default MainView;
