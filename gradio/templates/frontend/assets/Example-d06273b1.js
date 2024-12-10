const Example_svelte_svelte_type_style_lang = '';

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/fileexplorer/Example.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	append,
	attr,
	destroy_each,
	detach,
	element,
	ensure_array_like,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class
} = window.__gradio__svelte__internal;
function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (11:1) {#each Array.isArray(value) ? value.slice(0, 3) : [value] as path}
function create_each_block(ctx) {
	let li;
	let code;
	let t0;
	let t1_value = /*path*/ ctx[3] + "";
	let t1;

	return {
		c() {
			li = element("li");
			code = element("code");
			t0 = text("./");
			t1 = text(t1_value);
		},
		m(target, anchor) {
			insert(target, li, anchor);
			append(li, code);
			append(code, t0);
			append(code, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*value*/ 1 && t1_value !== (t1_value = /*path*/ ctx[3] + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) {
				detach(li);
			}
		}
	};
}

// (14:1) {#if Array.isArray(value) && value.length > 3}
function create_if_block(ctx) {
	let li;

	return {
		c() {
			li = element("li");
			li.textContent = "...";
			attr(li, "class", "extra svelte-4tf8f");
		},
		m(target, anchor) {
			insert(target, li, anchor);
		},
		d(detaching) {
			if (detaching) {
				detach(li);
			}
		}
	};
}

function create_fragment(ctx) {
	let ul;
	let t;
	let show_if = Array.isArray(/*value*/ ctx[0]) && /*value*/ ctx[0].length > 3;

	let each_value = ensure_array_like(Array.isArray(/*value*/ ctx[0])
	? /*value*/ ctx[0].slice(0, 3)
	: [/*value*/ ctx[0]]);

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let if_block = show_if && create_if_block();

	return {
		c() {
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			if (if_block) if_block.c();
			attr(ul, "class", "svelte-4tf8f");
			toggle_class(ul, "table", /*type*/ ctx[1] === "table");
			toggle_class(ul, "gallery", /*type*/ ctx[1] === "gallery");
			toggle_class(ul, "selected", /*selected*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(ul, null);
				}
			}

			append(ul, t);
			if (if_block) if_block.m(ul, null);
		},
		p(ctx, [dirty]) {
			if (dirty & /*Array, value*/ 1) {
				each_value = ensure_array_like(Array.isArray(/*value*/ ctx[0])
				? /*value*/ ctx[0].slice(0, 3)
				: [/*value*/ ctx[0]]);

				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, t);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*value*/ 1) show_if = Array.isArray(/*value*/ ctx[0]) && /*value*/ ctx[0].length > 3;

			if (show_if) {
				if (if_block) ; else {
					if_block = create_if_block();
					if_block.c();
					if_block.m(ul, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*type*/ 2) {
				toggle_class(ul, "table", /*type*/ ctx[1] === "table");
			}

			if (dirty & /*type*/ 2) {
				toggle_class(ul, "gallery", /*type*/ ctx[1] === "gallery");
			}

			if (dirty & /*selected*/ 4) {
				toggle_class(ul, "selected", /*selected*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(ul);
			}

			destroy_each(each_blocks, detaching);
			if (if_block) if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { value } = $$props;
	let { type } = $$props;
	let { selected = false } = $$props;

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('type' in $$props) $$invalidate(1, type = $$props.type);
		if ('selected' in $$props) $$invalidate(2, selected = $$props.selected);
	};

	return [value, type, selected];
}

class Example extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { value: 0, type: 1, selected: 2 });
	}
}

export { Example as default };
//# sourceMappingURL=Example-d06273b1.js.map
