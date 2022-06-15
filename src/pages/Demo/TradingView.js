import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingView = () => {
    return (
        <div>
            <TradingViewWidget
                symbol="BINANCE:BTCUSDTPERP"
                theme={"dark"}
                locale="th"
                interval={5}
                allow_symbol_change={true}
                toolbar_bg={"#f1f3f6"}
                style={"1"}
                container_id={"technical-analysis-chart-demo"}
                hide_side_toolbar={false}
                studies={["RSI@tv-basicstudies", "Stochastic@tv-basicstudies"]}
                enable_publishing={false}
                withdateranges={true}
                show_popup_button={true}
                popup_width={1000}
                popup_height={650}
            />
        </div>
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(TradingView, comparisonFn); 