import React from 'react';
export default function bugStats({bugs}){
	let closedCount = bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	return (
		<section className="stats">
			<span className="closed">{closedCount}</span>
			<span> / </span>
			<span>{bugs.length}</span>
		</section>
	)
}