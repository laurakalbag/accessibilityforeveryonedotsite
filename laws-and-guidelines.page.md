---
title: Laws and Guidelines
index: 8
layout: ./Chapter.layout.js
script: |
  import ChapterUpdate from './ChapterUpdate.fragment.js'
---
<${ChapterUpdate}/>

<div id="start"><p>Let’s face it, guidelines and standards are often really boring—and it can be hard to see how the principles apply in the context of your own projects. Legalese alone makes for a tough read:</p></div>

> More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.

> —WCAG 2.0, Guideline 2.4.5

If you go over this passage carefully, you’ll understand that you’re being advised to give people multiple ways to reach a web page. But the text sounds fusty and formal.

There’s a valid reason for that formality: these guidelines are often used as criteria for a project in the specification, or to support government-dictated standards. When any company agreement or legal requirement relies upon a text, it needs to be clear and specific. The formality of the language can make it harder to understand what you need to do to satisfy the guidelines, but W3C’s Web Accessibility Initiative has plenty of additional explainers, such as the “How to Meet WCAG 2.0” quick reference ([https://a4e.link/07/01/](https://a4e.link/07/01/)).

## The Legal Landscape

People may use the legal argument as the main reason to care about accessibility, but I don’t want to treat you like you’re heartless. If avoiding being sued is the only reason you care about making a website available to a wide audience—particularly those with disabilities—then perhaps creating products for other people isn’t for you.

That said, there have been examples in many countries (including the US and the UK) where a lack of web accessibility has been considered discriminatory against those unable to access the sites. It’s important to take the legal aspects seriously.

### National Federation of the Blind v. Target Corporation

In the United States, the law most relevant for accessibility is the Americans with Disabilities Act (ADA). While the act doesn’t currently contain any specific references to website accessibility, a precedent was set in 2006 when three visually impaired people, alongside the National Federation of the Blind (NFB), brought a lawsuit against the American retailer Target.

The court ruled that commercial websites such as Target.com are required to be accessible under the ADA and state laws. Target never admitted that its website was inaccessible, but was required to comply with NFB certification. Target also had to pay the NFB a total of $170,000 for certification over three years, give its web developers at least one day of accessibility training, and pay damages to the class-action claimants.

### UK law and RNIB v. Bmibaby Limited

In the UK, the relevant accessibility law is the Equality Act. Section 20 of the Equality Act, “Duty to make adjustments,” refers specifically to the accessibility of information:

> Where the first \[a disabled person at a substantial disadvantage in comparison to someone who is not disabled\] or third \[where a disabled person would, but for the provision of an auxiliary aid, be put at a substantial disadvantage to someone who is not disabled\] requirement relates to the provision of information, the steps which it is reasonable for A \[a person who has a duty to provide information\] to have to take include steps for ensuring that in the circumstances concerned the information is provided in an accessible format.

That’s a very long-winded way of saying that information (including websites) should be provided in an accessible format so that people with disabilities aren’t at a substantial disadvantage compared to those without disabilities.

In 2012, the Royal National Institute of Blind People (RNIB) threatened the UK airline Bmibaby Limited with legal action for “failing to ensure web access for blind and partially sighted customers.” After attempting to give Bmibaby advice and guidance, the RNIB started legal proceedings (though the case was never brought to court). Four months later, the following statement appeared on the RNIB website:

> RNIB is pleased BMI baby \[sic\] has finally listened to their blind customers, and RNIB, and made changes to its website which now enable blind people to book flights. Prior to the changes blind people visiting the website weren’t even able to select their flight dates as they were only able to do so by using a mouse. Blind people are unable to use a computer mouse because they’re not able to see the arrow on screen which would be used to select holidays dates.

> There are a few other issues which BMI baby need to fix, such as making it possible for a blind person to pre-book their seat. Currently this part of the website isn’t accessible to blind people. BMI baby and RNIB are looking into these issues and giving consideration as to whether it is now possible to settle the legal proceedings.

> —Sam Fothergill, RNIB Senior Legal Policy Officer, 27th April 2012

When I speak to accessibility professionals, many tell me of cases with equally high-profile companies quietly settling out of court. Many companies don’t want the bad publicity and exposure of an inaccessible website. They would rather pay money to the claimants and improve their sites out of the public eye.

## Current Legislation and Agreements

Many countries have their own standards and laws covering the web and accessibility. Often web accessibility is folded into other access and disability discrimination laws. In the US, the law you’re most likely to come across is Section 508 (the US standard). In Europe, we have the European Accessibility Act.

### Section 508

Section 508 is an amendment made in 1998 to the US Rehabilitation Act of 1973. It’s a regulation that requires that all US federal employees with disabilities have the same access to information as employees without disabilities. It also requires that electronic and information technology from US federal agencies is accessible to people with disabilities. Section 508 doesn’t require compliance from non-government sites unless they receive federal funds or are under contract with a federal agency.

Section 508’s “refresh” was published in the Federal Register in January 2017 after a long period of consultation and changes going back to 2008. Matt Feldman has covered the update in detail on the Paciello Group website ([https://a4e.link/07/02/](https://a4e.link/07/02/))

The refreshed standards give instructions for specific types and uses of technology, including the notable recommendation that sites should adhere to Level A and Level AA of the WCAG 2.0 guidelines—exactly what Dale Cruse, senior digital accessibility specialist at JPMorgan Chase, suggests doing:

> Those are good guidelines, but they only apply to the United States of America. I worked at a global organization focused on learning solutions for all people. Instead of Section 508, I turned our attention to WCAG 2.0 Level AA standards. That way, as an organization, we could talk about the same guidelines and the same goals. We had a common understanding of what we were trying to achieve together.

We’ll have a look at the WCAG later in this chapter.

### The European Accessibility Act

The European Union has a similar draft regulation to Section 508 in its European Accessibility Act ([https://a4e.link/07/03/](https://a4e.link/07/03/)). It’s a directive designed to create a legislative framework for accessibility in line with Article 9 of the United Nation’s Convention on the Rights of Persons with Disabilities (CRPD). The Convention has two underlying principles that particularly apply to web accessibility: recognizing the importance of full and effective participation and inclusion in society, and the accessibility of information and communication technology. The European Accessibility Act doesn’t just cover websites and computers, but also the digital aspects of other public systems, such as ATMs and ticketing machines.

## Guidelines

The legal stuff can seem pretty scary, but as I mentioned earlier, standards and guidelines help us generate benchmark for our work. Guidelines like the Web Content Accessibility Guidelines (WCAG) act as valuable checks at various stages of a website’s creation and maintenance, giving us structure when we’re deciding how to develop a site.

### WCAG

WCAG 2.0 is the current version of the Web Content Accessibility Guidelines from the W3C. Developed by the Web Accessibility Initiative (WAI), WCAG 2.0 distinctly differs from WCAG 1.0 in the sense that the W3C shifted its approach away from specific technologies. In WCAG 1.0, the checkpoints within each guideline frequently refer to particular technologies (links, image maps, form controls):

> 9.5 Provide keyboard shortcuts to important links (including those in client-side image maps), form controls, and groups of form controls*.*

That’s still good advice, but it’s very specific. The WCAG 2.0 guidelines are broader and more technology-independent so that they can be easily applied to unanticipated, new web technologies. Every guideline is structured as an overarching principle, containing corresponding guidelines that each have success criteria. In WCAG 2.0, the closest we get to that same guideline is:

> 2.1.1 Keyboard: All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user’s movement and not just the endpoints*.*

Even this brief example makes clear that the success criteria apply to “all functionality of the content” (which I would call interaction)—not just links, image maps, and form controls.

#### Principles

The WCAG 2.0 principles are focused around a human-centered approach to web design, and handily spell out the acronym POUR (Perceivable, Operable, Understandable, Robust):

* **Principle 1:** Perceivable—information and user interface components must be presentable to users in ways they can perceive.
* **Principle 2:** Operable—user interface components and navigation must be operable.
* **Principle 3:** Understandable—information and the operation of user interface must be understandable.
* **Principle 4:** Robust—content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

Without looking at the guidelines underneath these principles, it may seem that “perceivable” and “understandable” are the same thing, but they’re not. “Perceivable” is about being able to access the content in the first place. “Understandable” is about then being able to understand the content so that you can interact with it.

It’s not going too far to say that I love the WCAG 2.0 principles. They’re not just overarching themes for each group of guidelines, but also general principles that can be understood by everybody in an organization. Their entire focus is on making a site that’s easy to use, regardless of the technology you’re using. It’s well worth bookmarking the principles so you can easily refer to them while you’re creating a site. They’re free, so you haven’t got an excuse not to.

#### Levels

WCAG has multiple levels of conformance. Each success criteria in the WCAG 2.0 guideline is designed to be testable. To conform to WCAG 2.0, you need to meet these criteria. ([https://a4e.link/07/01/](https://a4e.link/07/04/)) Each criteria has a level:

* Level A: the lowest (minimum) level of conformance
* Level AA: the middle level of conformance, satisfying both Level A and Level AA criteria
* Level AAA: the highest level of conformance, satisfying Level A, Level AA, and Level AAA criteria

Most organizations interested in accessibility aim for Level AA. The standards and laws in some countries require that government sites conform to Level AA. Agencies proposing site redesigns to big companies will often find Level AA is required in the specification, as it minimizes the chance of legal action against the company.

Organizations that specialize in accessibility and inclusion aim toward Level AAA. It’s the hardest level to achieve, and may require a lot of additional time and expense to meet criteria such as:

> 1.2.6 Sign Language (Prerecorded): Sign language interpretation is provided for all prerecorded audio content in synchronized media. (Level AAA)

> 1.2.7 Extended Audio Description (Prerecorded): Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media. (Level AAA)

Sign language and audio descriptions are very worthwhile but require specialist skills, software, and a lot of time—depending on the amount of audio on your site. Many organizations can’t afford these costs and are therefore unable to comply with Level AAA.

If you’re new to accessibility, especially if you’re working with an existing site, start with Level A. You’ll probably find that as you begin thinking about people using your site in a new way, and implementing the more straightforward guidelines, you’ll end up complying with the stricter levels anyway. For example, you may intend to make your text accessible following the guideline on distinguishable content:

> Guideline 1.4 Distinguishable: Make it easier for users to see and hear content including separating foreground from background.

In doing so, you make your text a dark color on a light background. When checking the color contrast ratio, you discover that it happens to conform to Level AA:

> 1.4.3 Contrast (Minimum): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1 (Level AA)

### ATAG

If you’re working on producing content management systems, or a web app that allows the user to write content and upload images, the W3C has specialized guidelines for what it considers “authoring tools”—the Authoring Tool Accessibility Guidelines (ATAG).

It’s unlikely that the owners of social networks and other authoring tools will be held to account for the accessibility of the content their users produce. But it’s just good practice to enable your users to make their content accessible. What’s the point in making your tool accessible if the content created with it isn’t?

ATAG has two parts:

* ensuring the authoring element of site is accessible
* ensuring the authoring element helps users produce accessible content

Much like WCAG 2.0, ATAG 2.0 is arranged with overarching principles, specific guidelines, and success criteria with A, AA, and AAA levels.

### Beyond guidelines

Remember, you can stick to laws, standards, and guidelines without feeling restricted by them. Moreover, we can use these standards and guidelines to help us plan better sites and as a benchmark against which to evaluate our work. If you care about a site’s accessibility, you’re unlikely to be on the wrong side of the law.

It can be easy to treat guidelines as checklists—criteria to simply tick off, convinced of our compliance. That might satisfy a court, but it ignores the principles underlying the guidelines.

The point of web accessibility is to create flexible and generous sites that benefit people using the web. When we focus on checklists, we’re only “doing” accessibility so we don’t get told off by the authorities, not because we care about great experiences for fellow users of the web. And if we don’t care about great experiences, and are only doing the bare minimum to adhere to the guidelines, we’re not going to create good websites.

## Keeping Up

The wonder of technology is that it’s constantly evolving and at breathtaking speed. The stress of technology is that we feel compelled to keep up.

If you work in technology, you’re probably painfully aware of how many new technologies and best practices you need to stay on top of to do your job well. New devices, operating systems, browsers, and assistive technologies come out every day, and they all affect accessibility work.

When you’re trying to keep up with the accessibility landscape, look out for new assistive technologies, changes to accessibility support in browsers and operating systems, and breakthroughs in front-end technologies. Keep your ears out and your eyes open so you can retest sites on updated versions of your testing suite when necessary. The blogs listed in the Resources section will also help you stay up to date.

In contrast to the dizzying pace of technological change, accessibility best practices tend to evolve much less frequently. Accessibility is not so much about technological developments as it is about finding lots of little ways to improve on current technology and experiences.

### Do the right thing

Doing accessibility well is about merging your knowledge of accessibility with your project’s context to create a balance that serves the people who use your site.

Your types of content and interactions will dictate one set of constraints. Your visitors’ needs and goals will dictate another. In broad terms, the whole of web design as a practice is finding the equilibrium between these constraints.

Don’t let accessibility overwhelm you. Everything I’ve written in this book really comes down to these tips:

* Being considerate is the first steps to an accessible site. Accessibility is easy to consider once you start caring about it. Once you start thinking about accessibility at every point of planning, you’ll apply it to the content, interactions, aesthetics, and code.
* The key to universality in web design lies in being flexible. We need to embrace the natural flexibility of the web. It’s not about relinquishing all control, or making things generic, or dumbing them down. Research and testing will help us understand where we need to be flexible—and where we need constraints—to make a site accessible to as many people as possible. We need to use our knowledge to understand where to set the boundaries.
* Use guidelines as just that: guidelines. Once you’ve absorbed the requirements for broad web accessibility, you can use policies and guidelines to make sure you don’t forget important details during production. But strict adherence to rules doesn’t ensure good accessibility—you need to understand the audience and balance their needs, rather than just ticking boxes.

As we wrap up our time together, I have a final request for you: talk about accessibility more! If you do, others will too. My one wish for the web is that people consider accessibility in the same way they think about web performance. The performance implications of a new tool or technique are always mentioned in blog posts and articles. Wouldn’t it be great if the same were true for accessibility?

We need to work together to make and keep the web open, affordable, and available to all. Accessibility is our way to ensure that *nobody* gets shut out.
