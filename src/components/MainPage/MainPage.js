import React, { Component } from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from "../../components/Scroll/Scroll";
import ErrorBoundry from "../../components/ErrorBoundry/ErrorBoundry";
import './MainPage.css'

class MainPage extends Component {

    async componentDidMount() {
        this.props.onRequestRobots()
    }

    filterRobots = robots => {
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render() {
        const { onSearchChange, robots, isPending } = this.props;

        return isPending ?
        <h1>LOADING</h1> :
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={this.filterRobots(robots)}/>
                </ErrorBoundry>       
            </Scroll>   
        </div>
    }
}

export default MainPage;