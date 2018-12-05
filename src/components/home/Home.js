import React, { Component } from "react";
import { View, Text,StyleSheet,Dimensions,Image } from "react-native";
import Carousel from "react-native-looped-carousel";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    images:{
        width:'100%',
        height:'100%'
    },
    navigator:{
        height:50,
        backgroundColor:'orange',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: { width, height:350 },
        };
    }
    render() {
        return (
            <View>
                {/* 1.0 轮播图 */}
                <View style={this.state.size}>
                    <Carousel
                        delay={3000}
                        style={this.state.size}
                        autoplay
                        bullets
                        arrows
                        leftArrowText={"<"}
                        leftArrowStyle={{ color: "white", fontSize: 30, margin: 20 }}
                        rightArrowText={">"}
                        rightArrowStyle={{ color: "white", fontSize: 30, margin: 20 }}
                    >
                        <View style={this.state.size}>
                            <Image
                                style={styles.images}
                                resizeMode="stretch"
                                source={{
                                    uri:
                                        "http://www.webhek.com/wordpress/wp-content/uploads/2018/04/headless-browsers-300x280.png"
                                }}
                            />
                        </View>
                        <View style={this.state.size}>
                            <Image
                                style={styles.images}
                                resizeMode="stretch"
                                source={{
                                    uri:
                                        "http://www.webhek.com/wordpress/wp-content/uploads/2018/03/slid1-300x280.jpg"
                                }}
                            />
                        </View>
                        <View style={this.state.size}>
                            <Image
                                style={styles.images}
                                resizeMode="stretch"
                                source={{
                                    uri:
                                        "http://www.webhek.com/wordpress/wp-content/uploads/2018/01/ES6-the-bits-youll-actually-use-300x280.png"
                                }}
                            />
                        </View>
                    </Carousel>
                </View>

                {/* 2.0 自定义导航条 */}
                <View style={styles.navigator}>
                    <Text>首 页</Text>
                    <Text onPress={()=>{
                        this.props.navigation.navigate('Movie')
                    }}>电 影</Text>
                    <Text onPress={()=>{
                        this.props.navigation.navigate('Mine')
                    }}>我 的</Text>
                </View>
            </View>
        );
    }
}
