import { cn } from "@/lib/utils";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";

export type EditorProps = {
  className?: string;
};

const Editor = ({ className }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          class: "!my-0",
        },
      }),
    ],
    content: "<h2>This is releaseit</h2>",
    editorProps: {
      attributes: {
        class: cn(
          "releaseit-editor prose dark:prose-invert border border-foreground p-10 rounded-lg prose-sm sm:prose-base focus:outline-none",
          className,
        ),
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default Editor;
