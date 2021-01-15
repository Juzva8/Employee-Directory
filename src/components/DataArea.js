import React, { Component } from 'react';
import API from '../utils/API';
import '../style/DataArea.css';
import NavBar from './Navbar';
import DataTable from './DataTable';


export default class DataArea extends Component {

state = {
users:[{}], 
order:'descend',
filteredUsers: [{}]
};
headings = [
{name: 'Image', width:'10%'},
{name: 'Name', width:'20%'},
{name: 'Phone', width:'20%'},
{name: 'Email', width:'20%'},
{name: 'Date of Birth', width:'20%'},
]

componentDidMount () {
    API.getEmployee().then(results => {
this.setState({

    users: results.data.results,
    filteredUsers: results.data.results,

})
    
    })
}

handleSort = heading => { 
if (this.state.order === 'descend'){
    this.setState({order: 'ascend'})
}else {this.setState({order: 'descend'})}
const compareFnc = (a, b) => {
    if (this.state.order === "ascend") {
      // account for missing values
      if (a[heading] === undefined) {
        return 1;
      } else if (b[heading] === undefined) {
        return -1;
      }
      // numerically
      else if (heading === "name") {
        return a[heading].first.localeCompare(b[heading].first);
      } else {
        return a[heading] - b[heading];
      }
    } else {
      // account for missing values
      if (a[heading] === undefined) {
        return 1;
      } else if (b[heading] === undefined) {
        return -1;
      }
      // numerically
      else if (heading === "name") {
        return b[heading].first.localeCompare(a[heading].first);
      } else {
        return b[heading] - a[heading];
      }
    }
  }
const userSort = this.state.filteredUsers.sort(compareFnc)
this.setState({filteredUsers: userSort});
}


handleSearchChange = event => {
console.log(event.target.value)
const filter = event.target.value 
const filteredList = this.state.users.filter(item => { 
let values = Object.values(item).join('').toLowerCase()
return values.indexOf(filter.toLowerCase()) !== -1
})
this.setState({
    filteredUsers: filteredList
})
}

render() {
    return (
         <>
<NavBar handleSearchChange={this.handleSearchChange}/>
         < DataTable 
         headings = {this.headings}
         users = {this.state.filteredUsers}
         handleSort = {this.handleSort}
         />
         
         </>
    );
}
}