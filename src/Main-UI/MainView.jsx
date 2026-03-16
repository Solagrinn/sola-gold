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
        // #797988
        <div>
            mainUi
            <div>{uiState}</div>
            <div className={"flex  justify-center "}>

                <div className={"flex"}>

                    <BtlIcon height={200} width={200} color={"#fff"}></BtlIcon>

                </div>
            </div>
            <br/>
            <PriceCard buy={7279} label={"Gram Altın"} purity={"24 Ayar"} sell={"7322"} trend={"asd"}></PriceCard>
        </div>

    )
}
export default MainView;
