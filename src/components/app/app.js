import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Rand', salary: 1000, increase: false, rise: true, id: 1 },
        { name: 'Eugwein', salary: 1500, increase: true, rise: false, id: 2 },
        { name: 'Morein', salary: 4000, increase: true, rise: false, id: 3 }
      ],
      term: '',
      filter: 'rise'
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {


      // data.splice(index, 1); - нельзя напрямую менять элементы!

      // 1st 
      // const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after]
      // return {
      //   data: newArr
      // }

      // 2nd
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  // toggleIncrease = (id) => {
  //   this.setState(({ data }) => {
  //     const index = data.findIndex(elem => elem.id === id);

  //     const old = data[index];
  //     const newItem = { ...old, increase: !old.increase };
  //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

  //     return {
  //       data: newArr
  //     }

  //   });

  //   2nd variant
  //   this.setState(({ data }) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase }
  //       }
  //       return item;
  //     })
  //   }))

  // }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    });
  }

  onUpdateSearch = (term) => {
    // this.setState({term: term})
    this.setState({ term });
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen10000':
        return items.filter(item => item.salary >= 10000)
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const employeesCount = this.state.data.length;
    const increasedCount = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo employeesCount={employeesCount} increasedCount={increasedCount} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeeList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeeAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
