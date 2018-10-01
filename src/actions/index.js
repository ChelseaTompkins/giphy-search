export const FAVORITE_GIPH = 'FAVORITE_GIPH';

export const favoriteGiph = (giph) => {
    return {
        type: FAVORITE_GIPH,
        giph
    }
}