import * as FileSystem from 'expo-file-system';


export const downloadAndCacheImage = async (url, filename) => {
  const fileUri = `${FileSystem.cacheDirectory}${filename}`;  

  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  if (fileInfo.exists) {
    console.log('Файл уже существует в кеше:', fileUri);
    return fileUri;  
  }

  console.log('Файл отсутствует в кеше. Начинаем загрузку...');
  
  try {
    const download = await FileSystem.downloadAsync(url, fileUri);  
    console.log('Файл загружен и сохранен по пути:', download.uri);
    return download.uri; 
  } catch (error) {
    console.error('Ошибка при загрузке файла:', error);
    throw error;
  }
};
