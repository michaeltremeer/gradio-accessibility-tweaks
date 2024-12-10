const Example_svelte_svelte_type_style_lang = '';

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/dropdown/Example.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	toggle_class
} = window.__gradio__svelte__internal;
function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.textContent = `${/*names_string*/ ctx[2]}`;
			attr(div, "class", "svelte-1ayixqk");
			toggle_class(div, "table", /*type*/ ctx[0] === "table");
			toggle_class(div, "gallery", /*type*/ ctx[0] === "gallery");
			toggle_class(div, "selected", /*selected*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*type*/ 1) {
				toggle_class(div, "table", /*type*/ ctx[0] === "table");
			}

			if (dirty & /*type*/ 1) {
				toggle_class(div, "gallery", /*type*/ ctx[0] === "gallery");
			}

			if (dirty & /*selected*/ 2) {
				toggle_class(div, "selected", /*selected*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { value } = $$props;
	let { type } = $$props;
	let { selected = false } = $$props;
	let { choices } = $$props;
	let value_array = Array.isArray(value) ? value : [value];
	let names = value_array.map(val => choices.find(pair => pair[1] === val)?.[0]).filter(name => name !== undefined);
	let names_string = names.join(", ");

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(3, value = $$props.value);
		if ('type' in $$props) $$invalidate(0, type = $$props.type);
		if ('selected' in $$props) $$invalidate(1, selected = $$props.selected);
		if ('choices' in $$props) $$invalidate(4, choices = $$props.choices);
	};

	return [type, selected, names_string, value, choices];
}

class Example extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			value: 3,
			type: 0,
			selected: 1,
			choices: 4
		});
	}
}

export { Example as default };
//# sourceMappingURL=Example-dd9a5dd0.js.map
