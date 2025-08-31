import React from 'react';
import Doc  from '../constants/Resume.pdf';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons';


const Skills = [ 'Back-End Development','Cascading Style Sheets (CSS)','Design','SCSS','Tailwind','Grid','Bootstrap','Git','Bitbucket','AWS','JASON','ACF','WooCommerce','Lighthouse', 'GTMetrix','AA Web Complience','React', 'Word','Powerpoint','CICD','Java','JavaScript', 'JQuery', 'Flexbox','Photoshop','AdobeXD','MySQL','PHP','Project Management','Python','Quality Control (QC)','WordPress','TSO','Mainframe','JRIA','Pipelines','DBeaver','Word Scripting'];

const education = [{ name:'UW-Milwaukee',date:'2013-2016',accreditation:'Bachelor of Science (B.S.) in Information Technology'},{ name:'UW-Milwaukee',date:'2013-2016',accreditation:'Certificate of Web Development from the School of Engineering'},{ name:'UW-Waukesha',date:'2011-2013',accreditation:'Associate of Arts (A.A.)'}]

const Employment = [
  {name:"Northwestern Mutual", date:'2022 July to Present', position:'Software Engieneer', desc:'I work on regression testing TSO and Java applications as updates were completed to the respective systems. I create documentation on these regression tests and presented to my team on the resluts. I worked on updating legecy systems in TSO and Java. Ran piplines and maintained version controls for git lab. I montiored when our applications would run with Control M. I also planned our how new jobs should be scheduled in control M.'},
  {name:"The Digital Ring", date:'2020 Sep to 2022 May', position:'Web Developer', desc:'Designed and built a custom e-commerce WordPress website. Read wireframes with Adobe XD. Built Backend PHP framework for the design of the wireframe. Worked with WYSIWYG editors and react sites. Worked with child themes and plugins through WordPress. Designed and built plugins to fit the scope. Used PHP, Javascript, CSS/SCSS, JQuery, Bootstrap, Tailwind, MySQL, and React daily. Worked with Source Tree, Git Bash, and Bitbucket for versioning themes and scripts. Used Wrike and Slack for team meetings and time tracking. Troubleshoot problems or downed sites. Created custom JQuery scripts to make sites ADA compliant. Worked with Flywheel as a host for the sites. Ran GT Metrics and correctedproblems.'},
  {name:"Beyond Private Lable", date:'2018 June to 2020 April', position:'Web Developer', desc:'Designed and built a custom WordPress website. Read wireframes and built custom js scripts. Built Backend PHP framework for the design of the wireframe. Worked with WYSIWYG editors and ECommerce sites. Cropped photos and logos to fit the wireframe. Designed and created logo designs in photoshop. Worked with child themes and plugins through WordPress and altered plugins to fit the scope. Used PHP, Javascript, CSS, JQuery, Bootstrap daily. Worked with Source Tree, Git Bash, and Bitbucket for versioning themes and scripts. Troubleshoot problems or downed sites. Created custom JQuery scripts to make sites ADA compliant. Worked with WP Engine as a host for the sites.'},

];


function about(){
  return (
    <div className="about my-10 p-5">
        <div className="flex aic justify-center">
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faCodeCommit} size='md' />
        </span>

            <span className="fa-solid fa-code mx-1"></span>
            <h1>Hi, I'm Alan Hasler</h1>
            <p>I am so glad you are viewing my page. You can see what I have worked on 
              <a href='#portfolio' title="portfolio" alt='portfolio'>&nbsp;Here</a></p>
        </div>
        <p>You can download my resume as PDF from &nbsp;  
          <a href={Doc} download="resume" target='_blank'>
             here.
          </a>
        </p>
        <div>Here is my up resume.</div>
        <h2>Education:</h2>
        {education.map(education => (
          <div className='flex-col items-center ml-3'>
            <span className='block'><span className='school'>{education.name}</span> | <span className='degree'>{education.accreditation}</span> Date: {education.date}</span>
          </div>
        ))}
      

 
        <h2>Skills:</h2>
        <div className='flex-col items-center'>
          {Skills.map(Skills => (
            <span className='p-1'>{Skills},</span>
          ))}
        </div>
        <h2>Employment History:</h2>
        <div className='flex-col items-center'>
          {Employment.map(Employment => (
            <div className='p-1 flex-col'>
            <span>Employer: {Employment.name} Position: {Employment.position} Date: {Employment.date}</span>
            <p>{Employment.desc}</p>
            </div>
          ))}
        </div>
    </div>
  );
};
  
export default about;