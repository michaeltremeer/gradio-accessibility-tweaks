import { s as styleTags, f as foldNodeProp, c as foldInside, p as parseMixed, t as tags, S as StreamLanguage } from './Index-7bd609be.js';
import { yaml } from './yaml-c63fc23d.js';
import './index-9f17c9ef.js';
import './svelte/svelte.js';
import './Button-85965304.js';
import './Index-c47c629c.js';
import './Check-c4e94d66.js';
import './Copy-ea2deb29.js';
import './DownloadLink-bbdc624c.js';
import './file-url-9914359e.js';
import './BlockLabel-37315a13.js';
import './Empty-28cb678b.js';
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
//# sourceMappingURL=frontmatter-df4f0532.js.map
