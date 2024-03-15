import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { AnimatedSVG } from "../../animated/animatedSvg";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { LoginLogo } from "../../../styles/svg/loginLogo";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const spinValue1 = useRef(new Animated.Value(0)).current;
  const spinValue2 = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      navigation.navigate('LoginScreen');
    }
  }, [isLoading, navigation]);

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.svgContainer}>
          <AnimatedSVG LoginLogo={LoginLogo} spinValue={spinValue1} direction={1} />
          <AnimatedSVG LoginLogo={LoginLogo} spinValue={spinValue2} direction={-1} />
        </View>
      )}
    </View>
  );
};