import DynamicSphere from "./DynamicSphere";

const Home = () => {
    return(
        //Create a home with search bar and a list of all the movies
        <>
     
        <div className="app-bar card hover-glow">
            Netflix Show Finder
        </div>
        <DynamicSphere>
        </DynamicSphere>
        
        </>
    )
}
export default Home;