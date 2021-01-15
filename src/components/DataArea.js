import React, { Component } from 'React';
import API from '../utils/API';
import '../style/DataAre.css';
import Navbar from '/Navbar';



export default class DataArea extends Component {

state = {
users:[{}], 
order:'descend',
filteredUsers: [{}]
};
headings = [
{name: 'Name'},
{name: 'Image'},
{name: 'Phone'},
{name: 'Email'},
{name: 'Date of Birth'},
]

componentDidMount () {
    API.getEmployee().then(results => {
this.setState({

    users: results.data.results,
    filteredUsers: results.data.results,

})
    
    })
}

// function to handle sort, handle sort change 

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
<NavBar handleSearchChange={handleSearchChange}/>

        note main data table headings name, email, phone dataBirth picture name
         
         
         </>
    );
}
}