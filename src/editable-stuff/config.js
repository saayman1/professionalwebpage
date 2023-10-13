// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Syeda",
  middleName: "Ayman",
  lastName: "Ahmed",
  message: " Dedicated to leading data driven digital transformations and crafting intelligent solutions.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/saayman1",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ayman.ahmed4",
    },
    {
      image: "fa-linkedin",
      url: "www.linkedin.com/in/ayman-ahmed-42664817b",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/s_ayman_ahmed01",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e: ( Called imageLink )profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://media.licdn.com/dms/image/D4E03AQFqEuaj7Ok_Aw/profile-displayphoto-shrink_200_200/0/1693523279605?e=1702512000&v=beta&t=7b64V47AH6dDauj84_IgfGT-TWfTZNFLiYUukbAt1gs",
  imageSize: 375,
  message:
    "Having graduated from Carleton University in 2022, I'm now immersing myself in MIT's Applied Data Science Professional Certificate program. As a bilingual technical consultant with a keen focus on SaaS, I bring a deep understanding of both the SDLC and STLC. My love for software development goes hand in hand with my foundational expertise in machine learning and intelligent automation. Always eager to embrace new languages and tools, I'm dedicated to spearheading data driven digital solutions. I invite you to delve into my portfolio and learn more about the innovative solutions I've built",
  resume: "https://drive.google.com/file/d/1mdB1TWKLxvX90xaVTwlQGFxxAnutNZHc/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "saayman1", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: "", 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: "", 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "RPA Development", value: 65 },
    { name: "Power Automate", value: 90 },
    { name: "Power BI", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "UiPath", value: 80 },
  ],
  softSkills: [
    { name: "RPA Strategy", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Digital Transformation or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "saayman1999@outlook.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Digital and Emerging Technologies Consultant', 
      company: 'EY',// Here Add Company Name
      companylogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/800px-EY_logo_2019.svg.png",
      date: 'June 2022 – Present',
    },
    {
      role: 'Software Developer',
      company: "Department of National Defence".
      companylogo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Department_of_National_Defence_%28Canada%29.svg/2560px-Department_of_National_Defence_%28Canada%29.svg.png",
      date: 'May 2021 – March 2022',
    },
    {
      role: 'Analyst/Tester', 
      company: 'Canada Revenue Agency',// Here Add Company Name
      companylogo: "data:image/jpeg;base64,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",
      date: 'June 2019 – October 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
