import {isFavorited} from './helpers';

describe('isFavorited', () => {
    it('should return false when not favorited', ()=>{
        let giphy = {url: 'cats.com', title:'cats'};
        let favorites = [];
        expect(isFavorited(giphy, favorites)).toBe(false);
    });

    it('should return true when favorited', ()=>{
        let giphy = {url: 'cats.com', title:'cats'};
        let favorites = [{url: 'cats.com', title:'cats'}];
        expect(isFavorited(giphy, favorites)).toBe(true);
    });
})
