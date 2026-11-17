import image1 from '@/assets/png/blog/ImageGrid1.png';
import image2 from '@/assets/png/blog/ImageGrid2.png';
import image3 from '@/assets/png/blog/ImageGrid3.png';
import image4 from '@/assets/png/blog/ImageGrid4.png';

export const articles = [
  {
    slug: 'prepare-for-business-consulting', title: 'How to prepare for a business consulting conversation', image: image1,
    summary: 'A useful first meeting starts with a specific problem, the right people and a shared view of the current situation.',
    sections: [
      { title: 'Start with one decision', text: 'Write down the decision you need to make or the problem you want to understand. Describe what happens today, who it affects and what would be different if the issue were resolved. A concrete example is more useful than a long list of general concerns.' },
      { title: 'Bring the information you already use', text: 'Gather the reports, process notes or project plans your team uses to discuss this issue. Note anything that is incomplete or uncertain. You do not need to create a polished presentation before the conversation.' },
      { title: 'Agree on the next step', text: 'Before the meeting ends, confirm the scope, who will provide any missing information and when the next decision will happen. Ask for a written summary so everyone works from the same understanding.' },
    ],
  },
  {
    slug: 'plan-useful-email-updates', title: 'Plan email updates your customers can use', image: image2,
    summary: 'Give every update a clear purpose and make the next action easy to understand.',
    sections: [
      { title: 'Choose a single purpose', text: 'Decide what the reader should learn or do after opening the message. A service update, an explanation and an invitation can each be useful, but combining too many goals makes the message harder to follow.' },
      { title: 'Write around the reader', text: 'Use a specific subject line, explain the relevant change first and include the details needed to act. Replace internal terminology with the names customers recognize. Preview the message on a narrow screen before sending it.' },
      { title: 'Respect the subscription', text: 'Send newsletters only to people who have agreed to receive them. Explain what they are signing up for and provide a working unsubscribe option in every campaign. Review replies and common questions to improve future updates.' },
    ],
  },
  {
    slug: 'make-website-links-useful', title: 'Make the links on your business website useful', image: image3,
    summary: 'A link should tell people where it goes and deliver what its label promises.',
    sections: [
      { title: 'Name the destination', text: 'Use link text that makes sense in context. On a list of articles, include the article title in the accessible name. On a service page, distinguish a description of the service from a request to speak to the team.' },
      { title: 'Keep the journey connected', text: 'Each detail page should offer a clear way back to the list and a relevant next step. Preserve important context, such as the service or plan a visitor selected, when sending them to a contact form.' },
      { title: 'Check the actual destinations', text: 'Review the site regularly for links that point to the home page by mistake, missing documents and buttons that do nothing. Test the important journeys with a keyboard as well as a pointer.' },
    ],
  },
  {
    slug: 'organize-content-around-customer-questions', title: 'Organize your website around customer questions', image: image4,
    summary: 'Use the questions people ask your team to make your service pages easier to navigate.',
    sections: [
      { title: 'Collect real questions', text: 'List the questions that appear in introductory calls, support conversations and email replies. Group similar questions and note the words customers use. These groups can help you decide what each page should explain.' },
      { title: 'Give each page a clear job', text: 'A service page should explain the problem it addresses, how the work is approached and what happens next. A pricing page should help people compare options. A contact page should make it clear what information is needed and how a response will arrive.' },
      { title: 'Review after publication', text: 'Ask someone unfamiliar with the business to find a service and send an enquiry. Note where they hesitate or expect a missing action. Use those observations to improve the content and navigation before adding more pages.' },
    ],
  },
];
