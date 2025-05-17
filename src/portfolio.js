/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Caio Dias",
  title: "Oi, eu sou o Caio",
  subTitle: emoji(
    "Full Stack Software Developer 🚀 Sou soteropolitano e apaixonado por tecnologia, inovação e pela arte de transformar ideias em soluções digitais eficientes. Atualmente, venho me especializando como Desenvolvedor Full Stack Python pela EBAC, onde estou aprimorando minha capacidade de criar aplicações práticas e intuitivas, com foco no usuário."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/caiodiasol",
  linkedin: "https://www.linkedin.com/in/caio-dias-de-oliveira-536797b2/",
  gmail: "caiodiasol@proton.me",
  gitlab: "https://gitlab.com/caiodiasol",
  facebook: "https://www.facebook.com/caio.dias.oliveira.2025",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR FULL STACK APAIXONADO POR TECNOLOGIA",
  skills: [
    emoji(
      "⚡ Desenvolvo Interfaces de Front-end/Usuário altamente interativas para seus aplicativos web e móveis"
    ),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Execução de testes funcionais e exploratórios em APIs utilizadas em integrações entre plataformas"
    ),
    emoji(
      "⚡ Apoio técnico na resolução de falhas e melhorias em processos digitais"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EBAC - Escola Britânica de Artes Criativas & Tecnologia",
      logo: require("./assets/images/ebac.png"),
      subHeader: "Desenvolvedor Full Stack Python",
      duration: "Maio de 2024 - em curso",
      desc: "A EBAC proporcionou habilidades sólidas tanto no back-end quanto no front-end, com foco em criar aplicações web completas, escaláveis e orientadas à experiência do usuário.",
      descBullets: [
        "Back-end com Python: domínio de frameworks como React, Vue.js , com foco em APIs RESTful, integração com bancos de dados relacionais (PostgreSQL, MySQL) e no desenvolvimento de sistemas robustos e seguros.",
      ]
    },
    {
      schoolName: "Infinity School | Escola da Indústria Criativa",
      logo: require("./assets/images/infinityschool.png"),
      subHeader: "Programação e Metaverso",
      duration: "Julho de 2022 - Janeiro de 2023",
      desc: "A Infinity School Certifica e recomenda o aluno Caio Dias de Oliveira  por ter concluído o curso de Metaverso",
      descBullets: ["Apto a trabalhar com os softwares Unity, VR View e Visual Studio Code, com conhecimentos em linguagem C#, banco de dados, servidores e criação de cenários 3D. Tenho experiência na integração de ambientes interativos e desenvolvimento de aplicações imersivas, unindo lógica de programação, modelagem e tecnologia para oferecer experiências completas em realidade virtual e jogos."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desenvolvedor Jr.",
      company: "Filterfeed",
      companylogo: require("./assets/images/filterfeed.png"),
      date: "Fevereiro de 2025 – Presente",
      desc: "Atuação com testes em APIs, automações no CRM Ploomes, tratamento de dados com Python e suporte técnico em integrações, garantindo eficiência em processos, relatórios estratégicos e estabilidade em fluxos automatizados.",
    },
    {
      role: "Gerente",
      company: "Bayáh Caraíva",
      companylogo: require("./assets/images/bayah.jpg"),
      date: "Julho de 2023 – Fevereiro de 2024",
      desc: "Atuação com gestão de estoque e controle de pedidos, cadastro de produtos em sistema e atendimento direto ao público, garantindo organização operacional e uma experiência positiva para os clientes."
    },
    {
      role: "Sócio Diretor",
      company: "Vitorina Brasil",
      companylogo: require("./assets/images/vitorinabrasil.jpg"),
      date: "Maio de 2020 – Maio de 2023",
      desc: "Atuação no desenvolvimento web full stack, com foco em estruturação e manutenção de um marketplace próprio, integrando soluções de controle de produção e estoque. Responsável pela criação da identidade visual da marca (branding) e implementação de estratégias digitais que geraram aumento significativo nos resultados de vendas."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos",
  subtitle: "ALGUMAS STARTUPS E EMPRESAS QUE AJUDEI A CRIAR SUA TECNOLOGIA",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆"),
  subtitle:
    "CONQUISTAS, CERTIFICAÇÕES E RECONHECIMENTOS QUE MARCARAM MINHA JORNADA",

  achievementsCards: [
    {
      title: "Programação e Metaverso",
      subtitle:
        "Certificado internacional de conclusão do curso Programação Metaverso pela Infinity School, com foco em linguagem C#, Unity, realidade virtual e tecnologias aplicadas ao Metaverso. Formação voltada para o desenvolvimento de experiências imersivas e interativas, combinando programação, design e inovação digital.",
      image: require("./assets/images/certificadometa.png"),
      imageAlt: "Certificado Internacional",
      footerLink: [
        {
          name: "Certificado",
          url: "https://github.com/caiodiasol/servidor_estaticos/blob/main/Certificate%20Caio%20Metaverso.pdf"
        },
      ]
    },
    {
      title: "Carta de Recomendação - Infinity School",
      subtitle:
        "Carta oficial emitida pela Infinity School reconhecendo o desempenho, dedicação e habilidades desenvolvidas durante formação em Programação Metaverso, com ênfase em C#, Unity, realidade virtual e tecnologias imersivas.",
      image: require("./assets/images/recomendacao.jpg"),
      imageAlt: "Carta de Recomendação",
      footerLink: [
        {
          name: "Ver Carta de Recomendação",
          url: "https://github.com/caiodiasol/servidor_estaticos/blob/main/Carta%20de%20Apresenta%C3%A7%C3%A3o%20-%20Infinity%20School.pdf"
        }
      ]
    },
    {
      title: "Automação de Propostas e Documentos",
      subtitle: "Certificação concedida pela conclusão do curso de Automação de Propostas e Documentos, promovido pela Universidade Ploomes. O conteúdo abordou práticas e técnicas para otimizar a geração e gestão automatizada de documentos comerciais, com foco em eficiência, integração com CRM e padronização de processos empresariais.",
      image: require("./assets/images/automacao.jpg"),
      imageAlt: "Certificado Ploomes",
      footerLink: [
        {name: "Certificado", url: "https://github.com/caiodiasol/servidor_estaticos/blob/main/Caio%20Dias%20-%202025-02-17%20Automa%C3%A7%C3%A3o%20de%20Propostas%20e%20Documentos.pdf"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em Contato ☎️"),
  subtitle:
    "SEJA PARA DISCUTIR UM PROJETO, BATER UM PAPO TECH OU SÓ DIZER UM OI — MINHA INBOX ESTÁ SEMPRE ABERTA.",
  number: "+55-73-991053176",
  email_address: "caiodiasol@proton.me"
};

// Twitter Section

const twitterDetails = {
  userName: "twiter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
