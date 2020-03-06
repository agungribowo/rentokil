//
//  Stats
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, StyleSheet, View, Image } from "react-native"
import React from "react"


export default class Stats extends React.Component {

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
							style={styles.profileText}>Work Order</Text>
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
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 188,
							top: 32,
							height: 74,
							alignItems: "center",
						}}>
						<Text
							style={styles.categoryTypeText}>Category type</Text>
						<Text
							style={styles.quantity30Text}>Quantity 30</Text>
					</View>
				</View>
				<View
					style={styles.tabsView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 165,
								height: 21,
								marginLeft: 46,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text
								style={styles.dayText}>Day</Text>
							<Text
								style={styles.weekText}>Week</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 36,
							bottom: 0,
							height: 42,
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.monthText}>Month</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle44Copy10View}/>
					</View>
				</View>
				<View
					style={styles.statsView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 23,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.statisticType1Text}>Statistic Type 1</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.statisticType2Text}>Statistic Type 2</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 116,
							marginLeft: 11,
							marginRight: 11,
							marginTop: 10,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 115,
								height: 116,
							}}>
							<View
								style={styles.oval913Copy4View}/>
							<Image
								source={require("./../../assets/images/oval-913.png")}
								style={styles.oval913Image}/>
							<Text
								style={styles.textText}>75%</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 116,
								height: 116,
							}}>
							<View
								style={styles.oval913Copy5View}/>
							<Image
								source={require("./../../assets/images/oval-913-copy.png")}
								style={styles.oval913CopyImage}/>
							<Text
								style={styles.textTwoText}>25%</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 23,
							marginTop: 31,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.statisticType3Text}>Statistic Type 3</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.statisticType4Text}>Statistic Type 4</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 116,
							marginLeft: 11,
							marginRight: 11,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 115,
								height: 116,
							}}>
							<View
								style={styles.oval913Copy7View}/>
							<Image
								source={require("./../../assets/images/oval-913-copy-3.png")}
								style={styles.oval913Copy3Image}/>
							<Text
								style={styles.textThreeText}>50%</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 116,
								height: 116,
							}}>
							<View
								style={styles.oval913Copy6View}/>
							<Image
								source={require("./../../assets/images/oval-913.png")}
								style={styles.oval913Copy2Image}/>
							<Text
								style={styles.textFourText}>75%</Text>
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
		top: 31,
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
	categoryTypeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	quantity30Text: {
		backgroundColor: "transparent",
		color: "rgb(74, 74, 74)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 17,
	},
	tabsView: {
		backgroundColor: "white",
		height: 60,
	},
	dayText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	weekText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	monthText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	rectangle44Copy10View: {
		backgroundColor: "black",
		alignSelf: "flex-start",
		width: 125,
		height: 2,
	},
	statsView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 325,
		height: 329,
		marginTop: 23,
	},
	statisticType1Text: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	statisticType2Text: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	oval913Copy4View: {
		backgroundColor: "transparent",
		borderRadius: 50,
		borderWidth: 15,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 115,
		top: 0,
		height: 116,
	},
	oval913Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 3,
		width: 110,
		top: 3,
		height: 110,
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 17,
		top: 30,
	},
	oval913Copy5View: {
		backgroundColor: "transparent",
		borderRadius: 50,
		borderWidth: 15,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 116,
		top: 0,
		height: 116,
	},
	oval913CopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 3,
		width: 60,
		top: 3,
		height: 60,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		right: 17,
		top: 30,
	},
	statisticType3Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	statisticType4Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	oval913Copy7View: {
		backgroundColor: "transparent",
		borderRadius: 50,
		borderWidth: 15,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 115,
		bottom: 0,
		height: 116,
	},
	oval913Copy3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 53,
		width: 60,
		bottom: 3,
		height: 110,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 17,
		bottom: 39,
	},
	oval913Copy6View: {
		backgroundColor: "transparent",
		borderRadius: 50,
		borderWidth: 15,
		borderColor: "rgb(235, 235, 235)",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 116,
		bottom: 0,
		height: 116,
	},
	oval913Copy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 3,
		width: 110,
		bottom: 3,
		height: 110,
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 40,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		right: 17,
		bottom: 39,
	},
})
