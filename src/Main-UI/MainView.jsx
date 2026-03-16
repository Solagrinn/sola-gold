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
            <div className={"flex  justify-evenly "}>

                <div className={"flex items-center gap-6"}> {/* Added gap for spacing */}
                    <BtlIcon height={200} width={200} color={"#fff"} />


                    <div className={"flex flex-col items-start"}>
                        <div className={"font-inter font-black text-8xl text-white leading-none"}>BTL</div>
                        <div className={"font-inter font-bold text-xl text-white tracking-[0.3em] mt-2 uppercase"}>
                            Kıymetli Madenler
                        </div>
                    </div>
                </div>
                <div className={"flex"}></div>
                <div className={"flex"}></div>
            </div>
            <br/>
            <div>

                <PriceCard buy={7279} label={"Gram Altın"} purity={"24 Ayar"} sell={"7322"}
                           shimmerClassname={"animate-bazaar-shimmer"} isFirst={true}></PriceCard>
                <PriceCard buy={7279} label={"Gram Altın"} purity={"24 Ayar"} sell={"7322"}
                           shimmerClassname={"animate-bazaar-shimmer-v2"}></PriceCard>
                <PriceCard buy={7279} label={"Gram Altın"} purity={"24 Ayar"} sell={"7322"}
                           shimmerClassname={"animate-bazaar-shimmer-v3"}></PriceCard>
            </div>

        </div>

    )
}
export default MainView;
