import "./FeaturedJobs.css";

import ziggoLogo from "../assests/job1.png";
import elisaLogo from "../assests/job2.png";
import rostelecomLogo from "../assests/job3.png";
import veoliaLogo from "../assests/job4.png";

const jobs = [
  {
    company: "Ziggo",
    title: "Digital Marketer",
    logo: ziggoLogo
  },
  {
    company: "Elisa",
    title: "Digital Marketer",
    logo: elisaLogo
  },
  {
    company: "Rostelecom",
    title: "Digital Marketer",
    logo: rostelecomLogo
  },
  {
    company: "Veolia",
    title: "Digital Marketer",
    logo: veoliaLogo
  }
];

function FeaturedJobs() {
  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index}>
          <img src={job.logo} alt={job.company} width="100" />
          <h3>{job.company}</h3>
          <p>{job.title}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturedJobs;
