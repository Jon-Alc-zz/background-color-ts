import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { COLORS } from '../Background/Background.react';

/*
Notes:
https://stackoverflow.com/questions/60599413/material-ui-vertical-slider-how-to-change-the-thickness-of-the-rail-in-vertical
*/

const CustomSlider = withStyles({
    root: {
        '&$vertical': {
            width: 8
        }
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '4px solid currentColor',
        borderRadius: 0,
        marginTop: -5,
        marginLeft: -10,
    },
    track: {
        height: 10,
    },
    rail: {
        height: 10,
    },
    vertical: {
        '& $rail': {
            width: 10,
        },
        '& $track': {
            width: 10,
        },
        '& $thumb': {
            marginLeft: -5,
            marginBottom: -10
        },
    },
})(Slider)

export interface CoolSliderProps {
    sliderColor: COLORS;
    value: number;
    setter: Function;
}

const CoolSlider = (props: CoolSliderProps): JSX.Element => {

    // called every render, like update
    // render is called when states or props change; why it's called React
    const CustomSlider2 = withStyles({
        root: {
            color: props.sliderColor,
        },
    })(CustomSlider)

    return (
        <div className="slider">
            <CustomSlider2
                key={props.value}
                orientation={"vertical"}
                min={0}
                max={255}
                step={1}
                defaultValue={props.value}
                onChangeCommitted={async (event, new_value) => {
                    props.setter(new_value)
                }}
                valueLabelDisplay={"auto"}
            />
        </div>
    );
}

export default CoolSlider;