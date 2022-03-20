import { types, matrix } from './mbtiMatrix';
import assert from  'assert';

describe('MBTI Types', function () {

    it('There should be 16 types', function () {
        assert.equal(types.length, 16);
    });

});

describe('MBTI Matrix', function () {

    it('There should be 16 lines', function () {
        assert.equal(matrix.length, 16);
    });

    it('There should be 16 columns on each line', function () {
        const cols = matrix.map(row => row.length);
        const is16 = elem => elem === 16;
        assert.equal(cols.every(is16), true);
    });

});
