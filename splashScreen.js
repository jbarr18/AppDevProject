import React, { useRef, useEffect } from "react";
import { Text, Image, View, Form, ViewBase, Animated, Dimensions, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Logo from '../assets/appIcon.png';
import Regform from "./Regform";
import Onboarding from "./Onboarding";


const BGColor = "#4d4a95"

export default function SplashScreen () {
    const edges = useSafeAreaInsets();

    const startAnimation = useRef(new Animated.Value(0)).current;


    //Scaling down both logo and title 
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    //Offset Animation

    const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    useEffect(() => {
        // start animation after 1000 ms
        setTimeout(() => {

            //parallel Animation
             Animated.parallel([
                 Animated.timing(
                     startAnimation,
                     {
                         toValue: -Dimensions.get('window').height + (edges.top + 65 ),
                         useNativeDriver: true
                     }
                 ),
                  Animated.timing(
                     scaleLogo,
                     {
                         toValue: 0.3,
                         useNativeDriver: true
                     }
                 ),
                 Animated.timing(
                    scaleTitle,
                    {
                        toValue: 0.8,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        toValue: 
                        {
                            x:  (Dimensions.get("window").width / 2) - 35,
                            y:  (Dimensions.get("window").height / 2) - 5,
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveTitle,
                    {
                        toValue: {
                            x: 0,
                            y: (Dimensions.get('window').height / 2) -90,
                        },
                        useNativeDriver: true
                    }
                ),
             ])
             .start();

        }, 2000);
    }, [] )
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            
            <Animated.View style={{
            flex: 1,
            backgroundColor: BGColor,
            zIndex: 1,
            transform: [ 
                { translateY: startAnimation  } ]
        }}>
            <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>                    
                <Animated.Image source={Logo} style={{
                    width: 100,
                    height: 100,
                    marginBottom: 20,
                    transform: [
                        { translateX: moveLogo.x },
                        { translateY: moveLogo.y },
                        { scale: scaleLogo },
                        
                     ]
                }}></Animated.Image>
               
                <Animated.Text style={{
                    fontSize: 25, 
                    fontWeight: 'bold',
                    color: 'white',
                    transform: [
                        {translateY: moveTitle.y },
                        { scale: scaleTitle}]
                }}>
                    Pick'em
                </Animated.Text>    
            </Animated.View> 
</Animated.View>

            <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.2)',
                zIndex: 0,
            }}>
                 <Onboarding />
            </Animated.View>
        </View>
);


}