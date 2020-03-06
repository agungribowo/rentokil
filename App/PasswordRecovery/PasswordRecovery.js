//
//  PasswordRecovery
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { View, Image, StyleSheet, Text } from "react-native"
import React from "react"


export default class PasswordRecovery extends React.Component {

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
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 64,
					}}>
					<View
						style={styles.topBarView}>
						<Text
							style={styles.profileText}>Password Recovery</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-back.png")}
						style={styles.icBackImage}/>
				</View>
				<Text
					style={styles.enterYourEmailAndText}>Enter your email and we`ll send{"\n"}to you the link to reset the password.</Text>
				<View
					style={styles.emailView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
						}}>
						<View
							style={styles.rectangle44Copy7TwoView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 15,
								width: 81,
								top: 17,
								height: 26,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-email.png")}
								style={styles.icEmailImage}/>
							<Text
								style={styles.emailCopyText}>Email</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
						}}>
						<View
							style={styles.rectangle44Copy7View}/>
						<Text
							style={styles.submitText}>Submit</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	topBarView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 64,
		alignItems: "center",
	},
	profileText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 19,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 26,
	},
	icBackImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 15,
		width: 24,
		top: 30,
		height: 24,
	},
	enterYourEmailAndText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginTop: 25,
	},
	emailView: {
		backgroundColor: "transparent",
		width: 320,
		height: 135,
		marginTop: 41,
	},
	rectangle44Copy7TwoView: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icEmailImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginTop: 2,
	},
	emailCopyText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 11,
	},
	rectangle44Copy7View: {
		backgroundColor: "black",
		borderWidth: 1,
		borderColor: "rgb(38, 108, 191)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	submitText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		bottom: 22,
	},
})
