import React from "react";
import Svg, { Line, G } from "react-native-svg";

const ExitSVG = () => {
    return (
        <Svg width={12} height={30} viewBox="0 0 18 36">
            <G stroke="none" strokeWidth={2} fill="none" fill-rule="evenodd" strokeLinecap="square">
                <G transform="translate(1, 2)" stroke="#000000" strokeWidth={2}>
                    <Line strokeWidth={3} x1="12.63" y1="1.54" x2="3.37" y2="18.10" transform="translate(8, 9.82) rotate(20.19) translate(-8, -9.82) " />
                    <Line strokeWidth={3} x1="15.87" y1="17.13" x2="0.13" y2="27.75" transform="translate(8, 22.44) rotate(-105.40) translate(-8, -22.44) " />
                </G>
            </G>
        </Svg>
    );
}

export default ExitSVG;