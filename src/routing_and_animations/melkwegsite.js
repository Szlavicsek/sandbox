import React, {Component} from 'react';
import styles from './melkwegsite.module.scss';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Home from "../Routes/Home/home";
import Works from "../Routes/works/works";
import Agency from "../Routes/agency/agency";
import Contact from "../Routes/contact/contact";
import Jobs from "../Routes/jobs/jobs";
import WorkSample from "../Routes/worksample/worksample";
import Policy from "../Routes/policy/policy";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from '../Components/navbar/navbar';

class Melkwegsite extends Component {

	state = {
		theme: "light",
		canClick: true,
	};

	disableClick() {
		 this.setState({
			 canClick: false
		 })
		setTimeout(function () {
			this.setState({
				canClick: true
			})
		}, 1000)
	}



	render() {
		return (
			<>
				<Navbar textColor="#FFF" />
				<TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						appear={true}
						timeout={1}
						classNames="fade"
					>

						<Switch location={this.props.location}>

							<Route path="/"
								   exact
								   render={(props)=> <Home {...props}
															canClick={this.state.canClick}
															disableClick={()=>this.disableClick()}/>} />
							<Route path="/works"
								   render={(props)=> <Works {...props}
															canClick={this.state.canClick}
															disableClick={()=>this.disableClick()}/>} />
							<Route path="/agency"
								   render={(props)=> <Agency {...props}
															 canClick={this.state.canClick}
															 disableClick={()=>this.disableClick()}/>} />
							<Route path="/contact"
								   render={(props)=> <Contact {...props}
															  canClick={this.state.canClick}
															  disableClick={()=>this.disableClick()}/>} />
							<Route path="/jobs"
								   render={(props)=> <Jobs {...props}
														   canClick={this.state.canClick}
														   disableClick={()=>this.disableClick()}/>} />
							<Route path="/worksample"
								   render={(props)=> <WorkSample {...props}
																 canClick={this.state.canClick}
																 disableClick={()=>this.disableClick()}/>} />
							<Route path="/policy"
								   render={(props)=> <Policy {...props}
															 canClick={this.state.canClick}
															 disableClick={()=>this.disableClick()}/>} />

							<Route render={(props)=> <div>Not found</div>} />
						</Switch>

					</CSSTransition>
				</TransitionGroup>
			</>
		);
	}
}

export default withRouter(Melkwegsite);