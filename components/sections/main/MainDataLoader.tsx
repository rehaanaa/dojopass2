// Utility functions for static data - not a React component
export const platforms = [
  {
    id: 1,
    title: 'Game Pass',
    description: 'Access to premium console gaming platforms including PlayStation, Steam, Xbox, and more. Get exclusive games, DLCs, and gaming content.',
    image_url: '/landing/gaming-logo.png',
    features: [
      { name: 'PlayStation Plus' },
      { name: 'Steam Premium' },
      { name: 'Xbox Game Pass' },
      { name: 'Cloud Gaming Support' },
      { name: 'Cross-Platform Sync' },
      { name: 'Priority Customer Support' }
    ],
    offers: ['Free 7-day trial', '50% off first month', 'Family plan available']
  },
  {
    id: 2,
    title: 'AI Pass',
    description: 'Unlock the power of artificial intelligence with access to ChatGPT Pro, Claude 3, and other cutting-edge AI tools.',
    image_url: '/landing/ai-pass.png',
    features: [
      { name: 'ChatGPT Pro Access' },
      { name: 'Claude 3 Integration' },
      { name: 'Advanced AI Models' },
      { name: 'Custom AI Training' },
      { name: 'API Access' },
      { name: 'Priority Processing' }
    ],
    offers: ['Free credits included', 'Unlimited requests', 'Premium support']
  },
  {
    id: 3,
    title: 'Design & Creative',
    description: 'Professional design tools including Canva Premium, Figma Pro, Adobe Creative Suite, and more.',
    image_url: '/landing/design-pass.png',
    features: [
      { name: 'Canva Premium' },
      { name: 'Figma Pro Features' },
      { name: 'Adobe Creative Suite' },
      { name: 'Premium Templates' },
      { name: 'Cloud Storage' },
      { name: 'Team Collaboration' }
    ],
    offers: ['Free templates', 'Unlimited exports', 'Premium fonts']
  },
  {
    id: 4,
    title: 'Streaming & Entertainment',
    description: 'Premium streaming services including Disney+, Netflix, Spotify, and more with ad-free experience.',
    image_url: '/landing/streaming-pass.png',
    features: [
      { name: 'Disney+ Premium' },
      { name: 'Netflix Premium' },
      { name: 'Spotify Premium' },
      { name: 'Ad-Free Experience' },
      { name: 'Offline Downloads' },
      { name: 'Multiple Screens' }
    ],
    offers: ['Free month trial', 'Family plan discount', 'Student discount']
  },
  {
    id: 5,
    title: 'Gift Pass',
    description: 'Premium gaming access including Valorant, PlayStation, Steam, Xbox, and other gaming platforms.',
    image_url: '/landing/gift-pass.png',
    features: [
      { name: 'Valorant Premium' },
      { name: 'PlayStation Plus' },
      { name: 'Steam Premium' },
      { name: 'Xbox Game Pass' },
      { name: 'Exclusive Content' },
      { name: 'Priority Support' }
    ],
    offers: ['Free 7-day trial', '50% off first month', 'Family plan available']
  },
  {
    id: 6,
    title: 'Free Pass',
    description: 'Completely free access to basic features and limited content across all platforms.',
    image_url: '/landing/Canva-Free.png',
    features: [
      { name: 'Basic Features Access' },
      { name: 'Limited Content' },
      { name: 'Community Support' },
      { name: 'Standard Quality' },
      { name: 'Ad-Supported' },
      { name: 'Basic Templates' }
    ],
    offers: ['100% Free', 'No credit card required', 'Basic support']
  }
];

