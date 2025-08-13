export default function PassDataParser() {
  // Parse features if they come as JSON string
  const parseFeatures = (features: any) => {
    if (typeof features === 'string') {
      try {
        const parsed = JSON.parse(features);
        // Handle case where features is a single object
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          return [parsed];
        }
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return [];
      }
    }
    
    // Handle case where features is already a single object
    if (features && typeof features === 'object' && !Array.isArray(features)) {
      return [features];
    }
    
    return Array.isArray(features) ? features : [];
  };

  // Parse offers if they come as JSON string
  const parseOffers = (offers: any) => {
    console.log('🔍 Parsing offers:', offers, 'Type:', typeof offers);
    
    if (!offers) return [];
    
    if (typeof offers === 'string') {
      try {
        const parsed = JSON.parse(offers);
        console.log('🔍 Parsed offers from string:', parsed);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch (e) {
        console.warn('Failed to parse offers JSON:', e);
        return [];
      }
    }
    
    if (Array.isArray(offers)) {
      console.log('🔍 Offers is already array:', offers);
      return offers;
    }
    
    if (typeof offers === 'object') {
      console.log('🔍 Offers is object, converting to array:', offers);
      return [offers];
    }
    
    console.log('🔍 Offers fallback to empty array');
    return [];
  };

  // Format offers for display with proper icon mapping
  const formatOffers = (offers: any) => {
    const parsed = parseOffers(offers);
    console.log('🔍 Formatting offers, parsed:', parsed);
    
    if (Array.isArray(parsed)) {
      // Filter offers that have either title or discount properties
      const filtered = parsed.filter(offer => 
        offer && 
        typeof offer === 'object' && 
        (offer.title || offer.discount || offer.name || offer.text)
      );
      console.log('🔍 Filtered offers:', filtered);
      return filtered;
    }
    
    console.log('🔍 No offers to format');
    return [];
  };

  return { parseFeatures, parseOffers, formatOffers };
}
