//
//  SignInKeyboard
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, StyleSheet, View, Image } from "react-native"
import React from "react"


export default class SignInKeyboard extends React.Component {

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
						height: 186,
					}}>
					<View
						style={styles.rectangle44Copy2View}/>
					<Image
						source={require("./../../assets/images/rentokil-logo-removebg-preview.png")}
						style={styles.rentokilLogoRemoveImage}/>
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
		alignItems: "center",
	},
	rectangle44Copy2View: {
		backgroundColor: "rgb(244, 244, 244)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 186,
	},
	rentokilLogoRemoveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 178,
		top: 93,
		height: 38,
	},
	formView: {
		backgroundColor: "transparent",
		width: 320,
		height: 210,
		marginTop: 27,
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
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 11,
	},
	passwordText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	icLockImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginLeft: 15,
	},
})
