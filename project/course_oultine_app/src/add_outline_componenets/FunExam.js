import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import RichTextEditor from "react-rte";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function FunExam() {

    const [examInfo, setExamInfo] = useState( RichTextEditor.createEmptyValue());
    const toolbarConfig = {
        display: ["INLINE_STYLE_BUTTONS", "BLOCK_TYPE_BUTTONS", "HISTORY_BUTTONS"],
        INLINE_STYLE_BUTTONS: [
          { label: "Bold", style: "BOLD", className: "custom-css-class" },
          { label: "Italic", style: "ITALIC" },
          { label: "Underline", style: "UNDERLINE" },
        ],
        BLOCK_TYPE_DROPDOWN: [
          { label: "Normal", style: "unstyled" },
          { label: "Heading Large", style: "header-one" },
          { label: "Heading Medium", style: "header-two" },
          { label: "Heading Small", style: "header-three" },
        ],
        BLOCK_TYPE_BUTTONS: [
          { label: "UL", style: "unordered-list-item" },
          { label: "OL", style: "ordered-list-item" },
        ],
      };
    return(
        <>
        <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary">
              <SaveIcon />
            </Button>
          </div>

<Container maxWidth="md">
                  <RichTextEditor
                    value={examInfo}
                    onChange={(value) => {setExamInfo(value)
                   console.log(examInfo)
                  }}
                    
                    toolbarConfig={toolbarConfig}
                    placeholder="Provide a list of all course exams, authorized materials, and whenever possible, timetabling information..."
                  />
                </Container>

        </>
    );
}

export default FunExam;