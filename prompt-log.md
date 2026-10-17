# Task 2 — Zero-Shot Prompting

**Objective:** Observe what GitHub Copilot generates from a basic prompt without examples.

**Technique:** Zero-Shot Prompting

**Exact Prompt:**

> Create a simple webpage about tourist attractions in Marinduque, Philippines.

**Actual Copilot Output:**

Saved the generated baseline webpage in `outputs/task2-zero-shot.html`. Copilot reported creating three todos and updating `index.html`.

**What Worked:**

The generated webpage provides a basic starting point for a tourism guide about Marinduque, Philippines. The prompt is simple and easy to understand, allowing GitHub Copilot to generate an initial webpage without examples. It helps demonstrate how AI can create webpage content and structure from a single instruction.

**What Needs Improvement:**

The prompt does not specify the target users, design, or required features. The webpage may lack detailed descriptions of tourist attractions, images, location information, and navigation. The design and layout may also need improvement to make the page more attractive, organized, and user-friendly.

**Next Action / Verification:**

Open `outputs/task2-zero-shot.html` in a web browser. Check whether the content is relevant, the layout is readable, and the page works as expected. Then improve the prompt by specifying the target users, required features, visual design, and technical requirements to generate a more complete and user-friendly tourism guide.
# Task 3 — Structured Prompting

**Objective:** Improve the AI-generated webpage by providing clear requirements and constraints.

**Technique:** Structured Prompting

**Actual Output:** Saved the generated webpage in `outputs/task3-structured.html`.

**What Worked:**

The structured prompt gave GitHub Copilot clearer instructions about the target users, tourism content, layout, and responsive design.

**What Needs Improvement:**

The generated webpage should still be reviewed for content accuracy, accessibility, mobile usability, and visual consistency.

**Next Action / Verification:**

Open `outputs/task3-structured.html` in a browser and check the attraction information, layout, and responsiveness.

---

# Task 4 — Few-Shot Prompting

**Objective:** Guide the AI by providing examples of the expected tourism content.

**Technique:** Few-Shot Prompting

**Actual Output:** Saved the generated webpage in `outputs/task4-few-shot.html`.

**What Worked:**

The examples of Poctoy White Beach and Bathala Caves demonstrated the expected format for attraction names, locations, and descriptions.

**What Needs Improvement:**

The tourism images should be verified to ensure they represent the named attractions. The webpage also required improvements to mobile tap targets and text contrast.

**Next Action / Verification:**

Test the webpage on mobile screen sizes and verify the tourism images and accessibility improvements.

---

# Task 4 — Role Assignment

**Objective:** Use a specific professional role to guide the AI's review.

**Technique:** Role Assignment

**Role Assigned:** Professional frontend accessibility reviewer.

**Actual Findings:**

GitHub Copilot identified low text contrast in the logo subtitle and section labels, as well as low contrast in the keyboard focus outline. It also recommended a skip link and screen-reader announcements for filter results.

**Refinement:**

The logo subtitle and section-label colors were changed to `#52635a`. Copilot reported an approximate contrast ratio of 5.9:1 against the background color `#f5f4ee`.

**Verification:**

The updated colors still need independent confirmation with a WCAG contrast checker. The focus-indicator issue and other recommendations remain unresolved.

---

# Task 5 — Review, Refine, and Verify

**Objective:** Review the generated webpage, make targeted improvements, and verify the results.

**Initial Review:**

Copilot found that the webpage had six attraction cards, semantic HTML, working navigation links, category filters, and a responsive layout. It also identified unverified tourism images and small mobile tap targets.

**Selected Correction:**

The mobile navigation links and filter buttons were updated with a minimum height of 44 pixels while preserving the existing design.

**Verification Results:**

- Horizontal scrolling: None observed.
- Navigation links: All links fit.
- Category filters: Worked correctly.
- Attraction cards: One column and readable.

**Conclusion:**

The refinement improved mobile usability based on the browser tests. The accuracy of tourism images and the remaining accessibility recommendations still need attention.
## Final Comparison and Reflection

### Comparison of Prompt Engineering Techniques

| Technique | How it was used | Result and observation |
|---|---|---|
| Zero-Shot Prompting | Asked AI to create a simple webpage about Marinduque without providing examples. | Produced a baseline webpage. The result showed that a basic prompt can generate initial content, but details and requirements may need refinement. |
| Structured Prompting | Provided clearer requirements and organization for the webpage. | Made the requested output more specific and organized than the initial prompt. |
| Few-Shot Prompting | Provided examples of Marinduque attractions, including their locations and descriptions. | Gave AI examples to follow when generating attraction cards and content. |
| Role Assignment | Asked AI to act as a professional frontend accessibility reviewer. | Identified contrast concerns and suggested improvements, including a skip link and announcements for filter results. |
| Structured Analysis | Asked AI to inspect the page systematically, review its features and accessibility, prioritize improvements, and propose tests without changing the file. | Produced a structured review that distinguished code findings from unverified runtime behavior and identified three main accessibility improvements. |

### Final Reflection

This activity helped me understand that the quality of AI-generated webpages depends on how clearly the prompt communicates the task. Zero-shot prompting was useful for producing an initial webpage, while structured prompting provided clearer requirements. Few-shot prompting supplied examples that guided the content and layout. Role assignment helped evaluate the webpage from an accessibility perspective, and structured analysis organized the findings into priorities and suggested tests.

I also learned that AI-generated code should not be accepted without checking it. Reading the source code can reveal how navigation, filters, and responsive layouts are implemented, but browser testing is still needed to confirm that the features work as expected. Accessibility issues, such as insufficient text contrast and focus indicators, also need attention.

Overall, combining different prompting techniques helped me generate, review, and refine a webpage about Marinduque. In future projects, I will write clearer prompts, verify the generated code, test the webpage in a browser, and address accessibility issues before considering the work complete.