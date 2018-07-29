import Panel from "./PanelInterface";

export var projects = new Array<Panel>();
projects.push({
    title: "Emotrace", 
    description: "Collaborated with a group to create a Webapp, that uses facial recognition API to track user’s emotions while watching a video \
    Backend servlet routing and implementing Google Users API; card templates for videos and channels, \
    used Java, Spring MVC, and Thymeleaf ", 
    startDate: "January 2017", 
    endDate: "May 2017", 
    href: "http://emotrace-x1.appspot.com", 
    hrefLabel: "Emotrace"})
projects.push({
    title: "YouTube Web Crawler", 
    description: "Multi-threaded web crawler written in Python 3.6.0. Datamine numerous YouTube videos for tags associated with each video; \
    created charts with analysis of tag popularity using the Plotly library.", 
    startDate: "January 2017", 
    endDate: "May 2017", 
    href: "https://github.com/nashahzad/YoutubeTagsCrawler",
hrefLabel: "Github Repo"});

export var experiences = new Array<Panel>();
experiences.push({
    title: "Full Stack Web Developer, Eduware Inc.",
    startDate: "October 2017",
    endDate: "May 2017, Part Time",
    description: "ASP.NET Stack: C#, JQuery, LINQ, and Web Forms. Implement new features, bug fixes, and updates to legacy code.",
    href: null,
    hrefLabel: null
});
experiences.push({
    title: "Software Engineer Intern, Bamtech LLC.",
    startDate: "January 2017",
    endDate: "August 2017",
    description: "Back-end development with Go and Groovy. Created a REST service to interact with JFrog's Artifactory and Mission-Control APIs \
    to automate artifactory creation, permissions set up, and push replication across every cluster. Utilized Docker to create containers for the REST service.",
    href: null,
    hrefLabel: null
});
experiences.push({
    title: "Teaching Assistant - System Fundamentals II",
    startDate: "August 2016",
    endDate: "December 2016",
    description: "Wrote a memory allocator programming assignment and unit tests for the class. Created a \\LaTeX package to assist in writing up HW PDFs for the class. \
    Was a proctor for midterm and final exams.",
    href: null,
    hrefLabel: null
});