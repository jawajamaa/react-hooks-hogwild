import React, { useState } from "react";
import Nav from "./Nav";
import HogFilter from "./HogFilter";
import HogDisplay from "./HogDisplay";

import hogs from "../porkers_data";

function App() {
	const [hogState, setHogState] = useState(hogs);



	return (
		<div className="App">
			<Nav />
			<HogFilter 
			hogState = { hogState }
			setHogState = { setHogState }
			/>
			{/* <HogDisplay /> */}
		</div>
	);
}

export default App;
