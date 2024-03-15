import { useEffect } from "react";
import { Animated, Easing } from "react-native";
import { SvgCss } from "react-native-svg/css";
import { styles } from "../screens/loading/styles";

export const AnimatedSVG = ({ LoginLogo, spinValue, direction = 1 }: { LoginLogo: string, spinValue: Animated.Value, direction?: number }) => {
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', `${360 * direction}deg`],
    });

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);


    return (
        <Animated.View style={{ ...styles.svgItem, transform: [{ rotate: spin }] }}>
            <SvgCss xml={LoginLogo} style={{ backgroundColor: 'transparent' }} />
        </Animated.View>
    );
};