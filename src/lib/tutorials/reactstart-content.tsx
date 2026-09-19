import {
  Callout,
  Code,
  Deepdive,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'
import type { NavGroup } from '#/lib/tutorials/shared'

export const reactStartNav: Array<NavGroup> = [
  {
    title: 'Part 1 — React Fundamentals',
    items: [
      { id: 'jsx-rendering', label: 'JSX & Rendering' },
      { id: 'components-props', label: 'Components & Props' },
      { id: 'state-usestate', label: 'State — useState' },
      { id: 'events-conditionals', label: 'Events & Conditionals' },
      { id: 'lists-keys', label: 'Lists & Keys' },
    ],
  },
  {
    title: 'Part 2 — Core Hooks',
    items: [
      { id: 'useeffect', label: 'useEffect' },
      { id: 'useref', label: 'useRef' },
      { id: 'usecontext', label: 'useContext' },
      { id: 'usereducer', label: 'useReducer' },
      { id: 'custom-hooks', label: 'Custom Hooks' },
    ],
  },
  {
    title: 'Part 3 — Intermediate React',
    items: [
      { id: 'composition-children', label: 'Composition & Children' },
      { id: 'lifting-state', label: 'Lifting State / Drilling' },
      { id: 'performance-hooks', label: 'Performance Hooks' },
      { id: 'portals-refs', label: 'Portals & DOM Refs' },
      { id: 'error-boundaries', label: 'Error Boundaries' },
    ],
  },
  {
    title: 'Part 4 — Advanced React',
    items: [
      { id: 'render-props-compound', label: 'Render Props & Compound' },
      { id: 'context-reducer', label: 'Context + Reducer' },
      { id: 'suspense-concurrency', label: 'Suspense & Concurrency' },
      {
        id: 'transition-deferred',
        label: 'useTransition / useDeferredValue',
      },
    ],
  },
  {
    title: 'Part 5 — React 19',
    items: [
      { id: 'actions-useactionstate', label: 'Actions & useActionState' },
      { id: 'useoptimistic', label: 'useOptimistic' },
      { id: 'use-api', label: 'The use() API' },
      { id: 'server-components', label: 'Server Components' },
      { id: 'ref-as-prop', label: 'ref as a prop' },
    ],
  },
  {
    title: 'Part 6 — TanStack Start: Basics',
    items: [
      { id: 'what-why', label: 'What & Why' },
      { id: 'setup-structure', label: 'Setup & File Structure' },
      { id: 'file-routing', label: 'File-Based Routing' },
      { id: 'loaders', label: 'Loaders & useLoaderData' },
    ],
  },
  {
    title: 'Part 7 — TanStack Start: Intermediate',
    items: [
      { id: 'server-functions', label: 'Server Functions' },
      { id: 'mutations', label: 'Data Mutations' },
      { id: 'query-integration', label: 'TanStack Query Integration' },
      { id: 'search-params', label: 'Search Params as State' },
    ],
  },
  {
    title: 'Part 8 — TanStack Start: Advanced',
    items: [
      { id: 'ssr-streaming', label: 'SSR Streaming' },
      { id: 'middleware', label: 'Middleware' },
      { id: 'auth-patterns', label: 'Auth Patterns' },
      { id: 'deployment', label: 'Deployment' },
    ],
  },
]

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const TS_KEYWORDS = [
  'abstract',
  'any',
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
  'declare',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'from',
  'function',
  'get',
  'if',
  'implements',
  'import',
  'in',
  'infer',
  'instanceof',
  'interface',
  'is',
  'keyof',
  'let',
  'namespace',
  'new',
  'null',
  'of',
  'private',
  'protected',
  'public',
  'readonly',
  'return',
  'satisfies',
  'set',
  'static',
  'string',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'type',
  'typeof',
  'undefined',
  'var',
  'void',
  'while',
  'yield',
]

const TS_TYPES = [
  'React',
  'ReactNode',
  'Ref',
  'Dispatch',
  'ErrorInfo',
  'Component',
  'useState',
  'useEffect',
  'useRef',
  'useContext',
  'useReducer',
  'useMemo',
  'useCallback',
  'useTransition',
  'useDeferredValue',
  'useActionState',
  'useOptimistic',
  'useSearchParams',
  'useParams',
  'useNavigate',
  'useRouter',
  'useSuspenseQuery',
  'createContext',
  'createPortal',
  'createRoot',
  'createFileRoute',
  'createRoute',
  'createRootRoute',
  'createServerFn',
  'createMiddleware',
  'createTanStackRouter',
  'createRouter',
  'forwardRef',
  'redirect',
  'QueryClient',
  'Suspense',
  'Fragment',
  'Outlet',
  'Meta',
  'Scripts',
  'Await',
  'z',
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

export function ReactStartContent() {
  return (
    <>
      <ModuleTitle>Part 1 — React Fundamentals</ModuleTitle>

      <Topic id="jsx-rendering" no="01" title="JSX & Rendering">
        <p>
          JSX looks like HTML but it compiles to plain function calls.{' '}
          <code>&lt;h1&gt;Hi&lt;/h1&gt;</code> becomes{' '}
          <code>React.createElement(&quot;h1&quot;, null, &quot;Hi&quot;)</code>
          . Once you see it that way, the rules stop feeling arbitrary —
          you&apos;re writing JavaScript, so JavaScript&apos;s rules apply.
        </p>
        <Tsx
          code={`const element = <h1>Hello, {name}!</h1>;

// Babel compiles this to:
const element = React.createElement("h1", null, "Hello, ", name, "!");`}
        />
        <h4>Rules that trip people up</h4>
        <ul>
          <li>
            One root element per <code>return</code> — or wrap in a Fragment{' '}
            <code>&lt;&gt;...&lt;/&gt;</code>
          </li>
          <li>
            <code>className</code> not <code>class</code>,{' '}
            <code>htmlFor</code> not <code>for</code>
          </li>
          <li>
            Curly braces take <em>expressions</em>, not statements — ternaries
            and <code>&amp;&amp;</code> work, raw <code>if</code>/
            <code>for</code> don&apos;t
          </li>
        </ul>
        <h4>Try it — a magic 8-ball</h4>
        <Tsx
          code={`function Magic8Ball() {
  const answers = ["Yes", "No", "Ask again later", "Definitely!"];
  const [answer, setAnswer] = useState("Shake me!");

  return (
    <button onClick={() => setAnswer(answers[Math.floor(Math.random() * answers.length)])}>
      {answer}
    </button>
  );
}`}
        />
        <Callout>
          <strong>Mental model:</strong> React re-runs your component function
          on every render and diffs the returned tree against the last one
          (the &quot;virtual DOM&quot;). You describe <em>what</em> the UI
          should look like for the current state — React figures out the
          minimal DOM changes.
        </Callout>
      </Topic>

      <Topic id="components-props" no="02" title="Components & Props">
        <p>
          A component is a function that takes props (read-only inputs) and
          returns JSX. Props flow one direction: parent → child. A child can
          never reach up and change its own props — only a re-render from the
          parent with new values changes them.
        </p>
        <Tsx
          code={`type CardProps = {
  title: string;
  children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Usage
<Card title="Score"><p>You scored 42!</p></Card>`}
        />
        <Callout>
          <strong>Composition over configuration:</strong> instead of a{' '}
          <code>Card</code> with 10 boolean props for every possible layout,
          pass JSX as <code>children</code>. It scales far better as
          requirements grow.
        </Callout>
      </Topic>

      <Topic id="state-usestate" no="03" title="State — useState">
        <p>
          State is data a component &quot;remembers&quot; between renders.
          Calling the setter schedules a re-render with the new value.
        </p>
        <Tsx
          code={`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}
        />
        <h4>Two gotchas that bite everyone once</h4>
        <p>
          <strong>Stale closures.</strong> If a new value depends on the old
          one, use the function form — it always receives the freshest state,
          even inside rapid-fire calls:
        </p>
        <Tsx
          code={`setCount(prev => prev + 1); // safe, even called several times in a row`}
        />
        <p>
          <strong>No auto-merge.</strong> Unlike class-component{' '}
          <code>this.setState</code>, the hook setter replaces the value
          entirely:
        </p>
        <Tsx
          code={`const [user, setUser] = useState({ name: "Pradeep", role: "dev" });

// setUser({ role: "lead" }) wipes out \`name\`
setUser(prev => ({ ...prev, role: "lead" })); // spread + override`}
        />
        <h4>Try it — a dice roller</h4>
        <Tsx
          code={`function Dice() {
  const [value, setValue] = useState(1);
  return (
    <button onClick={() => setValue(1 + Math.floor(Math.random() * 6))}>
      Rolled: {value}
    </button>
  );
}`}
        />
      </Topic>

      <Topic
        id="events-conditionals"
        no="04"
        title="Events & Conditional Rendering"
      >
        <p>
          Event handlers are camelCase props that take a function reference
          (not a call — <code>onClick={'{fn}'}</code>, never{' '}
          <code>onClick={'{fn()}'}</code>).
        </p>
        <Tsx
          code={`function LoginButton({ isLoggedIn, onToggle }: { isLoggedIn: boolean; onToggle: () => void }) {
  return <button onClick={onToggle}>{isLoggedIn ? "Log out" : "Log in"}</button>;
}`}
        />
        <h4>Three conditional patterns you&apos;ll use constantly</h4>
        <Tsx
          code={`{isLoading && <Spinner />}                       // show or nothing
{error ? <ErrorMsg /> : <Content />}               // either/or
{status === "loading" ? <Spinner /> :
 status === "error"   ? <ErrorMsg /> : <Content />}  // multi-branch`}
        />
        <Callout variant="warn">
          <strong>Watch out:</strong> <code>{'{count && <Badge />}'}</code>{' '}
          renders a literal <code>0</code> when <code>count</code> is{' '}
          <code>0</code>, because <code>0</code> is falsy but still gets
          rendered as text. Use <code>{'{count > 0 && ...}'}</code> instead.
        </Callout>
      </Topic>

      <Topic id="lists-keys" no="05" title="Lists & Keys">
        <Tsx
          code={`const todos = [{ id: 1, text: "Learn React" }, { id: 2, text: "Learn TanStack" }];

<ul>
  {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
</ul>`}
        />
        <p>
          React uses <code>key</code> to match array items across renders so
          it can reuse DOM nodes instead of rebuilding the list from scratch.
          Using the array <code>index</code> as a key works only if the list
          never reorders or has items removed from the middle — otherwise
          inputs and focus can &quot;jump&quot; to the wrong row because React
          reuses a DOM node for what it thinks is the same item. Always reach
          for a stable, unique ID from your data.
        </p>
      </Topic>

      <ModuleTitle>Part 2 — Core Hooks</ModuleTitle>

      <Topic id="useeffect" no="06" title="useEffect">
        <p>
          <code>useEffect</code> synchronizes a component with an{' '}
          <em>external system</em> — the network, the DOM, a subscription, a
          timer. It is <strong>not</strong> a generic &quot;run this after
          render&quot; hook, and treating it that way is the single most
          common source of React bugs.
        </p>
        <Tsx
          code={`useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer); // cleanup — runs before the next effect, and on unmount
}, []); // dependency array`}
        />
        <h4>Dependency array cheat sheet</h4>
        <ul>
          <li>
            <code>[]</code> → runs once, on mount
          </li>
          <li>
            <code>[a, b]</code> → re-runs whenever <code>a</code> or{' '}
            <code>b</code> changes
          </li>
          <li>omitted entirely → runs after every render (rarely correct)</li>
        </ul>
        <Deepdive>
          <strong>The #1 mistake:</strong> using <code>useEffect</code> to
          derive one piece of state from another.
          <Tsx
            code={`// don't
useEffect(() => { setFullName(firstName + " " + lastName); }, [firstName, lastName]);

// just compute it during render — no effect needed
const fullName = firstName + " " + lastName;`}
          />
        </Deepdive>
        <p>
          Reach for <code>useEffect</code> when React doesn&apos;t already own
          the thing you&apos;re syncing: fetch calls, subscriptions,
          imperative DOM manipulation on a non-React widget, analytics pings.
        </p>
      </Topic>

      <Topic id="useref" no="07" title="useRef">
        <p>
          Two distinct jobs: holding a mutable value that survives re-renders{' '}
          <em>without</em> triggering one, and pointing at a real DOM node.
        </p>
        <Tsx
          code={`function TextInputWithFocus() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  return <input ref={inputRef} />;
}`}
        />
        <Tsx
          code={`// Mutable value, no re-render on change — good for timers, previous values, instance-like data
function StopWatch() {
  const startTime = useRef<number | null>(null);
  const handleStart = () => { startTime.current = Date.now(); };
}`}
        />
        <Callout>
          If updating a ref should also update what&apos;s on screen, you want{' '}
          <code>useState</code>, not <code>useRef</code>. Refs are invisible
          to rendering by design.
        </Callout>
      </Topic>

      <Topic id="usecontext" no="08" title="useContext">
        <p>
          Context lets any descendant read a value directly, skipping prop
          drilling through every layer in between.
        </p>
        <Tsx
          code={`const ThemeContext = createContext<"light" | "dark">("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext); // no prop passed down at all
  return <div className={theme}>...</div>;
}`}
        />
        <p>
          Good fits: theme, the logged-in user, locale/i18n — values that
          change rarely and are needed widely. Poor fit: high-frequency
          updates, since every consumer re-renders whenever the context value
          changes. For that, split contexts by concern or reach for a
          dedicated state library.
        </p>
      </Topic>

      <Topic id="usereducer" no="09" title="useReducer">
        <p>
          For state transitions with real logic behind them, or several
          sub-values that change together as one unit.
        </p>
        <Tsx
          code={`type State = { count: number };
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset":      return { count: 0 };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}`}
        />
        <p>
          Choose it when: the next state depends on non-trivial logic, several
          fields update together, or you want a pure, independently testable
          transition function decoupled from your JSX.
        </p>
      </Topic>

      <Topic id="custom-hooks" no="10" title="Custom Hooks">
        <p>
          Extract reusable stateful logic into a function whose name starts
          with <code>use</code>. It&apos;s just a normal function that happens
          to call other hooks.
        </p>
        <Tsx
          code={`function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// Usage — clean and reusable across the app
const [theme, setTheme] = useLocalStorage("theme", "light");`}
        />
        <Callout>
          Custom hooks don&apos;t share state between the components that call
          them — each call gets its own independent state. They share{' '}
          <em>logic</em>, not data.
        </Callout>
      </Topic>

      <ModuleTitle>Part 3 — Intermediate React</ModuleTitle>

      <Topic
        id="composition-children"
        no="11"
        title="Composition & Children"
      >
        <p>
          The <code>children</code> prop is React&apos;s slot mechanism — it
          lets a parent hand arbitrary JSX to a child component to render
          wherever it wants.
        </p>
        <Tsx
          code={`function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

// Modal knows nothing about what's inside it
<Modal onClose={close}>
  <h2>Delete item?</h2>
  <p>This can't be undone.</p>
</Modal>`}
        />
        <p>
          You can accept multiple named slots too, by passing JSX through
          regular props instead of just <code>children</code>:
        </p>
        <Tsx
          code={`type LayoutProps = { header: React.ReactNode; sidebar: React.ReactNode; children: React.ReactNode };

function Layout({ header, sidebar, children }: LayoutProps) {
  return (
    <>
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </>
  );
}`}
        />
      </Topic>

      <Topic
        id="lifting-state"
        no="12"
        title="Lifting State Up & Prop Drilling"
      >
        <p>
          When two sibling components need to share state, move that state to
          their nearest common parent and pass it down — this is
          &quot;lifting state up.&quot;
        </p>
        <Tsx
          code={`function Parent() {
  const [query, setQuery] = useState("");
  return (
    <>
      <SearchBox query={query} onChange={setQuery} />
      <ResultsList query={query} />
    </>
  );
}`}
        />
        <p>
          The downside appears at scale: passing a value through five layers
          of components that don&apos;t use it themselves — just forward it —
          is &quot;prop drilling.&quot; The fix isn&apos;t always Context;
          often it&apos;s restructuring the component tree so the state lives
          closer to where it&apos;s used, or composing components so the deep
          child is passed in as <code>children</code> rather than rendered by
          a distant ancestor.
        </p>
      </Topic>

      <Topic
        id="performance-hooks"
        no="13"
        title="Performance: useMemo, useCallback, React.memo"
      >
        <p>
          All three exist to skip unnecessary work — but they add complexity,
          so reach for them only after you&apos;ve noticed an actual
          performance problem, not by default.
        </p>
        <Tsx
          code={`// useMemo — cache an expensive computed VALUE between renders
const sorted = useMemo(() => expensiveSort(items), [items]);

// useCallback — cache a FUNCTION reference so it doesn't change every render
const handleClick = useCallback(() => doSomething(id), [id]);

// React.memo — skip re-rendering a component if its props haven't changed
const Row = React.memo(function Row({ item }: { item: Item }) {
  return <li>{item.name}</li>;
});`}
        />
        <Callout>
          <strong>Why they&apos;re often paired:</strong>{' '}
          <code>React.memo</code> only helps if the props stay referentially
          equal. If you pass an inline function or object as a prop, it&apos;s
          a new reference every render, which defeats <code>memo</code> —
          that&apos;s exactly the case <code>useCallback</code> and{' '}
          <code>useMemo</code> exist for.
        </Callout>
        <p>
          Rule of thumb: profile first (React DevTools Profiler), then
          memoize the specific spot that&apos;s slow. Wrapping everything in{' '}
          <code>useMemo</code>/<code>useCallback</code> &quot;just in
          case&quot; adds cognitive overhead and can even make things slower.
        </p>
      </Topic>

      <Topic id="portals-refs" no="14" title="Portals & Refs to the DOM">
        <p>
          A portal renders children into a different part of the actual DOM
          tree while keeping them in the same place in the React tree —
          essential for modals, tooltips, and dropdowns that need to escape a
          parent&apos;s <code>overflow: hidden</code> or <code>z-index</code>{' '}
          stacking context.
        </p>
        <Tsx
          code={`import { createPortal } from "react-dom";

function Tooltip({ children }: { children: React.ReactNode }) {
  return createPortal(
    <div className="tooltip">{children}</div>,
    document.getElementById("tooltip-root")!
  );
}`}
        />
        <p>
          Events still bubble through the React tree as if the portal
          weren&apos;t there — a click inside the portal will trigger a
          parent&apos;s <code>onClick</code> in React terms, even though in
          the actual DOM it&apos;s nested somewhere else entirely.
        </p>
      </Topic>

      <Topic id="error-boundaries" no="15" title="Error Boundaries">
        <p>
          A JavaScript error inside a component used to crash the whole tree.
          Error boundaries catch render-time errors in their child tree and
          show a fallback UI instead. They must currently be class components
          — there&apos;s no hook equivalent yet.
        </p>
        <Tsx
          code={`class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    logErrorToService(error, info);
  }

  render() {
    if (this.state.hasError) return <h2>Something went wrong.</h2>;
    return this.props.children;
  }
}

<ErrorBoundary>
  <WidgetThatMightThrow />
</ErrorBoundary>`}
        />
        <Callout variant="warn">
          Error boundaries do <strong>not</strong> catch errors in event
          handlers, async code, or server-side rendering — only errors thrown
          during rendering of their children. Wrap async errors with plain{' '}
          <code>try/catch</code> instead.
        </Callout>
      </Topic>

      <ModuleTitle>Part 4 — Advanced React</ModuleTitle>

      <Topic
        id="render-props-compound"
        no="16"
        title="Render Props & Compound Components"
      >
        <p>
          <strong>Render props</strong> hand rendering control to the caller
          via a function prop:
        </p>
        <Tsx
          code={`function MouseTracker({ render }: { render: (pos: { x: number; y: number }) => React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)}
    </div>
  );
}

<MouseTracker render={({ x, y }) => <p>{x}, {y}</p>} />`}
        />
        <p>
          <strong>Compound components</strong> share implicit state across a
          family of related components via context, so the API reads
          naturally — like native <code>&lt;select&gt;</code>/
          <code>&lt;option&gt;</code>:
        </p>
        <Tsx
          code={`const TabsContext = createContext<{ active: string; setActive: (id: string) => void } | null>(null);

function Tabs({ children, defaultTab }: { children: React.ReactNode; defaultTab: string }) {
  const [active, setActive] = useState(defaultTab);
  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;
}

Tabs.List = function List({ children }: { children: React.ReactNode }) {
  return <div className="tab-list">{children}</div>;
};

Tabs.Tab = function Tab({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext)!;
  return (
    <button className={ctx.active === id ? "active" : ""} onClick={() => ctx.setActive(id)}>
      {children}
    </button>
  );
};

// Usage reads like plain markup
<Tabs defaultTab="a">
  <Tabs.List>
    <Tabs.Tab id="a">First</Tabs.Tab>
    <Tabs.Tab id="b">Second</Tabs.Tab>
  </Tabs.List>
</Tabs>`}
        />
      </Topic>

      <Topic
        id="context-reducer"
        no="17"
        title="Context + Reducer (a mini Redux)"
      >
        <p>
          Combining <code>useReducer</code> for the transition logic with{' '}
          <code>useContext</code> for distribution gives you a self-contained
          global-store pattern with zero dependencies.
        </p>
        <Tsx
          code={`type State = { cart: Item[] };
type Action = { type: "add"; item: Item } | { type: "remove"; id: string };

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":    return { cart: [...state.cart, action.item] };
    case "remove": return { cart: state.cart.filter(i => i.id !== action.id) };
  }
}

const CartContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}`}
        />
        <p>
          Any component can now call <code>useCart()</code> to read state or
          dispatch actions, with no prop drilling. For very high-frequency
          global state, a dedicated library (Zustand, Jotai) will still
          outperform this — Context re-renders every consumer on any change.
        </p>
      </Topic>

      <Topic
        id="suspense-concurrency"
        no="18"
        title="Suspense & Concurrent Rendering"
      >
        <p>
          <code>Suspense</code> lets a component &quot;pause&quot; rendering
          while it waits on something — data, code, an image — and show a
          fallback until it&apos;s ready.
        </p>
        <Tsx
          code={`<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>`}
        />
        <p>
          Under the hood, React 18+ can work on rendering in the background
          without blocking the browser from responding to input — this is
          &quot;concurrent rendering.&quot; A render can be interrupted,
          thrown away, or resumed. This is what makes{' '}
          <code>useTransition</code> and streaming SSR possible: React can
          start showing what&apos;s ready while still-loading parts stay
          behind a Suspense boundary.
        </p>
        <Callout>
          Suspense for data fetching needs a library or framework wired for it
          (React Query with <code>suspense: true</code>, or a framework&apos;s
          built-in loaders — see the TanStack Start section). Plain{' '}
          <code>fetch</code> in <code>useEffect</code> doesn&apos;t integrate
          with Suspense on its own.
        </Callout>
      </Topic>

      <Topic
        id="transition-deferred"
        no="19"
        title="useTransition & useDeferredValue"
      >
        <p>
          Both let you mark some UI work as &quot;low priority&quot; so React
          doesn&apos;t let it block urgent updates like typing in an input.
        </p>
        <Tsx
          code={`function SearchPage() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState<Result[]>([]);

  function handleChange(value: string) {
    setQuery(value); // urgent — keep the input responsive
    startTransition(() => {
      setResults(expensiveSearch(value)); // low priority — can be interrupted
    });
  }

  return (
    <>
      <input value={query} onChange={e => handleChange(e.target.value)} />
      {isPending ? <Spinner /> : <ResultsList results={results} />}
    </>
  );
}`}
        />
        <p>
          <code>useDeferredValue</code> solves the same problem from the other
          end — you don&apos;t control the setter, you just want a
          &quot;lagging&quot; copy of a fast-changing value:
        </p>
        <Tsx
          code={`const deferredQuery = useDeferredValue(query);
const results = useMemo(() => expensiveSearch(deferredQuery), [deferredQuery]);`}
        />
      </Topic>

      <ModuleTitle>Part 5 — React 19</ModuleTitle>

      <Topic
        id="actions-useactionstate"
        no="20"
        title="Actions & useActionState"
      >
        <p>
          React 19 formalizes &quot;Actions&quot; — async functions you can
          pass directly to <code>&lt;form action=&#123;...&#125;&gt;</code> or
          a transition, with pending state, errors, and optimistic updates
          handled by React instead of hand-rolled <code>useState</code>{' '}
          juggling.
        </p>
        <Tsx
          code={`function ChangeName({ currentName }: { currentName: string }) {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: string | null, formData: FormData) => {
      const newName = formData.get("name") as string;
      const result = await updateName(newName);
      if (result.error) return result.error;
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input name="name" defaultValue={currentName} />
      <button disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}`}
        />
        <p>
          <code>useActionState</code> replaces the old dance of a submit
          handler plus three separate <code>useState</code> calls for
          pending/error/result — the form&apos;s <code>action</code>, the
          pending flag, and the latest returned state are all wired together
          for you.
        </p>
      </Topic>

      <Topic id="useoptimistic" no="21" title="useOptimistic">
        <p>
          Shows a predicted result immediately, before the server confirms it,
          then automatically reconciles once the real response lands.
        </p>
        <Tsx
          code={`function ThreadView({ messages, sendMessage }: { messages: Message[]; sendMessage: (text: string) => Promise<void> }) {
  const [optimisticMessages, addOptimistic] = useOptimistic(
    messages,
    (state, newText: string) => [...state, { text: newText, sending: true }]
  );

  async function formAction(formData: FormData) {
    const text = formData.get("message") as string;
    addOptimistic(text);      // shows instantly
    await sendMessage(text);  // real state arrives via props once it resolves
  }

  return (
    <>
      {optimisticMessages.map((m, i) => <p key={i} style={{ opacity: m.sending ? 0.5 : 1 }}>{m.text}</p>)}
      <form action={formAction}><input name="message" /></form>
    </>
  );
}`}
        />
        <p>
          If the real update fails, React quietly reverts to the actual state
          — no manual rollback code needed.
        </p>
      </Topic>

      <Topic id="use-api" no="22" title="The use() API">
        <p>
          <code>use()</code> reads the value of a Promise or a Context, and —
          unlike hooks — it can be called conditionally, inside loops, or
          after early returns. It&apos;s not a hook itself, which is exactly
          why it doesn&apos;t follow the &quot;Rules of Hooks.&quot;
        </p>
        <Tsx
          code={`function Comments({ commentsPromise }: { commentsPromise: Promise<Comment[]> }) {
  // suspends the component until the promise resolves
  const comments = use(commentsPromise);
  return <ul>{comments.map(c => <li key={c.id}>{c.text}</li>)}</ul>;
}

<Suspense fallback={<Spinner />}>
  <Comments commentsPromise={fetchComments()} />
</Suspense>`}
        />
        <Tsx
          code={`// Conditional context reads — impossible with useContext
function Banner({ showTheme }: { showTheme: boolean }) {
  if (!showTheme) return null;
  const theme = use(ThemeContext); // fine — use() allows this, useContext() would not
  return <div className={theme}>...</div>;
}`}
        />
      </Topic>

      <Topic
        id="server-components"
        no="23"
        title="Server Components — conceptually"
      >
        <p>
          React Server Components (RSC) run only on the server and never ship
          their code to the browser. They can read files, query a database, or
          call a secret-holding API directly in the component body — no API
          route needed as a middleman.
        </p>
        <Tsx
          code={`// This runs ONLY on the server — no JS bundle sent to the client for this component
async function ProductPage({ id }: { id: string }) {
  const product = await db.products.findById(id); // direct DB access, safely
  return (
    <div>
      <h1>{product.name}</h1>
      <AddToCartButton productId={id} /> {/* a Client Component, marked below */}
    </div>
  );
}`}
        />
        <Tsx
          code={`"use client"; // opts this file INTO the client bundle — needed for interactivity

function AddToCartButton({ productId }: { productId: string }) {
  const [pending, setPending] = useState(false);
  return <button onClick={() => setPending(true)}>Add to cart</button>;
}`}
        />
        <Callout>
          <strong>The mental split:</strong> Server Components fetch data and
          render markup with zero client-side JS cost. Client Components
          (&quot;use client&quot;) are where <code>useState</code>,{' '}
          <code>onClick</code>, and browser APIs live. A tree mixes both —
          Server Components can render Client Components, never the reverse.
          This is the model TanStack Start, Next.js App Router, and Remix all
          build on in some form.
        </Callout>
      </Topic>

      <Topic id="ref-as-prop" no="24" title="ref as a Prop">
        <p>
          Before React 19, passing a ref through to a child required wrapping
          it in <code>forwardRef</code>. React 19 lets function components
          accept <code>ref</code> as a plain prop.
        </p>
        <Tsx
          code={`// Old way (React 18 and earlier)
const Input = forwardRef<HTMLInputElement, { label: string }>(({ label }, ref) => (
  <label>{label}<input ref={ref} /></label>
));

// React 19 — ref is just a prop, no wrapper needed
function Input({ label, ref }: { label: string; ref: React.Ref<HTMLInputElement> }) {
  return (
    <label>
      {label}
      <input ref={ref} />
    </label>
  );
}`}
        />
        <p>
          Existing <code>forwardRef</code> code still works — this is
          additive, not a breaking change — but new components no longer need
          it.
        </p>
      </Topic>

      <ModuleTitle>Part 6 — TanStack Start: Basics</ModuleTitle>

      <Topic id="what-why" no="25" title="What TanStack Start Is, and Why">
        <p>
          TanStack Start is a full-stack React framework built on top of{' '}
          <strong>TanStack Router</strong> and <strong>Vite</strong>. Where
          TanStack Router alone gives you type-safe client-side routing, Start
          adds server-side rendering, streaming, server functions, and
          full-document rendering — putting it in the same category as
          Next.js or Remix, but built router-first rather than
          pages-first.
        </p>
        <h4>What makes it distinct</h4>
        <ul>
          <li>
            <strong>Router-first, not file-convention-first.</strong> Routes
            are TypeScript objects you compose; file-based routing is a
            code-generation layer on top, not the only way in.
          </li>
          <li>
            <strong>End-to-end type safety.</strong> Route params, search
            params, loader data, and server function inputs/outputs are all
            inferred — no manual typing of <code>useParams()</code>.
          </li>
          <li>
            <strong>Server functions</strong> (<code>createServerFn</code>)
            let you call server-only code from client components as if it
            were a local async function, with the network boundary handled
            for you.
          </li>
          <li>
            <strong>Built on Vite</strong>, so you get its dev server, plugin
            ecosystem, and build pipeline for free.
          </li>
        </ul>
        <Callout>
          If TanStack Query is TanStack&apos;s answer to &quot;how do I cache
          server data on the client,&quot; TanStack Start is its answer to
          &quot;how do I build the whole app&quot; — and the two are designed
          to work together, not compete.
        </Callout>
      </Topic>

      <Topic
        id="setup-structure"
        no="26"
        title="Project Setup & File Structure"
      >
        <Bash
          code={`npx create-tsrouter-app@latest my-app --template file-router --add-ons start
cd my-app
npm run dev`}
        />
        <p>A typical Start project:</p>
        <Tsx
          code={`my-app/
├─ app/
│  ├─ routes/
│  │  ├─ __root.tsx        # root layout — wraps every route
│  │  ├─ index.tsx         # "/"
│  │  ├─ about.tsx         # "/about"
│  │  └─ posts/
│  │     ├─ index.tsx      # "/posts"
│  │     └─ $postId.tsx    # "/posts/:postId"
│  ├─ client.tsx           # client entry
│  ├─ router.tsx           # createRouter() config
│  └─ ssr.tsx              # server entry
├─ vite.config.ts
└─ package.json`}
        />
        <p>
          The root route (<code>__root.tsx</code>) defines the outer{' '}
          <code>&lt;html&gt;</code> shell, global providers, and an{' '}
          <code>&lt;Outlet /&gt;</code> where matched child routes render:
        </p>
        <Tsx
          code={`export const Route = createRootRoute({
  component: () => (
    <html>
      <head><Meta /></head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
});`}
        />
      </Topic>

      <Topic id="file-routing" no="27" title="File-Based Routing">
        <p>
          Each file under <code>app/routes/</code> becomes a route. A
          generator watches the folder and produces a fully-typed route tree —
          you never hand-write a route config object for the common case.
        </p>
        <Tsx
          code={`// app/routes/posts/$postId.tsx
export const Route = createFileRoute("/posts/$postId")({
  component: PostPage,
});

function PostPage() {
  const { postId } = Route.useParams(); // fully typed as { postId: string }
  return <h1>Post {postId}</h1>;
}`}
        />
        <h4>Naming conventions</h4>
        <ul>
          <li>
            <code>posts.index.tsx</code> or <code>posts/index.tsx</code> →{' '}
            <code>/posts</code>
          </li>
          <li>
            <code>posts.$postId.tsx</code> or <code>posts/$postId.tsx</code> →{' '}
            <code>/posts/:postId</code> (dynamic segment)
          </li>
          <li>
            <code>posts.$postId.edit.tsx</code> →{' '}
            <code>/posts/:postId/edit</code> (nested)
          </li>
          <li>
            <code>_layout.tsx</code> (leading underscore) → a pathless layout
            route, wraps children without adding to the URL
          </li>
          <li>
            <code>posts.$.tsx</code> → a splat/catch-all route
          </li>
        </ul>
        <Callout>
          Because routes are plain objects under the hood, you can also build
          the whole tree by hand with <code>createRoute()</code> calls if
          you&apos;d rather not use file-based generation — Start
          doesn&apos;t force either style.
        </Callout>
      </Topic>

      <Topic id="loaders" no="28" title="Route Loaders & useLoaderData">
        <p>
          A <code>loader</code> fetches data <em>before</em> a route renders —
          on the server during SSR, and client-side on subsequent navigations
          — so your component never shows a loading spinner for data the
          router already knows it needs.
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/posts/$postId")({
  loader: async ({ params }) => {
    const post = await fetchPost(params.postId);
    return { post };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData(); // typed from the loader's return value
  return <h1>{post.title}</h1>;
}`}
        />
        <p>
          Loaders run in parallel across nested matched routes, and results
          are cached by the router — navigating back to a page you&apos;ve
          already visited can render instantly from cache while it revalidates
          in the background.
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/posts/$postId")({
  loader: ({ params }) => fetchPost(params.postId),
  staleTime: 30_000, // cached loader data is considered fresh for 30s
});`}
        />
      </Topic>

      <ModuleTitle>Part 7 — TanStack Start: Intermediate</ModuleTitle>

      <Topic
        id="server-functions"
        no="29"
        title="Server Functions — createServerFn"
      >
        <p>
          A server function is code that only ever runs on the server,
          callable from client code as if it were a normal async function — no
          manually wiring up a REST or RPC endpoint.
        </p>
        <Tsx
          code={`import { createServerFn } from "@tanstack/react-start";

const getUser = createServerFn({ method: "GET" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    // runs ONLY on the server — safe to touch a database or secret env vars
    return db.users.findById(id);
  });

// Called from a component like any async function
function Profile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => { getUser({ data: userId }).then(setUser); }, [userId]);
  return <h1>{user?.name}</h1>;
}`}
        />
        <p>
          Or, more idiomatically, called straight from a loader so the data is
          ready before render:
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/profile/$userId")({
  loader: ({ params }) => getUser({ data: params.userId }),
});`}
        />
        <Callout>
          Under the hood, Start compiles server functions into real HTTP
          endpoints and swaps the client-side call for a <code>fetch</code> —
          but you write and call it as one continuous piece of TypeScript,
          with full type inference across the network boundary.
        </Callout>
      </Topic>

      <Topic id="mutations" no="30" title="Data Mutations">
        <p>
          Mutations are just server functions that write instead of read — the
          pattern is identical, but you typically pair them with a way to
          invalidate cached loader data afterward.
        </p>
        <Tsx
          code={`const createPost = createServerFn({ method: "POST" })
  .validator((data: { title: string; body: string }) => data)
  .handler(async ({ data }) => db.posts.create(data));

function NewPostForm() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await createPost({
      data: { title: formData.get("title") as string, body: formData.get("body") as string },
    });
    router.invalidate(); // re-runs affected loaders so the new post shows up
  }

  return (
    <form action={handleSubmit}>
      <input name="title" />
      <textarea name="body" />
      <button>Publish</button>
    </form>
  );
}`}
        />
        <p>
          <code>router.invalidate()</code> tells the router &quot;loader data
          may be stale, re-fetch what&apos;s active&quot; — the router-native
          equivalent of a query invalidation.
        </p>
      </Topic>

      <Topic
        id="query-integration"
        no="31"
        title="TanStack Query Integration"
      >
        <p>
          Router loaders handle the &quot;data this route needs to
          render&quot; case well, but for caching, background refetching,
          mutations with optimistic updates, and infinite queries, Start is
          commonly paired with TanStack Query rather than replacing it.
        </p>
        <Tsx
          code={`// app/router.tsx
