export const isFavorited = (giphy, favorites) => {
    let giphyUrl = giphy.url
    let favUrl = favorites.map(favorite => favorite.url)

    if(favUrl.includes(giphyUrl)){
        return true
    }else{
        return false
    }   
}

export const updateFavorites = (giphy, favorites) => {
    let favUrl = favorites.map(favorite => favorite.url)
    let needsToBeAdded = !favUrl.includes(giphy.url);

    if(needsToBeAdded){
        return [...favorites, giphy]
    } else { // needs to be removed
        return favorites.filter(favoritedGiphy => favoritedGiphy.url!==giphy.url)
    }
}