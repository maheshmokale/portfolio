// CustomCursor.js

import React from 'react';
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={30}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: 'cyan' // Change the background color to blue using hex code
            }}
            outerStyle={{
                border: '3px solid yellow' // Change the border color to blue using hex code
            }}
        />
    );
};

export default CustomCursor;
