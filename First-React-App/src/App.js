import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
	state = {
		persons: [
		{id: "fadga", name: "Raj", age: 21},
		{id: "hahafdagr", name: "Avinash", age: 15},
		{id: "dfadf12", name: "Pranit", age: 21}
		],
		showPersons: false
	}
	deletePersonsHandler = (personIndex) => {
		let persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({
			persons: persons
		})
	}
	nameChangedHandler = (event, personId) => {
		let personIndex = this.state.persons.findIndex(p => {
			return p.id === personId;
		})
		let person = {...this.state.persons[personIndex]}
		person.name = event.target.value
		let persons = [...this.state.persons]
		persons[personIndex] = person
		this.setState(
		{
			persons: persons
		}
		)
	}
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		})
	}
	render() {
		const style = {
		backgroundColor: "green",
		color: "white",
		border: "1px solid blue",
		padding: "8px",
		cursor: "pointer",
		':hover': {
			backgroundColor: "lightgreen",
			color: "white"
		}
		}
		let persons = null;
		if(this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
					return <Person name={person.name} age={person.age} key={person.id} click={this.deletePersonsHandler.bind(this, index)} changed={(event) => this.nameChangedHandler(event, person.id)}/>
					})
					}
				</div>	
			);
			style.backgroundColor = 'red'
			style[':hover']= {
				backgroundColor: "orange",
				color: "white"
			}
		}
		const classes=[]
		if (this.state.persons.length <= 2)
		{
			classes.push('red')
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold')
		}
		return (
			<StyleRoot>
				<div className="App">
					<h1>This is my first React App!</h1>
					<p className={classes.join(" ")}>This is really working!</p>
					<button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
					{persons}
				</div>
			</StyleRoot>
		);
	}
}

export default Radium(App);
