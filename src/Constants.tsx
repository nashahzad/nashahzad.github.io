import Panel from "./PanelInterface";

export var projects = new Array<Panel>();
projects.push({
    title: "Jira Sprint Analytics",
    description: "Open source Python 3.7 CLI tool that utilizes Jira’s API for gathering various metrics on specified sprints. \
    Consolidates the data gathered with pandas dataframes and generates visuals with plotly ",
    startDate: "July 2021",
    endDate: "December 2021",
    href: "https://github.com/nashahzad/jira-sprint-analytics",
    hrefLabel: "Github Repo"})
projects.push({
    title: "Emotrace", 
    description: "Collaborated with a group to create a Webapp, that uses facial recognition API to track user’s emotions while watching a video. \
    Backend servlet routing and implementing Google Users API; card templates for videos and channels, \
    used Java, Spring MVC, and Thymeleaf ", 
    startDate: "January 2017", 
    endDate: "May 2017", 
    href: "http://emotrace-x1.appspot.com", 
    hrefLabel: "Emotrace"})
projects.push({
    title: "YouTube Web Crawler", 
    description: "Multi-threaded web crawler written in Python 3.6.0. Datamine numerous YouTube videos for tags associated with each video; \
    created charts with analysis of tag popularity using the Plotly library", 
    startDate: "January 2017", 
    endDate: "May 2017", 
    href: "https://github.com/nashahzad/YoutubeTagsCrawler",
hrefLabel: "Github Repo"});

export var experiences = new Array<Panel>();
experiences.push({
    title: "Senior Software Engineer, Harver",
    startDate: "April 2019",
    endDate: "Current",
    description: "Python back end development in django and serverless. " +
        "Created fully automated CI/CD pipelines for all of our microservices  with GoCD. " +
        "Designed system integration testing flows to facilitate testing end to end User experience flows. " +
        "Created technical specs for both internal and external users  with PlantUML and OpenAPI. " +
        "Reduced incident resolution time by adding New Relic instrumentation and PagerDuty alerting. " +
        "Architected a fan out message subscription service facilitating client’s ability to self subscribe to messages. " +
        "Created an open source  CLI tool that utilizes Jira’s API for gathering various metrics on specified sprints.",
    href: null,
    hrefLabel: null
});
experiences.push({
    title: "Full Stack Web Developer, Eduware Inc.",
    startDate: "October 2017",
    endDate: "May 2017, Part Time",
    description: "ASP.NET Stack: C#, JQuery, LINQ, and Web Forms. Implement new features, bug fixes, and updates to legacy code",
    href: null,
    hrefLabel: null
});
experiences.push({
    title: "Software Engineer Intern, Bamtech LLC.",
    startDate: "January 2017",
    endDate: "August 2017",
    description: "Back-end development with Go and Groovy. Created a REST service to interact with JFrog's Artifactory and Mission-Control APIs \
    to automate artifactory creation, permissions set up, and push replication across every cluster. Utilized Docker to create containers for the REST service",
    href: null,
    hrefLabel: null
});
experiences.push({
    title: "Teaching Assistant - System Fundamentals II",
    startDate: "August 2016",
    endDate: "December 2016",
    description: "Wrote a memory allocator programming assignment and unit tests for the class. Created a \\LaTeX package to assist in writing up HW PDFs for the class. \
    Was a proctor for midterm and final exams",
    href: null,
    hrefLabel: null
});