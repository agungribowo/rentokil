//
//  MenuProfile
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, View, Image, StyleSheet } from "react-native"
import React from "react"


export default class MenuProfile extends React.Component {

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
						alignSelf: "flex-start",
						width: 128,
						height: 591,
						marginLeft: 94,
						marginTop: 38,
						alignItems: "flex-start",
					}}>
					<View
						style={styles.profileView}>
						<View
							style={styles.icUserView}>
							<Image
								source={require("./../../assets/images/shape-copy-4-2.png")}
								style={styles.shapeCopy4Image}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.userNameText}>User Name</Text>
					</View>
					<View
						style={styles.menuView}>
						<Text
							style={styles.homeText}>Home</Text>
						<Text
							style={styles.profileText}>Profile</Text>
						<Text
							style={styles.cartText}>Cart</Text>
						<Text
							style={styles.favoritesText}>Favorites</Text>
						<Text
							style={styles.notificationsText}>Notifications</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.settingsText}>Settings</Text>
						<Text
							style={styles.helpText}>Help</Text>
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
		alignItems: "center",
	},
	profileView: {
		backgroundColor: "transparent",
		width: 128,
		height: 154,
	},
	icUserView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 50,
		height: 102,
		marginLeft: 13,
		marginRight: 13,
		justifyContent: "center",
		alignItems: "center",
	},
	shapeCopy4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 60,
		height: 60,
	},
	userNameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	menuView: {
		backgroundColor: "transparent",
		width: 103,
		height: 312,
		marginLeft: 13,
		marginTop: 125,
		alignItems: "center",
	},
	homeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	profileText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 18,
	},
	cartText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 28,
	},
	favoritesText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginLeft: 15,
		marginRight: 15,
		marginTop: 28,
	},
	notificationsText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginTop: 28,
	},
	settingsText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginLeft: 18,
		marginRight: 17,
		marginBottom: 28,
	},
	helpText: {
		color: "white",
		fontFamily: ".SFNSText",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	background2View: {
		backgroundColor: "white",
		width: 51,
		height: 500,
	},
})
