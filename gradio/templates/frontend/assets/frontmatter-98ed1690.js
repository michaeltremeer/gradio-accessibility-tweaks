import { s as styleTags, f as foldNodeProp, c as foldInside, p as parseMixed, t as tags, S as StreamLanguage } from './Index-00852e2a.js';
import { yaml } from './yaml-c63fc23d.js';
import './index-8772699b.js';
import './svelte/svelte.js';
import './Button-f119184b.js';
import './Index-45462385.js';
import './Check-c4e94d66.js';
import './Copy-ea2deb29.js';
import './DownloadLink-e1ce61b2.js';
import './file-url-b84ec715.js';
import './BlockLabel-37e0c318.js';
import './Empty-17fcea4d.js';
import './Example-1a3e9e47.js';

const frontMatterFence = /^---\s*$/m;
const frontmatter = {
  defineNodes: [{ name: "Frontmatter", block: true }, "FrontmatterMark"],
  props: [
    styleTags({
      Frontmatter: [tags.documentMeta, tags.monospace],
      FrontmatterMark: tags.processingInstruction
    }),
    foldNodeProp.add({
      Frontmatter: foldInside,
      FrontmatterMark: () => null
    })
  ],
  wrap: parseMixed((node) => {
    const { parser } = StreamLanguage.define(yaml);
    if (node.type.name === "Frontmatter") {
      return {
        parser,
        overlay: [{ from: node.from + 4, to: node.to - 4 }]
      };
    }
    return null;
  }),
  parseBlock: [
    {
      name: "Frontmatter",
      before: "HorizontalRule",
      parse: (cx, line) => {
        let end = void 0;
        const children = new Array();
        if (cx.lineStart === 0 && frontMatterFence.test(line.text)) {
          children.push(cx.elt("FrontmatterMark", 0, 4));
          while (cx.nextLine()) {
            if (frontMatterFence.test(line.text)) {
              end = cx.lineStart + 4;
              break;
            }
          }
          if (end !== void 0) {
            children.push(cx.elt("FrontmatterMark", end - 4, end));
            cx.addElement(cx.elt("Frontmatter", 0, end, children));
          }
          return true;
        }
        return false;
      }
    }
  ]
};

export { frontmatter };
//# sourceMappingURL=frontmatter-98ed1690.js.map
