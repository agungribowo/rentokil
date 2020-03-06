//
//  ProfileFour
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, View, Image, StyleSheet } from "react-native"
import React from "react"


export default class ProfileFour extends React.Component {

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
							style={styles.profileText}>Profile</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-menu.png")}
						style={styles.icMenuImage}/>
				</View>
				<View
					style={styles.profileView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 74,
							bottom: 15,
							height: 60,
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<Text
							style={styles.followersText}>Followers</Text>
						<Text
							style={styles.mText}>1.3m</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 37,
							width: 215,
							top: 24,
							bottom: 15,
							alignItems: "center",
						}}>
						<View
							style={styles.icUserView}>
							<Image
								source={require("./../../assets/images/shape-copy-4-2.png")}
								style={styles.shapeCopy4Image}/>
						</View>
						<Text
							style={styles.userNameText}>User Name</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.followingText}>Following</Text>
						<Text
							style={styles.textTwoText}>287</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.contentView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 180,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 180,
								height: 180,
							}}>
							<View
								style={styles.rectangle44Copy8View}/>
							<Image
								source={require("./../../assets/images/moon.png")}
								style={styles.moonImage}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 180,
								height: 180,
							}}>
							<View
								style={styles.rectangle44Copy9View}/>
							<Image
								source={require("./../../assets/images/moon.png")}
								style={styles.moonTwoImage}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 180,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 180,
								height: 180,
							}}>
							<View
								style={styles.rectangle44Copy11View}/>
							<Image
								source={require("./../../assets/images/moon.png")}
								style={styles.moonThreeImage}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 180,
								height: 180,
							}}>
							<View
								style={styles.rectangle44Copy10View}/>
							<Image
								source={require("./../../assets/images/moon.png")}
								style={styles.moonFourImage}/>
						</View>
					</View>
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
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 15,
		width: 24,
		top: 31,
		height: 24,
	},
	profileView: {
		backgroundColor: "white",
		height: 275,
	},
	followersText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginBottom: 6,
	},
	mText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	icUserView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 50,
		width: 102,
		height: 102,
		justifyContent: "center",
		alignItems: "center",
	},
	shapeCopy4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 60,
		height: 60,
	},
	userNameText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 22,
	},
	followingText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "flex-start",
		marginBottom: 6,
	},
	textTwoText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 11,
	},
	contentView: {
		backgroundColor: "transparent",
		height: 365,
		marginLeft: 5,
		marginRight: 5,
	},
	rectangle44Copy8View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 180,
		top: 0,
		height: 180,
	},
	moonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 40,
		width: 100,
		top: 40,
		height: 100,
	},
	rectangle44Copy9View: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 180,
		top: 0,
		height: 180,
	},
	moonTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 40,
		width: 100,
		top: 40,
		height: 100,
	},
	rectangle44Copy11View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 180,
		bottom: 0,
		height: 180,
	},
	moonThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 40,
		width: 100,
		bottom: 40,
		height: 100,
	},
	rectangle44Copy10View: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 180,
		bottom: 0,
		height: 180,
	},
	moonFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 40,
		width: 100,
		bottom: 40,
		height: 100,
	},
})
