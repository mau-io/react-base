import React from 'react';
//import {Context} from '../context/userContext';

const Search = () => {

    const [value, setValue] = React.useState('some initial value');


    function handleUpdateWeather(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        // `state` is an object containing all your context variables.
       // console.log(context) // { foo: "bar", baz: "qux" }

        // `update` is a function that lets you update the variables; for instance:
        //setContext({ foo: "garply" })
      }

    return (
        <div className="container">

            <div class="row">
                <div class="col-md-12  text-center">
                    <h1 class="text-shadow">Weather Conditions</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12  text-center">
                    <p><b class="text-shadow">Fetch the Weather with OpenWeatherMap API and display it</b></p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12  text-center">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="City name" value={value} aria-label="City name" onChange={e => setValue(e.target.value)} 
                            aria-describedby="basic-addon2" id="city"/>
                            <div class="input-group-append">
                                <button class="btn btn-secondary" type="button" onClick={handleUpdateWeather} id="searchRepository">Search</button>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search;