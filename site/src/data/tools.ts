// "Tools I built" section. Keep `result` to real outcomes only: leave it out
// rather than ship a placeholder.

export interface Tool {
  kind: string;
  name: string;
  problem: string;
  built: string;
  bullets?: string[];
  result?: string;
}

export const TOOLS: Tool[] = [
  {
    kind: 'Automation · Web app',
    name: 'CAD sign-off drawing generator',
    problem: 'The CAD team drew every customer sign-off drawing by hand.',
    built: 'A web app that turns door specs into a finished sign-off drawing automatically.',
    result:
      "Handles the team's 20+ drawings a week, cutting each from 1 to 2 hours of hand drafting. That's 20 to 40 hours of drafting time back every week.",
  },
  {
    kind: 'Process automation · Web app',
    name: 'Credit and debit logging app',
    problem: 'Credit memos were tracked in a shared Excel file with no clear approval steps.',
    built: 'A multi-stage web app that logs each credit or debit and routes it through review.',
  },
  {
    kind: 'Reporting automation · Claude Code',
    name: 'Automated marketing reporting suite',
    problem:
      'Search performance, site health, and competitor moves were checked by hand, when someone had time.',
    built: 'Three reports that run on their own with no paid tools:',
    bullets: [
      'Weekly performance report: pulls Google Search Console and GA4 data into a branded PDF every Monday at 9 AM.',
      'Monthly SEO audit: a site health PDF on the 1st of every month.',
      'Competitor monitor: watches four national competitors’ sites for new pages and products.',
    ],
    result: 'Weekly and monthly reporting with zero manual pulls and $0 in software cost.',
  },
];
