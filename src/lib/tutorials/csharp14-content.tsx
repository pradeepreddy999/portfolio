import type { NavGroup } from '#/lib/tutorials/shared'
import {
  Callout,
  Code,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'

export const csharp14Nav: Array<NavGroup> = [
  {
    title: '1 · Foundations',
    items: [
      { id: 't1', label: 'Hello World & CLI' },
      { id: 't2', label: 'Variables & Types' },
      { id: 't3', label: 'Control Flow' },
      { id: 't4', label: 'Methods & Params' },
    ],
  },
  {
    title: '2 · Core OOP',
    items: [
      { id: 't5', label: 'Classes, Structs, Records' },
      { id: 't6', label: 'Constructors & Properties' },
      { id: 't7', label: 'Inheritance & Interfaces' },
      { id: 't8', label: 'Encapsulation' },
    ],
  },
  {
    title: '3 · Type System Depth',
    items: [
      { id: 't9', label: 'Generics' },
      { id: 't10', label: 'Collections & LINQ Basics' },
      { id: 't11', label: 'Nullable Reference Types' },
      { id: 't12', label: 'Enums & Pattern Matching' },
    ],
  },
  {
    title: '4 · Intermediate Tools',
    items: [
      { id: 't13', label: 'Delegates & Events' },
      { id: 't14', label: 'Exception Handling' },
      { id: 't15', label: 'LINQ Deep Dive' },
      { id: 't16', label: 'Extension Methods (classic)' },
    ],
  },
  {
    title: '5 · Async & Memory',
    items: [
      { id: 't17', label: 'async / await' },
      { id: 't18', label: 'Span<T> & Memory' },
      { id: 't19', label: 'IDisposable & GC' },
    ],
  },
  {
    title: '6 · Advanced Language',
    items: [
      { id: 't20', label: 'Reflection & Attributes' },
      { id: 't21', label: 'Source Generators' },
      { id: 't22', label: 'Advanced Pattern Matching' },
      { id: 't23', label: 'Threading & Parallelism' },
    ],
  },
  {
    title: "7 · C# 14 — What's New",
    items: [
      { id: 't24', label: 'Extension Members' },
      { id: 't25', label: 'Null-Conditional Assignment' },
      { id: 't26', label: 'field Keyword' },
      { id: 't27', label: 'Partial Events & Ctors' },
      { id: 't28', label: 'User-Defined Compound Ops' },
      { id: 't29', label: 'Span Conversions & More' },
    ],
  },
  {
    title: '8 · Rounding Out the Language',
    items: [
      { id: 't30', label: 'Arrays' },
      { id: 't31', label: 'Strings Deep Dive' },
      { id: 't32', label: 'Tuples & Deconstruction' },
      { id: 't33', label: 'Operator Overloading & Equality' },
      { id: 't34', label: 'Indexers' },
      { id: 't35', label: 'Iterators (yield return)' },
      { id: 't36', label: 'Boxing, Checked/Unchecked' },
      { id: 't37', label: 'Namespaces & Usings' },
      { id: 't38', label: 'Closures & Anonymous Types' },
      { id: 't39', label: 'required, raw strings, generic math' },
    ],
  },
  {
    title: '9 · Capstone',
    items: [{ id: 't40', label: 'Build Something Fun' }],
  },
]

export function Csharp14Content() {
  return (
    <>
      <ModuleTitle>Module 1 — Foundations</ModuleTitle>

      <Topic id="t1" no="01" title="Hello World & the CLI">
        <p>
          <strong>What&apos;s actually happening:</strong> the C# compiler
          (Roslyn) doesn&apos;t produce machine code directly — it compiles your
          source into <strong>IL (Intermediate Language)</strong>, a
          CPU-agnostic bytecode stored in a <code>.dll</code>/<code>.exe</code>.
          At run time, the .NET runtime&apos;s{' '}
          <strong>JIT (Just-In-Time) compiler</strong> turns that IL into native
          machine code for the CPU it&apos;s actually running on — that&apos;s
          how the same build runs on Windows, Linux, and macOS unmodified. .NET
          also supports <strong>AOT (Ahead-of-Time) compilation</strong> for
          scenarios wanting faster startup and no JIT step, at the cost of
          losing some runtime flexibility.
        </p>
        <p>
          Every C# program used to require a <code>class Program</code> with a{' '}
          <code>static void Main(string[] args)</code> entry point.{' '}
          <strong>Top-level statements</strong> (C# 9+) let you skip that
          ceremony for simple apps — the compiler still generates a{' '}
          <code>Main</code> behind the scenes, you just don&apos;t write it.
        </p>
        <Code
          html={`<span class="cm">// Program.cs — the entire file, no boilerplate</span>
<span class="ty">Console</span>.WriteLine(<span class="str">"Welcome to Maple Street Library!"</span>);`}
        />
        <p>
          The compiler-generated <code>Main</code> still accepts{' '}
          <code>args</code> — you access it via the implicit <code>args</code>{' '}
          variable, no declaration needed:
        </p>
        <Code
          html={`<span class="kw">if</span> (args.Length &gt; 0)
    <span class="ty">Console</span>.WriteLine($<span class="str">"Hello, {args[0]}"</span>);`}
        />
        <h4>The CLI commands you&apos;ll actually use daily</h4>
        <RefTable
          headers={['Command', 'What it does']}
          rows={[
            [
              <code>dotnet new console -n MapleLibrary</code>,
              <>
                Scaffolds a new console app in folder <code>MapleLibrary</code>
              </>,
            ],
            [
              <code>dotnet run</code>,
              'Builds and runs the project in the current folder',
            ],
            [
              <code>dotnet watch</code>,
              'Re-runs automatically on file save — great for tight iteration',
            ],
            [<code>dotnet build</code>, 'Compiles without running'],
            [<code>dotnet test</code>, 'Runs unit tests in a test project'],
            [
              <code>dotnet publish -c Release</code>,
              'Produces an optimized, deployable build',
            ],
          ]}
        />
        <p>
          Every project has a <code>.csproj</code> XML file describing the
          target framework and dependencies:
        </p>
        <Code
          html={`&lt;Project Sdk=<span class="str">"Microsoft.NET.Sdk"</span>&gt;
  &lt;PropertyGroup&gt;
    &lt;OutputType&gt;Exe&lt;/OutputType&gt;
    &lt;TargetFramework&gt;net10.0&lt;/TargetFramework&gt;
    &lt;Nullable&gt;enable&lt;/Nullable&gt;
    &lt;ImplicitUsings&gt;enable&lt;/ImplicitUsings&gt;
  &lt;/PropertyGroup&gt;
&lt;/Project&gt;`}
        />
        <Callout variant="new">
          <strong>C# 14 bonus — file-based apps:</strong> you can now run a bare{' '}
          <code>.cs</code> file with zero <code>.csproj</code>:{' '}
          <code>dotnet run app.cs</code>. New preprocessor directives let that
          single file declare its own SDK, package references, and target
          framework inline — perfect for quick scripts and prototyping without
          scaffolding a whole project.
        </Callout>
      </Topic>

      <Topic id="t2" no="02" title="Variables & Types">
        <p>
          C#&apos;s type system splits into <strong>predefined types</strong> (
          <code>int</code>, <code>bool</code>, <code>string</code> — really just
          aliases for .NET BCL types like <code>System.Int32</code>) and{' '}
          <strong>user-defined types</strong> (your own <code>class</code>/
          <code>struct</code>/<code>enum</code>). Physically, value-type locals
          typically live on the <strong>stack</strong> — fast to allocate,
          automatically reclaimed when the method returns — while reference-type
          instances live on the <strong>heap</strong>, managed by the garbage
          collector, with only the reference itself on the stack. This is why
          passing a large struct around by value can get expensive: you&apos;re
          copying the whole block of memory each time, not just a pointer.
        </p>
        <p>
          C# is <strong>statically typed</strong> — every variable&apos;s type
          is known at compile time, catching a huge class of bugs before you
          ever run the program. <code>var</code> is not dynamic typing; it just
          asks the compiler to infer the type from the right-hand side. Once
          inferred, the type is fixed forever for that variable.
        </p>
        <Code
          html={`<span class="kw">int</span> copiesAvailable = 3;
<span class="kw">string</span> title = <span class="str">"Frankenstein"</span>;
<span class="kw">var</span> isOverdue = <span class="kw">true</span>;    <span class="cm">// inferred as bool — cannot later become a string</span>
<span class="kw">var</span> loans = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;(); <span class="cm">// inferred as List&lt;string&gt;</span>`}
        />
        <h4>Value types vs. reference types</h4>
        <p>
          This distinction matters more than almost anything else early on.{' '}
          <strong>Value types</strong> (<code>int</code>, <code>double</code>,{' '}
          <code>bool</code>, <code>struct</code>) hold their data directly and
          are copied on assignment. <strong>Reference types</strong> (
          <code>class</code>, <code>string</code>, arrays, collections) hold a
          reference to data elsewhere — assignment copies the reference, not the
          data.
        </p>
        <Code
          html={`<span class="kw">int</span> a = 5;
<span class="kw">int</span> b = a;      <span class="cm">// full copy — independent value</span>
b = 10;          <span class="cm">// a is still 5</span>

<span class="kw">var</span> shelfA = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt; { <span class="str">"Frankenstein"</span> };
<span class="kw">var</span> shelfB = shelfA;   <span class="cm">// same list! not a copy</span>
shelfB.Add(<span class="str">"Dracula"</span>);    <span class="cm">// shelfA now has 2 books too</span>`}
        />
        <Callout variant="warn">
          <strong>Gotcha:</strong> <code>string</code> is a reference type but
          behaves like a value type because it&apos;s <em>immutable</em> — every
          &quot;modification&quot; actually creates a new string. That&apos;s
          why <code>string</code> comparisons with <code>==</code> compare
          content, not reference identity, unlike most classes.
        </Callout>
        <h4>const vs. readonly</h4>
        <Code
          html={`<span class="kw">const</span> <span class="kw">int</span> MaxActiveLoans = 5;     <span class="cm">// compile-time constant, must be a literal</span>
<span class="kw">readonly</span> <span class="kw">int</span> _loanPeriodDays;  <span class="cm">// set once, in constructor, can vary per instance</span>`}
        />
      </Topic>

      <Topic id="t3" no="03" title="Control Flow">
        <p>
          Two behaviors worth internalizing early: <code>&amp;&amp;</code> and{' '}
          <code>||</code> <strong>short-circuit</strong> — the right-hand side
          is never evaluated if the left already determines the result, which is
          why <code>{'member != null && member.ActiveLoans > 0'}</code> is safe
          and won&apos;t throw even if <code>member</code> is null. C# also
          enforces <strong>definite assignment</strong>: the compiler refuses to
          build if a variable might be read before every code path has assigned
          it, eliminating a whole class of &quot;uninitialized variable&quot;
          bugs that plague languages without this check.
        </p>
        <p>
          C# has the usual suspects — <code>if</code>/<code>else</code>,{' '}
          <code>for</code>, <code>while</code>, <code>do...while</code>,{' '}
          <code>foreach</code> — plus a <code>switch</code> that&apos;s grown
          into one of the most powerful constructs in the language.
        </p>
        <Code
          html={`<span class="kw">for</span> (<span class="kw">int</span> i = 0; i &lt; 3; i++)
    <span class="ty">Console</span>.WriteLine($<span class="str">"Reminder #{i + 1}"</span>);

<span class="kw">foreach</span> (<span class="kw">var</span> loan <span class="kw">in</span> loans)
    <span class="ty">Console</span>.WriteLine(loan);

<span class="kw">int</span> renewalsLeft = 3;
<span class="kw">while</span> (renewalsLeft &gt; 0) { renewalsLeft--; }

<span class="kw">do</span> { <span class="ty">Console</span>.WriteLine(<span class="str">"Runs at least once"</span>); } <span class="kw">while</span> (<span class="kw">false</span>);`}
        />
        <h4>switch statement vs. switch expression</h4>
        <p>
          The classic <code>switch</code> <em>statement</em> executes code per
          case. The newer <code>switch</code> <em>expression</em> (C# 8+)
          evaluates to a value — much more concise for &quot;map input to
          output&quot; logic.
        </p>
        <Code
          html={`<span class="kw">int</span> daysOverdue = (<span class="ty">DateTime</span>.Today - dueOn).Days;

<span class="cm">// classic statement form</span>
<span class="kw">switch</span> (daysOverdue)
{
    <span class="kw">case</span> 0: <span class="ty">Console</span>.WriteLine(<span class="str">"Due today"</span>); <span class="kw">break</span>;
    <span class="kw">case</span> 1: <span class="ty">Console</span>.WriteLine(<span class="str">"Overdue by 1 day"</span>); <span class="kw">break</span>;
    <span class="kw">default</span>: <span class="ty">Console</span>.WriteLine(<span class="str">"Check the due date"</span>); <span class="kw">break</span>;
}

<span class="cm">// expression form — assigns a value, no break needed</span>
<span class="kw">string</span> notice = daysOverdue <span class="kw">switch</span>
{
    0    =&gt; <span class="str">"Due today"</span>,
    &lt; 0  =&gt; <span class="str">"Not due yet"</span>,
    &gt; 30 =&gt; <span class="str">"Long overdue"</span>,
    _    =&gt; <span class="str">"Overdue"</span>
};`}
        />
        <p>
          Ternary for one-liners:{' '}
          <code>
            {'string status = copiesAvailable > 0 ? "Available" : "On loan";'}
          </code>
          . <code>break</code>/<code>continue</code> control loop flow;{' '}
          <code>goto</code> exists but is rarely used outside generated code or
          complex <code>switch</code> fall-through.
        </p>
      </Topic>

      <Topic id="t4" no="04" title="Methods & Parameters">
        <p>
          When multiple overloads of a method could match a call, the compiler
          picks the <strong>most specific</strong> one at compile time (not run
          time) — this is why adding an overload can change which method an
          existing call resolves to, a subtle source of behavior changes when
          you extend an API. Every method call pushes a new{' '}
          <strong>stack frame</strong> holding parameters, locals, and the
          return address; deep recursion without a base case exhausts the stack
          and throws <code>StackOverflowException</code> — one of the few
          exceptions you cannot catch, because by the time it&apos;s thrown
          there&apos;s no stack left to run a handler on.
        </p>
        <p>
          Beyond ordinary parameters, C# gives you several passing mechanisms
          and shortcuts worth knowing early.
        </p>
        <Code
          html={`<span class="kw">void</span> Renew(<span class="kw">ref</span> <span class="kw">int</span> daysLeft, <span class="kw">out</span> <span class="kw">int</span> extraDays)
{
    extraDays = 14;         <span class="cm">// out params MUST be assigned before returning</span>
    daysLeft += extraDays;  <span class="cm">// ref modifies the caller's variable directly</span>
}

<span class="kw">int</span> daysLeft = 2;
Renew(<span class="kw">ref</span> daysLeft, <span class="kw">out</span> <span class="kw">int</span> added);
<span class="cm">// daysLeft is 16, added is 14</span>`}
        />
        <p>
          <code>in</code> is like <code>ref</code> but read-only — useful for
          passing large structs without copying them, while guaranteeing the
          callee can&apos;t mutate the caller&apos;s data.
        </p>
        <h4>Default parameters, named arguments, params arrays</h4>
        <Code
          html={`<span class="kw">void</span> Borrow(<span class="kw">string</span> title, <span class="kw">int</span> days = 14, <span class="kw">bool</span> isPremium = <span class="kw">false</span>) { }

Borrow(<span class="str">"Dracula"</span>);                          <span class="cm">// uses defaults</span>
Borrow(<span class="str">"Dracula"</span>, isPremium: <span class="kw">true</span>);       <span class="cm">// named arg, skip days</span>
Borrow(days: 28, title: <span class="str">"Dracula"</span>);          <span class="cm">// any order with named args</span>

<span class="kw">void</span> PlaceHolds(<span class="kw">params</span> <span class="kw">string</span>[] titles) { } <span class="cm">// variable argument count</span>
PlaceHolds(<span class="str">"Moby-Dick"</span>, <span class="str">"The Time Machine"</span>, <span class="str">"Dracula"</span>);`}
        />
        <h4>Expression-bodied methods & local functions</h4>
        <Code
          html={`<span class="kw">int</span> Double(<span class="kw">int</span> x) =&gt; x * 2; <span class="cm">// one-liner, no braces/return needed</span>

<span class="kw">int</span> ComputeFine(<span class="kw">int</span> daysOverdue)
{
    <span class="kw">int</span> ToCents(<span class="kw">int</span> d) =&gt; d * 25; <span class="cm">// local function — scoped to this method</span>
    <span class="kw">return</span> ToCents(daysOverdue);
}`}
        />
      </Topic>

      <ModuleTitle>Module 2 — Core OOP</ModuleTitle>

      <Topic id="t5" no="05" title="Classes, Structs & Records">
        <p>
          The deeper reason this choice matters: a <code>class</code> instance
          requires a heap allocation and GC tracking every time you create one,
          while a local <code>struct</code> often needs no heap allocation at
          all — the JIT can keep it entirely in registers or on the stack. For a
          type created millions of times per second (a 2D point in a physics
          loop, say), that difference is the whole performance story. The rule
          of thumb: reach for <code>struct</code> only when the type is small (a
          few fields), logically a single value, and ideally immutable —
          otherwise default to <code>class</code> or <code>record</code>.
        </p>
        <p>
          Three ways to define a type, each with different defaults for
          allocation and equality:
        </p>
        <RefTable
          headers={['Kind', 'Allocation', 'Equality', 'Best for']}
          rows={[
            [
              <code>class</code>,
              'Heap (reference type)',
              'Reference (identity) by default',
              'Entities with identity/behavior, mutable state',
            ],
            [
              <code>struct</code>,
              'Stack/inline (value type)',
              'Member-wise by default',
              <>
                Small, immutable-ish data: <code>Point</code>,{' '}
                <code>Vector3</code>
              </>,
            ],
            [
              <code>record</code>,
              'Heap (reference type)',
              'Member-wise (value) automatically',
              'Immutable data carriers, DTOs, events',
            ],
          ]}
        />
        <Code
          html={`<span class="kw">public</span> <span class="kw">record</span> Book(<span class="kw">string</span> Title, <span class="kw">int</span> Year);

<span class="kw">var</span> book1 = <span class="kw">new</span> Book(<span class="str">"Frankenstein"</span>, 1818);
<span class="kw">var</span> book2 = <span class="kw">new</span> Book(<span class="str">"Frankenstein"</span>, 1818);
<span class="ty">Console</span>.WriteLine(book1 == book2); <span class="cm">// true — compares values, not references</span>

<span class="cm">// non-destructive mutation with 'with'</span>
<span class="kw">var</span> revised = book1 <span class="kw">with</span> { Year = 1831 };
<span class="cm">// book1 is untouched; revised is a new record</span>`}
        />
        <p>
          There&apos;s also <code>record struct</code> (value-type record, C#
          10+) and <code>readonly struct</code> for a struct that&apos;s
          guaranteed immutable — the compiler enforces every field stays
          read-only.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">readonly</span> <span class="kw">struct</span> Point(<span class="kw">int</span> X, <span class="kw">int</span> Y);
<span class="kw">public</span> <span class="kw">record</span> <span class="kw">struct</span> Coords(<span class="kw">int</span> X, <span class="kw">int</span> Y); <span class="cm">// value-type record, copied not shared</span>`}
        />
        <Callout variant="warn">
          <strong>Gotcha:</strong> structs get expensive to copy if they grow
          large (many fields). If a struct is bigger than ~16 bytes and passed
          around a lot, either make it a class or pass it with <code>in</code>/
          <code>ref</code>.
        </Callout>
      </Topic>

      <Topic id="t6" no="06" title="Constructors & Properties">
        <p>
          Object construction happens in a fixed order worth memorizing when
          debugging weird initial-state bugs: field initializers and property
          initializers run first (top to bottom, in declaration order), then the
          base class&apos;s constructor runs, then finally your own constructor
          body executes. A property that looks like a plain field (
          <code>public int CopiesAvailable {'{ get; set; }'}</code>) is actually
          compiled into a private backing field plus two real methods (
          <code>get_CopiesAvailable()</code>/<code>set_CopiesAvailable()</code>)
          — which is exactly why you can later add validation logic to the
          setter without breaking any code that calls{' '}
          <code>book.CopiesAvailable = 2</code>, since callers were never
          touching a raw field to begin with.
        </p>
        <p>
          Auto-properties generate the backing field for you. <code>init</code>{' '}
          (C# 9+) allows a property to be set during object initialization only
          — giving you immutability without a constructor parameter for every
          field.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Book
{
    <span class="kw">public</span> <span class="kw">string</span> Title { get; init; }
    <span class="kw">public</span> <span class="kw">int</span> CopiesAvailable { get; <span class="kw">set</span>; } = 1; <span class="cm">// default value</span>

    <span class="kw">public</span> Book(<span class="kw">string</span> title) =&gt; Title = title;
}

<span class="kw">var</span> book = <span class="kw">new</span> Book(<span class="str">"Pride and Prejudice"</span>) { CopiesAvailable = 3 }; <span class="cm">// object initializer</span>`}
        />
        <h4>Primary constructors (C# 12+)</h4>
        <p>
          Classes and structs can declare constructor parameters right on the
          type declaration — no separate constructor body needed for simple
          cases.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Book(<span class="kw">string</span> title)
{
    <span class="kw">public</span> <span class="kw">string</span> Title { get; } = title;  <span class="cm">// use the primary ctor parameter directly</span>
    <span class="kw">public</span> <span class="kw">int</span> CopiesAvailable { get; <span class="kw">set</span>; } = 1;
}`}
        />
        <h4>Static constructors</h4>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> LibraryConfig
{
    <span class="kw">public</span> <span class="kw">static</span> <span class="kw">readonly</span> <span class="kw">int</span> MaxActiveLoans;
    <span class="kw">static</span> LibraryConfig() =&gt; MaxActiveLoans = 5; <span class="cm">// runs once, before first use</span>
}`}
        />
      </Topic>

      <Topic id="t7" no="07" title="Inheritance & Interfaces">
        <p>
          C# deliberately restricts a class to <strong>one</strong> base class —
          this sidesteps the &quot;diamond problem&quot; that multiple class
          inheritance creates in languages like C++ (ambiguity when two base
          classes define the same member). Interfaces sidestep the diamond
          problem differently: they carry no state of their own, so implementing
          several is safe. Under the hood, calling a <code>virtual</code> method
          goes through a per-type <strong>vtable</strong> (virtual method table)
          lookup rather than jumping straight to the method address — the small
          runtime cost that makes polymorphism possible, and why{' '}
          <code>sealed</code> methods (which skip the vtable) can be marginally
          faster in extremely hot code paths.
        </p>
        <p>
          A class inherits from exactly one base class (single inheritance) but
          can implement any number of interfaces. <code>virtual</code>/
          <code>override</code> control polymorphic behavior;{' '}
          <code>sealed</code> stops further overriding.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">interface</span> IBorrowable
{
    <span class="kw">int</span> LoanDays();
}

<span class="kw">public</span> <span class="kw">class</span> LibraryItem
{
    <span class="kw">public</span> <span class="kw">virtual</span> <span class="kw">string</span> Describe() =&gt; <span class="str">"A library item"</span>;
}

<span class="kw">public</span> <span class="kw">sealed</span> <span class="kw">class</span> Book : LibraryItem, IBorrowable
{
    <span class="kw">public</span> <span class="kw">int</span> LoanDays() =&gt; 14;
    <span class="kw">public</span> <span class="kw">override</span> <span class="kw">string</span> Describe() =&gt; <span class="str">"A book, borrowable for 14 days"</span>;
    <span class="cm">// 'sealed' means nothing can inherit from Book further</span>
}
<span class="cm">// Dvd and Magazine derive from LibraryItem the same way</span>`}
        />
        <h4>Default interface methods (C# 8+)</h4>
        <p>
          Interfaces can now provide a default implementation — useful for
          adding new members to an interface without breaking every existing
          implementer.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">interface</span> IBorrowable
{
    <span class="kw">int</span> LoanDays();
    <span class="kw">int</span> PremiumLoanDays() =&gt; LoanDays() * 2; <span class="cm">// default implementation</span>
}`}
        />
        <p>
          Explicit interface implementation hides a member unless accessed
          through the interface type — handy when a class implements two
          interfaces with clashing member names.
        </p>
      </Topic>

      <Topic id="t8" no="08" title="Encapsulation">
        <p>
          The real payoff of encapsulation isn&apos;t hiding data for its own
          sake — it&apos;s that a class can change its <em>internal</em>{' '}
          implementation freely as long as its <em>public</em> contract stays
          the same, without breaking any code that depends on it. A{' '}
          <code>FineAccount</code> that exposes <code>AddFine(int)</code> and a
          read-only <code>BalanceCents</code> can switch its internal storage
          from an <code>int</code> field to a database call later, and every
          caller keeps working unchanged. Exposing raw mutable fields instead
          locks you into that exact representation forever, because any external
          code could be reading or writing it directly.
        </p>
        <p>The full access-modifier picture:</p>
        <RefTable
          headers={['Modifier', 'Visible from']}
          rows={[
            [
              <code>private</code>,
              'Same class only (default for class members)',
            ],
            [<code>protected</code>, 'Same class + derived classes'],
            [<code>internal</code>, 'Same assembly (project)'],
            [
              <code>protected internal</code>,
              'Same assembly OR derived classes anywhere',
            ],
            [
              <code>private protected</code>,
              'Derived classes, same assembly only',
            ],
            [<code>public</code>, 'Anywhere'],
          ]}
        />
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> FineAccount
{
    <span class="kw">private</span> <span class="kw">int</span> _balanceCents = 0;
    <span class="kw">public</span> <span class="kw">void</span> AddFine(<span class="kw">int</span> cents)
    {
        <span class="kw">if</span> (cents &lt; 0) <span class="kw">throw</span> <span class="kw">new</span> <span class="ty">ArgumentException</span>(<span class="str">"A fine can't be negative"</span>);
        _balanceCents += cents;
    }
    <span class="kw">public</span> <span class="kw">int</span> BalanceCents =&gt; _balanceCents; <span class="cm">// read-only view, get-only property</span>
}`}
        />
        <p>
          Properties can also have asymmetric accessibility — a public getter
          with a private setter is the most common pattern for &quot;readable
          everywhere, writable only inside the class&quot;:
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">int</span> BalanceCents { get; <span class="kw">private</span> <span class="kw">set</span>; }`}
        />
      </Topic>

      <ModuleTitle>Module 3 — Type System Depth</ModuleTitle>

      <Topic id="t9" no="09" title="Generics">
        <p>
          Unlike Java&apos;s generics (which use type erasure — generic type
          info disappears at runtime), .NET generics are{' '}
          <strong>reified</strong>: the runtime generates a specialized native
          implementation per value-type argument (a real{' '}
          <code>{'List<int>'}</code> stores raw ints inline, no boxing) while
          reference-type arguments share one compiled implementation (since
          they&apos;re all just pointers underneath). That&apos;s a genuine
          performance win over the pre-generics era, where a collection like{' '}
          <code>ArrayList</code> could only store <code>object</code>, forcing
          every value type in and out of it to box and unbox.
        </p>
        <p>
          Generics let one type or method work across many types safely — no
          boxing, no casting, full compile-time checking.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Shelf&lt;T&gt;
{
    <span class="kw">private</span> <span class="kw">readonly</span> List&lt;T&gt; _items = <span class="kw">new</span>();
    <span class="kw">public</span> <span class="kw">void</span> Add(T item) =&gt; _items.Add(item);
    <span class="kw">public</span> T StaffPick() =&gt; _items[<span class="kw">new</span> <span class="ty">Random</span>().Next(_items.Count)];
}

<span class="kw">var</span> shelf = <span class="kw">new</span> Shelf&lt;<span class="kw">string</span>&gt;();
shelf.Add(<span class="str">"Dracula"</span>); shelf.Add(<span class="str">"Frankenstein"</span>);`}
        />
        <h4>Constraints — narrowing what T can be</h4>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Repository&lt;T&gt; <span class="kw">where</span> T : <span class="kw">class</span>, <span class="kw">new</span>() <span class="cm">// e.g. Repository&lt;Member&gt;</span>
{
    <span class="kw">public</span> T CreateDefault() =&gt; <span class="kw">new</span> T(); <span class="cm">// 'new()' constraint allows this</span>
}

<span class="kw">public</span> <span class="kw">int</span> Sum&lt;T&gt;(List&lt;T&gt; items) <span class="kw">where</span> T : <span class="ty">System</span>.Numerics.INumber&lt;T&gt;
{
    <span class="cm">// constrained to numeric types — can use +, -, etc. generically</span>
}`}
        />
        <p>
          <code>out</code>/<code>in</code> on generic interface type parameters
          enable covariance and contravariance (why{' '}
          <code>{'IEnumerable<string>'}</code> can be used where{' '}
          <code>{'IEnumerable<object>'}</code> is expected) — a subtle topic
          worth knowing exists, rarely something you write yourself.
        </p>
      </Topic>

      <Topic id="t10" no="10" title="Collections & LINQ Basics">
        <p>
          Picking the right collection is really a Big-O decision:{' '}
          <code>{'List<T>'}</code> gives O(1) index access but O(n) to find an
          item by value or insert in the middle;{' '}
          <code>{'Dictionary<K,V>'}</code> and <code>{'HashSet<T>'}</code> give
          O(1) average lookup/insert via hashing, at the cost of no guaranteed
          order; <code>{'Queue<T>'}</code>/<code>{'Stack<T>'}</code> give O(1)
          at one end only. Reaching for a <code>{'List<T>'}</code> and doing{' '}
          <code>.Contains()</code> in a hot loop over thousands of items is a
          very common, very fixable performance mistake — swapping in a{' '}
          <code>{'HashSet<T>'}</code> for membership checks alone can turn an
          O(n²) algorithm into O(n).
        </p>
        <RefTable
          headers={['Collection', 'Use it for']}
          rows={[
            [
              <code>{'List<T>'}</code>,
              'Ordered, resizable sequence — the default choice',
            ],
            [<code>{'Dictionary<K,V>'}</code>, 'Fast key lookup'],
            [
              <code>{'HashSet<T>'}</code>,
              'Unique items, fast membership checks',
            ],
            [
              <code>{'Queue<T>'}</code>,
              'FIFO — reservation queues, task queues',
            ],
            [<code>{'Stack<T>'}</code>, 'LIFO — undo history, DFS traversal'],
          ]}
        />
        <Code
          html={`<span class="kw">var</span> books = <span class="kw">new</span> List&lt;Book&gt; { book, <span class="kw">new</span>(<span class="str">"Moby-Dick"</span>) { CopiesAvailable = 1 } };

<span class="kw">var</span> lastCopies = books.Where(b =&gt; b.CopiesAvailable &lt; 2)
                       .Select(b =&gt; b.Title)
                       .ToList();

<span class="kw">var</span> mostCopies = books.OrderByDescending(b =&gt; b.CopiesAvailable).First();
<span class="kw">var</span> byTitle = books.ToDictionary(b =&gt; b.Title);`}
        />
      </Topic>

      <Topic id="t11" no="11" title="Nullable Reference Types">
        <p>
          It helps to know these are unrelated, despite the similar name, to{' '}
          <strong>nullable value types</strong> (<code>int?</code>, formally{' '}
          <code>{'Nullable<int>'}</code>) — value types can&apos;t be null at
          all without that wrapper, since they&apos;re not references to begin
          with. Nullable <em>reference</em> types (this topic) are purely a
          compiler annotation feature: <code>string?</code> and{' '}
          <code>string</code> compile to the exact same IL and have identical
          runtime behavior — the only difference is which one the compiler warns
          you about when you might be dereferencing null. It&apos;s opt-in per
          project (or even per file with <code>#nullable enable</code>), which
          is exactly why older codebases you might integrate with often
          don&apos;t have it turned on at all.
        </p>
        <p>
          With <code>{'<Nullable>enable</Nullable>'}</code> (the default in new
          projects), the compiler tracks nullability as part of the type system
          and warns when you might dereference null — all at compile time, at
          zero runtime cost.
        </p>
        <Code
          html={`<span class="kw">string</span>? maybeTitle = FindTitleByIsbn(isbn); <span class="cm">// explicitly nullable</span>
<span class="kw">string</span> heading = maybeTitle?.ToUpper() ?? <span class="str">"No book found"</span>;

<span class="cm">// the null-forgiving operator — "trust me, compiler"</span>
<span class="kw">string</span> definitelyThere = maybeTitle!;

<span class="cm">// modern guard clause, .NET 7+</span>
<span class="ty">ArgumentNullException</span>.ThrowIfNull(maybeTitle);`}
        />
        <Callout variant="warn">
          <strong>Gotcha:</strong> nullable reference types are a
          compile-time-only warning system — they don&apos;t prevent null at
          runtime. A library compiled without them, or an <code>!</code>{' '}
          null-forgiving operator used carelessly, can still hand you a null.
        </Callout>
      </Topic>

      <Topic id="t12" no="12" title="Enums & Pattern Matching">
        <p>
          An <code>enum</code> is really just a named wrapper around an
          underlying integral type (<code>int</code> by default, but you can
          specify <code>byte</code>, <code>long</code>, etc.) — which is why
          casting between an enum and its numeric value is always allowed, and
          why an enum variable can technically hold a value with no matching
          named member (nothing stops <code>(LoanStatus)99</code>).{' '}
          <code>[Flags]</code> enums lean into this directly: each member is a
          distinct bit (1, 2, 4, 8...) so they can be combined with bitwise OR
          and tested with <code>HasFlag</code> or a bitwise AND, letting one
          variable represent several simultaneous states cheaply.
        </p>
        <Code
          html={`<span class="kw">enum</span> LoanStatus { Active, Overdue, Returned }

[Flags]
<span class="kw">enum</span> BookFlags { <span class="kw">None</span> = 0, Damaged = 1, ReferenceOnly = 2, NewArrival = 4 }

<span class="kw">var</span> flags = BookFlags.Damaged | BookFlags.NewArrival; <span class="cm">// combine flags</span>
<span class="kw">bool</span> isDamaged = flags.HasFlag(BookFlags.Damaged);`}
        />
        <p>
          Pattern matching goes well beyond type checks — property patterns,
          relational patterns, and logical combinators (<code>and</code>/
          <code>or</code>/<code>not</code>) compose freely:
        </p>
        <Code
          html={`<span class="kw">record</span> Loan(<span class="kw">string</span> Title, LoanStatus Status, <span class="kw">int</span> DaysOverdue);

<span class="kw">string</span> Describe(Loan? l) =&gt; l <span class="kw">switch</span>
{
    { Status: LoanStatus.Overdue, DaysOverdue: &gt; 30 } =&gt; <span class="str">"Bill the replacement cost"</span>,
    { Status: LoanStatus.Returned } <span class="kw">or</span> { DaysOverdue: &lt; 1 } =&gt; <span class="str">"Nothing owed"</span>,
    <span class="kw">not</span> <span class="kw">null</span> =&gt; <span class="str">"Fine accruing"</span>,
    <span class="kw">null</span> =&gt; <span class="str">"No loan"</span>
};

<span class="cm">// 'is' pattern matching, outside switch entirely</span>
<span class="kw">if</span> (l <span class="kw">is</span> { DaysOverdue: &gt; 14 } late)
    <span class="ty">Console</span>.WriteLine($<span class="str">"{late.Title} is very late"</span>);`}
        />
      </Topic>

      <ModuleTitle>Module 4 — Intermediate Tools</ModuleTitle>

      <Topic id="t13" no="13" title="Delegates & Events">
        <p>
          A delegate isn&apos;t a primitive language feature bolted on —
          it&apos;s a real class the compiler generates for you, with an{' '}
          <code>Invoke</code> method and internally an{' '}
          <strong>invocation list</strong> of every method attached via{' '}
          <code>+=</code>. That&apos;s the mechanism behind multicast: calling a
          delegate with three subscribers runs all three in the order they were
          added, and if one throws, the rest never execute — a common surprise
          when debugging &quot;why didn&apos;t my second handler run.&quot; An{' '}
          <code>event</code> compiles down to a delegate field plus
          compiler-generated <code>add</code>/<code>remove</code> accessors,
          which is exactly why outside code can subscribe/ unsubscribe but never
          call <code>Invoke</code> or overwrite the whole list directly.
        </p>
        <p>
          Delegates are type-safe function references — they can hold multiple
          methods (multicast). <code>Action</code>/<code>Func</code>/
          <code>Predicate</code> are built-in generic delegate types so you
          rarely declare your own. Events wrap a delegate field so only the
          declaring class can invoke it — outsiders may only <code>+=</code>/
          <code>-=</code>.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Loan
{
    <span class="kw">public</span> <span class="kw">event</span> Action? BookReturned;            <span class="cm">// no data</span>
    <span class="kw">public</span> <span class="kw">event</span> Action&lt;<span class="kw">int</span>&gt;? FineCharged;       <span class="cm">// carries an int (cents)</span>

    <span class="kw">public</span> <span class="kw">void</span> ChargeFine(<span class="kw">int</span> cents)
    {
        FineCharged?.Invoke(cents);         <span class="cm">// ?. guards against zero subscribers</span>
    }
    <span class="kw">public</span> <span class="kw">void</span> Return() =&gt; BookReturned?.Invoke();
}

<span class="kw">var</span> loan = <span class="kw">new</span> Loan();
loan.BookReturned += () =&gt; <span class="ty">Console</span>.WriteLine(<span class="str">"Notify the next hold in the queue"</span>);
loan.FineCharged  += cents =&gt; <span class="ty">Console</span>.WriteLine($<span class="str">"Fine: {cents} cents"</span>);
loan.FineCharged  += cents =&gt; <span class="ty">Console</span>.WriteLine(<span class="str">"(second handler, multicast!)"</span>);
loan.ChargeFine(75);
loan.Return();`}
        />
        <Callout variant="warn">
          <strong>Why events instead of a public delegate field?</strong> A
          public <code>Action</code> field lets any outside code call{' '}
          <code>BookReturned = null</code>, wiping out every other subscriber,
          or invoke it directly. <code>event</code> prevents both —
          encapsulation applied to callbacks.
        </Callout>
      </Topic>

      <Topic id="t14" no="14" title="Exception Handling">
        <p>
          Throwing an exception is genuinely expensive relative to a normal
          return — the runtime has to capture a full stack trace and unwind
          frames looking for a matching <code>catch</code>, which can be orders
          of magnitude slower than a regular method call. That&apos;s the
          practical reason exceptions are for truly <em>exceptional</em>,
          unexpected situations, not routine control flow — a &quot;user typed
          an invalid menu option&quot; case belongs in an ordinary{' '}
          <code>if</code>/return-value check, not a <code>throw</code>.
          It&apos;s also why a <code>try</code> block with no exception thrown
          costs essentially nothing at runtime — the overhead only exists on the
          actual throw/catch path, not on entry to the block.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> BookUnavailableException(<span class="kw">string</span> title) : <span class="ty">Exception</span>($<span class="str">"{title} has no copies available"</span>);

<span class="kw">try</span>
{
    <span class="kw">if</span> (copiesAvailable &lt;= 0) <span class="kw">throw</span> <span class="kw">new</span> BookUnavailableException(<span class="str">"Moby-Dick"</span>);
}
<span class="kw">catch</span> (BookUnavailableException ex) <span class="kw">when</span> (ex.Message.Contains(<span class="str">"Moby-Dick"</span>)) <span class="cm">// exception filter</span>
{
    <span class="ty">Console</span>.WriteLine($<span class="str">"Special handling: {ex.Message}"</span>);
}
<span class="kw">catch</span> (<span class="ty">Exception</span> ex)
{
    <span class="ty">Console</span>.WriteLine($<span class="str">"Generic: {ex.Message}"</span>);
    <span class="kw">throw</span>; <span class="cm">// re-throw preserving original stack trace — never 'throw ex;'</span>
}
<span class="kw">finally</span>
{
    <span class="ty">Console</span>.WriteLine(<span class="str">"Checkout attempt finished."</span>); <span class="cm">// always runs, even after a throw</span>
}`}
        />
        <Callout variant="warn">
          <strong>Gotcha:</strong> <code>throw ex;</code> resets the stack trace
          to this line, hiding where the exception actually originated. Bare{' '}
          <code>throw;</code> preserves it. Also — catch specific exception
          types, never a bare <code>catch (Exception)</code> in library code;
          you&apos;ll swallow bugs you should have seen.
        </Callout>
      </Topic>

      <Topic id="t15" no="15" title="LINQ Deep Dive">
        <p>
          The reason the exact same LINQ syntax can run either in-process or as
          a SQL query comes down to what a lambda compiles into. Against{' '}
          <code>{'IEnumerable<T>'}</code>,{' '}
          <code>{'b => b.CopiesAvailable > 0'}</code> compiles to an ordinary
          delegate — actual executable code. Against{' '}
          <code>{'IQueryable<T>'}</code> (Entity Framework and similar), the
          same lambda instead compiles to an <strong>expression tree</strong> —
          a data structure describing the logic (&quot;compare property
          CopiesAvailable to constant 0&quot;) rather than executable code —
          which the provider then walks and translates into SQL before anything
          runs. That&apos;s also why certain things work in LINQ-to-Objects but
          throw at runtime in EF queries: an arbitrary C# method has no SQL
          translation, so it can&apos;t be turned into an expression tree the
          database understands.
        </p>
        <p>
          Most LINQ operators are <strong>lazily evaluated (deferred)</strong> —
          building a query doesn&apos;t run it; enumerating it does (via{' '}
          <code>foreach</code>, <code>.ToList()</code>, <code>.Count()</code>,
          etc.).
        </p>
        <Code
          html={`<span class="kw">var</span> query = books.Where(b =&gt; b.CopiesAvailable &gt; 0); <span class="cm">// not executed yet — just a plan</span>
books.Add(<span class="kw">new</span>(<span class="str">"Dracula"</span>) { CopiesAvailable = 2 });
<span class="kw">foreach</span> (<span class="kw">var</span> b <span class="kw">in</span> query) { }         <span class="cm">// NOW it runs — Dracula IS included</span>`}
        />
        <Callout variant="warn">
          <strong>Gotcha — multiple enumeration:</strong> if you enumerate the
          same deferred query twice (e.g. once for <code>.Count()</code>, again
          in a <code>foreach</code>), it re-runs the whole pipeline each time —
          expensive for database queries (<code>IQueryable</code>) or anything
          with side effects. Call <code>.ToList()</code> once if you need to use
          results more than once.
        </Callout>
        <Code
          html={`<span class="kw">var</span> byGenre = catalog.GroupBy(b =&gt; b.Genre);
<span class="kw">var</span> totalCopies = catalog.Aggregate(0, (sum, b) =&gt; sum + b.CopiesTotal);
<span class="kw">var</span> atBoth = downtown.Join(riverside, d =&gt; d.Title, r =&gt; r.Title, (d, r) =&gt; d);`}
        />
        <p>
          <code>{'IEnumerable<T>'}</code> runs in-memory, C# code, item by item.{' '}
          <code>{'IQueryable<T>'}</code> (Entity Framework etc.) translates your
          LINQ into SQL and runs it in the database — same syntax, very
          different execution model.
        </p>
      </Topic>

      <Topic id="t16" no="16" title="Extension Methods (classic)">
        <p>
          Extension methods are pure compiler sugar —{' '}
          <code>book.IsAvailable()</code> compiles to exactly{' '}
          <code>BookExtensions.IsAvailable(book)</code>, an ordinary static call
          with the instance passed as the first argument. Nothing is actually
          added to the <code>Book</code> type itself; there&apos;s no way to
          extend private state, and an extension method can never override or
          hide a real instance method (instance members always win overload
          resolution). This is precisely why LINQ&apos;s <code>.Where()</code>/
          <code>.Select()</code> can appear to &quot;add&quot; query methods to
          every <code>{'IEnumerable<T>'}</code> in existence — they&apos;re just
          extension methods in <code>System.Linq</code>, brought into scope the
          moment you add <code>using System.Linq;</code>.
        </p>
        <p>
          Static methods in a static class, with <code>this</code> on the first
          parameter, that appear to &quot;extend&quot; a type you don&apos;t
          own.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">static</span> <span class="kw">class</span> BookExtensions
{
    <span class="kw">public</span> <span class="kw">static</span> <span class="kw">bool</span> IsAvailable(<span class="kw">this</span> Book b) =&gt; b.CopiesAvailable &gt; 0;
    <span class="kw">public</span> <span class="kw">static</span> Book Restock(<span class="kw">this</span> Book b, <span class="kw">int</span> copies)
    {
        b.CopiesAvailable += copies;
        <span class="kw">return</span> b; <span class="cm">// returning 'this' enables chaining</span>
    }
}

book.Restock(1).Restock(2); <span class="cm">// chained extension calls</span>
<span class="kw">if</span> (book.IsAvailable()) <span class="ty">Console</span>.WriteLine(<span class="str">"Ready to borrow"</span>);`}
        />
        <p>
          If an instance method with the same name/signature exists, it always
          wins over the extension method — extension methods are a fallback the
          compiler reaches for only when nothing better matches.
        </p>
      </Topic>

      <ModuleTitle>Module 5 — Async & Memory</ModuleTitle>

      <Topic id="t17" no="17" title="async / await">
        <p>
          The compiler transforms an <code>async</code> method into a{' '}
          <strong>state machine</strong> — a generated class that remembers
          exactly where execution paused at each <code>await</code>, so it can
          resume from that exact point later without blocking a thread while
          waiting. This is why an <code>async</code> method returns almost
          immediately (a <code>Task</code> representing &quot;not done
          yet&quot;) rather than running to completion synchronously — the
          calling thread is freed to do other work, and the runtime&apos;s
          thread pool resumes the state machine when the awaited operation
          actually completes, potentially on a different thread than it started
          on (unless a <code>SynchronizationContext</code>, like the UI thread,
          pins it back).
        </p>
        <p>
          <code>async</code>/<code>await</code> frees up the calling thread
          while waiting on I/O (network, disk, delay) — it does <em>not</em>{' '}
          automatically create new threads. <code>Task</code> represents
          &quot;work that will complete later&quot;; <code>{'Task<T>'}</code> is
          the same with a result value.
        </p>
        <Code
          html={`<span class="kw">async</span> Task&lt;<span class="kw">string</span>&gt; FetchIsbnDetailsAsync(CancellationToken ct)
{
    <span class="kw">await</span> Task.Delay(1000, ct); <span class="cm">// simulate an ISBN lookup over the network, cancellable</span>
    <span class="kw">return</span> <span class="str">"Frankenstein, Mary Shelley, 1818"</span>;
}

<span class="kw">var</span> details = <span class="kw">await</span> FetchIsbnDetailsAsync(CancellationToken.None);`}
        />
        <h4>Running things concurrently</h4>
        <Code
          html={`<span class="kw">var</span> detailsTask = FetchIsbnDetailsAsync(CancellationToken.None);
<span class="kw">var</span> coverTask = FetchCoverImageAsync();
<span class="kw">await</span> Task.WhenAll(detailsTask, coverTask); <span class="cm">// both run concurrently, wait for both</span>`}
        />
        <Callout variant="warn">
          <strong>Gotchas:</strong> never declare <code>async void</code> except
          for event handlers — exceptions thrown inside can crash the process
          uncatchably. Blocking on async code with <code>.Result</code> or{' '}
          <code>.Wait()</code> from a UI/ASP.NET context can deadlock — always{' '}
          <code>await</code> instead. Library code typically calls{' '}
          <code>ConfigureAwait(false)</code> to avoid forcing a return to the
          original context.
        </Callout>
      </Topic>

      <Topic id="t18" no="18" title="Span<T> & Memory">
        <p>
          <code>{'Span<T>'}</code> is a <code>ref struct</code> — a special
          compiler-enforced category of struct that can <em>only</em> ever live
          on the stack, never on the heap. That restriction is what makes it
          safe to point at stack-allocated memory (<code>stackalloc</code>)
          without risking a dangling reference after the stack frame is gone,
          but it also means the compiler flat-out refuses to let you put a{' '}
          <code>{'Span<T>'}</code> in a class field, box it, or capture it in a
          lambda closure — any of those could outlive the stack frame it points
          to. It&apos;s a deliberate, narrow trade: give up flexibility, get a
          guarantee of safety plus zero-allocation slicing.
        </p>
        <p>
          <code>{'Span<T>'}</code> is a stack-only (<code>ref struct</code>)
          view over contiguous memory — array, string, or{' '}
          <code>stackalloc</code> — with zero heap allocation for slicing.
        </p>
        <Code
          html={`<span class="kw">int</span>[] dailyLoans = { 12, 9, 3, 15, 7 };
Span&lt;<span class="kw">int</span>&gt; firstThree = dailyLoans.AsSpan(0, 3); <span class="cm">// no copy — a view over the same memory</span>
firstThree[0] = 99; <span class="cm">// mutates dailyLoans[0] too, since it's the same backing array</span>

Span&lt;<span class="kw">int</span>&gt; stackBuffer = stackalloc <span class="kw">int</span>[4]; <span class="cm">// lives on the stack, not the heap</span>`}
        />
        <Callout variant="warn">
          <strong>
            Why <code>{'Memory<T>'}</code> exists:
          </strong>{' '}
          because <code>{'Span<T>'}</code> is a <code>ref struct</code>, it
          can&apos;t be stored in a field, captured in a lambda, or used across
          an <code>await</code>. <code>{'Memory<T>'}</code> is the heap-friendly
          equivalent for those async scenarios — convert with <code>.Span</code>{' '}
          when you need to actually touch the data.
        </Callout>
      </Topic>

      <Topic id="t19" no="19" title="IDisposable & Garbage Collection">
        <p>
          The .NET GC is <strong>generational</strong>: new objects start in Gen
          0, which is collected frequently and cheaply (most objects die young —
          think a loop&apos;s temporary variables); survivors get promoted to
          Gen 1, then Gen 2, which are collected far less often since long-lived
          objects are statistically likely to keep living. This generational
          assumption is why allocating lots of short-lived small objects is
          usually fine performance-wise, while a memory leak (something
          unexpectedly holding a long reference chain, keeping garbage alive in
          Gen 2) is much more damaging. Finalizers (<code>~ClassName()</code>)
          are a GC-driven last-resort cleanup and are best avoided — they add
          real overhead and run at a non-deterministic time chosen by the GC,
          which is exactly the problem <code>IDisposable</code>&apos;s
          deterministic, caller-controlled cleanup solves.
        </p>
        <p>
          The GC automatically reclaims managed memory in generations (0, 1, 2 —
          younger objects collected more often, cheaply).{' '}
          <code>IDisposable</code> exists for <em>unmanaged</em> resources the
          GC doesn&apos;t know how to release deterministically: file handles,
          sockets, database connections.
        </p>
        <Code
          html={`<span class="kw">using</span> <span class="kw">var</span> file = <span class="ty">File</span>.OpenText(<span class="str">"catalog.csv"</span>); <span class="cm">// using declaration, C# 8+</span>
<span class="kw">var</span> firstLine = file.ReadLine();
<span class="cm">// file.Dispose() called automatically at end of enclosing scope</span>`}
        />
        <p>
          The full Dispose pattern, for a class that owns unmanaged resources
          directly:
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> CatalogFile : IDisposable
{
    <span class="kw">private</span> <span class="kw">bool</span> _disposed;
    <span class="kw">protected</span> <span class="kw">virtual</span> <span class="kw">void</span> Dispose(<span class="kw">bool</span> disposing)
    {
        <span class="kw">if</span> (_disposed) <span class="kw">return</span>;
        <span class="kw">if</span> (disposing) { <span class="cm">/* dispose managed resources */</span> }
        <span class="cm">/* free unmanaged resources here unconditionally */</span>
        _disposed = <span class="kw">true</span>;
    }
    <span class="kw">public</span> <span class="kw">void</span> Dispose() { Dispose(<span class="kw">true</span>); GC.SuppressFinalize(<span class="kw">this</span>); }
}`}
        />
      </Topic>

      <ModuleTitle>Module 6 — Advanced Language</ModuleTitle>

      <Topic id="t20" no="20" title="Reflection & Attributes">
        <p>
          Attributes aren&apos;t just compiler decoration — they&apos;re
          compiled directly into the assembly&apos;s metadata table, sitting
          alongside type and method definitions, which is exactly what makes
          them readable at runtime via reflection long after compilation.
          Reflection itself works by walking those same metadata tables at
          runtime (<code>Type</code>, <code>MethodInfo</code>,{' '}
          <code>PropertyInfo</code> objects mirror the compiled structure),
          which is powerful but comparatively slow — each reflective call
          involves lookups and checks a direct method call skips entirely, often
          10-100x slower in tight loops.
        </p>
        <p>
          Attributes attach metadata; reflection reads it at runtime. This is
          what powers serializers, dependency injection containers, and test
          runners under the hood.
        </p>
        <Code
          html={`[AttributeUsage(AttributeTargets.Class)]
<span class="kw">public</span> <span class="kw">class</span> LoanPolicyAttribute(<span class="kw">string</span> policy) : Attribute
{
    <span class="kw">public</span> <span class="kw">string</span> Policy { get; } = policy;
}

[LoanPolicy(<span class="str">"dvd_7_day"</span>)]
<span class="kw">public</span> <span class="kw">class</span> Dvd { }

<span class="kw">var</span> type = <span class="kw">typeof</span>(Dvd);
<span class="kw">var</span> attr = type.GetCustomAttribute&lt;LoanPolicyAttribute&gt;();
<span class="kw">var</span> instance = Activator.CreateInstance(type); <span class="cm">// creates a Dvd via reflection</span>`}
        />
        <Callout variant="warn">
          Reflection is slow relative to direct calls — avoid it in hot loops.
          This is exactly the problem source generators (next topic) solve.
        </Callout>
      </Topic>

      <Topic id="t21" no="21" title="Source Generators">
        <p>
          A source generator plugs into the compiler pipeline itself: it
          receives the syntax trees of your code as the compiler is building it,
          can inspect them (find every class with a particular attribute, say),
          and emits brand-new <code>.cs</code> files that get compiled right
          alongside your hand-written code in the same pass. Because the
          generated code exists at compile time, the JIT sees ordinary, fully
          typed method calls with no reflection involved at runtime — you get
          the flexibility developers associate with reflection (inspecting
          types, generating boilerplate) with none of its runtime cost, which is
          exactly why the .NET team moved performance-sensitive libraries like{' '}
          <code>System.Text.Json</code> toward this model.
        </p>
        <p>
          Source generators run <em>at compile time</em>, inspect your code, and
          emit additional C# source that gets compiled alongside it — giving
          reflection-like flexibility with zero runtime cost.{' '}
          <code>System.Text.Json</code>&apos;s source-generated serializers,
          compiled regex (<code>[GeneratedRegex]</code>), and modern logging (
          <code>[LoggerMessage]</code>) all work this way.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">partial</span> <span class="kw">class</span> IsbnRegex
{
    [GeneratedRegex(@<span class="str">"^97[89]\\d{10}$"</span>)] <span class="cm">// e.g. matches a 13-digit ISBN</span>
    <span class="kw">public</span> <span class="kw">static</span> <span class="kw">partial</span> Regex Isbn13();
}
<span class="cm">// the generator fills in the actual implementation of Isbn13() for you</span>`}
        />
        <p>
          You&apos;ll rarely author your own generator early on, but recognizing
          the <code>partial</code> + attribute pattern explains a lot of
          &quot;how does this even work&quot; moments in modern .NET libraries.
        </p>
      </Topic>

      <Topic id="t22" no="22" title="Advanced Pattern Matching & Records">
        <p>
          A <code>switch</code> expression with several patterns isn&apos;t
          evaluated as a naive top-to-bottom chain of separate checks the way a
          series of <code>if</code>/<code>else if</code> would be — the compiler
          analyzes all the patterns together and can build an efficient decision
          structure (grouping by discriminating type or value first), and
          critically, it performs <strong>exhaustiveness analysis</strong>: for
          a closed type hierarchy like an <code>abstract record</code> with
          known subtypes, the compiler warns you if a <code>switch</code>{' '}
          doesn&apos;t handle every possible case, catching a whole class of
          &quot;forgot to handle the new event type&quot; bugs at compile time
          rather than in production.
        </p>
        <p>
          Records support inheritance and positional deconstruction, which
          combines beautifully with pattern matching for tree-shaped data — loan
          state machines, ASTs, event sourcing.
        </p>
        <Code
          html={`<span class="kw">abstract</span> <span class="kw">record</span> LoanEvent;
<span class="kw">record</span> Returned(<span class="kw">int</span> DaysLate) : LoanEvent;
<span class="kw">record</span> Renewed(<span class="kw">int</span> ExtraDays) : LoanEvent;
<span class="kw">record</span> Damaged(<span class="kw">string</span> Severity, <span class="kw">int</span> RepairCents) : LoanEvent;

<span class="kw">int</span> FineCents(<span class="kw">int</span> replacementCents, LoanEvent e) =&gt; e <span class="kw">switch</span>
{
    Returned(var late) <span class="kw">when</span> late &lt;= 0 =&gt; 0,                  <span class="cm">// back on time</span>
    Returned(var late)                  =&gt; <span class="ty">Math</span>.Min(replacementCents, late * 25),
    Damaged(<span class="str">"Lost"</span>, _)                =&gt; replacementCents,
    Damaged(_, var repair)              =&gt; repair,
    _                                   =&gt; 0 <span class="cm">// Renewed costs nothing</span>
};`}
        />
        <p>List patterns (C# 11+) match sequences directly:</p>
        <Code
          html={`<span class="kw">int</span>[] recentFines = { 0, 0, 75 };
<span class="kw">if</span> (recentFines <span class="kw">is</span> [0, 0, ..])
    <span class="ty">Console</span>.WriteLine(<span class="str">"Two on-time returns to start"</span>);`}
        />
      </Topic>

      <Topic id="t23" no="23" title="Threading & Parallelism">
        <p>
          <code>Task.Run</code> and <code>Parallel.For</code> both draw from the
          same shared <strong>thread pool</strong> rather than spinning up a
          brand-new OS thread per call — OS threads are relatively expensive
          (each reserves around a megabyte of stack and costs real time to
          create/context-switch), so the pool reuses a managed set of worker
          threads sized to the machine&apos;s core count. This is also why
          oversubscribing the thread pool — blocking pool threads with
          synchronous I/O instead of awaiting — can starve the whole
          application: there are only so many workers, and a blocked one
          can&apos;t pick up other queued work until it&apos;s freed.
        </p>
        <p>
          <code>Task</code> is the modern unit of asynchronous/concurrent work;
          raw <code>Thread</code> is lower-level and rarely needed directly
          today. <code>lock</code> (built on <code>Monitor</code>) protects
          shared mutable state from race conditions.
        </p>
        <Code
          html={`<span class="kw">private</span> <span class="kw">readonly</span> <span class="kw">object</span> _lock = <span class="kw">new</span>();
<span class="kw">private</span> <span class="kw">int</span> _copiesAvailable;

<span class="kw">void</span> ReturnCopiesSafely(<span class="kw">int</span> count)
{
    <span class="kw">lock</span> (_lock) { _copiesAvailable += count; }
}

<span class="cm">// simple atomic increment without a full lock</span>
Interlocked.Increment(<span class="kw">ref</span> _loanCount);`}
        />
        <p>
          <code>Parallel.For</code>/<code>Parallel.ForEach</code> parallelize
          independent CPU-bound iterations across cores:
        </p>
        <Code
          html={`Parallel.ForEach(books, b =&gt; b.ComputePopularityScore());`}
        />
        <Callout variant="warn">
          <strong>async vs. parallel — not the same thing:</strong>{' '}
          <code>async</code>/<code>await</code> is about not blocking a thread
          while waiting (I/O-bound); <code>Parallel</code>
          /multi-threading is about using multiple CPU cores at once
          (CPU-bound). Mixing up the two is a very common source of confusion.
        </Callout>
      </Topic>

      <ModuleTitle>Module 7 — C# 14: What&apos;s New</ModuleTitle>

      <Topic id="t24" no="24" title="Extension Members — the headline feature">
        <p>
          The design motivation matters here: pre-C#14 extension methods were
          purely a call-site trick (Module 4, Topic 16) — great for adding
          behavior, useless for adding a property-like read. Library authors
          wanting <code>myThing.SomeComputedValue</code> syntax on a type they
          didn&apos;t own had no clean option; they either lived with
          parentheses (<code>myThing.SomeComputedValue()</code>) or gave up. The
          new <code>extension(...)</code> block is a genuinely new compiler
          feature (not just sugar over the old <code>this</code>
          -parameter trick) that widens what &quot;extending a type&quot; can
          mean, while staying fully source- and binary-compatible with every
          extension method already written.
        </p>
        <p>
          Extension methods existed since C# 3.0 but were method-only. C# 14
          introduces an <code>extension(...)</code> block that also allows{' '}
          <strong>extension properties</strong>,{' '}
          <strong>extension operators</strong>, and{' '}
          <strong>static extension members</strong> — all fully backward
          compatible with your existing extension methods.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">static</span> <span class="kw">class</span> BookExtensions
{
    <span class="kw">extension</span>(Book b)
    {
        <span class="kw">public</span> <span class="kw">bool</span> IsAvailable =&gt; b.CopiesAvailable &gt; 0; <span class="cm">// extension property</span>
        <span class="kw">public</span> <span class="kw">bool</span> IsLastCopy =&gt; b.CopiesAvailable == 1;
    }

    <span class="kw">extension</span>(Guid)
    {
        <span class="kw">public</span> <span class="kw">static</span> Guid CreateDeterministic(<span class="kw">string</span> seed) <span class="cm">// static extension member</span>
        {
            <span class="kw">var</span> hash = SHA256.HashData(Encoding.UTF8.GetBytes(seed));
            <span class="kw">return</span> <span class="kw">new</span> Guid(hash.AsSpan(0, 16));
        }
    }
}

<span class="kw">if</span> (book.IsAvailable &amp;&amp; !book.IsLastCopy) <span class="ty">Console</span>.WriteLine(<span class="str">"Plenty on the shelf"</span>);
<span class="kw">var</span> bookId = Guid.CreateDeterministic(<span class="str">"book-0003"</span>); <span class="cm">// looks native to Guid</span>`}
        />
        <p>
          Use extension properties when reading something feels more natural
          than calling a method — <code>book.IsAvailable</code> reads better
          than <code>book.IsAvailable()</code>, especially when there&apos;s no
          side effect.
        </p>
      </Topic>

      <Topic id="t25" no="25" title="Null-Conditional Assignment">
        <p>
          This closes an asymmetry that existed since <code>?.</code> was
          introduced in C# 6: reading was null-safe, writing was not, forcing an
          explicit null-check every time you wanted to conditionally assign. The
          compiler implements it exactly the way you&apos;d hand-write the guard
          yourself — <code>maybeBook?.CopiesAvailable = 3</code> desugars to
          check-then-assign, not some new runtime mechanism — so there&apos;s no
          behavioral surprise, just less boilerplate for a pattern that comes up
          constantly when working with optional/nullable object graphs.
        </p>
        <p>
          You&apos;ve always been able to <em>read</em> through <code>?.</code>{' '}
          safely. Now you can <em>assign</em> through it too — if the target is
          null, the whole assignment is simply skipped, no exception, no
          separate null check needed.
        </p>
        <Code
          html={`Book? maybeBook = FindBook(<span class="str">"Dracula"</span>);
maybeBook?.CopiesAvailable = 3; <span class="cm">// no-op if maybeBook is null</span>

<span class="cm">// compare to the old way, always needed before C# 14:</span>
<span class="kw">if</span> (maybeBook <span class="kw">is</span> <span class="kw">not</span> <span class="kw">null</span>)
    maybeBook.CopiesAvailable = 3;`}
        />
      </Topic>

      <Topic
        id="t26"
        no="26"
        title={
          <>
            The <code>field</code> Keyword
          </>
        }
      >
        <p>
          Before this, the moment you needed even one line of logic in a setter,
          you lost the auto-property&apos;s conciseness entirely and had to fall
          back to declaring your own named backing field (<code>_copies</code>)
          plus writing both accessors by hand — a disproportionate amount of
          boilerplate for a single <code>Math.Clamp</code> call.{' '}
          <code>field</code> is a contextual keyword that only means &quot;the
          compiler-generated backing field&quot; inside a property accessor
          body; it&apos;s not a new reserved word, so it doesn&apos;t break any
          existing code that happens to use <code>field</code> as an identifier
          elsewhere.
        </p>
        <p>
          Want simple logic in a property accessor — clamping, validation,
          change notification — without declaring your own backing field and
          losing the conciseness of auto-properties? <code>field</code> refers
          to the compiler-generated backing field directly, inside the accessor
          body.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Book
{
    <span class="kw">public</span> <span class="kw">int</span> CopiesTotal { get; init; } = 3;

    <span class="kw">public</span> <span class="kw">int</span> CopiesAvailable
    {
        get;
        <span class="kw">set</span> =&gt; field = <span class="ty">Math</span>.Clamp(value, 0, CopiesTotal); <span class="cm">// no manual backing field declared</span>
    }

    <span class="kw">public</span> <span class="kw">string</span> Title
    {
        get =&gt; field;
        <span class="kw">set</span> =&gt; field = value?.Trim() ?? <span class="str">"Untitled"</span>;
    }
}`}
        />
        <p>
          Before C# 14 this required a fully manual backing field (
          <code>
            {
              'private int _copies; public int CopiesAvailable { get => _copies; set => _copies = ...; }'
            }
          </code>
          ) just to add one line of logic — <code>field</code> removes that
          boilerplate entirely.
        </p>
      </Topic>

      <Topic id="t27" no="27" title="Partial Events & Constructors">
        <p>
          This feature exists almost entirely for the benefit of source
          generators (Topic 21): a generator can now declare the
          &quot;shape&quot; of a constructor or event that your hand-written
          partial class implements, or vice versa — your code declares the
          signature and a generator fills in the body. Before C# 14, generators
          needing to participate in construction had to work around the gap with
          factory methods or initialization callbacks instead of a real
          constructor, which was awkward and easy to get wrong (e.g. an object
          usable before it was fully set up).
        </p>
        <p>
          Partial types already supported partial methods; they hadn&apos;t
          supported partial <em>events</em> or <em>constructors</em> — a real
          gap for source generators that need to hook into object construction
          or add generated event plumbing. C# 14 closes it.
        </p>
        <Code
          html={`<span class="cm">// declaring half — e.g. hand-written file</span>
<span class="kw">public</span> <span class="kw">partial</span> <span class="kw">class</span> Reservation
{
    <span class="kw">public</span> <span class="kw">partial</span> Reservation(<span class="kw">string</span> memberName);
    <span class="kw">public</span> <span class="kw">partial</span> <span class="kw">event</span> Action HoldReady;
}

<span class="cm">// implementing half — could be generated by a source generator</span>
<span class="kw">public</span> <span class="kw">partial</span> <span class="kw">class</span> Reservation
{
    <span class="kw">public</span> <span class="kw">partial</span> Reservation(<span class="kw">string</span> memberName) { MemberName = memberName; }
    <span class="kw">public</span> <span class="kw">partial</span> <span class="kw">event</span> Action HoldReady
    {
        <span class="kw">add</span> { <span class="cm">/* wire up */</span> }
        <span class="kw">remove</span> { <span class="cm">/* unwire */</span> }
    }
}`}
        />
      </Topic>

      <Topic
        id="t28"
        no="28"
        title="User-Defined Compound Assignment Operators"
      >
        <p>
          Prior to C# 14, <code>+=</code> on a type with an overloaded{' '}
          <code>+</code> was purely syntactic — the compiler always expanded it
          to <code>x = x + y</code>, meaning a struct-based vector or matrix
          library incremented in a tight loop allocated (or at minimum, copied)
          a brand-new instance on every single iteration. Letting you define{' '}
          <code>+=</code> directly means the operator can mutate the existing
          instance&apos;s fields in place instead, which matters most for
          exactly the kind of numeric/vector types that get updated millions of
          times in a physics or simulation loop — the allocation savings
          compound fast at that scale.
        </p>
        <p>
          Previously, overloading <code>+</code> meant that <code>x += y</code>{' '}
          desugared to <code>x = x + y</code> — always allocating a brand-new
          instance, even for a tiny in-place tweak. C# 14 lets you define{' '}
          <code>+=</code> itself, mutating in place — a real win for
          performance-sensitive numeric/vector types that get incremented in hot
          loops.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">struct</span> Fine
{
    <span class="kw">public</span> <span class="kw">int</span> Cents; <span class="cm">// capped at a 2000-cent replacement cost</span>
    <span class="kw">public</span> <span class="kw">void</span> operator +=(<span class="kw">int</span> cents) =&gt; Cents = <span class="ty">Math</span>.Min(2000, Cents + cents);
    <span class="kw">public</span> <span class="kw">void</span> operator -=(<span class="kw">int</span> cents) =&gt; Cents = <span class="ty">Math</span>.Max(0, Cents - cents);
}

<span class="kw">var</span> fine = <span class="kw">new</span> Fine { Cents = 1900 };
fine += 250; <span class="cm">// clamps to 2000, mutates Cents in place — no new struct allocated</span>
fine -= 5000; <span class="cm">// clamps to 0 (paid in full)</span>`}
        />
      </Topic>

      <Topic
        id="t29"
        no="29"
        title="Span Conversions, nameof, Lambdas & File-Based Apps"
      >
        <p>
          None of these individually is a big paradigm shift — they&apos;re
          friction removal, and that&apos;s the point of this cluster. The
          implicit span conversion removes a <code>.AsSpan()</code> call that
          added no information the compiler couldn&apos;t already infer from
          context; <code>nameof</code> on unbound generics closes an
          inconsistency where you could already write{' '}
          <code>{'nameof(List<int>)'}</code> but not the more general{' '}
          <code>{'nameof(List<>)'}</code>; file-based apps target the exact
          friction of &quot;I want to try a five-line idea&quot; requiring a
          full project scaffold first. Taken together with the rest of Module 7,
          C# 14 reads as a release focused on sanding down everyday rough edges
          rather than introducing new ways to structure programs.
        </p>
        <p>A cluster of smaller-but-genuinely-handy additions:</p>
        <Code
          html={`<span class="cm">// implicit span conversion — array slices convert automatically, no .AsSpan() call</span>
<span class="kw">int</span>[] dailyLoans = { 12, 9, 3, 15, 7 };
ReadOnlySpan&lt;<span class="kw">int</span>&gt; slice = dailyLoans[..3];

<span class="cm">// nameof on an unbound generic type</span>
<span class="ty">Console</span>.WriteLine(<span class="kw">nameof</span>(List&lt;&gt;)); <span class="cm">// "List"</span>

<span class="cm">// modifiers on simple lambda parameters</span>
<span class="kw">var</span> tryParseWrapper = (<span class="kw">string</span> s, <span class="kw">out</span> <span class="kw">int</span> result) =&gt; <span class="kw">int</span>.TryParse(s, <span class="kw">out</span> result);`}
        />
        <p>
          Together with the file-based apps preprocessor directives from Module
          1, these round out C# 14 as a release focused on removing everyday
          friction rather than adding big new paradigms.
        </p>
      </Topic>

      <ModuleTitle>Module 8 — Rounding Out the Language</ModuleTitle>

      <Topic id="t30" no="30" title="Arrays">
        <p>
          Arrays sit at the very bottom of the collection hierarchy —{' '}
          <code>{'List<T>'}</code> is literally implemented as a resizable
          wrapper around an array, doubling its internal array&apos;s capacity
          and copying elements over whenever it runs out of room. That&apos;s
          why an array&apos;s size is fixed forever once created: there&apos;s
          no &quot;resize&quot; operation, only &quot;allocate a new one and
          copy.&quot; Arrays also implement <code>{'IEnumerable<T>'}</code>, so
          every LINQ method works on them directly, and multi-dimensional (
          <code>[,]</code>) arrays are stored as one contiguous block in memory
          (row-major order), which is why iterating one in the right order plays
          much nicer with CPU cache than a jagged array&apos;s scattered row
          allocations.
        </p>
        <p>
          Arrays are fixed-size, zero-indexed sequences — the most primitive
          collection type, and still what most other collections are built on
          internally.
        </p>
        <Code
          html={`<span class="kw">int</span>[] copiesPerBook = { 3, 2, 1 };     <span class="cm">// single-dimensional</span>
<span class="kw">int</span>[,] grid = <span class="kw">new</span> <span class="kw">int</span>[3, 3];           <span class="cm">// multi-dimensional (rectangular)</span>
grid[1, 1] = 5;

<span class="kw">int</span>[][] jagged = <span class="kw">new</span> <span class="kw">int</span>[3][];         <span class="cm">// jagged — array of arrays, rows can differ in length</span>
jagged[0] = <span class="kw">new</span>[] { 1, 2 };
jagged[1] = <span class="kw">new</span>[] { 1, 2, 3 };`}
        />
        <Callout variant="warn">
          <strong>Gotcha:</strong> multi-dimensional arrays (<code>[,]</code>)
          are a single contiguous block and usually faster; jagged arrays (
          <code>[][]</code>) are more flexible (rows can vary in length) but
          each row is a separate heap allocation.
        </Callout>
      </Topic>

      <Topic id="t31" no="31" title="Strings Deep Dive">
        <p>
          Every C# string is a UTF-16 sequence of <code>char</code> values,
          immutable from the moment it&apos;s created — any operation that looks
          like it &quot;modifies&quot; a string (<code>.ToUpper()</code>,
          concatenation, <code>.Trim()</code>) actually allocates and returns a
          whole new string object, leaving the original untouched. That
          immutability is what makes strings safe to share freely without
          defensive copying, but it&apos;s also exactly why building a large
          string piece-by-piece with <code>+</code> in a loop is quadratic in
          the number of appends — each <code>+</code> allocates a new, slightly
          longer string and copies everything from before into it.{' '}
          <code>StringBuilder</code> exists specifically to break that pattern:
          it maintains one mutable internal buffer and only reallocates when it
          actually runs out of room.
        </p>
        <p>
          Strings get special treatment throughout C# — several literal forms
          exist for different situations.
        </p>
        <Code
          html={`<span class="kw">string</span> interpolated = $<span class="str">"{book.Title} has {book.CopiesAvailable} copies left"</span>;
<span class="kw">string</span> verbatim     = @<span class="str">"C:\\Library\\Exports\\catalog.csv"</span>; <span class="cm">// no escape processing</span>
<span class="kw">string</span> raw          = <span class="str">"""</span>
    <span class="str">{ "title": "Dracula", "year": 1897 }</span>
    <span class="str">"""</span>;                                       <span class="cm">// raw string literal, C# 11 — great for JSON/regex</span>`}
        />
        <p>
          Because strings are immutable, repeated concatenation in a loop
          allocates a new string every time — use <code>StringBuilder</code> for
          heavy building:
        </p>
        <Code
          html={`<span class="kw">var</span> sb = <span class="kw">new</span> StringBuilder();
<span class="kw">foreach</span> (<span class="kw">var</span> title <span class="kw">in</span> overdueTitles)
    sb.AppendLine($<span class="str">"- {title}"</span>);
<span class="kw">string</span> report = sb.ToString();`}
        />
      </Topic>

      <Topic id="t32" no="32" title="Tuples & Deconstruction">
        <p>
          Modern C# value tuples (the <code>(int, bool)</code> syntax) are
          actually the <code>System.ValueTuple</code> struct under the hood — a
          real value type, not the older, clunkier <code>System.Tuple</code>{' '}
          class from pre-C#7 code, which was a heap-allocated reference type
          with generic <code>Item1</code>/<code>Item2</code> member names
          instead of your own. Deconstruction itself is a general compiler
          feature, not tuple-specific: any type — your own classes included —
          can opt in by defining a method literally named{' '}
          <code>Deconstruct</code>, which is exactly the mechanism records get
          for free and which lets pattern matching pull values out of them in a{' '}
          <code>switch</code>.
        </p>
        <p>
          Value tuples let you group values without declaring a whole type —
          handy for a method that logically returns more than one thing.
        </p>
        <Code
          html={`(<span class="kw">int</span> fineCents, <span class="kw">bool</span> isCapped) CalculateFine(<span class="kw">int</span> daysOverdue)
{
    <span class="kw">int</span> raw = daysOverdue * 25;
    <span class="kw">return</span> (fineCents: <span class="ty">Math</span>.Min(raw, 2000), isCapped: raw &gt;= 2000);
}

<span class="kw">var</span> (cents, capped) = CalculateFine(12); <span class="cm">// deconstruction</span>
<span class="ty">Console</span>.WriteLine(capped ? $<span class="str">"Capped at {cents} cents"</span> : $<span class="str">"{cents} cents owed"</span>);`}
        />
        <p>
          Records deconstruct automatically too (from earlier:{' '}
          <code>Returned(var late)</code>), and you can add custom{' '}
          <code>Deconstruct</code> methods to any class or struct.
        </p>
      </Topic>

      <Topic id="t33" no="33" title="Operator Overloading & Equality">
        <p>
          C# actually has <em>three</em> separate, easily confused notions of
          equality for any type: reference equality (
          <code>ReferenceEquals</code>, do these two variables point at the same
          object), the virtual <code>Equals(object)</code> method (overridable,
          meant for logical/value equality), and the <code>==</code> operator
          (overloadable independently — by default it does reference equality
          for classes but value equality for structs and records). This is
          exactly why records give you value equality &quot;for free&quot;: the
          compiler auto-generates <code>Equals</code>, <code>GetHashCode</code>,
          and <code>==</code>/<code>!=</code> for you, but a plain{' '}
          <code>class</code> gets none of that unless you write it yourself —
          which is the whole reason the <code>Equals</code>/
          <code>GetHashCode</code> pairing rule exists:{' '}
          <code>{'Dictionary<TKey,TValue>'}</code> and{' '}
          <code>{'HashSet<T>'}</code> use <code>GetHashCode</code> to find the
          right bucket first, then <code>Equals</code> to confirm — if the two
          disagree about what&apos;s equal, lookups silently fail to find items
          that are logically &quot;there.&quot;
        </p>
        <p>
          Beyond the compound-assignment operators from Module 7, you can
          overload the base arithmetic/comparison operators, and control how
          equality works for your own types.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">readonly</span> <span class="kw">struct</span> Vector2(<span class="kw">float</span> x, <span class="kw">float</span> y) : IEquatable&lt;Vector2&gt;
{
    <span class="kw">public</span> <span class="kw">float</span> X { get; } = x;
    <span class="kw">public</span> <span class="kw">float</span> Y { get; } = y;

    <span class="kw">public</span> <span class="kw">static</span> Vector2 operator +(Vector2 a, Vector2 b) =&gt; <span class="kw">new</span>(a.X + b.X, a.Y + b.Y);
    <span class="kw">public</span> <span class="kw">bool</span> Equals(Vector2 other) =&gt; X == other.X &amp;&amp; Y == other.Y;
    <span class="kw">public</span> <span class="kw">override</span> <span class="kw">bool</span> Equals(<span class="kw">object</span>? obj) =&gt; obj <span class="kw">is</span> Vector2 v &amp;&amp; Equals(v);
    <span class="kw">public</span> <span class="kw">override</span> <span class="kw">int</span> GetHashCode() =&gt; HashCode.Combine(X, Y);
}`}
        />
        <Callout variant="warn">
          <strong>Rule:</strong> if you override <code>Equals</code>, you must
          also override <code>GetHashCode</code> — objects that are equal must
          return the same hash code, or dictionaries/hash sets containing them
          will misbehave silently.
        </Callout>
        <p>
          <code>{'IComparable<T>'}</code> lets your type work with{' '}
          <code>.Sort()</code> and <code>&lt;</code>/<code>&gt;</code>;
          implicit/explicit conversion operators let you write{' '}
          <code>int x = someCustomType;</code> style conversions.
        </p>
      </Topic>

      <Topic id="t34" no="34" title="Indexers">
        <p>
          An indexer is really just a specially named property — the compiler
          generates <code>get_Item</code>/<code>set_Item</code> methods, the
          exact same mechanism ordinary properties use — which is also why every
          type you&apos;ve used <code>[]</code> on so far (arrays,{' '}
          <code>{'List<T>'}</code>, <code>{'Dictionary<K,V>'}</code>) is simply
          exposing its own indexer, not receiving special compiler treatment.
          You can overload indexers by parameter type or count, just like
          methods, so a single type can support both{' '}
          <code>shelf[&quot;Dracula&quot;]</code> and <code>shelf[0]</code> if
          that fits the domain.
        </p>
        <p>
          An indexer lets your own type use <code>[]</code> syntax, just like
          arrays and <code>{'List<T>'}</code> do.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> CopyCounts
{
    <span class="kw">private</span> <span class="kw">readonly</span> Dictionary&lt;<span class="kw">string</span>, <span class="kw">int</span>&gt; _copies = <span class="kw">new</span>();

    <span class="kw">public</span> <span class="kw">int</span> <span class="kw">this</span>[<span class="kw">string</span> title]
    {
        get =&gt; _copies.GetValueOrDefault(title, 0);
        <span class="kw">set</span> =&gt; _copies[title] = value;
    }
}

<span class="kw">var</span> shelf = <span class="kw">new</span> CopyCounts();
shelf[<span class="str">"Dracula"</span>] = 2;
<span class="ty">Console</span>.WriteLine(shelf[<span class="str">"Dracula"</span>]); <span class="cm">// 2</span>`}
        />
      </Topic>

      <Topic id="t35" no="35" title="Iterators (yield return)">
        <p>
          <code>yield return</code> is compiler-generated state-machine magic in
          the same family as <code>async</code>/<code>await</code> (Topic 17) —
          the method you write is transformed into a hidden class implementing{' '}
          <code>{'IEnumerator<T>'}</code>, whose <code>MoveNext()</code> resumes
          execution exactly where the last <code>yield return</code> left off,
          remembering local variables in between calls the same way a paused
          coroutine would. This is precisely how <code>Where</code>,{' '}
          <code>Select</code>, and the rest of LINQ achieve their lazy,
          deferred-execution behavior (Topic 15) internally — they&apos;re
          implemented as iterator methods, pulling one item at a time only when
          something actually asks for the next one.
        </p>
        <p>
          <code>yield return</code> lets you write a method that produces a lazy
          sequence one item at a time — the compiler generates the state machine
          for you. This is exactly how LINQ&apos;s own operators are implemented
          internally.
        </p>
        <Code
          html={`<span class="ty">IEnumerable&lt;<span class="kw">int</span>&gt;</span> RunningFine()
{
    <span class="kw">int</span> cents = 0;
    <span class="kw">while</span> (<span class="kw">true</span>)
    {
        cents += 25;                 <span class="cm">// one more day overdue</span>
        <span class="kw">yield</span> <span class="kw">return</span> cents;   <span class="cm">// pauses here, resumes on next MoveNext()</span>
    }
}

<span class="kw">foreach</span> (<span class="kw">var</span> cents <span class="kw">in</span> RunningFine().Take(5)) <span class="cm">// safe — nothing runs until pulled</span>
    <span class="ty">Console</span>.WriteLine(cents);`}
        />
      </Topic>

      <Topic id="t36" no="36" title="Boxing, Unboxing, Checked/Unchecked">
        <p>
          Boxing exists because .NET&apos;s type system needs a way to treat
          every value type as an <code>object</code> when needed (pre-generics
          APIs, non-generic collections, <code>string.Format</code>&apos;s old
          overloads) — the runtime allocates a small heap object that wraps a
          copy of the value type&apos;s bits, tagged with its actual type, so
          reflection and virtual dispatch work on it like any other object.
          Every one of those allocations adds GC pressure, which is exactly the
          cost generics (Topic 9) were introduced to eliminate for the common
          cases. Integer overflow wrapping silently (rather than throwing) is a
          deliberate default for performance — the runtime doesn&apos;t check
          every arithmetic operation unless you opt in with <code>checked</code>
          , since that check has a real, if small, per-operation cost.
        </p>
        <p>
          <strong>Boxing</strong> wraps a value type in a heap-allocated object
          so it can be treated as <code>object</code>; <strong>unboxing</strong>{' '}
          reverses it. Both cost a heap allocation — avoid in hot paths
          (generics largely exist to sidestep this).
        </p>
        <Code
          html={`<span class="kw">int</span> copies = 3;
<span class="kw">object</span> boxed = copies;      <span class="cm">// boxing — heap allocation</span>
<span class="kw">int</span> unboxed = (<span class="kw">int</span>)boxed;  <span class="cm">// unboxing</span>`}
        />
        <p>
          Integer arithmetic silently overflows by default (wraps around);{' '}
          <code>checked</code> makes overflow throw instead — useful when a
          silent wraparound would be a serious bug (currency, IDs).
        </p>
        <Code
          html={`<span class="kw">int</span> max = <span class="kw">int</span>.MaxValue;
<span class="kw">int</span> wrapped = max + 1;              <span class="cm">// silently wraps to int.MinValue</span>
<span class="kw">checked</span>
{
    <span class="kw">int</span> boom = max + 1;              <span class="cm">// throws OverflowException</span>
}`}
        />
      </Topic>

      <Topic id="t37" no="37" title="Namespaces & Usings">
        <p>
          Namespaces are purely a compile-time organizational tool — they
          don&apos;t exist as a runtime concept the way types do; a fully
          qualified name like <code>MapleLibrary.Loans.FineCalculator</code> is
          just how the compiler disambiguates two types that happen to share a
          short name in different parts of a large codebase or across referenced
          libraries. <code>using</code> directives (and{' '}
          <code>global using</code>) don&apos;t change what code does at all,
          only what you&apos;re allowed to type without the full qualification —
          which is why adding or removing a <code>using</code> can only ever
          cause a compile error (ambiguous or missing reference), never a
          runtime behavior change.
        </p>
        <p>
          Namespaces organize types and avoid name collisions. Modern C#
          supports file-scoped namespaces (no extra indentation level) and{' '}
          <code>global using</code> in one central file to avoid repeating
          common <code>using</code> statements everywhere.
        </p>
        <Code
          html={`<span class="kw">namespace</span> MapleLibrary.Loans; <span class="cm">// file-scoped — no braces, applies to whole file</span>

<span class="kw">public</span> <span class="kw">class</span> FineCalculator { }`}
        />
        <Code
          html={`<span class="cm">// GlobalUsings.cs — one file for the whole project</span>
<span class="kw">global</span> <span class="kw">using</span> System;
<span class="kw">global</span> <span class="kw">using</span> System.Collections.Generic;
<span class="kw">global</span> <span class="kw">using</span> System.Linq;`}
        />
        <p>
          <code>{'<ImplicitUsings>enable</ImplicitUsings>'}</code> in the{' '}
          <code>.csproj</code> (the default for new projects) auto-adds the most
          common ones for you — part of why Module 1&apos;s Hello World needed
          zero <code>using</code> statements.
        </p>
      </Topic>

      <Topic id="t38" no="38" title="Closures & Anonymous Types">
        <p>
          A closure works by the compiler secretly generating a hidden class to
          hold any local variable a lambda references from its enclosing scope —
          the lambda doesn&apos;t actually capture the variable&apos;s current
          value, it captures a reference to that hidden holder object, which is
          why the counter example keeps incrementing across calls rather than
          resetting. This is also the real explanation for the classic pre-C#5{' '}
          <code>foreach</code> capture bug: older C# reused a single
          loop-variable holder across every iteration, so every closure ended up
          sharing (and reading the final value of) the same holder — fixed since
          C# 5, which gives each iteration its own fresh variable instead.
          Anonymous types get similar hidden-class treatment: the compiler
          generates a real (but unnamed, unreachable-by-name) class with
          read-only properties and value-based <code>Equals</code>/
          <code>GetHashCode</code>, scoped so you can only refer to it via{' '}
          <code>var</code>.
        </p>
        <p>
          A lambda that references a variable from its enclosing scope
          &quot;closes over&quot; it — the variable stays alive as long as the
          lambda does, even after the method that declared it returns.
        </p>
        <Code
          html={`<span class="ty">Func</span>&lt;<span class="kw">int</span>&gt; MakeCounter()
{
    <span class="kw">int</span> count = 0;
    <span class="kw">return</span> () =&gt; ++count; <span class="cm">// closes over 'count' — each call remembers state</span>
}

<span class="kw">var</span> counter = MakeCounter();
<span class="ty">Console</span>.WriteLine(counter()); <span class="cm">// 1</span>
<span class="ty">Console</span>.WriteLine(counter()); <span class="cm">// 2 — same captured 'count'</span>`}
        />
        <Callout variant="warn">
          <strong>Classic gotcha:</strong> capturing a loop variable by
          reference used to bite everyone before C# 5 fixed <code>foreach</code>{' '}
          semantics. It&apos;s safe now, but capturing a mutable field or a{' '}
          <code>for</code>-loop index that changes underneath your lambda can
          still surprise you.
        </Callout>
        <p>
          Anonymous types give you a quick throwaway shape without declaring a
          class — mostly seen in LINQ projections:
        </p>
        <Code
          html={`<span class="kw">var</span> summary = books.Select(b =&gt; <span class="kw">new</span> { b.Title, IsAvailable = b.CopiesAvailable &gt; 0 });`}
        />
      </Topic>

      <Topic
        id="t39"
        no="39"
        title="required Members, Raw Strings, Generic Math"
      >
        <p>
          <code>required</code> is a compile-time-only guarantee, enforced by
          the compiler at every object-creation call site — it adds no runtime
          check and no performance cost, it simply refuses to compile code that
          forgets to set the member. Generic math (<code>static abstract</code>{' '}
          interface members) solves a problem that had no clean solution before
          C# 11: previously, writing one generic <code>Sum</code> function that
          worked across <code>int</code>, <code>double</code>, and{' '}
          <code>decimal</code> was impossible because operators like{' '}
          <code>+</code> aren&apos;t defined by an interface any value type can
          implement — static abstract members finally let an interface require a
          static operator, which is exactly what <code>{'INumber<T>'}</code> and
          friends in <code>System.Numerics</code> are built on.
        </p>
        <p>
          A grab-bag of C# 11–13 additions that predate C# 14 but round out the
          modern language and are worth knowing:
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Member
{
    <span class="kw">public</span> <span class="kw">required</span> <span class="kw">string</span> Name { get; init; } <span class="cm">// caller MUST set this, compiler-enforced</span>
    <span class="kw">public</span> <span class="kw">string</span> Tier { get; <span class="kw">set</span>; } = <span class="str">"Standard"</span>;
}
<span class="kw">var</span> member = <span class="kw">new</span> Member { Name = <span class="str">"Ada Lovelace"</span> }; <span class="cm">// omitting Name would be a compile error</span>`}
        />
        <Code
          html={`<span class="cm">// generic math via static abstract interface members (C# 11)</span>
T SumAll&lt;T&gt;(List&lt;T&gt; values) <span class="kw">where</span> T : System.Numerics.INumber&lt;T&gt;
{
    T total = T.Zero;
    <span class="kw">foreach</span> (<span class="kw">var</span> v <span class="kw">in</span> values) total += v;
    <span class="kw">return</span> total;
}
<span class="cm">// works identically for int, double, decimal, or your own numeric type</span>`}
        />
        <p>
          Also worth knowing exist: <code>[CallerMemberName]</code>/
          <code>[CallerLineNumber]</code> for automatic diagnostics info, UTF-8
          string literals (<code>{'"text"u8'}</code>) for zero-allocation byte
          spans, and the <code>dynamic</code> keyword for the rare case you
          genuinely need runtime-resolved typing (COM interop, some
          reflection-heavy scenarios).
        </p>
      </Topic>

      <ModuleTitle>Module 9 — Capstone</ModuleTitle>

      <Topic id="t40" no="40" title="Build Something Fun">
        <p>
          Reading through 39 topics builds recognition; building something is
          what turns that into fluency you can actually reach for under pressure
          — deciding for yourself when a <code>record</code> beats a{' '}
          <code>class</code>, noticing you&apos;ve written the same LINQ chain
          three times and pulling it into an extension method, hitting a real{' '}
          <code>NullReferenceException</code> and knowing exactly which topic
          above explains it. None of that judgment shows up from re-reading; it
          shows up from writing code that&apos;s yours, breaking it, and fixing
          it.
        </p>
        <p>
          The best way to make all of the above stick is a small project that
          forces you to combine records, pattern matching, LINQ, async, and at
          least one C# 14 feature on purpose — not just read about them.
        </p>
        <Callout>
          <strong>Good capstone candidates:</strong>
          <ul>
            <li>
              <strong>Maple Street Library console app</strong> — records for
              books/members/loans, pattern matching for loan status and fines,
              extension members for book availability helpers.
            </li>
            <li>
              <strong>Mini catalog API</strong> — async all the way down,
              minimal APIs, LINQ for searching and sorting books by genre or
              year.
            </li>
            <li>
              <strong>CLI fine calculator</strong> — generics for totalling
              fines, the new <code>field</code> keyword for clamped copy counts,
              file-based apps to run it with zero setup.
            </li>
          </ul>
        </Callout>
        <p>
          Tell me which one sounds fun and we&apos;ll build it together, feature
          by feature, in a real project rather than isolated snippets.
        </p>
      </Topic>
    </>
  )
}
