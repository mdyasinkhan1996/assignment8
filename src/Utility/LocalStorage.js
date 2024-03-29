const getReadBookItems = () =>{
    var books = localStorage.getItem("read-book-item");
    if(books){
        return JSON.parse( books );
    }
    return [];
}
const getWishBookItems = () =>{
    var books = localStorage.getItem("wishlist-book-item");
    if(books){
        return JSON.parse( books );
    }
    return [];
}
const seveBookItems = (id, key) =>{
    const storReadBookItems = getReadBookItems();
    const storWishBookItems = getWishBookItems();
    if(key === "wishlist-book-item"){
        const exist = storReadBookItems.find(bookId => bookId === id);
        const exist1 = storWishBookItems.find(bookId => bookId === id);
        if(!exist && !exist1){
            storWishBookItems.push(id);
            localStorage.setItem(key, JSON.stringify(storWishBookItems));
        }
    }else{
        const exist = storReadBookItems.find(bookId => bookId === id);
        if(!exist){
            storReadBookItems.push(id);
            localStorage.setItem(key, JSON.stringify(storReadBookItems));
        }
    }
}


export {getReadBookItems, getWishBookItems, seveBookItems};