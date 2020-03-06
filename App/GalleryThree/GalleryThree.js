//
//  GalleryThree
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, Image, View, StyleSheet } from "react-native"
import React from "react"


export default class GalleryThree extends React.Component {

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
							style={styles.profileText}>Gallery</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-menu.png")}
						style={styles.icMenuImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 550,
						marginLeft: 9,
						marginTop: 26,
					}}>
					<View
						style={styles.rectangle44Copy4View}/>
					<View
						style={styles.rectangle44Copy5View}/>
					<View
						style={styles.itemView}>
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
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.rectangle44Copy3View}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 75,
									alignItems: "flex-start",
								}}>
								<View
									style={styles.rectangle44Copy4TwoView}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 135,
										height: 52,
										marginLeft: 14,
										marginTop: 14,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.oval766Copy4View}/>
									<Text
										style={styles.minAgoText}>10min ago</Text>
								</View>
								<Text
									style={styles.itemNameText}>Item Name</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.praesentFacilisisDText}>Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.</Text>
							</View>
							<Image
								source={require("./../../assets/images/moon-2.png")}
								style={styles.moonImage}/>
							<Image
								source={require("./../../assets/images/shape-copy.png")}
								style={styles.shapeCopy4Image}/>
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
							<Text
								style={styles.userNameCopy5Text}>User Name</Text>
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
		top: 30,
		height: 24,
	},
	rectangle44Copy4View: {
		backgroundColor: "rgb(228, 228, 228)",
		position: "absolute",
		right: 255,
		width: 301,
		top: 44,
		height: 463,
	},
	rectangle44Copy5View: {
		backgroundColor: "rgb(228, 228, 228)",
		position: "absolute",
		left: 0,
		width: 301,
		top: 44,
		height: 463,
	},
	itemView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 595,
		top: 0,
		height: 550,
	},
	rectangle44Copy3View: {
		backgroundColor: "white",
		width: 325,
		height: 550,
	},
	rectangle44Copy4TwoView: {
		backgroundColor: "rgb(235, 235, 235)",
		width: 325,
		height: 250,
	},
	oval766Copy4View: {
		backgroundColor: "rgb(155, 155, 155)",
		borderRadius: 25,
		width: 52,
		height: 52,
	},
	minAgoText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 11,
		marginTop: 28,
	},
	itemNameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 25,
		marginTop: 36,
	},
	praesentFacilisisDText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		width: 570,
	},
	moonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 88,
		width: 150,
		top: 50,
		height: 150,
	},
	shapeCopy4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 25,
		width: 30,
		top: 275,
		height: 30,
	},
	userNameCopy5Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 77,
	},
})
