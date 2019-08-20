function flatObject(obj) {
	const returnObj = {};
    
	for (const key in obj) {
		if (typeof obj[key] === 'string') {
      		returnObj[key] = obj[key];
    	} else {

			// if the value is an object (or an array, since the data type of an array in JS is 'object'),
			// make a recursive call with that value as the parameter.
            // we'll do this until we get to the base case, which is that the value of
			// whatever key we're on is now a string
			
			const newObject = flatObject(obj[key]);
			
            // loop through the newObject that's been created with each recursive call and add
            // a key to the return object. the key should contain the correct key given the current position in
            // the call stack, concatenated with a dot and the value of the current key in the newObject.
			// it should also set its value to be the value of the current key in the newObject
			
            for (const nestedKey in newObject) returnObj[`${key}.${nestedKey}`] = newObject[nestedKey];
		}
  	}
    return returnObj;
};