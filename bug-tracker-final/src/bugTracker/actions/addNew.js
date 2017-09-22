import bugActionNames from './bugActionNames';

function addNew(newBugName){
	let newBugAction = { type : bugActionNames.add_new, payload : newBugName};
	return newBugAction;
}
export default addNew;