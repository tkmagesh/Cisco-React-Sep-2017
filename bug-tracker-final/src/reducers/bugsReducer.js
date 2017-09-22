import bugActionNames from '../bugTracker/actions//bugActionNames';
function bugsReducer(currentState = [], action){
	
	if(action.type === bugActionNames.add_new){
		let bugName = action.payload,
			newBug = {
				name : bugName,
				isClosed : false
			}
		return [...currentState, newBug];
	}
	if (action.type === bugActionNames.toggle){
		let bugToToggle = action.payload,
			toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return currentState.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	if (action.type === bugActionNames.remove_closed){
		return currentState.filter(bug => !bug.isClosed);
	}
	return currentState;
}
export default bugsReducer;
