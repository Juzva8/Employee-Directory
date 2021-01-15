import React, { Component } from 'react';
import API from '../utils/API';
// import '../style/DataAre.css';
import NavBar from './Navbar';
import DataTable from './DataTable';


export default class DataArea extends Component {

state = {
users:[{}], 
order:'descend',
filteredUsers: [{}]
};
headings = [
{name: 'Name', width:'20%'},
{name: 'Image', width:'20%'},
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
         NavComponent handle search changes 
<NavBar handleSearchChange={this.handleSearchChange}/>

        note main data table headings name, email, phone dataBirth picture name
         < DataTable 
         headings = {this.headings}
         users = {this.state.filteredUsers}
         />
         
         </>
    );
}
}