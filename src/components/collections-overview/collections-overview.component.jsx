import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview'
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview=({collections})=>(
  <div className='collection-overview'>
  { 
  collections.map(({id, ...otherCollectionProps}) =>(
    <CollectionPreview key={id} {...otherCollectionProps} />
   ))
  }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  

export default connect(mapStateToProps)(CollectionsOverview);
