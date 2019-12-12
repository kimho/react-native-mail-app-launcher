import { NativeModules, Platform, Linking } from "react-native";

const { RNMailAppLauncher } = NativeModules;

export function runMailApp() {
  if (Platform.OS === "android") {
    RNMailAppLauncher.launchMailApp();
    return;
  }

  Linking.openURL("message:0");
}
