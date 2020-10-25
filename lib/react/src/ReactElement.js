function setProperties(prop, value, element) {
    const attribute = value
    return element.setAttribute(prop, attribute) 
}

export function createElement(type, props, content){

    const element = document.createElement(type)
    if (content) {
        element.textContent = content
    }

    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element))
        
    return element
}