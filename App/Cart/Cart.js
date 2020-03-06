//
//  Cart
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"


export default class Cart extends React.Component {

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
							style={styles.profileText}>Cart</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-menu.png")}
						style={styles.icMenuImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 60,
						marginTop: 5,
					}}>
					<View
						style={styles.rectangle44Copy5View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 15,
							right: 15,
							top: 18,
							height: 21,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.storeText}>Store</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.storeNameText}>Store Name</Text>
					</View>
				</View>
				<View
					style={styles.itemView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 105,
							height: 106,
							marginLeft: 15,
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
							<Image
								source={require("./../../assets/images/moon-3.png")}
								style={styles.moonImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							alignSelf: "stretch",
							marginLeft: 15,
							marginRight: 82,
							marginTop: 6,
							marginBottom: 19,
						}}>
						<Text
							style={styles.itemNameCopy3Text}>Item Name</Text>
						<Text
							style={styles.shortDescriptionText}>Short description{"\n"}and more...</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 20,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.textText}>$ 7,39</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.perPoundText}>per pound</Text>
						</View>
					</View>
					<Image
						source={require("./../../assets/images/ic-next.png")}
						style={styles.icNextCopy2Image}/>
				</View>
				<View
					style={styles.itemTwoView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 105,
							height: 106,
							marginLeft: 15,
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
								style={styles.rectangle44Copy12View}/>
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
							<Image
								source={require("./../../assets/images/moon-3.png")}
								style={styles.moonTwoImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							alignSelf: "stretch",
							marginLeft: 15,
							marginRight: 82,
							marginTop: 6,
							marginBottom: 19,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.itemNameCopy4Text}>Item Name</Text>
						<Text
							style={styles.shortDescriptionCoText}>Short description{"\n"}and more...</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 20,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.textTwoText}>$ 6,42</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.perPoundCopyText}>per pound</Text>
						</View>
					</View>
					<Image
						source={require("./../../assets/images/ic-next.png")}
						style={styles.icNextCopy3Image}/>
				</View>
				<View
					style={styles.itemThreeView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 105,
							height: 106,
							marginLeft: 15,
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
								style={styles.rectangle44Copy14View}/>
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
							<Image
								source={require("./../../assets/images/moon-3.png")}
								style={styles.moonThreeImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							alignSelf: "stretch",
							marginLeft: 15,
							marginRight: 82,
							marginTop: 6,
							marginBottom: 19,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.itemNameCopy5Text}>Item Name</Text>
						<Text
							style={styles.shortDescriptionCoTwoText}>Short description{"\n"}and more...</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 20,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.textThreeText}>$ 3,15</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.perPoundCopy2Text}>per pound</Text>
						</View>
					</View>
					<Image
						source={require("./../../assets/images/ic-next.png")}
						style={styles.icNextCopy4Image}/>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.totalView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/line.png")}
							style={styles.lineImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 53,
							right: 42,
							top: 18,
							height: 68,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 20,
								marginRight: 11,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.totalItemsText}>Total Items</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.totalPriceText}>Total Price</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 34,
								marginLeft: 32,
								marginTop: 14,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.textFiveText}>3</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textFourText}>$ 16,96</Text>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 50,
						marginLeft: 4,
						marginRight: 5,
						marginBottom: 5,
					}}>
					<View
						style={styles.rectangle44Copy6View}/>
					<Text
						style={styles.checkoutText}>Checkout</Text>
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
		position: "absolute",
		left: 15,
		width: 24,
		top: 31,
		height: 24,
	},
	rectangle44Copy5View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	storeText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	storeNameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
	},
	itemView: {
		backgroundColor: "white",
		height: 120,
		marginTop: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	rectangle44Copy8View: {
		backgroundColor: "white",
		width: 105,
		height: 106,
	},
	moonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 90,
		height: 90,
		marginLeft: 8,
	},
	itemNameCopy3Text: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
	},
	shortDescriptionText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		marginRight: 11,
		marginTop: 5,
	},
	textText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	perPoundText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
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
		marginRight: 10,
	},
	itemTwoView: {
		backgroundColor: "white",
		height: 120,
		flexDirection: "row",
		alignItems: "center",
	},
	rectangle44Copy12View: {
		backgroundColor: "white",
		width: 105,
		height: 106,
	},
	moonTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 90,
		height: 90,
		marginLeft: 8,
	},
	itemNameCopy4Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shortDescriptionCoText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		marginRight: 11,
		marginTop: 5,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	perPoundCopyText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icNextCopy3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginRight: 10,
	},
	itemThreeView: {
		backgroundColor: "white",
		height: 120,
		flexDirection: "row",
		alignItems: "center",
	},
	rectangle44Copy14View: {
		backgroundColor: "white",
		width: 105,
		height: 106,
	},
	moonThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 90,
		height: 90,
		marginLeft: 8,
	},
	itemNameCopy5Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shortDescriptionCoTwoText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-end",
		marginRight: 11,
		marginTop: 5,
	},
	textThreeText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	perPoundCopy2Text: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	icNextCopy4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginRight: 10,
	},
	totalView: {
		backgroundColor: "white",
		height: 108,
		marginBottom: 5,
	},
	lineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 2,
		height: 104,
	},
	totalItemsText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	totalPriceText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	textFiveText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	textFourText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	rectangle44Copy6View: {
		backgroundColor: "black",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 50,
	},
	checkoutText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 19,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		bottom: 16,
	},
})
