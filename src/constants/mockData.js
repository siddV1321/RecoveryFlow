export const MOCK_INCIDENTS = [
  {
    id: '1',
    customerName: 'Siddharth Verma',
    product: 'MicroBiz OS - Pro Plan',
    amount: 29.00,
    status: 'retrying',
    reason: 'Insufficient Funds / Card Declined',
    attempt: '1/3',
    email: 'sid@microbiz.os',
    date: 'Just Now'
  },
  {
    id: '2',
    customerName: 'Sarah Chen',
    product: 'DevKit API Enterprise',
    amount: 149.00,
    status: 'failed',
    reason: 'Expired Card Credentials',
    attempt: '3/3',
    email: 'schen@devkit.io',
    date: '2 hours ago'
  },
  {
    id: '3',
    customerName: 'Alex Martinez',
    product: 'DesignFlow Creator Monthly',
    amount: 19.00,
    status: 'recovered',
    reason: 'Recovered via Auto-Dunning Smart SMS',
    attempt: '2/3',
    email: 'alex@designflow.co',
    date: 'Yesterday'
  },
  {
    id: '4',
    customerName: 'Amelie Laurent',
    product: 'SaasMetrics Dashboard',
    amount: 99.00,
    status: 'recovered',
    reason: 'Recovered via WhatsApp Magic Link Update',
    attempt: '1/3',
    email: 'contact@amelielabs.com',
    date: '3 days ago'
  },
  {
    id: '5',
    customerName: 'Julian Koenig',
    product: 'MicroBiz OS - Team Pack',
    amount: 71.00,
    status: 'failed',
    reason: 'Stolen/Restricted Card Action Code',
    attempt: '2/3',
    email: 'j.koenig@techcorp.de',
    date: '5 days ago'
  }
];

export const MOCK_CHART_DATA = [
  { day: 'Mon', amount: 120 },
  { day: 'Tue', amount: 240 },
  { day: 'Wed', amount: 190 },
  { day: 'Thu', amount: 410 },
  { day: 'Fri', amount: 310 },
  { day: 'Sat', amount: 580 },
  { day: 'Sun', amount: 1420 }
];