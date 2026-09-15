import {
  Callout,
  Code,
  ModuleTitle,
  RefTable,
  Topic,
} from '#/lib/tutorials/shared'
import type { NavGroup } from '#/lib/tutorials/shared'

export const efCoreNav: Array<NavGroup> = [
  {
    title: 'Start here',
    items: [{ id: 'setup', label: 'Setup & DbContext' }],
  },
  {
    title: 'Modeling the schema',
    items: [
      { id: 'modeling', label: 'Modeling entities' },
      { id: 'relationships', label: 'Relationships' },
      { id: 'migrations', label: 'Migrations' },
      { id: 'keys', label: 'Keys, indexes & keyless types' },
      { id: 'inheritance', label: 'Inheritance mapping' },
      { id: 'shadow', label: 'Shadow properties & backing fields' },
    ],
  },
  {
    title: 'Reading & writing data',
    items: [
      { id: 'querying', label: 'Querying & LINQ translation' },
      { id: 'tracking', label: 'Tracking, loading & N+1' },
      { id: 'writing', label: 'Writing data' },
      { id: 'owned', label: 'Owned types, JSON & converters' },
      { id: 'bulk', label: 'Bulk operations' },
      { id: 'rawsql', label: 'Raw SQL, procs & functions' },
      { id: 'disconnected', label: 'Disconnected entities' },
    ],
  },
  {
    title: 'Cross-cutting concerns',
    items: [
      { id: 'advanced', label: 'Filters, interceptors & compiled queries' },
      { id: 'pooling', label: 'Pooling & connection resiliency' },
      { id: 'logging', label: 'Logging & diagnostics' },
      { id: 'tenancy', label: 'Multi-tenancy patterns' },
    ],
  },
  {
    title: 'Ecosystem & practice',
    items: [
      { id: 'whatsnew', label: "What's new in EF Core 9 / 10" },
      { id: 'testing', label: 'Testing' },
      { id: 'performance', label: 'Performance checklist & pitfalls' },
      { id: 'tooling', label: 'Seeding & design-time tooling' },
      { id: 'providers', label: 'Provider landscape' },
    ],
  },
]

const CS_KEYWORDS = [
  'abstract',
  'as',
  'async',
  'await',
  'base',
  'bool',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'checked',
  'class',
  'const',
  'continue',
  'decimal',
  'default',
  'delegate',
  'do',
  'double',
  'else',
  'enum',
  'event',
  'explicit',
  'extern',
  'false',
  'finally',
  'fixed',
  'float',
  'for',
  'foreach',
  'get',
  'goto',
  'if',
  'implicit',
  'in',
  'init',
  'int',
  'interface',
  'internal',
  'is',
  'lock',
  'long',
  'namespace',
  'new',
  'not',
  'null',
  'object',
  'on',
  'operator',
  'out',
  'override',
  'params',
  'partial',
  'private',
  'protected',
  'public',
  'readonly',
  'record',
  'ref',
  'required',
  'return',
  'sbyte',
  'sealed',
  'set',
  'short',
  'sizeof',
  'stackalloc',
  'static',
  'string',
  'struct',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'uint',
  'ulong',
  'unchecked',
  'unsafe',
  'ushort',
  'using',
  'value',
  'var',
  'virtual',
  'void',
  'volatile',
  'when',
  'where',
  'while',
  'with',
  'yield',
]

