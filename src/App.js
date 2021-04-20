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
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMosters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
    return (
      <div className="App">
        <h1>Moster Rolodex</h1>
        <Searchbox
          placeholder="type for search monster"
          handleChange={e => this.handleChange(e)}
        />
        <CardList monsters={filteredMosters}>
        </CardList>

      </div>
    )
  }
}

export default App;
