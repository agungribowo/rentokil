//
//  FAQ
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Image, StyleSheet, View, Text } from "react-native"
import React from "react"


export default class FAQ extends React.Component {

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
							style={styles.profileText}>FAQ</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-back.png")}
						style={styles.icBackImage}/>
				</View>
				<View
					style={styles.questionsView}>
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
								right: 10,
								top: 18,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.question1Text}>Question 1</Text>
							<View
								style={{
									flex: 1,
								}}/>
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
							style={styles.rectangle44Copy3View}/>
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
							<Text
								style={styles.question2Text}>Question 2</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextCopyImage}/>
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
							<Text
								style={styles.question3Text}>Question 3</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextCopy2Image}/>
						</View>
					</View>
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
								left: 20,
								right: 10,
								top: 18,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.question4Text}>Question 4</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextCopy5Image}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
						}}>
						<View
							style={styles.rectangle44Copy6View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 10,
								top: 18,
								bottom: 18,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.question5Text}>Question 5</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextCopy4Image}/>
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
								bottom: 18,
								height: 24,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.question6Text}>Question 6</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextCopy3Image}/>
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
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 15,
		width: 24,
		top: 31,
		height: 24,
	},
	questionsView: {
		backgroundColor: "transparent",
		height: 360,
	},
	rectangle44Copy2View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	question1Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icNextImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	rectangle44Copy3View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	question2Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icNextCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
	question3Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icNextCopy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	rectangle44Copy7View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	question4Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icNextCopy5Image: {
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
	question5Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icNextCopy4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 24,
		height: 24,
	},
	rectangle44Copy5View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	question6Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 3,
	},
	icNextCopy3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
})
