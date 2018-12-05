import React, {Component} from "react";
import {ScrollView, View, Text, ActivityIndicator} from "react-native";

//导入自定义的无状态的组件

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true, //是否正在加载
            inTheatersList: [], //正在热映的数据
            comingSoonList: [], //即将上映的数据
            top250List: [] //top250的数据
        };
    }

    componentWillMount() {
        Promise.all([
            fetch(
                "https://api.douban.com/v2/movie/in_theaters?start=0&count=10"
            ).then(res => res.json()),
            fetch(
                "https://api.douban.com/v2/movie/coming_soon?start=0&count=10"
            ).then(res => res.json()),
            fetch("https://api.douban.com/v2/movie/top250?start=0&count=10").then(
                res => res.json()
            )
        ]).then(results => {
            this.setState({
                isLoading: false,
                inTheatersList: results[0].subjects,
                comingSoonList: results[1].subjects,
                top250List: results[2].subjects
            });
        });
    }

    render() {
        if (this.state.isLoading) {
            //正在加载
            return <ActivityIndicator size="large" color="#0000ff"/>;
        } else {
            return (
                <ScrollView>
                    <Text>{this.state.inTheatersList[0].title}</Text>
                    <Text>{this.state.comingSoonList[0].title}</Text>
                    <Text>{this.state.top250List[0].title}</Text>
                </ScrollView>
            );
        }
    }
}
