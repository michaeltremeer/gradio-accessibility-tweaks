import './Index-6565a135.js';
import { U as Upload, I as ImagePaste } from './Upload-c3a4bb4a.js';
import './Button-7367342c.js';

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/icons/src/Microphone.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent: SvelteComponent$2,
	append: append$2,
	attr: attr$2,
	detach: detach$2,
	init: init$2,
	insert: insert$2,
	noop: noop$1,
	safe_not_equal: safe_not_equal$2,
	svg_element: svg_element$1
} = window.__gradio__svelte__internal;
function create_fragment$2(ctx) {
	let svg;
	let path0;
	let path1;
	let line0;
	let line1;

	return {
		c() {
			svg = svg_element$1("svg");
			path0 = svg_element$1("path");
			path1 = svg_element$1("path");
			line0 = svg_element$1("line");
			line1 = svg_element$1("line");
			attr$2(path0, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z");
			attr$2(path1, "d", "M19 10v2a7 7 0 0 1-14 0v-2");
			attr$2(line0, "x1", "12");
			attr$2(line0, "y1", "19");
			attr$2(line0, "x2", "12");
			attr$2(line0, "y2", "23");
			attr$2(line1, "x1", "8");
			attr$2(line1, "y1", "23");
			attr$2(line1, "x2", "16");
			attr$2(line1, "y2", "23");
			attr$2(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr$2(svg, "width", "100%");
			attr$2(svg, "height", "100%");
			attr$2(svg, "viewBox", "0 0 24 24");
			attr$2(svg, "fill", "none");
			attr$2(svg, "stroke", "currentColor");
			attr$2(svg, "stroke-width", "2");
			attr$2(svg, "stroke-linecap", "round");
			attr$2(svg, "stroke-linejoin", "round");
			attr$2(svg, "class", "feather feather-mic");
		},
		m(target, anchor) {
			insert$2(target, svg, anchor);
			append$2(svg, path0);
			append$2(svg, path1);
			append$2(svg, line0);
			append$2(svg, line1);
		},
		p: noop$1,
		i: noop$1,
		o: noop$1,
		d(detaching) {
			if (detaching) {
				detach$2(svg);
			}
		}
	};
}

class Microphone extends SvelteComponent$2 {
	constructor(options) {
		super();
		init$2(this, options, null, create_fragment$2, safe_not_equal$2, {});
	}
}

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/icons/src/Webcam.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent: SvelteComponent$1,
	append: append$1,
	attr: attr$1,
	detach: detach$1,
	init: init$1,
	insert: insert$1,
	noop,
	safe_not_equal: safe_not_equal$1,
	svg_element
} = window.__gradio__svelte__internal;
function create_fragment$1(ctx) {
	let svg;
	let path0;
	let path1;

	return {
		c() {
			svg = svg_element("svg");
			path0 = svg_element("path");
			path1 = svg_element("path");
			attr$1(path0, "fill", "currentColor");
			attr$1(path0, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z");
			attr$1(path1, "fill", "currentColor");
			attr$1(path1, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z");
			attr$1(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr$1(svg, "width", "100%");
			attr$1(svg, "height", "100%");
			attr$1(svg, "viewBox", "0 0 24 24");
		},
		m(target, anchor) {
			insert$1(target, svg, anchor);
			append$1(svg, path0);
			append$1(svg, path1);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach$1(svg);
			}
		}
	};
}

class Webcam extends SvelteComponent$1 {
	constructor(options) {
		super();
		init$1(this, options, null, create_fragment$1, safe_not_equal$1, {});
	}
}

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/atoms/src/SelectSource.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	append,
	attr,
	check_outros,
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	safe_not_equal,
	space,
	toggle_class,
	transition_in,
	transition_out
} = window.__gradio__svelte__internal;
function create_if_block(ctx) {
	let span;
	let show_if_3 = /*sources*/ ctx[1].includes("upload");
	let t0;
	let show_if_2 = /*sources*/ ctx[1].includes("microphone");
	let t1;
	let show_if_1 = /*sources*/ ctx[1].includes("webcam");
	let t2;
	let show_if = /*sources*/ ctx[1].includes("clipboard");
	let current;
	let if_block0 = show_if_3 && create_if_block_4(ctx);
	let if_block1 = show_if_2 && create_if_block_3(ctx);
	let if_block2 = show_if_1 && create_if_block_2(ctx);
	let if_block3 = show_if && create_if_block_1(ctx);

	return {
		c() {
			span = element("span");
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if (if_block2) if_block2.c();
			t2 = space();
			if (if_block3) if_block3.c();
			attr(span, "class", "source-selection svelte-1ebruwp");
			attr(span, "data-testid", "source-select");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			if (if_block0) if_block0.m(span, null);
			append(span, t0);
			if (if_block1) if_block1.m(span, null);
			append(span, t1);
			if (if_block2) if_block2.m(span, null);
			append(span, t2);
			if (if_block3) if_block3.m(span, null);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*sources*/ 2) show_if_3 = /*sources*/ ctx[1].includes("upload");

			if (show_if_3) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*sources*/ 2) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(span, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (dirty & /*sources*/ 2) show_if_2 = /*sources*/ ctx[1].includes("microphone");

			if (show_if_2) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*sources*/ 2) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_3(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(span, t1);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (dirty & /*sources*/ 2) show_if_1 = /*sources*/ ctx[1].includes("webcam");

			if (show_if_1) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*sources*/ 2) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_2(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(span, t2);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (dirty & /*sources*/ 2) show_if = /*sources*/ ctx[1].includes("clipboard");

			if (show_if) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty & /*sources*/ 2) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block_1(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(span, null);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(if_block3);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(if_block3);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(span);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
		}
	};
}

// (16:2) {#if sources.includes("upload")}
function create_if_block_4(ctx) {
	let button;
	let upload;
	let current;
	let mounted;
	let dispose;
	upload = new Upload({});

	return {
		c() {
			button = element("button");
			create_component(upload.$$.fragment);
			attr(button, "class", "icon svelte-1ebruwp");
			attr(button, "aria-label", "Upload file");
			toggle_class(button, "selected", /*active_source*/ ctx[0] === "upload" || !/*active_source*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, button, anchor);
			mount_component(upload, button, null);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler*/ ctx[6]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty & /*active_source*/ 1) {
				toggle_class(button, "selected", /*active_source*/ ctx[0] === "upload" || !/*active_source*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(upload.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(upload.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(button);
			}

			destroy_component(upload);
			mounted = false;
			dispose();
		}
	};
}

// (25:2) {#if sources.includes("microphone")}
function create_if_block_3(ctx) {
	let button;
	let microphone;
	let current;
	let mounted;
	let dispose;
	microphone = new Microphone({});

	return {
		c() {
			button = element("button");
			create_component(microphone.$$.fragment);
			attr(button, "class", "icon svelte-1ebruwp");
			attr(button, "aria-label", "Record audio");
			toggle_class(button, "selected", /*active_source*/ ctx[0] === "microphone");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			mount_component(microphone, button, null);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler_1*/ ctx[7]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty & /*active_source*/ 1) {
				toggle_class(button, "selected", /*active_source*/ ctx[0] === "microphone");
			}
		},
		i(local) {
			if (current) return;
			transition_in(microphone.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(microphone.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(button);
			}

			destroy_component(microphone);
			mounted = false;
			dispose();
		}
	};
}

// (35:2) {#if sources.includes("webcam")}
function create_if_block_2(ctx) {
	let button;
	let webcam;
	let current;
	let mounted;
	let dispose;
	webcam = new Webcam({});

	return {
		c() {
			button = element("button");
			create_component(webcam.$$.fragment);
			attr(button, "class", "icon svelte-1ebruwp");
			attr(button, "aria-label", "Capture from camera");
			toggle_class(button, "selected", /*active_source*/ ctx[0] === "webcam");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			mount_component(webcam, button, null);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler_2*/ ctx[8]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty & /*active_source*/ 1) {
				toggle_class(button, "selected", /*active_source*/ ctx[0] === "webcam");
			}
		},
		i(local) {
			if (current) return;
			transition_in(webcam.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(webcam.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(button);
			}

			destroy_component(webcam);
			mounted = false;
			dispose();
		}
	};
}

// (43:2) {#if sources.includes("clipboard")}
function create_if_block_1(ctx) {
	let button;
	let imagepaste;
	let current;
	let mounted;
	let dispose;
	imagepaste = new ImagePaste({});

	return {
		c() {
			button = element("button");
			create_component(imagepaste.$$.fragment);
			attr(button, "class", "icon svelte-1ebruwp");
			attr(button, "aria-label", "Paste from clipboard");
			toggle_class(button, "selected", /*active_source*/ ctx[0] === "clipboard");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			mount_component(imagepaste, button, null);
			current = true;

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler_3*/ ctx[9]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty & /*active_source*/ 1) {
				toggle_class(button, "selected", /*active_source*/ ctx[0] === "clipboard");
			}
		},
		i(local) {
			if (current) return;
			transition_in(imagepaste.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(imagepaste.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(button);
			}

			destroy_component(imagepaste);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*unique_sources*/ ctx[2].length > 1 && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*unique_sources*/ ctx[2].length > 1) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*unique_sources*/ 4) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let unique_sources;
	let { sources } = $$props;
	let { active_source } = $$props;

	let { handle_clear = () => {
		
	} } = $$props;

	let { handle_select = () => {
		
	} } = $$props;

	async function handle_select_source(source) {
		handle_clear();
		$$invalidate(0, active_source = source);
		handle_select(source);
	}

	const click_handler = () => handle_select_source("upload");
	const click_handler_1 = () => handle_select_source("microphone");
	const click_handler_2 = () => handle_select_source("webcam");
	const click_handler_3 = () => handle_select_source("clipboard");

	$$self.$$set = $$props => {
		if ('sources' in $$props) $$invalidate(1, sources = $$props.sources);
		if ('active_source' in $$props) $$invalidate(0, active_source = $$props.active_source);
		if ('handle_clear' in $$props) $$invalidate(4, handle_clear = $$props.handle_clear);
		if ('handle_select' in $$props) $$invalidate(5, handle_select = $$props.handle_select);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*sources*/ 2) {
			$$invalidate(2, unique_sources = [...new Set(sources)]);
		}
	};

	return [
		active_source,
		sources,
		unique_sources,
		handle_select_source,
		handle_clear,
		handle_select,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class SelectSource extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			sources: 1,
			active_source: 0,
			handle_clear: 4,
			handle_select: 5
		});
	}
}

export { SelectSource as S, Webcam as W };
//# sourceMappingURL=SelectSource-be406440.js.map
