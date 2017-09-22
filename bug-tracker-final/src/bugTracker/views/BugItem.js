import React from 'react';
let BugItem = ({bug,toggle}) => (<li>
	<span className="bugname" onClick={() => toggle(bug)}>
		{bug.name}
	</span> - [{bug.isClosed.toString()}]
</li>);
export default BugItem;