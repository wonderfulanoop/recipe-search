import React from 'react';


const RecipeContainer = (props)=> {


    return(
        <>
        {props && props.recipes.hits && props.recipes.hits.length == 0 && <div className="text-center">
            No Results Found
        </div>}
        {props && props.recipes.hits && props.recipes.hits.length > 0 &&
            props.recipes.hits.map((hit)=>{
                return (
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img 
                                    className="card-img-top" 
                                    src={hit.recipe.image}
                                    alt="Recipe image" 
                                />
                            </div>
                            <div className="col-md-8">
                                <div>
                                    <span className="h6">{hit.recipe.label}</span>
                                    <a href={hit.recipe.shareAs} target="_blank">
                                        <i className="fa fa-share-square pull-right" style={{textDecoration: null}}></i>
                                    </a>
                                    
                                </div>
                               <div style={{fontSize: "15px"}}>
                                    {hit.recipe.ingredientLines.slice(0,  10).map((ingrdient)=>{
                                        return <li> {ingrdient}</li>
                                    })}
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row text-muted" style={{fontSize: "15px"}}>
                        <div className="col-md-4">
                            <li>{hit.recipe.yield} Servings,</li>
                            <li>{hit.recipe.mealType.map((meal)=> meal)},</li>
                            <li>{parseFloat(hit.recipe.calories).toFixed(2)} kcl </li>
                            <li>{parseFloat(hit.recipe.totalWeight).toFixed(2)} gm </li>
                        </div>
                        <div className="col-md-4">
                            {hit.recipe.healthLabels.slice(0, 4).map((el)=>{
                                return <li>{el}</li>
                            })}
                        </div>
                       
                        </div>
                    </div>
                </div>)
            }) 
            
        }
        </>
    )
}

export default RecipeContainer;