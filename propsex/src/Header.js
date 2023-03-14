import React from "react";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    // static getDerivedStateFromProps(props, state) {
    //     return { favoritecolor: props.favcol };
    // }
    componentDidMount() {

        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }
    shouldComponentUpdate() { return false;
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>);
    }
}
export default Header;