
# react-native-patriarch

## Getting started

`$ npm install react-native-patriarch --save`

### Mostly automatic installation

`$ react-native link react-native-patriarch`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-patriarch` and add `RNPatriarch.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPatriarch.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNPatriarchPackage;` to the imports at the top of the file
  - Add `new RNPatriarchPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-patriarch'
  	project(':react-native-patriarch').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-patriarch/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-patriarch')
  	```


## Usage
```javascript
import RNPatriarch from 'react-native-patriarch';

// TODO: What to do with the module?
RNPatriarch;
```
  