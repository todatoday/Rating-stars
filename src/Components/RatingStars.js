import React, { useState } from 'react';
import { FaCloudShowersHeavy, FaStar } from 'react-icons/fa';
import './RatingStars.css';
import { UseState } from 'react';


const RatingStars = () => {
    // is a signal that the variable won’t be reassigned
    const colors = {
        yellow : "#ffc107",
        grey : "#e4e5e9"
    }
    // using state to set my value into new value

   const [value, setValue] = useState(null);
   const [currentValue, setCurrentValue] = useState(null);

   // the function allow me to handle the change

   const  handleRatingChange = (e) =>{
        setValue ({...value, ratingValue: e.target.value})
    }

    return (
        <div className="ratingStars">

            <h2>Rating stars</h2>
            <form>
                <div>
                    {/* the and map function will create 5 examples of stars */}

                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    
                    return(
                        <label >
                        <input
                        
                        
                        type="radio"
                        name="rating"
                        value={value}
                        onChange = {handleRatingChange}
                        onClick = {() => setCurrentValue(ratingValue)}
                        />
                        <FaStar  className="star" 
                        // here if the current valut is inferieur that the index the color will be grey 
                        // otherwise the color will be yellow
                        color={currentValue > index ? colors.yellow : colors.grey}/>
                        
                        
                        
                        </label>
                        )
                    })}
             
                    </div>
            </form>


        </div>
    )
}

export default RatingStars;