//
//  Gallery
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, View, Text } from "react-native"


export default class Gallery extends React.Component {

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
							style={styles.profileText}>Client</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-menu.png")}
						style={styles.icMenuImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 500,
						marginTop: 51,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							width: 21,
							height: 451,
							marginTop: 25,
						}}>
						<View
							style={styles.rectangle44Copy9View}/>
						<View
							style={styles.rectangle44Copy8View}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							width: 510,
							height: 500,
						}}>
						<View
							style={styles.rectangle44Copy6View}/>
						<View
							style={styles.rectangle44Copy7View}/>
						<View
							style={styles.itemView}>
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
									height: 386,
									alignItems: "flex-start",
								}}>
								<View
									style={styles.rectangle44Copy4View}/>
								<Text
									style={styles.itemNameText}>Client Name</Text>
								<Text
									style={styles.praesentFacilisisDText}>Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus.</Text>
							</View>
							<Image
								source={require("./../../assets/images/moon-2.png")}
								style={styles.moonImage}/>
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
	icMenuImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 15,
		width: 24,
		top: 30,
		height: 24,
	},
	rectangle44Copy9View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 21,
		top: 0,
		height: 451,
	},
	rectangle44Copy8View: {
		backgroundColor: "rgb(228, 228, 228)",
		position: "absolute",
		left: 0,
		width: 21,
		top: 0,
		height: 226,
	},
	rectangle44Copy6View: {
		backgroundColor: "white",
		position: "absolute",
		right: 172,
		width: 21,
		top: 25,
		height: 451,
	},
	rectangle44Copy7View: {
		backgroundColor: "rgb(228, 228, 228)",
		position: "absolute",
		right: 172,
		width: 21,
		top: 25,
		height: 226,
	},
	itemView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 510,
		top: 0,
		height: 500,
	},
	rectangle44Copy3View: {
		backgroundColor: "white",
		width: 300,
		height: 500,
	},
	rectangle44Copy4View: {
		backgroundColor: "rgb(235, 235, 235)",
		width: 300,
		height: 250,
	},
	itemNameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 76,
		marginTop: 27,
	},
	praesentFacilisisDText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "flex-end",
		width: 480,
		marginTop: 34,
	},
	moonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 75,
		width: 150,
		top: 50,
		height: 150,
	},
})
