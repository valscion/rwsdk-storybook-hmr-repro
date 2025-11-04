import "../src/app/styles.css";

import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "error",
      /*
       * Axe's context parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#context-parameter
       * to learn more.
       */
      context: {
        include: ["body"],
        // Allow marking elements to skip a11y check
        // https://storybook.js.org/docs/writing-tests/accessibility-testing#excluded-elements
        exclude: ["[data-no-a11y-check]"],
      },
    },
  },
};

export default preview;
