//
//  ItemDetails
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"


export default class ItemDetails extends React.Component {

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
							style={styles.profileText}>Item</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-back.png")}
						style={styles.icBackImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 155,
					}}>
					<View
						style={styles.rectangle44Copy3View}/>
					<Image
						source={require("./../../assets/images/moon.png")}
						style={styles.moonImage}/>
				</View>
				<View
					style={styles.detailsView}>
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
						<Text
							style={styles.itemNameText}>Item Name</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 79,
								height: 24,
								marginLeft: 4,
								marginTop: 20,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/ic-clock.png")}
								style={styles.icClockImage}/>
							<Text
								style={styles.timeText}>Time</Text>
						</View>
						<Image
							source={require("./../../assets/images/ic-location-copy.png")}
							style={styles.icLocationCopyImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.praesentFacilisisDText}>Praesent facilisis dolor sapien, vel sodales {"\n"}augue mollis ut. Mauris venenatis magna {"\n"}eu tortor posuere luctus.</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 48,
							width: 188,
							top: 54,
							height: 58,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.am300PmText}>10:00 AM - 3:00 PM</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 132,
								height: 19,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text
								style={styles.distanceText}>Location</Text>
							<Text
								style={styles.kmText}>2,56 km</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.optionsView}>
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
								style={styles.rectangle44Copy2View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 20,
									right: 19,
									top: 18,
									height: 24,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/ic-about.png")}
									style={styles.icAboutImage}/>
								<Text
									style={styles.info1Text}>Info 1</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.descriptionText}>Description</Text>
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
								style={styles.rectangle44Copy5View}/>
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
									style={styles.icAboutCopy2Image}/>
								<Text
									style={styles.info3Text}>Info 3</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.descriptionThreeText}>Description</Text>
								<Image
									source={require("./../../assets/images/ic-next.png")}
									style={styles.icNextTwoImage}/>
							</View>
						</View>
					</View>
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
							justifyContent: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 24,
								marginLeft: 20,
								marginRight: 10,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/ic-about.png")}
								style={styles.icAboutCopyImage}/>
							<Text
								style={styles.info2Text}>Info 2</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.descriptionTwoText}>Description</Text>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextImage}/>
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
	icBackImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 15,
		width: 24,
		top: 30,
		height: 24,
	},
	rectangle44Copy3View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 155,
	},
	moonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 100,
		top: 27,
		height: 100,
	},
	detailsView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 325,
		height: 204,
		marginLeft: 16,
		marginTop: 7,
	},
	itemNameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icClockImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	timeText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
	},
	icLocationCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginLeft: 4,
		marginTop: 15,
	},
	praesentFacilisisDText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "stretch",
	},
	am300PmText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "center",
	},
	distanceText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	kmText: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 13,
	},
	optionsView: {
		backgroundColor: "transparent",
		height: 180,
		marginBottom: 25,
	},
	rectangle44Copy2View: {
		backgroundColor: "rgb(245, 245, 245)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icAboutImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	info1Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
	},
	descriptionText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
	},
	rectangle44Copy5View: {
		backgroundColor: "rgb(245, 245, 245)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	icAboutCopy2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	info3Text: {
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
	descriptionThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginRight: 7,
		marginBottom: 3,
	},
	icNextTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	rectangle44Copy4View: {
		backgroundColor: "rgb(245, 245, 245)",
		height: 60,
	},
	icAboutCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	info2Text: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
	},
	descriptionTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginRight: 7,
	},
	icNextImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
})
