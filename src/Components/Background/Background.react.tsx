// visual = .tsx
// logic = .ts
// can't render() in a .ts file; x = has html that can be rendered

// [] used to deserialize from an object
// gonna get two values back from useState
// similar to assigning two variables from Python, with extra deserializing
// : for objects, = when passing something
// ...props <- this is deconstructing an object
// same as
// value={color_props.value}
// setter={color_props.setter}
// slidercolor={color_props.sliderColor}

// maps
// for each value in colors, execute logic in this function
// return a list of outputs

// {} used to invoke JSX code in HTML
// example: // doesn't work in HTML, but works in JSX

import React from 'react';
import CoolSlider, { CoolSliderProps } from '../CoolSlider/CoolSlider.react';

export enum COLORS {
    RED='#e01000',
    BLUE='#20d020',
    GREEN='#0040f0'
}

export interface BackgroundProps {
    setColorString: Function;
}

const Background = (props: BackgroundProps): JSX.Element => {
    
    const [red, setRed] = React.useState(0);
    const [blue, setBlue] = React.useState(0); 
    const [green, setGreen] = React.useState(0);

    const colors: CoolSliderProps[] = [
        {value: red, setter: setRed, sliderColor: COLORS.RED},
        {value: blue, setter: setBlue, sliderColor: COLORS.BLUE},
        {value: green, setter: setGreen, sliderColor: COLORS.GREEN}
    ]

    // useEffect: when anything in the dependency list is affected, do this
    // don't set state inside a render, do it when actions happen or inf loop happens
    // useEffect is an action
    React.useEffect(
        () => {
            props.setColorString(`rgb(${red}, ${blue}, ${green})`);
        },
        [red, blue, green]
    );
    

    return (
        <div className="Parent-background-sliders">
            <div className="Background-sliders">
                {
                    colors.map((color_props: CoolSliderProps) => ( 
                        <CoolSlider
                            {...color_props}
                            // value={color_props.value}
                            // setter={color_props.setter}
                            // sliderColor={color_props.sliderColor}
                            // { page_bg.style.background = "red" }
                        />
                    ))
                }
            </div>
            
        </div>
    );
    
}

export default Background;