'use client'

import GithubInlineComments from '@/components/kidow/github-inline-comments'

export default function GithubInlineCommentsDemo() {
  return (
    <div className="w-full max-w-lg p-4">
      <GithubInlineComments
        fileName="registry.json"
        diff={[
          { kind: 'hunk', content: '@@ -1,4 +1,5 @@' },
          { kind: 'context', old: 1, new: 1, content: '  "items": [' },
          { kind: 'del', old: 2, new: null, content: '    { "name": "old-marquee" }' },
          { kind: 'add', old: null, new: 2, content: '    { "name": "marquee" },' },
          { kind: 'add', old: null, new: 3, content: '    { "name": "terminal" }' },
          { kind: 'context', old: 3, new: 4, content: '  ]' },
        ]}
      />
    </div>
  )
}
