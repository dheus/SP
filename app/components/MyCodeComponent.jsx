import { CopyBlock } from 'react-code-blocks';
import { CodeBlock, dracula } from 'react-code-blocks';

export default function MyCodeComponent({ code, language, showLineNumbers }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}
