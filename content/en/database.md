---
title: Database
description: Database
heading: Database
subheading:
type: index
image: art/jongeling_detransition.png
caption: Nele Jongeling
captionLink: /artist/nele-jongeling
---

# ABOUT

The _gendercomics.net_ database brings together comics from the German-speaking world that have been selected according to the following criteria: Was the comic originally published in the German-speaking world? Does it focus on gender concepts, body norms, and related issues? Is the comic particularly informative in terms of improving understanding of the discussion around gender? Are topics such as sexuality and desire dealt with? Do other intersectional/interdependent structural categories that interact with sex/gender come into play?
 
The comics were selected by Susanne Hochreiter, Naomi Lobnig, Marina Rauchenbacher, Katharina Serles, and Marlene van der Werf on the basis of extensive research in archives, libraries, online, and at comic festivals/fairs in the context of the project _Visualities of Gender in German-language Comics_ funded by the Austrian Science Fund FWF (grant DOI: [10.55776/P31925](https://www.fwf.ac.at/forschungsradar/10.55776/P31925)). 
 
The database offers a list of the selected comics with complete bibliographical details, as well as a keyword system that was developed in line with intersectional/interdependent questions. The database can be explored using a full-text search and filtered according to individual criteria (comic, person, publisher, keyword).

# FAQs
 
## 1. How is the database structured? 
The database consists of two parts: 
- a list of the selected comics with complete bibliographical details such as title, names of the artists, publisher, place, and year of publication, etc.
- a system for indexing the comics, which is divided into thematic clusters that are explained in a glossary and supplemented with further sources.
 
## 2. What is recorded? 
The database provides a record of comics published in German-speaking countries that are informative about the negotiation of gender and correlating intersectional/interdependent issues. The database includes not only publications by publishers, but also webcomics, comic magazines, comic series, published series, anthologies, and self-published publications.  

## 3. What period does the database cover? 
The database collects comics without any time restriction, i.e., regardless of their publication date, but ends with the end of the project’s funding in fall 2024. 

## 4. How were the comics selected? 
The comics were selected on the basis of research in archives, libraries, and online, as well as at comic festivals and conventions, answering the following questions: Was the comic originally published in the German-speaking world? Does it focus on gender concepts, body norms, and related issues? Is the comic particularly informative in terms of improving understanding of the discussion around gender? Are topics such as sexuality and desire dealt with? Do other intersectional/interdependent structural categories that interact with sex/gender come into play?

## 5. Who selected the comics? 
The comics were selected by the team of the project _Visualities of Gender in German-language Comics_, funded by the Austrian Science Fund (FWF). From 2019 to 2024, the team consisted of Susanne Hochreiter, Naomi Lobnig, Marina Rauchenbacher, Katharina Serles, and Marlene van der Werf, with varying degrees of involvement. 

## 6. How can I search the database? 
The database offers both a full-text search and the option of filtering according to specific criteria (comic, person, publisher, and keyword). 

## 7. What do the different role assignments in the database mean?
- The term _creator_ refers to the person or group of people who are responsible for the entire comic. In this case, it is a so-called _author comic_ in which the participants are identified as creators (without a specific role). 
- The _artist_ is the person who—in contrast to the text-based work of authors—is responsible for the artistic realization and elaboration of the comic. 
- The _colorist_ is responsible for adding color to the black and white lines and outlines drawn by the penciller and inker. The _flatter_ does important preparatory work in that the drawn objects and figures are filled with individual colors over a large area, which is followed by the detailed work of the colorist. Both professions are combined in the database under the role of colorist.
- Various special roles, such as artistic direction, character design, and editing, are subsumed under the term _contributor_. 
- The _editor_ is responsible for the edition of an anthology or journal.
- The work of the _inker_ follows on from that of the penciller, i.e., in this production step, the pre-drawn lines are traced with ink and finalized. The artistic potential lies in the specific layout of the lines, the choice of line thickness and width, the correction of errors, etc. Pens or brushes are used, and digital inking is also available. 
- The _letterer_ is responsible for the font; this includes, for example, the choice of font, font size, and font weight. A letterer is responsible for the design and positioning of speech and thought bubbles, as well as the block text in the panels, but may also be responsible for the comic’s logo and title (first page letterer). Their work is done with conventional pens and brushes (hand-lettering), as well as with appropriate graphics programs. 
The _penciller_ is responsible for putting the comic writer’s script on paper. The tasks of a penciller include the design of the panel layout and the setting or background, as well as the placement and elaboration of characters and objects. Various tools can be used for this work step—from conventional pencils to digital pens. The inker and the colorist build on this work. 
The _writer_ writes the comic script, works out the storyline, the dialogue between the characters, the time and place, etc. 

## 8. How does the keyword system work? 
The keyword system is divided into four clusters that are guided by intersectional/interdependent issues: 
- Gender/sexuality
- Health/disease/dis_ability
- Identity/development
- Power/violence 
Each cluster comprises several keywords that are related to each other and may partially overlap, i.e., they may occur in several clusters. **The database makes no claim to exhaustiveness or completeness**, but rather its keywording of the comics provides an initial approach to analysis. An application is planned for a follow-up project that will focus specifically on the indexing system. 

## 9. How does the glossary work? 
The glossary provides a definition of the individual clusters (including cited and further literature) and the key terms within them.
The individual clusters are each explicated by means of a glossary entry that sets central keywords in the larger research context and is linked to the assigned terms accordingly.  

## 10. Is the database self-contained?
Links are provided to the websites of publishers, the wikidata objects of the artists (if available, recognizable by the multi-digit identification number), and online sources of webcomics. In the background, a link to the German National Library ensured the uploading of several cover illustrations.

## 11. What are the technical specifications of the database? 
The database has been implemented with MongoDB, which can be accessed via a REST API. This API is used by both the database editor and the website to access the data. Authentication and authorization are required for write access; read access to the data is possible without logging in. The source code for the REST interface is hosted in a public repository on Github. The technical infrastructure is operated in a cloud environment at _digitalocean_ and can be expanded modularly through containerization or hosted with other cloud services if required.

## 12. Is the database updated? 
The database was last updated in August 2024. The project team is working on a follow-up application, which will include an expansion of the database. 

## 13. Can I suggest additions? 
Yes, suggestions and proposals are welcome and can be sent to [contact@gendercomics.net](contact@gendercomics.net). However, please be aware that the resources for regular and extensive maintenance of the database depend on continued funding. Thank you for your patience.

## 14. How can I report errors? 
Errors and suggestions for improvement can be reported to the project team via [contact@gendercomics.net](contact@gendercomics.net). For database maintenance, see questions 12 and 13.
