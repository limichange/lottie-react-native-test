/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { WebView } from 'react-native-webview';
import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() !== 'dark';
  const [showWebView, setShowWebView] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <Button
            title={showWebView ? 'Close WebView' : 'Open WebView'}
            onPress={() => {
              setShowWebView(!showWebView);
            }}
          />
          <WebView
            originWhitelist={['']}
            source={{ uri: 'http://192.168.0.107:5173/' }}
            style={{ height: 700, width: '100%' }}
          />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
