//
//  Splash
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet, Image, View } from "react-native"
import React from "react"


export default class Splash extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<Image
					source={require("./../../assets/images/rentokil-logos-removebg-preview.png")}
					style={styles.rentokilLogosRemovImage}/>
				<Image
					source={require("./../../assets/images/rentokil-logo-removebg-preview-2.png")}
					style={styles.rentokilLogoRemoveImage}/>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	rentokilLogosRemovImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 194,
		height: 192,
		marginTop: 185,
	},
	rentokilLogoRemoveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 277,
		height: 59,
		marginTop: 28,
	},
})