const CS_TYPES = [
  'Console',
  'Random',
  'DateTime',
  'TimeSpan',
  'Task',
  'List',
  'IEnumerable',
  'IQueryable',
  'IList',
  'IReadOnlyCollection',
  'Dictionary',
  'Func',
  'Action',
  'Guid',
  'Exception',
  'DbContext',
  'DbSet',
  'DbContextOptions',
  'DbContextOptionsBuilder',
  'ModelBuilder',
  'EntityTypeBuilder',
  'IEntityTypeConfiguration',
  'PropertyAccessMode',
  'QueryTrackingBehavior',
  'EntityState',
  'EntityEntry',
  'DbUpdateConcurrencyException',
  'DbUpdateException',
  'SaveChangesInterceptor',
  'InterceptionResult',
  'DbContextEventData',
  'IDbContextFactory',
  'IDesignTimeDbContextFactory',
  'MsSqlBuilder',
  'Hero',
  'Mission',
  'Superpower',
  'Villain',
  'SecretIdentity',
  'HeroPower',
  'Address',
  'Gadget',
  'PoweredHero',
  'VigilanteHero',
  'HeroLeaderboardRow',
  'AcademyDbContext',
  'AcademyDbContextFactory',
  'LogLevel',
  'HttpPut',
  'IActionResult',
  'EF',
  'DeleteBehavior',
  'MaxLength',
  'Required',
  'Column',
  'Owned',
  'Timestamp',
]

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function highlightCsharp(code: string): string {
  const kwPattern = CS_KEYWORDS.join('|')
  const tyPattern = CS_TYPES.join('|')
  const master = new RegExp(
    `(//[^\\n]*)|(\\$)?("(?:\\\\.|[^"\\\\])*")|\\b(${tyPattern})\\b|\\b(${kwPattern})\\b`,
    'g',
  )
  return escapeHtml(code).replace(
    master,
    (match, comment, prefix, quoted, ty, kw) => {
      if (comment) return `<span class="cm">${comment}</span>`
      if (quoted) return `${prefix ?? ''}<span class="str">${quoted}</span>`
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

function Cs({ code }: { code: string }) {
  return <Code html={highlightCsharp(code)} />
}

function Bash({ code }: { code: string }) {
  return <Code html={highlightBash(code)} />
}

export function EfCoreContent() {
  return (
    <>
      <ModuleTitle>Start here</ModuleTitle>

      <Topic id="setup" no="01" title="Setup & DbContext">
        <p>
          Every example in this walkthrough queries the same running schema — a
          superhero academy&apos;s database: <code>Hero</code>,{' '}
          <code>Superpower</code>, <code>Mission</code>,{' '}
          <code>SecretIdentity</code>, <code>Villain</code>, and{' '}
          <code>HeroPower</code>. One schema, every relationship shape, so
          nothing has to be re-explained from scratch each chapter.
        </p>
        <Bash
          code={`dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools`}
        />
        <Cs
          code={`public class AcademyDbContext : DbContext
{
    public DbSet<Hero> Heroes => Set<Hero>();
    public DbSet<Superpower> Superpowers => Set<Superpower>();
    public DbSet<Mission> Missions => Set<Mission>();
    public DbSet<Villain> Villains => Set<Villain>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AcademyDbContext).Assembly);
    }
}`}
        />
        <p>DI registration in Program.cs:</p>
        <Cs
          code={`builder.Services.AddDbContext<AcademyDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Academy"))
           .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTrackingWithIdentityResolution)
);`}
        />
        <p>
          A <code>DbContext</code> is two things at once: a{' '}
          <strong>unit of work</strong> and an <strong>identity map</strong>. As
          a unit of work, it batches every <code>Add</code>/<code>Update</code>/
          <code>Remove</code> you make and flushes them as one transaction when
          you call <code>SaveChangesAsync</code> — you&apos;re not talking to
          the database on every line, you&apos;re building up a set of intended
          changes. As an identity map, it guarantees that querying for the same
          row twice within one context returns the exact same C# object
          reference the second time, pulled from its internal change tracker
          rather than the database — which is also why a stale in-memory copy
          can silently diverge from what&apos;s actually in the table if
          something else updates that row concurrently.
        </p>
        <p>
          <code>AddDbContext</code> registers as <strong>Scoped</strong> — one
          instance per HTTP request — and that follows directly from what a
          DbContext is. Its identity map and pending-changes list only make
          sense for the lifetime of one unit of work; sharing it across requests
          would mean one caller&apos;s uncommitted changes leaking into
          another&apos;s query results. DbContext is also not thread-safe
          internally — its change tracker isn&apos;t synchronized — so two
          coroutines touching the same instance concurrently (a parallel{' '}
          <code>Task.WhenAll</code>, for instance) corrupt its internal state
          rather than just running slowly. That&apos;s the root cause behind
          &quot;A second operation was started on this context&quot; exceptions:
          it&apos;s not a networking issue, it&apos;s two threads mutating one
          tracker at once. Never register DbContext Singleton for the same
          reason — a singleton would accumulate tracked entities and pending
          changes across every request the app ever serves.
        </p>
        <Callout>
          For places that genuinely need concurrency against the same logical
          unit of work, use <code>IDbContextFactory&lt;T&gt;</code> (
          <code>AddDbContextFactory</code>) and create a fresh context per
          parallel branch instead.
        </Callout>
      </Topic>

      <ModuleTitle>Modeling the schema</ModuleTitle>

      <Topic id="modeling" no="02" title="Modeling entities">
        <p>
          Under the hood, all three of these approaches — conventions,
          annotations, Fluent API — feed the same destination: EF builds an
          in-memory <strong>model</strong> (an <code>IModel</code>) that
          describes every entity type, property, key, and relationship before it
          ever touches a database. Migrations, queries, and change tracking all
          work off that model, not off your C# classes directly. Conventions
          populate it first, annotations override specific pieces of it, and
          Fluent API — evaluated last, in <code>OnModelCreating</code> — wins
          any conflict. That ordering is why Fluent API is described as
          &quot;the real answer&quot;: it&apos;s applied after everything else
          and can override any convention or annotation.
        </p>

        <h3>Conventions</h3>
        <p>
          Follow the naming rules and EF infers everything — <code>Id</code>{' '}
          becomes the primary key, navigation properties become foreign keys.
          This works by reflection: EF scans your entity classes and their
          properties at startup, matching property names and types against a
          fixed rule set (a property literally named <code>Id</code>, or{' '}
          <code>&lt;TypeName&gt;Id</code>, becomes the key; a{' '}
          <code>string</code> becomes <code>nvarchar(max)</code> unless told
          otherwise; a reference to another entity type becomes a foreign key
          relationship). Conventions are what make a brand-new entity class
          usable with zero configuration, and they&apos;re why EF Core
          &quot;just works&quot; for straightforward CRUD models — but
          they&apos;re inferring intent from shape, which is exactly why
          anything that deviates from the expected shape needs to be told
          explicitly.
        </p>
        <Cs
          code={`public class Hero
{
    public int Id { get; set; }
    public string CodeName { get; set; } = string.Empty;
    public int PowerLevel { get; set; }
}`}
        />

        <h3>Data annotations</h3>
        <Cs
          code={`public class Hero
{
    public int Id { get; set; }

    [Required, MaxLength(50)]
    public string CodeName { get; set; } = string.Empty;

    [Column(TypeName = "decimal(5,2)")]
    public decimal PowerLevel { get; set; }
}`}
        />

        <h3>Fluent API</h3>
        <p>
          The real answer for anything relational.{' '}
          <code>IEntityTypeConfiguration&lt;T&gt;</code> plus{' '}
          <code>ApplyConfigurationsFromAssembly</code> keeps this out of your
          domain classes entirely.
        </p>
        <Cs
          code={`public class HeroConfiguration : IEntityTypeConfiguration<Hero>
{
    public void Configure(EntityTypeBuilder<Hero> builder)
    {
        builder.HasKey(h => h.Id);
        builder.Property(h => h.CodeName).IsRequired().HasMaxLength(50);
        builder.HasIndex(h => h.CodeName).IsUnique();
    }
}`}
        />
        <Callout>
          Rule of thumb: annotations for simple constraints on your own model,
          Fluent API for anything relational or multi-entity. In a Clean
          Architecture layout, Fluent API in the infrastructure layer keeps
          domain entities annotation-free.
        </Callout>
      </Topic>

      <Topic id="relationships" no="03" title="Relationships">
        <p>
          Every relationship in EF Core boils down to the same underlying
          mechanic — a foreign key column on one side pointing at a primary key
          on the other — dressed up differently depending on how many rows can
          point at how many other rows. What changes between 1:1, 1:N, and N:N
          isn&apos;t the storage mechanism so much as where the FK lives and
          whether a join table sits in between. Understanding that makes all
          four shapes below variations on one idea rather than four things to
          memorize separately.
        </p>

        <h3>One-to-one — a hero and their secret identity</h3>
        <p>
          A 1:1 relationship is really a 1:N relationship where you&apos;ve
          additionally promised EF that the &quot;many&quot; side will never
          have more than one row per parent — enforced by putting a{' '}
          <em>unique</em> constraint on the foreign key column.{' '}
          <code>SecretIdentity.HeroId</code> is both the FK and (implicitly, via{' '}
          <code>HasOne().WithOne()</code>) a unique index. Whichever side holds
          the FK is the <strong>dependent</strong> — it can&apos;t exist without
          a parent — and the other is the <strong>principal</strong>. Here, a
          SecretIdentity is meaningless without its Hero, so it&apos;s the
          dependent; deleting the Hero should cascade to it.
        </p>
        <Cs
          code={`public class Hero
{
    public int Id { get; set; }
    public string CodeName { get; set; } = "";
    public SecretIdentity? Identity { get; set; }
}

public class SecretIdentity
{
    public int Id { get; set; }
    public string RealName { get; set; } = "";
    public int HeroId { get; set; }
    public Hero Hero { get; set; } = null!;
}`}
        />
        <Cs
          code={`builder.Entity<Hero>()
    .HasOne(h => h.Identity)
    .WithOne(i => i.Hero)
    .HasForeignKey<SecretIdentity>(i => i.HeroId);`}
        />

        <h3>One-to-many — a hero and their missions</h3>
        <Cs
          code={`public class Hero
{
    public List<Mission> Missions { get; } = [];
}
public class Mission
{
    public int Id { get; set; }
    public string Objective { get; set; } = "";
    public int HeroId { get; set; }
    public Hero Hero { get; set; } = null!;
}`}
        />
        <p>
          EF infers this automatically from the navigation plus FK naming —
          Fluent API is only needed for delete behavior:
        </p>
        <Cs
          code={`builder.Entity<Mission>()
    .HasOne(m => m.Hero)
    .WithMany(h => h.Missions)
    .OnDelete(DeleteBehavior.Cascade);`}
        />

        <h3>Many-to-many — heroes and superpowers</h3>
        <p>
          Relational databases have no native way to store &quot;many rows
          relate to many other rows&quot; — a single FK column can only point at
          one row. So a many-to-many relationship is always, underneath, two
          one-to-many relationships meeting at a third table in the middle (
          <code>HeroPowers</code>, with FK columns pointing at both{' '}
          <code>Heroes</code> and <code>Superpowers</code>). EF Core has
          supported implicit join tables (no join entity class) since EF5 — it
          generates and manages that middle table for you invisibly:
        </p>
        <Cs
          code={`public class Hero
{
    public List<Superpower> Powers { get; } = [];
}
public class Superpower
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Hero> Heroes { get; } = [];
}

builder.Entity<Hero>()
    .HasMany(h => h.Powers)
    .WithMany(p => p.Heroes)
    .UsingEntity(j => j.ToTable("HeroPowers"));`}
        />
        <p>
          If the join needs its own data — say, <code>DateGranted</code> — use
          an explicit join entity: two one-to-many relationships stitched
          together instead.
        </p>
        <Cs
          code={`public class HeroPower
{
    public int HeroId { get; set; }
    public Hero Hero { get; set; } = null!;
    public int SuperpowerId { get; set; }
    public Superpower Superpower { get; set; } = null!;
    public DateTime DateGranted { get; set; }
}`}
        />

        <h3>Self-referencing — mentors and mentees</h3>
        <Cs
          code={`public class Hero
{
    public int? MentorId { get; set; }
    public Hero? Mentor { get; set; }
    public List<Hero> Mentees { get; } = [];
}

builder.Entity<Hero>()
    .HasOne(h => h.Mentor)
    .WithMany(h => h.Mentees)
    .HasForeignKey(h => h.MentorId)
    .OnDelete(DeleteBehavior.Restrict);`}
        />
      </Topic>

      <Topic id="migrations" no="04" title="Migrations">
        <Bash
          code={`dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet ef migrations remove          # undo the last unapplied migration
dotnet ef migrations add AddVillains
dotnet ef database update PreviousMigrationName   # roll back to a point`}
        />
        <p>
          A migration is how EF turns a change to your C# model into a change to
          the actual database schema, without you hand-writing{' '}
          <code>ALTER TABLE</code> statements. When you run{' '}
          <code>migrations add</code>, EF compares your current model against a
          saved <strong>snapshot</strong> of what the model looked like as of
          the last migration — a plain C# file (<code>*ModelSnapshot.cs</code>)
          that&apos;s really just a serialized copy of the model discussed in
          Modeling entities. Whatever&apos;s different becomes the new
          migration&apos;s <code>Up()</code> method (and, mechanically inverted,
          its <code>Down()</code>); the snapshot is then updated to match. This
          is why the snapshot file must never be hand-edited: it&apos;s
          EF&apos;s source of truth for &quot;what the database should currently
          look like,&quot; and editing it out of sync with the actual migration
          history desynchronizes every future diff.
        </p>
        <p>
          Each migration produces a <code>Migration</code> class with{' '}
          <code>Up()</code>/<code>Down()</code>, plus that updated model
          snapshot. <code>database update</code> then runs any pending
          migrations&apos; <code>Up()</code> methods against the real database,
          in order, tracked via a <code>__EFMigrationsHistory</code> table so EF
          knows which ones have already been applied.
        </p>
        <ul>
          <li>
            <strong>Never hand-edit the snapshot file</strong> — let{' '}
            <code>dotnet ef</code> regenerate it.
          </li>
          <li>
            <code>dotnet ef migrations script</code> produces raw SQL for DBAs
            who won&apos;t allow <code>database update</code> directly against
            production.
          </li>
          <li>
            Multiple <code>DbContext</code>s in one project? Pass{' '}
            <code>--context AcademyDbContext</code>.
          </li>
          <li>
            Seeding:{' '}
            <code>
              HasData(new Superpower {'{'} Id = 1, Name = &quot;Flight&quot;{' '}
              {'}'})
            </code>{' '}
            — static data baked into migrations, not for anything that changes
            at runtime.
          </li>
        </ul>
      </Topic>

      <Topic id="keys" no="14" title="Keys, indexes & keyless types">
        <h3>Composite keys</h3>
        <p>
          Some entities are only unique by a combination of columns — only
          Fluent API can express this, there&apos;s no annotation for it:
        </p>
        <Cs
          code={`public class HeroPower
{
    public int HeroId { get; set; }
    public int SuperpowerId { get; set; }
    public DateTime DateGranted { get; set; }
}

builder.Entity<HeroPower>().HasKey(hp => new { hp.HeroId, hp.SuperpowerId });`}
        />

        <h3>Alternate keys</h3>
        <p>
          A uniqueness constraint EF can use as an FK target that{' '}
          <em>isn&apos;t</em> the primary key — a hero&apos;s public call-sign,
          say:
        </p>
        <Cs code={`builder.Entity<Hero>().HasAlternateKey(h => h.CallSign);`} />

        <h3>Indexes</h3>
        <p>
          An index is a separate, ordered data structure the database maintains
          alongside a table so it can find matching rows without scanning every
          row — the same reason a book&apos;s index beats reading every page to
          find a topic. It costs write performance (every insert/update also has
          to update the index) to buy read performance, so indexes go on columns
          actually filtered or joined on in real queries, not on every column
          defensively. A composite index like the one on{' '}
          <code>(HeroId, CompletedDate)</code> only helps queries that filter on{' '}
          <code>HeroId</code> alone or on both columns together, in that order —
          it doesn&apos;t help a query that filters on{' '}
          <code>CompletedDate</code> alone, because the structure is sorted by
          the first column first.
        </p>
        <Cs
          code={`builder.Entity<Hero>().HasIndex(h => h.CodeName).IsUnique();

builder.Entity<Mission>()
    .HasIndex(m => new { m.HeroId, m.CompletedDate });

// Filtered — only index active heroes, smaller and faster
builder.Entity<Hero>()
    .HasIndex(h => h.CodeName)
    .HasFilter("[IsRetired] = 0");`}
        />

        <h3>Keyless entity types</h3>
        <p>
          For mapping a database view or a raw query result that has no natural
          primary key — <code>HasNoKey()</code> tells EF not to expect one and
          not to track it:
        </p>
        <Cs
          code={`public class HeroLeaderboardRow
{
    public string CodeName { get; set; } = "";
    public int MissionsCompleted { get; set; }
}

builder.Entity<HeroLeaderboardRow>().HasNoKey().ToView("HeroLeaderboard");`}
        />
      </Topic>

      <Topic id="inheritance" no="15" title="Inheritance mapping">
        <p>
          C# inheritance and relational tables don&apos;t map onto each other
          naturally — a table is a flat set of columns, a class hierarchy is a
          tree of increasingly specific shapes. EF Core has to pick a strategy
          for flattening that tree into tables, and it offers all three of the
          standard ones, each trading off differently between query speed,
          storage efficiency, and schema normalization.
        </p>
        <Cs
          code={`public abstract class Hero
{
    public int Id { get; set; }
    public string CodeName { get; set; } = "";
}
public class PoweredHero : Hero { public string PrimaryPower { get; set; } = ""; }
public class VigilanteHero : Hero { public string GadgetLoadout { get; set; } = ""; }`}
        />

        <h3>Table-per-hierarchy (TPH) — the default</h3>
        <p>
          One table for the whole hierarchy, plus a discriminator column. Every
          column any subtype needs exists on that single table — a{' '}
          <code>PoweredHero</code> row has a real value in{' '}
          <code>PrimaryPower</code> and a <code>NULL</code> in{' '}
          <code>GadgetLoadout</code>, and vice versa for a{' '}
          <code>VigilanteHero</code> row. The hidden <code>HeroType</code>{' '}
          discriminator column is how EF knows, when materializing a row, which
          C# subclass to construct. Reading any hero — regardless of subtype —
          is one table, no JOIN, which is fast; the cost is paid in schema
          cleanliness, since the table accumulates every subtype&apos;s columns
          as nullable, whether or not a given row uses them.
        </p>
        <Cs
          code={`builder.Entity<Hero>()
    .HasDiscriminator<string>("HeroType")
    .HasValue<PoweredHero>("Powered")
    .HasValue<VigilanteHero>("Vigilante");`}
        />

        <h3>Table-per-type (TPT)</h3>
        <p>
          One table per class, joined by shared key — a <code>Heroes</code>{' '}
          table with the shared <code>Id</code>/<code>CodeName</code> columns,
          plus a <code>PoweredHeroes</code> table holding only{' '}
          <code>PrimaryPower</code> for rows that are that subtype, linked by
          matching primary key. This is straightforward relational normalization
          — no column ever holds a NULL because it belongs to a different
          subtype — but reconstructing a <code>PoweredHero</code> means joining{' '}
          <code>Heroes</code> to <code>PoweredHeroes</code>, and querying across
          the whole hierarchy for all heroes regardless of type means joining
          across every subtype table via <code>UNION</code>-like logic. The
          normalization is real, and so is the JOIN cost on every read.
        </p>
        <Cs
          code={`builder.Entity<Hero>().ToTable("Heroes");
builder.Entity<PoweredHero>().ToTable("PoweredHeroes");
builder.Entity<VigilanteHero>().ToTable("VigilanteHeroes");`}
        />

        <h3>Table-per-concrete-type (TPC)</h3>
        <p>
          One fully independent table per concrete class, each with its own copy
          of the base columns — <code>PoweredHeroes</code> has its own{' '}
          <code>Id</code>/<code>CodeName</code> plus <code>PrimaryPower</code>,{' '}
          <code>VigilanteHeroes</code> has its own copy plus{' '}
          <code>GadgetLoadout</code>. No JOINs to reconstruct any single
          subtype, and no wasted nullable columns — but because each
          table&apos;s <code>Id</code> is independently generated, two different
          tables can produce the same ID value, so there&apos;s no single-table
          uniqueness guarantee across the hierarchy unless you deliberately
          partition the ID ranges or use GUIDs. Querying across the whole
          hierarchy also costs a <code>UNION ALL</code> across every concrete
          table, since there&apos;s no longer one shared table to query
          directly.
        </p>
        <Cs
          code={`builder.Entity<Hero>().UseTpcMappingStrategy();
builder.Entity<PoweredHero>().ToTable("PoweredHeroes");
builder.Entity<VigilanteHero>().ToTable("VigilanteHeroes");`}
        />
        <Callout>
          Default to TPH unless you have a concrete reason not to — it&apos;s
          what EF optimizes for, and the &quot;wide nullable table&quot; cost is
          usually smaller in practice than the JOIN cost of TPT or the
          duplication cost of TPC.
        </Callout>
      </Topic>

      <Topic id="shadow" no="16" title="Shadow properties & backing fields">
        <h3>Shadow properties</h3>
        <p>
          Modeling entities established that EF&apos;s model — not your C# class
          — is what actually drives queries and schema. A shadow property makes
          that gap visible: it&apos;s an entry in the model with no backing CLR
          property at all, so EF tracks and persists a value for it purely at
          the metadata level, accessible only through the change tracker&apos;s
          string-keyed <code>Property(&quot;Name&quot;)</code> API rather than a
          normal dot-accessed member.
        </p>
        <p>
          A column that exists in the database and in EF&apos;s model, but has
          no corresponding CLR property — useful for FK columns you don&apos;t
          want cluttering a domain entity, or audit columns a domain model
          shouldn&apos;t know about:
        </p>
        <Cs
          code={`builder.Entity<Mission>()
    .Property<DateTime>("CreatedAt")
    .HasDefaultValueSql("GETUTCDATE()");

// read/write it via the change tracker, not a property
context.Entry(mission).Property("CreatedAt").CurrentValue = DateTime.UtcNow;`}
        />

        <h3>Backing fields</h3>
        <p>
          Point EF at a private field instead of a public property setter — lets
          a domain entity expose a read-only collection publicly while EF still
          mutates the underlying field directly:
        </p>
        <Cs
          code={`public class Hero
{
    private readonly List<Mission> _missions = [];
    public IReadOnlyCollection<Mission> Missions => _missions.AsReadOnly();
}

builder.Entity<Hero>()
    .Metadata.FindNavigation(nameof(Hero.Missions))!
    .SetPropertyAccessMode(PropertyAccessMode.Field);`}
        />
      </Topic>

      <ModuleTitle>Reading & writing data</ModuleTitle>

      <Topic id="querying" no="05" title="Querying & LINQ translation">
        <p>
          EF translates expression trees into SQL — it does not execute in
          memory.
        </p>
        <Cs
          code={`var flyers = await context.Heroes
    .Where(h => h.Powers.Any(p => p.Name == "Flight"))
    .OrderByDescending(h => h.PowerLevel)
    .Select(h => new { h.CodeName, h.PowerLevel })
    .ToListAsync();`}
        />
        <p>
          A LINQ query against a <code>DbSet</code> doesn&apos;t run in C# at
          all until you enumerate it — each method call (<code>Where</code>,{' '}
          <code>OrderByDescending</code>, <code>Select</code>) builds up an{' '}
          <strong>expression tree</strong>, a data structure describing the
          query rather than executing it. Only when you call{' '}
          <code>ToListAsync()</code>, <code>FirstAsync()</code>, or otherwise
          enumerate does EF&apos;s query pipeline walk that tree, translate each
          node into the target database&apos;s SQL dialect, and send it over the
          wire. This is the entire reason EF can support SQL Server, PostgreSQL,
          and SQLite behind identical C# — the same expression tree, translated
          by three different providers into three different SQL syntaxes.
          It&apos;s also why query composition works:{' '}
          <code>context.Heroes.Where(...).OrderBy(...)</code> keeps building the
          same tree across multiple lines without hitting the database until the
          final enumeration.
        </p>
        <p>
          Anything EF can&apos;t translate — a custom C# method, most
          culture-specific string comparisons — throws at runtime. EF Core 10 is
          stricter about this than older versions: untranslatable expressions in{' '}
          <code>Where</code>/<code>Select</code> throw immediately rather than
          quietly falling back to pulling the whole table into memory.
        </p>
        <Callout>
          Always prefer <code>Select</code> projections over pulling full
          entities when you only need a few columns — smaller result sets, no
          unnecessary tracking, a leaner generated <code>SELECT</code>.
        </Callout>
      </Topic>

      <Topic id="tracking" no="06" title="Tracking, loading, and N+1">
        <p>The single biggest performance lever in EF Core.</p>
        <Cs
          code={`// Tracked — snapshots every property, needed if you'll SaveChanges
var hero = await context.Heroes.FirstAsync(h => h.Id == 1);

// Untracked — skip snapshotting, use for read-only queries
var heroes = await context.Heroes.AsNoTracking().ToListAsync();`}
        />
        <p>
          The change tracker is the mechanism that makes{' '}
          <code>SaveChangesAsync</code> know what to write without you telling
          it explicitly. When EF loads a tracked entity, it takes an internal
          snapshot of every property&apos;s value at that moment. Later,{' '}
          <code>SaveChangesAsync</code> compares the entity&apos;s current
          values against that snapshot, property by property, and generates an{' '}
          <code>UPDATE</code> containing only the columns that actually changed.
          That snapshotting — allocating and maintaining a shadow copy of every
          tracked entity — is real overhead: CPU to compare on every save,
          memory to hold the snapshots, and it compounds across large result
          sets. <code>AsNoTracking()</code> skips all of it: EF materializes the
          entities and hands them to you, but never registers them with the
          tracker, so there&apos;s nothing to snapshot, compare, or later
          mistakenly try to save. That&apos;s why reads use{' '}
          <code>AsNoTracking()</code> plus projections and writes use tracked
          entities plus domain methods — that split is the standard EF Core
          performance pattern, not just a stylistic preference.
        </p>

        <h3>Loading related data</h3>
        <Cs
          code={`// Eager — one query (or split queries, see below)
var heroes = await context.Heroes.Include(h => h.Missions).ToListAsync();

// Explicit — load on demand after the fact
await context.Entry(hero).Collection(h => h.Missions).LoadAsync();

// Lazy — fires automatically on access (needs Proxies package + virtual props)`}
        />
        <Callout variant="warn">
          Lazy loading needs <code>Microsoft.EntityFrameworkCore.Proxies</code>,{' '}
          <code>UseLazyLoadingProxies()</code>, and <code>virtual</code>{' '}
          navigation properties. Avoid it in web APIs — it&apos;s the classic
          N+1 generator, firing one query per iteration without any visible
          signal in the code that it&apos;s happening.
        </Callout>

        <h3>N+1, concretely</h3>
        <p>
          This is what &quot;N+1&quot; names: one query to fetch N rows,
          followed by N more queries — one per row — to fetch each row&apos;s
          related data, because that access happened lazily or inside a loop
          instead of being requested up front. The database round-trip cost, not
          the byte count, is what makes this expensive: one query returning
          related data for 500 heroes in a single round trip is dramatically
          cheaper than 501 separate round trips fetching similar data, even if
          the total bytes are alike. <code>Include</code> collapses that back
          into one round trip (or one per collection, with{' '}
          <code>AsSplitQuery</code>) by telling EF up front exactly what related
          data the query will need, so it can be fetched alongside the main
          result instead of triggered reactively.
        </p>
        <Cs
          code={`// BAD — 1 query for heroes, then N queries for missions
var heroes = await context.Heroes.ToListAsync();
foreach (var h in heroes) { var count = h.Missions.Count; }

// GOOD — 1 query total
var heroes = await context.Heroes.Include(h => h.Missions).ToListAsync();`}
        />

        <h3>Split queries</h3>
        <p>
          <code>Include</code>-ing multiple collections on one entity generates
          a single JOIN that can cartesian-explode. A relational JOIN produces
          one output row per matching combination, so joining Heroes to both
          Missions and Powers doesn&apos;t give you &quot;each hero&apos;s
          missions plus each hero&apos;s powers&quot; — it gives you every{' '}
          <em>combination</em> of a hero&apos;s missions and powers, with the
          hero&apos;s own columns repeated once per combination. A hero with 10
          missions and 5 powers doesn&apos;t come back as 15 rows, it comes back
          as 50, each carrying a duplicate copy of the hero data EF then has to
          deduplicate client-side. With more collections or bigger counts, that
          multiplication turns a modest query into a genuinely enormous result
          set.
        </p>
        <Cs
          code={`var heroes = await context.Heroes
    .Include(h => h.Missions)
    .Include(h => h.Powers)
    .AsSplitQuery()   // separate SELECT per collection, not one giant JOIN
    .ToListAsync();`}
        />
      </Topic>

      <Topic id="writing" no="07" title="Writing data">
        <p>Change tracker states, transactions, and optimistic concurrency.</p>
        <Cs
          code={`context.Heroes.Add(new Hero { CodeName = "Nightowl" });   // → Added
context.Entry(hero).State = EntityState.Modified;          // manual, rarely needed
context.Heroes.Remove(hero);                                // → Deleted
await context.SaveChangesAsync();                            // one transaction, all of it`}
        />
        <p>
          Every tracked entity sits in exactly one of five states at any moment:{' '}
          <code>Unchanged</code> (loaded, untouched), <code>Modified</code> (a
          tracked property differs from its snapshot), <code>Added</code> (new,
          no row exists yet), <code>Deleted</code> (marked for removal, row
          still exists until save), or <code>Detached</code> (not tracked at
          all). Calling <code>SaveChangesAsync</code> walks every tracked
          entity, and for each one not <code>Unchanged</code>, generates the
          corresponding <code>INSERT</code>/<code>UPDATE</code>/
          <code>DELETE</code> — batched together and sent as one implicit
          transaction, so a failure partway through rolls the whole batch back
          rather than leaving the database half-written. That automatic wrapping
          is why explicit transactions in EF are the exception rather than the
          rule: you only reach for <code>BeginTransactionAsync</code> when you
          need atomicity spanning <em>multiple</em> <code>SaveChanges</code>{' '}
          calls, or when mixing EF&apos;s writes with raw ADO/Dapper commands
          that fall outside its own transaction.
        </p>
        <Cs
          code={`await using var tx = await context.Database.BeginTransactionAsync();
try
{
    context.Heroes.Add(newHero);
    await context.SaveChangesAsync();

    context.Missions.Add(new Mission { HeroId = newHero.Id, Objective = "Stop the meteor" });
    await context.SaveChangesAsync();

    await tx.CommitAsync();
}
catch { await tx.RollbackAsync(); throw; }`}
        />

        <h3>Concurrency tokens</h3>
        <p>
          EF&apos;s default concurrency handling is <strong>optimistic</strong>{' '}
          — it assumes conflicts are rare and checks for them only at save time,
          rather than locking a row the moment it&apos;s read (that would be
          pessimistic concurrency, and it doesn&apos;t scale to a stateless web
          API where a &quot;read&quot; and its eventual &quot;write&quot; can be
          minutes apart across separate requests). A <code>[Timestamp]</code>/
          <code>RowVersion</code> column is a value the database itself
          increments on every write to that row. EF includes the version it
          originally read in the generated <code>UPDATE</code>&apos;s{' '}
          <code>WHERE</code> clause — effectively &quot;update this row, but
          only if it&apos;s still on the version I last saw.&quot; If another
          request updated the row in between, zero rows match the{' '}
          <code>WHERE</code> clause, the affected-row count comes back as zero,
          and EF surfaces that as a <code>DbUpdateConcurrencyException</code>{' '}
          instead of silently overwriting someone else&apos;s change.
        </p>
        <Cs
          code={`public class Hero
{
    [Timestamp]
    public byte[] RowVersion { get; set; } = default!;
}`}
        />
        <Cs
          code={`try { await context.SaveChangesAsync(); }
catch (DbUpdateConcurrencyException ex)
{
    // ex.Entries gives you the conflicting entry — reload, merge, or reject
}`}
        />
      </Topic>

      <Topic
        id="owned"
        no="08"
        title="Owned types, JSON columns, value converters"
      >
        <p>For data that doesn&apos;t need its own identity.</p>

        <h3>Owned types</h3>
        <p>
          An owned type models a <strong>value object</strong> — data
          that&apos;s meaningful only as part of its parent and has no identity
          or lifecycle of its own. An <code>Address</code> isn&apos;t a thing
          you look up by its own ID; it only exists as &quot;this hero&apos;s
          location.&quot; EF reflects that by default: rather than a separate{' '}
          <code>Addresses</code> table with its own PK and a FK back to Hero,
          the owned type&apos;s properties (<code>City</code>,{' '}
          <code>Country</code>) are flattened directly onto the{' '}
          <code>Heroes</code> table as ordinary columns. There&apos;s no join
          needed to read a hero&apos;s address because there&apos;s no separate
          row to join to — it&apos;s a query performance win as much as a
          modeling one, since the alternative (a real related table) would cost
          a JOIN on every read for data that&apos;s always fetched together
          anyway.
        </p>
        <Cs
          code={`public class Hero
{
    public Address BaseLocation { get; set; } = default!;
}
[Owned]
public class Address
{
    public string City { get; set; } = "";
    public string Country { get; set; } = "";
}`}
        />

        <h3>JSON columns</h3>
        <p>
          Native since EF8, with better in-place querying in EF9/10 — for data
          whose shape is genuinely document-like:
        </p>
        <Cs
          code={`public class Hero
{
    public List<Gadget> Gadgets { get; set; } = [];
}
public class Gadget { public string Name { get; set; } = ""; public int Charges { get; set; } }

builder.Entity<Hero>().OwnsMany(h => h.Gadgets, g => g.ToJson());`}
        />
        <p>
          You can query into the JSON directly —{' '}
          <code>Where(h =&gt; h.Gadgets.Any(g =&gt; g.Charges &gt; 0))</code>{' '}
          translates to <code>JSON_VALUE</code>/<code>OPENJSON</code> under the
          hood. The trade-off against a real related table is the mirror image
          of the owned-type case above: a JSON column skips the JOIN entirely by
          storing the whole nested structure as one blob, which is efficient
          when you always read it together with the parent and its internal
          shape genuinely varies row to row — but the database can no longer
          enforce referential integrity, uniqueness, or a type on any field
          inside that JSON the way it could on real columns. Reach for it when
          the nested data is genuinely document-shaped (variable, hierarchical,
          always read as a unit), not as a default substitute for a proper child
          table.
        </p>

        <h3>Value converters</h3>
        <Cs
          code={`builder.Entity<Hero>()
    .Property(h => h.PowerLevel)
    .HasConversion<string>();`}
        />
      </Topic>

      <Topic id="bulk" no="09" title="Bulk operations">
        <p>No more loop-and-SaveChanges.</p>
        <p>
          Every other write path in this walkthrough follows the same three-step
          cost: load entities into memory, let the change tracker snapshot them,
          then generate one <code>UPDATE</code>/<code>DELETE</code> per row when
          you save. For a bulk operation touching thousands of rows, all three
          of those steps are pure waste — you never actually need the row&apos;s
          data in memory, you just need the database to change it.{' '}
          <code>ExecuteUpdateAsync</code>/<code>ExecuteDeleteAsync</code> skip
          straight to generating a single set-based SQL statement (one{' '}
          <code>UPDATE ... WHERE ...</code> covering every matching row at once)
          and send it directly, bypassing the change tracker entirely — no
          entities loaded, no snapshots taken, no per-row round trip.
        </p>
        <Cs
          code={`await context.Heroes
    .Where(h => h.PowerLevel > 90)
    .ExecuteUpdateAsync(setters => setters
        .SetProperty(h => h.Status, "Retired"));

await context.Missions
    .Where(m => m.CompletedDate < cutoff)
    .ExecuteDeleteAsync();`}
        />
        <Callout>
          EF Core 10 extended <code>ExecuteUpdateAsync</code> to reach into JSON
          column properties — bulk-patch a nested JSON field without
          round-tripping full entities.
        </Callout>
      </Topic>

      <Topic id="rawsql" no="17" title="Raw SQL, stored procedures & functions">
        <p>Dropping to SQL when LINQ isn&apos;t the right tool.</p>

        <h3>Raw SQL queries</h3>
        <p>
          LINQ-to-SQL translation covers the vast majority of queries, but not
          every SQL feature has a LINQ equivalent EF can generate — a
          vendor-specific hint, a recursive CTE, a query already hand-tuned by a
          DBA. <code>FromSqlInterpolated</code> is the escape hatch: it hands EF
          a literal SQL string to run as the base query, but the result still
          comes back as tracked or untracked <code>Hero</code> entities, and —
          critically — further LINQ operators chained after it still compose and
          get appended as real SQL, not evaluated client-side. Always prefer{' '}
          <code>FromSqlInterpolated</code> over <code>FromSqlRaw</code> with
          manual concatenation — the interpolated form parameterizes
          automatically and is SQL-injection-safe by construction:
        </p>
        <Cs
          code={`int minLevel = 80;
var heroes = await context.Heroes
    .FromSqlInterpolated($"SELECT * FROM Heroes WHERE PowerLevel >= {minLevel}")
    .Where(h => !h.IsRetired)   // still composes with LINQ afterward
    .ToListAsync();`}
        />

        <h3>Raw SQL commands</h3>
        <Cs
          code={`await context.Database.ExecuteSqlInterpolatedAsync(
    $"UPDATE Heroes SET Status = 'Retired' WHERE PowerLevel < {10}");`}
        />

        <h3>Stored procedures</h3>
        <p>
          For reads, call them the same way as raw SQL. For writes, EF Core 8+
          can map a stored procedure directly as the entity&apos;s
          insert/update/delete operation:
        </p>
        <Cs
          code={`builder.Entity<Hero>()
    .InsertUsingStoredProcedure("Hero_Insert", spb => spb
        .HasParameter(h => h.CodeName)
        .HasResultColumn(h => h.Id));`}
        />

        <h3>Database functions</h3>
        <p>
          Map a scalar or table-valued SQL function so it can be called from
          LINQ — EF translates the call instead of pulling data client-side to
          compute it:
        </p>
        <Cs
          code={`public IQueryable<Mission> ActiveMissionsForHero(int heroId)
    => FromExpression(() => ActiveMissionsForHero(heroId));

builder.HasDbFunction(typeof(AcademyDbContext)
    .GetMethod(nameof(ActiveMissionsForHero))!);`}
        />
        <p>
          Built-in translations live under <code>EF.Functions</code> —{' '}
          <code>EF.Functions.Like</code>, <code>EF.Functions.DateDiffDay</code>,
          and friends, for provider-specific SQL that LINQ has no native
          operator for.
        </p>
      </Topic>

      <Topic id="disconnected" no="18" title="Disconnected entities">
        <p>The pattern behind almost every Web API PUT endpoint.</p>
        <p>
          Writing data laid out the five change-tracker states — this chapter is
          really about the boundary between <code>Detached</code> and the rest
          of them. An entity that arrives from an HTTP request body was
          deserialized by ASP.NET Core&apos;s model binder, not loaded by any{' '}
          <code>DbContext</code> — it has real property values but no tracking
          history, no snapshot to compare against, and EF has no idea whether it
          represents something that already exists in the database or something
          brand new. It&apos;s <strong>detached</strong>, and the only way to
          make EF act on it is to explicitly attach it and tell EF what state to
          treat it as — that&apos;s what <code>Update()</code> is a shortcut
          for: attach, then mark every property <code>Modified</code>.
        </p>
        <Cs
          code={`[HttpPut("{id}")]
public async Task<IActionResult> UpdateHero(int id, Hero incoming)
{
    incoming.Id = id;
    context.Heroes.Update(incoming);   // Attach + mark every property Modified
    await context.SaveChangesAsync();
    return NoContent();
}`}
        />
        <Callout variant="warn">
          <code>Update()</code> marks <em>every</em> property Modified, even
          ones the client didn&apos;t actually change — fine for a full replace,
          wrong for a partial one. For partial updates, either fetch-then-map
          onto a tracked entity, or set individual properties as Modified with{' '}
          <code>
            context.Entry(incoming).Property(x =&gt; x.CodeName).IsModified =
            true
          </code>
          .
        </Callout>
      </Topic>

      <ModuleTitle>Cross-cutting concerns</ModuleTitle>

      <Topic
        id="advanced"
        no="10"
        title="Filters, interceptors, compiled queries"
      >
        <p>Cross-cutting behavior applied globally, not per query.</p>

        <h3>Global query filters</h3>
        <p>
          A global query filter is a <code>Where</code> clause EF appends to{' '}
          <em>every</em> generated query against that entity type — including
          ones reached indirectly through a navigation property, without you
          writing the condition each time. Mechanically, it&apos;s applied at
          the point where EF turns your expression tree into SQL, so it&apos;s
          invisible in the C# you write but present in every query that gets
          sent. That&apos;s exactly what makes it the standard soft-delete
          mechanism: it&apos;s the one place to guarantee a retired hero never
          leaks into a result set, instead of trusting every query author to
          remember to add <code>Where(h =&gt; !h.IsRetired)</code> by hand.
        </p>
        <p>
          Auto-applied to every query against a type — the classic soft-delete
          pattern:
        </p>
        <Cs
          code={`builder.Entity<Hero>().HasQueryFilter(h => !h.IsRetired);`}
        />
        <p>
          Bypass with <code>.IgnoreQueryFilters()</code>. EF Core 9 added{' '}
          <strong>named filters</strong>, so several filters toggle
          independently instead of an all-or-nothing switch:
        </p>
        <Cs
          code={`builder.Entity<Hero>().HasQueryFilter("SoftDelete", h => !h.IsRetired);
// query.IgnoreQueryFilters(["SoftDelete"])`}
        />

        <h3>Interceptors</h3>
        <p>
          An interceptor plugs into a specific point in EF&apos;s internal
          pipeline — before/after <code>SaveChanges</code>, before/after a
          command is executed against the database, when a connection opens —
          and lets you observe or modify what&apos;s about to happen.{' '}
          <code>SaveChangesInterceptor</code> in particular runs inside the same
          save operation as the entities being persisted, which is what makes it
          the right tool for cross-cutting concerns like audit stamping: it sees
          every tracked entity about to be saved, in one place, regardless of
          which code path triggered the save.
        </p>
        <Cs
          code={`public class AuditInterceptor : SaveChangesInterceptor
{
    public override InterceptionResult<int> SavingChanges(
        DbContextEventData eventData, InterceptionResult<int> result)
    {
        // stamp ModifiedBy / ModifiedDate on tracked entries here
        return base.SavingChanges(eventData, result);
    }
}
// options.AddInterceptors(new AuditInterceptor())`}
        />

        <h3>Compiled queries</h3>
        <p>
          Translating a LINQ expression tree into SQL isn&apos;t free — EF has
          to walk the tree, resolve the model metadata, and build the SQL
          string. It caches that translation keyed by the query&apos;s shape, so
          the second time an identical query shape runs, translation is mostly
          skipped already. A compiled query goes one step further: it does that
          translation once, explicitly, ahead of time, and reuses the compiled
          delegate directly rather than going through the cache lookup at all.
          The saving is real but small per call — this is for measured hot paths
          only — EF&apos;s own query caching already avoids re-parsing identical
          shapes, so this isn&apos;t a default reach:
        </p>
        <Cs
          code={`private static readonly Func<AcademyDbContext, int, Task<Hero?>> GetHeroById =
    EF.CompileAsyncQuery((AcademyDbContext ctx, int id) =>
        ctx.Heroes.FirstOrDefault(h => h.Id == id));`}
        />
      </Topic>

      <Topic id="pooling" no="19" title="Pooling & connection resiliency">
        <p>Two production concerns that rarely show up in tutorials.</p>

        <h3>DbContext pooling</h3>
        <p>
          Normally, <code>AddDbContext</code>&apos;s Scoped registration means a
          fresh <code>DbContext</code> — and everything inside it (the change
          tracker, its internal caches) — is allocated on every single request
          and garbage-collected at the end of it. Under high request volume,
          that&apos;s a lot of allocation churn for objects that are
          structurally identical request to request. Pooling keeps a fixed-size
          pool of already-constructed context instances around; instead of
          allocating new, a request borrows one, and EF resets its internal
          state (clears the change tracker, discards tracked entities) before
          handing it back to the pool at the end of the request rather than
          discarding it. The gain is avoided allocation and construction
          overhead, not avoided work — every query still runs the same way.
        </p>
        <Cs
          code={`builder.Services.AddDbContextPool<AcademyDbContext>(options =>
    options.UseSqlServer(connectionString), poolSize: 128);`}
        />
        <Callout>
          Pooling is incompatible with constructor logic that captures
          per-request state — anything injected into the context&apos;s
          constructor gets reused across requests too. Keep pooled contexts
          stateless beyond the connection itself.
        </Callout>

        <h3>Connection resiliency</h3>
        <p>
          A cloud database connection fails transiently for reasons that have
          nothing to do with your query — a load balancer failing over, a brief
          network blip, Azure SQL&apos;s own throttling under load — and
          immediately surfacing that as a 500 to the caller is often just wrong:
          the exact same request, retried a moment later, would have succeeded.{' '}
          <code>EnableRetryOnFailure</code> wraps EF&apos;s database calls in an{' '}
          <strong>execution strategy</strong> that detects exceptions known to
          be transient (via the provider&apos;s own classification of which SQL
          error codes mean &quot;retry me&quot; versus &quot;this is a real
          error&quot;) and automatically retries with backoff before giving up
          and propagating the exception.
        </p>
        <Cs
          code={`options.UseSqlServer(connectionString,
    sql => sql.EnableRetryOnFailure(maxRetryCount: 3));`}
        />
        <Callout variant="warn">
          Retry-on-failure and manual transactions don&apos;t mix by default — a
          retried operation inside a hand-rolled transaction can partially
          replay, because the transaction itself might have partially committed
          before the connection dropped. Use EF&apos;s{' '}
          <code>CreateExecutionStrategy()</code> to wrap multi-step
          transactional code safely when retries are enabled — it retries the{' '}
          <em>whole</em> unit (begin transaction through commit) as one atomic
          attempt, rather than resuming mid-transaction.
        </Callout>
      </Topic>

      <Topic id="logging" no="20" title="Logging & diagnostics">
        <p>Seeing the SQL EF actually generates.</p>
        <p>
          Everything up to this point has described what EF <em>should</em>{' '}
          generate — logging is how you confirm what it actually generated,
          which matters because the translation from LINQ to SQL isn&apos;t
          always the SQL you&apos;d have hand-written. EF&apos;s logging hooks
          into the same diagnostic events ASP.NET Core&apos;s own logging
          infrastructure uses, so it shows up through the standard{' '}
          <code>ILogger</code> pipeline in a full app, or through a direct
          callback like <code>LogTo</code> for quick standalone debugging.
        </p>
        <Cs
          code={`options.UseSqlServer(connectionString)
       .LogTo(Console.WriteLine, LogLevel.Information)
       .EnableSensitiveDataLogging();   // logs parameter values — dev only, never prod`}
        />
        <p>
          <code>EnableSensitiveDataLogging()</code> includes actual parameter
          values in the log output, which is exactly what you want while
          debugging and exactly what you don&apos;t want writing PII to a
          production log sink.
        </p>

        <h3>Query tags</h3>
        <p>
          A production app generates hundreds of structurally different queries,
          and by the time one shows up in a database profiler or a slow-query
          report, all the C# context that produced it is gone — SQL Server just
          sees a <code>SELECT</code> with no indication of which LINQ query, in
          which controller action, generated it. <code>TagWith</code> injects a
          literal SQL comment into the generated query text, so that context
          survives all the way to the database&apos;s own tooling:
        </p>
        <Cs
          code={`var heroes = await context.Heroes
    .TagWith("HeroLeaderboard: active heroes by power level")
    .Where(h => !h.IsRetired)
    .OrderByDescending(h => h.PowerLevel)
    .ToListAsync();`}
        />
      </Topic>

      <Topic id="tenancy" no="22" title="Multi-tenancy patterns">
        <p>One codebase, many academies.</p>
        <p>
          Multi-tenancy just means several logically separate customers sharing
          one deployed application — and the question is entirely where the
          isolation between them lives: inside application logic (rows tagged by
          tenant), or pushed down to infrastructure (separate databases
          entirely). Two common shapes, in order of how much isolation they buy
          you:
        </p>
        <ul>
          <li>
            <strong>Shared database, discriminator column</strong> — every table
            gets a <code>TenantId</code>, enforced by a global query filter so
            tenant isolation can&apos;t be forgotten in a one-off query.
          </li>
          <li>
            <strong>Database-per-tenant</strong> — a separate connection string
            per tenant, resolved at <code>DbContext</code> construction time,
            usually via <code>IDbContextFactory&lt;T&gt;</code> plus a
            per-request tenant resolver.
          </li>
        </ul>
        <Cs
          code={`builder.Entity<Hero>()
    .HasQueryFilter(h => h.TenantId == _currentTenant.Id);`}
        />
        <Callout variant="warn">
          A global filter is the safety net, not the whole strategy —{' '}
          <code>ExecuteUpdateAsync</code>/<code>ExecuteDeleteAsync</code> and
          raw SQL both bypass query filters, so bulk operations need the tenant
          condition written in by hand.
        </Callout>
      </Topic>

      <ModuleTitle>Ecosystem & practice</ModuleTitle>

      <Topic id="whatsnew" no="11" title="What's new in EF Core 9 / 10">
        <p>Since &quot;latest&quot; is the whole point.</p>
        <p>
          EF Core follows .NET&apos;s own annual release cadence — a new major
          version each November, tracking the paired .NET runtime version. EF9
          shipped alongside .NET 9; EF10 alongside .NET 10, which is the current
          Long Term Support release, meaning it gets patches and support for
          three years rather than .NET 9&apos;s 18 months. That&apos;s the
          practical reason &quot;latest&quot; means EF Core 10 specifically, not
          just &quot;whatever&apos;s newest&quot; — it&apos;s the version worth
          being on for anything long-lived.
        </p>
        <RefTable
          headers={['Feature', 'Version', 'What it does']}
          rows={[
            [
              <>
                <code>LeftJoin</code> / <code>RightJoin</code>
              </>,
              'EF10',
              'Native LINQ operators — no more GroupJoin + SelectMany + DefaultIfEmpty for a left join.',
            ],
            [
              'Named query filters',
              'EF9',
              'Multiple independently-toggleable filters per entity.',
            ],
            [
              <code>ExecuteUpdateAsync</code>,
              'EF10',
              'Bulk-patch nested JSON column data in one statement.',
            ],
            [
              'Complex types',
              'EF8, matured EF9/10',
              'Like owned types, always inline — no separate table possible, cleaner for pure value objects.',
            ],
            [
              'Primitive collections',
              'EF8+',
              <>
                <code>List&lt;string&gt;</code> or <code>int[]</code> mapped
                directly to a column, JSON-backed.
              </>,
            ],
            [
              'Vector search',
              'EF10',
              'Against SQL Server 2025 / Azure SQL — relevant for RAG-style retrieval work.',
            ],
            [
              'Temporal tables',
              'EF7+',
              'System-versioned tables for point-in-time history queries.',
            ],
          ]}
        />
        <Cs
          code={`builder.Entity<Hero>().ToTable(b => b.IsTemporal());
// context.Heroes.TemporalAsOf(someDate).ToListAsync()`}
        />
      </Topic>

      <Topic id="testing" no="12" title="Testing">
        <p>Three tiers, roughly in order of realism versus speed.</p>
        <ul>
          <li>
            <strong>InMemory provider</strong> — fastest, but not a relational
            database: no real constraint enforcement, no transaction semantics.
            Treat it as a smoke test, not a substitute for the real thing.
          </li>
          <li>
            <strong>SQLite in-memory</strong> — a real relational engine, closer
            behavior, still fast. Good middle ground.
          </li>
          <li>
            <strong>Testcontainers</strong> — a real SQL Server (or Postgres) in
            Docker. Slower, but what actually runs in production — catches
            provider-specific SQL translation issues the other two can&apos;t.
          </li>
        </ul>
        <p>
          The reason these three genuinely differ in what bugs they catch comes
          back to how EF&apos;s job is translating LINQ into{' '}
          <em>provider-specific</em> SQL. The InMemory provider doesn&apos;t
          translate to SQL at all — it evaluates queries directly against .NET
          collections in memory, which means a query that only works by accident
          of LINQ-to-Objects semantics can pass against InMemory and then fail
          against a real database, and a constraint violation (a unique index, a
          FK) that SQL Server would reject silently succeeds. SQLite and
          Testcontainers both go through the real translation-to-SQL pipeline,
          so they&apos;ll catch what InMemory can&apos;t — the difference
          between them is only how close their SQL dialect and feature set are
          to what production actually runs.
        </p>
        <Cs
          code={`await using var container = new MsSqlBuilder().Build();
await container.StartAsync();
var options = new DbContextOptionsBuilder<AcademyDbContext>()
    .UseSqlServer(container.GetConnectionString())
    .Options;`}
        />
      </Topic>

      <Topic id="performance" no="13" title="Performance checklist & pitfalls">
        <p>Everything above, condensed into what to actually do.</p>
        <ul>
          <li>
            Default to <code>AsNoTracking()</code> for reads; only track what
            you&apos;ll <code>SaveChanges</code>.
          </li>
          <li>
            Project with <code>Select</code> instead of pulling full entities
            when you don&apos;t need every column.
          </li>
          <li>
            <code>Include</code> plus multiple collections →{' '}
            <code>AsSplitQuery()</code> to dodge cartesian explosion.
          </li>
          <li>
            Avoid lazy loading in web APIs — it hides N+1 behind an
            innocent-looking property access.
          </li>
          <li>
            Bulk mutation → <code>ExecuteUpdateAsync</code>/
            <code>ExecuteDeleteAsync</code>, not load-loop-SaveChanges.
          </li>
          <li>
            One <code>DbContext</code> per request (scoped);{' '}
            <code>IDbContextFactory&lt;T&gt;</code> for anything parallel.
          </li>
          <li>Don&apos;t hand-edit the migrations snapshot.</li>
          <li>
            <code>HasQueryFilter</code> is silent — document soft-delete filters
            clearly, or a teammate loses an hour to a &quot;missing&quot; row.
          </li>
          <li>
            InMemory tests passing ≠ your SQL actually works — verify
            query-shape-sensitive logic against SQLite or Testcontainers.
          </li>
        </ul>
      </Topic>

      <Topic id="tooling" no="21" title="Seeding & design-time tooling">
        <p>Getting data and migrations working outside the running app.</p>

        <h3>Seeding — two approaches</h3>
        <p>
          Both approaches solve the same problem — getting known baseline data
          into a database — but at different points in the app&apos;s lifecycle
          and for different kinds of data. <code>HasData</code> (seen in
          Migrations) bakes static rows into migration files. EF Core 9 added{' '}
          <code>UseSeeding</code>/<code>UseAsyncSeeding</code> — imperative
          seeding logic that runs via <code>dotnet ef database update</code> or{' '}
          <code>EnsureCreated</code>, without needing a migration for every data
          change:
        </p>
        <Cs
          code={`options.UseSqlServer(connectionString)
       .UseAsyncSeeding(async (context, _, ct) =>
       {
           if (!await context.Set<Superpower>().AnyAsync(ct))
               context.Set<Superpower>().Add(new Superpower { Name = "Flight" });
           await context.SaveChangesAsync(ct);
       });`}
        />

        <h3>Design-time DbContext factory</h3>
        <p>
          Running <code>dotnet ef migrations add</code> needs a real instance of
          your <code>DbContext</code> to inspect its model — but that instance
          is normally constructed by ASP.NET Core&apos;s DI container at app
          startup, which the CLI tool never runs. Ordinarily EF works around
          this by finding your app&apos;s own startup code and invoking it
          directly, which is why <code>dotnet ef</code> usually &quot;just
          works&quot; without any extra setup — but that only succeeds if your
          app&apos;s DI configuration can run standalone, outside a real HTTP
          request, with no missing configuration or external dependencies. When{' '}
          <code>dotnet ef</code> can&apos;t construct your context — it needs
          config that only exists at app startup — implement this so tooling can
          create one on its own terms:
        </p>
        <Cs
          code={`public class AcademyDbContextFactory : IDesignTimeDbContextFactory<AcademyDbContext>
{
    public AcademyDbContext CreateDbContext(string[] args)
    {
        var options = new DbContextOptionsBuilder<AcademyDbContext>()
            .UseSqlServer("Server=.;Database=Academy;Trusted_Connection=True;")
            .Options;
        return new AcademyDbContext(options);
    }
}`}
        />

        <h3>Database-first / reverse engineering</h3>
        <p>
          Every workflow so far runs in the direction &quot;C# model → migration
          → schema.&quot; Scaffolding runs it backwards: EF inspects an existing
          database&apos;s actual schema — its tables, columns, keys, and foreign
          keys — and generates the C# entity classes and <code>DbContext</code>{' '}
          that would produce that same model, useful when the database already
          exists and predates the app, or is owned and managed by a separate
          team:
        </p>
        <Bash
          code={`dotnet ef dbcontext scaffold "Server=.;Database=Academy;Trusted_Connection=True;" \\
  Microsoft.EntityFrameworkCore.SqlServer -o Models`}
        />
      </Topic>

      <Topic id="providers" no="23" title="Provider landscape">
        <p>
          Everything above is provider-agnostic EF Core — the database
          underneath is a swap.
        </p>
        <p>
          This works because EF&apos;s architecture deliberately separates the
          parts that don&apos;t change (LINQ translation logic, the change
          tracker, migrations infrastructure) from a <strong>provider</strong>{' '}
          layer that plugs in per-database and handles the actual SQL dialect,
          type mapping, and connection management. Swapping{' '}
          <code>UseSqlServer</code> for <code>UseNpgsql</code> changes which
          provider translates your LINQ into SQL — it doesn&apos;t change how
          you write entities, queries, or migrations above that layer.
          That&apos;s the whole value proposition of an ORM: the same C#
          genuinely targeting different databases, with the provider absorbing
          the dialect differences.
        </p>
        <RefTable
          headers={['Provider', 'Package', 'Notes']}
          rows={[
            [
              'SQL Server / Azure SQL',
              <code>Microsoft.EntityFrameworkCore.SqlServer</code>,
              'First-party, most complete feature support (temporal tables, JSON, stored proc mapping).',
            ],
            [
              'PostgreSQL',
              <code>Npgsql.EntityFrameworkCore.PostgreSQL</code>,
              'Community-maintained, excellent parity — adds native array and JSONB support.',
            ],
            [
              'SQLite',
              <code>Microsoft.EntityFrameworkCore.Sqlite</code>,
              'First-party. Great for tests and small/embedded apps; limited ALTER TABLE support affects some migrations.',
            ],
            [
              'MySQL / MariaDB',
              <code>Pomelo.EntityFrameworkCore.MySql</code>,
              'Community-maintained, the de facto standard MySQL provider.',
            ],
            [
              'Azure Cosmos DB',
              <code>Microsoft.EntityFrameworkCore.Cosmos</code>,
              'Document database — no migrations, no relational joins; a genuinely different mental model.',
            ],
            [
              'InMemory',
              <code>Microsoft.EntityFrameworkCore.InMemory</code>,
              "Testing only — see Testing chapter's caveats.",
            ],
          ]}
        />
        <p>
          Twenty-three chapters, one roster, zero placeholder <code>Order</code>
          /<code>Customer</code> tables. Every code block above targets EF Core
          10 on .NET 10 — the current LTS, supported through November 2028.
        </p>
      </Topic>
    </>
  )
}
