/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { WebView } from 'react-native-webview';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() !== 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <WebView
           allowFileAccess
          allowFileAccessFromFileURLs
          allowUniversalAccessFromFileURLs
            source={{ uri: 'https://www.tradingview.com/chart/' }}
            style={{ height: 800, width: '100%' }}
          />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
