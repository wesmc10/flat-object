function flatObject(obj) {
    const returnObj = {};
    
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            returnObj[key] = obj[key];
        } else {
            /* if the value is an object (or an array, since the data type of an array in JS is 'object'),
            make a recursive call with that value as the parameter.
            we'll do this until we get to the base case, which is that the value of
            whatever key we're on is now a string */
            const newObject = flatObject(obj[key]);
            /* loop through the newObject that's been created with each recursive call and add
            a key to the return object. the key should contain the value of the correct key given the current position in
            the call stack, concatenated with a dot and the value of the current key in the newObject.
            it should also set its value to be the value of the current key in the newObject */
            for (const nestedKey in newObject) returnObj[`${key}.${nestedKey}`] = newObject[nestedKey];
        }
    }
    return returnObj;
};

/* ultimately I broke down the problem you gave me into a smaller piece so that I could get a better sense
of what I needed to do. (I find that this typically makes things much easier with recursion.) I took 
the deeply input nested object and deleted most of the data so that it was a lot smaller and easier to read.
that allowed me to walk through the code easier with the debugger and see where we were in the call stack,
where I was doing what I needed to do, where I wasn't, where I wanted to implement recursion, etc. */