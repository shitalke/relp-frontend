import React, {useState, useEffect} from 'react';
import axios from "axios";
import HomeCategory from "./HomeCategory";


function HomePage() {
    const [restroomIds, setRestroomIds] = useState();

    useEffect(() => {
        axios.get("home/restrooms").then(response => {
            let temp = [];
            Object.entries(response.data).map(([key, val]) => temp.push(val._id));
            setRestroomIds(temp);
        });
    }, [])
    
    return (
        <>
            <HomeCategory category="Near Me" restroomIds={restroomIds}/>
            <HomeCategory category="Editors Choice" restroomIds={restroomIds}/>
            
        </>
        
    )
}

export default HomePage;