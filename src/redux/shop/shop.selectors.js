import {createSelector} from 'reselect';

// const COLLECTION_ID_MAP={
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens:4,
//     mens:5
// };

const selectShop=state=> state.shop;

export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections  // shop. the name of the state in the shopReducer
)

// This selector converts an object into an array
/* 
  We want to get all the keys in form of an array, and map over the array of keys
  so that we get the value of our collections object at that key which would give us an array of items we 
  are trying to get
*/
export const selectCollectionsForPreview=createSelector(
    [selectCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollection = collectionUrlParam=>
createSelector(
    [selectCollections],
    collections=>collections[collectionUrlParam])