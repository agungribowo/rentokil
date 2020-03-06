//
//  ItemDetailsTwo
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet, Image, View, Text } from "react-native"
import React from "react"


export default class ItemDetailsTwo extends React.Component {

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
							source={require("./../../assets/images/ic-back.png")}
							style={styles.icBackImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/ic-cart.png")}
							style={styles.icCartImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 75,
					}}>
					<View
						style={styles.rectangle44Copy4View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 124,
							top: 2,
							height: 65,
							alignItems: "center",
						}}>
						<Text
							style={styles.itemNameText}>Item Name</Text>
						<Text
							style={styles.copyText}>$ 15,73</Text>
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
								width: 175,
								height: 21,
								marginLeft: 34,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text
								style={styles.detailsText}>Details</Text>
							<Text
								style={styles.specText}>Spec</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 30,
							bottom: 0,
							height: 42,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.relatedText}>Related</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle44Copy10View}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						marginTop: 13,
					}}>
					<Text
						style={styles.loremIpsumDolorSiText}>Lorem ipsum dolor sit amet, consectetur {"\n"}adipiscing elit. Ut pretium pretium tempor. {"\n"}Ut eget imperdiet neque. In volutpat ante {"\n"}semper diam molestie, et aliquam erat {"\n"}laoreet. Sed sit amet arcu aliquet, molestie {"\n"}justo at, auctor nunc. Phasellus ligula {"\n"}ipsum, volutpat eget semper id, viverra {"\n"}eget nibh. Suspendisse luctus mattis {"\n"}cursus. Nam consectetur ante at nisl {"\n"}hendrerit gravida. Donec vehicula rhoncus {"\n"}mattis. Mauris dignissim semper mattis. {"\n"}Fusce porttitor a mi at suscipit.{"\n"}Praesent facilisis dolor sapien, vel sodales {"\n"}augue mollis ut. Mauris venenatis magna eu {"\n"}tortor posuere luctus. Aenean tincidunt {"\n"}turpis sed dui aliquam vehicula. Praesent {"\n"}nec elit non dolor consectetur tincidunt {"\n"}sed in felis. Donec elementum, lacus at {"\n"}mattis tincidunt, eros magna faucibus sem, {"\n"}in condimentum est augue tristique risus.</Text>
					<View
						style={styles.addToCartView}>
						<View
							pointerEvents="box-none"
							style={{
								width: 51,
								height: 51,
								marginLeft: 12,
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
									style={styles.rectangle44Copy7View}/>
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
								<View
									style={styles.rectangle44Copy9View}/>
							</View>
						</View>
						<Text
							style={styles.textText}>0</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 51,
								height: 51,
								marginLeft: 34,
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
									style={styles.rectangle44Copy8View}/>
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
								<View
									style={styles.rectangle44Copy10TwoView}/>
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
								<View
									style={styles.rectangle44Copy11View}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 151,
								height: 51,
								marginRight: 12,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.rectangle44Copy6View}/>
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
								<Text
									style={styles.addToCartText}>Add to Cart</Text>
							</View>
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
		width: 24,
		height: 24,
	},
	icCartImage: {
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
		height: 75,
	},
	itemNameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	copyText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 5,
	},
	tabsView: {
		backgroundColor: "white",
		height: 60,
	},
	detailsText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	specText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	relatedText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "flex-end",
	},
	rectangle44Copy10View: {
		backgroundColor: "black",
		width: 125,
		height: 2,
	},
	loremIpsumDolorSiText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 14,
		top: 0,
	},
	addToCartView: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 75,
		flexDirection: "row",
		alignItems: "center",
	},
	rectangle44Copy7View: {
		backgroundColor: "rgb(200, 200, 200)",
		width: 51,
		height: 51,
	},
	rectangle44Copy9View: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 21,
		height: 3,
		marginLeft: 15,
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "flex-start",
		marginLeft: 35,
		marginTop: 20,
	},
	rectangle44Copy8View: {
		backgroundColor: "black",
		width: 51,
		height: 51,
	},
	rectangle44Copy10TwoView: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 3,
		height: 21,
		marginLeft: 24,
	},
	rectangle44Copy11View: {
		backgroundColor: "white",
		borderRadius: 1,
		width: 21,
		height: 3,
		marginLeft: 15,
	},
	rectangle44Copy6View: {
		backgroundColor: "rgb(200, 200, 200)",
		width: 151,
		height: 51,
	},
	addToCartText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 19,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginRight: 26,
	},
})
