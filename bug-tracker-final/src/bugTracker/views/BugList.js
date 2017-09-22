import React from 'react';
import BugItem from './BugItem';
export default function BugList({removeClosed, bugs, toggle}){

	let bugItems = bugs.map((bug,index) => (
		<BugItem toggle={toggle} bug={bug} key={index} />
	));
	return(
		<section className="list">
			<ol>
				{bugItems}
			</ol>
			<input type="button" value="Remove Closed" onClick={removeClosed} />
		</section>
	)
}