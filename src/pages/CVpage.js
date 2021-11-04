import React, { Component, } from "react";
import Collapsible from "./../components/collapsible/Collapsible";
import Section from "./../components/section/Section";

class CVpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pageContainer visible">
        <Collapsible label="Profile">
          <div>
            <Section>
		Thanushen Balaskandar
	    </Section>
          </div>
        </Collapsible>
        <Collapsible label="Profile">
          <div> Test </div>
        </Collapsible>
      </div>
    );
  }
}

export default CVpage;
