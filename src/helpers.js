export const isFavorited = (giphy, favorites) => {
    let giphyUrl = giphy.url
    // let giphyTitle = giphy.title
    let favUrl = favorites.map(favorite => favorite.url)
    // let favTitle = favorites.map(favorite => favorite.title)

    if(favUrl.includes(giphyUrl)){
        return true
    }else{
        return false
    }
    
}