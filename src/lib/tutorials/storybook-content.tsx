import type { NavGroup } from '#/lib/tutorials/shared'
import {
  Callout,
  Code,
  Deepdive,
  Exercise,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'

export const storybookNav: Array<NavGroup> = [
  {
    title: 'Part 1 — Foundations',
    items: [
      { id: 'what-why', label: 'What & Why' },
      { id: 'setup', label: 'Setup & File Structure' },
      { id: 'first-story', label: 'Your First Story (CSF)' },
      { id: 'args', label: 'Args' },
      { id: 'controls-argtypes', label: 'Controls & argTypes' },
      { id: 'actions', label: 'Actions & fn()' },
    ],
  },
  {
    title: 'Part 2 — Writing Better Stories',
    items: [
      { id: 'story-reuse', label: 'Reusing Stories & Render' },
      { id: 'decorators', label: 'Decorators' },
      { id: 'parameters', label: 'Parameters' },
      { id: 'globals-toolbars', label: 'Globals & Toolbars' },
      { id: 'loaders', label: 'Loaders' },
      { id: 'tags-organization', label: 'Naming, Hierarchy & Tags' },
    ],
  },
  {
    title: 'Part 3 — Documentation',
    items: [
      { id: 'autodocs', label: 'Autodocs' },
      { id: 'mdx-docs', label: 'MDX & Doc Blocks' },
    ],
  },
  {
    title: 'Part 4 — Real-World Components',
    items: [
      { id: 'styling-theming', label: 'Styling, Assets & Fonts' },
      { id: 'providers-routing', label: 'Providers & Routing' },
      { id: 'msw', label: 'Mocking the Network (MSW)' },
      { id: 'module-mocking', label: 'Mocking Modules' },
      { id: 'composite-pages', label: 'Page & Screen Stories' },
    ],
  },
  {
    title: 'Part 5 — Testing: Basics',
    items: [
      { id: 'testing-overview', label: 'Stories as Tests' },
      { id: 'vitest-addon', label: 'The Vitest Addon' },
      { id: 'play-functions', label: 'Play Functions' },
      { id: 'queries-assertions', label: 'Queries, userEvent & expect' },
      { id: 'async-steps', label: 'Async, Steps & Portals' },
    ],
  },
  {
    title: 'Part 6 — Testing: Intermediate',
    items: [
      { id: 'lifecycle-hooks', label: 'beforeEach & mount' },
      { id: 'a11y-testing', label: 'Accessibility Testing' },
      { id: 'portable-stories', label: 'Portable Stories' },
      { id: 'visual-testing', label: 'Visual Regression' },
      { id: 'coverage', label: 'Coverage' },
      { id: 'testing-strategy', label: 'Strategy & Anti-patterns' },
    ],
  },
  {
    title: 'Part 7 — Advanced',
    items: [
      { id: 'ci-pipeline', label: 'CI Pipeline' },
      { id: 'csf-factories', label: 'CSF Factories' },
      { id: 'custom-addon', label: 'Custom Addons & Theming' },
      { id: 'publish-composition', label: 'Publishing & Composition' },
      { id: 'performance-scale', label: 'Performance at Scale' },
      { id: 'pitfalls-migration', label: 'Pitfalls & Upgrades' },
    ],
  },
]

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const TS_KEYWORDS = [
  'as',
  'async',
  'await',
  'boolean',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'default',
  'delete',
  'else',
  'export',
  'extends',
  'false',
  'for',
  'from',
  'function',
  'if',
  'import',
  'in',
  'interface',
  'keyof',
  'let',
  'new',
  'null',
  'number',
  'of',
  'return',
  'satisfies',
  'string',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'type',
  'typeof',
  'undefined',
  'void',
  'while',
  'with',
]

const TS_TYPES = [
  'React',
  'ReactNode',
  'Meta',
  'StoryObj',
  'StorybookConfig',
  'Preview',
  'Decorator',
  'Loader',
  'useState',
  'useEffect',
  'useArgs',
  'fn',
  'expect',
  'userEvent',
  'within',
  'waitFor',
  'screen',
  'mocked',
  'sb',
  'composeStories',
  'composeStory',
  'setProjectAnnotations',
  'definePreview',
  'storybookTest',
  'defineConfig',
  'playwright',
  'http',
  'HttpResponse',
  'delay',
  'initialize',
  'mswLoader',
  'createRootRoute',
  'createRouter',
  'createMemoryHistory',
  'RouterProvider',
  'QueryClient',
  'QueryClientProvider',
  'addons',
  'types',
  'create',
  'describe',
  'test',
  'it',
  'render',
]

function highlightTs(code: string): string {
  const kwPattern = TS_KEYWORDS.join('|')
  const tyPattern = TS_TYPES.join('|')
  const master = new RegExp(
    `(//[^\\n]*|/\\*[\\s\\S]*?\\*/)|(\`(?:\\\\.|[^\`\\\\])*\`)|("(?:\\\\.|[^"\\\\])*")|('(?:\\\\.|[^'\\\\])*')|\\b(${tyPattern})\\b|\\b(${kwPattern})\\b`,
    'g',
  )
  return escapeHtml(code).replace(
    master,
    (match, comment, template, dq, sq, ty, kw) => {
      if (comment) return `<span class="cm">${comment}</span>`
      if (template) return `<span class="str">${template}</span>`
      if (dq) return `<span class="str">${dq}</span>`
      if (sq) return `<span class="str">${sq}</span>`
      if (ty) return `<span class="ty">${match}</span>`
      if (kw) return `<span class="kw">${match}</span>`
      return match
    },
  )
}

function highlightBash(code: string): string {
  return escapeHtml(code).replace(
    /(#[^\n]*)/g,
    (m) => `<span class="cm">${m}</span>`,
  )
}

function Tsx({ code }: { code: string }) {
  return <Code html={highlightTs(code)} />
}

function Bash({ code }: { code: string }) {
  return <Code html={highlightBash(code)} />
}

export function StorybookContent() {
  return (
    <>
      <ModuleTitle>Part 1 — Foundations</ModuleTitle>

      <Topic
        id="what-why"
        no="01"
        title="What Storybook Is & Why You’d Want It"
      >
        <p>
          Storybook is a <strong>workshop for UI components</strong>. It runs
          alongside your app — its own dev server, its own page — and renders
          each component in isolation, in every state you care about. Each of
          those states is a <strong>story</strong>: “the Button when it’s
          disabled”, “the book list when the API returns a 500”, “the signup
          form with an invalid email”.
        </p>
        <p>
          The reason this matters isn’t pretty screenshots. It’s that the
          hardest UI states to reach in a running app — an empty catalog, a slow
          network, an expired session, a book whose last copy is on loan —
          become a URL you can open in one click. Once every state is a URL,
          three things fall out almost for free:
        </p>
        <ul>
          <li>
            <strong>Development</strong> — you build a component against its
            stories instead of clicking through the app to reach it.
          </li>
          <li>
            <strong>Documentation</strong> — the stories <em>are</em> the living
            examples; a docs page is generated from them.
          </li>
          <li>
            <strong>Testing</strong> — a story is already the “arrange” half of
            a test. Add assertions and it runs in a real browser via Vitest,
            with accessibility checks and visual snapshots layered on top.
          </li>
        </ul>
        <h4>The running example — Maple Street Library</h4>
        <p>
          Every topic builds on the same small library app — the one used across
          all the tutorials on this site. Members browse books, borrow them for
          14 days, and join a waitlist when every copy is out. It starts with a
          single object:
        </p>
        <Tsx
          code={`type Book = {
  id: number;
  title: string;
  author: string;
  publishedYear: number;
  copiesTotal: number;
  copiesAvailable: number;
};

const mobyDick: Book = {
  id: 3,
  title: "Moby-Dick",
  author: "Herman Melville",
  publishedYear: 1851,
  copiesTotal: 1,      // only one copy — our go-to "on loan" example
  copiesAvailable: 1,
};`}
        />
        <RefTable
          headers={['Component', 'What it teaches']}
          rows={[
            [<code>Button</code>, 'CSF basics, args, controls, actions'],
            [
              <code>WishlistToggle</code>,
              'Controlled components, interaction tests',
            ],
            [
              <code>BookCard</code>,
              'States (available / on loan / reserved), reusing args, visual tests',
            ],
            [<code>MemberSignupForm</code>, 'Form testing, validation, steps'],
            [
              <code>CancelReservationDialog</code>,
              'Portals, focus management, a11y',
            ],
            [
              <code>BooksList</code>,
              'Network mocking with MSW, loading/error states',
            ],
            [
              <code>DueDateBadge</code>,
              'Frozen time — “Due today”, “Overdue by 3 days”',
            ],
            [
              <code>MyLoansPage</code>,
              'Routing, providers, module mocks, page stories',
            ],
          ]}
        />
        <Callout>
          <strong>Version target:</strong> this tutorial is written for{' '}
          <strong>Storybook 10</strong> with React 19, Vite, and Vitest. Most of
          it applies unchanged to Storybook 9. Where an API is new in 10 (module
          mocking, CSF Factories) it’s called out.
        </Callout>
      </Topic>

      <Topic id="setup" no="02" title="Setup & File Structure">
        <p>
          Run the initializer from the root of an existing React project. It
          detects your framework and builder (here: React + Vite), installs
          packages, and writes a working config plus example stories.
        </p>
        <Bash
          code={`pnpm create storybook@latest
# or: npx storybook@latest init

# afterwards
pnpm storybook          # dev server on http://localhost:6006
pnpm build-storybook    # static build into ./storybook-static`}
        />
        <p>You end up with two config files and some example stories:</p>
        <Bash
          code={`.storybook/
  main.ts        # Node side: where stories live, addons, framework, builder
  preview.ts     # Browser side: global decorators, parameters, CSS imports
src/
  stories/       # example stories — delete once you've written your own`}
        />
        <Tsx
          code={`// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: { name: "@storybook/react-vite", options: {} },
  staticDirs: ["../public"],
};

export default config;`}
        />
        <Tsx
          code={`// .storybook/preview.ts
import type { Preview } from "@storybook/react-vite";
import "../src/styles.css"; // your app's global CSS (Tailwind, resets, fonts)

const preview: Preview = {
  parameters: {
    layout: "centered",
  },
};

export default preview;`}
        />
        <RefTable
          headers={['File', 'Runs in', 'Put here']}
          rows={[
            [
              <code>main.ts</code>,
              'Node (build time)',
              'Story globs, addons, framework, Vite overrides (viteFinal), static dirs',
            ],
            [
              <code>preview.ts</code>,
              'Browser (every story)',
              'Global CSS, decorators, parameters, globals, loaders, beforeEach',
            ],
            [
              <code>manager.ts</code>,
              'Browser (the Storybook UI)',
              'Theming the Storybook shell, registering custom addon panels',
            ],
          ]}
        />
        <Callout>
          <strong>Batteries included:</strong> since Storybook 9, the old
          “essentials” (controls, actions, viewport, backgrounds, measure,
          outline, interactions) ship inside the core <code>storybook</code>{' '}
          package. You only add addons for docs, accessibility, testing, and
          third-party extras.
        </Callout>
        <Callout variant="warn">
          <strong>Storybook 10 is ESM-only.</strong> <code>main.ts</code> must
          be an ES module and you need a recent Node (20.19+ or 22.12+). If
          you’re upgrading from 8.x, run{' '}
          <code>npx storybook@latest upgrade</code> — it applies the codemods
          for you.
        </Callout>
        <Deepdive>
          <strong>Your app’s Vite config is reused.</strong> The{' '}
          <code>react-vite</code> framework loads your{' '}
          <code>vite.config.ts</code>, so aliases and the Tailwind plugin just
          work. But full-stack framework plugins (TanStack Start, SSR plugins,
          prerenderers) expect to own the app’s entry point and can break
          Storybook. Strip them in <code>viteFinal</code>:
          <Tsx
            code={`// .storybook/main.ts
const config: StorybookConfig = {
  // ...
  async viteFinal(config) {
    config.plugins = (config.plugins ?? [])
      .flat()
      // drop plugins that assume they own the app — check the \`name\` your plugins register
      .filter((p) => !(p && "name" in p && String(p.name).startsWith("tanstack")));
    return config;
  },
};`}
          />
        </Deepdive>
      </Topic>

      <Topic id="first-story" no="03" title="Your First Story (CSF)">
        <p>
          Stories are written in <strong>Component Story Format</strong> (CSF):
          a plain ES module next to your component. The{' '}
          <strong>default export</strong> (the “meta”) describes the component;
          every <strong>named export</strong> is one story.
        </p>
        <Tsx
          code={`// src/components/Button.tsx
type ButtonProps = {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ variant = "primary", size = "md", ...props }: ButtonProps) {
  return <button className={\`btn btn-\${variant} btn-\${size}\`} {...props} />;
}`}
        />
        <Tsx
          code={`// src/components/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Library UI/Button", // sidebar location (optional — see "Naming & Tags")
  component: Button,          // powers controls + docs
  args: {                     // defaults shared by every story below
    children: "Borrow",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Join waitlist" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Cancel reservation" },
};

export const Disabled: Story = {
  args: { disabled: true },
};`}
        />
        <h4>
          Why the <code>satisfies</code> + <code>typeof meta</code> dance
        </h4>
        <p>
          <code>satisfies Meta&lt;typeof Button&gt;</code> checks the meta
          against the component’s props <em>without</em> widening its type. Then{' '}
          <code>StoryObj&lt;typeof meta&gt;</code> knows which args the meta
          already supplied — so a story isn’t forced to repeat{' '}
          <code>children</code>, but TypeScript still errors if a required prop
          is missing everywhere.
        </p>
        <h4>Story names</h4>
        <p>
          The export name becomes the display name: <code>Primary</code> →
          “Primary”, <code>WithLongTitle</code> → “With Long Title”. Override it
          with a <code>name</code> field when you need punctuation or emoji.
        </p>
        <Callout>
          <strong>Mental model:</strong> a story is{' '}
          <em>data, not a function</em>. It’s an object describing “render this
          component with these inputs in this environment”. Because it’s just
          data, Storybook, Vitest, Chromatic, and your own tests can all consume
          the same file.
        </Callout>
      </Topic>

      <Topic id="args" no="04" title="Args — A Story’s Inputs">
        <p>
          <strong>Args</strong> are the inputs Storybook passes to your
          component — usually a 1:1 map of props. They’re dynamic: the Controls
          panel edits them live, the URL can encode them, and tests can read
          them back.
        </p>
        <h4>Args merge from three levels</h4>
        <Tsx
          code={`// preview.ts — project level (rare: e.g. a default locale)
const preview: Preview = { args: { locale: "en" } };

// Button.stories.tsx — component level (meta)
const meta = { component: Button, args: { children: "Borrow" } } satisfies Meta<typeof Button>;

// story level — wins over the other two
export const Large: Story = { args: { size: "lg" } };
// final args: { locale: "en", children: "Borrow", size: "lg" }`}
        />
        <h4>Linking to a specific state</h4>
        <p>
          Args can be set from the URL, which makes “look at this broken state”
          a link you can paste into a bug report:
        </p>
        <Bash
          code={`http://localhost:6006/?path=/story/library-ui-button--primary&args=size:lg;disabled:!true`}
        />
        <h4>Controlled components with useArgs</h4>
        <p>
          A controlled component — one whose parent owns the value — does
          nothing in isolation unless something feeds its <code>onChange</code>{' '}
          back into its value. The bookmark button that adds a book to a
          member’s wishlist is a good example:
        </p>
        <Tsx
          code={`// src/components/WishlistToggle.tsx
type Props = { pressed: boolean; disabled?: boolean; onChange: (next: boolean) => void };

export function WishlistToggle({ pressed, disabled, onChange }: Props) {
  return (
    <button
      aria-label="Add to wishlist"
      aria-pressed={pressed}
      disabled={disabled}
      onClick={() => onChange(!pressed)}
    >
      {pressed ? "★" : "☆"}
    </button>
  );
}`}
        />
        <p>
          <code>useArgs</code> lets the story play the parent, keeping the
          Controls panel in sync with every click:
        </p>
        <Tsx
          code={`// src/components/WishlistToggle.stories.tsx
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
  component: WishlistToggle,
  args: { pressed: false, onChange: fn() },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    return (
      <WishlistToggle
        {...args}
        onChange={(next) => {
          args.onChange(next);           // keep the spy so tests & Actions still see calls
          updateArgs({ pressed: next }); // feed the value back in
        }}
      />
    );
  },
} satisfies Meta<typeof WishlistToggle>;

export const Default: Story = {};
export const OnWishlist: Story = { args: { pressed: true } };`}
        />
        <Exercise
          id="ans-args"
          prompt={
            <>
              Signed-out visitors can see the wishlist star but not use it. Add
              a <code>SignedOut</code> story where the toggle is disabled, and a{' '}
              <code>SignedOutOnWishlist</code> story that shows a filled star
              that can’t be clicked.
            </>
          }
        >
          <Tsx
            code={`export const SignedOut: Story = { args: { disabled: true } };

export const SignedOutOnWishlist: Story = {
  args: { ...SignedOut.args, pressed: true },
};`}
          />
        </Exercise>
      </Topic>

      <Topic id="controls-argtypes" no="05" title="Controls & argTypes">
        <p>
          Storybook reads your component’s TypeScript props (via{' '}
          <code>react-docgen</code>) and infers a control for each one: a union
          of string literals becomes a select, a boolean becomes a toggle.{' '}
          <strong>argTypes</strong> let you override that inference and add
          descriptions.
        </p>
        <Tsx
          code={`const meta = {
  component: Button,
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "danger"],
      description: "Visual weight. Use \`danger\` only for destructive actions.",
      table: { category: "Appearance", defaultValue: { summary: "primary" } },
    },
    size: { control: "select", options: ["sm", "md", "lg"], table: { category: "Appearance" } },
    onClick: { table: { category: "Events" } },
    // hide a prop from controls & docs entirely
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;`}
        />
        <RefTable
          caption="Control types"
          headers={['Data', 'control', 'Notes']}
          rows={[
            ['boolean', <code>boolean</code>, 'Toggle'],
            [
              'number',
              <>
                <code>number</code>, <code>range</code>
              </>,
              <>
                Add <code>min</code>, <code>max</code>, <code>step</code>
              </>,
            ],
            ['string', <code>text</code>, 'Free text input'],
            [
              'enum',
              <>
                <code>select</code>, <code>radio</code>,{' '}
                <code>inline-radio</code>
              </>,
              <>
                Needs <code>options</code>
              </>,
            ],
            [
              'multi-enum',
              <>
                <code>check</code>, <code>multi-select</code>
              </>,
              'Returns an array',
            ],
            [
              'color',
              <code>color</code>,
              <>
                Optional <code>presetColors</code>
              </>,
            ],
            [
              'date',
              <code>date</code>,
              'Returns a timestamp (number), not a Date',
            ],
            ['object / array', <code>object</code>, 'JSON editor'],
          ]}
        />
        <h4>Mapping non-serializable values</h4>
        <p>
          Args must be serializable to live in the URL. For props that take JSX
          or functions, expose friendly option names and map them:
        </p>
        <Tsx
          code={`import { BookOpen, Bookmark, Clock } from "lucide-react";

argTypes: {
  icon: {
    options: ["none", "borrow", "waitlist", "due"],
    mapping: { none: undefined, borrow: <BookOpen />, waitlist: <Bookmark />, due: <Clock /> },
    control: "select",
  },
}`}
        />
        <h4>Conditional controls</h4>
        <Tsx
          code={`// BookCard.stories.tsx
argTypes: {
  showCover: { control: "boolean" },
  coverUrl: { control: "text", if: { arg: "showCover", truthy: true } }, // only shown when covers are on
}`}
        />
        <Callout>
          Controls can be tuned globally with <code>parameters.controls</code>:{' '}
          <code>expanded: true</code> shows descriptions and defaults,{' '}
          <code>sort: &apos;requiredFirst&apos;</code> orders them, and{' '}
          <code>exclude</code> hides noisy props like <code>style</code>.
        </Callout>
      </Topic>

      <Topic id="actions" no="06" title="Actions & fn()">
        <p>
          When a member clicks “Borrow” on a book card, where does the{' '}
          <code>onBorrow</code> go? In Storybook, into the{' '}
          <strong>Actions panel</strong> — as long as the arg is a spy created
          with <code>fn()</code>:
        </p>
        <Tsx
          code={`import { fn } from "storybook/test";

const meta = {
  component: BookCard,
  args: {
    book: mobyDick,
    onBorrow: fn(),
    onJoinWaitlist: fn(),
  },
} satisfies Meta<typeof BookCard>;`}
        />
        <p>
          <code>fn()</code> is a Vitest-compatible mock function. That’s the key
          design decision: the same spy that logs to the Actions panel is the
          one your interaction test asserts on later (
          <code>expect(args.onBorrow).toHaveBeenCalledWith(3)</code>).
        </p>
        <Callout variant="warn">
          <strong>Legacy note:</strong> older projects used{' '}
          <code>parameters.actions.argTypesRegex: &apos;^on.*&apos;</code> to
          auto-create actions. That implicit magic was removed because those
          handlers weren’t real spies and couldn’t be asserted on. Declare{' '}
          <code>fn()</code> explicitly — usually once, in the meta.
        </Callout>
        <p>
          Spies can also have an implementation, which is handy when the
          component awaits the handler:
        </p>
        <Tsx
          code={`// BookCard.stories.tsx
args: {
  // resolves after 300ms so the "Borrowing…" spinner is visible in the story
  onBorrow: fn(async () => new Promise((r) => setTimeout(r, 300))),
}`}
        />
      </Topic>

      <ModuleTitle>Part 2 — Writing Better Stories</ModuleTitle>

      <Topic id="story-reuse" no="07" title="Reusing Stories & Custom Render">
        <p>
          Stories are objects, so reuse is just JavaScript. Spread args from one
          story into another instead of copying values — here are the four
          states every book card can be in:
        </p>
        <Tsx
          code={`// BookCard.stories.tsx
export const Available: Story = {
  args: {
    book: { id: 3, title: "Moby-Dick", author: "Herman Melville", publishedYear: 1851, copiesTotal: 1, copiesAvailable: 1 },
  },
};

export const OnLoan: Story = {
  args: { book: { ...Available.args!.book!, copiesAvailable: 0 } },
};

export const Reserved: Story = {
  args: { ...OnLoan.args, reservedByMe: true, queuePosition: 2 },
};

export const LongTitle: Story = {
  args: {
    book: { ...Available.args!.book!, id: 4, title: "Alice's Adventures in Wonderland", author: "Lewis Carroll" },
  },
};`}
        />
        <h4>Composing stories of other components</h4>
        <p>
          A <code>BooksList</code> made of several <code>BookCard</code>s can
          reuse their stories’ args, so fixture data lives in one place:
        </p>
        <Tsx
          code={`// BooksList.stories.tsx
import * as BookCardStories from "./BookCard.stories";

export const MixedAvailability: Story = {
  args: {
    books: [
      BookCardStories.Available.args!.book!,
      BookCardStories.OnLoan.args!.book!,
      BookCardStories.LongTitle.args!.book!,
    ],
  },
};`}
        />
        <h4>Custom render functions</h4>
        <p>
          By default a story renders{' '}
          <code>&lt;Component {'{...args}'} /&gt;</code>. Use{' '}
          <code>render</code> when a component needs siblings or wrapping markup
          to make sense:
        </p>
        <Tsx
          code={`export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button {...args} variant="primary">Borrow</Button>
      <Button {...args} variant="secondary">Join waitlist</Button>
      <Button {...args} variant="danger">Cancel reservation</Button>
    </div>
  ),
};`}
        />
        <Callout>
          Prefer args over hard-coded values inside <code>render</code> —
          anything hard-coded disappears from Controls and can’t be reused by
          tests. A good heuristic: <code>render</code> decides <em>layout</em>,
          args decide <em>data</em>.
        </Callout>
      </Topic>

      <Topic id="decorators" no="08" title="Decorators">
        <p>
          A <strong>decorator</strong> wraps a story in extra markup or context
          — padding, a theme provider, a router, a query client. It receives the
          story as a component plus the story context:
        </p>
        <Tsx
          code={`import type { Decorator } from "@storybook/react-vite";

const withPadding: Decorator = (Story) => (
  <div style={{ padding: 24 }}>
    <Story />
  </div>
);

// story-level
export const InSidebar: Story = {
  decorators: [(Story) => <aside style={{ width: 280 }}><Story /></aside>],
};

// component-level (meta)
const meta = { component: BookCard, decorators: [withPadding] } satisfies Meta<typeof BookCard>;

// project-level (.storybook/preview.tsx)
const preview: Preview = { decorators: [withPadding] };`}
        />
        <h4>Order of wrapping</h4>
        <p>
          Story decorators wrap closest to the component, then component
          decorators, then global ones on the outside:
        </p>
        <Bash
          code={`<Global>            # preview.ts decorators — outermost
  <Component>       # meta decorators
    <StoryLevel>    # story decorators — innermost
      <BookCard />`}
        />
        <h4>Decorators can read context</h4>
        <Tsx
          code={`const withMember: Decorator = (Story, context) => (
  // parameters let each story choose who is signed in
  <MemberProvider member={context.parameters.member ?? null}>
    <Story />
  </MemberProvider>
);

export const SignedInAsAda: Story = {
  parameters: { member: { id: 1, name: "Ada Lovelace", tier: "premium" } },
};`}
        />
        <Callout variant="warn">
          Always render <code>&lt;Story /&gt;</code> as a component rather than
          calling <code>Story()</code> — calling it directly runs its hooks in
          the decorator’s scope and causes “rendered more hooks than during the
          previous render” errors.
        </Callout>
      </Topic>

      <Topic id="parameters" no="09" title="Parameters">
        <p>
          <strong>Parameters</strong> are static, story-level metadata that
          Storybook and addons read — they configure the <em>environment</em>,
          not the component. Unlike args, they don’t appear in Controls and
          don’t change at runtime.
        </p>
        <Tsx
          code={`export const FullPage: Story = {
  parameters: {
    layout: "fullscreen", // "centered" | "padded" (default) | "fullscreen"
    docs: { description: { story: "The whole catalog screen, no padding." } },
    a11y: { test: "error" },
  },
};`}
        />
        <p>
          Parameters are defined at project, component, and story level, and{' '}
          <strong>deep-merged</strong>: a story overriding{' '}
          <code>docs.description</code> keeps any other <code>docs</code> keys
          set higher up.
        </p>
        <h4>Backgrounds & viewports</h4>
        <p>
          Both built-in tools declare their <em>options</em> in parameters and
          their <em>current value</em> in globals, so a story can pin itself to
          a value:
        </p>
        <Tsx
          code={`// preview.ts
parameters: {
  backgrounds: {
    options: {
      paper: { name: "Paper", value: "#fdfaf3" },
      night: { name: "Night", value: "#18181b" },
    },
  },
  viewport: {
    options: {
      phone:  { name: "Phone",  styles: { width: "375px", height: "740px" } },
      tablet: { name: "Tablet", styles: { width: "820px", height: "1180px" } },
    },
  },
},

// a story pinned to a phone on a dark background
export const MobileCatalog: Story = {
  globals: {
    viewport: { value: "phone", isRotated: false },
    backgrounds: { value: "night" },
  },
};`}
        />
        <RefTable
          headers={['', 'Args', 'Parameters', 'Globals']}
          rows={[
            [
              'Describes',
              'Component inputs',
              'Story environment metadata',
              'Session-wide settings (theme, locale)',
            ],
            [
              'Changes at runtime?',
              'Yes, via Controls',
              'No',
              'Yes, via toolbar',
            ],
            ['Scope', 'One story', 'One story', 'Every story until changed'],
            [
              'Example',
              <code>disabled: true</code>,
              <code>layout: &apos;fullscreen&apos;</code>,
              <code>theme: &apos;dark&apos;</code>,
            ],
          ]}
        />
      </Topic>

      <Topic
        id="globals-toolbars"
        no="10"
        title="Globals & Toolbars — A Theme Switcher"
      >
        <p>
          <strong>Globals</strong> are values that apply to every story — theme,
          locale, currency. Declare one with <code>globalTypes</code>, give it a
          toolbar menu, and read it in a decorator:
        </p>
        <Tsx
          code={`// .storybook/preview.tsx
import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [
    (Story, context) => {
      // Tailwind's dark variant keys off a .dark class on the root
      document.documentElement.classList.toggle("dark", context.globals.theme === "dark");
      return <Story />;
    },
  ],
};

export default preview;`}
        />
        <p>Any story can pin a global so it always renders in that mode:</p>
        <Tsx
          code={`export const DarkMode: Story = { globals: { theme: "dark" } };`}
        />
        <Callout>
          For the common class/attribute/provider cases,{' '}
          <code>@storybook/addon-themes</code> ships ready-made decorators like{' '}
          <code>withThemeByClassName</code> — the hand-rolled version above is
          what it does under the hood.
        </Callout>
        <Exercise
          id="ans-locale"
          prompt={
            <>
              Add a <code>locale</code> global with English and Italian options,
              and a decorator that wraps stories in an{' '}
              <code>&lt;IntlProvider locale=...&gt;</code> — so due dates and
              fines format per locale.
            </>
          }
        >
          <Tsx
            code={`globalTypes: {
  locale: {
    toolbar: {
      title: "Locale",
      icon: "globe",
      items: [{ value: "en", title: "English" }, { value: "it", title: "Italiano" }],
      dynamicTitle: true,
    },
  },
},
initialGlobals: { locale: "en" },
decorators: [
  (Story, { globals }) => (
    <IntlProvider locale={globals.locale}>
      <Story />
    </IntlProvider>
  ),
],`}
          />
        </Exercise>
      </Topic>

      <Topic id="loaders" no="11" title="Loaders">
        <p>
          <strong>Loaders</strong> run async code <em>before</em> a story
          renders and hand the result to <code>render</code> via{' '}
          <code>loaded</code>. Use them for data that’s expensive or awkward to
          inline — a big JSON fixture, a generated image, a seeded fake DB.
        </p>
        <Tsx
          code={`export const FullCatalog: Story = {
  loaders: [
    async () => ({
      books: (await import("../fixtures/catalog-500.json")).default,
    }),
  ],
  render: (args, { loaded: { books } }) => <BooksList {...args} books={books} />,
};`}
        />
        <Callout>
          Reach for loaders sparingly. If data can be an arg, make it an arg —
          it shows up in Controls and is reusable. If a component fetches its
          own data, mock the network with MSW (Topic 17) instead of bypassing
          the fetch. Loaders are the escape hatch for everything in between.
        </Callout>
      </Topic>

      <Topic id="tags-organization" no="12" title="Naming, Hierarchy & Tags">
        <h4>Sidebar hierarchy</h4>
        <p>
          The meta’s <code>title</code> uses <code>/</code> to nest:{' '}
          <code>&apos;Library UI/Forms/MemberSignupForm&apos;</code>. Leave{' '}
          <code>title</code> out and Storybook derives it from the file path
          relative to the <code>stories</code> glob —{' '}
          <code>src/components/forms/MemberSignupForm.stories.tsx</code> becomes{' '}
          <code>components/forms/MemberSignupForm</code>. Auto-titles keep the
          sidebar in sync with your folders for free.
        </p>
        <Tsx
          code={`// preview.ts — order the sidebar
parameters: {
  options: {
    storySort: { order: ["Introduction", "Library UI", ["Button", "*"], "Pages", "*"] },
  },
},`}
        />
        <h4>Tags</h4>
        <p>
          Tags are labels on stories that control where they appear and whether
          they’re tested. They’re inherited project → meta → story, and a{' '}
          <code>!</code> prefix removes an inherited tag.
        </p>
        <RefTable
          headers={['Tag', 'Effect']}
          rows={[
            [<code>autodocs</code>, 'Generate a Docs page for this component'],
            [
              <code>dev</code>,
              'Show in the sidebar (on by default); !dev hides it',
            ],
            [
              <code>test</code>,
              'Include in test runs (on by default); !test excludes it',
            ],
            [
              <code>custom-name</code>,
              'Any string — filterable in the sidebar and in test config',
            ],
          ]}
        />
        <Tsx
          code={`const meta = {
  component: MemberSignupForm,
  tags: ["autodocs", "forms"],
} satisfies Meta<typeof MemberSignupForm>;

// a story that only exists to be tested — hidden from the sidebar & docs
export const RejectsExistingEmail: Story = {
  tags: ["!dev", "!autodocs"],
  play: async ({ canvas }) => { /* ... */ },
};

// a work-in-progress story you don't want failing CI yet
export const NewLayout: Story = { tags: ["experimental", "!test"] };`}
        />
      </Topic>

      <ModuleTitle>Part 3 — Documentation</ModuleTitle>

      <Topic id="autodocs" no="13" title="Autodocs">
        <p>
          Add the <code>autodocs</code> tag and Storybook generates a docs page
          per component: the first story as a hero, a props table from your
          types and argTypes, and every other story below with its source.
        </p>
        <Tsx
          code={`// .storybook/preview.ts — autodocs for every component
const preview: Preview = { tags: ["autodocs"] };`}
        />
        <p>
          Descriptions come from JSDoc comments — on the component, on each
          prop, and on each story export:
        </p>
        <Tsx
          code={`/**
 * The primary call-to-action. Use **one** primary button per view.
 */
export function Button(props: ButtonProps) { /* ... */ }

type ButtonProps = {
  /** Visual weight. \`danger\` is reserved for destructive actions. */
  variant?: "primary" | "secondary" | "danger";
};

/** Shown while the loan is being created. */
export const Loading: Story = { args: { loading: true } };`}
        />
        <h4>Tuning the docs page</h4>
        <Tsx
          code={`parameters: {
  docs: {
    description: { component: "Overrides the JSDoc description." },
    source: { type: "dynamic" },      // show code reflecting current args
    canvas: { sourceState: "shown" }, // expand "Show code" by default
  },
},
subcomponents: { ButtonGroup }, // extra props tables on the same page`}
        />
      </Topic>

      <Topic id="mdx-docs" no="14" title="MDX & Doc Blocks">
        <p>
          When autodocs isn’t enough — usage guidelines, do/don’t examples,
          design tokens — write MDX. MDX files mix Markdown with{' '}
          <strong>doc blocks</strong> that pull in your real stories.
        </p>
        <Tsx
          code={`{/* src/components/Button.mdx */}
import { Meta, Canvas, Controls, Stories, Primary } from "@storybook/addon-docs/blocks";
import * as ButtonStories from "./Button.stories";

<Meta of={ButtonStories} />

# Button

Buttons trigger an action. For navigation, use a \`Link\` instead.

<Primary />
<Controls />

## When to use danger

Only for destructive, irreversible actions like cancelling a reservation.

<Canvas of={ButtonStories.Danger} />

## All stories

<Stories />`}
        />
        <RefTable
          headers={['Block', 'Renders']}
          rows={[
            [
              <code>&lt;Meta of=&gt;</code>,
              'Attaches this page to a component’s stories',
            ],
            [
              <code>&lt;Canvas of=&gt;</code>,
              'One story with a “Show code” toggle',
            ],
            [
              <code>&lt;Primary /&gt;</code>,
              'The first story of the attached component',
            ],
            [
              <code>&lt;Controls /&gt;</code>,
              'Interactive props table for the primary story',
            ],
            [<code>&lt;ArgTypes /&gt;</code>, 'Static (read-only) props table'],
            [<code>&lt;Stories /&gt;</code>, 'Every story in the file'],
            [<code>&lt;Source /&gt;</code>, 'Syntax-highlighted code snippet'],
          ]}
        />
        <p>
          An MDX file without <code>of</code> — just{' '}
          <code>&lt;Meta title=&quot;Introduction&quot; /&gt;</code> — is a
          standalone page, perfect for a welcome page, design tokens, or a
          contribution guide.
        </p>
        <Callout variant="warn">
          If a component has both autodocs and an attached MDX file, the MDX
          wins. Pick one per component so readers don’t wonder which is current.
        </Callout>
      </Topic>

      <ModuleTitle>Part 4 — Real-World Components</ModuleTitle>

      <Topic id="styling-theming" no="15" title="Styling, Assets & Fonts">
        <p>
          The most common “my stories look broken” cause: the app’s global CSS
          was never loaded. Storybook doesn’t render your app’s root layout, so
          import global styles in <code>preview.ts</code>:
        </p>
        <Tsx
          code={`// .storybook/preview.ts
import "../src/styles.css"; // Tailwind entry, CSS variables, resets`}
        />
        <p>
          With Vite, the Tailwind plugin from your <code>vite.config.ts</code>{' '}
          is reused, so utility classes compile exactly as in the app.
        </p>
        <h4>Static files & fonts</h4>
        <Tsx
          code={`// main.ts — serve /public so <img src="/covers/moby-dick.jpg"> works
staticDirs: ["../public"],`}
        />
        <Tsx
          code={`<!-- .storybook/preview-head.html — injected into the story iframe's <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />`}
        />
        <Callout>
          Your app is deployed under a base path (e.g. <code>/portfolio/</code>
          )? Assets referenced as <code>/portfolio/cover.jpg</code> will 404 in
          Storybook. Import images through the bundler (
          <code>import cover from &apos;./cover.jpg&apos;</code>) so the URL is
          correct in both places.
        </Callout>
      </Topic>

      <Topic id="providers-routing" no="16" title="Providers & Routing">
        <p>
          Real components depend on context: a router for{' '}
          <code>&lt;Link&gt;</code>, a query client for data hooks, an auth
          context. Rendered bare, they throw. The fix is a decorator that
          supplies a <em>test-sized</em> version of each provider.
        </p>
        <h4>A TanStack Router decorator</h4>
        <Tsx
          code={`// .storybook/decorators/withRouter.tsx
import type { Decorator } from "@storybook/react-vite";
import { useState } from "react";
import {
  RouterProvider, createMemoryHistory, createRootRoute, createRouter,
} from "@tanstack/react-router";

function StoryRouter({ story: Story, path }: { story: React.ComponentType; path: string }) {
  // create once per story mount — not on every re-render
  const [router] = useState(() =>
    createRouter({
      routeTree: createRootRoute({ component: () => <Story /> }),
      history: createMemoryHistory({ initialEntries: [path] }),
    }),
  );
  return <RouterProvider router={router} />;
}

export const withRouter: Decorator = (Story, { parameters }) => (
  <StoryRouter story={Story} path={parameters.router?.path ?? "/"} />
);`}
        />
        <h4>A QueryClient decorator</h4>
        <Tsx
          code={`export const withQueryClient: Decorator = (Story) => {
  // fresh cache per story, and no retries: a failing request should
  // show its error state immediately, not after three attempts
  const [client] = useState(
    () => new QueryClient({ defaultOptions: { queries: { retry: false } } }),
  );
  return (
    <QueryClientProvider client={client}>
      <Story />
    </QueryClientProvider>
  );
};`}
        />
        <Callout variant="warn">
          Hooks inside an arrow-function decorator work in React, but the linter
          can’t tell it’s a component. Wrapping the logic in a named component
          (like <code>StoryRouter</code>) keeps the rules of hooks honest and
          makes the decorator easier to read.
        </Callout>
        <p>
          Register them globally in <code>preview.tsx</code> (
          <code>decorators: [withQueryClient, withRouter]</code>) and every
          story gets a working environment. Stories that need a different URL
          set <code>parameters.router.path</code> — e.g. <code>/books/3</code>{' '}
          for a book detail page.
        </p>
      </Topic>

      <Topic id="msw" no="17" title="Mocking the Network with MSW">
        <p>
          Components that fetch their own data are the hardest to showcase:
          loading, empty, error, and success depend on a server you don’t
          control. <strong>Mock Service Worker</strong> intercepts requests at
          the network level, so the component’s real <code>fetch</code> code
          runs unchanged.
        </p>
        <Bash
          code={`pnpm add -D msw msw-storybook-addon
npx msw init public/   # writes the service worker file into your static dir`}
        />
        <Tsx
          code={`// .storybook/preview.ts
import { initialize, mswLoader } from "msw-storybook-addon";

initialize({ onUnhandledRequest: "bypass" });

const preview: Preview = {
  loaders: [mswLoader], // applies each story's handlers before it renders
};`}
        />
        <p>Now each story declares the server it wants:</p>
        <Tsx
          code={`// BooksList.stories.tsx — the list fetches GET /api/books itself
import { http, HttpResponse, delay } from "msw";

const books = [
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen", copiesAvailable: 3 },
  { id: 2, title: "Frankenstein", author: "Mary Shelley", copiesAvailable: 2 },
  { id: 3, title: "Moby-Dick", author: "Herman Melville", copiesAvailable: 0 },
];

export const Loaded: Story = {
  parameters: {
    msw: { handlers: [http.get("/api/books", () => HttpResponse.json(books))] },
  },
};

export const Loading: Story = {
  parameters: {
    msw: { handlers: [http.get("/api/books", async () => { await delay("infinite"); })] },
  },
};

export const Empty: Story = {
  parameters: {
    msw: { handlers: [http.get("/api/books", () => HttpResponse.json([]))] },
  },
};

export const ServerError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/books", () => HttpResponse.json({ message: "Catalog unavailable" }, { status: 500 })),
      ],
    },
  },
};`}
        />
        <Callout>
          <strong>Share handlers with your tests.</strong> Put the happy-path
          handlers in <code>src/mocks/handlers.ts</code> and import them in both
          stories and Vitest. One mock definition, used by the workshop, the
          unit tests, and local dev.
        </Callout>
        <Exercise
          id="ans-msw"
          prompt={
            <>
              Write a <code>SlowNetwork</code> story where the catalog arrives
              after 2 seconds, so a designer can review the skeleton loader.
            </>
          }
        >
          <Tsx
            code={`export const SlowNetwork: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/books", async () => {
          await delay(2000);
          return HttpResponse.json(books);
        }),
      ],
    },
  },
};`}
          />
        </Exercise>
      </Topic>

      <Topic id="module-mocking" no="18" title="Mocking Modules">
        <p>
          Some dependencies aren’t HTTP: a <code>getSession()</code> helper
          reading cookies, a server function, analytics, <code>Date.now()</code>
          . Storybook 10 adds <strong>module mocking</strong> with{' '}
          <code>sb.mock</code>, registered once in <code>preview.ts</code>:
        </p>
        <Tsx
          code={`// .storybook/preview.ts
import { sb } from "storybook/test";

// spy: true keeps the real implementation but wraps each export in a spy
sb.mock(import("../src/lib/analytics.ts"), { spy: true });

// no options: every export becomes a mock returning undefined —
// or, if src/lib/__mocks__/session.ts exists, that file is used instead
sb.mock(import("../src/lib/session.ts"));`}
        />
        <p>
          Stories then shape the mock’s behavior with <code>mocked</code>, and
          tests can assert on it:
        </p>
        <Tsx
          code={`// MyLoansPage.stories.tsx
import { expect, mocked } from "storybook/test";
import { getSession } from "../lib/session";
import { track } from "../lib/analytics";

export const SignedIn: Story = {
  beforeEach: () => {
    mocked(getSession).mockResolvedValue({ member: { id: 1, name: "Ada", tier: "premium" } });
  },
  play: async ({ canvas }) => {
    await expect(await canvas.findByText(/welcome back, ada/i)).toBeVisible();
    await expect(track).toHaveBeenCalledWith("my_loans_viewed");
  },
};

export const SignedOut: Story = {
  beforeEach: () => {
    mocked(getSession).mockResolvedValue(null);
  },
};`}
        />
        <Callout variant="warn">
          <code>sb.mock</code> calls must live in <code>preview.ts</code>, not
          in story files — they’re hoisted and applied at build time. Mocks are
          reset between stories automatically, so always set return values in{' '}
          <code>beforeEach</code>, never at module scope.
        </Callout>
        <Deepdive>
          <strong>Before Storybook 10:</strong> the same result is achieved with
          Node <em>subpath imports</em> and a <code>storybook</code> condition
          in <code>package.json</code>. Components import{' '}
          <code>#lib/session</code>, and Storybook resolves it to the mock file:
          <Tsx
            code={`// package.json
"imports": {
  "#lib/session": {
    "storybook": "./src/lib/session.mock.ts",
    "default": "./src/lib/session.ts"
  }
}`}
          />
          This still works in 10 and is useful when you want a hand-written mock
          with rich fake behavior rather than a spy.
        </Deepdive>
      </Topic>

      <Topic id="composite-pages" no="19" title="Page & Screen Stories">
        <p>
          Once providers, network, and modules are mocked, you can render whole
          screens. Page stories catch the bugs component stories can’t: layout
          collisions, spacing between sections, an overdue banner pushing the
          “Renew” button off screen.
        </p>
        <Tsx
          code={`// src/pages/CatalogPage.stories.tsx
import * as BooksListStories from "../components/BooksList.stories";

const meta = {
  title: "Pages/Catalog",
  component: CatalogPage,
  parameters: {
    layout: "fullscreen",
    router: { path: "/books" },
    // reuse the BooksList mock server instead of redefining it
    msw: { handlers: BooksListStories.Loaded.parameters!.msw!.handlers },
  },
} satisfies Meta<typeof CatalogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CatalogDown: Story = {
  parameters: { msw: { handlers: BooksListStories.ServerError.parameters!.msw!.handlers } },
};`}
        />
        <Callout>
          <strong>Keep pages dumb where you can.</strong> A page that takes its
          data as props (and a thin route that fetches it) is far easier to
          story than one that fetches internally. When the page must fetch, MSW
          + module mocks cover it — but props are always cheaper.
        </Callout>
      </Topic>

      <ModuleTitle>Part 5 — Testing: Basics</ModuleTitle>

      <Topic id="testing-overview" no="20" title="Stories as Tests">
        <p>
          Every test has three parts: <strong>arrange</strong> (set up state),{' '}
          <strong>act</strong> (do something), <strong>assert</strong> (check
          the result). A story is already the “arrange” — the component, its
          props, its providers, its mocked network. Storybook testing adds the
          other two on top of what you’ve written.
        </p>
        <RefTable
          headers={['Test type', 'What it catches', 'How']}
          rows={[
            [
              'Render (smoke)',
              'Crashes, thrown errors, missing providers',
              'Automatic — every story is a test; it fails if it throws while rendering',
            ],
            [
              'Interaction',
              'Broken behavior: clicks, typing, validation, callbacks',
              <>
                A <code>play</code> function with <code>userEvent</code> +{' '}
                <code>expect</code>
              </>,
            ],
            [
              'Accessibility',
              'Missing labels, contrast, invalid ARIA',
              'addon-a11y runs axe-core on every story',
            ],
            [
              'Visual',
              'CSS regressions nobody asserted on',
              'Screenshot diffing (Chromatic or Playwright)',
            ],
            [
              'Coverage',
              'Code no story exercises',
              'Vitest coverage over story runs',
            ],
          ]}
        />
        <p>
          All of these run through <strong>Vitest in browser mode</strong> (real
          Chromium via Playwright, not jsdom), both from the command line and
          from a Testing widget inside Storybook’s sidebar.
        </p>
        <Callout>
          <strong>Why a real browser?</strong> jsdom doesn’t do layout, CSS,
          focus rules, or <code>IntersectionObserver</code> properly. Tests that
          pass in jsdom and fail for users are exactly what component tests
          should prevent. Browser mode costs a little speed and buys you results
          you can trust.
        </Callout>
      </Topic>

      <Topic id="vitest-addon" no="21" title="The Vitest Addon">
        <p>
          <code>@storybook/addon-vitest</code> turns each story file into a
          Vitest test file on the fly. Install it with{' '}
          <code>storybook add</code>, which also installs Vitest browser mode
          and Playwright and writes the config:
        </p>
        <Bash
          code={`npx storybook add @storybook/addon-vitest
npx playwright install chromium   # one-time browser download`}
        />
        <Tsx
          code={`// vitest.config.ts
import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  test: {
    projects: [
      // your existing jsdom unit tests keep working as their own project
      {
        extends: true,
        test: { name: "unit", environment: "jsdom", include: ["src/**/*.test.{ts,tsx}"] },
      },
      // every story becomes a browser test
      {
        extends: true,
        plugins: [storybookTest({ configDir: ".storybook" })],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});`}
        />
        <Tsx
          code={`// .storybook/vitest.setup.ts — apply preview.ts (decorators, CSS, globals) to test runs
import { setProjectAnnotations } from "@storybook/react-vite";
import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import * as projectAnnotations from "./preview";

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);`}
        />
        <Callout>
          Recent versions of the plugin apply your preview annotations
          automatically. If <code>storybook add</code> didn’t generate a setup
          file, you don’t need one — keep whatever the installer wrote.
        </Callout>
        <h4>Running</h4>
        <Bash
          code={`pnpm vitest --project=storybook             # all stories, once
pnpm vitest --project=storybook --watch     # re-run on save
pnpm vitest --project=storybook BookCard    # filter by file name
pnpm vitest                                 # unit + storybook together`}
        />
        <p>
          Inside Storybook, the <strong>Testing widget</strong> at the bottom of
          the sidebar runs the same tests, shows pass/fail per story, and can
          toggle watch mode, accessibility checks, and coverage. A failing story
          gets a red badge you can click to see the error in the Interactions
          panel.
        </p>
        <Deepdive>
          <strong>What the plugin actually does:</strong> it indexes your story
          files, transforms each into a Vitest file with one <code>test()</code>{' '}
          per story, and each test renders the story in the browser, runs its
          loaders, <code>beforeEach</code>, and <code>play</code>, then checks
          a11y. Stories with the <code>!test</code> tag are skipped; you can
          narrow further with{' '}
          <code>
            storybookTest({'{'} tags: {'{'} include, exclude {'}'} {'}'})
          </code>
          .
        </Deepdive>
      </Topic>

      <Topic
        id="play-functions"
        no="22"
        title="Play Functions — Interaction Tests"
      >
        <p>
          A <code>play</code> function runs right after the story renders. It
          gets the rendered canvas (with Testing Library queries), a{' '}
          <code>userEvent</code> instance, and the story’s args — so it can act
          like a user and assert on the result.
        </p>
        <Tsx
          code={`// BookCard.stories.tsx
import { expect, fn } from "storybook/test";

export const BorrowsWhenAvailable: Story = {
  args: { book: mobyDick, onBorrow: fn(), onJoinWaitlist: fn() },
  play: async ({ canvas, userEvent, args }) => {
    await expect(canvas.getByText(/1 of 1 available/i)).toBeVisible();

    await userEvent.click(canvas.getByRole("button", { name: /borrow/i }));
    await expect(args.onBorrow).toHaveBeenCalledWith(3);
    await expect(args.onJoinWaitlist).not.toHaveBeenCalled();
  },
};

export const OffersWaitlistWhenOnLoan: Story = {
  args: { book: { ...mobyDick, copiesAvailable: 0 }, onBorrow: fn(), onJoinWaitlist: fn() },
  play: async ({ canvas, userEvent, args }) => {
    await expect(canvas.queryByRole("button", { name: /borrow/i })).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: /join waitlist/i }));
    await expect(args.onJoinWaitlist).toHaveBeenCalledWith(3);
  },
};`}
        />
        <p>
          Open the story in Storybook and watch the{' '}
          <strong>Interactions</strong> panel: every <code>userEvent</code> and{' '}
          <code>expect</code> is logged as a step. You can pause, step back and
          forward, and see the component at each point — a visual debugger for
          your test.
        </p>
        <Callout>
          <strong>
            <code>await</code> every <code>expect</code>.
          </strong>{' '}
          Storybook’s <code>expect</code> is instrumented. Awaiting it makes the
          step show in the Interactions panel and keeps the debugger’s
          step-through in order. Forgetting it won’t always fail, but it makes
          debugging much harder.
        </Callout>
        <Exercise
          id="ans-play-wishlist"
          prompt={
            <>
              Write a play function for <code>WishlistToggle</code> that starts
              with the book already on the wishlist, clicks the star once, and
              asserts that <code>aria-pressed</code> is <code>false</code> and
              that <code>onChange</code> was called exactly once, with{' '}
              <code>false</code>.
            </>
          }
        >
          <Tsx
            code={`export const RemoveFromWishlist: Story = {
  args: { pressed: true, onChange: fn() },
  play: async ({ canvas, userEvent, args }) => {
    const star = canvas.getByRole("button", { name: /wishlist/i });
    await userEvent.click(star);
    await expect(star).toHaveAttribute("aria-pressed", "false");
    await expect(args.onChange).toHaveBeenCalledOnce();
    await expect(args.onChange).toHaveBeenCalledWith(false);
  },
};`}
          />
        </Exercise>
      </Topic>

      <Topic
        id="queries-assertions"
        no="23"
        title="Queries, userEvent & expect"
      >
        <p>
          <code>storybook/test</code> re-exports Testing Library,{' '}
          <code>user-event</code>, and Vitest’s <code>expect</code> with
          jest-dom matchers. If you’ve written React Testing Library tests, you
          already know the API.
        </p>
        <h4>Query priority — find elements the way users do</h4>
        <RefTable
          headers={['Priority', 'Query', 'Use for']}
          rows={[
            [
              '1',
              <code>getByRole</code>,
              'Almost everything: buttons, inputs, headings, dialogs',
            ],
            ['2', <code>getByLabelText</code>, 'Form fields'],
            [
              '3',
              <code>getByPlaceholderText</code>,
              'Only if there’s no label (and there should be)',
            ],
            ['4', <code>getByText</code>, 'Non-interactive text content'],
            ['5', <code>getByDisplayValue</code>, 'Filled-in inputs'],
            [
              'last',
              <code>getByTestId</code>,
              'When nothing user-visible identifies it',
            ],
          ]}
        />
        <RefTable
          caption="Query variants"
          headers={['Variant', 'No match', 'Multiple matches', 'Async?']}
          rows={[
            [<code>getBy…</code>, 'Throws', 'Throws', 'No'],
            [
              <code>queryBy…</code>,
              <code>null</code>,
              'Throws',
              'No — use to assert absence',
            ],
            [
              <code>findBy…</code>,
              'Rejects after timeout',
              'Rejects',
              'Yes — waits for it to appear',
            ],
            [<code>getAllBy…</code>, 'Throws', 'Returns array', 'No'],
          ]}
        />
        <h4>A realistic form test</h4>
        <Tsx
          code={`// MemberSignupForm.stories.tsx
export const ShowsValidationErrors: Story = {
  args: { onSubmit: fn() },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.type(canvas.getByLabelText(/email/i), "not-an-email");
    await userEvent.click(canvas.getByRole("button", { name: /sign up/i }));

    await expect(canvas.getByText(/name is required/i)).toBeVisible();
    await expect(canvas.getByText(/enter a valid email/i)).toBeVisible();
    await expect(canvas.getByLabelText(/email/i)).toHaveAttribute("aria-invalid", "true");
    await expect(args.onSubmit).not.toHaveBeenCalled();
  },
};

export const SignsUpNewMember: Story = {
  args: { onSubmit: fn() },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.type(canvas.getByLabelText(/name/i), "Grace Hopper");
    await userEvent.type(canvas.getByLabelText(/email/i), "grace@example.com");
    await userEvent.selectOptions(canvas.getByLabelText(/branch/i), "riverside");
    await userEvent.click(canvas.getByRole("checkbox", { name: /premium/i }));
    await userEvent.click(canvas.getByRole("button", { name: /sign up/i }));

    await expect(args.onSubmit).toHaveBeenCalledWith({
      name: "Grace Hopper",
      email: "grace@example.com",
      branch: "riverside",
      premium: true,
    });
  },
};`}
        />
        <RefTable
          caption="userEvent cheatsheet"
          headers={['Call', 'Does']}
          rows={[
            [<code>click(el)</code>, 'Pointer down/up + click, with focus'],
            [
              <code>type(el, &apos;text&apos;)</code>,
              'Clicks then types character by character',
            ],
            [<code>clear(el)</code>, 'Selects all and deletes'],
            [
              <code>keyboard(&apos;{'{Enter}'}&apos;)</code>,
              'Key presses on the focused element',
            ],
            [<code>tab()</code>, 'Moves focus like the Tab key'],
            [<code>hover(el)</code>, 'Pointer enter/over — for tooltips'],
            [
              <code>selectOptions(el, value)</code>,
              'Picks from a native select',
            ],
            [<code>upload(el, file)</code>, 'Sets files on a file input'],
          ]}
        />
        <RefTable
          caption="Most-used matchers"
          headers={['Matcher', 'Asserts']}
          rows={[
            [
              <code>toBeVisible()</code>,
              'In the document and not hidden by CSS',
            ],
            [
              <code>toBeInTheDocument()</code>,
              'Attached to the DOM (may be hidden)',
            ],
            [
              <code>toBeDisabled()</code>,
              'Disabled, including via a disabled fieldset',
            ],
            [<code>toHaveValue(v)</code>, 'Input/select value'],
            [
              <code>toHaveTextContent(t)</code>,
              'Text content (string or regex)',
            ],
            [
              <code>toHaveAccessibleName(n)</code>,
              'What a screen reader announces',
            ],
            [<code>toHaveFocus()</code>, 'Is the active element'],
            [
              <code>toHaveBeenCalledWith(...)</code>,
              'Spy was called with args',
            ],
          ]}
        />
      </Topic>

      <Topic id="async-steps" no="24" title="Async, Steps & Portals">
        <h4>Waiting for things</h4>
        <p>
          UI is asynchronous: data loads, animations finish, debounced inputs
          fire later. Never add fixed sleeps — wait for the condition you care
          about.
        </p>
        <Tsx
          code={`// findBy* waits (default 1s) for an element to appear
const card = await canvas.findByRole("heading", { name: "Moby-Dick" });

// waitFor retries an assertion until it passes or times out
await waitFor(() => expect(args.onSearch).toHaveBeenCalledWith("drac"), { timeout: 2000 });

// assert something disappeared
await waitFor(() => expect(canvas.queryByRole("progressbar")).not.toBeInTheDocument());`}
        />
        <h4>Grouping with step</h4>
        <p>
          Long flows read better — and debug better — as named steps. Each
          collapses into one group in the Interactions panel:
        </p>
        <Tsx
          code={`export const BorrowFromCatalog: Story = {
  play: async ({ canvas, userEvent, step }) => {
    await step("Filter to Horror", async () => {
      await userEvent.click(canvas.getByRole("tab", { name: /horror/i }));
    });

    await step("Borrow Dracula", async () => {
      const card = await canvas.findByRole("article", { name: /dracula/i });
      await userEvent.click(within(card).getByRole("button", { name: /borrow/i }));
      await expect(within(card).getByText(/1 of 2 available/i)).toBeVisible();
    });

    await step("Dracula appears under My loans", async () => {
      await userEvent.click(canvas.getByRole("tab", { name: /my loans/i }));
      await expect(canvas.getAllByRole("article")).toHaveLength(1);
      await expect(canvas.getByRole("article")).toHaveAccessibleName(/dracula/i);
    });
  },
};`}
        />
        <p>
          <code>within(el)</code> scopes queries to part of the tree — essential
          when every card has its own “Borrow” button.
        </p>
        <h4>Portals: dialogs, menus, toasts</h4>
        <p>
          Dialogs are usually rendered into <code>document.body</code> via a
          portal — outside the story’s canvas element. Canvas queries won’t find
          them; use <code>screen</code>, which searches the whole document:
        </p>
        <Tsx
          code={`import { expect, screen } from "storybook/test";

export const ConfirmCancel: Story = {
  args: { onCancelReservation: fn() },
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole("button", { name: /cancel reservation/i }));

    const dialog = await screen.findByRole("dialog", { name: /cancel this reservation/i });
    await expect(within(dialog).getByRole("button", { name: /keep it/i })).toHaveFocus();

    await userEvent.click(within(dialog).getByRole("button", { name: /yes, cancel/i }));
    await expect(args.onCancelReservation).toHaveBeenCalledOnce();
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  },
};`}
        />
      </Topic>

      <ModuleTitle>Part 6 — Testing: Intermediate</ModuleTitle>

      <Topic id="lifecycle-hooks" no="25" title="beforeEach & mount">
        <h4>beforeEach — setup and cleanup around every story</h4>
        <p>
          <code>beforeEach</code> runs before the story renders, at project,
          meta, or story level. Return a function and it runs as cleanup
          afterwards. It’s the right place for things like frozen time and mock
          return values:
        </p>
        <Tsx
          code={`// preview.ts — every story sees the same "today"
import MockDate from "mockdate";

const preview: Preview = {
  async beforeEach() {
    MockDate.set("2026-06-15T09:00:00Z");
    return () => MockDate.reset();
  },
};`}
        />
        <Tsx
          code={`// DueDateBadge.stories.tsx — "today" is always 15 June, so these never flake
export const DueToday: Story = {
  args: { dueOn: "2026-06-15" },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/due today/i)).toBeVisible();
  },
};

export const Overdue: Story = {
  args: { dueOn: "2026-06-12" }, // 3 days late × 25¢
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/overdue by 3 days/i)).toBeVisible();
    await expect(canvas.getByText("$0.75")).toBeVisible();
  },
};`}
        />
        <h4>mount — do work before rendering, inside play</h4>
        <p>
          Sometimes the setup depends on values created in the test itself.
          Destructuring <code>mount</code> in <code>play</code> tells Storybook
          not to render automatically — you decide when, and with what:
        </p>
        <Tsx
          code={`export const RenewExistingLoan: Story = {
  play: async ({ mount, args, userEvent }) => {
    // arrange: create a loan in the (mocked) in-memory db first
    const loan = await db.loans.create({ bookId: 1, memberId: 1, dueOn: "2026-06-20" });

    // then render with it; mount returns the canvas
    const canvas = await mount(<LoanRow {...args} loanId={loan.id} />);

    await userEvent.click(await canvas.findByRole("button", { name: /renew/i }));
    await expect(await db.loans.get(loan.id)).toMatchObject({ dueOn: "2026-07-04" }); // +14 days
  },
};`}
        />
        <Callout variant="warn">
          <code>mount</code> must be destructured directly in the play
          function’s parameters (<code>{'({ mount })'}</code>) — Storybook
          detects it by inspecting the function’s signature.
        </Callout>
      </Topic>

      <Topic id="a11y-testing" no="26" title="Accessibility Testing">
        <p>
          <code>@storybook/addon-a11y</code> runs <strong>axe-core</strong>{' '}
          against every story. The Accessibility panel lists violations with the
          offending element highlighted; with the Vitest addon, the same checks
          run as part of your tests.
        </p>
        <Tsx
          code={`// preview.ts
const preview: Preview = {
  parameters: {
    a11y: {
      // "error": violations fail tests
      // "todo":  violations reported as warnings (good for adopting gradually)
      // "off":   skip checks
      test: "error",
    },
  },
};`}
        />
        <p>Override per component or per story when you have a reason:</p>
        <Tsx
          code={`// a legacy component you're still fixing — warn, don't fail
const meta = {
  component: LegacyBarcodeScanner,
  parameters: { a11y: { test: "todo" } },
} satisfies Meta<typeof LegacyBarcodeScanner>;

// disable one rule, scoped and documented
export const TitleOverCover: Story = {
  parameters: {
    a11y: {
      config: { rules: [{ id: "color-contrast", enabled: false }] }, // title sits on a cover image; checked manually
    },
  },
};`}
        />
        <h4>What axe can’t catch — test it yourself</h4>
        <p>
          Automated checks find roughly a third of accessibility issues.
          Keyboard behavior needs interaction tests:
        </p>
        <Tsx
          code={`export const DialogTrapsFocus: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: /cancel reservation/i }));
    const dialog = await screen.findByRole("dialog");
    const [keep, confirm] = within(dialog).getAllByRole("button");

    await expect(keep).toHaveFocus();
    await userEvent.tab();
    await expect(confirm).toHaveFocus();
    await userEvent.tab(); // wraps around — focus never escapes the dialog
    await expect(keep).toHaveFocus();

    await userEvent.keyboard("{Escape}");
    await expect(canvas.getByRole("button", { name: /cancel reservation/i })).toHaveFocus(); // focus restored
  },
};`}
        />
        <Callout>
          Axe checks the story as rendered — including your dark theme and your
          pinned viewport. Adding a <code>DarkMode</code> story for each
          component doubles as a contrast test for the dark palette — the red
          “Overdue” badge is the usual first casualty.
        </Callout>
      </Topic>

      <Topic
        id="portable-stories"
        no="27"
        title="Portable Stories — Stories in Any Test Runner"
      >
        <p>
          Not every test belongs in browser mode. Maybe you have an existing
          jsdom suite, or you want a quick unit test that reuses a story’s
          setup. <strong>Portable stories</strong> turn a story into a plain
          React component — with args, decorators, and parameters applied — that
          any runner can render.
        </p>
        <Tsx
          code={`// src/test-setup.ts (your unit project's setupFiles)
import { setProjectAnnotations } from "@storybook/react-vite";
import * as projectAnnotations from "../.storybook/preview";

setProjectAnnotations(projectAnnotations); // global decorators, CSS, etc.`}
        />
        <Tsx
          code={`// src/components/MemberSignupForm.test.tsx — runs in jsdom with Testing Library
import { composeStories } from "@storybook/react-vite";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as stories from "./MemberSignupForm.stories";

const { Empty, SignsUpNewMember } = composeStories(stories);

describe("MemberSignupForm", () => {
  it("defaults to the Downtown branch", () => {
    render(<Empty />);
    expect(screen.getByLabelText(/branch/i)).toHaveValue("downtown");
  });

  it("runs the story's own play function", async () => {
    await SignsUpNewMember.run(); // renders + executes play; throws if an expect fails
    expect(SignsUpNewMember.args.onSubmit).toHaveBeenCalledOnce();
  });

  it("can override args", async () => {
    const onSubmit = vi.fn();
    render(<Empty onSubmit={onSubmit} defaultValues={{ name: "Ada" }} />);
    await userEvent.click(screen.getByRole("button", { name: /sign up/i }));
    expect(onSubmit).not.toHaveBeenCalled(); // email still missing
  });
});`}
        />
        <RefTable
          headers={['API', 'Use']}
          rows={[
            [
              <code>composeStories(module)</code>,
              'All stories from a file, as components',
            ],
            [<code>composeStory(story, meta)</code>, 'A single story'],
            [
              <code>Story.run()</code>,
              'Render and execute the full lifecycle, including play',
            ],
            [
              <code>Story.load()</code>,
              'Run loaders (e.g. MSW handlers) before you render manually',
            ],
            [
              <code>Story.args</code>,
              'The composed args — including the fn() spies',
            ],
          ]}
        />
        <Callout variant="warn">
          In jsdom, CSS doesn’t apply and there’s no layout, so{' '}
          <code>toBeVisible</code> and anything size-dependent is less
          trustworthy. Use portable stories for logic and callbacks; keep visual
          and focus assertions in browser mode.
        </Callout>
      </Topic>

      <Topic id="visual-testing" no="28" title="Visual Regression Testing">
        <p>
          Interaction tests check <em>behavior</em>. They won’t notice that a
          CSS refactor pushed the due date under the cover image, or that a
          Tailwind upgrade changed the shade of the “Overdue” badge. Visual
          tests screenshot every story and diff it against an approved baseline.
        </p>
        <h4>Option A — Chromatic (hosted)</h4>
        <Bash
          code={`npx storybook add @chromatic-com/storybook   # adds the Visual Tests panel
npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN`}
        />
        <p>
          Chromatic builds your Storybook, snapshots each story in real
          browsers, and gives you a review UI to accept or reject each change.
          Accepted snapshots become the new baseline for that branch. With{' '}
          <code>--only-changed</code> (TurboSnap) it only re-snapshots stories
          affected by the files you changed.
        </p>
        <Tsx
          code={`// per-story tuning
parameters: {
  chromatic: {
    viewports: [375, 1280],        // snapshot at two widths
    delay: 300,                    // wait for an entry animation
    diffThreshold: 0.2,            // tolerate anti-aliasing noise
  },
},
// opt a story out (e.g. it shows a live "returned 3s ago" timer)
parameters: { chromatic: { disableSnapshot: true } },`}
        />
        <h4>Option B — Playwright screenshots (self-hosted)</h4>
        <p>
          Every built Storybook has an <code>index.json</code> listing its
          stories, and every story can be opened alone at{' '}
          <code>iframe.html?id=…</code>. That’s all Playwright needs:
        </p>
        <Tsx
          code={`// e2e/visual.spec.ts — run against \`storybook build\` served on :6006
import { test, expect } from "@playwright/test";
import index from "../storybook-static/index.json" with { type: "json" };

const stories = Object.values(index.entries).filter(
  (e) => e.type === "story" && !e.tags?.includes("no-visual"),
);

for (const story of stories) {
  test(story.id, async ({ page }) => {
    await page.goto(\`http://localhost:6006/iframe.html?id=\${story.id}&viewMode=story\`);
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(\`\${story.id}.png\`, { animations: "disabled" });
  });
}`}
        />
        <Bash
          code={`pnpm playwright test e2e/visual.spec.ts                   # compare to baselines
pnpm playwright test e2e/visual.spec.ts --update-snapshots # accept intentional changes`}
        />
        <Callout variant="warn">
          <strong>Determinism is everything.</strong> Screenshots flake on
          anything that varies between runs: the current date (every due date
          badge!), random data, loading spinners, web fonts, animations. Freeze
          time with <code>beforeEach</code>, seed fake data, wait for fonts, and
          run baselines on the same OS as CI (font rendering differs between
          macOS and Linux).
        </Callout>
      </Topic>

      <Topic id="coverage" no="29" title="Coverage">
        <p>
          Because stories run through Vitest, you get code coverage for free —
          it tells you which lines of your components <em>no story reaches</em>.
        </p>
        <Bash
          code={`pnpm add -D @vitest/coverage-v8
pnpm vitest --project=storybook --coverage`}
        />
        <Tsx
          code={`// vitest.config.ts
test: {
  coverage: {
    provider: "v8",
    include: ["src/components/**", "src/pages/**"],
    exclude: ["**/*.stories.tsx", "**/*.mdx", "**/__mocks__/**"],
    reporter: ["text", "html", "lcov"],
    thresholds: { lines: 80, branches: 70 },
  },
},`}
        />
        <p>
          In Storybook, tick <strong>Coverage</strong> in the Testing widget and
          the summary appears in the sidebar, with a link to the full HTML
          report.
        </p>
        <Callout>
          <strong>Coverage measures reach, not correctness.</strong> A story
          without a play function still “covers” every line it renders. Use the
          report to find <em>missing states</em> — an uncovered{' '}
          <code>if (book.copiesAvailable === 0)</code> branch is a story you
          haven’t written — not as a score to chase.
        </Callout>
      </Topic>

      <Topic
        id="testing-strategy"
        no="30"
        title="Testing Strategy & Anti-patterns"
      >
        <RefTable
          headers={['Layer', 'Tool', 'Test here']}
          rows={[
            [
              'Pure logic',
              'Vitest (node/jsdom)',
              'Fine calculation, due-date math, loan-limit rules, email validation',
            ],
            [
              'Component behavior',
              'Stories + play (browser)',
              'Clicks, forms, keyboard, states, callbacks, a11y',
            ],
            [
              'Appearance',
              'Visual tests',
              'Layout, spacing, theming, responsive breakpoints',
            ],
            [
              'Whole flows',
              'Playwright E2E against the real app',
              'Sign in → borrow → return, with a real backend',
            ],
          ]}
        />
        <h4>Anti-patterns</h4>
        <ul>
          <li>
            <strong>Testing implementation details.</strong> Asserting on class
            names or internal state breaks on refactor. Assert what users see
            and what callbacks receive.
          </li>
          <li>
            <strong>One mega play function.</strong> A 60-line play that tests
            five things fails with an unhelpful message. Prefer several small
            stories, each testing one behavior.
          </li>
          <li>
            <strong>Test-only stories cluttering the sidebar.</strong> Tag them{' '}
            <code>!dev</code> and <code>!autodocs</code> so they run in CI but
            don’t confuse designers.
          </li>
          <li>
            <strong>Fixed sleeps.</strong>{' '}
            <code>await new Promise(r =&gt; setTimeout(r, 500))</code> is slow
            when it works and flaky when it doesn’t. Use <code>findBy</code> and{' '}
            <code>waitFor</code>.
          </li>
          <li>
            <strong>Non-determinism.</strong> <code>Math.random()</code>,{' '}
            <code>new Date()</code>, and real network in stories make both
            interaction and visual tests flaky. Mock them.
          </li>
          <li>
            <strong>DOM snapshot tests.</strong> <code>toMatchSnapshot()</code>{' '}
            on HTML gets rubber-stamped on every change. Visual snapshots are
            reviewed as images, which people actually look at.
          </li>
        </ul>
        <Exercise
          id="ans-strategy"
          prompt={
            <>
              Overdue fines are 25¢ per day, capped at the book’s replacement
              cost. Where would you test (a) the fine math, (b) the badge
              switching from “Due today” to “Overdue by 1 day” overnight, and
              (c) the badge’s red in dark mode?
            </>
          }
        >
          <ul>
            <li>
              (a) A plain Vitest unit test of <code>calculateFine()</code> —
              fastest, and covers edge cases (0 days, 1 day, hitting the cap)
              cheaply.
            </li>
            <li>
              (b) Two <code>DueDateBadge</code> stories with the same{' '}
              <code>dueOn</code> and a different frozen date in{' '}
              <code>beforeEach</code>, each with a play function asserting the
              label.
            </li>
            <li>
              (c) A <code>DarkMode</code> story covered by visual tests, with
              axe’s contrast rule on.
            </li>
          </ul>
        </Exercise>
      </Topic>

      <ModuleTitle>Part 7 — Advanced</ModuleTitle>

      <Topic id="ci-pipeline" no="31" title="CI Pipeline">
        <p>
          A good pipeline runs the fast checks first and fails early: unit
          tests, story tests (with a11y), then the Storybook build and visual
          tests.
        </p>
        <Tsx
          code={`# .github/workflows/ui-tests.yml
name: UI tests
on: [pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }   # Chromatic's TurboSnap needs git history
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm exec playwright install --with-deps chromium

      - name: Unit + story tests
        run: pnpm vitest run --coverage --reporter=default --reporter=junit --outputFile=reports/junit.xml

      - name: Build Storybook
        run: pnpm storybook build --test   # --test skips docs & addons that tests don't need

      - name: Visual tests
        uses: chromaui/action@latest
        with:
          projectToken: \${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          storybookBuildDir: storybook-static
          onlyChanged: true`}
        />
        <h4>Scaling the test job</h4>
        <Bash
          code={`# split story tests across 3 parallel CI machines
pnpm vitest run --project=storybook --shard=1/3
pnpm vitest run --project=storybook --shard=2/3
pnpm vitest run --project=storybook --shard=3/3`}
        />
        <Callout>
          Publish the built <code>storybook-static</code> as a PR preview
          (Chromatic does this automatically, or deploy it to any static host).
          Reviewers can then click through every changed state instead of
          checking out the branch.
        </Callout>
      </Topic>

      <Topic id="csf-factories" no="32" title="CSF Factories">
        <p>
          CSF 3 relies on type annotations (<code>satisfies Meta</code>,{' '}
          <code>StoryObj&lt;typeof meta&gt;</code>) that are easy to get subtly
          wrong. <strong>CSF Factories</strong> (introduced as a preview
          alongside Storybook 10) replace them with function calls that infer
          everything, including args added by addons and decorators.
        </p>
        <Tsx
          code={`// .storybook/preview.ts
import { definePreview } from "@storybook/react-vite";
import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";

export default definePreview({
  addons: [addonDocs(), addonA11y()],
  parameters: { layout: "centered" },
});`}
        />
        <Tsx
          code={`// Button.stories.tsx
import preview from "../../.storybook/preview";
import { fn } from "storybook/test";
import { Button } from "./Button";

const meta = preview.meta({
  component: Button,
  args: { children: "Borrow", onClick: fn() },
});

export const Primary = meta.story({ args: { variant: "primary" } });

// extend another story instead of spreading its args by hand
export const PrimaryDisabled = Primary.extend({ args: { disabled: true } });`}
        />
        <RefTable
          headers={['', 'CSF 3', 'CSF Factories']}
          rows={[
            [
              'Types',
              'Manual annotations',
              'Inferred from preview → meta → story',
            ],
            [
              'Addon types',
              'Not visible to stories',
              'Addon parameters/globals are type-checked',
            ],
            [
              'Reuse',
              <code>{'{ ...Primary.args }'}</code>,
              <code>Primary.extend(…)</code>,
            ],
            [
              'Portable stories',
              <code>composeStories</code>,
              'Stories are already composed — render directly',
            ],
          ]}
        />
        <Callout variant="warn">
          CSF 3 remains fully supported, and the two formats can coexist file by
          file. Check the release notes for your exact version before migrating
          a large codebase — the factory API has been evolving, and Storybook
          ships a codemod (<code>npx storybook automigrate</code>) to convert
          files.
        </Callout>
      </Topic>

      <Topic id="custom-addon" no="33" title="Custom Addons & Theming the UI">
        <h4>Brand the Storybook shell</h4>
        <Tsx
          code={`// .storybook/manager.ts
import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Maple Street Library UI",
    brandUrl: "https://example.com",
    brandImage: "/logo.svg",
    colorPrimary: "#b45309",
    colorSecondary: "#10b981",
  }),
});`}
        />
        <h4>A tiny addon panel</h4>
        <p>
          Addons are React components rendered in the manager UI. This one shows
          a <code>designNotes</code> parameter from the current story — handy
          for linking design decisions to the component:
        </p>
        <Tsx
          code={`// .storybook/manager.tsx
import { addons, types, useParameter } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";

function DesignNotes() {
  const notes = useParameter<string>("designNotes", "No design notes for this story.");
  return <div style={{ padding: 16, lineHeight: 1.6 }}>{notes}</div>;
}

addons.register("library/design-notes", () => {
  addons.add("library/design-notes/panel", {
    type: types.PANEL,
    title: "Design notes",
    render: ({ active }) => (
      <AddonPanel active={!!active}>
        <DesignNotes />
      </AddonPanel>
    ),
  });
});`}
        />
        <Tsx
          code={`// any story
export const OnLoan: Story = {
  args: { book: { ...mobyDick, copiesAvailable: 0 } },
  parameters: { designNotes: "Keep on-loan cards clickable so members can still join the waitlist." },
};`}
        />
        <Callout>
          Before writing an addon, check the catalog at{' '}
          <code>storybook.js.org/addons</code> — design embeds (Figma),
          pseudo-state toggles (<code>:hover</code>, <code>:focus</code>), i18n
          switchers, and theme pickers all exist already.
        </Callout>
      </Topic>

      <Topic id="publish-composition" no="34" title="Publishing & Composition">
        <p>
          <code>storybook build</code> outputs a fully static site. Host it
          anywhere — GitHub Pages, Netlify, S3, Chromatic — and share one URL
          with designers, PMs, and QA.
        </p>
        <Bash
          code={`pnpm storybook build -o storybook-static
npx http-server storybook-static   # sanity-check locally`}
        />
        <h4>Embedding a story elsewhere</h4>
        <Tsx
          code={`<!-- a single story, no Storybook chrome -->
<iframe
  src="https://storybook.example.com/iframe.html?id=library-ui-button--primary&viewMode=story"
  width="100%" height="200"></iframe>`}
        />
        <h4>Composition — many Storybooks, one sidebar</h4>
        <p>
          Big organizations have a design-system Storybook plus one per app.{' '}
          <strong>Composition</strong> pulls remote Storybooks into your local
          sidebar, so app developers browse shared components without switching
          tabs:
        </p>
        <Tsx
          code={`// .storybook/main.ts in the library app
refs: {
  "design-system": {
    title: "City Services Design System",
    url: "https://design.example.com",
  },
},`}
        />
        <Callout>
          Composition only loads the <em>remote</em> Storybook’s index and
          iframes — the remote components aren’t bundled into your app’s
          Storybook, so it stays fast no matter how large the design system is.
        </Callout>
      </Topic>

      <Topic id="performance-scale" no="35" title="Performance at Scale">
        <p>
          With hundreds of components, start-up time and test time matter. The
          biggest levers:
        </p>
        <RefTable
          headers={['Lever', 'How', 'Why it helps']}
          rows={[
            [
              'Narrow globs',
              <code>stories: [&apos;../src/**/*.stories.tsx&apos;]</code>,
              'Don’t crawl node_modules-sized trees or match unrelated MDX',
            ],
            [
              'Docgen choice',
              <code>typescript: {"{ reactDocgen: 'react-docgen' }"}</code>,
              'react-docgen (default) is far faster than react-docgen-typescript; set false to disable entirely',
            ],
            [
              'Test builds',
              <code>storybook build --test</code>,
              'Skips docs pages and addons that don’t affect test runs',
            ],
            [
              'Tag filtering',
              <code>storybookTest({"{ tags: { exclude: ['slow'] } }"})</code>,
              'Keep a fast PR suite; run slow stories nightly',
            ],
            [
              'Changed-only',
              <>
                <code>vitest --changed</code>, Chromatic{' '}
                <code>onlyChanged</code>
              </>,
              'Only test stories affected by the diff',
            ],
            [
              'Sharding',
              <code>--shard=i/n</code>,
              'Parallelize across CI machines',
            ],
          ]}
        />
        <Deepdive>
          <strong>On-demand loading:</strong> Storybook indexes story files
          statically (it parses exports without executing them) and only
          compiles a story’s module when you open it. That’s why a story file
          with a syntax error elsewhere in the project doesn’t break the one
          you’re viewing — and why dynamic tricks like generating story exports
          in a loop don’t show up in the sidebar. Stories must be static named
          exports.
        </Deepdive>
      </Topic>

      <Topic
        id="pitfalls-migration"
        no="36"
        title="Pitfalls, Debugging & Upgrades"
      >
        <RefTable
          headers={['Symptom', 'Likely cause', 'Fix']}
          rows={[
            [
              'Stories render unstyled',
              'Global CSS not imported',
              <>
                Import it in <code>preview.ts</code>
              </>,
            ],
            [
              <>“useRouter must be used inside a RouterProvider”</>,
              'Component uses Link/router hooks',
              'Add a router decorator (Topic 16)',
            ],
            [
              'Build fails on server-only imports (fs, db clients)',
              'A component imports server code',
              <>
                Mock the module with <code>sb.mock</code>, or split the server
                call out of the component
              </>,
            ],
            [
              <>
                Cannot find <code>@storybook/test</code>
              </>,
              'Pre-9 import path',
              <>
                Import from <code>storybook/test</code> (codemod does it)
              </>,
            ],
            [
              'Test passes in Storybook, fails in CI',
              'Timing, fonts, or time zone differ',
              <>
                Use <code>findBy</code>/<code>waitFor</code>, mock the date, pin{' '}
                <code>TZ</code> in CI
              </>,
            ],
            [
              'Mock values leak between stories',
              'Set at module scope',
              <>
                Set in <code>beforeEach</code>; mocks reset per story
              </>,
            ],
            [
              'Controls missing for some props',
              'Docgen can’t follow the type',
              <>
                Add explicit <code>argTypes</code>, or export the props type
              </>,
            ],
          ]}
        />
        <h4>Upgrading</h4>
        <Bash
          code={`npx storybook@latest upgrade   # bumps every @storybook/* package and runs automigrations
npx storybook doctor           # detects mismatched versions & duplicate deps
npx storybook info             # environment report for bug tickets`}
        />
        <Callout variant="new">
          <strong>Where to go next:</strong> pick one component in your own
          project that has a bug report against it. Write the story for the
          broken state, add a play function that reproduces the bug, watch it
          fail, fix the component, watch it pass. That loop — state → story →
          test → fix — is the whole point of everything above.
        </Callout>
      </Topic>
    </>
  )
}
