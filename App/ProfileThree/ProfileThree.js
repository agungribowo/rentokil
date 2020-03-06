//
//  ProfileThree
//  Rentokil
//
//  Created by Rentokil.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { StyleSheet, Text, Image, View } from "react-native"
import React from "react"


export default class ProfileThree extends React.Component {

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
							style={styles.profileText}>User Name</Text>
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
							height: 84,
							marginLeft: 19,
							marginRight: 35,
							marginTop: 14,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.icUserView}>
							<Image
								source={require("./../../assets/images/shape-copy-4-3.png")}
								style={styles.shapeCopy4Image}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 84,
								marginLeft: 30,
								alignItems: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 40,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 61,
										height: 40,
									}}>
									<Text
										style={styles.textTwoText}>287</Text>
									<Text
										style={styles.followingText}>Following</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 61,
										height: 40,
										marginRight: 31,
									}}>
									<Text
										style={styles.mText}>1.3m</Text>
									<Text
										style={styles.followersCopyText}>Followers</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										width: 37,
										height: 40,
									}}>
									<Text
										style={styles.textText}>539</Text>
									<Text
										style={styles.postsText}>Posts</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: 201,
									height: 30,
									marginRight: 2,
									marginTop: 14,
								}}>
								<View
									style={styles.rectangle44Copy4View}/>
								<Text
									style={styles.followText}>Follow</Text>
							</View>
						</View>
					</View>
					<Text
						style={styles.interprenierMentorText}>Interprenier, mentor, designer</Text>
					<Text
						style={styles.loremIpsumDolorSiText}>Lorem ipsum dolor sit amet, consectetur {"\n"}adipiscing elit. Ut pretium pretium {"\n"}tempor. Ut eget imperdiet neque. In {"\n"}volutpat ante semper diam molestie, {"\n"}et aliquam erat laoreet. </Text>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 345,
						marginLeft: 5,
						marginRight: 5,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 74,
							right: 128,
							bottom: 13,
							height: 19,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.likedYourPhotoCopText}>Liked your photo</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.minCopy2Text}>3 min</Text>
					</View>
					<View
						style={styles.feedView}>
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
									height: 65,
								}}>
								<View
									style={styles.rectangle44Copy3View}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 12,
										right: 5,
										top: 3,
										height: 60,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.oval766CopyView}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 111,
											height: 44,
											marginLeft: 12,
											marginTop: 5,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.userNameCopyText}>User Name</Text>
										<Text
											style={styles.likedYourPhotoText}>Liked your photo</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.minText}>3 min</Text>
									<View
										style={styles.imageView}>
										<Image
											source={require("./../../assets/images/group-copy-2.png")}
											style={styles.groupCopy2Image}/>
									</View>
								</View>
								<Image
									source={require("./../../assets/images/shape-copy.png")}
									style={styles.shapeCopyImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 65,
									marginTop: 5,
								}}>
								<View
									style={styles.rectangle44Copy5View}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 12,
										right: 5,
										top: 7,
										height: 51,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.oval766Copy2View}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 126,
											height: 44,
											marginLeft: 12,
											marginTop: 1,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.userNameCopy2Text}>User Name</Text>
										<View
											pointerEvents="box-none"
											style={{
												width: 126,
												height: 19,
												marginTop: 4,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.followYouText}>Follow you</Text>
											<Text
												style={styles.minTwoText}>11 min</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.rectangle44Copy7View}/>
								</View>
								<Image
									source={require("./../../assets/images/shape-copy.png")}
									style={styles.shapeCopy2Image}/>
								<Text
									style={styles.followCopyText}>Follow</Text>
							</View>
							<Text
								style={styles.userNameCopy3Text}>User Name</Text>
							<View
								pointerEvents="box-none"
								style={{
									height: 19,
									marginLeft: 75,
									marginRight: 114,
									marginTop: 4,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.sendYouRequestText}>Send you request</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.minThreeText}>45 min</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 65,
									marginTop: 18,
								}}>
								<View
									style={styles.rectangle44Copy10View}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 12,
										right: 5,
										top: 3,
										height: 60,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.oval766Copy5View}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 111,
											height: 44,
											marginLeft: 12,
											marginTop: 5,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.userNameCopy4Text}>User Name</Text>
										<Text
											style={styles.likedYourPhotoCopTwoText}>Liked your photo</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.minCopyText}>3 min</Text>
									<View
										style={styles.imageCopyView}>
										<Image
											source={require("./../../assets/images/group-copy-2.png")}
											style={styles.groupCopy2TwoImage}/>
									</View>
								</View>
								<Image
									source={require("./../../assets/images/shape-copy.png")}
									style={styles.shapeCopy5Image}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 65,
								}}>
								<View
									style={styles.rectangle44Copy11View}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 12,
										right: 5,
										bottom: 2,
										height: 60,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<View
										style={styles.oval766Copy6View}/>
									<Text
										style={styles.userNameCopy5Text}>User Name</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.imageCopy2View}>
										<Image
											source={require("./../../assets/images/group-copy-2.png")}
											style={styles.groupCopy2ThreeImage}/>
									</View>
								</View>
								<Image
									source={require("./../../assets/images/shape-copy.png")}
									style={styles.shapeCopy6Image}/>
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
								style={styles.rectangle44Copy6View}/>
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
									height: 51,
									marginLeft: 12,
									marginRight: 5,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View
									style={styles.oval766Copy3View}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.rectangle44Copy8View}/>
							</View>
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
								source={require("./../../assets/images/shape-copy.png")}
								style={styles.shapeCopy3Image}/>
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
								style={styles.allowText}>Allow</Text>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 15,
		width: 24,
		top: 31,
		height: 24,
	},
	profileView: {
		backgroundColor: "white",
		height: 285,
		alignItems: "center",
	},
	icUserView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 40,
		width: 82,
		height: 82,
		marginTop: 2,
		justifyContent: "center",
	},
	shapeCopy4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 48,
		marginLeft: 17,
		marginRight: 17,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 13,
		top: 16,
	},
	followingText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	mText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		right: 8,
		top: 16,
	},
	followersCopyText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		top: 0,
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		right: 1,
		top: 16,
	},
	postsText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		top: 0,
	},
	rectangle44Copy4View: {
		backgroundColor: "white",
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 201,
		top: 0,
		height: 30,
	},
	followText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 74,
		top: 3,
	},
	interprenierMentorText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 25,
		marginTop: 25,
	},
	loremIpsumDolorSiText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 11,
	},
	likedYourPhotoCopText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	minCopy2Text: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	feedView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 345,
	},
	rectangle44Copy3View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 65,
	},
	oval766CopyView: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		width: 51,
		height: 51,
		marginTop: 4,
	},
	userNameCopyText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	likedYourPhotoText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 4,
	},
	minText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 63,
		marginTop: 30,
	},
	imageView: {
		backgroundColor: "rgb(235, 235, 235)",
		width: 60,
		height: 60,
		justifyContent: "center",
	},
	groupCopy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 51,
		marginLeft: 5,
		marginRight: 4,
	},
	shapeCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 23,
		width: 30,
		top: 18,
		height: 30,
	},
	rectangle44Copy5View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 65,
	},
	oval766Copy2View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		width: 51,
		height: 51,
	},
	userNameCopy2Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	followYouText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	minTwoText: {
		backgroundColor: "transparent",
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 10,
	},
	rectangle44Copy7View: {
		backgroundColor: "white",
		borderRadius: 15.5,
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		width: 100,
		height: 31,
		marginTop: 10,
	},
	shapeCopy2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 23,
		width: 30,
		top: 18,
		height: 30,
	},
	followCopyText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		right: 29,
		top: 20,
	},
	userNameCopy3Text: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 75,
		marginTop: 13,
	},
	sendYouRequestText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	minThreeText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	rectangle44Copy10View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 65,
	},
	oval766Copy5View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		width: 51,
		height: 51,
		marginTop: 4,
	},
	userNameCopy4Text: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	likedYourPhotoCopTwoText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 4,
	},
	minCopyText: {
		color: "rgb(155, 155, 155)",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 63,
		marginTop: 30,
	},
	imageCopyView: {
		backgroundColor: "rgb(235, 235, 235)",
		width: 60,
		height: 60,
		justifyContent: "center",
	},
	groupCopy2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 51,
		marginLeft: 5,
		marginRight: 4,
	},
	shapeCopy5Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 23,
		width: 30,
		top: 18,
		height: 30,
	},
	rectangle44Copy11View: {
		backgroundColor: "white",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 65,
	},
	oval766Copy6View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		width: 51,
		height: 51,
		marginBottom: 5,
	},
	userNameCopy5Text: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 12,
		marginBottom: 34,
	},
	imageCopy2View: {
		backgroundColor: "rgb(235, 235, 235)",
		width: 60,
		height: 60,
		justifyContent: "center",
	},
	groupCopy2ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 51,
		marginLeft: 5,
		marginRight: 4,
	},
	shapeCopy6Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 23,
		width: 30,
		bottom: 17,
		height: 30,
	},
	rectangle44Copy6View: {
		backgroundColor: "white",
		height: 65,
	},
	oval766Copy3View: {
		backgroundColor: "rgb(235, 235, 235)",
		borderRadius: 25,
		width: 51,
		height: 51,
	},
	rectangle44Copy8View: {
		backgroundColor: "white",
		borderRadius: 15.5,
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		width: 100,
		height: 31,
	},
	shapeCopy3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 30,
		marginLeft: 23,
	},
	allowText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 33,
	},
})
