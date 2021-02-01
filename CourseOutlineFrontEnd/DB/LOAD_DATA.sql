use COURSE_OUTLINE;

INSERT INTO COURSE
VALUES ('ENSF-611-FALL-2020','3 units; H(3-2)','Machine Learning for Software Engineers','http://www.ucalgary.ca/pubs/calendar/current/engineering.html',3,'2020-12-31 12:00:00'),
('ENSF-619-FALL-2020','3 units; H(3-2)','Special Topics (Advanced Systems Analysis and Software Design','http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#42223',3,'2020-12-31 12:01:00'),
('ENSF-607-FALL-2020','3 units; H(3-2)','Software Design and Architecture','http://www.ucalgary.ca/pubs/calendar/current/engineering.html',3,'2020-12-31 12:05:00');

INSERT INTO INFO
VALUES ('ENSF-611-FALL-2020','a) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown <br>
below. This grading scale can only be changed during the term if the grades will not be lowered.',"In this course there will be 5 quizzes in weeks 3, 5, 7, 9, 11. Quizzes are open-book and open-notes, <br>
and will be completed on d2l. You need access to a computer and internet. <br>Quizzes will be available for a period of 24h from 5pm - 5pm (next day). There is no time limit, <br>
recommended time is 30min.<br>During exams, students are permitted access to: Notes, course materials, search internet. <br>During exams, students are not permitted to: Communicate in any way with others. <br>
Note: The timetable for Registrar Scheduled exams can be found at the University's Enrolment <br>Services website, http://www.ucalgary.ca/registrar/.","Covers Machine Learning, which focuses on developing machine learning applications, specifically in <br>
the engineering domain. Covers basic techniques for supervised and unsupervised learning, with the <br>emphasis on the applied aspects of the techniques.",'Does not apply.'),
('ENSF-619-FALL-2020',"a) It is not necessary to earn a passing grade on the final exam in order to pass the course as <br>a whole. <br>b) Conversion from a score out of 100 to a letter grade will be done using the conversion chart <br>
shown below. This grading scale can only be changed during the term if the grades will not be  <br>lowered.","Three quizzes will be held in this course: <br>
All quizzes will be delivered online, on D2L. Quizzes will be designed to be completed in 60 <br>minutes during the scheduled class time. However, once you start the exam on D2L, you will <br>
have 90 minutes to complete them. Quizzes will be made available for 24 hours, starting from <br>5:00 PM. You may complete the exams any time in this 24 hour period. <br>
You will need access to a computer and Internet, as well as an ability to scan and upload <br>hand-drawn diagrams or electronic files. Microsoft Office Lens is recommended when using a <br>
smartphone or tablet to scan your diagrams. <br>All test in this course are open-book and open-notes. You are permitted to access your own <br>
course notes, the textbook, and the course D2L site. <br>","A study of problems of particular interest to students specializing in Software Engineering.","No electronic devices or calculators are allowed"),
('ENSF-607-FALL-2020',"a) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown <br>below. This grading scale can only be changed during the term if the grades will not be lowered.","The following examinations will be held in this course: <br>
 1. There will be a midterm exam for this course. <br>Note: The timetable for Registrar Scheduled exams can be found at the  University's Enrolment <br>
Services website, http://www.ucalgary.ca/registrar/.  <br>","A study of software design topics including: abstraction, modularity, design  patterns, software <br> modeling, architectural patterns.","Does not apply.");

INSERT INTO TEXTBOOK 
VALUES ('ENSF-611-FALL-2020','Introduction to Machine Learning with Python',"O'Reilly",'Andreas C Mueller and Sarah Guido','First, 2016'),
('ENSF-611-FALL-2020','Python Data Science Handbook',"O'Reilly",'Jake VanderPlaes','First, 2016'),
('ENSF-619-FALL-2020','UML Distilled, A brief guide to the standard object modeling language','McGraw Hill','Martin Flower','Third'),
('ENSF-619-FALL-2020',"Software Engineering: A Practitioner's Approach",'McGraw Hill','Roger Pressman','Latest'),
('ENSF-619-FALL-2020',"Object-oriented Software Engineering, Practical Software Development","McGraw Hill","Timothy C. Lethbridge, Robert Laganiere",'Latest'),
('ENSF-619-FALL-2020','Head First Design Pattern',"O' Reilly",'Elisabeth Freeman, Eric Freeman','Latest'),
('ENSF-607-FALL-2020','Core Java Volume II – Advanced Features','Prentice Hall','Cay S. Horstmann','11th, 2018'),
('ENSF-607-FALL-2020','Core Java Volume I – Fundamentals','Prentice Hall ','Cay S. Horstmann','11th, 2020');

INSERT INTO OUTCOME
VALUES('ENSF-611-FALL-2020',1,"Produce code using machine learning libraries.","A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-611-FALL-2020',2,'Select and construct machine learning pipelines for engineering tasks.',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-611-FALL-2020',3,'Analyze machine learning model evaluation outcomes to optimize performance.',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-611-FALL-2020',4,'Document machine learning workflow and results.',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-619-FALL-2020',1,'Understand typical software lifecycle, and major phases of software development ',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-619-FALL-2020',2,'Understand some of the key operations in software engineering',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-619-FALL-2020',3,'Understand fundamentals of systems analysis and software requirements analysis',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-619-FALL-2020',4,'Understand details of the basic elements of software design: abstraction,',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-619-FALL-2020',5,'Understand and apply principles of modelling techniques such as UML, SSAD',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-607-FALL-2020',1,'Understand some of the advanced low-level design concepts, such as abstraction, <br>modularity, coupling and cohesion, and usage of concepts such as inheritance,<br>aggregation/composition, polymorphism, delegation, etc in Java',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-607-FALL-2020',2,'Applying miscellaneous programming concepts in Java such as generic types, and multithreading',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF-607-FALL-2020',3,'Design and develop client-server application',"A1. A knowledge base for engineering",'D (Developed)');

INSERT INTO CONTENT_CATEGORY
VALUES( 'ENSF-611-FALL-2020','Math','Prob'),
('ENSF-611-FALL-2020','Math','LinAlg'),
('ENSF-611-FALL-2020','Engineering Science',''),
('ENSF-611-FALL-2020','Engineering Design',''),
('ENSF-619-FALL-2020','Engineering Science',''),
('ENSF-619-FALL-2020','Engineering Design',''),
('ENSF-607-FALL-2020','Engineering Science',''),
('ENSF-607-FALL-2020','Engineering Design','');

INSERT INTO AU_WEIGHT
VALUES( 'ENSF-611-FALL-2020','Math',10),
('ENSF-611-FALL-2020','Engineering Science',70),
('ENSF-611-FALL-2020','Engineering Design',20),
('ENSF-619-FALL-2020','Engineering Science',75),
('ENSF-619-FALL-2020','Engineering Design',25),
('ENSF-607-FALL-2020','Engineering Science',75),
('ENSF-607-FALL-2020','Engineering Design',25);

INSERT INTO SECTION 
VALUES ('ENSF-611-FALL-2020','L01',6,80),
('ENSF-611-FALL-2020','B01',3,80),
('ENSF-619-FALL-2020','L01',6,80),
('ENSF-619-FALL-2020','B01',3,80),
('ENSF-607-FALL-2020','L01',6,80),
('ENSF-607-FALL-2020','B01',3,80);

INSERT INTO LECTURE
VALUES ('ENSF-611-FALL-2020','L01','Yves','Pauchard','4032107416','ICT 534','yves.pauchard@ucalgary.ca'),
('ENSF-619-FALL-2020','L01','Mahmood','Moussavi','4032206231','ICT 537','moussam@ucalgary.ca'),
('ENSF-607-FALL-2020','L01','Mahmood','Moshirpour','4032206864','ICT 345','mmoshirp@ucalgary.ca');

INSERT INTO LAB
VALUES ('ENSF-611-FALL-2020','B01',0,'Other','No','No','Yves','Pauchard','4032107416','ICT 534','yves.pauchard@ucalgary.ca'),
('ENSF-619-FALL-2020','B01',0,'Other','No','No','Mahmood','Moussavi','4032206231','ICT 537','moussam@ucalgary.ca'),
('ENSF-607-FALL-2020','B01',0,'Other','No','No','Mahmood','Moshirpour','4032206864','ICT 345','mmoshirp@ucalgary.ca');

INSERT INTO TIMETABLE
VALUES ('ENSF-611-FALL-2020','L01','MW','15:30-16:45','Web-Based'),
('ENSF-611-FALL-2020','B01','R','15:30-17:20','Web-Based'),
('ENSF-619-FALL-2020','L01','MWF','17:00-17:50','Web-Based'),
('ENSF-619-FALL-2020','B01','T','17:00-17:50','Web-Based'),
('ENSF-607-FALL-2020','L01','TuTh','9:30-10:45','Web-Based'),
('ENSF-607-FALL-2020','B01','Fr','11:00-12:50','Web-Based');

INSERT INTO GRADE_DISTRIBUTION
VALUES('ENSF-611-FALL-2020',95,100,'A+'),
('ENSF-611-FALL-2020',90,95,'A'),
('ENSF-611-FALL-2020',87,90,'A-'),
('ENSF-611-FALL-2020',84,87,'B+'),
('ENSF-611-FALL-2020',80,84,'B'),
('ENSF-611-FALL-2020',77,80,'B-'),
('ENSF-611-FALL-2020',74,77,'C+'),
('ENSF-611-FALL-2020',70,74,'C'),
('ENSF-611-FALL-2020',67,70,'C-'),
('ENSF-611-FALL-2020',64,67,'D+'),
('ENSF-611-FALL-2020',60,64,'D'),
('ENSF-611-FALL-2020',0,60,'F'),
('ENSF-619-FALL-2020',97,100,'A+'),
('ENSF-619-FALL-2020',92,97,'A'),
('ENSF-619-FALL-2020',90,92,'A-'),
('ENSF-619-FALL-2020',85,90,'B+'),
('ENSF-619-FALL-2020',80,85,'B'),
('ENSF-619-FALL-2020',75,80,'B-'),
('ENSF-619-FALL-2020',70,75,'C+'),
('ENSF-619-FALL-2020',65,70,'C'),
('ENSF-619-FALL-2020',60,65,'C-'),
('ENSF-619-FALL-2020',55,60,'D+'),
('ENSF-619-FALL-2020',50,55,'D'),
('ENSF-619-FALL-2020',0,50,'F'),
('ENSF-607-FALL-2020',95,100,'A+'),
('ENSF-607-FALL-2020',90,95,'A'),
('ENSF-607-FALL-2020',85,90,'A-'),
('ENSF-607-FALL-2020',80,85,'B+'),
('ENSF-607-FALL-2020',75,80,'B'),
('ENSF-607-FALL-2020',70,75,'B-'),
('ENSF-607-FALL-2020',65,70,'C+'),
('ENSF-607-FALL-2020',60,65,'C'),
('ENSF-607-FALL-2020',56,60,'C-'),
('ENSF-607-FALL-2020',53,56,'D+'),
('ENSF-607-FALL-2020',50,53,'D'),
('ENSF-607-FALL-2020',0,50,'F');

INSERT INTO GRADE_DETERMINATION
VALUES ('ENSF-611-FALL-2020','Assignments','1,2,3,4',36),
('ENSF-611-FALL-2020','Quizes','1,2,3',40),
('ENSF-611-FALL-2020','Project','1,2,3,4',24),
('ENSF-619-FALL-2020', 'Assignments and Projects','1-8',50),
('ENSF-619-FALL-2020','Quiz-1','1-4',15),
('ENSF-619-FALL-2020','Quiz-2','1-6',15),
('ENSF-619-FALL-2020','Quiz-3','1-8',20),
('ENSF-607-FALL-2020','Assignments','1-10',50),
('ENSF-607-FALL-2020','Project','1-10',25),
('ENSF-607-FALL-2020','Examination','1-9',25);