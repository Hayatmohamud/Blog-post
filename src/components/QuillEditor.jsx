import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const QuillEditor = forwardRef(
  ({ value, onChange, placeholder, className, height = 400 }, ref) => {
    const quillRef = useRef();
    const [editorValue, setEditorValue] = useState(value || "");

    // Tani waxay u ogolaanaysaa ArticleEditor inuu helo 'ref' haddii loo baahdo
    useImperativeHandle(ref, () => ({
      getQuill: () => quillRef.current?.getEditor(),
    }));

    useEffect(() => {
      if (value !== editorValue) {
        setEditorValue(value || "");
      }
    }, [value]);

    const handleChange = useCallback(
      (content) => {
        setEditorValue(content);
        if (onChange) {
          onChange(content);
        }
      },
      [onChange],
    );

    const modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["link", "image"],
        ["clean"],
      ],
    };

    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "indent",
      "link",
      "image",
      "code-block",
      "script",
    ];

    return (
      <div
        className={`${className || ""} quill-editor-wrapper`}
        style={{ height: `${height}px`, marginBottom: "50px" }}
      >
        <ReactQuill
          ref={quillRef}
          value={editorValue}
          onChange={handleChange}
          placeholder={placeholder || "Write your content..."}
          theme="snow" // SAXID: Dib u fur theme-ka
          style={{ height: `${height - 42}px` }}
          modules={modules}
          formats={formats}
        />
      </div>
    );
  },
);

QuillEditor.displayName = "QuillEditor";

export default QuillEditor;
