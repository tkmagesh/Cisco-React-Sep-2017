
var SM = (function(){
	function createStore(reducer){
		var _reducer = reducer;
		var INIT_ACTION = { type : '@@INIT_ACTION'};
		var _currentState = _reducer(undefined, INIT_ACTION);
		

		function getState(){
			return _currentState;
		}

		function dispatch(action){
			var newState = _reducer(_currentState, action);
			if (newState !== _currentState){
				_currentState = newState;
				triggerChange()
			}
		}

		var _subscribers = [];
		function subscribe(callbackFn){
			if (typeof callbackFn === 'function')
				_subscribers.push(callbackFn)
		}

		function triggerChange(){
			_subscribers.forEach(callbackFn => callbackFn());
		}
		return {
			getState : getState,
			dispatch : dispatch,
			subscribe : subscribe
		}
	}
	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let actionCreator = actionCreators[key];
				let action = actionCreator.apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}
	return {
		createStore : createStore,
		bindActionCreators : bindActionCreators
	}
})()
