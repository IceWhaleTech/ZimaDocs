import React, {Component} from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    location.href="/zimaboard/troubleshooting";
  }
  render(){
    return (<section>Jumping</section>);
  }
}
 
export default Redirect;