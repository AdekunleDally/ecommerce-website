import React from 'react';
import  CustomButton from "../custom-button/custom-button.component"
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions"
import './collection-item.styles.scss'


const CollectionItem=({item, addItem})=>{
  const {name, price, imageUrl} =item;
  return(
    <div className="collection-item">
    <div 
    className="image"
    style={{backgroundImage:`url(${imageUrl})`}}
    />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className="price"> {price}</span>
      </div>
       <CustomButton onClick={()=>addItem(item)} inverted>Add to Cart</CustomButton>
    </div>
   
)
}
const mapDispatchToProps=dispatch=>({
  addItem: item=>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);



// const array1=['a','b','c','x']
// const array2=['z','y','i']

// const arrFunc=(array1,array2)=>(
//   for(let i=0; i<array1.length; i++){
//     for(let j=0; j<array2.length; j++){
//       if(array1[i]===array2[j]){
//         return true
//       }else{
//         return false
//       }
//     }
//   }
// )