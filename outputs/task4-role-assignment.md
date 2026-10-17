# Task 4 — Role Assignment Prompting Experiment

## 1. Prompt Used

I asked GitHub Copilot to act as a professional frontend accessibility reviewer. I instructed it to review `outputs/task4-few-shot.html` for semantic HTML, keyboard accessibility, accessible labels, focus indicators, mobile usability, and visual clarity.

I also asked it to identify issues based on the actual code, separate confirmed issues from recommendations, and suggest small improvements without rewriting the webpage.

## 2. Findings

Copilot identified two confirmed accessibility issues:

1. **Low text contrast:** Some small supporting text, including section labels and the logo subtitle, may be difficult to read because their text colors have insufficient contrast against the cream background.
2. **Low focus-indicator contrast:** The amber focus outline has insufficient contrast against light page surfaces, making it less visible for some keyboard users.

Copilot also recommended adding a “Skip to content” link and a screen-reader announcement for the number of attraction cards remaining after a filter is selected.

## 3. Existing Strengths

Copilot found that the webpage already uses semantic HTML elements, including `header`, `nav`, `main`, sections, and `article` elements. The filter buttons have accessible names and pressed states. The webpage also includes visible-focus styling, reduced-motion handling, and mobile tap targets with a minimum height of 44 pixels.

## 4. Proposed Improvements

The proposed improvements are to darken the supporting text colors, increase the contrast of the keyboard focus outline, add a keyboard skip link, and consider announcing filter results to screen readers.

These are recommendations from the review. No changes were made during this experiment.

## 5. Conclusion

Role assignment helped direct GitHub Copilot to review the webpage from an accessibility professional's perspective. The review identified specific contrast issues and additional ways to improve keyboard and screen-reader accessibility while preserving the existing design.
## 6. Refinement and Verification

After the accessibility review, I asked GitHub Copilot to fix the text contrast of the logo subtitle and section labels.

Copilot changed both text colors to `#52635a` while preserving their font sizes and layout. It reported an approximate contrast ratio of 5.9:1 against the page background `#f5f4ee`, which exceeds the WCAG AA requirement of 4.5:1 for normal text.

The next verification step is to inspect the updated webpage in a browser and confirm the contrast ratio using a WCAG contrast checker. The keyboard focus-indicator contrast issue and other recommendations remain to be addressed.