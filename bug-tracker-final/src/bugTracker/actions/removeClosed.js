import bugActionNames from './bugActionNames';
function removeClosed(){
	let removeClosedAction = { type : bugActionNames.remove_closed};
	return removeClosedAction;
}
export default removeClosed;