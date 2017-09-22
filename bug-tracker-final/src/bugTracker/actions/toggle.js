import bugActionNames from './bugActionNames';
function toggle(bugToToggle){
	let toggleBugAction = { type : bugActionNames.toggle, payload : bugToToggle};
	return toggleBugAction;
}
export default toggle;