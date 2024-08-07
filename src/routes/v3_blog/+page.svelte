<article class="prose" id="being_fine_with_suboptimal">
  <h2>7th July, 2024</h2>
  <h3>Being fine with "sub-optimal" <i>and v3 updates</i></h3>
  <p>
    To avoid keeping everyone in complete darkness, I've created a <a
      href="https://github.com/WhyAsh5114/MyFit/discussions/45">GitHub discussion</a
    > which I'll try to update regularly.
  </p>
  <p>
    "Sub-optimal" — you might've heard this word many times on social media: influencers telling you
    that this exercise is "sub-optimal" for this head of this muscle group and that you SHOULD NOT
    do it AT ALL. Sometimes it is true and well-intended, but many times it's just unnecessary and a
    lot more nuanced. Fitness should be considered with context, and so should exercises. Some
    exercises might not be "optimal," but they might feel better on your joints, or you might simply
    enjoy them more. Keeping a black-and-white view of exercises as simply optimal vs. not optimal
    is not good for long-term goals.
  </p>
  <p>
    I've learned this same lesson when making this app on the technical side as well. Sometimes you
    can't get the optimal structure or pristine code with perfect readability, and you should be
    fine with it. I've re-made this same workout app about four times now, each time learning new
    things and getting better at it. Instead of aiming for perfect code, I've now started to aim for
    "good enough" code. Otherwise, I'll never be able to release v3 and will be stuck in my OCD
    forever.
  </p>
  <p>Tech updates:</p>
  <ul>
    <li>Moved to CockroachDB from Neon for the lower latency and higher storage (10GiB free!)</li>
    <li>A good CI/CD pipeline that will work for PRs as well</li>
  </ul>
  <p>
    Again, I'm just a college student who's barely an adult. This blog is a place where I plan to
    share my journey of building this application. None of this is scientific advice, just my
    opinion on things I've built by watching tons of Dr. Mike on YouTube 😅
  </p>
</article>

<br /><br />
<article class="prose" id="update_on_the_progress_of_v3">
  <h2>16th June, 2024</h2>
  <h3>Update on the progress of v3</h3>
  <p>The app now gets 4000+ views every week 🥳. Thanks, all!</p>
  <p>
    Now that my exams are over and I have almost an entire month of holidays, I'm dedicating nearly
    the entire day to v3. I'm learning new things and implementing features every day, which feels
    great! I'm almost done with the foundational work on exercises and mesocycles and will begin
    working on workouts very soon. Most of the tech stack is now fixed, and I doubt I'll have to
    rewrite anything for at least the next few months.
  </p>
  <figure>
    <img src="/v3_sneakPeek_1.jpg" alt="v3 sneak peek" />
    <figcaption>v3 sneak peek</figcaption>
  </figure>
  <p>Some of the new and requested features that I've implemented are:</p>
  <ul>
    <li>Drag and drop for exercises</li>
    <li>Exercise search list where you can add an exercise with one click</li>
    <li>Ability to change the exercise split of an ongoing mesocycle without losing progress</li>
    <li>Actual and meaningful analytics</li>
  </ul>
  <p>
    For the tech people who are interested (these decisions don't really affect the actual end user
    experience directly, mostly just UI stuff and some speed improvements), here are some of the
    major changes:
  </p>
  <ul>
    <li>tRPC instead of REST API for type-safe database queries</li>
    <li>shadcn-svelte with Svelte 5 for UI components</li>
    <li>Prisma with Neon PostgreSQL for efficient joins and type safety</li>
  </ul>
  <p>
    Now that the basics are in place, I can soon start work on the progression algorithms. I just
    need to write some tests to make sure things don't break later on when I add more features.
    That's about it for this blog post. I'll try to post once every month to give updates on v3 and
    cool upcoming stuff. Happy lifting!
  </p>
</article>

