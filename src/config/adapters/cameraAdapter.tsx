import { PermissionsAndroid } from 'react-native';

export class CameraAdapter {

    static async takePicture(): Promise<string[]> {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // const response = await launchCamera({
                //     mediaType: "photo",
                //     quality: 0.7,
                //     cameraType: 'front',
                // });

                // if (response.assets && response.assets[0].uri) {
                //     return [response.assets[0].uri];
                // }
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
        return [];
    }
}