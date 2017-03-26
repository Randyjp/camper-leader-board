import React from 'react';
import ReactDOM  from 'react-dom';

import {Router, Route, IndexRoute, browserHistory}  from 'react-router';
import Board from 'Board';

//load foundation
// $(document).foundation(); //fire-up foundation

//load app costum css
// require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
	<Board/>,
	document.getElementById('app')
);
