//
//  Profile
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, View, Image, StyleSheet } from "react-native"
import React from "react"


export default class Profile extends React.Component {

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
							alignSelf: "stretch",
							height: 375,
						}}>
						<View
							style={styles.rectangle44Copy3View}/>
						<View
							style={styles.icUserView}>
							<Image
								source={require("./../../assets/images/shape-copy-4.png")}
								style={styles.shapeCopy4Image}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.userNameText}>User Name</Text>
					<Text
						style={styles.interprenierMentorText}>interprenier, mentor, designer</Text>
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
		backgroundColor: "transparent",
		height: 463,
		alignItems: "center",
	},
	rectangle44Copy3View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 375,
	},
	icUserView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 125,
		position: "absolute",
		alignSelf: "center",
		width: 252,
		top: 62,
		height: 252,
		justifyContent: "center",
		alignItems: "center",
	},
	shapeCopy4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 150,
		height: 150,
	},
	userNameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginBottom: 12,
	},
	interprenierMentorText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
})
