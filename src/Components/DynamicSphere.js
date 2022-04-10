import axios from "axios";
import { useState } from "react";

const DynamicSphere = () => {
    const [search, setSearch] = useState("");
    const [option, setOption] = useState([]);
    var data=[];
    var ndata=['TITLE'];
    const [result,setResult]=useState([]);
    function axiosCall(){
        
        
        axios.post('https://needle-api-challenge.herokuapp.com/search_or'
        ,
        {
            "table" : "Netflix",
            "fields" : ["Title","Description"],
            "search" : [search,search]
        }
        ).then(
            (response) => {
                console.log(response.data);
                
                setOption(response.data);
            }
        )
        data.push(
            option.map(
                (item) => {
                    return(
                        <div className="border-bottom">
                        <div className="card hover-glow">
                            <div className="card-content">
                                <div className="card-title">
                                    {item[10]}
                                </div>

                                <div className="card-description">
                                    {item[4]}
                                </div>

                            </div>
                        </div>
                        </div>
                        
                    )
                    
                }
            )
        )
        setResult(data);
    }
    function settingData(e){
        
        setSearch(e.target.value);
        
    }
    
    return (
        <div className="gradient animated-gradient">
            
            <input onChange={settingData}></input>
            <br/>
            <br/>
            <button onClick={axiosCall}>Search</button>
            {result}
        </div>

    )
}
export default DynamicSphere;