import type { MarkdownToJSX } from 'markdown-to-jsx'
import Markdown from 'markdown-to-jsx'
import type { FC } from 'react'
import { memo } from 'react'

const mdOptions: MarkdownToJSX.Options = {
  allowedTypes: [
    'text',
    'paragraph',
    'codeInline',
    'link',
    'linkMailtoDetector',
    'linkBareUrlDetector',
    'linkAngleBraceStyleDetector',
    'textStrikethroughed',
    'textEmphasized',
    'textBolded',
    'textEscaped',
  ],
  forceBlock: true,
}
export const NoteTopicMarkdownRender: FC<{ children: string }> = memo(
  (props) => {
    return <Markdown options={mdOptions}>{props.children}</Markdown>
  },
)
