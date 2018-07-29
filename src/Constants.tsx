import Panel from "./PanelInterface";

export var projects = new Array<Panel>();
projects.push({title: "Emotrace", description: "Collaborated with a group to create a Webapp, that uses facial recognition API to track user’s emotions while watching a video \
Backend servlet routing and implementing Google Users API; card templates for videos and channels, \
used Java, Spring MVC, and Thymeleaf ", startDate: "January 2017", endDate: "May 2017", href: "http://emotrace-x1.appspot.com", hrefLabel: "Emotrace"})
projects.push({title: "YouTube Web Crawler", description: "Multi-threaded web crawler written in Python 3.6.0. Datamine numerous YouTube videos for tags associated with each video; \
created charts with analysis of tag popularity using the Plotly library.", startDate: "January 2017", endDate: "May 2017", href: "https://github.com/nashahzad/YoutubeTagsCrawler",
hrefLabel: "Github Repo"});

export var experiences = new Array<Panel>();
experiences.push({
    title: "Full Stack Web Developer",
    startDate: "October 2017",
    endDate: "May 2017, Part Time",
    description: "ASP.NET Stack: C#, JQuery, LINQ, and Web Forms. Implement new features, bug fixes, and updates to legacy code.",
    href: null,
    hrefLabel: null
});