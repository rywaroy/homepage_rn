import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#f5f5f5'
	},
});

//this.props.navigation.navigate('ArticleInfo',{id:id})