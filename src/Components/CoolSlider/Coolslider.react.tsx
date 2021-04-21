import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

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

const RedSlider = withStyles({
    root: {
        color: '#e01000',
    },
})(CustomSlider)

const GreenSlider = withStyles({
    root: {
        color: '#20d020',
    },
})(CustomSlider)

const BlueSlider = withStyles({
    root: {
        color: '#0040f0',
    },
})(CustomSlider)

const color_sliders = [RedSlider, BlueSlider, GreenSlider]

const CoolSlider = (props) => {
    return color_sliders
}