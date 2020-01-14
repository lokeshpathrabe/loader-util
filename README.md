
# ReactStrap Loader Util

 Any web application contains many loader components to fill up the asynchronous actions happening on user interaction.
Generally we use component state / Redux / Mobx or any other state management tools to manage the loading / not loading states of these loaders. I tried to find a solutoin which requires minimum lines of code and can be used from anywhere in the application.

To use this util we will need:
1. Reactstrap and its dependencies
2. node-sass loader 
3. React 16 +

Feel free to clone and change the dependencies and compnents underneath.

### How it works?
Import and use the loader component like this.
``` javascript 
import { Loader } from  './lib';
// In your component
render() {
	return(
		<Container>
			<Loader id="loader-1"/>
			<OtherComponent/>
		<Containe/>		
	);
```
 We identify each loader with an Id. The loader component takes following props.
 ### Props to be added
### How to control loader?
We use the id passed as prop to loader to show or hide the loader
``` javascript
// In action js
import { showLoader, hideLoader } from  './lib';

showLoader('loader-1');
fetch('api/v1/data')
.then(() => hideLoader('loader-1'));
```

The lib internally manages the inidividual loader states by keeping a map of `{id: seStateFunction()}`. Using this map to set state of loader. 

I find this way of implementing loader states very helpfull as it does not depend on any state management lib, can be used from anywhere in the app and requies less code.