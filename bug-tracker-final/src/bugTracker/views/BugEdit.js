import React, { Component } from 'react';

class BugEdit extends Component{
	onCreateNewClick(){
		let newBugName = this.refs.txtBugName.value;
		this.props.addNew(newBugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref="txtBugName"/>
				<input type="button" value="Create New" onClick={this.onCreateNewClick.bind(this)}/>
			</section>
		)
	}
}
export default BugEdit;