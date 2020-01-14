export function gatherClasses(props, ...extraClasses) {
    let classes = [];

    if (props && props.className) {
        classes.push(props.className);
    }
    if (extraClasses && extraClasses.length > 0) {
        extraClasses.forEach(className => {
            if (className && className !== "") {
                classes.push(className);
            }
        });
    }

    return classes.length > 0 ? classes.join(" ") : null;
}