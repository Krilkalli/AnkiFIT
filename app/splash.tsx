import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import * as FileSystem from "expo-file-system";


const image = require("../assets/images/SplashScreen.png");

const filePath = `${FileSystem.documentDirectory}user.json`;

const SplashScreen: React.FC = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkUserData = async () => {
      const fileInfo = await FileSystem.getInfoAsync(filePath);

      if (fileInfo.exists) {
        const fileContent = await FileSystem.readAsStringAsync(filePath);
        const userData = JSON.parse(fileContent);

        if (userData?.gender === "male") {
          router.replace("/training");
        } else if (userData?.gender === "female") {
          router.replace("/wtraining");
        }
      }
    };

    setTimeout(() => {
      setIsLoaded(true);
      checkUserData();
    }); 
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={image} 
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        resizeMode="cover"
      >
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
