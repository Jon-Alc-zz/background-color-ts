// visual = .tsx
// logic = .ts
// can't render() in a .ts file; x = has html that can be rendered

// [] used to deserialize from an object
// gonna get two values back from useState
// similar to assigning two variables from Python, with extra deserializing
// : for objects, = when passing something
// ...props <- this is used for deconstructing

import React from 'react';

const props = {
    orientation: 'vertical',
    min: 0
}

const Background = () => {
    
    const [red, setRed] = React.useState(0);
    const [blue, setBlue] = React.useState(0); 
    const [green, setGreen] = React.useState(0);

    const colors = [(red, setRed, 0),
                    (blue, setBlue, 1),
                    (green, setGreen, 2)]

    return (
        <div className="Parent-background-sliders">
            <div className="Background-sliders">
                // for each value in colors, execute logic in this function
                // return a list of outputs
                {
                    colors.map((color) => ( 
                        <CoolSlider
                            // orientation="vertical"
                            // min={0}
                            {...props} // like unpacking a dictionary
                            value={color[0]}
                            setter={color[1]}
                            sliderColor={color[2]}
                        />
                    ))
                }
            </div>
        </div>
    );
    
}
