import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'hexagonswiss-react-native-iubenda-tcf' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const HexagonswissReactNativeIubendaTcf = NativeModules.HexagonswissReactNativeIubendaTcf
  ? NativeModules.HexagonswissReactNativeIubendaTcf
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return HexagonswissReactNativeIubendaTcf.multiply(a, b);
}
