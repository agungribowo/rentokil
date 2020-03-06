//
//  GalleryTwo
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Text, StyleSheet, Image, View } from "react-native"
import React from "react"


export default class GalleryTwo extends React.Component {

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
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 15,
							right: 15,
							top: 30,
							height: 24,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/ic-menu-2.png")}
							style={styles.icMenuImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/ic-search.png")}
							style={styles.icSearchImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						marginLeft: 5,
						marginRight: 5,
						marginTop: 4,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 12,
							width: 114,
							bottom: 13,
							height: 43,
							justifyContent: "flex-end",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.itemNameCopy5Text}>Item Name</Text>
						<Text
							style={styles.shortDescriptionCoText}>Short description</Text>
					</View>
					<View
						style={styles.contentView}>
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
									height: 245,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 180,
										height: 245,
									}}>
									<View
										style={styles.rectangle44Copy2View}/>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											width: 180,
											top: 0,
											height: 232,
											alignItems: "flex-start",
										}}>
										<View
											style={styles.rectangle44Copy3View}/>
										<Text
											style={styles.itemNameText}>Item Name</Text>
										<Text
											style={styles.shortDescriptionText}>Short description</Text>
									</View>
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
										height: 245,
									}}>
									<View
										style={styles.rectangle44Copy5View}/>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											right: 0,
											width: 180,
											top: 0,
											height: 232,
											alignItems: "flex-end",
										}}>
										<View
											style={styles.rectangle44Copy4View}/>
										<Text
											style={styles.itemNameCopyText}>Item Name</Text>
										<Text
											style={styles.shortDescriptionCoTwoText}>Short description</Text>
									</View>
									<Image
										source={require("./../../assets/images/moon.png")}
										style={styles.moonTwoImage}/>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 180,
									marginTop: 5,
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
										style={styles.rectangle44Copy6View}/>
									<Image
										source={require("./../../assets/images/moon.png")}
										style={styles.moonFourImage}/>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 21,
									marginLeft: 12,
									marginRight: 83,
									marginTop: 8,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.itemNameCopy3Text}>Item Name</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.itemNameCopy2Text}>Item Name</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 19,
									marginLeft: 12,
									marginRight: 54,
									marginTop: 4,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.shortDescriptionCoThreeText}>Short description</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.shortDescriptionCoFourText}>Short description</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 245,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 180,
										height: 245,
									}}>
									<View
										style={styles.rectangle44Copy13View}/>
									<View
										style={styles.rectangle44Copy12View}/>
									<Image
										source={require("./../../assets/images/group-copy-5.png")}
										style={styles.groupCopy5Image}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 180,
										height: 245,
									}}>
									<View
										style={styles.rectangle44Copy11View}/>
									<View
										style={styles.rectangle44Copy10View}/>
									<Image
										source={require("./../../assets/images/group-copy-5.png")}
										style={styles.groupCopy4Image}/>
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
								pointerEvents="box-none"
								style={{
									height: 245,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View
									style={styles.rectangle44Copy9View}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.rectangle44Copy7View}/>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 54,
							width: 114,
							bottom: 13,
							height: 43,
							justifyContent: "flex-end",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.itemNameCopy4Text}>Item Name</Text>
						<Text
							style={styles.shortDescriptionCoFiveText}>Short description</Text>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	icSearchImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	itemNameCopy5Text: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginBottom: 5,
	},
	shortDescriptionCoText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	contentView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 745,
	},
	rectangle44Copy2View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 180,
		top: 0,
		height: 245,
	},
	rectangle44Copy3View: {
		backgroundColor: "white",
		width: 180,
		height: 180,
	},
	itemNameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginTop: 8,
	},
	shortDescriptionText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 12,
		marginTop: 4,
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
	rectangle44Copy5View: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 180,
		top: 0,
		height: 245,
	},
	rectangle44Copy4View: {
		backgroundColor: "white",
		width: 180,
		height: 180,
	},
	itemNameCopyText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 83,
		marginTop: 8,
	},
	shortDescriptionCoTwoText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 54,
		marginTop: 4,
	},
	moonTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 40,
		width: 100,
		top: 40,
		height: 100,
	},
	rectangle44Copy8View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 180,
		top: 0,
		height: 180,
	},
	moonThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 40,
		width: 100,
		top: 40,
		height: 100,
	},
	rectangle44Copy6View: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 180,
		top: 0,
		height: 180,
	},
	moonFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 40,
		width: 100,
		top: 40,
		height: 100,
	},
	itemNameCopy3Text: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	itemNameCopy2Text: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	shortDescriptionCoThreeText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	shortDescriptionCoFourText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	rectangle44Copy13View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 180,
		bottom: 0,
		height: 245,
	},
	rectangle44Copy12View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		width: 180,
		bottom: 65,
		height: 180,
	},
	groupCopy5Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 40,
		width: 101,
		bottom: 104,
		height: 101,
	},
	rectangle44Copy11View: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 180,
		bottom: 0,
		height: 245,
	},
	rectangle44Copy10View: {
		backgroundColor: "white",
		position: "absolute",
		right: 0,
		width: 180,
		bottom: 65,
		height: 180,
	},
	groupCopy4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 39,
		width: 101,
		bottom: 104,
		height: 101,
	},
	rectangle44Copy9View: {
		backgroundColor: "white",
		width: 180,
		height: 245,
	},
	rectangle44Copy7View: {
		backgroundColor: "white",
		width: 180,
		height: 245,
	},
	itemNameCopy4Text: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 29,
		marginBottom: 5,
	},
	shortDescriptionCoFiveText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})
