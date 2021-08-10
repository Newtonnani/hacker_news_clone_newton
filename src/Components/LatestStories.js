import axios from 'axios';
import React, { Component } from 'react'
import './comp.css'
const CancelToken = axios.CancelToken;
let cancel;

export default class LatestStories extends Component {
    constructor() {
        super();
        this.state = {
            newStories: [],
            isDataFetch: false
        }
    }

    async componentDidMount() {
        const [arrStories] = await Promise.all([axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty", {
            cancelToken: new CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                cancel = c;
            })
        })])
        cancel();
        var arrStoriesReq = arrStories.data.splice(0, 30)
        var stories = []
        for (let i = 0; i < arrStoriesReq.length; i++) {
            let cancel2
            stories.push((await axios.get(`https://hacker-news.firebaseio.com/v0/item/${arrStoriesReq[i]}.json?print=pretty`, {
                cancelToken: new CancelToken(function executor(c) {
                    // An executor function receives a cancel function as a parameter
                    cancel2 = c;
                })
            })).data);
            cancel2();
        }
        this.setState({
            newStories: stories,
            isDataFetch: true
        })
    }

    render() {
        const { newStories, isDataFetch } = this.state
        if (isDataFetch) {
            return (
                <React.Fragment>
                    {newStories.map((top, index) => {
                        return <div className="title_container"><p key={index} className="title">{top.title}</p><br /><a href={top.url} className="link">{top.url}</a></div>
                    })}
                </React.Fragment>
            )
        }

        else {
            return (
                <div className="loading">
                    Loading.....
                </div>
            )
        }

    }
}
