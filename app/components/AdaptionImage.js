import React, { Component } from 'react';
import {
	StyleSheet,
	Image
} from 'react-native';

export default class AdaptionImage extends Component {

	constructor(props){
		super(props)
		this.state = {
			height:0
		}
	}

	componentDidMount() {
		Image.getSize(this.props.url,(width,height) => {
			this.setState({
				height:height * this.props.width / width
			})
		})
	}

	render() {
		return (
			<Image
				{...this.props}
				style={[styles.image,{height:this.state.height}]}
				source={{uri:this.props.url}}/>
		);
	}
}

const styles = StyleSheet.create({
	image:{
		width:'100%'
	}
});

// W/H = w / h  w*H = W*h