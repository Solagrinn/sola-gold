const PriceCard = ({ label, purity, buy, sell }) => {
    return (
        // Changed bg-[--color-card-grey] to style={{ backgroundColor: 'var(--color-card-grey)' }}
        // as a foolproof way to ensure it picks up the BTL grey.
        <div
            style={{ backgroundColor: 'var(--color-card-grey)' }}
            className="relative overflow-hidden border border-zinc-700/50 rounded-xl p-10 flex items-center justify-between shadow-lg flex-1"
        >

            {/* Shimmer: Increased opacity slightly so it shows on the grey */}
            <div className="absolute inset-0 pointer-events-none animate-bazaar-shimmer bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

            <div className="relative z-10">
                <h2 className="text-5xl font-bold text-white tracking-tight uppercase leading-tight">
                    {label}
                </h2>
                <p className="text-white text-xl font-medium tracking-[0.15em] mt-2 opacity-90">
                    {purity}
                </p>
            </div>

            <div className="relative z-10 flex gap-12 items-center">
                <div className="text-right">
                    <p className="text-white text-md font-black uppercase tracking-widest mb-1">ALIŞ</p>
                    <p className="text-6xl font-mono text-white font-bold tabular-nums">{buy}</p>
                </div>

                {/* Vertical Divider */}
                <div className="h-20 w-[1px] bg-zinc-600/50 mx-2" />

                <div className="text-right">
                    <p className="text-white text-md font-black uppercase tracking-widest mb-1">SATIŞ</p>
                    <p className="text-6xl font-mono text-white font-bold tabular-nums">{sell}</p>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;