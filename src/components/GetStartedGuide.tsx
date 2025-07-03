import ReactMarkdown from "react-markdown";
import styles from "./GetStartedGuide.module.css";

interface GetStartedGuideProps {
  content: string;
  onClose: () => void;
}

export default function GetStartedGuide({ content, onClose }: GetStartedGuideProps) {


  return (
    <div className="fixed p-2 inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="prose prose-sm relative bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className={styles.markdown}>
            <ReactMarkdown components={{
                a: ({ href, children }) => (
                <a
                    href={href}
                    target="_blank"
                >
                    {children}
                </a>
                ),
            }}
            >{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
