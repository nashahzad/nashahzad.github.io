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
    endDate: "July 2023",
    description: "Lead team for architecting new event driven architecture for internal client subscriptions to system events to transition from legacy monolith design. Python, Celery, SQS, Lambda, Redis, and DynamoDB " +
        "Tech lead for developing frameworks and APIs for scalable connectors with AWS Lambda and Serverless, working with business stakeholders, e.g.. Integration with Oracle and Workday " +
        "Developed a third-party authorization system that enabled clients to manage, provision, and track access to their data. Python, Django, MySQL " +
        "Created an open-source CLI tool for engineers that utilized Jira’s API and doubled our scrum teams’ ability to measure the efficiency of strategies from sprint to sprint. " +
        "Developed end-to-end integration tests for critical path flows, reducing the need for manual testing. Python, Django, mySQL " +
        "Created CI/CD pipelines with GoCD for all of our services, providing a way to support testing, track builds, and version control. " +
        "Cut emergency incident resolution time in half by implementing New Relic and PagerDuty alerting. " +
        "Worked with distributed teams; leading design discussions, code reviews, interviews, and mentoring of junior developers. ",
    href: null,
    hrefLabel: null
});
experiences.push({
    title: "Full Stack Web Developer, Eduware Inc.",
    startDate: "October 2017",
    endDate: "May 2017",
    description: "Created and launched client-facing web app, using ASP.NET stack (C#, LINQ, Web Forms, AJAX) and Javascript/jQuery, enabling real-time test and assignment administration for teachers. " +
        "Provided clean, concise, and scalable codebase for current and future developers by refactoring legacy back-end code in alignment with best practices for code design. ",
    href: null,
    hrefLabel: null
});
experiences.push({
    title: "Software Engineer Intern, Bamtech LLC.",
    startDate: "January 2017",
    endDate: "August 2017",
    description: "Designed and implemented modularized REST API from scratch that supported various workflows and was easily extendable to accommodate all future use cases.  Go, Groovy " +
        "Automated artifact creation, permissions setup, and push replication across clusters for software teams by creating REST service to interact with JFrog’s Artifactory and Mission-Control APIs. ",
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