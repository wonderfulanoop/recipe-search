import React, {useState, useEffect} from 'react';
import RecipeContainer from './RecipeContainer';
import Loader from './Loader';

const Header = ()=>{
    const [food, setFoodName] = useState("");
    const [recipes, setRecipes]= useState([])
    const [isFetching, setFetching] = useState(false)

    const fetchRecipes = ()=>{
        setFetching(true)
        const app_key = "40698503668e0bb3897581f4766d77f9"
        const app_id = "900da95e"
        if(food !== ""){
            const recipe_url = "https://api.edamam.com/search?app_id="+app_id+"&app_key="+app_key+"&q="+food
           
            fetch(recipe_url)
            .then((res)=> res.json())
            .then((data)=> {
                setRecipes(data)
                setFetching(false)
            })
        }
    }

    useEffect(()=>{
        if(food !== ""){
            fetchRecipes();
        }
        
    }, [setRecipes])

    const handleFoodSearch = (e)=>{
        setFoodName(e.target.value);
    }

    return(
        <div className="container col-md-6">
            <div className="card card-body">
                <h3 className="text-center" style={{fontFamily: "Times New Roman"}}>Find Your Favourite Recipe</h3>
                <dd className="text-muted text-center">Laughter is brightest where food is best. -Irish Proverb</dd>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control form-control-md" 
                        placeholder="Search Recipe" 
                        onChange={(e)=> handleFoodSearch(e)}
                    />
                    <button className="btn btn-success" onClick={fetchRecipes}><i className="fa fa-search"></i></button>
                </div>
                {isFetching ? <Loader /> : <RecipeContainer 
                    recipes={recipes}
                />}
            </div>
        </div>
    )
}

export default Header;