# react-native-mail-app-launcher

Launch mail app from react-native application. forked from react-native-mail-launcher

## Getting started

`$ npm install react-native-mail-app-launcher --save`

### Mostly automatic installation

`$ react-native link react-native-mail-app-launcher`

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.reactlibrary.RNMailAppLauncherPackage;` to the imports at the top of the file
- Add `new RNMailAppLauncherPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-mail-app-launcher'
   project(':react-native-mail-app-launcher').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-mail-app-launcher/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-mail-app-launcher')
   ```

#### iOS

We do not need a native module for iOS

## Usage

```javascript
import * as React from "react";
import { View, Button } from "react-native";
import { runMailApp } from "react-native-mail-app-launcher";

export default class Example extends React.Component {
  openMail = () => {
    runMailApp();
  };

  render() {
    return (
      <View>
        <Button onPress={this.openMail}>Go to mail client</Button>
      </View>
    );
  }
}
```
