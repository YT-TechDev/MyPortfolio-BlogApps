import TSImage from '../../../assets/TypeScript.gif'
import JSImage from '../../../assets/JavaScript.gif'
import ReactImage from '../../../assets/ReactImage.gif'
import HTMLImage from '../../../assets/HTML5.gif'
import CSSImage from '../../../assets/CSS.gif'
import DataBaseImage from '../../../assets/DataBase.gif'
import NextImage from '../../../assets/nextjs-icon.png'
import type React from 'react'

export default function SkillPages():React.ReactNode {
    const JSTextinit:string = "vanillaJS<br />TypeScript<br />jQuery<br/>Google Apps Script<br />React<br/>Vue.js<br/>";
    const TSTextinit:string = "TypeScript<br />TypeScript+React<br />NodeTools<br />API<br />";
    const CSTextinit:string = "CSS<br />TailwindCSS<br />BootStrap<br />Sass[SCSS,SASS]";
    const HMTextinit:string = "HTML<br />FrontEnd<br />Design<br />FW,lib(Pug)<br/>BuildTools(Vite,Babel)";
    const ReactTextinit:string = "React<br />Framer Motion<br />BitsAnimarions<br />Next.js<br/>React Native";
    const DBInitialtexts:string = "MySQL<br />PostgreSQL<br />NoSQL<br />";
    const NextInitialtexts:string = "Next16.2<br />App Router,PageRouter<br />CSR,SSR,SSG,ISR<br />System Design<br/>";

    function ClickedAnimation(){

    const BoardElements:Array<HTMLInputElement> = [
        document.getElementById('BoardNode0') as HTMLInputElement,
        document.getElementById('BoardNode1') as HTMLInputElement,
        document.getElementById('BoardNode2') as HTMLInputElement,
        document.getElementById('BoardNode3') as HTMLInputElement,
        document.getElementById('BoardNode4') as HTMLInputElement,
        document.getElementById('BoardNode5') as HTMLInputElement,
    ];

/* JavaScriptエレメント関係 */
    const BoardJSAnimationElements:Array<string> = [
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>JavaScript</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Dynamic typing</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>FW&lib</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Animation</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>DOM Operation</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Comment</p>"
    ]

    const JSdetailsText:Array<string> = [
        `
            JavaScript is my primary language for building interactive and user-focused web applications.<br />
            I use it not only to add dynamic behavior to interfaces but also to structure application logic in a clear and maintainable way.<br /><br />
            
            I actively work with modern ES6+ features such as arrow functions, destructuring, spread syntax, template literals, modules, Promises, and async/await.<br />
            These features allow me to write expressive, concise, and readable code while keeping the overall structure organized.
            In my development process, I pay close attention to code clarity and maintainability. I aim to write modular logic with clear responsibilities so that future updates or feature additions can be handled smoothly.<br />
            I also have experience integrating external APIs, handling asynchronous data flows, and transforming data into user-friendly UI representations.<br /><br />
            Beyond simply making things “work,” I focus on writing production-ready JavaScript that balances functionality, performance, and long-term scalability.
        `,
        `
            JavaScript’s dynamic typing model is one of its strengths, but it also requires careful handling.<br /><br />

            I have a solid understanding of how type coercion works, including truthy/falsy evaluations and implicit conversions, and I am mindful of how these behaviors can affect application logic.<br />
            While dynamic typing allows for flexibility and faster iteration, I make a conscious effort to avoid ambiguity. I use clear validation logic, guard clauses, and predictable data structures to maintain code reliability.<br />
            Especially in collaborative or larger-scale projects, I believe it is important to write JavaScript in a way that minimizes unexpected behavior and makes intentions obvious to other developers.<br /><br />
            By understanding both the convenience and potential risks of dynamic typing, I am able to write code that remains flexible without sacrificing stability.
        `,
        `
            I work with modern frameworks and libraries to build structured, scalable applications. I am comfortable in component-based development environments and understand common patterns such as state management, routing, and modular architecture.<br /><br />
            When selecting libraries, I don’t simply add tools for convenience. I consider bundle size, maintainability, performance impact, and long-term sustainability. I prefer solutions that align with the overall architecture of the project and contribute to a clean and understandable codebase.<br />
            lue reusable components and consistent design patterns, especially in team environments where maintainability and collaboration are essential.<br /><br />
            My workflow reflects an understanding of modern build tools, dependency management, and efficient development pipelines.
        `,
        `
            I enjoy incorporating animation into user interfaces when it adds clarity and improves the overall experience. I carefully choose between CSS-based animations and JavaScript-driven animations depending on the complexity and performance requirements of the interaction.<br /><br />
            For more advanced or performance-sensitive motion effects, I use requestAnimationFrame to ensure smooth rendering. I have implemented scroll-triggered animations, subtle micro-interactions, and state-based UI transitions that help guide users naturally through an interface.<br /><br />
            At the same time, I am careful not to overuse animation. I prioritize usability and performance, ensuring that motion enhances the experience rather than distracting from it.<br /><br />
            Managing repaint and reflow costs is always part of my implementation considerations.
        `,
        `
            I have a strong understanding of how the DOM works and how browsers render updates. I efficiently handle element selection, event binding, dynamic content generation, and user interaction management.<br /><br />
            I am familiar with event propagation concepts such as capturing and bubbling, and I design event handling systems in a way that keeps the code predictable and scalable. When working with frequent DOM updates, I apply optimization techniques to minimize unnecessary reflows and repaints.
            I also implement real-time UI updates, form validation, and interactive components that respond instantly to user input.<br /><br />
            My approach to DOM manipulation focuses on writing clean, understandable logic while maintaining smooth performance and responsiveness.
        `,
        `
            When it comes to JavaScript, it's the language I first used to build applications through self-study!<br /><br />
            My very first app, I believe, was a desktop application built using Electron (a simple to-do list with delete animations).<br />
            Electron brings back memories! I think back in my student days I was comparing the speeds of jQuery and Ajax communication.<br />
            It's fun when you can actually see the speed advantage of asynchronous operations in numbers, right?<br /><br />
            Just a little rant, but I remember when I was working as a contract engineer, there was this employee who didn't understand why asynchronous processing was faster lol.`
    ];
/* TypeScriptエレメント関係　*/
    const BoardTSAnimationElements:Array<string> = [
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>TypeScript</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Static Typing</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>models</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Node.js</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Improved readability</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Comment</p>"
    ]
    const TSdateilsText:Array<string> = [
        `
            TypeScript is a statically typed superset of JavaScript developed by Microsoft.<br /><br />

            It builds on top of JavaScript by adding optional static typing, advanced tooling support, and modern language features while remaining fully compatible with existing JavaScript code.<br />
            TypeScript compiles down to plain JavaScript, ensuring it can run in any environment where JavaScript is supported.<br />
            In my development workflow, TypeScript plays a central role in building scalable front-end and back-end applications.<br />
            By combining JavaScript’s flexibility with strong typing, I am able to design applications that are easier to maintain, refactor, and collaborate on within a team environment.<br /><br />

            TypeScript’s powerful editor integration, intelligent code completion, and static analysis significantly improve productivity and reduce runtime errors before deployment.
        `,
        `
            One of the most significant advantages of TypeScript is its static typing system. Unlike dynamically typed JavaScript, TypeScript allows developers to define types for variables, function parameters, return values, and object structures at development time.<br />
            This enables early detection of type-related bugs during compilation rather than at runtime.<br /><br />

            In large-scale applications, static typing provides structural clarity and prevents unintended behavior caused by inconsistent data handling.<br />
            It enhances reliability when working with APIs, asynchronous operations, and complex state management. By explicitly defining data contracts, I can ensure predictable interactions between components and services.<br /><br />
            
            Static typing also strengthens collaboration within teams, as clearly defined interfaces make shared codebases easier to understand and extend.
        `,
        `
            TypeScript’s type system is both expressive and flexible. It supports primitive types (string, number, boolean), union and intersection types, generics, interfaces, type aliases, enums, and advanced utility types. These features allow developers to model real-world data structures with precision.<br /><br />
            I frequently use interfaces and type aliases to define structured data models, ensuring consistency across applications.<br />
            Generics enable reusable and type-safe components or functions, while union types help manage conditional logic without sacrificing type safety.<br />
            Additionally, TypeScript supports powerful features such as type inference, narrowing, and strict null checking. These capabilities allow developers to write concise code without losing the benefits of strong typing.<br /><br />

            By leveraging these advanced type features, I create robust architectures that remain flexible and scalable as projects grow in complexity.
        `,
        `
            TypeScript integrates seamlessly with server-side development using Node.js. When building RESTful APIs, backend services, or microservices architectures, TypeScript provides structured typing that enhances reliability and maintainability. In backend projects, I utilize TypeScript to define request and response schemas, middleware logic, and database models.<br /><br />
            This ensures consistent data handling across the entire stack. Combined with frameworks such as Express or NestJS, TypeScript enables clean architectural patterns like dependency injection, modularization, and layered design.<br /><br />
            
            Using TypeScript in full-stack environments allows for shared type definitions between front-end and back-end systems, reducing duplication and preventing mismatched API contracts. This unified type system significantly improves development efficiency and overall system reliability.
        `,
        `
            Beyond type safety, TypeScript greatly enhances code readability and long-term maintainability. Explicit type definitions serve as self-documenting code, making project structures easier to understand for new contributors.<br /><br />
            Clear interfaces and strongly typed functions communicate developer intent without excessive comments. TypeScript encourages disciplined coding practices such as modular design and clear separation of concerns.<br /><br />
            
            Its strict compiler options help enforce consistent standards across a codebase, reducing technical debt over time.<br />
            Refactoring becomes safer and more efficient because the compiler immediately identifies affected areas when changes are introduced.<br />
        `,
        `
            TypeScript is a statically typed superset of JavaScript developed by Microsoft, created to improve scalability, maintainability, and developer experience in modern web application development. Because it compiles into standard JavaScript, TypeScript can run in any environment that supports JavaScript, including browsers and server-side platforms. This compatibility allows teams to gradually introduce TypeScript into existing projects while preserving the flexibility of the broader JavaScript ecosystem.<br /><br />

            One of the most important features of TypeScript is static typing. In contrast to JavaScript’s dynamic type system, TypeScript enables developers to define variable types, function parameters, return values, and object structures at development time. This allows potential errors to be identified during compilation instead of at runtime.<br />
            By clearly defining data contracts across components and services, static typing improves reliability and reduces unexpected behavior. In large-scale applications where multiple developers collaborate, explicit type definitions establish a shared understanding of how data flows through the system, minimizing ambiguity and strengthening team productivity.
        `,
    ]

/* Reactエレメント関係　*/
    const BoardReactAnimationElements:Array<string> = [
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>AI-Integrated Frontend Architecture</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>React Hooks</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>React Core Architecture</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Framework & Library Strategy</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Next.JS</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Comment</p>"
    ]
    const ReactdateilsText:Array<string> = [
        `
            As AI becomes a core capability in modern products, I design React architectures that treat AI integration as a structural concern rather than a peripheral feature. AI introduces probabilistic outputs, latency variability, and evolving response contracts; therefore, frontend systems must be resilient, adaptive, and intentionally decoupled.<br /><br />
            
            I separate deterministic UI logic from AI-driven behaviors to preserve stability while enabling intelligent augmentation. Rendering flows are structured to support streaming responses and progressive disclosure without compromising clarity or performance. Clear boundaries between client orchestration and inference services ensure that model evolution does not destabilize the interface layer.<br /><br />
            
            By combining architectural discipline with adaptability, I position React not merely as a UI framework, but as an orchestration layer for intelligent, context-aware experiences.
        `,
        `
            I approach React Hooks as architectural building blocks rather than simple utilities for managing component state. Hooks enable a declarative model for orchestrating state transitions and side effects, and I use them to make component intent explicit and predictable. Instead of embedding complex logic directly into UI layers, I extract domain-specific behaviors into well-defined custom hooks that serve as composable units of business logic. This pattern enforces separation of concerns, promotes reuse across feature boundaries, and improves testability.
            When structuring hooks, I consider lifecycle implications, dependency management, and rendering cost. Effects are designed to be deterministic and resilient to re-renders, with careful cleanup strategies to prevent memory leaks or inconsistent state.<br />
            I evaluate when to colocate state within a component versus lifting it to a higher boundary, and I use reducer patterns when state transitions benefit from explicit modeling. Memoization strategies are applied intentionally—not prematurely—to control computational overhead and stabilize reference equality where necessary.<br /><br />
            
            Ultimately, my goal with Hooks is to create systems that scale in complexity without degrading clarity. By treating Hooks as composable abstractions, I enable teams to extend functionality without rewriting core logic, ensuring long-term maintainability and architectural coherence.
        `,
        `
            I view React as a declarative rendering engine that encourages unidirectional data flow and composable UI structures. My architectural decisions revolve around defining clear component boundaries, managing state ownership deliberately, and preserving predictable data propagation throughout the application. Component granularity is determined by responsibility rather than visual segmentation alone.<br />
            I aim to isolate domain logic from presentation concerns, creating components that are independently testable and replaceable. State placement is a strategic decision: colocating state improves encapsulation and clarity, while globalizing state is reserved for truly shared concerns. By understanding how reconciliation and rendering cycles operate under the hood, I design components to minimize unnecessary updates and avoid performance bottlenecks.<br /><br />
            
            I also emphasize consistency in folder structure, naming conventions, and dependency direction to maintain cognitive clarity in collaborative environments. React applications evolve rapidly, and architectural discipline ensures that feature growth does not introduce structural fragility. My approach focuses on enabling iterative product development while preserving architectural integrity over time.
        `,
        `
        Technology selection is fundamentally a design decision shaped by constraints, trade-offs, and long-term implications. I distinguish clearly between libraries, which provide flexibility but demand architectural responsibility, and frameworks, which impose structure but reduce ambiguity. My decisions are informed by product requirements, team composition, delivery timelines, and expected system longevity.<br />
        When evaluating a tool, I consider how it affects complexity distribution within the system. A state management solution, for instance, should clarify data flow rather than obscure it. UI libraries should accelerate development without introducing rigid coupling or unnecessary abstraction layers. I analyze integration surfaces, extensibility patterns, and the potential accumulation of technical debt before adoption.<br /><br />
        Scalability is not only about performance but also about team scalability. A well-chosen framework can standardize patterns, reduce onboarding friction, and improve cross-team collaboration. Conversely, unnecessary dependencies can fragment architectural clarity. My strategy is to adopt tools that align with the system’s evolution path and reduce long-term operational friction.
        `,
        `
        I utilize Next.js as an opinionated application platform that embeds rendering strategies into the architectural foundation. Rendering mode selection—SSR, SSG, or ISR—is determined early in the design phase based on content volatility, SEO requirements, and performance targets. Rather than treating rendering as an implementation detail, I treat it as a first-class architectural decision.<br />
        Data fetching and caching strategies are defined alongside routing and API layer boundaries to maintain clear separation of responsibilities. I design server and client interactions deliberately, ensuring that data hydration, edge rendering considerations, and middleware logic contribute to predictable behavior in production environments. Authentication flows, API contracts, and caching layers are orchestrated with attention to scalability and observability.<br /><br />
        Performance optimization extends beyond metrics into architectural sustainability. Image optimization, code splitting, and resource prioritization are integrated into the system design rather than applied retroactively. The result is an application that balances developer experience, operational reliability, and user-centric performance outcomes, enabling both rapid iteration and long-term resilience.
        `,
        `
            I design React applications with architecture as the primary concern—not just implementation. Hooks are treated as composable primitives for separating concerns and encapsulating business logic, enabling predictable state management and long-term maintainability. Component boundaries, state placement, and rendering behavior are structured intentionally to support scalability, clarity, and team collaboration.<br /><br />
            Technology decisions are driven by constraints and trade-offs rather than trends. Whether leveraging libraries for flexibility or frameworks like Next.js for structured performance optimization, I focus on minimizing complexity while maximizing extensibility.<br /><br />Rendering strategies (SSR, SSG, hybrid) are selected deliberately to balance SEO, performance, and product requirements.
            As AI becomes integral to modern products, I architect frontend systems to accommodate probabilistic outputs and adaptive workflows. By decoupling deterministic UI logic from AI-driven behaviors, I ensure resilience, observability, and sustainable evolution as models and interfaces change.
        
        `
    ]
/* HTML */
    const BoardHTMLAnimationElements:Array<string> = [
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>HTML</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Tools</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>FrameWork</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>SPA</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>CMS</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Comment</p>"
    ]
    const HTMLdateilsText:Array<string> = [
        `
        I have a strong foundation in semantic HTML5 and treat markup as the structural backbone of every web application. Rather than viewing HTML as a simple layout tool, I approach it as a language that conveys meaning, hierarchy, and intent.<br/><br/>By carefully selecting semantic elements such as 'header, nav, main, section, article, aside, footer', I ensure that each page communicates its structure clearly to both users and machines. This improves accessibility, enhances SEO, and provides long-term maintainability.<br /><br />

        Accessibility is a core consideration in my markup decisions. I implement proper heading hierarchies, meaningful alt attributes for images, descriptive labels for form inputs, and ARIA attributes when necessary.<br />
        I understand how assistive technologies interpret the DOM and strive to build interfaces that are inclusive and usable for all users.<br/>
        Clean semantic structure also benefits search engines by making content relationships explicit, which contributes to better discoverability and indexing.
        `,
        `
        To maintain high productivity and consistent quality, I integrate a range of modern development tools into my workflow. Efficient markup creation is supported by tools like Emmet, which accelerates development while preserving structural clarity.<br />
        For code formatting and linting, I rely on Prettier and ESLint to ensure consistent styling and enforce best practices across projects and teams.<br /><br />

        Browser Developer Tools play a central role in my debugging and optimization process. I use them to inspect DOM structures, analyze rendering behavior, evaluate performance metrics, and test responsive breakpoints.<br />
        I also leverage Lighthouse audits to assess performance, accessibility, SEO, and best practice compliance, using the results to guide targeted improvements.<br /><br />

        Standards compliance is verified using the W3C Validator, ensuring that my markup adheres to official specifications. This reduces cross-browser inconsistencies and prevents long-term technical debt.<br />
        Version control with Git allows me to manage iterations safely, collaborate effectively, and maintain traceable development histories.
        `,
        `
        In addition to writing raw semantic HTML, I strategically utilize frameworks and template engines to improve efficiency and maintain UI consistency.<br />
        When rapid development and standardized design systems are required, I use Bootstrap’s responsive grid system and prebuilt components to accelerate implementation while maintaining accessibility and responsiveness.<br /><br />
        
        For projects requiring higher customization and design flexibility, I adopt Tailwind CSS’s utility-first methodology. This approach allows precise control over spacing, typography, and layout without excessive custom CSS.<br />
        I understand the trade-offs between component-based frameworks and utility-driven styling, and I select the approach that best aligns with project goals.
        `,
        `
        In Single Page Applications, HTML serves as the foundational application shell that JavaScript frameworks enhance dynamically.<br />
        I understand how HTML interacts with client-side rendering mechanisms and how the DOM evolves in response to state changes. Even in highly dynamic environments, I prioritize semantic integrity and accessibility.<br />
        I design structures that support client-side routing while maintaining logical hierarchy. I am aware of SEO challenges associated with SPAs and consider strategies such as server-side rendering (SSR), static site generation (SSG), and hydration to ensure that applications remain indexable and performant. Understanding how rendering strategies affect performance and accessibility allows me to make informed architectural decisions.<br /><br />

        DOM performance is another important consideration. I avoid unnecessary reflows by structuring markup efficiently and understanding how frameworks manipulate the virtual DOM. By balancing dynamic interactivity with structural clarity, I help ensure that SPAs remain fast, accessible, and scalable.
        Ultimately, I view HTML in SPAs not as a passive container, but as an active structural layer that must remain meaningful even as JavaScript handles interactivity and state management.
        `,
        `
        Within CMS-driven projects, HTML plays a central role in shaping how content is presented and managed. I have experience working with WordPress theme structures and headless CMS architectures, where API-driven content must be transformed into structured, accessible markup.<br /><br />
        
        When customizing themes or building templates, I focus on flexibility and usability. My goal is to create markup structures that allow non-technical content editors to update text, images, and media without breaking layout integrity. This requires thoughtful component planning, consistent class naming, and scalable structural design.<br />
        In headless CMS environments, I integrate API responses into structured HTML layouts that preserve semantic meaning. I ensure that dynamic content does not compromise accessibility or SEO performance. Template systems are designed to balance creative flexibility with structural consistency.<br />
        By aligning HTML structure with content strategy, I help create systems that are easy to maintain, adaptable to growth, and resilient over time.<br /><br />
        
        My approach bridges the gap between design, development, and content operations.
        `,
        `
        My approach to HTML is rooted in the belief that markup is not merely a structural requirement, but the foundation of every reliable and scalable web application.<br />
        I prioritize semantic clarity, accessibility, and standards compliance, ensuring that each page communicates meaning effectively to users, search engines, and assistive technologies. By carefully structuring content with semantic HTML5 elements and maintaining logical hierarchy, I create interfaces that are inclusive, maintainable, and optimized for long-term growth.<br /><br />

        Beyond writing clean markup, I integrate modern development tools into my workflow to guarantee quality and consistency. Through structured formatting, validation, performance auditing, and version control, I maintain production-level standards across projects.<br />
        My workflow is designed not only for efficiency but also for reliability and collaboration in team environments.
        
        `
    ]
/* CSS */
    const BoardCSSAnimationElements:Array<string> = [
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>CSS</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>FrameWork&Library</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>CSS Animation</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Responsive</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>UI/UX</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Comment</p>"
    ]
    const CSSdateilsText:Array<string> = [
        `
        I use CSS to build scalable, maintainable, and responsive user interfaces. Leveraging modern layout techniques such as Flexbox and CSS Grid, I create structured, adaptable layouts for complex components and two-dimensional designs.<br />
        I design modular styles using methodologies like BEM and utility-based patterns, ensuring clean architecture and long-term maintainability.<br /><br />

        I also utilize CSS variables and preprocessors such as Sass/SCSS to improve reusability and consistency across projects. By understanding the box model, selector specificity, and cascade behavior, I prevent style conflicts and maintain predictable styling.<br/>
        Cross-browser compatibility and performance optimization are always considered, resulting in pixel-accurate and production-ready UI implementations.
        `,
        `
        To improve development efficiency and consistency, I work with frameworks such as Bootstrap and Tailwind CSS. With Bootstrap, I utilize its grid system and component library to rapidly build responsive layouts while customizing theme variables to match branding requirements.<br /><br />
        Using Tailwind’s utility-first approach, I streamline UI development and accelerate iteration cycles between design and implementation.<br />
        I selectively integrate lightweight libraries such as Animate.css when appropriate, balancing productivity with performance.<br />
        I evaluate trade-offs carefully and choose frameworks based on project scope, maintainability, and optimization needs rather than applying them by default.
        `,
        `
        I implement interactive and performance-conscious animations using @keyframes and CSS transitions. From subtle hover effects and fade-ins to more structured UI transitions, animations are designed to enhance usability rather than distract users.<br /><br />
        By primarily animating transform and opacity, I ensure smooth GPU-accelerated performance. Timing functions and duration settings are carefully tuned to create natural motion that improves feedback and visual hierarchy.<br/><br/>
        Animations are treated as part of UX design, supporting clarity, interaction feedback, and user flow.
        `,
        `
        I follow a mobile-first approach to ensure consistent experiences across devices. Using media queries and flexible units such as percentages and rem, I build layouts that adapt seamlessly from small screens to large displays.<br /><br />
        Responsive images, structured breakpoints, and performance considerations are integrated into the design process. Rather than simply resizing layouts, I optimize content structure and interaction patterns for each device context.<br /><br />
        The result is a clean, accessible, and device-agnostic user experience.
        `,
        `
        I design interfaces that prioritize clarity, usability, and visual hierarchy. Through thoughtful typography, spacing, and navigation design, I ensure users can intuitively understand and interact with content.<br /><br />
        From a UX perspective, I adopt a user-centered mindset, structuring flows that minimize friction and improve task completion. Wireframing, prototyping, and iterative refinement are part of my process to ensure both aesthetic quality and functional efficiency.<br /><br />
        
        My approach bridges visual design and technical implementation, delivering interfaces that are not only visually polished but also intuitive and performance-driven.
        `,
        `
        I specialize in building scalable, maintainable, and performance-driven user interfaces using modern CSS architecture and UX-focused design principles. By leveraging Flexbox and CSS Grid, I create structured, responsive layouts that adapt seamlessly across devices while maintaining clean visual hierarchy and accessibility.<br />
        My approach emphasizes modular styling through methodologies such as BEM and utility-based patterns, supported by CSS variables and preprocessors like Sass/SCSS to ensure consistency and long-term scalability.<br /><br />

        To enhance efficiency and maintain design consistency, I strategically utilize frameworks such as Bootstrap and Tailwind CSS, selecting tools based on project requirements and performance considerations rather than convenience alone. I balance rapid development with optimization, customizing components and minimizing unnecessary overhead to maintain lean production builds.<br /><br />
        Interactivity is implemented through carefully structured CSS animations and transitions, primarily leveraging transform and opacity to ensure smooth, GPU-accelerated performance. Rather than decorative motion, I design animations to reinforce feedback, guide user attention, and improve overall usability.
        `
    ]
/* Database */
    const BoardDatabaseAnimationElements:Array<string> = [
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Database</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>SQL</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>NoSQL</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Database Design</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Performance & Optimization</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Comment</p>"
    ]
    const DatabasedateilsText:Array<string> = [
        `
            I approach databases not merely as storage systems, but as foundational components of distributed architecture. A database defines system boundaries, performance ceilings, and long-term maintainability. My perspective extends beyond CRUD operations to encompass data modeling philosophy, consistency trade-offs, transactional guarantees, and system evolution over time.<br />
            I have a strong understanding of core database principles, including ACID properties, CAP theorem implications, isolation levels, concurrency control mechanisms (MVCC, locking strategies), and durability guarantees. Rather than treating these as academic concepts, I apply them when making architectural decisions—especially when evaluating trade-offs between strict consistency and availability in distributed systems.<br /><br />
            In production-oriented environments, I consider how databases interact with infrastructure: replication strategies, failover mechanisms, backup policies, disaster recovery planning, and observability. I understand how schema changes impact uptime, how migrations must be orchestrated safely, and how to design systems that tolerate partial failure.
        `,
        `
            My experience with SQL extends well beyond query composition. I design relational systems grounded in sound normalization principles while consciously introducing denormalization when justified by performance or workload characteristics.<br />
            I am comfortable working with advanced SQL constructs, including complex JOIN strategies, window functions, CTEs, recursive queries, and execution plan analysis. I routinely evaluate query performance using EXPLAIN plans and optimize through indexing strategies such as composite indexes, partial indexes, and covering indexes.<br /><br />
            
            I understand transaction isolation levels and their real-world implications—phantom reads, non-repeatable reads, and serialization trade-offs. When designing financial or state-sensitive systems, I carefully select isolation levels to maintain correctness without unnecessarily sacrificing throughput.
        `,
        `
            I evaluate NoSQL technologies not as replacements for relational systems, but as purpose-built tools for specific architectural needs. My experience includes designing document-based and key-value data models optimized for high-throughput, horizontally scalable systems.<br />
            In NoSQL environments, I model data based on access patterns rather than normalization theory. I embrace denormalization intentionally, understanding the trade-offs between duplication and performance. I also consider consistency models—strong consistency, eventual consistency, and quorum-based systems—when designing distributed data layers.<br /><br />
            I am comfortable reasoning about sharding strategies, partition keys, replication topology, and write/read consistency configurations. When working in distributed environments, I factor in network latency, cross-region replication, and failure scenarios to ensure predictable system behavior.
        `,
        `
            Database design, in my view, is a strategic architectural exercise rather than a schema drafting task. I begin with domain modeling, identifying aggregates, invariants, and transactional boundaries before translating them into relational or non-relational structures.<br />
            I carefully evaluate normalization levels to balance data integrity with query efficiency. I consider long-term system evolution—how easily the schema can accommodate new features without excessive migrations or breaking changes. Backward compatibility and zero-downtime deployment strategies are integral to my design process.<br /><br />
            
            I also design with operational realities in mind. This includes anticipating high-cardinality indexes, write-heavy vs read-heavy workloads, and data growth trajectories. I think about archival strategies, soft deletion policies, and compliance considerations such as data retention requirements.
        `,
        `
        Database performance is often the defining factor in system scalability. I take a methodical approach to optimization—profiling queries, analyzing execution plans, and identifying bottlenecks at both query and schema levels.<br />
        I am experienced in tuning indexes, restructuring inefficient joins, and refactoring query patterns to reduce I/O overhead. I understand the trade-offs between read and write optimization, particularly in systems with mixed workloads.<br />
        At the infrastructure level, I consider connection pooling strategies, caching layers (application-level and distributed), read replicas, partitioning, and horizontal scaling approaches. I also evaluate whether performance issues stem from data modeling flaws rather than surface-level query inefficiencies.<br /><br />
        In high-traffic systems, I prioritize observability—monitoring slow queries, tracking replication lag, and analyzing resource utilization metrics. Rather than applying superficial fixes, I aim to understand root causes and design sustainable improvements.
        `,
        `
        A solid understanding of databases is fundamental to building reliable, scalable, and maintainable software systems. I approach database architecture not merely as a storage solution, but as a core component of system design that directly impacts performance, scalability, and long-term sustainability. My experience spans both relational and non-relational databases, enabling me to select and design the most appropriate data model based on project requirements and business goals.<br /><br />
        I have a strong grasp of database fundamentals, including data modeling, normalization principles, ACID properties, transaction management, indexing strategies, and consistency models. I understand how backend services interact with databases through queries, ORMs, and APIs, and I prioritize data integrity and predictable behavior under concurrent workloads. Designing for reliability and clarity from the beginning significantly reduces future refactoring costs and technical debt.
        `
    ]
/* NextJS */
    const BoardNextJSAnimationElement:Array<string> = [
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>NextJS</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>CSR,SSR,SSG,ISR</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>App Router,Page Router</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>System Design</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Best Practice</p>",
        "<p class='mx-auto items-center justify-center hover:text-green-400' translate='no'>Comment</p>"
    ]
    const NextJSdateilsText:Array<string> = [
        `
            I actively develop with the latest version of Next.js, aligning with its recommended architecture and best practices.<br/>
            I primarily adopt the App Router paradigm, leveraging modern features such as Server Components, streaming, and built-in caching strategies to achieve both high performance and a smooth developer experience.<br/>
            My focus goes beyond simply making things work — I design applications with scalability, maintainability, and long-term stability in mind.<br/>
            I also stay up-to-date with evolving specifications and continuously refine the codebase to keep it production-ready.
        `,
        `
            I choose rendering strategies based on product requirements rather than relying on a single approach.<br/><br/>
            CSR (Client-Side Rendering) is used for highly interactive interfaces, SSR (Server-Side Rendering) for SEO-critical and performance-sensitive pages, and SSG (Static Site Generation) for content that does not change frequently.
            Additionally, I utilize ISR (Incremental Static Regeneration) to combine the performance benefits of static generation with the flexibility of dynamic updates.<br/><br/>
            This approach allows me to balance user experience, performance, and operational efficiency in a scalable way.
        `,
        `
            I have a solid understanding of both the App Router and Pages Router in Next.js and choose between them depending on the project context.
            With the App Router, I design applications around React Server Components, enabling efficient data fetching, nested layouts, and clear separation of concerns.<br/><br/>
            Meanwhile, the Pages Router remains useful for legacy systems or simpler setups.I prioritize a pragmatic approach — leveraging existing assets while enabling smooth, incremental migration to modern architecture.
        `,
        `
            I approach development from a system design perspective, not just at the component or page level.<br/><br/>
            This includes designing routing structures, data fetching flows, caching strategies, state management, and component architecture as a cohesive system.
            In Next.js applications,<br/>I carefully consider the separation between Server and Client Components, caching behavior, and revalidation strategies to optimize both performance and maintainability.<br/><br/>
            I aim to build systems that are scalable, easy to understand, and sustainable for long-term development and team collaboration.
        `,
        `
            As a general principle, I default to Server Components and introduce Client Components only when necessary, minimizing unnecessary JavaScript and improving initial load performance.<br/>
            I apply best practices such as efficient data fetching, proper caching strategies, code splitting, and lazy loading to maximize performance.<br/><br/>
            
            Also pay close attention to accessibility, SEO, and user experience, including the use of <Link> for prefetching and optimized navigation. <br/>
            Rather than blindly following patterns, I focus on understanding why a particular approach is appropriate and apply it intentionally in each project.
        `,
        `
            When I talk about Next.js, what stands out to me the most is how it balances flexibility and structure in modern web development.<br/><br/>
            It’s not just a framework—it’s more like a toolkit that allows me to choose the right rendering strategy depending on the problem I’m solving.
            Whether it’s CSR for highly interactive UI, SSR for dynamic content, or SSG/ISR for performance-critical pages, I can design systems that are both fast and scalable without overengineering.
            One thing I really appreciate is how Next.js encourages best practices by default.<br/><br/>

            Features like file-based routing, built-in API routes, and optimized image handling reduce the need for excessive configuration.<br/>
            It lets me focus more on designing the system itself rather than wiring everything together from scratch.<br/>
            That said, it never feels restrictive—I can still customize deeply when needed, especially with the App Router and server components.
        `,
    ]
    

        const IDdata:Array<string>= [ 'JS','TS','RC','HM','CS','DB','Next' ];
        const ViewArea = document.getElementById('Change_Text') as HTMLInputElement;
        for(let i:number = 0;i<IDdata.length; i++){
            document.getElementById(IDdata[i])?.addEventListener('click', function (e) {
                e.preventDefault();
                if(this.id === IDdata[0]){
                    ViewArea.innerHTML = JSTextinit;
                    // border-b border-black
                    for(let i:number = 0;i<BoardElements.length;i++){
                        BoardElements[i].innerHTML = BoardJSAnimationElements[i]
                        BoardElements[i].addEventListener('click',function () {
                            ViewArea.innerHTML = JSdetailsText[i];
                        })
                    }
                }
                if(this.id === IDdata[1]){
                    ViewArea.innerHTML = TSTextinit;
                    for(let i:number = 0;i<BoardElements.length;i++){
                        BoardElements[i].innerHTML = BoardTSAnimationElements[i]
                        BoardElements[i].addEventListener('click' ,function () {
                            ViewArea.innerHTML =  TSdateilsText[i];
                        })
                    }
                }
                if(this.id === IDdata[2]){
                    ViewArea.innerHTML = ReactTextinit;
                    for(let i:number = 0;i<BoardElements.length;i++){
                        BoardElements[i].innerHTML = BoardReactAnimationElements[i]
                        BoardElements[i].addEventListener('click', function () {
                            ViewArea.innerHTML = ReactdateilsText[i];
                        })
                    }
                }
                if(this.id === IDdata[3]){
                    ViewArea.innerHTML = HMTextinit;
                    for(let i=0; i<BoardElements.length; i++ ){
                        BoardElements[i].innerHTML = BoardHTMLAnimationElements[i];
                        BoardElements[i].addEventListener('click', function () {
                            ViewArea.innerHTML = HTMLdateilsText[i];
                        })
                    }
                }
                if(this.id === IDdata[4]){
                    ViewArea.innerHTML = CSTextinit;
                    for(let i = 0;i<BoardElements.length; i++ ){
                        BoardElements[i].innerHTML = BoardCSSAnimationElements[i];
                        BoardElements[i].addEventListener('click', function () {
                            ViewArea.innerHTML = CSSdateilsText[i];
                        })
                    }
                }
                if(this.id === IDdata[5]){
                    ViewArea.innerHTML = DBInitialtexts;
                    for(let i = 0;i<BoardElements.length; i++) {
                        BoardElements[i].innerHTML = BoardDatabaseAnimationElements[i];
                        BoardElements[i].addEventListener('click', function () {
                            ViewArea.innerHTML = DatabasedateilsText[i];
                        })
                    }
                }
                 if(this.id === IDdata[6]){
                    ViewArea.innerHTML = NextInitialtexts;
                    for(let i = 0;i<BoardElements.length; i++) {
                        BoardElements[i].innerHTML = BoardNextJSAnimationElement[i];
                        BoardElements[i].addEventListener('click', function () {
                            ViewArea.innerHTML = NextJSdateilsText[i];
                        })
                    }
                }
            })
        }
    }
    ClickedAnimation();
  return (
    <>
    <div className="flex items-center justify-center mt-3">
        <p className="text-white text-3xl">Skills<b className='hidden md:block lg:block'>&Experience</b></p>
    </div>
    <div className='flex items-center justify-center w-full mx-auto'>
        <div className='border m-6 w-full md:w-6xl lg:w-6xl h-64 md:h-64 lg:h-128 border-white bg-black/30'>
            <div className='flex flex-wrap container mx-auto'>
                <h1 id='Change_Text' className='m-3 text-xl'>You can view detailed data for the clicked image.</h1>
            </div>
        </div>
        <div className='hidden md:hidden lg:flex sticky top-15 right-0  bottom-0 z-8 flex-wrap'>
            <div className='w-sm m-6 ml-0 h-64 bg-black/30 border border-white rounded-2xl rainbow-shadow wave-move shadow-2xl'>
                <div id='Change_board'>
                    <div className='flex items-center ml-3 mr-3 m-0.5 h-10' id='BoardNode0'>Leveraging my past experience in frontend,</div>
                    <div className='flex items-center ml-3 mr-3 m-0.5 h-10' id='BoardNode1'>this site using React,Vite,Motion(Framer Motion) etc...,JavaScript libraries.</div>
                    <div className='flex items-center ml-3 mr-3 m-0.5 h-10' id='BoardNode2'>using Firebase for the database.</div>
                    <div className='flex items-center ml-3 mr-3 m-0.5 h-10' id='BoardNode3'>If you're viewing this on a PC, please click on the images.</div>
                    <div className='flex items-center ml-3 mr-3 m-0.5 h-10' id='BoardNode4'>sharing my thoughts on the technology here.</div>
                    <div className='flex items-center ml-3 mr-3 m-0.5 h-10' id='BoardNode5'></div>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-wrap items-start justify-center mx-auto container mt-6">
        <div className="flex flex-wrap text-white m-1.5 justify-center items-center">
            <div className="w-35 m-1 ">
                <img src={JSImage} alt="SkillIcons" className="border-2 border-black rounded-xl bg-black" id="JS" onClick={ClickedAnimation} />
                <h1 className="text-xl text-center" translate="no">JavaScript</h1>
            </div>
            <div className="w-35 m-1">
                <img src={TSImage} alt="SkillIcons" className="border-2 border-black rounded-xl bg-black" id='TS' onClick={ClickedAnimation}/>
                <h1 className="text-xl text-center" translate="no">TypeScript</h1>
            </div>
            <div className="w-35 m-1">
                <img src={ReactImage} alt="SkillIcons" className="border-2 border-black rounded-xl bg-black" id='RC' onClick={ClickedAnimation} />
                <h1 className="text-xl text-center" translate="no">React</h1>
            </div>
            <div className="w-35 m-1">
                <img src={HTMLImage} alt="SkillIcons" className="border-2 border-black rounded-xl bg-black" id='HM' onClick={ClickedAnimation} />
                <h1 className="text-xl text-center" translate="no">HTML</h1>
            </div>
            <div className="w-35 m-1">
                <img src={CSSImage} alt="SkillIcons" className="border-2 border-black rounded-xl bg-black" id='CS' onClick={ClickedAnimation} />
                <h1 className="text-xl text-center" translate="no">CSS</h1>
            </div>
            <div className="w-35 m-1">
                <img src={DataBaseImage} alt="SkillIcons" className="border-2 border-black rounded-xl bg-black" id='DB' onClick={ClickedAnimation} />
                <h1 className="text-xl text-center" translate="no">DataBase</h1>
            </div>
            <div className="w-35 m-1">
                <img src={NextImage} alt="SkillIcons" className="border-2 border-black rounded-xl bg-black" id='Next' onClick={ClickedAnimation} />
                <h1 className="text-xl text-center" translate="no">Next</h1>
            </div>
        </div>
    </div>
    </>
  )
}
