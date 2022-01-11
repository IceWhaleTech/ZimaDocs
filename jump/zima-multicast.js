import React, {Component} from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    location.href="/";
  }
  render(){
    return (<section>Jumping</section>);
  }
}
 
export default Redirect;