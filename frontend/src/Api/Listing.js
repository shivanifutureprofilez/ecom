import { Component } from "react";
import { Api } from "./Api";

class Listing extends Component {
    async Register(data) {
        return Api.post("/signup", data);
    }

    async Login(data) {
        return Api.post("/login", data);
    }

    render() {
        return (
            <div>
                <></>
            </div>
        );
    }
}

export default Listing;