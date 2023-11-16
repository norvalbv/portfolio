- [x] Legal ramifications with web accessibility #Complete
---
## Overview

The [legal impact](https://f.hubspotusercontent30.net/hubfs/3280432/Remediated-2021-Year-End-Report-FINAL.pdf) surrounding accessibility is somewhat of a concern. Public sector entities in the United States, such as government-funded programs/schools, airlines, and non-profits, must follow certain digital accessibility rules, while many private sector companies do not. In countries such as Canada, the United Kingdom, Japan, Australia, and the European Union, stricter [digital accessibility laws](https://www.w3.org/WAI/policies/) exist for both public and private companies.

## In the United Kingdom

[In the digital accessbilities laws world wide](https://www.w3.org/WAI/policies/) under the United Kingdom, you can see that the 2010 Equality Act is the main focus of legality in web accessibility. It focuses on non-discrimination law and works against both the public and private sector. It's based off the 2.0 WCAG. The public and private sector in the United Kingdom have their own rules for web accessibility, the public sector is further enforced by the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations (2018) that aligns to the [WCAG 2.1 spec](https://www.w3.org/TR/WCAG21/).

In the UK, one in five people have a disability – with many more living with a temporary disability. Under UK law, organisations have a legal responsibility to ensure their website is accessible to this audience. If it isn’t, you could be breaking the law and losing out on a bigger online market share.
### [Equality Act 2010](https://www.legislation.gov.uk/ukpga/2010/15/contents)

Under the wide-ranging EQA, UK goods and service providers (this includes both public and private sector organisations) have a legal obligation not to discriminate against people based on a number of protected characteristics – including disability. This covers people with visual, motor, hearing, cognitive and learning disabilities.

But the EQA demands more of organisations than non-discrimination. It also requires website owners to actively provide an equal website experience to all their users. The requirements of the law are crystal clear in this respect. The Equality and Human Rights Commission published a statutory code of practice to clarify goods and service providers’ responsibilities under the law. It states that the:

>"…duty to make reasonable adjustments requires service providers to take positive steps to ensure that disabled people can access services. This goes beyond simply avoiding discrimination. It requires service providers to anticipate the needs of potential disabled customers for reasonable adjustments."

To comply with the law, UK website owners must therefore make **‘reasonable adjustments'** so that their web content is accessible to people with disabilities – not wait for disabled people to tell them their site in inaccessible. **The EQA itself does not outline the technical accessibility standards it requires of websites. So, in practice, the safest bet for organisations is to ensure their web content adheres to WCAG 2.1 Level AA standards.**

#### Taking Legal Action

So far, the legal action taken against companies is minor. A few companies have faced legal action brought by The Royal National Institute for the Blind (RNIB). As an example, In March 2023 [BBC News](https://www.bbc.co.uk/news/uk-northern-ireland-65100390) reported on the £3,000 settlement awarded to a blind man over inaccessible content. Stephen Campbell was unable to access the Health and Social Care Northern Ireland (HSCNI) website to apply for promotion. As a screen reader user, he was unable to activate the online process using his screen reader software. He was also unable to find any information for reasonable adjustments to be made for him to apply.  **However, given that the Government has adopted the WCAG 2.1 level AA as a suitable standard for public sector sites (see below) and it is more broadly recognised as a ‘good’ approach, any site which met these guidelines would have a very strong defence against any legal action.**

It's important to note that country-specific accessibility guidelines applies to where the product is shipped. If you're distributing an international product that meets the requirements in country A but not in country B, you could still be fined. The above fine is also UK-specific, and other countries have different legality and penalties involved. I posted [this thread to Reddit](https://www.reddit.com/r/webdev/comments/15fclvx/should_i_be_concerned_about_the_legality_of_web/) about the legality impact, it seems the gold standard is AA so if that's covered, you should be fine internationally. People are also mentioning that their companies have been fined *six digits* for inaccessible websites, so the penalties can be subjective per region.

### [Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations (2018)](https://www.legislation.gov.uk/ukpga/1995/50/contents)

While the EQA set a baseline for web accessibility legislation in the UK, digital accessibility protection was beefed up for the public sector in September 2018 with the introduction of the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations.

The regulations aim to ensure that services provided by public sector bodies are accessible to people with disabilities. The law sets a clear accessibility threshold for public sector bodies; their website must align with WCAG 2.1 Level AA. They must also publish an accessibility statement listing any areas of their site that do not meet WCAG 2.1 Level AA standards.

All public sector bodies should have become compliant with this law by September 2020. If they haven’t, they may be subject to legal action.

[Read more about this here.](https://www.siteimprove.com/glossary/uk-accessibility-laws/)

### Distributing Internationally

When you're building a website that is intended for international use, it's generally advisable to make your website compliant with the laws and regulations of all the major markets where you expect it to be used, especially if you have a substantial audience in those markets or if you're actively targeting users there.

If your business is based in a certain country, you should certainly comply with the laws of that country. But if you are serving customers elsewhere, you should consider their local laws as well. Again, go [here](https://www.w3.org/WAI/policies/) to find the international laws.


## Technical implications

ARIA or WAI-ARIA may not be fully supported in your users environment. As there are an exhaustive amount of ARIA features, it is up to the browser that the user is using to provide an up-to-date API that covers the entire spec, as well as the screen reader that they're using being up to date. There are numerous cominbations of operating systems, browsers, and screen readers to consider. Therefore, the question arises, if you implement a standard you are happy with for example AA and the user's browser doesn't support your ARIA labels, are you liable, should you of planned this in advanced and implemented various polyfills? 

The answer, it's tricky. Like anything that's law-related, there is no clear and straight-forward answer. As there are numerous legal ramfications around the world you cannot give one answer. As mentioned previously, if you comply with the typical WCAG AA standard, you should be fine. You, as a developer / business cannot control what the users use so if a breaking change comes in that only affect a very small minority, or the user is using a new unstable browser, you *should* have a fighting chance if they try and sue you. Again, it's difficult to answer so as long as you're staying up to date with the regulations on accessibility and how to apply them, that's all you can do.

---

> Path: /Users/beam/Documents/Obsidian Vault/Coding/Accessibility/Legal ramifications with web accessibility.md