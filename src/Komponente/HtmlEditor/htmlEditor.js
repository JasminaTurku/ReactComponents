import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
function HtmlEditor() {
  const modules = {
    toolbar: [["bold", "italic", "underline"]],
  };
  const { quill, quillRef } = useQuill({ modules });
  const [value, setValue] = useState();
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild);
      });
    }
  }, [quill]);

  console.log(value, "this is quill editor");
  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  );
}
export default HtmlEditor;
