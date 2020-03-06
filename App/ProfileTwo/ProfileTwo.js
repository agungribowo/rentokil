//
//  ProfileTwo
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, View, Text } from "react-native"


export default class ProfileTwo extends React.Component {

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
							left: 37,
							right: 36,
							top: 48,
							bottom: 25,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.followingText}>Following</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.followersText}>Followers</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 30,
								marginLeft: 12,
								marginRight: 11,
								marginTop: 3,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.textTwoText}>287</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textText}>539</Text>
						</View>
						<Text
							style={styles.userNameText}>User Name</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "center",
								width: 151,
								height: 40,
							}}>
							<View
								style={styles.rectangle44Copy4View}/>
							<Text
								style={styles.followText}>Follow</Text>
						</View>
					</View>
					<View
						style={styles.icUserView}>
						<Image
							source={require("./../../assets/images/shape-copy-4-2.png")}
							style={styles.shapeCopy4Image}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.group7View}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 12,
							right: 0,
							top: 6,
							bottom: 8,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 51,
								marginRight: 12,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 51,
									height: 51,
								}}>
								<View
									style={styles.oval766CopyView}/>
								<Image
									source={require("./../../assets/images/shape-copy.png")}
									style={styles.shapeCopyImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 107,
									height: 44,
									marginLeft: 12,
									marginTop: 2,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.userNameCopyText}>User Name</Text>
								<Text
									style={styles.postDescriptionCopText}>Post description</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.minText}>3 min</Text>
						</View>
						<Image
							source={require("./../../assets/images/line-copy.png")}
							style={styles.lineCopyImage}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 87,
								marginRight: 12,
								marginTop: 8,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 51,
									height: 51,
								}}>
								<View
									style={styles.oval766CopyTwoView}/>
								<Image
									source={require("./../../assets/images/shape-copy.png")}
									style={styles.shapeCopyTwoImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 85,
									marginLeft: 12,
									marginTop: 2,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.userNameCopyTwoText}>User Name</Text>
								<Text
									style={styles.postDescriptionFacText}>Post description facilisis dolor sapien, {"\n"}vel sodales augue mollis ut. Mauris {"\n"}venenatis magna eu tortor … more</Text>
							</View>
							<Text
								style={styles.minTwoText}>9 min</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 67,
								marginRight: 12,
								marginTop: 22,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 51,
									height: 52,
								}}>
								<View
									style={styles.oval766Copy2View}/>
								<Image
									source={require("./../../assets/images/shape-copy.png")}
									style={styles.shapeCopy2Image}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 64,
									marginLeft: 12,
									marginTop: 3,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.userNameCopy2Text}>User Name</Text>
								<Text
									style={styles.postDescriptionFacTwoText}>Post description facilisis dolor sapien, {"\n"}vel sodales augue mollis ut.</Text>
							</View>
							<Text
								style={styles.minThreeText}>12 min</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/line-copy.png")}
							style={styles.lineCopy3Image}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 66,
								marginRight: 12,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 51,
									height: 51,
									marginBottom: 15,
								}}>
								<View
									style={styles.oval766Copy3View}/>
								<Image
									source={require("./../../assets/images/shape-copy.png")}
									style={styles.shapeCopy3Image}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 64,
									marginLeft: 12,
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.userNameCopy3Text}>User Name</Text>
								<Text
									style={styles.postDescriptionFacThreeText}>Post description facilisis dolor sapien, {"\n"}vel sodales augue mollis ut.</Text>
							</View>
							<Text
								style={styles.minFourText}>17 min</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/line-copy.png")}
							style={styles.lineCopy2Image}/>
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
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 19,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
	profileView: {
		backgroundColor: "white",
		height: 270,
	},
	followingText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	followersText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	textText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	userNameText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "center",
		marginTop: 49,
	},
	rectangle44Copy4View: {
		backgroundColor: "white",
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 151,
		bottom: 0,
		height: 40,
	},
	followText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		bottom: 12,
	},
	icUserView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 50,
		position: "absolute",
		alignSelf: "center",
		width: 102,
		top: 24,
		height: 102,
		justifyContent: "center",
		alignItems: "center",
	},
	shapeCopy4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 60,
		height: 60,
	},
	group7View: {
		backgroundColor: "white",
		height: 350,
		marginLeft: 5,
		marginRight: 4,
	},
	oval766CopyView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		position: "absolute",
		left: 0,
		width: 51,
		top: 0,
		height: 51,
	},
	shapeCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 11,
		width: 30,
		top: 11,
		height: 30,
	},
	userNameCopyText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	postDescriptionCopText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 4,
	},
	minText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 4,
	},
	lineCopyImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 291,
		height: 2,
		marginTop: 10,
	},
	oval766CopyTwoView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		position: "absolute",
		left: 0,
		width: 51,
		top: 0,
		height: 51,
	},
	shapeCopyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11,
		width: 30,
		top: 11,
		height: 30,
	},
	userNameCopyTwoText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	postDescriptionFacText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
		marginTop: 2,
	},
	minTwoText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 4,
	},
	oval766Copy2View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		position: "absolute",
		left: 0,
		width: 51,
		top: 0,
		height: 52,
	},
	shapeCopy2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 11,
		width: 30,
		top: 11,
		height: 30,
	},
	userNameCopy2Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
	},
	postDescriptionFacTwoText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
		marginTop: 2,
	},
	minThreeText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginTop: 5,
	},
	lineCopy3Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "flex-end",
		width: 291,
		height: 2,
		marginBottom: 8,
	},
	oval766Copy3View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		position: "absolute",
		left: 0,
		width: 51,
		bottom: 0,
		height: 51,
	},
	shapeCopy3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 11,
		width: 30,
		bottom: 10,
		height: 30,
	},
	userNameCopy3Text: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginBottom: 2,
	},
	postDescriptionFacThreeText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	},
	minFourText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginBottom: 43,
	},
	lineCopy2Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 291,
		height: 2,
	},
})