export const loadStaticPasses = () => {
  const staticPasses = [
    {
      id: 1,
      platform_id: 1,
      title: 'Game Pass Premium',
      description: 'Premium console gaming access with exclusive content, DLCs, and cloud gaming features.',
      price: 999,
      duration: '3 Months',
      image_url: '/landing/Game-Pass-Xbox.jpg',
      features: [
        { name: 'PlayStation Plus' },
        { name: 'Steam Premium' },
        { name: 'Xbox Game Pass' },
        { name: 'Cloud Gaming' },
        { name: 'Exclusive DLCs' },
        { name: 'Priority Support' }
      ],
      offers: ['Free 7-day trial', '50% off first month', 'Family plan available']
    },
    {
      id: 2,
      platform_id: 2,
      title: 'AI Pro Pass',
      description: 'Advanced AI tools with unlimited access to ChatGPT Pro, Claude 3, and custom training.',
      price: 1499,
      duration: '1 Month',
      image_url: '/landing/ChatGPT-5-Plus.png',
      features: [
        { name: 'ChatGPT Pro Access' },
        { name: 'Claude 3 Integration' },
        { name: 'Custom AI Training' },
        { name: 'API Access' },
        { name: 'Priority Processing' },
        { name: 'Advanced Models' }
      ],
      offers: ['Free credits included', 'Unlimited requests', 'Premium support']
    },
    {
      id: 3,
      platform_id: 3,
      title: 'Canva Pass',
      description: 'Professional design tools with Canva Premium, Figma Pro, and Adobe Creative Suite for designers.',
      price: 799,
      duration: '2 Months',
      image_url: '/pass/canva.png',
      features: [
        { name: 'Canva Premium' },
        { name: 'Figma Pro Features' },
        { name: 'Adobe Creative Suite' },
        { name: 'Premium Templates' },
        { name: 'Cloud Storage' },
        { name: 'Team Collaboration' }
      ],
      offers: ['Free templates', 'Unlimited exports', 'Premium fonts']
    },
    {
      id: 4,
      platform_id: 4,
      title: 'Disney Pass 3 Months',
      description: 'Premium Disney+ streaming with exclusive content, 4K Ultra HD, and family entertainment.',
      price: 1299,
      duration: '3 Months',
      image_url: '/pass/disney.png',
      features: [
        { name: 'Disney+ Premium' },
        { name: '4K Ultra HD' },
        { name: 'Exclusive Shows' },
        { name: 'Ad-Free Experience' },
        { name: 'Offline Downloads' },
        { name: 'Multiple Screens' }
      ],
      offers: ['Free month trial', 'Family plan discount', 'Student discount']
    },
    {
      id: 5,
      platform_id: 5,
      title: 'Gift Pass Premium',
      description: 'Premium gaming access with exclusive skins, battle passes, and premium content.',
      price: 599,
      duration: '6 Months',
      image_url: '/landing/gift-pass.png',
      features: [
        { name: 'Exclusive Content' },
        { name: 'Premium Access' },
        { name: 'Gift Cards' },
        { name: 'Instant Delivery' },
        { name: 'Multiple Options' },
        { name: 'Secure Transactions' }
      ],
      offers: ['Gift cards available', 'Bulk discounts', 'Instant delivery']
    },
    {
      id: 6,
      platform_id: 6,
      title: 'Plexity Pro Pass',
      description: 'Advanced AI-powered platform with premium features, unlimited access, and priority support.',
      price: 1999,
      duration: '1 Month',
      image_url: '/landing/perpexity.jpg',
      features: [
        { name: 'Advanced AI Models' },
        { name: 'Unlimited Queries' },
        { name: 'Premium Content Access' },
        { name: 'Custom AI Training' },
        { name: 'API Integration' },
        { name: 'Priority Support' }
      ],
      offers: ['Free trial included', 'Unlimited access', 'Premium support']
    }
  ];
  return staticPasses;
};

export const loadPasses = async () => {
  try {
    const response = await fetch('/api/passes');
    if (response.ok) {
      const result = await response.json();
      console.log('Passes API response:', result);
      
      // Extract data from the API response structure
      const passesData = result.data || result;
      console.log('Passes data:', passesData);
      console.log('Passes type:', typeof passesData);
      console.log('Passes is array:', Array.isArray(passesData));
      
      return Array.isArray(passesData) ? passesData : [];
    } else {
      console.error('Failed to fetch passes');
      return [];
    }
  } catch (error) {
    console.error('Error fetching passes:', error);
    return [];
  }
};