<br /><br />
<article class="prose" id="about_v3">
  <h2>3rd May 2024</h2>
  <h3>About v3</h3>
  <p>
    TLDR: Life happened. and I wasn't happy with the current tech stack, so I'm sorry but it's gonna
    take quite some more time
  </p>
  <p>
    Yeah... that didn't pan out well. It's been almost half an year since I made the v3 notice. I
    was naive to believe that I'd actually be able to complete the thing in 2 months. I didn't
    expect so much stuff to happen in this last semester of my diploma, basketball, hackathons,
    college events, and even exams! I still tried to put in as much work in v3 as I could, but the
    code quality was deteriorating over time as I was starting to do the same thing I did in v2,
    rush things.
  </p>
  <p>
    I wasn't happy with how the spaghetti code looked, I just knew this was something that would
    become a disaster to manage later on, so instead of trying to deliver a rushed app again, I've
    decided to let v3 take as much time as it needs.
  </p>
  <p>I also need to change the tech stack entirely.</p>
  <ul>
    <li>
      I'm moving away from MongoDB with API endpoints, to server-side streamed Prisma ORM with
      PostgreSQL hosted on Neon, this should offer much better type safety without code duplication
      and better performance.
    </li>
    <li>
      I'm also going to use shadcn-svelte for this project instead of DaisyUI, it looks very cool
      and is quite low-effort tbh.
    </li>
    <li>
      I also want to use Svelte 5, but I need to wait a bit as the shadcn-svelte library isn't yet
      fully ready for runes support.
    </li>
  </ul>
  <p>
    "So how long will v3 take?", you may ask, and to answer that honestly, I don't know at this
    point, <b>I really don't want to rush this.</b> Sorry for making false promises, I didn't know any
    better.
  </p>
  <p>
    I have my last sem exams now, after which I have a lot of free time to build, till then
    hopefully svelte 5 would be better supported in the ecosystem and the DX would be great too.
  </p>
  <p>
    On a side note: v2 is still doing extremely well, there are 10000+ views every month, which is
    insane to me. So many people have opened helpful issues to suggest stuff and also told me to add
    a donations option, which is very cool, thanks a lot guys. As soon as exams are over, I'll start
    working on v3, I don't feel comfortable yet giving a specific timeline but I promise you this,
    I'll try my best to finish it as soon as possible.
  </p>
  <p>Happy lifting!</p>
</article>

<br /><br />
<article class="prose" id="v3_notice">
  <h2>27th December, 2023</h2>
  <h3>v3 Notice!</h3>
  <p>I have received quite the traffic in v2, <i>I am super happy about that</i></p>
  <p>
    Unfortunately, even though I wanted to, I couldn't fully implement all the features of v2 before
    launch, I hurried a lot
  </p>
  <p>
    I have began work on v3 now, this time it will be a full fledged app with all the features from
    start, <b>and not break any important features after launch</b>
  </p>
  <p>
    Developing v3 will take a long time <i>(~2 months)</i>, but if there are some important features
    that you guys wish to have in v2, feel free to open an issue on the
    <a class="link text-accent" href="https://github.com/WhyAsh5114/MyFit/issues"
      >GitHub repository</a
    >
  </p>
  <p>
    The reason I am working on v3 and not implementing the new features directly in v2 is cause of
    potential migration problems, v3's schema will be different from v2's. Don't worry though, I
    will definitely make a migration script after v3 has finished development for an easy upgrade to
    v3
  </p>
  <p>Some new features that I'm working on in v3 are:</p>
  <ul>
    <li>Offline support</li>
    <li>Automatic recovery suggestions</li>
    <li>Automatic deload creator</li>
    <li>Better and <i>working</i> analytics</li>
    <li>
      <i
        >Open to suggestions, <a
          class="link text-accent"
          href="https://github.com/WhyAsh5114/MyFit/issues">open an issue!</a
        ></i
      >
    </li>
  </ul>
</article>
