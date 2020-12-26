import React from 'react';
import {Route} from 'react-router-dom';
 import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import {connect} from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import CollectionPage from '../collection/collection.component';

const ShopPage=({match})=>{
  console.log("THE MATCH IS ::", match);
  return(        
            <div className="shop-page">
              <Route exact path={`${match.path}`} component={CollectionsOverview} />
              <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} /> 
            </div>
    
)
}

export default ShopPage;