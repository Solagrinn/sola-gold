const PriceCard = ({label, purity, buy, sell, shimmerClassname, isFirst}) => {
    return (
        <div className="relative flex items-center justify-between p-10 flex-1 mb-4">

            {/* 1. THE CLIPPING LAYER: This handles the background, border, and shimmer */}
            <div
                className="absolute inset-0 overflow-hidden rounded-xl border border-zinc-700/50 shadow-lg"
                style={{backgroundColor: 'var(--color-card-grey)'}}
            >
                {/* Shimmer stays inside this hidden-overflow container */}
                <div
                    className={`absolute inset-0 pointer-events-none ${shimmerClassname} bg-linear-to-r from-transparent via-white/[0.07] to-transparent`}/>
            </div>

            {/* 2. LEFT CONTENT (Label & Purity) */}
            <div className="relative z-10">
                <h2 className="text-5xl font-bold text-white tracking-tight uppercase leading-tight">
                    {label}
                </h2>
                <p className="text-white text-xl font-medium tracking-[0.15em] mt-2 opacity-90">
                    {purity}
                </p>
            </div>

            {/* 3. RIGHT CONTENT (Prices & "Alış") */}
            <div className="relative z-10 flex gap-12 items-center">

                {/* "Alış" is now outside the overflow-hidden layer, so it can be seen! */}
                {isFirst && (<>
                        {/* Satış - Typically Red/Rose */}
                        <div className="absolute" style={{ top: -100, left: 0 }}>
                            <p className="text-4xl font-bold tracking-widest text-rose-600 uppercase">
                                Satış
                            </p>
                        </div>

                        {/* Alış - Typically Green/Emerald */}
                        <div className="absolute" style={{ top: -100, right: 0 }}>
                            <p className="text-4xl font-bold tracking-widest text-emerald-400 uppercase">
                                Alış
                            </p>
                        </div>
                    </>
                )}

                <div className="text-right">
                    <p className="text-6xl font-mono text-white font-bold tabular-nums">{buy}</p>
                </div>

                <div className="h-20 w-[2px] bg-zinc-500 mx-2"/>

                <div className="text-right">
                    <p className="text-6xl font-mono text-white font-bold tabular-nums">{sell}</p>
                </div>
            </div>
        </div>
    );
};
export default PriceCard;