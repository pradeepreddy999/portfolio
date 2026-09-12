import {
  Callout,
  Code,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'
import type { NavGroup } from '#/lib/tutorials/shared'

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
    title: '8 · Capstone',
    items: [{ id: 't30', label: 'Build Something Fun' }],
  },
]

export function Csharp14Content() {
  return (
    <>
      <ModuleTitle>Module 1 — Foundations</ModuleTitle>

      <Topic id="t1" no="01" title="Hello World & the CLI">
        <p>
          Every C# program used to require a <code>class Program</code> with a{' '}
          <code>static void Main(string[] args)</code> entry point.{' '}
          <strong>Top-level statements</strong> (C# 9+) let you skip that
          ceremony for simple apps — the compiler still generates a{' '}
          <code>Main</code> behind the scenes, you just don&apos;t write it.
        </p>
        <Code
          html={`<span class="cm">// Program.cs — the entire file, no boilerplate</span>
<span class="ty">Console</span>.WriteLine(<span class="str">"A wild bug appears!"</span>);`}
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
              <code>dotnet new console -n MyGame</code>,
              <>
                Scaffolds a new console app in folder <code>MyGame</code>
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
          C# is <strong>statically typed</strong> — every variable&apos;s type
          is known at compile time, catching a huge class of bugs before you
          ever run the program. <code>var</code> is not dynamic typing; it just
          asks the compiler to infer the type from the right-hand side. Once
          inferred, the type is fixed forever for that variable.
        </p>
        <Code
          html={`<span class="kw">int</span> hp = 100;
<span class="kw">string</span> name = <span class="str">"Goblin"</span>;
<span class="kw">var</span> isAngry = <span class="kw">true</span>;      <span class="cm">// inferred as bool — cannot later become a string</span>
<span class="kw">var</span> loot = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt;(); <span class="cm">// inferred as List&lt;string&gt;</span>`}
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

<span class="kw">var</span> partyA = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt; { <span class="str">"Hero"</span> };
<span class="kw">var</span> partyB = partyA;   <span class="cm">// same list! not a copy</span>
partyB.Add(<span class="str">"Mage"</span>);       <span class="cm">// partyA now has 2 members too</span>`}
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
          html={`<span class="kw">const</span> <span class="kw">int</span> MaxPartySize = 4;      <span class="cm">// compile-time constant, must be a literal</span>
<span class="kw">readonly</span> <span class="kw">int</span> _startingGold;    <span class="cm">// set once, in constructor, can vary per instance</span>`}
        />
      </Topic>

      <Topic id="t3" no="03" title="Control Flow">
        <p>
          C# has the usual suspects — <code>if</code>/<code>else</code>,{' '}
          <code>for</code>, <code>while</code>, <code>do...while</code>,{' '}
          <code>foreach</code> — plus a <code>switch</code> that&apos;s grown
          into one of the most powerful constructs in the language.
        </p>
        <Code
          html={`<span class="kw">for</span> (<span class="kw">int</span> i = 0; i &lt; 3; i++)
    <span class="ty">Console</span>.WriteLine($<span class="str">"Attack #{i + 1}"</span>);

<span class="kw">foreach</span> (<span class="kw">var</span> item <span class="kw">in</span> loot)
    <span class="ty">Console</span>.WriteLine(item);

<span class="kw">int</span> turnsLeft = 3;
<span class="kw">while</span> (turnsLeft &gt; 0) { turnsLeft--; }

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
          html={`<span class="kw">int</span> roll = <span class="kw">new</span> <span class="ty">Random</span>().Next(1, 21); <span class="cm">// d20</span>

<span class="cm">// classic statement form</span>
<span class="kw">switch</span> (roll)
{
    <span class="kw">case</span> 20: <span class="ty">Console</span>.WriteLine(<span class="str">"Crit!"</span>); <span class="kw">break</span>;
    <span class="kw">case</span> 1:  <span class="ty">Console</span>.WriteLine(<span class="str">"Fumble!"</span>); <span class="kw">break</span>;
    <span class="kw">default</span>: <span class="ty">Console</span>.WriteLine(<span class="str">"Normal roll"</span>); <span class="kw">break</span>;
}

<span class="cm">// expression form — assigns a value, no break needed</span>
<span class="kw">string</span> result = roll <span class="kw">switch</span>
{
    20   =&gt; <span class="str">"Critical hit!"</span>,
    1    =&gt; <span class="str">"Critical fail!"</span>,
    &gt; 10 =&gt; <span class="str">"Hit"</span>,
    _    =&gt; <span class="str">"Miss"</span>
};`}
        />
        <p>
          Ternary for one-liners:{' '}
          <code>{'string status = hp > 0 ? "Alive" : "Dead";'}</code>.{' '}
          <code>break</code>/<code>continue</code> control loop flow;{' '}
          <code>goto</code> exists but is rarely used outside generated code or
          complex <code>switch</code> fall-through.
        </p>
      </Topic>

      <Topic id="t4" no="04" title="Methods & Parameters">
        <p>
          Beyond ordinary parameters, C# gives you several passing mechanisms
          and shortcuts worth knowing early.
        </p>
        <Code
          html={`<span class="kw">void</span> LevelUp(<span class="kw">ref</span> <span class="kw">int</span> hp, <span class="kw">out</span> <span class="kw">int</span> bonus)
{
    bonus = 10;         <span class="cm">// out params MUST be assigned before returning</span>
    hp += bonus;        <span class="cm">// ref modifies the caller's variable directly</span>
}

<span class="kw">int</span> hp = 100;
LevelUp(<span class="kw">ref</span> hp, <span class="kw">out</span> <span class="kw">int</span> gained);
<span class="cm">// hp is 110, gained is 10</span>`}
        />
        <p>
          <code>in</code> is like <code>ref</code> but read-only — useful for
          passing large structs without copying them, while guaranteeing the
          callee can&apos;t mutate the caller&apos;s data.
        </p>
        <h4>Default parameters, named arguments, params arrays</h4>
        <Code
          html={`<span class="kw">void</span> Attack(<span class="kw">string</span> target, <span class="kw">int</span> damage = 10, <span class="kw">bool</span> isCrit = <span class="kw">false</span>) { }

Attack(<span class="str">"Goblin"</span>);                          <span class="cm">// uses defaults</span>
Attack(<span class="str">"Goblin"</span>, isCrit: <span class="kw">true</span>);          <span class="cm">// named arg, skip damage</span>
Attack(<span class="kw">target</span>: <span class="str">"Goblin"</span>, damage: 25);      <span class="cm">// any order with named args</span>

<span class="kw">void</span> CastSpell(<span class="kw">params</span> <span class="kw">string</span>[] targets) { } <span class="cm">// variable argument count</span>
CastSpell(<span class="str">"Goblin"</span>, <span class="str">"Orc"</span>, <span class="str">"Troll"</span>);`}
        />
        <h4>Expression-bodied methods & local functions</h4>
        <Code
          html={`<span class="kw">int</span> Double(<span class="kw">int</span> x) =&gt; x * 2; <span class="cm">// one-liner, no braces/return needed</span>

<span class="kw">int</span> ComputeDamage(<span class="kw">int</span> baseDmg)
{
    <span class="kw">int</span> ApplyCrit(<span class="kw">int</span> d) =&gt; d * 2; <span class="cm">// local function — scoped to this method</span>
    <span class="kw">return</span> ApplyCrit(baseDmg);
}`}
        />
      </Topic>

      <ModuleTitle>Module 2 — Core OOP</ModuleTitle>

      <Topic id="t5" no="05" title="Classes, Structs & Records">
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
          html={`<span class="kw">public</span> <span class="kw">record</span> Monster(<span class="kw">string</span> Name, <span class="kw">int</span> Hp);

<span class="kw">var</span> goblin1 = <span class="kw">new</span> Monster(<span class="str">"Goblin"</span>, 15);
<span class="kw">var</span> goblin2 = <span class="kw">new</span> Monster(<span class="str">"Goblin"</span>, 15);
<span class="ty">Console</span>.WriteLine(goblin1 == goblin2); <span class="cm">// true — compares values, not references</span>

<span class="cm">// non-destructive mutation with 'with'</span>
<span class="kw">var</span> woundedGoblin = goblin1 <span class="kw">with</span> { Hp = 5 };
<span class="cm">// goblin1 is untouched; woundedGoblin is a new record</span>`}
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
          Auto-properties generate the backing field for you. <code>init</code>{' '}
          (C# 9+) allows a property to be set during object initialization only
          — giving you immutability without a constructor parameter for every
          field.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Character
{
    <span class="kw">public</span> <span class="kw">string</span> Name { get; init; }
    <span class="kw">public</span> <span class="kw">int</span> Hp { get; <span class="kw">set</span>; } = 100; <span class="cm">// default value</span>

    <span class="kw">public</span> Character(<span class="kw">string</span> name) =&gt; Name = name;
}

<span class="kw">var</span> hero = <span class="kw">new</span> Character(<span class="str">"Pradeep the Bold"</span>) { Hp = 150 }; <span class="cm">// object initializer</span>`}
        />
        <h4>Primary constructors (C# 12+)</h4>
        <p>
          Classes and structs can declare constructor parameters right on the
          type declaration — no separate constructor body needed for simple
          cases.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Character(<span class="kw">string</span> name)
{
    <span class="kw">public</span> <span class="kw">string</span> Name { get; } = name;  <span class="cm">// use the primary ctor parameter directly</span>
    <span class="kw">public</span> <span class="kw">int</span> Hp { get; <span class="kw">set</span>; } = 100;
}`}
        />
        <h4>Static constructors</h4>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> GameConfig
{
    <span class="kw">public</span> <span class="kw">static</span> <span class="kw">readonly</span> <span class="kw">int</span> MaxLevel;
    <span class="kw">static</span> GameConfig() =&gt; MaxLevel = 99; <span class="cm">// runs once, before first use</span>
}`}
        />
      </Topic>

      <Topic id="t7" no="07" title="Inheritance & Interfaces">
        <p>
          A class inherits from exactly one base class (single inheritance) but
          can implement any number of interfaces. <code>virtual</code>/
          <code>override</code> control polymorphic behavior;{' '}
          <code>sealed</code> stops further overriding.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">interface</span> IAttacker
{
    <span class="kw">int</span> Attack();
}

<span class="kw">public</span> <span class="kw">class</span> Character
{
    <span class="kw">public</span> <span class="kw">virtual</span> <span class="kw">string</span> Describe() =&gt; <span class="str">"A character"</span>;
}

<span class="kw">public</span> <span class="kw">sealed</span> <span class="kw">class</span> Warrior : Character, IAttacker
{
    <span class="kw">public</span> <span class="kw">int</span> Attack() =&gt; 25;
    <span class="kw">public</span> <span class="kw">override</span> <span class="kw">string</span> Describe() =&gt; <span class="str">"A warrior, ready for battle"</span>;
    <span class="cm">// 'sealed' means nothing can inherit from Warrior further</span>
}`}
        />
        <h4>Default interface methods (C# 8+)</h4>
        <p>
          Interfaces can now provide a default implementation — useful for
          adding new members to an interface without breaking every existing
          implementer.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">interface</span> IAttacker
{
    <span class="kw">int</span> Attack();
    <span class="kw">int</span> CriticalAttack() =&gt; Attack() * 2; <span class="cm">// default implementation</span>
}`}
        />
        <p>
          Explicit interface implementation hides a member unless accessed
          through the interface type — handy when a class implements two
          interfaces with clashing member names.
        </p>
      </Topic>

      <Topic id="t8" no="08" title="Encapsulation">
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
          html={`<span class="kw">public</span> <span class="kw">class</span> Vault
{
    <span class="kw">private</span> <span class="kw">int</span> _gold = 0;
    <span class="kw">public</span> <span class="kw">void</span> Deposit(<span class="kw">int</span> amount)
    {
        <span class="kw">if</span> (amount &lt; 0) <span class="kw">throw</span> <span class="kw">new</span> <span class="ty">ArgumentException</span>(<span class="str">"Can't deposit negative gold"</span>);
        _gold += amount;
    }
    <span class="kw">public</span> <span class="kw">int</span> Balance =&gt; _gold; <span class="cm">// read-only view, get-only property</span>
}`}
        />
        <p>
          Properties can also have asymmetric accessibility — a public getter
          with a private setter is the most common pattern for &quot;readable
          everywhere, writable only inside the class&quot;:
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">int</span> Balance { get; <span class="kw">private</span> <span class="kw">set</span>; }`}
        />
      </Topic>

      <ModuleTitle>Module 3 — Type System Depth</ModuleTitle>

      <Topic id="t9" no="09" title="Generics">
        <p>
          Generics let one type or method work across many types safely — no
          boxing, no casting, full compile-time checking.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> LootBag&lt;T&gt;
{
    <span class="kw">private</span> <span class="kw">readonly</span> List&lt;T&gt; _items = <span class="kw">new</span>();
    <span class="kw">public</span> <span class="kw">void</span> Add(T item) =&gt; _items.Add(item);
    <span class="kw">public</span> T Random() =&gt; _items[<span class="kw">new</span> <span class="ty">Random</span>().Next(_items.Count)];
}

<span class="kw">var</span> bag = <span class="kw">new</span> LootBag&lt;<span class="kw">string</span>&gt;();
bag.Add(<span class="str">"Sword"</span>); bag.Add(<span class="str">"Potion"</span>);`}
        />
        <h4>Constraints — narrowing what T can be</h4>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Repository&lt;T&gt; <span class="kw">where</span> T : <span class="kw">class</span>, <span class="kw">new</span>()
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
            [<code>{'Queue<T>'}</code>, 'FIFO — turn order, task queues'],
            [<code>{'Stack<T>'}</code>, 'LIFO — undo history, DFS traversal'],
          ]}
        />
        <Code
          html={`<span class="kw">var</span> party = <span class="kw">new</span> List&lt;Character&gt; { hero, <span class="kw">new</span>(<span class="str">"Mage"</span>) { Hp = 60 } };

<span class="kw">var</span> lowHp = party.Where(c =&gt; c.Hp &lt; 100)
                     .Select(c =&gt; c.Name)
                     .ToList();

<span class="kw">var</span> strongest = party.OrderByDescending(c =&gt; c.Hp).First();
<span class="kw">var</span> byName = party.ToDictionary(c =&gt; c.Name);`}
        />
      </Topic>

      <Topic id="t11" no="11" title="Nullable Reference Types">
        <p>
          With <code>{'<Nullable>enable</Nullable>'}</code> (the default in new
          projects), the compiler tracks nullability as part of the type system
          and warns when you might dereference null — all at compile time, at
          zero runtime cost.
        </p>
        <Code
          html={`<span class="kw">string</span>? maybeName = FindBoss();       <span class="cm">// explicitly nullable</span>
<span class="kw">string</span> greeting = maybeName?.ToUpper() ?? <span class="str">"No boss found"</span>;

<span class="cm">// the null-forgiving operator — "trust me, compiler"</span>
<span class="kw">string</span> definitelyThere = maybeName!;

<span class="cm">// modern guard clause, .NET 7+</span>
<span class="ty">ArgumentNullException</span>.ThrowIfNull(maybeName);`}
        />
        <Callout variant="warn">
          <strong>Gotcha:</strong> nullable reference types are a
          compile-time-only warning system — they don&apos;t prevent null at
          runtime. A library compiled without them, or an <code>!</code>{' '}
          null-forgiving operator used carelessly, can still hand you a null.
        </Callout>
      </Topic>

      <Topic id="t12" no="12" title="Enums & Pattern Matching">
        <Code
          html={`<span class="kw">enum</span> Rarity { Common, Rare, Legendary }

[Flags]
<span class="kw">enum</span> StatusEffects { <span class="kw">None</span> = 0, Poisoned = 1, Stunned = 2, Burning = 4 }

<span class="kw">var</span> status = StatusEffects.Poisoned | StatusEffects.Burning; <span class="cm">// combine flags</span>
<span class="kw">bool</span> isPoisoned = status.HasFlag(StatusEffects.Poisoned);`}
        />
        <p>
          Pattern matching goes well beyond type checks — property patterns,
          relational patterns, and logical combinators (<code>and</code>/
          <code>or</code>/<code>not</code>) compose freely:
        </p>
        <Code
          html={`<span class="kw">record</span> Item(<span class="kw">string</span> Name, Rarity Rarity, <span class="kw">int</span> Power);

<span class="kw">string</span> Describe(Item i) =&gt; i <span class="kw">switch</span>
{
    { Rarity: Rarity.Legendary, Power: &gt; 90 } =&gt; <span class="str">"Game-breaking"</span>,
    { Rarity: Rarity.Common } <span class="kw">or</span> { Power: &lt; 5 } =&gt; <span class="str">"Vendor trash"</span>,
    <span class="kw">not</span> <span class="kw">null</span> =&gt; <span class="str">"Decent"</span>,
    <span class="kw">null</span> =&gt; <span class="str">"No item"</span>
};

<span class="cm">// 'is' pattern matching, outside switch entirely</span>
<span class="kw">if</span> (i <span class="kw">is</span> { Power: &gt; 50 } strong)
    <span class="ty">Console</span>.WriteLine($<span class="str">"{strong.Name} is strong"</span>);`}
        />
      </Topic>

      <ModuleTitle>Module 4 — Intermediate Tools</ModuleTitle>

      <Topic id="t13" no="13" title="Delegates & Events">
        <p>
          Delegates are type-safe function references — they can hold multiple
          methods (multicast). <code>Action</code>/<code>Func</code>/
          <code>Predicate</code> are built-in generic delegate types so you
          rarely declare your own. Events wrap a delegate field so only the
          declaring class can invoke it — outsiders may only <code>+=</code>/
          <code>-=</code>.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Boss
{
    <span class="kw">public</span> <span class="kw">event</span> Action? OnDefeated;              <span class="cm">// no data</span>
    <span class="kw">public</span> <span class="kw">event</span> Action&lt;<span class="kw">int</span>&gt;? OnDamaged;         <span class="cm">// carries an int</span>

    <span class="kw">public</span> <span class="kw">void</span> TakeDamage(<span class="kw">int</span> amount)
    {
        OnDamaged?.Invoke(amount);          <span class="cm">// ?. guards against zero subscribers</span>
    }
    <span class="kw">public</span> <span class="kw">void</span> Die() =&gt; OnDefeated?.Invoke();
}

<span class="kw">var</span> boss = <span class="kw">new</span> Boss();
boss.OnDefeated += () =&gt; <span class="ty">Console</span>.WriteLine(<span class="str">"Victory fanfare!"</span>);
boss.OnDamaged  += dmg =&gt; <span class="ty">Console</span>.WriteLine($<span class="str">"Ouch, {dmg}"</span>);
boss.OnDamaged  += dmg =&gt; <span class="ty">Console</span>.WriteLine(<span class="str">"(second handler, multicast!)"</span>);
boss.TakeDamage(15);
boss.Die();`}
        />
        <Callout variant="warn">
          <strong>Why events instead of a public delegate field?</strong> A
          public <code>Action</code> field lets any outside code call{' '}
          <code>OnDefeated = null</code>, wiping out every other subscriber, or
          invoke it directly. <code>event</code> prevents both — encapsulation
          applied to callbacks.
        </Callout>
      </Topic>

      <Topic id="t14" no="14" title="Exception Handling">
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> CharacterDeadException(<span class="kw">string</span> name) : <span class="ty">Exception</span>($<span class="str">"{name} is already dead"</span>);

<span class="kw">try</span>
{
    <span class="kw">if</span> (hp &lt;= 0) <span class="kw">throw</span> <span class="kw">new</span> CharacterDeadException(<span class="str">"Hero"</span>);
}
<span class="kw">catch</span> (CharacterDeadException ex) <span class="kw">when</span> (ex.Message.Contains(<span class="str">"Hero"</span>)) <span class="cm">// exception filter</span>
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
    <span class="ty">Console</span>.WriteLine(<span class="str">"Turn ended."</span>); <span class="cm">// always runs, even after a throw</span>
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
          Most LINQ operators are <strong>lazily evaluated (deferred)</strong> —
          building a query doesn&apos;t run it; enumerating it does (via{' '}
          <code>foreach</code>, <code>.ToList()</code>, <code>.Count()</code>,
          etc.).
        </p>
        <Code
          html={`<span class="kw">var</span> query = party.Where(c =&gt; c.Hp &gt; 0); <span class="cm">// not executed yet — just a plan</span>
party.Add(<span class="kw">new</span>(<span class="str">"Rogue"</span>) { Hp = 80 });
<span class="kw">foreach</span> (<span class="kw">var</span> c <span class="kw">in</span> query) { }         <span class="cm">// NOW it runs — Rogue IS included</span>`}
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
          html={`<span class="kw">var</span> byRarity = items.GroupBy(i =&gt; i.Rarity);
<span class="kw">var</span> totalPower = items.Aggregate(0, (sum, i) =&gt; sum + i.Power);
<span class="kw">var</span> parties = partyA.Join(partyB, a =&gt; a.Name, b =&gt; b.Name, (a, b) =&gt; a);`}
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
          Static methods in a static class, with <code>this</code> on the first
          parameter, that appear to &quot;extend&quot; a type you don&apos;t
          own.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">static</span> <span class="kw">class</span> CharacterExtensions
{
    <span class="kw">public</span> <span class="kw">static</span> <span class="kw">bool</span> IsAlive(<span class="kw">this</span> Character c) =&gt; c.Hp &gt; 0;
    <span class="kw">public</span> <span class="kw">static</span> Character Heal(<span class="kw">this</span> Character c, <span class="kw">int</span> amount)
    {
        c.Hp += amount;
        <span class="kw">return</span> c; <span class="cm">// returning 'this' enables chaining</span>
    }
}

hero.Heal(10).Heal(5); <span class="cm">// chained extension calls</span>
<span class="kw">if</span> (hero.IsAlive()) <span class="ty">Console</span>.WriteLine(<span class="str">"Still standing"</span>);`}
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
          <code>async</code>/<code>await</code> frees up the calling thread
          while waiting on I/O (network, disk, delay) — it does <em>not</em>{' '}
          automatically create new threads. <code>Task</code> represents
          &quot;work that will complete later&quot;; <code>{'Task<T>'}</code> is
          the same with a result value.
        </p>
        <Code
          html={`<span class="kw">async</span> Task&lt;<span class="kw">string</span>&gt; FetchQuestAsync(CancellationToken ct)
{
    <span class="kw">await</span> Task.Delay(1000, ct); <span class="cm">// simulate network call, cancellable</span>
    <span class="kw">return</span> <span class="str">"Defeat the dragon"</span>;
}

<span class="kw">var</span> quest = <span class="kw">await</span> FetchQuestAsync(CancellationToken.None);`}
        />
        <h4>Running things concurrently</h4>
        <Code
          html={`<span class="kw">var</span> questTask = FetchQuestAsync(CancellationToken.None);
<span class="kw">var</span> lootTask = FetchLootAsync();
<span class="kw">await</span> Task.WhenAll(questTask, lootTask); <span class="cm">// both run concurrently, wait for both</span>`}
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
          <code>{'Span<T>'}</code> is a stack-only (<code>ref struct</code>)
          view over contiguous memory — array, string, or{' '}
          <code>stackalloc</code> — with zero heap allocation for slicing.
        </p>
        <Code
          html={`<span class="kw">int</span>[] rolls = { 20, 15, 3, 18, 9 };
Span&lt;<span class="kw">int</span>&gt; topThree = rolls.AsSpan(0, 3); <span class="cm">// no copy — a view over the same memory</span>
topThree[0] = 99; <span class="cm">// mutates rolls[0] too, since it's the same backing array</span>

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
          The GC automatically reclaims managed memory in generations (0, 1, 2 —
          younger objects collected more often, cheaply).{' '}
          <code>IDisposable</code> exists for <em>unmanaged</em> resources the
          GC doesn&apos;t know how to release deterministically: file handles,
          sockets, database connections.
        </p>
        <Code
          html={`<span class="kw">using</span> <span class="kw">var</span> file = <span class="ty">File</span>.OpenText(<span class="str">"save.dat"</span>); <span class="cm">// using declaration, C# 8+</span>
<span class="kw">var</span> firstLine = file.ReadLine();
<span class="cm">// file.Dispose() called automatically at end of enclosing scope</span>`}
        />
        <p>
          The full Dispose pattern, for a class that owns unmanaged resources
          directly:
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> SaveFile : IDisposable
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
          Attributes attach metadata; reflection reads it at runtime. This is
          what powers serializers, dependency injection containers, and test
          runners under the hood.
        </p>
        <Code
          html={`[AttributeUsage(AttributeTargets.Class)]
<span class="kw">public</span> <span class="kw">class</span> LootTableAttribute(<span class="kw">string</span> table) : Attribute
{
    <span class="kw">public</span> <span class="kw">string</span> Table { get; } = table;
}

[LootTable(<span class="str">"dragon_hoard"</span>)]
<span class="kw">public</span> <span class="kw">class</span> Dragon { }

<span class="kw">var</span> type = <span class="kw">typeof</span>(Dragon);
<span class="kw">var</span> attr = type.GetCustomAttribute&lt;LootTableAttribute&gt;();
<span class="kw">var</span> instance = Activator.CreateInstance(type); <span class="cm">// creates a Dragon via reflection</span>`}
        />
        <Callout variant="warn">
          Reflection is slow relative to direct calls — avoid it in hot loops.
          This is exactly the problem source generators (next topic) solve.
        </Callout>
      </Topic>

      <Topic id="t21" no="21" title="Source Generators">
        <p>
          Source generators run <em>at compile time</em>, inspect your code, and
          emit additional C# source that gets compiled alongside it — giving
          reflection-like flexibility with zero runtime cost.{' '}
          <code>System.Text.Json</code>&apos;s source-generated serializers,
          compiled regex (<code>[GeneratedRegex]</code>), and modern logging (
          <code>[LoggerMessage]</code>) all work this way.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">partial</span> <span class="kw">class</span> RollRegex
{
    [GeneratedRegex(@<span class="str">"(\\d+)d(\\d+)"</span>)] <span class="cm">// e.g. matches "2d6"</span>
    <span class="kw">public</span> <span class="kw">static</span> <span class="kw">partial</span> Regex DiceNotation();
}
<span class="cm">// the generator fills in the actual implementation of DiceNotation() for you</span>`}
        />
        <p>
          You&apos;ll rarely author your own generator early on, but recognizing
          the <code>partial</code> + attribute pattern explains a lot of
          &quot;how does this even work&quot; moments in modern .NET libraries.
        </p>
      </Topic>

      <Topic id="t22" no="22" title="Advanced Pattern Matching & Records">
        <p>
          Records support inheritance and positional deconstruction, which
          combines beautifully with pattern matching for tree-shaped data — game
          state machines, ASTs, event sourcing.
        </p>
        <Code
          html={`<span class="kw">abstract</span> <span class="kw">record</span> GameEvent;
<span class="kw">record</span> Damage(<span class="kw">int</span> Amount) : GameEvent;
<span class="kw">record</span> Heal(<span class="kw">int</span> Amount) : GameEvent;
<span class="kw">record</span> StatusApplied(<span class="kw">string</span> Effect, <span class="kw">int</span> Duration) : GameEvent;

<span class="kw">int</span> Apply(<span class="kw">int</span> hp, GameEvent e) =&gt; e <span class="kw">switch</span>
{
    Damage(var amt) <span class="kw">when</span> amt &gt; 50 =&gt; hp - amt - 10, <span class="cm">// extra "overkill" penalty</span>
    Damage(var amt)                =&gt; hp - amt,
    Heal(var amt)                  =&gt; <span class="ty">Math</span>.Min(100, hp + amt),
    StatusApplied(<span class="str">"Poison"</span>, _)      =&gt; hp - 5,
    _                               =&gt; hp
};`}
        />
        <p>List patterns (C# 11+) match sequences directly:</p>
        <Code
          html={`<span class="kw">int</span>[] recentRolls = { 20, 20, 3 };
<span class="kw">if</span> (recentRolls <span class="kw">is</span> [20, 20, ..])
    <span class="ty">Console</span>.WriteLine(<span class="str">"Suspiciously lucky start..."</span>);`}
        />
      </Topic>

      <Topic id="t23" no="23" title="Threading & Parallelism">
        <p>
          <code>Task</code> is the modern unit of asynchronous/concurrent work;
          raw <code>Thread</code> is lower-level and rarely needed directly
          today. <code>lock</code> (built on <code>Monitor</code>) protects
          shared mutable state from race conditions.
        </p>
        <Code
          html={`<span class="kw">private</span> <span class="kw">readonly</span> <span class="kw">object</span> _lock = <span class="kw">new</span>();
<span class="kw">private</span> <span class="kw">int</span> _gold;

<span class="kw">void</span> AddGoldSafely(<span class="kw">int</span> amount)
{
    <span class="kw">lock</span> (_lock) { _gold += amount; }
}

<span class="cm">// simple atomic increment without a full lock</span>
Interlocked.Increment(<span class="kw">ref</span> _killCount);`}
        />
        <p>
          <code>Parallel.For</code>/<code>Parallel.ForEach</code> parallelize
          independent CPU-bound iterations across cores:
        </p>
        <Code
          html={`Parallel.ForEach(monsters, m =&gt; m.ComputeAggroScore());`}
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
      <Callout variant="new">
        <strong>Ships with .NET 10 / VS 2026 (Nov 2025).</strong> Language-level
        additions on top of everything above.
      </Callout>

      <Topic id="t24" no="24" title="Extension Members — the headline feature">
        <p>
          Extension methods existed since C# 3.0 but were method-only. C# 14
          introduces an <code>extension(...)</code> block that also allows{' '}
          <strong>extension properties</strong>,{' '}
          <strong>extension operators</strong>, and{' '}
          <strong>static extension members</strong> — all fully backward
          compatible with your existing extension methods.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">static</span> <span class="kw">class</span> CharacterExtensions
{
    <span class="kw">extension</span>(Character c)
    {
        <span class="kw">public</span> <span class="kw">bool</span> IsAlive =&gt; c.Hp &gt; 0;         <span class="cm">// extension property</span>
        <span class="kw">public</span> <span class="kw">bool</span> IsCritical =&gt; c.Hp &lt; 20;
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

<span class="kw">if</span> (hero.IsAlive &amp;&amp; !hero.IsCritical) <span class="ty">Console</span>.WriteLine(<span class="str">"Fighting fit"</span>);
<span class="kw">var</span> npcId = Guid.CreateDeterministic(<span class="str">"goblin-042"</span>); <span class="cm">// looks native to Guid</span>`}
        />
        <p>
          Use extension properties when reading something feels more natural
          than calling a method — <code>hero.IsAlive</code> reads better than{' '}
          <code>hero.IsAlive()</code>, especially when there&apos;s no side
          effect.
        </p>
      </Topic>

      <Topic id="t25" no="25" title="Null-Conditional Assignment">
        <p>
          You&apos;ve always been able to <em>read</em> through <code>?.</code>{' '}
          safely. Now you can <em>assign</em> through it too — if the target is
          null, the whole assignment is simply skipped, no exception, no
          separate null check needed.
        </p>
        <Code
          html={`Character? maybeHero = FindHero();
maybeHero?.Hp = 100; <span class="cm">// no-op if maybeHero is null</span>

<span class="cm">// compare to the old way, always needed before C# 14:</span>
<span class="kw">if</span> (maybeHero <span class="kw">is</span> <span class="kw">not</span> <span class="kw">null</span>)
    maybeHero.Hp = 100;`}
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
          Want simple logic in a property accessor — clamping, validation,
          change notification — without declaring your own backing field and
          losing the conciseness of auto-properties? <code>field</code> refers
          to the compiler-generated backing field directly, inside the accessor
          body.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">class</span> Character
{
    <span class="kw">public</span> <span class="kw">int</span> Hp
    {
        get;
        <span class="kw">set</span> =&gt; field = <span class="ty">Math</span>.Clamp(value, 0, 100); <span class="cm">// no manual backing field declared</span>
    }

    <span class="kw">public</span> <span class="kw">string</span> Name
    {
        get =&gt; field;
        <span class="kw">set</span> =&gt; field = value?.Trim() ?? <span class="str">"Unnamed"</span>;
    }
}`}
        />
        <p>
          Before C# 14 this required a fully manual backing field (
          <code>
            {'private int _hp; public int Hp { get => _hp; set => _hp = ...; }'}
          </code>
          ) just to add one line of logic — <code>field</code> removes that
          boilerplate entirely.
        </p>
      </Topic>

      <Topic id="t27" no="27" title="Partial Events & Constructors">
        <p>
          Partial types already supported partial methods; they hadn&apos;t
          supported partial <em>events</em> or <em>constructors</em> — a real
          gap for source generators that need to hook into object construction
          or add generated event plumbing. C# 14 closes it.
        </p>
        <Code
          html={`<span class="cm">// declaring half — e.g. hand-written file</span>
<span class="kw">public</span> <span class="kw">partial</span> <span class="kw">class</span> Boss
{
    <span class="kw">public</span> <span class="kw">partial</span> Boss(<span class="kw">string</span> name);
    <span class="kw">public</span> <span class="kw">partial</span> <span class="kw">event</span> Action OnEnrage;
}

<span class="cm">// implementing half — could be generated by a source generator</span>
<span class="kw">public</span> <span class="kw">partial</span> <span class="kw">class</span> Boss
{
    <span class="kw">public</span> <span class="kw">partial</span> Boss(<span class="kw">string</span> name) { Name = name; }
    <span class="kw">public</span> <span class="kw">partial</span> <span class="kw">event</span> Action OnEnrage
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
          Previously, overloading <code>+</code> meant that <code>x += y</code>{' '}
          desugared to <code>x = x + y</code> — always allocating a brand-new
          instance, even for a tiny in-place tweak. C# 14 lets you define{' '}
          <code>+=</code> itself, mutating in place — a real win for
          performance-sensitive numeric/vector types that get incremented in hot
          loops.
        </p>
        <Code
          html={`<span class="kw">public</span> <span class="kw">struct</span> Health
{
    <span class="kw">public</span> <span class="kw">int</span> Value;
    <span class="kw">public</span> <span class="kw">void</span> operator +=(<span class="kw">int</span> amount) =&gt; Value = <span class="ty">Math</span>.Min(100, Value + amount);
    <span class="kw">public</span> <span class="kw">void</span> operator -=(<span class="kw">int</span> amount) =&gt; Value = <span class="ty">Math</span>.Max(0, Value - amount);
}

<span class="kw">var</span> hp = <span class="kw">new</span> Health { Value = 90 };
hp += 20; <span class="cm">// clamps to 100, mutates Value in place — no new struct allocated</span>
hp -= 200; <span class="cm">// clamps to 0</span>`}
        />
      </Topic>

      <Topic
        id="t29"
        no="29"
        title="Span Conversions, nameof, Lambdas & File-Based Apps"
      >
        <p>A cluster of smaller-but-genuinely-handy additions:</p>
        <Code
          html={`<span class="cm">// implicit span conversion — array slices convert automatically, no .AsSpan() call</span>
<span class="kw">int</span>[] rolls = { 20, 15, 3, 18, 9 };
ReadOnlySpan&lt;<span class="kw">int</span>&gt; slice = rolls[..3];

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

      <ModuleTitle>Module 8 — Capstone</ModuleTitle>

      <Topic id="t30" no="30" title="Build Something Fun">
        <p>
          The best way to make all of the above stick is a small project that
          forces you to combine records, pattern matching, LINQ, async, and at
          least one C# 14 feature on purpose — not just read about them.
        </p>
        <Callout>
          <strong>Good capstone candidates:</strong>
          <ul>
            <li>
              <strong>Text-based dungeon crawler</strong> — records for
              rooms/monsters, pattern matching for combat resolution, extension
              members for character stat helpers.
            </li>
            <li>
              <strong>Mini leaderboard API</strong> — async all the way down,
              minimal APIs, LINQ for ranking/sorting.
            </li>
            <li>
              <strong>CLI dice-roller / TTRPG toolkit</strong> — generics for
              dice pools, the new <code>field</code> keyword for clamped stats,
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
