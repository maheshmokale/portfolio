// CustomCursor.js

import React from 'react';
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
    return (
        <AnimatedCursor
            innerSize={7}
            outerSize={25}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: '#FD0664' // Change the background color to blue using hex code
            }}
            outerStyle={{
                border: '3px solid #FD0664' // Change the border color to blue using hex code
            }}
        />
    );
};

export default CustomCursor;
