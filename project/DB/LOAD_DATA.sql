use COURSE_OUTLINE;

INSERT INTO COURSE
VALUES ('ENSF611','3 units; H(3-2)','Machine Learning for Software Engineers','http://www.ucalgary.ca/pubs/calendar/current/engineering.html',3,'2020-12-31 12:00:00'),
('ENSF619','3 units; H(3-2)','Special Topics (Advanced Systems Analysis and Software Design','http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#42223',3,'2020-12-31 12:01:00'),
('ENSF607','3 units; H(3-2)','Software Design and Architecture','http://www.ucalgary.ca/pubs/calendar/current/engineering.html',3,'2020-12-31 12:05:00');

INSERT INTO INFO
VALUES ('ENSF611','a) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown <br>
below. This grading scale can only be changed during the term if the grades will not be lowered.',"In this course there will be 5 quizzes in weeks 3, 5, 7, 9, 11. Quizzes are open-book and open-notes, <br>
and will be completed on d2l. You need access to a computer and internet. <br>Quizzes will be available for a period of 24h from 5pm - 5pm (next day). There is no time limit, <br>
recommended time is 30min.<br>During exams, students are permitted access to: Notes, course materials, search internet. <br>During exams, students are not permitted to: Communicate in any way with others. <br>
Note: The timetable for Registrar Scheduled exams can be found at the University's Enrolment <br>Services website, http://www.ucalgary.ca/registrar/.","Covers Machine Learning, which focuses on developing machine learning applications, specifically in <br>
the engineering domain. Covers basic techniques for supervised and unsupervised learning, with the <br>emphasis on the applied aspects of the techniques.",'Does not apply.'),
('ENSF619',"a) It is not necessary to earn a passing grade on the final exam in order to pass the course as <br>a whole. <br>b) Conversion from a score out of 100 to a letter grade will be done using the conversion chart <br>
shown below. This grading scale can only be changed during the term if the grades will not be  <br>lowered.","Three quizzes will be held in this course: <br>
All quizzes will be delivered online, on D2L. Quizzes will be designed to be completed in 60 <br>minutes during the scheduled class time. However, once you start the exam on D2L, you will <br>
have 90 minutes to complete them. Quizzes will be made available for 24 hours, starting from <br>5:00 PM. You may complete the exams any time in this 24 hour period. <br>
You will need access to a computer and Internet, as well as an ability to scan and upload <br>hand-drawn diagrams or electronic files. Microsoft Office Lens is recommended when using a <br>
smartphone or tablet to scan your diagrams. <br>All test in this course are open-book and open-notes. You are permitted to access your own <br>
course notes, the textbook, and the course D2L site. <br>","A study of problems of particular interest to students specializing in Software Engineering.","No electronic devices or calculators are allowed"),
('ENSF607',"a) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown <br>below. This grading scale can only be changed during the term if the grades will not be lowered.","The following examinations will be held in this course: <br>
 1. There will be a midterm exam for this course. <br>Note: The timetable for Registrar Scheduled exams can be found at the  University's Enrolment <br>
Services website, http://www.ucalgary.ca/registrar/.  <br>","A study of software design topics including: abstraction, modularity, design  patterns, software <br> modeling, architectural patterns.","Does not apply.");

INSERT INTO TEXTBOOK 
VALUES ('ENSF611','Introduction to Machine Learning with Python',"O'Reilly",'Andreas C Mueller and Sarah Guido','First, 2016'),
('ENSF611','Python Data Science Handbook',"O'Reilly",'Jake VanderPlaes','First, 2016'),
('ENSF619','UML Distilled, A brief guide to the standard object modeling language','McGraw Hill','Martin Flower','Third'),
('ENSF619',"Software Engineering: A Practitioner's Approach",'McGraw Hill','Roger Pressman','Latest'),
('ENSF619',"Object-oriented Software Engineering, Practical Software Development","McGraw Hill","Timothy C. Lethbridge, Robert Laganiere",'Latest'),
('ENSF619','Head First Design Pattern',"O' Reilly",'Elisabeth Freeman, Eric Freeman','Latest'),
('ENSF607','Core Java Volume II – Advanced Features','Prentice Hall','Cay S. Horstmann','11th, 2018'),
('ENSF607','Core Java Volume I – Fundamentals','Prentice Hall ','Cay S. Horstmann','11th, 2020');

INSERT INTO OUTCOME
VALUES('ENSF611',1,"Produce code using machine learning libraries.","A1. A knowledge base for engineering",'D (Developed)'),
('ENSF611',2,'Select and construct machine learning pipelines for engineering tasks.',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF611',3,'Analyze machine learning model evaluation outcomes to optimize performance.',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF611',4,'Document machine learning workflow and results.',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF619',1,'Understand typical software lifecycle, and major phases of software development ',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF619',2,'Understand some of the key operations in software engineering',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF619',3,'Understand fundamentals of systems analysis and software requirements analysis',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF619',4,'Understand details of the basic elements of software design: abstraction,',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF619',5,'Understand and apply principles of modelling techniques such as UML, SSAD',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF607',1,'Understand some of the advanced low-level design concepts, such as abstraction, <br>modularity, coupling and cohesion, and usage of concepts such as inheritance,<br>aggregation/composition, polymorphism, delegation, etc in Java',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF607',2,'Applying miscellaneous programming concepts in Java such as generic types, and multithreading',"A1. A knowledge base for engineering",'D (Developed)'),
('ENSF607',3,'Design and develop client-server application',"A1. A knowledge base for engineering",'D (Developed)');

INSERT INTO CONTENT_CATEGORY
VALUES( 'ENSF611','Math','Prob'),
('ENSF611','Math','LinAlg'),
('ENSF611','Engineering Science',''),
('ENSF611','Engineering Design',''),
('ENSF619','Engineering Science',''),
('ENSF619','Engineering Design',''),
('ENSF607','Engineering Science',''),
('ENSF607','Engineering Design','');

INSERT INTO AU_WEIGHT
VALUES( 'ENSF611','Math',10),
('ENSF611','Engineering Science',70),
('ENSF611','Engineering Design',20),
('ENSF619','Engineering Science',75),
('ENSF619','Engineering Design',25),
('ENSF607','Engineering Science',75),
('ENSF607','Engineering Design',25);

INSERT INTO SECTION 
VALUES ('ENSF611','L01',6,80),
('ENSF611','B01',3,80),
('ENSF619','L01',6,80),
('ENSF619','B01',3,80),
('ENSF607','L01',6,80),
('ENSF607','B01',3,80);

INSERT INTO LECTURE
VALUES ('ENSF611','L01','Yves','Pauchard','4032107416','ICT 534','yves.pauchard@ucalgary.ca'),
('ENSF619','L01','Mahmood','Moussavi','4032206231','ICT 537','moussam@ucalgary.ca'),
('ENSF607','L01','Mahmood','Moshirpour','4032206864','ICT 345','mmoshirp@ucalgary.ca');

INSERT INTO LAB
VALUES ('ENSF611','B01',0,'Other','No','No','Yves','Pauchard','4032107416','ICT 534','yves.pauchard@ucalgary.ca'),
('ENSF619','B01',0,'Other','No','No','Mahmood','Moussavi','4032206231','ICT 537','moussam@ucalgary.ca'),
('ENSF607','B01',0,'Other','No','No','Mahmood','Moshirpour','4032206864','ICT 345','mmoshirp@ucalgary.ca');

INSERT INTO TIMETABLE
VALUES ('ENSF611','L01','MW','15:30-16:45','Web-Based'),
('ENSF611','B01','R','15:30-17:20','Web-Based'),
('ENSF619','L01','MWF','17:00-17:50','Web-Based'),
('ENSF619','B01','T','17:00-17:50','Web-Based'),
('ENSF607','L01','TuTh','9:30-10:45','Web-Based'),
('ENSF607','B01','Fr','11:00-12:50','Web-Based');

INSERT INTO GRADE_DISTRIBUTION
VALUES('ENSF611',95,100,'A+'),
('ENSF611',90,95,'A'),
('ENSF611',87,90,'A-'),
('ENSF611',84,87,'B+'),
('ENSF611',80,84,'B'),
('ENSF611',77,80,'B-'),
('ENSF611',74,77,'C+'),
('ENSF611',70,74,'C'),
('ENSF611',67,70,'C-'),
('ENSF611',64,67,'D+'),
('ENSF611',60,64,'D'),
('ENSF611',0,60,'F'),
('ENSF619',97,100,'A+'),
('ENSF619',92,97,'A'),
('ENSF619',90,92,'A-'),
('ENSF619',85,90,'B+'),
('ENSF619',80,85,'B'),
('ENSF619',75,80,'B-'),
('ENSF619',70,75,'C+'),
('ENSF619',65,70,'C'),
('ENSF619',60,65,'C-'),
('ENSF619',55,60,'D+'),
('ENSF619',50,55,'D'),
('ENSF619',0,50,'F'),
('ENSF607',95,100,'A+'),
('ENSF607',90,95,'A'),
('ENSF607',85,90,'A-'),
('ENSF607',80,85,'B+'),
('ENSF607',75,80,'B'),
('ENSF607',70,75,'B-'),
('ENSF607',65,70,'C+'),
('ENSF607',60,65,'C'),
('ENSF607',56,60,'C-'),
('ENSF607',53,56,'D+'),
('ENSF607',50,53,'D'),
('ENSF607',0,50,'F');

INSERT INTO GRADE_DETERMINATION
VALUES ('ENSF611','Assignments','1,2,3,4',36),
('ENSF611','Quizes','1,2,3',40),
('ENSF611','Project','1,2,3,4',24),
('ENSF619', 'Assignments and Projects','1-8',50),
('ENSF619','Quiz-1','1-4',15),
('ENSF619','Quiz-2','1-6',15),
('ENSF619','Quiz-3','1-8',20),
('ENSF607','Assignments','1-10',50),
('ENSF607','Project','1-10',25),
('ENSF607','Examination','1-9',25);