//
//  Settings
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { View, Image, StyleSheet, Text } from "react-native"
import React from "react"


export default class Settings extends React.Component {

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
						height: 64,
					}}>
					<View
						style={styles.topBarView}>
						<Text
							style={styles.profileText}>Settings</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-menu.png")}
						style={styles.icMenuImage}/>
				</View>
				<View
					style={styles.settingsView}>
					<Text
						style={styles.personalInfoText}>Personal info</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
							marginTop: 11,
						}}>
						<View
							style={styles.rectangle44Copy2View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 10,
								top: 18,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-lock.png")}
								style={styles.icPasswordImage}/>
							<Text
								style={styles.passwordText}>Password</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.changeText}>Change</Text>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
						}}>
						<View
							style={styles.rectangle44Copy4View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 10,
								top: 18,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-location-copy.png")}
								style={styles.icLocationImage}/>
							<Text
								style={styles.locationText}>Location</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.odessaUkraineText}>Odessa, Ukraine</Text>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextTwoImage}/>
						</View>
					</View>
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
								left: 20,
								right: 10,
								top: 18,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-card-copy.png")}
								style={styles.icCardImage}/>
							<Text
								style={styles.cardText}>Card</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textText}>**** **** **** 1234</Text>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextThreeImage}/>
						</View>
					</View>
					<Text
						style={styles.additionalSettingsText}>Additional settings</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
							marginTop: 11,
						}}>
						<View
							style={styles.rectangle44Copy7View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 10,
								top: 18,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-tour.png")}
								style={styles.icTourImage}/>
							<Text
								style={styles.tourText}>Tour</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextFiveImage}/>
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
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 20,
								bottom: 14,
								height: 31,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/ic-notif.png")}
								style={styles.icNotifImage}/>
							<Text
								style={styles.notificationsText}>Notifications</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.controlsSwitchOnView}>
								<Image
									source={require("./../../assets/images/handle.png")}
									style={styles.handleImage}/>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
						}}>
						<View
							style={styles.rectangle44Copy8View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 10,
								bottom: 18,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/ic-about.png")}
								style={styles.icAboutImage}/>
							<Text
								style={styles.aboutText}>About</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextFourImage}/>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 61,
						marginBottom: 25,
					}}>
					<View
						style={styles.rectangle44Copy3View}/>
					<Text
						style={styles.logOutText}>Log out</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(245, 245, 245)",
		flex: 1,
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
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 19,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 26,
	},
	icMenuImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 15,
		width: 24,
		top: 31,
		height: 24,
	},
	settingsView: {
		backgroundColor: "transparent",
		height: 450,
		marginTop: 8,
	},
	personalInfoText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 16,
	},
	rectangle44Copy2View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icPasswordImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	passwordText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	changeText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 7,
	},
	icNextImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	rectangle44Copy4View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icLocationImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	locationText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	odessaUkraineText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 7,
	},
	icNextTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	rectangle44Copy5View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icCardImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	cardText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginRight: 7,
	},
	icNextThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	additionalSettingsText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 16,
		marginTop: 30,
	},
	rectangle44Copy7View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icTourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	tourText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	icNextFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	rectangle44Copy6View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	icNotifImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginBottom: 4,
	},
	notificationsText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
		marginBottom: 7,
	},
	controlsSwitchOnView: {
		backgroundColor: "rgb(155, 155, 155)",
		borderRadius: 15.5,
		width: 51,
		height: 31,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	handleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 28,
		height: 28,
		marginRight: 1,
	},
	rectangle44Copy8View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	icAboutImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	aboutText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
		marginBottom: 3,
	},
	icNextFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	rectangle44Copy3View: {
		backgroundColor: "white",
		shadowColor: "rgb(155, 155, 155)",
		shadowRadius: 0,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 61,
	},
	logOutText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 16,
		bottom: 21,
	},
})
