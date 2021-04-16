import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        response.json()
          .then(users => {
            this.setState({ monsters: users })
          })
      })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMosters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
    return (
      <div className="App">
        <Searchbox
          placeholder="type for search monster"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <h1>list</h1>
        <CardList monsters={filteredMosters}>
        </CardList>

      </div>
    )
  }
}

export default App;
