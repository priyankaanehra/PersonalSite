import './About.css'

const About = () => {
  return (
    <div className='aboutLayout'>
      <h4 className='resumeTitle'>Work Experience</h4>
      <p className='company'>Fitch Group, Fitch Ratings - New York, NY</p>
      <p className='jobtTitle'>Intermediate Software Engineer [Oct 2023 - Current]</p>
      <ul>
        <li>Develop features for a new internal dashboard application for analysts using React, TypeScript, Java</li>                                                                                                                                     
        <li>Integrate events from other applications into an application using Kafka.</li> 
        <li>Develop and maintain automated tests to ensure reliability.</li>  
        <li>Participate in on-call rotations by  responding promptly, resolving  incidents, and deploying production releases.</li>
      </ul>
      <p className='jobtTitle'>Associate Software Engineer [Sept 2022-Sept 2023]</p>
      <ul>
        <li>Used React, Typescript, and Storybook to add features to a design system used throughout the company.</li>                                                                                                                                     
        <li>Used Kafka to make real time updates to a Redis cache so the data doesn’t become stale. </li>
        <li>Appian Development for internal applications + collaborated with stakeholders and QA’s on requirements.</li>
        <li>Automated a repetitive process that used excel, sql/plsql into a simple gui using flask, python, and cx_oracle.</li>
        <li>Created an index page that dynamically updates data as new pages get added or updated.</li>
      </ul>
      <p className='company'>Columbia University - New York, NY</p>
      <p className='jobtTitle'>Research Assistant, The Billinge Group - Department of Applied Physics & Applied Mathematics [Oct 2020 - Jan 2022]</p>
      <ul>
        <li>Created an abstract lister for internal software (Python, YAML) and assisted in updating xPDFsuite software to release a new version.</li>                                                                                                                                     
        <li>Lead, scribed, and presented in weekly group meetings.</li> 
      </ul>
      <p className='jobtTitle'>Resident Advisor, Housing & Residential Life [Aug 2021– May 2022]</p>
      <ul>
        <li>Built community for an upper-class hall; plan and coordinate events for floor and with other staff.</li>
        <li>Familiarized students with educational and social resources on campus.</li>
        <li>Enforced university policy and mediated conflicts.</li>
      </ul>
      <p className='jobtTitle'>Student Assistant, Human Resources and Finance [Nov 2020 – Aug 2021]</p>
      <ul>
        <li>Updated and organized data for academic and non-academic appointments, leaves and compensation.</li>
        <li>Audited payroll and assisted students, faculty, and staff at the front desk.</li>
      </ul>
      <p className='company'>University of Richmond -  Richmond, VA</p>
      <p className='jobtTitle'>Research Assistant, Norris Group - Department of Chemistry [Sept 2018-May 2020]</p>
      <ul>
        <li>Investigated various hydride sources, Lewis acid additives, and amine catalysts.</li>
        <li>Worked with Professor Michael Norris and fellow lab members to discover new investigation paths.</li> 
        <li>Presented and interpreted scientific literature to further research.</li>
      </ul>
      <p className='jobtTitle'>Resident Advisor, Housing & Residential Life [Aug 2021– May 2022]</p>
      <ul>
        <li>Assisted to build community for a freshmen hall. 
          Planned and coordinated events for the floor. 
          Familiarized students with resources on campus, enforced university policy, and mediated conflicts.
          </li>
      </ul>
      <p className='company'>ADM Lifesequencing -  Valencia, Spain</p>
      <p className='jobtTitle'>Summer Research Intern [May 2018 - Aug 2018]</p>
      <ul>
        <li>Created a mathematical model of the microbial interaction in humans.</li>
        <li>Analyzed a collection of microbial profiles to fit models using Mathematica, Latex, and DataPunk.</li>
      </ul>
      <h4 className='resumeTitle'>Education</h4>
      <p className='company'>Columbia University -  New York, NY</p>
      <p className='jobtTitle'>Bachelor of Science in Applied Mathematics Engineering, Minor in Computer Science [May 2022]</p>
      <ul>
        <li>Honors: Cum laude</li>
      </ul>
      <p className='company'>University of Richmond -  Richmond, VA</p>
      <p className='jobtTitle'>Bachelor of Science in Mathematics, Minor in Physics [May 2020]</p>
      <ul>
        <li>Honors: Magna cum laude, Dean’s List, Pi Mu Epsilon (National Mathematics Society)</li>
      </ul>
      <h4 className='resumeTitle'>Technical Skills</h4>
      <p>Python, Java, C, Kafka, Typescript, JavaScript, Storybook, React, HTML, CSS, Flask, Appian, SQL, MongoDB, Mathematica, LaTex</p>
      <h4 className='resumeTitle'>Languages</h4>
      <p>Conversational Proficiency in Korean, Spanish
</p>
    </div>
  );
};

export default About;