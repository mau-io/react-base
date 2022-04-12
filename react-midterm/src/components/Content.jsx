// There are two ways to make component
// Class based

import { Component } from "react";

class Content extends Component {
    render() {
        return (
          <div id="background-wrap">
            <div class="x1">
                <div class="cloud"></div>
            </div>
        
            <div class="x2">
                <div class="cloud"></div>
            </div>
        
            <div class="x3">
                <div class="cloud"></div>
            </div>
        
            <div class="x4">
                <div class="cloud"></div>
            </div>
        
            <div class="x5">
                <div class="cloud"></div>
            </div>
        </div>
        )
    }
}


export default Content;