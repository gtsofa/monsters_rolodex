import React from 'react';
import MonsterList from './MonsterList';
import SearcBar from './SearchBar';
import './App.css';
import '../index.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users}))
    }
    render() {
        // destructuring here ie const monsters = this.state.monsters etc
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
            );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearcBar
                    placeholder='search monsters...'
                    handleChange={e => this.setState({searchField: e.target.value})} />
                <MonsterList monsters={filteredMonsters} />
            </div>
        );
    }
}
export default App;