const rangeSlider = document.getElementById('range-slider');
const arbitraryValuesForSlider = ['500 грн', '1500 грн', '2500 грн', '3500 грн', '4500 грн', '5500 грн', '6500 грн'];

const format = {
    to: function(value) {
        return arbitraryValuesForSlider[Math.round(value)];
    },
    from: function (value) {
        return arbitraryValuesForSlider.indexOf(value);
    }
};

if(rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: '3500 грн',
        range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
        connect: 'lower',
        step: 1,
        tooltips: true,
        format: format,
        pips: { mode: 'steps', format: format, density: 50 },
    });
}