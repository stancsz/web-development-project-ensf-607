
function FunOutcome() {
    return (
        <div className="StaticText01">
            <StaticText01 />
            <StaticText02 />
        </div>
    );
}

function StaticText01(){
    return (
        <div className="StaticText01">
            <h2 class="title">2. Learning Outcomes	</h2>
            <p>At the end of this course, you will be able to:	</p>
            <div class="content">
                <ol start='' type="1">
                    <li>Have a deep understanding, and practical knowledge of object oriented analysis, design, and development.	</li>
                    <li>Design and develop software programs in Java.	</li>
                    <li>Define the concepts of object-oriented design, such as inheritance and polymorphism.	</li>
                    <li>Apply miscellaneous programming concepts in Java, such as cloning, generic types, multi-threading, event-based programming, etc.	</li>
                    <li>Design and develop client-server applications.	</li>
                    <li>Use databases to store and retrieve information.	</li>
                    <li>Use different design and development utilities and tools.	</li>
                </ol>
            </div>
            <p>Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), expected to be exhibited by graduates of Canadian engineering schools. This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.</p>

            <Form01/>

            <h3 class="subtitle">CEAB Graduate Attributes:			</h3>
            <div class="content">
                <ul type="a">
                    <li>A1. A knowledge base for engineering			</li>
                    <li>A2. Problem analysis			</li>
                    <li>A3. Investigation			</li>
                    <li>A4. Design			</li>
                    <li>A5. Use of engineering tools			</li>
                    <li>A6. Individual and team work			</li>
                    <li>A7. Communication skills	</li>
                    <li>A8. Professionalism	</li>
                    <li>A9. Impact of engineering on society/environment	</li>
                    <li>A10. Ethics and equity	</li>
                    <li>A11. Economics and project management	</li>
                    <li>A12. Life-long learning	</li>
                </ul>
            </div>
            <h3>*The level at which the learning outcome is addressed in this course:						</h3>
            <div className="content">
                <ul>
                    <li>I (Introduced):		Introductory level			</li>
                    <li>D (Developed):		Intermediate development level			</li>
                    <li>A (Applied):		Advanced application level			</li>
                </ul>
                </div>
            </div>
            );
            }

            function StaticText02(){
            return (
            <div className="StaticText02">
            <h2 class="title">Course Content Categories	</h2>
            <p>The following table displays the course content categories and their AU (Accreditation Unit) percentages	</p>
            <Form02/>

            <p>*At least one element must be selected for categories that identify AUs
            Ensure that the number of sections and hours per week are updated. You may leave the &quot;Number of Students Per Supervisor&quot; column for lecture blank.</p>
            <h2 class="tile">Course Section Information</h2>
            <Form03/>
            <h2 class="title">Laboratory Experience</h2>
            <p class="subtitle">Ignore this table if the course does not have a laboratory section</p>
            <Form04/>

            <p>Update the timetable information below. In the &quot;Day(s) of the Week&quot; column, use M,T,W,R,F,S,U as the codes for Monday - Sunday (e.g., MWF). In the &quot;Time&quot; column, specify the time range in 24 hour MDT (Calgary time) format (e.g., 13:00-13:50).</p>
            </div>
            );
        }


            function Form01(){
            return (
            <div className="Form01"></div>
            );
        }

            function Form02(){
            return (
            <div className="Form02"></div>
            );
        }

            function Form03(){
            return (
            <div className="Form03"></div>
            );
        }

            function Form04(){
            return (
            <div className="Form04"></div>
            );
        }



            export default FunOutcome;