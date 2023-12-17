## Overview

Yippee, a blog about web accessibility law. Nothing is ever easy when law is mentioned so I decided to write this semi-short overview of the best practices when shipping internationally and how your website/app should meet certain standards.

The [legal impact](https://f.hubspotusercontent30.net/hubfs/3280432/Remediated-2021-Year-End-Report-FINAL.pdf) surrounding accessibility should be a concern if you have any form of customer using your product. Public sector entities in the United States, such as government-funded programs/schools, airlines, and non-profits, must follow certain digital accessibility rules, while many private sector companies can be more relaxed. In countries such as Canada, the United Kingdom, Japan, Australia, and the European Union, stricter [digital accessibility laws](https://www.w3.org/WAI/policies/) exist for both public and private companies.

## In the United Kingdom

[In the digital accessibility laws worldwide](https://www.w3.org/WAI/policies/) under the United Kingdom, you can see that the 2010 Equality Act is the main focus of legality in web accessibility. It focuses on non-discrimination law that works against both the public and private sector, basing its policies on the 2.0 WCAG standardisations. With each country around the world implementing its guidelines to enforce non-discriminatory accessibility standards, the United Kingdom is no different. The public sector is further enforced by the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations (2018) that align to the [WCAG 2.1 spec](https://www.w3.org/TR/WCAG21/).

In the UK, one in five people have a disability; with many more living with a temporary disability. Under UK law, organisations have a legal responsibility to ensure their website is accessible to this audience. If it isn’t, you could be breaking the law and losing out on a bigger online market share. 

### [Equality Act 2010](https://www.legislation.gov.uk/ukpga/2010/15/contents)

Under the wide-ranging EQA, UK goods and service providers (this includes both public and private sector organisations) have a legal obligation not to discriminate against individuals based on several protected characteristics, including disability. This covers people with visual, motor, hearing, cognitive and learning disabilities. However, the EQA demands more of organisations than to not discriminate, it also requires website owners to actively provide an equal website experience to all their users. The requirements of the law are crystal clear in this respect. The Equality and Human Rights Commission published a statutory code of practice to clarify goods and service providers’ responsibilities under the law. It states the:

>"…duty to make reasonable adjustments requires service providers to take positive steps to ensure that disabled people can access services. This goes beyond simply avoiding discrimination. It requires service providers to anticipate the needs of potential disabled customers for reasonable adjustments."

To comply with the law, UK website owners must therefore make **‘reasonable adjustments'** so that their web content is accessible to people with disabilities; not wait for disabled people to tell them their site is inaccessible. The EQA itself does not outline the technical accessibility standards it requires of websites so therefore, the safest bet for organisations is to ensure their web content adheres to WCAG 2.1 Level AA standards. You would not have an excuse for lack of expertise or funding if you cannot make your website accessible.

### [Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations (2018)](https://www.legislation.gov.uk/ukpga/1995/50/contents)

While the EQA set a baseline for web accessibility legislation in the UK, digital accessibility protection was beefed up for the public sector in September 2018 with the introduction of the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations.

The regulations aim to ensure that services provided by public sector bodies are accessible to people with disabilities. The law sets a clear accessibility threshold for public sector bodies; their website must align with WCAG 2.1 Level AA. They must also publish an accessibility statement listing any areas of their site that do not meet WCAG 2.1 Level AA standards. All public sector bodies should have become compliant with this law by September 2020. If they haven’t, they may be subject to legal action.

[Read more about this here.](https://www.siteimprove.com/glossary/uk-accessibility-laws/)

## Distributing Internationally

Whether you are building a website that is intended for international use, it is generally advisable to make your website compliant with the laws and regulations of all the major markets where you expect it to be used. This is especially true if you have a substantial audience in those markets or if you're actively targeting users in those regions.

If your business operates within a specific country, it's essential to adhere to its laws. Additionally, when serving customers in other countries, take into account their local laws too. For information on international laws, visit [here](https://www.w3.org/WAI/policies/).

## Technical implications

ARIA, or WAI-ARIA, may not be fully supported in your users' environment. Given the exhaustive range of ARIA features, the degree of support largely depends on the user's browser, which is responsible for providing an up-to-date API that encompasses the entire specification. Additionally, the effectiveness of these features is contingent on the compatibility and currentness of the user's screen reader. With the myriad combinations of operating systems, browsers, and screen readers, the scenario becomes increasingly complex. This complexity raises several pertinent questions: If you implement an accessibility standard, such as WCAG Level AA, and the user's browser lacks support for your ARIA labels, where does the responsibility lie? Are developers liable for ensuring cross-browser compatibility, and should they have anticipated these limitations by incorporating various polyfills or alternative solutions? 

The answer, it's tricky. Like anything that's law-related, there is no clear or straightforward answer. As there are numerous legal ramifications around the world you cannot give one answer. As mentioned previously, if you comply with the typical WCAG AA standard, you *should* be fine. You, as a developer/business cannot control what the users use so if a breaking change comes in that only affects a very small minority, or the user is using a new unstable browser, you *should* have a fighting chance if they try and sue you. Again, it's difficult to answer so as long as you're staying up to date with the regulations on accessibility and how to apply them, that's all you can do.

## Taking Legal Action

So far, the legal action taken against companies is minor. A few companies have faced legal action brought by The Royal National Institute for the Blind (RNIB) but that is about it. As an example, in March 2023 [BBC News](https://www.bbc.co.uk/news/uk-northern-ireland-65100390) reported on the £3,000 settlement awarded to a blind man over inaccessible content. Stephen Campbell was unable to access the Health and Social Care Northern Ireland (HSCNI) website to apply for promotion and therefore, decided to take action. As a screen reader user, he was unable to activate the online process using his software. He was also unable to find any information for reasonable adjustments to be made for him to apply. However, given that the Government has adopted the WCAG 2.1 level AA as a suitable standard for public sector sites and it is more broadly recognised as a ‘good’ approach, any site which met these guidelines would have a very strong defence against any legal action. People have also mentioned that their companies have been fined *six digits* for inaccessible websites in certain countries such as America, so the penalties can be subjective per region.

It's important to remember that country-specific accessibility guidelines apply to where the product is shipped. If you are distributing an international product that meets the requirements in country A but not in country B, you could still be held accountable for the unmet requirements of that region. Whilst the above fine is also UK specific, other countries have different legality and penalties involved. It overall seems the gold standard is WCAG AA so if you've got that covered, you should be fine internationally.