const queryClient = new QueryClient();

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    context: { queryClient }, // available to every loader
  });
}`}
        />
        <Tsx
          code={`// A route loader that primes the Query cache instead of returning raw data
export const Route = createFileRoute("/posts/$postId")({
  loader: ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData({
      queryKey: ["post", params.postId],
      queryFn: () => fetchPost(params.postId),
    }),
  component: PostPage,
});

function PostPage() {
  const { postId } = Route.useParams();
  // instant — data's already in the cache from the loader above
  const { data: post } = useSuspenseQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
  });
  return <h1>{post.title}</h1>;
}`}
        />
        <Callout>
          The loader&apos;s job becomes &quot;make sure the cache is warm
          before the route renders&quot; — Query then owns caching,
          refetch-on-focus, retries, and mutation state, which the router
          doesn&apos;t try to replicate.
        </Callout>
      </Topic>

      <Topic id="search-params" no="32" title="Search Params as State">
        <p>
          TanStack Router treats URL search params as fully typed, validated
          state — not raw strings you parse by hand. This makes filters,
          pagination, and sort order shareable via URL and safe to read like
          any other typed value.
        </p>
        <Tsx
          code={`const searchSchema = z.object({
  page: z.number().catch(1),
  sort: z.enum(["newest", "popular"]).catch("newest"),
});

