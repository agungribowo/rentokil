//
//  Checkout
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { View, Image, StyleSheet, Text } from "react-native"
import React from "react"


export default class Checkout extends React.Component {

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
							style={styles.profileText}>Checkout</Text>
					</View>
					<Image
						source={require("./../../assets/images/ic-back.png")}
						style={styles.icBackImage}/>
				</View>
				<View
					style={styles.detailsView}>
					<Text
						style={styles.personalInfoText}>Personal info</Text>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
							marginTop: 11,
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
							<Image
								source={require("./../../assets/images/ic-profile-copy.png")}
								style={styles.icProfileCopyImage}/>
							<Text
								style={styles.accountText}>Account</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.georgeFrigoText}>George Frigo</Text>
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
							style={styles.rectangle44Copy5View}/>
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
							<Image
								source={require("./../../assets/images/ic-email.png")}
								style={styles.icEmailImage}/>
							<Text
								style={styles.eMailText}>E-mail</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.georgeProvectusComText}>george@provectus.com</Text>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextTwoImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
						}}>
						<View
							style={styles.rectangle44Copy10View}/>
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
							<Image
								source={require("./../../assets/images/ic-phone.png")}
								style={styles.icPhoneImage}/>
							<Text
								style={styles.phoneNumberText}>Phone Number</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textText}>555 555 55 55</Text>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextCopy3Image}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
						}}>
						<View
							style={styles.rectangle44Copy9View}/>
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
							<Image
								source={require("./../../assets/images/ic-location-copy.png")}
								style={styles.icLocationCopyImage}/>
							<Text
								style={styles.locationCopyText}>Location</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.odessaUkraineCopyText}>Odessa, Ukraine</Text>
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
							style={styles.rectangle44Copy8View}/>
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
							<Image
								source={require("./../../assets/images/ic-card-copy.png")}
								style={styles.icCardCopyImage}/>
							<Text
								style={styles.cardCopyText}>Card</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textTwoText}>**** **** **** 1234</Text>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextCopyImage}/>
						</View>
					</View>
					<Text
						style={styles.orderInfoText}>Order info</Text>
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
							style={styles.rectangle44Copy7View}/>
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
								style={styles.totalItemsText}>Total items</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textFourText}>3</Text>
							<Image
								source={require("./../../assets/images/ic-next.png")}
								style={styles.icNextThreeImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 60,
						}}>
						<View
							style={styles.rectangle44Copy11View}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 17,
								bottom: 15,
								height: 30,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.totalPriceText}>Total Price</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textThreeText}>$ 16,96</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
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
						style={styles.submitText}>Submit</Text>
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
	detailsView: {
		backgroundColor: "transparent",
		height: 500,
		marginTop: 8,
	},
	personalInfoText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 16,
	},
	rectangle44Copy4View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icProfileCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	accountText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginTop: 1,
	},
	georgeFrigoText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 7,
		marginTop: 1,
	},
	icNextImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
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
	icEmailImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	eMailText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 20,
		marginTop: 1,
	},
	georgeProvectusComText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginRight: 7,
		marginTop: 1,
	},
	icNextTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	rectangle44Copy10View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icPhoneImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	phoneNumberText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginTop: 1,
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginRight: 7,
		marginTop: 1,
	},
	icNextCopy3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	rectangle44Copy9View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icLocationCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	locationCopyText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginTop: 1,
	},
	odessaUkraineCopyText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 7,
		marginTop: 1,
	},
	icNextCopy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	rectangle44Copy8View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 60,
	},
	icCardCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	cardCopyText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginTop: 1,
	},
	textTwoText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginRight: 7,
		marginTop: 1,
	},
	icNextCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
	},
	orderInfoText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 16,
		marginTop: 20,
	},
	rectangle44Copy7View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	totalItemsText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 1,
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		marginRight: 7,
		marginBottom: 1,
	},
	icNextThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	rectangle44Copy11View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 60,
	},
	totalPriceText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginBottom: 4,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
	},
	rectangle44Copy6View: {
		backgroundColor: "black",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 50,
	},
	submitText: {
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
