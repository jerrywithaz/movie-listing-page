import { SLANT_ANGLE_RADIANS } from './constants';


export function createSlant() {
    
    const adjacent = window.innerWidth;
    const hypotenuse = Math.abs(adjacent / Math.cos(SLANT_ANGLE_RADIANS));
    const opposite = Math.abs(Math.sin(SLANT_ANGLE_RADIANS) * hypotenuse);
    const angle = Math.atan(opposite/adjacent) * 180/Math.PI;

    return {adjacent, angle, hypotenuse, opposite};

}