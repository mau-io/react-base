// There are two ways to make component
// Class based

import { Component } from "react";

class Content extends Component {
    // This syntax is called a class component
    constructor() {
        super();
        //Create a state with name, age, address.
        this.state = {
            name: "Maurice",
            age: "30",
            address: "123 Main St"
        }
        // You have 10 names in an array.
        this.names = ["Maurice", "Albert", "John", "Jane", "Mary", "Bob", "Joe", "Sue", "Sally", "Sam"];
    }

    // This syntax is called a function component
    changeName() {
        // setState
        this.setState({
            name: "Albert",
        })
    }
    
    // Make it so that the 1 text shows each time and shows every 5 seconds.
    // componentDidMount is a lifecycle method that runs after the component is rendered.
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: this.names[Math.floor(Math.random() * this.names.length)]
            })
        }, 5000)
    }


    render() {
        console.log(this.props); // props is a reserved keyword
        return (
           <section>
                <h1>{this.state.name}</h1>
                <h2>{this.state.age}</h2>
                <h3>{this.state.address}</h3>
                button tag, and make it so that the Name changes text (anything is fine) when button is pressed
                <button onClick={() => this.changeName()}>Change Name</button>

           </section>
        )
    }
}

export default Content;