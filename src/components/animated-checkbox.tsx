import React, { useEffect, memo } from 'react';
import Animated, { Easing, useSharedValue, useAnimatedProps, withTiming, interpolateColor } from 'react-native-reanimated';
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'

const MARGIN = 10
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;

// gonna have to find the SVG code

const AnimatedCheckbox = () => {
    return (
        <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}>

        </Svg>
    )
}

export default AnimatedCheckbox