from __future__ import annotations

from typing import Iterable

import pandas as pd

import gradio as gr
from gradio.themes.base import Base
from gradio.themes.utils import colors, fonts, sizes
from gradio.themes.utils.fonts import GoogleFont

# Create CSS & JS codes that will be used in the gradio app
css = """
footer {visibility: hidden}
#smallfont span{
 font-size: 0.8em;
}
.centered_600px {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
}
.centered_800px {
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
}
.break_on_newline {
    white-space: pre-line;
}
"""

js = """
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    // Add aria roles to main, navigation and footer elements
    const main_elements = document.querySelectorAll('[id^="main-content-"]')
    main_elements.forEach((element) =>{
        element.setAttribute('role', 'main');
    });

    const nav_elements = document.querySelectorAll('[id^="navigation-"]')
    nav_elements.forEach((element) =>{
        element.setAttribute('role', 'navigation');
    });

    const footer_elements = document.querySelectorAll('[id^="footer-"]')
    footer_elements.forEach((element) =>{
        element.setAttribute('role', 'contentinfo');
    });
  }
}
"""


# Create a custom theme to fix contrast and hue issues
class CustomTheme(Base):
    def __init__(
        self,
        *,
        primary_hue: colors.Color | str = colors.orange,
        secondary_hue: colors.Color | str = colors.blue,
        neutral_hue: colors.Color | str = colors.gray,
        spacing_size: sizes.Size | str = sizes.spacing_md,
        radius_size: sizes.Size | str = sizes.radius_md,
        text_size: sizes.Size | str = sizes.text_md,
        font: fonts.Font | str | Iterable[fonts.Font | str] = (
            fonts.GoogleFont("Source Sans Pro"),
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
        ),
        font_mono: fonts.Font | str | Iterable[fonts.Font | str] = (
            fonts.GoogleFont("IBM Plex Mono"),
            "ui-monospace",
            "Consolas",
            "monospace",
        ),
    ):
        super().__init__(
            primary_hue=primary_hue,
            secondary_hue=secondary_hue,
            neutral_hue=neutral_hue,
            spacing_size=spacing_size,
            radius_size=radius_size,
            text_size=text_size,
            font=font,
            font_mono=font_mono,
        )
        self.name = "default"
        super().set(
            # Colors
            input_background_fill_dark="*neutral_800",
            error_background_fill=colors.red.c50,
            error_background_fill_dark="*neutral_900",
            error_border_color=colors.red.c700,
            error_border_color_dark=colors.red.c500,
            error_icon_color=colors.red.c700,
            error_icon_color_dark=colors.red.c500,
            # Transition
            button_transition="none",
            # Shadows
            button_shadow="*shadow_drop",
            button_shadow_hover="*shadow_drop_lg",
            button_shadow_active="*shadow_inset",
            input_shadow="0 0 0 *shadow_spread transparent, *shadow_inset",
            input_shadow_focus="0 0 0 *shadow_spread *secondary_50, *shadow_inset",
            input_shadow_focus_dark="0 0 0 *shadow_spread *neutral_700, *shadow_inset",
            checkbox_label_shadow="*shadow_drop",
            block_shadow="*shadow_drop",
            form_gap_width="1px",
            # Button borders
            input_border_width="1px",
            input_background_fill="white",
            # Gradients
            stat_background_fill="linear-gradient(to right, *primary_400, *primary_200)",
            stat_background_fill_dark="linear-gradient(to right, *primary_400, *primary_600)",
            checkbox_label_background_fill="linear-gradient(to top, *neutral_50, white)",
            checkbox_label_background_fill_dark="linear-gradient(to top, *neutral_900, *neutral_800)",
            checkbox_label_background_fill_hover="linear-gradient(to top, *neutral_100, white)",
            checkbox_label_background_fill_hover_dark="linear-gradient(to top, *neutral_900, *neutral_800)",
            button_primary_background_fill="linear-gradient(to bottom right, *primary_100, *primary_300)",
            button_primary_background_fill_dark="linear-gradient(to bottom right, *primary_500, *primary_600)",
            button_primary_background_fill_hover="linear-gradient(to bottom right, *primary_100, *primary_200)",
            button_primary_background_fill_hover_dark="linear-gradient(to bottom right, *primary_500, *primary_500)",
            button_primary_border_color_dark="*primary_500",
            button_secondary_background_fill="linear-gradient(to bottom right, *neutral_100, *neutral_200)",
            button_secondary_background_fill_dark="linear-gradient(to bottom right, *neutral_600, *neutral_700)",
            button_secondary_background_fill_hover="linear-gradient(to bottom right, *neutral_100, *neutral_100)",
            button_secondary_background_fill_hover_dark="linear-gradient(to bottom right, *neutral_600, *neutral_600)",
            button_cancel_background_fill=f"linear-gradient(to bottom right, {colors.red.c100}, {colors.red.c200})",
            button_cancel_background_fill_dark=f"linear-gradient(to bottom right, {colors.red.c600}, {colors.red.c700})",
            button_cancel_background_fill_hover=f"linear-gradient(to bottom right, {colors.red.c100}, {colors.red.c100})",
            button_cancel_background_fill_hover_dark=f"linear-gradient(to bottom right, {colors.red.c600}, {colors.red.c600})",
            button_cancel_border_color=colors.red.c200,
            button_cancel_border_color_dark=colors.red.c600,
            button_cancel_text_color=colors.red.c600,
            button_cancel_text_color_dark="white",
            border_color_accent_subdued="*primary_200",
            ### Custom code targetted to fix accessibility issues
            body_text_color_subdued="*neutral_500",  # Ensure adequate contrast with background for unselected tabs
            # Give a sufficient border to all checkboxes
            checkbox_border_color="*neutral_500",
            checkbox_border_color_dark="*neutral_500",
            checkbox_border_color_focus="*blue_c800",
            checkbox_border_color_focus_dark="*blue_c800",
            checkbox_border_color_hover="*blue_c800",
            checkbox_border_color_hover_dark="*blue_c800",
            checkbox_border_color_selected="*neutral_500",
            checkbox_border_color_selected_dark="*neutral_500",
            checkbox_border_width="2px",
            checkbox_border_width_dark="*2px",
        )


