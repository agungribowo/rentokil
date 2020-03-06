//
//  Menu
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, StyleSheet, Image, View } from "react-native"
import React from "react"


export default class Menu extends React.Component {

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
					style={styles.menuView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 95,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-home.png")}
								style={styles.icHomeImage}/>
							<Text
								style={styles.homeText}>Home</Text>
						</View>
						<Image
							source={require("./../../assets/images/ic-profile.png")}
							style={styles.icProfileImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 82,
								height: 24,
								marginTop: 36,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-cart-2.png")}
								style={styles.icCartImage}/>
							<Text
								style={styles.cartText}>Cart</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 24,
								marginTop: 96,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-notification.png")}
								style={styles.icNotificationImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.notificationsText}>Notifications</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 24,
								marginRight: 35,
								marginBottom: 36,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/ic-settings.png")}
								style={styles.icSettingsImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.settingsText}>Settings</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 84,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/ic-help.png")}
								style={styles.icHelpImage}/>
							<Text
								style={styles.helpText}>Help</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 29,
							top: 62,
							height: 142,
							alignItems: "center",
						}}>
						<Text
							style={styles.profileText}>Profile</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 24,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/ic-favorites.png")}
								style={styles.icFavoritesImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.favoritesText}>Favorites</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.background2View}/>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(208, 2, 27)",
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	menuView: {
		backgroundColor: "transparent",
		width: 148,
		height: 384,
		marginLeft: 25,
		marginTop: 105,
	},
	icHomeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	homeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 22,
		marginTop: 2,
	},
	icProfileImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginTop: 36,
	},
	icCartImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	cartText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 22,
		marginTop: 2,
	},
	icNotificationImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	notificationsText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 2,
	},
	icSettingsImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	settingsText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icHelpImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	helpText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 22,
	},
	profileText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icFavoritesImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	favoritesText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	background2View: {
		backgroundColor: "white",
		alignSelf: "center",
		width: 61,
		height: 668,
	},
})
