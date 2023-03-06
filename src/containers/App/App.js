import React, { Component} from "react";
import CardList from "../../components/CardList";
import SearchBox from "../../components/SearchBox";
import './App.css'
import Scroll from "../../components/Scroll";
import ErrorBoundry from "../../components/ErrorBoundry";


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.cypress.io/users');
        const users = await response.json();
        this.setState({ robots: users })
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { robots, searchField } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return !robots.length ?
        <h1>LOADING</h1> :
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filterRobots}/>
                </ErrorBoundry>       
            </Scroll>   
        </div>
    }
}

export default App;