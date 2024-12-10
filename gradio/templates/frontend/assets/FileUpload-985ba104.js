import './Button-7367342c.js';
import { B as BlockLabel } from './BlockLabel-e5db77a4.js';
import { E as Empty } from './Empty-950e2079.js';
import './Index-6565a135.js';
import { F as File$1 } from './File-ea1c6ec0.js';
import { U as Upload } from './ModifyUpload.svelte_svelte_type_style_lang-987effd6.js';
import { M as ModifyUpload } from './ModifyUpload-0bd8c1fd.js';
import { D as DownloadLink } from './DownloadLink-64507441.js';

const prettyBytes = (bytes) => {
  let units = ["B", "KB", "MB", "GB", "PB"];
  let i = 0;
  while (bytes > 1024) {
    bytes /= 1024;
    i++;
  }
  let unit = units[i];
  return bytes.toFixed(1) + "&nbsp;" + unit;
};

const FilePreview_svelte_svelte_type_style_lang = '';

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/file/shared/FilePreview.svelte generated by Svelte v4.2.2 */
const {
	HtmlTag,
	SvelteComponent: SvelteComponent$2,
	append,
	attr,
	check_outros: check_outros$2,
	create_component: create_component$2,
	destroy_component: destroy_component$2,
	destroy_each,
	detach: detach$2,
	element,
	ensure_array_like,
	group_outros: group_outros$2,
	init: init$2,
	insert: insert$2,
	listen,
	mount_component: mount_component$2,
	noop,
	safe_not_equal: safe_not_equal$2,
	set_data,
	set_style,
	space: space$2,
	text,
	toggle_class,
	transition_in: transition_in$2,
	transition_out: transition_out$2
} = window.__gradio__svelte__internal;const { createEventDispatcher: createEventDispatcher$1 } = window.__gradio__svelte__internal;
function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[9] = i;
	return child_ctx;
}

// (57:6) {:else}
function create_else_block$2(ctx) {
	let t_value = /*i18n*/ ctx[2]("file.uploading") + "";
	let t;

	return {
		c() {
			t = text(t_value);
		},
		m(target, anchor) {
			insert$2(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*i18n*/ 4 && t_value !== (t_value = /*i18n*/ ctx[2]("file.uploading") + "")) set_data(t, t_value);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach$2(t);
			}
		}
	};
}

