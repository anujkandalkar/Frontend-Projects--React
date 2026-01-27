import Categories from "../Components/Categories";
import FeaturedJobs from "../Components/FeaturedJobs";
import ResumeCTA from "../Components/ResumeCTA";
import "./Home.css";

function Home() {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>
          Find the most exciting <br />
          startup jobs
        </h1>

        <div className="search-box">
          <input type="text" placeholder="Job Title or keyword" />
          <input type="text" placeholder="Location BD" />
          <button>Find Job</button>
        </div>
      </div>
    </section>

     <Categories/>
     <ResumeCTA/>
     <FeaturedJobs/>
    </>
  );
}

export default Home;
