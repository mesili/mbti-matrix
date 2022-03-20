import { mbtiScore } from './mbtiHelpers';
import assert from  'assert';


describe('MBTI Helpers', function () {

    it('Should give a compatibility score', function () {
        const score = mbtiScore('INFP', 'INFP');
        assert(score >= 0, 'Greater than 0');
        assert(score <= 4, 'Lesser than 4');
    });

    it('Should return -1 on invalid MBTI type', function () {
        const score = mbtiScore('Something', 'INFP');
        assert(score === -1, 'Did not return -1');
    });

});
