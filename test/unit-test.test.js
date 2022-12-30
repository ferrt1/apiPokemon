const assert = require('chai').assert;

function addValue(a, b){
    return a+b;
}

describe('Suite de prueba para el curso', () => {
    it('should returns 2', () => {
        let va = addValue(1, 1);
        assert.equal(va, 5);
    });
});