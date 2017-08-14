import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import Expo from 'expo'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>eReview</Text>
        </View>
        <View style={styles.page}>
          <View style={styles.branchImage}>
            <Image
                  resizeMode={'contain'}
                  style={{width: 300}}
                  source={require('./img/wwlogo.png')} />
          </View>
          <View style={styles.searchBox}>
            <View style={styles.form}>
              <Text style={styles.formLabel}>Enter ID</Text>
              <TextInput style={styles.formInput}></TextInput>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <Button onPress={this.onSearch} title="Get Asset" color='#F36F21' />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const primaryColor = '#F36F21';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Expo.Constants.statusBarHeight,
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: primaryColor,
    padding: 10,
    height: 50,
    alignItems: 'center'
  },
  navbarTitle: {
    color: 'white',
    fontSize: 20
  },
  page: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  branchImage: {
    padding: 20,
    alignItems: 'center'
  },
  searchBox: {
    flexDirection: 'row'
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 10,
    margin: 20,
    flex: 1,
    elevation: 2,
    alignItems: 'center',
  },
  formLabel: {
    fontSize: 20,
  },
  formInput: {
    width: 100,
    margin: 5,
    padding: 5
  }
});
