import React from 'react';
import Header from "components/Header";
import { withRouter } from 'react-router-dom';

const logoHiddenPaths = ["/"];

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hideLogo: false };
        this.listener = false;
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        if (logoHiddenPaths.includes(this.props.location.pathname)) {
            if (!this.listener) {
                this.onScroll();
                document.getElementById("app").children.item(0).addEventListener("scroll", this.onScroll);
                this.listener = true;
            }
        } else if (this.state.hideLogo) {
            this.setHideLogo(false);
            if (this.listener) {
                document.getElementById("app").children.item(0).removeEventListener("scroll", this.onScroll);
                this.listener = false;
            }
        }
    }

    onScroll() {
        if (document.getElementById("app").children.item(0).scrollTop <= 120) {
            if (!this.state.hideLogo) {
                this.setHideLogo(true);
            }
        } else if (this.state.hideLogo) {
            this.setHideLogo(false);
        }
    }

    setHideLogo(status) {
        this.setState({hideLogo: status});
    }
    
    render() {
        return (<Header hideLogo={this.state.hideLogo} />);
    }
}

export default withRouter(HeaderContainer);