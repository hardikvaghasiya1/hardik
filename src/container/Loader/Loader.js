import React from 'react';

function Loader(Component) {
   return function WithLoadingAnyComponent({isLoading,data}){
       console.log(isLoading, data);
       if (isLoading){
           return(
               <p>Loading..............................................</p>
           )
       }else{
           return(
               <Component data={data} />
           )
       }
   } 
}

export default Loader;