# Instantiate the custom theme
theme = CustomTheme(
    primary_hue="blue",
    secondary_hue="red",
    font=(GoogleFont("Source Sans Pro"), "ui-sans-serif", "system-ui", "sans-serif"),
    font_mono=(
        GoogleFont("Source Sans Pro"),
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
    ),
)

with gr.Blocks(
    title="Gradio Accessibility Test App",
    theme=theme,
    css=css,
    head=js,
) as demo:
    gr.Markdown(
        """
        This app is used for testing the accessibility of the Gradio library.
        """,
        line_breaks=True,
        sanitize_html=False,
    )
    bench_deployment_type_radio = gr.Radio(
        label="Radio element",
        choices=["Option 1", "Option 2"],
        value="PTU",
        interactive=True,
        scale=5,
    )
    dropdown_options = [f"Option {i}" for i in range(1, 40)]
    gr.Dropdown(
        label="Dropdown element",
        info="For testing the scrollability of the dropdown element",
        value=dropdown_options[0],
        choices=dropdown_options,
        interactive=True,
    )
    gr.Button("Dummy button element")
    gr.Markdown(
        """
        <h2>Table testing</h2>
        For testing the ability to activate the parent table element and tab through each cell.
        """,
        line_breaks=True,
        sanitize_html=False,
    )
    interative_test_table = pd.DataFrame(
        {
            "Column 1": [1, 2],
            "Column 2": [3, 4],
        }
    )
    gr.DataFrame(
        interative_test_table,
        label="Interactive table example",
        interactive=True,
        type="pandas",
        row_count=(interative_test_table.shape[0], "fixed"),
        col_count=(interative_test_table.shape[1], "fixed"),
    )
    gr.DataFrame(
        interative_test_table,
        label="Non-interactive table example",
        interactive=False,
        type="pandas",
        row_count=(interative_test_table.shape[0], "fixed"),
        col_count=(interative_test_table.shape[1], "fixed"),
    )

if __name__ == "__main__":
    # Start server by running: `gradio app.py`, then navigate to http://localhost:8000
    demo.queue(default_concurrency_limit=4)
    demo.launch(
        server_name="0.0.0.0",
        server_port=8000,
    )
