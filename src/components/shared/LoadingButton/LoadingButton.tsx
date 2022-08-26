import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { ActivityIndicator, Image, View } from "react-native"
import { theme } from "../../../theme"
import { ButtonProps } from "./type"
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

const LoadingButton = (props: ButtonProps) => {
    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }],
        };
    });

    useEffect(() => {
        rotation.value = withRepeat(withTiming(360, { duration: 2000 }), 99999, false)
    }, [])

    return (
        <View style={{
            width: props.width,
            backgroundColor: 'transparent',
            height: props.height,
            marginTop: !!props.marginTop ? props.marginTop : 0,
            marginBottom: !!props.marginBottom ? props.marginBottom : 0,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderWidth: 1,
            borderColor: theme.pallete.primary.main
        }}>
            <ActivityIndicator size="small" color={theme.pallete.primary.main} />
        </View>
    )
}

export { LoadingButton }