// (48:6) {#if file.url}
function create_if_block$2(ctx) {
	let downloadlink;
	let current;

	downloadlink = new DownloadLink({
			props: {
				href: /*file*/ ctx[7].url,
				download: window.__is_colab__ ? null : /*file*/ ctx[7].orig_name,
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component$2(downloadlink.$$.fragment);
		},
		m(target, anchor) {
			mount_component$2(downloadlink, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const downloadlink_changes = {};
			if (dirty & /*normalized_files*/ 8) downloadlink_changes.href = /*file*/ ctx[7].url;
			if (dirty & /*normalized_files*/ 8) downloadlink_changes.download = window.__is_colab__ ? null : /*file*/ ctx[7].orig_name;

			if (dirty & /*$$scope, normalized_files*/ 1032) {
				downloadlink_changes.$$scope = { dirty, ctx };
			}

			downloadlink.$set(downloadlink_changes);
		},
		i(local) {
			if (current) return;
			transition_in$2(downloadlink.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out$2(downloadlink.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component$2(downloadlink, detaching);
		}
	};
}

// (49:7) <DownloadLink         href={file.url}         download={window.__is_colab__ ? null : file.orig_name}        >
function create_default_slot$2(ctx) {
	let html_tag;

	let raw_value = (/*file*/ ctx[7].size != null
	? prettyBytes(/*file*/ ctx[7].size)
	: "(size unknown)") + "";

	let t;

	return {
		c() {
			html_tag = new HtmlTag(false);
			t = text(" ⇣");
			html_tag.a = t;
		},
		m(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert$2(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*normalized_files*/ 8 && raw_value !== (raw_value = (/*file*/ ctx[7].size != null
			? prettyBytes(/*file*/ ctx[7].size)
			: "(size unknown)") + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) {
				html_tag.d();
				detach$2(t);
			}
		}
	};
}

// (32:3) {#each normalized_files as file, i}
function create_each_block(ctx) {
	let tr;
	let td0;
	let span0;
	let t0_value = /*file*/ ctx[7].filename_stem + "";
	let t0;
	let t1;
	let span1;
	let t2_value = /*file*/ ctx[7].filename_ext + "";
	let t2;
	let td0_aria_label_value;
	let t3;
	let td1;
	let current_block_type_index;
	let if_block;
	let t4;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block$2, create_else_block$2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*file*/ ctx[7].url) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	function click_handler() {
		return /*click_handler*/ ctx[6](/*file*/ ctx[7], /*i*/ ctx[9]);
	}

	return {
		c() {
			tr = element("tr");
			td0 = element("td");
			span0 = element("span");
			t0 = text(t0_value);
			t1 = space$2();
			span1 = element("span");
			t2 = text(t2_value);
			t3 = space$2();
			td1 = element("td");
			if_block.c();
			t4 = space$2();
			attr(span0, "class", "stem svelte-jpoxvt");
			attr(span1, "class", "ext svelte-jpoxvt");
			attr(td0, "class", "filename svelte-jpoxvt");
			attr(td0, "aria-label", td0_aria_label_value = /*file*/ ctx[7].orig_name);
			attr(td1, "class", "download svelte-jpoxvt");
			attr(tr, "class", "file svelte-jpoxvt");
			toggle_class(tr, "selectable", /*selectable*/ ctx[0]);
		},
		m(target, anchor) {
			insert$2(target, tr, anchor);
			append(tr, td0);
			append(td0, span0);
			append(span0, t0);
			append(td0, t1);
			append(td0, span1);
			append(span1, t2);
			append(tr, t3);
			append(tr, td1);
			if_blocks[current_block_type_index].m(td1, null);
			append(tr, t4);
			current = true;

			if (!mounted) {
				dispose = listen(tr, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if ((!current || dirty & /*normalized_files*/ 8) && t0_value !== (t0_value = /*file*/ ctx[7].filename_stem + "")) set_data(t0, t0_value);
			if ((!current || dirty & /*normalized_files*/ 8) && t2_value !== (t2_value = /*file*/ ctx[7].filename_ext + "")) set_data(t2, t2_value);

			if (!current || dirty & /*normalized_files*/ 8 && td0_aria_label_value !== (td0_aria_label_value = /*file*/ ctx[7].orig_name)) {
				attr(td0, "aria-label", td0_aria_label_value);
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros$2();

				transition_out$2(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros$2();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in$2(if_block, 1);
				if_block.m(td1, null);
			}

			if (!current || dirty & /*selectable*/ 1) {
				toggle_class(tr, "selectable", /*selectable*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in$2(if_block);
			current = true;
		},
		o(local) {
			transition_out$2(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$2(tr);
			}

			if_blocks[current_block_type_index].d();
			mounted = false;
			dispose();
		}
	};
}

function create_fragment$2(ctx) {
	let div;
	let table;
	let tbody;
	let current;
	let each_value = ensure_array_like(/*normalized_files*/ ctx[3]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out$2(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = element("div");
			table = element("table");
			tbody = element("tbody");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(tbody, "class", "svelte-jpoxvt");
			attr(table, "class", "file-preview svelte-jpoxvt");
			attr(div, "class", "file-preview-holder");

			set_style(div, "max-height", typeof /*height*/ ctx[1] === undefined
			? 'auto'
			: /*height*/ ctx[1] + 'px');
		},
		m(target, anchor) {
			insert$2(target, div, anchor);
			append(div, table);
			append(table, tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(tbody, null);
				}
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*selectable, dispatch, normalized_files, window, i18n*/ 29) {
				each_value = ensure_array_like(/*normalized_files*/ ctx[3]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in$2(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in$2(each_blocks[i], 1);
						each_blocks[i].m(tbody, null);
					}
				}

				group_outros$2();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros$2();
			}

			if (!current || dirty & /*height*/ 2) {
				set_style(div, "max-height", typeof /*height*/ ctx[1] === undefined
				? 'auto'
				: /*height*/ ctx[1] + 'px');
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in$2(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out$2(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$2(div);
			}

			destroy_each(each_blocks, detaching);
		}
	};
}

function split_filename(filename) {
	const last_dot = filename.lastIndexOf(".");

	if (last_dot === -1) {
		return [filename, ""];
	}

	return [filename.slice(0, last_dot), filename.slice(last_dot)];
}

function instance$2($$self, $$props, $$invalidate) {
	let normalized_files;
	const dispatch = createEventDispatcher$1();
	let { value } = $$props;
	let { selectable = false } = $$props;
	let { height = undefined } = $$props;
	let { i18n } = $$props;
	const click_handler = (file, i) => dispatch("select", { value: file.orig_name, index: i });

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(5, value = $$props.value);
		if ('selectable' in $$props) $$invalidate(0, selectable = $$props.selectable);
		if ('height' in $$props) $$invalidate(1, height = $$props.height);
		if ('i18n' in $$props) $$invalidate(2, i18n = $$props.i18n);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 32) {
			$$invalidate(3, normalized_files = (Array.isArray(value) ? value : [value]).map(file => {
				const [filename_stem, filename_ext] = split_filename(file.orig_name ?? "");
				return { ...file, filename_stem, filename_ext };
			}));
		}
	};

	return [selectable, height, i18n, normalized_files, dispatch, value, click_handler];
}

class FilePreview extends SvelteComponent$2 {
	constructor(options) {
		super();

		init$2(this, options, instance$2, create_fragment$2, safe_not_equal$2, {
			value: 5,
			selectable: 0,
			height: 1,
			i18n: 2
		});
	}
}

const FilePreview$1 = FilePreview;

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/file/shared/File.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent: SvelteComponent$1,
	bubble: bubble$1,
	check_outros: check_outros$1,
	create_component: create_component$1,
	destroy_component: destroy_component$1,
	detach: detach$1,
	empty: empty$1,
	group_outros: group_outros$1,
	init: init$1,
	insert: insert$1,
	mount_component: mount_component$1,
	safe_not_equal: safe_not_equal$1,
	space: space$1,
	transition_in: transition_in$1,
	transition_out: transition_out$1
} = window.__gradio__svelte__internal;
function create_else_block$1(ctx) {
	let empty_1;
	let current;

	empty_1 = new Empty({
			props: {
				unpadded_box: true,
				size: "large",
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component$1(empty_1.$$.fragment);
		},
		m(target, anchor) {
			mount_component$1(empty_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const empty_1_changes = {};

			if (dirty & /*$$scope*/ 128) {
				empty_1_changes.$$scope = { dirty, ctx };
			}

			empty_1.$set(empty_1_changes);
		},
		i(local) {
			if (current) return;
			transition_in$1(empty_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out$1(empty_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component$1(empty_1, detaching);
		}
	};
}

// (19:0) {#if value && (Array.isArray(value) ? value.length > 0 : true)}
function create_if_block$1(ctx) {
	let filepreview;
	let current;

	filepreview = new FilePreview$1({
			props: {
				i18n: /*i18n*/ ctx[5],
				selectable: /*selectable*/ ctx[3],
				value: /*value*/ ctx[0],
				height: /*height*/ ctx[4]
			}
		});

	filepreview.$on("select", /*select_handler*/ ctx[6]);

	return {
		c() {
			create_component$1(filepreview.$$.fragment);
		},
		m(target, anchor) {
			mount_component$1(filepreview, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const filepreview_changes = {};
			if (dirty & /*i18n*/ 32) filepreview_changes.i18n = /*i18n*/ ctx[5];
			if (dirty & /*selectable*/ 8) filepreview_changes.selectable = /*selectable*/ ctx[3];
			if (dirty & /*value*/ 1) filepreview_changes.value = /*value*/ ctx[0];
			if (dirty & /*height*/ 16) filepreview_changes.height = /*height*/ ctx[4];
			filepreview.$set(filepreview_changes);
		},
		i(local) {
			if (current) return;
			transition_in$1(filepreview.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out$1(filepreview.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component$1(filepreview, detaching);
		}
	};
}

// (22:1) <Empty unpadded_box={true} size="large">
function create_default_slot$1(ctx) {
	let file;
	let current;
	file = new File$1({});

	return {
		c() {
			create_component$1(file.$$.fragment);
		},
		m(target, anchor) {
			mount_component$1(file, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in$1(file.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out$1(file.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component$1(file, detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let blocklabel;
	let t;
	let show_if;
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;

	blocklabel = new BlockLabel({
			props: {
				show_label: /*show_label*/ ctx[2],
				float: /*value*/ ctx[0] === null,
				Icon: File$1,
				label: /*label*/ ctx[1] || "File"
			}
		});

	const if_block_creators = [create_if_block$1, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (dirty & /*value*/ 1) show_if = null;

		if (show_if == null) show_if = !!(/*value*/ ctx[0] && (Array.isArray(/*value*/ ctx[0])
		? /*value*/ ctx[0].length > 0
		: true));

		if (show_if) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			create_component$1(blocklabel.$$.fragment);
			t = space$1();
			if_block.c();
			if_block_anchor = empty$1();
		},
		m(target, anchor) {
			mount_component$1(blocklabel, target, anchor);
			insert$1(target, t, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			insert$1(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const blocklabel_changes = {};
			if (dirty & /*show_label*/ 4) blocklabel_changes.show_label = /*show_label*/ ctx[2];
			if (dirty & /*value*/ 1) blocklabel_changes.float = /*value*/ ctx[0] === null;
			if (dirty & /*label*/ 2) blocklabel_changes.label = /*label*/ ctx[1] || "File";
			blocklabel.$set(blocklabel_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros$1();

				transition_out$1(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros$1();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in$1(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in$1(blocklabel.$$.fragment, local);
			transition_in$1(if_block);
			current = true;
		},
		o(local) {
			transition_out$1(blocklabel.$$.fragment, local);
			transition_out$1(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$1(t);
				detach$1(if_block_anchor);
			}

			destroy_component$1(blocklabel, detaching);
			if_blocks[current_block_type_index].d(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { value = null } = $$props;
	let { label } = $$props;
	let { show_label = true } = $$props;
	let { selectable = false } = $$props;
	let { height = undefined } = $$props;
	let { i18n } = $$props;

	function select_handler(event) {
		bubble$1.call(this, $$self, event);
	}

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('label' in $$props) $$invalidate(1, label = $$props.label);
		if ('show_label' in $$props) $$invalidate(2, show_label = $$props.show_label);
		if ('selectable' in $$props) $$invalidate(3, selectable = $$props.selectable);
		if ('height' in $$props) $$invalidate(4, height = $$props.height);
		if ('i18n' in $$props) $$invalidate(5, i18n = $$props.i18n);
	};

	return [value, label, show_label, selectable, height, i18n, select_handler];
}

class File_1 extends SvelteComponent$1 {
	constructor(options) {
		super();

		init$1(this, options, instance$1, create_fragment$1, safe_not_equal$1, {
			value: 0,
			label: 1,
			show_label: 2,
			selectable: 3,
			height: 4,
			i18n: 5
		});
	}
}

const File = File_1;

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/file/shared/FileUpload.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	add_flush_callback,
	bind,
	binding_callbacks,
	bubble,
	check_outros,
	create_component,
	create_slot,
	destroy_component,
	detach,
	empty,
	get_all_dirty_from_scope,
	get_slot_changes,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out,
	update_slot_base
} = window.__gradio__svelte__internal;
const { createEventDispatcher, tick } = window.__gradio__svelte__internal;
function create_else_block(ctx) {
	let upload;
	let updating_dragging;
	let current;

	function upload_dragging_binding(value) {
		/*upload_dragging_binding*/ ctx[15](value);
	}

	let upload_props = {
		filetype: /*accept_file_types*/ ctx[9],
		file_count: /*file_count*/ ctx[3],
		root: /*root*/ ctx[5],
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	if (/*dragging*/ ctx[8] !== void 0) {
		upload_props.dragging = /*dragging*/ ctx[8];
	}

	upload = new Upload({ props: upload_props });
	binding_callbacks.push(() => bind(upload, 'dragging', upload_dragging_binding));
	upload.$on("load", /*handle_upload*/ ctx[10]);

	return {
		c() {
			create_component(upload.$$.fragment);
		},
		m(target, anchor) {
			mount_component(upload, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const upload_changes = {};
			if (dirty & /*accept_file_types*/ 512) upload_changes.filetype = /*accept_file_types*/ ctx[9];
			if (dirty & /*file_count*/ 8) upload_changes.file_count = /*file_count*/ ctx[3];
			if (dirty & /*root*/ 32) upload_changes.root = /*root*/ ctx[5];

			if (dirty & /*$$scope*/ 65536) {
				upload_changes.$$scope = { dirty, ctx };
			}

			if (!updating_dragging && dirty & /*dragging*/ 256) {
				updating_dragging = true;
				upload_changes.dragging = /*dragging*/ ctx[8];
				add_flush_callback(() => updating_dragging = false);
			}

			upload.$set(upload_changes);
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
			destroy_component(upload, detaching);
		}
	};
}

// (51:0) {#if value && (Array.isArray(value) ? value.length > 0 : false)}
function create_if_block(ctx) {
	let modifyupload;
	let t;
	let filepreview;
	let current;

	modifyupload = new ModifyUpload({
			props: { i18n: /*i18n*/ ctx[7], absolute: true }
		});

	modifyupload.$on("clear", /*handle_clear*/ ctx[11]);

	filepreview = new FilePreview$1({
			props: {
				i18n: /*i18n*/ ctx[7],
				selectable: /*selectable*/ ctx[4],
				value: /*value*/ ctx[0],
				height: /*height*/ ctx[6]
			}
		});

	filepreview.$on("select", /*select_handler*/ ctx[14]);

	return {
		c() {
			create_component(modifyupload.$$.fragment);
			t = space();
			create_component(filepreview.$$.fragment);
		},
		m(target, anchor) {
			mount_component(modifyupload, target, anchor);
			insert(target, t, anchor);
			mount_component(filepreview, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const modifyupload_changes = {};
			if (dirty & /*i18n*/ 128) modifyupload_changes.i18n = /*i18n*/ ctx[7];
			modifyupload.$set(modifyupload_changes);
			const filepreview_changes = {};
			if (dirty & /*i18n*/ 128) filepreview_changes.i18n = /*i18n*/ ctx[7];
			if (dirty & /*selectable*/ 16) filepreview_changes.selectable = /*selectable*/ ctx[4];
			if (dirty & /*value*/ 1) filepreview_changes.value = /*value*/ ctx[0];
			if (dirty & /*height*/ 64) filepreview_changes.height = /*height*/ ctx[6];
			filepreview.$set(filepreview_changes);
		},
		i(local) {
			if (current) return;
			transition_in(modifyupload.$$.fragment, local);
			transition_in(filepreview.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(modifyupload.$$.fragment, local);
			transition_out(filepreview.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(t);
			}

			destroy_component(modifyupload, detaching);
			destroy_component(filepreview, detaching);
		}
	};
}

// (55:1) <Upload   on:load={handle_upload}   filetype={accept_file_types}   {file_count}   {root}   bind:dragging  >
function create_default_slot(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 65536)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[16],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[16])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let blocklabel;
	let t;
	let show_if;
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;

	blocklabel = new BlockLabel({
			props: {
				show_label: /*show_label*/ ctx[2],
				Icon: File$1,
				float: /*value*/ ctx[0] === null,
				label: /*label*/ ctx[1] || "File"
			}
		});

	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (dirty & /*value*/ 1) show_if = null;

		if (show_if == null) show_if = !!(/*value*/ ctx[0] && (Array.isArray(/*value*/ ctx[0])
		? /*value*/ ctx[0].length > 0
		: false));

		if (show_if) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			create_component(blocklabel.$$.fragment);
			t = space();
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			mount_component(blocklabel, target, anchor);
			insert(target, t, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const blocklabel_changes = {};
			if (dirty & /*show_label*/ 4) blocklabel_changes.show_label = /*show_label*/ ctx[2];
			if (dirty & /*value*/ 1) blocklabel_changes.float = /*value*/ ctx[0] === null;
			if (dirty & /*label*/ 2) blocklabel_changes.label = /*label*/ ctx[1] || "File";
			blocklabel.$set(blocklabel_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(blocklabel.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(blocklabel.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(t);
				detach(if_block_anchor);
			}

			destroy_component(blocklabel, detaching);
			if_blocks[current_block_type_index].d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { value } = $$props;
	let { label } = $$props;
	let { show_label = true } = $$props;
	let { file_count = "single" } = $$props;
	let { file_types = null } = $$props;
	let { selectable = false } = $$props;
	let { root } = $$props;
	let { height = undefined } = $$props;
	let { i18n } = $$props;

	async function handle_upload({ detail }) {
		$$invalidate(0, value = detail);
		await tick();
		dispatch("change", value);
		dispatch("upload", detail);
	}

	function handle_clear() {
		$$invalidate(0, value = null);
		dispatch("change", null);
		dispatch("clear");
	}

	const dispatch = createEventDispatcher();
	let accept_file_types;

	if (file_types == null) {
		accept_file_types = null;
	} else {
		file_types = file_types.map(x => {
			if (x.startsWith(".")) {
				return x;
			}

			return x + "/*";
		});

		accept_file_types = file_types.join(", ");
	}

	let dragging = false;

	function select_handler(event) {
		bubble.call(this, $$self, event);
	}

	function upload_dragging_binding(value) {
		dragging = value;
		$$invalidate(8, dragging);
	}

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('label' in $$props) $$invalidate(1, label = $$props.label);
		if ('show_label' in $$props) $$invalidate(2, show_label = $$props.show_label);
		if ('file_count' in $$props) $$invalidate(3, file_count = $$props.file_count);
		if ('file_types' in $$props) $$invalidate(12, file_types = $$props.file_types);
		if ('selectable' in $$props) $$invalidate(4, selectable = $$props.selectable);
		if ('root' in $$props) $$invalidate(5, root = $$props.root);
		if ('height' in $$props) $$invalidate(6, height = $$props.height);
		if ('i18n' in $$props) $$invalidate(7, i18n = $$props.i18n);
		if ('$$scope' in $$props) $$invalidate(16, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*dragging*/ 256) {
			dispatch("drag", dragging);
		}
	};

	return [
		value,
		label,
		show_label,
		file_count,
		selectable,
		root,
		height,
		i18n,
		dragging,
		accept_file_types,
		handle_upload,
		handle_clear,
		file_types,
		slots,
		select_handler,
		upload_dragging_binding,
		$$scope
	];
}

class FileUpload extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			value: 0,
			label: 1,
			show_label: 2,
			file_count: 3,
			file_types: 12,
			selectable: 4,
			root: 5,
			height: 6,
			i18n: 7
		});
	}
}

const BaseFileUpload = FileUpload;

export { BaseFileUpload as B, File as F, FilePreview$1 as a };
//# sourceMappingURL=FileUpload-985ba104.js.map
