import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layout from '../constants/Layout';
import { MonoText } from '../components/StyledText';

export default function ShopdayHome() {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollable}
        stickyHeaderIndices={[0]}
      >
        <View style={styles.topBar}>
          <Text style={styles.logo}>shopday</Text>
        </View>
        <View style={styles.card}>
          
        </View>
        <View style={styles.card}>
          
        </View>
        <View style={styles.card}>
          
        </View>
        <View style={styles.card}>
          
        </View>
      </ScrollView>
      
    </View>
  );
}

ShopdayHome.navigationOptions = {
  header: null,
  title: 'shopday'
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  topBar:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: 60,
    width: Layout.window.width,
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    backgroundColor: 'white'
  },
  logo:{
    color: '#00a82b',
    fontStyle: 'italic',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  scrollable:{
    flex: 1,
  },
  card:{
    width: Layout.window.width,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    minHeight: 500,
    overflow: 'hidden',
    marginTop: 20,
  }
});
