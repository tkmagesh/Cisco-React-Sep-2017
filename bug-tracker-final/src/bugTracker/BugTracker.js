import React from 'react';
import { bindActionCreators } from 'redux';
import bugActions from './actions';


import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';


import { connect } from 'react-redux';

class BugTracker extends React.Component{
	render(){
		let { bugs, toggle, removeClosed, addNew } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugEdit addNew={addNew}/>
				<BugList {...{removeClosed, toggle}} bugs={bugs}/>
			</div>
		)
	}
}

export default connect(
	(state) => ({bugs : state.bugs}),
	(dispatch) => bindActionCreators(bugActions, dispatch)
)(BugTracker);