export const Route = createFileRoute("/posts/")({
  validateSearch: searchSchema,
  component: PostsPage,
});

function PostsPage() {
  const { page, sort } = Route.useSearch(); // typed as { page: number; sort: "newest" | "popular" }
  const navigate = Route.useNavigate();

  return (
    <button onClick={() => navigate({ search: prev => ({ ...prev, page: prev.page + 1 }) })}>
      Next page
    </button>
  );
}`}
        />
        <p>
          Because search params are validated with a schema (Zod here, though
          any standard-schema library works), a malformed or missing param
          falls back to your <code>.catch()</code> default instead of
          producing <code>undefined</code> deep in a component.
        </p>
      </Topic>

      <ModuleTitle>Part 8 — TanStack Start: Advanced</ModuleTitle>

      <Topic
        id="ssr-streaming"
        no="33"
        title="SSR Streaming & Deferred Data"
      >
        <p>
          Not every piece of data on a page needs to block the initial
          response. <code>defer</code>-style loading lets Start send the HTML
          shell immediately and stream in slower data as it resolves, using
          Suspense boundaries on the client to show placeholders in the
          meantime.
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/dashboard")({
  loader: async () => {
    // fast, blocking — needed for the initial paint
    const summary = await fetchSummary();
    // slow — don't block on it, stream it in when ready
    const activityPromise = fetchActivityFeed();
    return { summary, activityPromise };
  },
  component: Dashboard,
});

function Dashboard() {
  const { summary, activityPromise } = Route.useLoaderData();
  return (
    <>
      <Summary data={summary} />
      <Suspense fallback={<Spinner />}>
        <Await promise={activityPromise}>
          {(activity) => <ActivityFeed data={activity} />}
        </Await>
      </Suspense>
    </>
  );
}`}
        />
        <p>
          The user sees the shell and the fast data almost immediately; the
          activity feed pops in once its promise resolves, without a second
          round trip from the client.
        </p>
      </Topic>

      <Topic id="middleware" no="34" title="Middleware">
        <p>
          Server function middleware wraps handlers with cross-cutting logic —
          auth checks, logging, request context — without repeating it in
          every function.
        </p>
        <Tsx
          code={`const authMiddleware = createMiddleware().server(async ({ next, context }) => {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return next({ context: { ...context, user: session.user } }); // injects \`user\` downstream
});

const getMyOrders = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    return db.orders.findByUser(context.user.id); // context.user is typed, guaranteed present
  });`}
        />
        <p>
          Middleware composes — a server function can use several, and each
          can add to the typed <code>context</code> object the next one (and
          the final handler) receives.
        </p>
      </Topic>

      <Topic id="auth-patterns" no="35" title="Auth Patterns">
        <p>
          A common shape: a <code>beforeLoad</code> hook on protected routes
          checks auth state before the loader even runs, redirecting
          unauthenticated users early — on the server, before any protected UI
          or data ships to the client.
        </p>
        <Tsx
          code={`export const Route = createFileRoute("/dashboard")({
  beforeLoad: async ({ context }) => {
    const user = await context.getUser();
    if (!user) {
      throw redirect({ to: "/login", search: { redirectTo: "/dashboard" } });
    }
    return { user }; // now available to this route's loader and component
  },
  loader: ({ context }) => fetchDashboardData(context.user.id),
});`}
        />
        <p>
          Because <code>beforeLoad</code> runs during SSR, a logged-out
          visitor is redirected in the server response itself — no flash of
          protected content before a client-side redirect kicks in.
        </p>
      </Topic>

      <Topic id="deployment" no="36" title="Deployment">
        <p>
          TanStack Start builds to standard, portable server output rather
          than locking you to one host — it ships adapters (via Nitro, the
          same engine behind Nuxt) for most common targets.
        </p>
        <Tsx
          code={`// vite.config.ts
export default defineConfig({
  plugins: [
    tanstackStart({
      target: "vercel", // or "netlify", "cloudflare-pages", "node-server", "bun", ...
    }),
  ],
});`}
        />
        <RefTable
          headers={['Target', 'What you get']}
          rows={[
            [
              'Node server',
              'A self-contained Node process, deployable anywhere Node runs (a VM, a container, PM2).',
            ],
            [
              'Edge / serverless',
              "Vercel, Netlify, Cloudflare — the same route tree, loaders, and server functions compile to that platform's function format.",
            ],
            [
              'Static prerendering',
              'Possible per-route for pages with no per-request dynamic data.',
            ],
          ]}
        />
        <Callout>
          Because server functions and loaders are the framework&apos;s own
          primitives — not &quot;API routes&quot; bolted on — switching deploy
          targets is mostly a config change, not a rewrite of how your
          data-fetching code is structured.
        </Callout>
      </Topic>
    </>
  )
}
