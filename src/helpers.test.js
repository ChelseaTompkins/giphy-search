import {isFavorited, updateFavorites} from './helpers';

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

describe('updateFavorites', ()=>{
    it('should add to empty favorites', () => {
        let giphy = {url: 'cats.com', title:'cats'};
        let favorites = [];
        expect(updateFavorites(giphy, favorites)).toEqual([giphy]);
    });

    it('should add to favorites', () => {
        let giphy = {url: 'cats.com', title:'cats'};
        let oldFav = {url: 'dogs.com', title:'dogs'};
        let favorites = [oldFav];
        expect(updateFavorites(giphy, favorites).length).toBe(2);
    });

    it('should remove from favorites', () => {
        let giphy = {url: 'cats.com', title:'cats'};
        let giphy2 = {url: 'dogs.com', title:'dogs'};
        let favorites = [giphy, giphy2];
        expect(updateFavorites(giphy2, favorites)).toEqual([giphy]);
    });
})
