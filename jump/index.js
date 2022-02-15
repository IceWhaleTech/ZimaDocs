import React, {Component} from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';


export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    <BrowserOnly>
      location.href="/";
    </BrowserOnly>
  }
  render(){
    return (<section>Jumping</section>);
  }
}
 
export default Redirect;