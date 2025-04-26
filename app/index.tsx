import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import * as FileSystem from "expo-file-system";

const filePath = `${FileSystem.documentDirectory}user.json`;

const Index: React.FC = () => {
  const [redirectPath, setRedirectPath] = useState<"/training" | "/wtraining" | "/indata" | null>(null);

  useEffect(() => {
    const checkUserData = async () => {
      const fileInfo = await FileSystem.getInfoAsync(filePath);

      if (fileInfo.exists) {
        const fileContent = await FileSystem.readAsStringAsync(filePath);
        const existingUser = JSON.parse(fileContent);

        if (existingUser && existingUser.gender) {
          if (existingUser.gender === "male") {
            setRedirectPath("/training");
          } else if (existingUser.gender === "female") {
            setRedirectPath("/wtraining");
          }
        } else {
          setRedirectPath("/indata"); // Путь для ввода данных
        }
      } else {
        setRedirectPath("/indata"); // Если данных нет
      }
    };

    checkUserData();
  }, []);

  if (!redirectPath) {
    return null; // Ждем, пока не будет получен путь для редиректа
  }

  return <Redirect href={redirectPath} />;
};

export default Index;
