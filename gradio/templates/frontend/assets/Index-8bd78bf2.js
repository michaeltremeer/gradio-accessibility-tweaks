import { a as Button } from './Button-7367342c.js';
import './Index-6565a135.js';
import './index-2c26c6e4.js';
import './svelte/svelte.js';

/* Users/michaeltremeer/code/microsoft/gradio-accessibility-tweaks/js/button/Index.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	create_component,
	destroy_component,
	detach,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	text,
	transition_in,
	transition_out
} = window.__gradio__svelte__internal;
function create_default_slot(ctx) {
	let t_value = (/*value*/ ctx[3]
	? /*gradio*/ ctx[11].i18n(/*value*/ ctx[3])
	: "") + "";

	let t;

	return {
		c() {
			t = text(t_value);
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*value, gradio*/ 2056 && t_value !== (t_value = (/*value*/ ctx[3]
			? /*gradio*/ ctx[11].i18n(/*value*/ ctx[3])
			: "") + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

function create_fragment(ctx) {
	let button;
	let current;

	button = new Button({
			props: {
				value: /*value*/ ctx[3],
				variant: /*variant*/ ctx[4],
				elem_id: /*elem_id*/ ctx[0],
				elem_classes: /*elem_classes*/ ctx[1],
				size: /*size*/ ctx[6],
				scale: /*scale*/ ctx[7],
				link: /*link*/ ctx[9],
				icon: /*icon*/ ctx[8],
				min_width: /*min_width*/ ctx[10],
				visible: /*visible*/ ctx[2],
				root: /*root*/ ctx[12],
				proxy_url: /*proxy_url*/ ctx[13],
				disabled: !/*interactive*/ ctx[5],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	button.$on("click", /*click_handler*/ ctx[14]);

	return {
		c() {
			create_component(button.$$.fragment);
		},
		m(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const button_changes = {};
			if (dirty & /*value*/ 8) button_changes.value = /*value*/ ctx[3];
			if (dirty & /*variant*/ 16) button_changes.variant = /*variant*/ ctx[4];
			if (dirty & /*elem_id*/ 1) button_changes.elem_id = /*elem_id*/ ctx[0];
			if (dirty & /*elem_classes*/ 2) button_changes.elem_classes = /*elem_classes*/ ctx[1];
			if (dirty & /*size*/ 64) button_changes.size = /*size*/ ctx[6];
			if (dirty & /*scale*/ 128) button_changes.scale = /*scale*/ ctx[7];
			if (dirty & /*link*/ 512) button_changes.link = /*link*/ ctx[9];
			if (dirty & /*icon*/ 256) button_changes.icon = /*icon*/ ctx[8];
			if (dirty & /*min_width*/ 1024) button_changes.min_width = /*min_width*/ ctx[10];
			if (dirty & /*visible*/ 4) button_changes.visible = /*visible*/ ctx[2];
			if (dirty & /*root*/ 4096) button_changes.root = /*root*/ ctx[12];
			if (dirty & /*proxy_url*/ 8192) button_changes.proxy_url = /*proxy_url*/ ctx[13];
			if (dirty & /*interactive*/ 32) button_changes.disabled = !/*interactive*/ ctx[5];

			if (dirty & /*$$scope, value, gradio*/ 34824) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(button, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { elem_id = "" } = $$props;
	let { elem_classes = [] } = $$props;
	let { visible = true } = $$props;
	let { value } = $$props;
	let { variant = "secondary" } = $$props;
	let { interactive } = $$props;
	let { size = "lg" } = $$props;
	let { scale = null } = $$props;
	let { icon = null } = $$props;
	let { link = null } = $$props;
	let { min_width = undefined } = $$props;
	let { gradio } = $$props;
	let { root = "" } = $$props;
	let { proxy_url = null } = $$props;
	const click_handler = () => gradio.dispatch("click");

	$$self.$$set = $$props => {
		if ('elem_id' in $$props) $$invalidate(0, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(1, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(2, visible = $$props.visible);
		if ('value' in $$props) $$invalidate(3, value = $$props.value);
		if ('variant' in $$props) $$invalidate(4, variant = $$props.variant);
		if ('interactive' in $$props) $$invalidate(5, interactive = $$props.interactive);
		if ('size' in $$props) $$invalidate(6, size = $$props.size);
		if ('scale' in $$props) $$invalidate(7, scale = $$props.scale);
		if ('icon' in $$props) $$invalidate(8, icon = $$props.icon);
		if ('link' in $$props) $$invalidate(9, link = $$props.link);
		if ('min_width' in $$props) $$invalidate(10, min_width = $$props.min_width);
		if ('gradio' in $$props) $$invalidate(11, gradio = $$props.gradio);
		if ('root' in $$props) $$invalidate(12, root = $$props.root);
		if ('proxy_url' in $$props) $$invalidate(13, proxy_url = $$props.proxy_url);
	};

	return [
		elem_id,
		elem_classes,
		visible,
		value,
		variant,
		interactive,
		size,
		scale,
		icon,
		link,
		min_width,
		gradio,
		root,
		proxy_url,
		click_handler
	];
}

class Index extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			elem_id: 0,
			elem_classes: 1,
			visible: 2,
			value: 3,
			variant: 4,
			interactive: 5,
			size: 6,
			scale: 7,
			icon: 8,
			link: 9,
			min_width: 10,
			gradio: 11,
			root: 12,
			proxy_url: 13
		});
	}
}

export { Button as BaseButton, Index as default };
//# sourceMappingURL=Index-8bd78bf2.js.map
