//
//  SignUp
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Image, Text, View, StyleSheet } from "react-native"
import React from "react"


export default class SignUp extends React.Component {

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
							style={styles.profileText}>Sign Up</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-back.png")}
						style={styles.icBackImage}/>
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
							style={styles.rectangle44Copy8View}/>
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
								style={styles.rectangle44Copy7View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 15,
									width: 124,
									top: 16,
									height: 26,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/ic-profile-copy.png")}
									style={styles.icProfileImage}/>
								<Text
									style={styles.firstNameText}>First Name</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 60,
								marginTop: 15,
							}}>
							<View
								style={styles.rectangle44Copy5View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 15,
									width: 123,
									top: 16,
									height: 26,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/ic-profile-copy.png")}
									style={styles.icProfileCopyImage}/>
								<Text
									style={styles.lastNameText}>Last Name</Text>
							</View>
						</View>
						<Text
							style={styles.emailCopy2Text}>Email</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 60,
								marginTop: 37,
							}}>
							<View
								style={styles.rectangle44Copy4View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 15,
									width: 115,
									top: 16,
									height: 26,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/ic-lock.png")}
									style={styles.icLockImage}/>
								<Text
									style={styles.passwordText}>Password</Text>
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
								style={styles.rectangle44Copy6View}/>
							<Text
								style={styles.registerText}>Register</Text>
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
							source={require("./../../assets/images/ic-email.png")}
							style={styles.icEmailImage}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<Text
					style={styles.orJoinWithText}>or join with</Text>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 60,
					}}>
					<View
						style={styles.rectangle44Copy3View}/>
					<Image
						source={require("./../../assets/images/facebook.png")}
						style={styles.facebookImage}/>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 15,
		width: 24,
		top: 30,
		height: 24,
	},
	formView: {
		backgroundColor: "transparent",
		width: 320,
		height: 360,
		marginTop: 27,
	},
	rectangle44Copy8View: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		height: 60,
	},
	rectangle44Copy7View: {
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
	icProfileImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginTop: 2,
	},
	firstNameText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 11,
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
	icProfileCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginTop: 2,
	},
	lastNameText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 11,
	},
	emailCopy2Text: {
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
	rectangle44Copy4View: {
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
	icLockImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginTop: 2,
	},
	passwordText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 11,
	},
	rectangle44Copy6View: {
		backgroundColor: "black",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	registerText: {
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
	icEmailImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginLeft: 15,
	},
	orJoinWithText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginBottom: 22,
	},
	rectangle44Copy3View: {
		backgroundColor: "rgb(155, 155, 155)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	facebookImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 10,
		bottom: 20,
		height: 20,
	},
})
