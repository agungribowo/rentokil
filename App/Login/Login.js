//
//  Login
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Image, Text, StyleSheet, View } from "react-native"
import React from "react"


export default class Login extends React.Component {

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
						height: 313,
					}}>
					<View
						style={styles.rectangle44Copy2View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 178,
							top: 66,
							height: 179,
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/rentokil-logos-removebg-preview-2.png")}
							style={styles.rentokilLogosRemovImage}/>
						<Image
							source={require("./../../assets/images/rentokil-logo-removebg-preview.png")}
							style={styles.rentokilLogoRemoveImage}/>
					</View>
				</View>
				<View
					style={styles.formView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.rectangle44Copy4View}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 60,
							}}>
							<View
								style={styles.rectangle44Copy5View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 15,
									width: 81,
									top: 16,
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
						<Text
							style={styles.passwordText}>Password</Text>
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
								style={styles.rectangle44Copy6View}/>
							<Text
								style={styles.signInText}>Sign in</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/ic-lock.png")}
							style={styles.icLockImage}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangle44Copy2View: {
		backgroundColor: "rgb(244, 244, 244)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 313,
	},
	rentokilLogosRemovImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 125,
		height: 123,
	},
	rentokilLogoRemoveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 178,
		height: 38,
		marginTop: 18,
	},
	formView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 320,
		height: 210,
		marginTop: 24,
	},
	rectangle44Copy4View: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		height: 60,
	},
	rectangle44Copy5View: {
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginTop: 2,
	},
	emailCopyText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 11,
	},
	passwordText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 50,
		marginTop: 31,
	},
	rectangle44Copy6View: {
		backgroundColor: "black",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	signInText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		bottom: 22,
	},
	icLockImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginLeft: 15,
	},
})
