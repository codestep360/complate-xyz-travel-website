import { TravelPackage } from '../types';

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 'spiti-circuit-7d',
    title: 'Ultimate Spiti Valley Circuit & Chandratal Lake',
    destination: 'Spiti Valley',
    region: 'Himachal Pradesh',
    category: 'Road Trip',
    duration: '6 Nights / 7 Days',
    nights: 6,
    days: 7,
    price: 18999,
    originalPrice: 24999,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Bestseller',
    featuredImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    ],
    pickupLocation: 'Delhi / Chandigarh',
    dropLocation: 'Delhi / Chandigarh',
    overview: 'Embark on the journey of a lifetime through the Cold Desert of India. Experience the world’s highest post office at Hikkim, ancient monasteries at Key & Dhankar, and camp under the starry night sky at the magical Chandratal Lake.',
    highlights: [
      'Stargazing & Camping at Chandratal Lake',
      'Visit Key Monastery & Kaza Local Market',
      'Post a postcard from World’s Highest Post Office in Hikkim',
      'Drive across Kunzum Pass & Atal Tunnel',
      'Visit Chicham Bridge - Asia’s Highest Bridge'
    ],
    inclusions: [
      'Volvo Bus or SUV Transport from Delhi',
      '6 Nights Accommodation in Deluxe Homestays & Camps',
      'Breakfast & Dinner daily (12 Meals total)',
      'Experienced Trip Captain & Local Guide',
      'Inner Line Permits & Entry Fees',
      'First Aid Kit & Oxygen Cylinder support'
    ],
    exclusions: [
      'Lunch and personal snacks',
      'Gondola/Adventure activity tickets',
      'GST 5% extra',
      'Personal travel insurance',
      'Expenses due to unforeseen landslides/roadblocks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Overnight Journey from Delhi to Shimla / Kalpa',
        description: 'Meet the trip group at Majnu Ka Tilla, Delhi at 6 PM. Board the tempo traveler/bus and head towards Kinnaur Valley.',
        meals: ['Overnight Travel'],
        stay: 'In Transit'
      },
      {
        day: 2,
        title: 'Kalpa / Sangla Arrival & Suicide Point Visit',
        description: 'Reach Kalpa by afternoon. Check into your hotel with stunning views of the Kinner Kailash range. Evening visit to Suicide Point.',
        meals: ['Dinner'],
        stay: 'Hotel in Kalpa'
      },
      {
        day: 3,
        title: 'Kalpa to Nako & Tabo Monastery',
        description: 'Drive along the Sutlej river to Nako Village and lake. Visit the 1,000-year-old Tabo Monastery known as the Ajanta of the Himalayas.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Homestay in Tabo'
      },
      {
        day: 4,
        title: 'Tabo to Dhankar, Kaza & Key Monastery',
        description: 'Visit Dhankar Cliff Monastery, then drive to Kaza. Afternoon visit to Key Monastery and Chicham Bridge.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Homestay in Kaza'
      },
      {
        day: 5,
        title: 'Highest Villages Circuit: Hikkim, Komic & Langza',
        description: 'Send postcards from Hikkim, visit the highest motorable village Komic, and look for marine fossils at Langza.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Homestay in Kaza'
      },
      {
        day: 6,
        title: 'Kaza to Chandratal Lake Camping via Kunzum Pass',
        description: 'Cross the majestic Kunzum Pass (14,931 ft) and reach the crescent moon-shaped Chandratal Lake. Overnight camping under the Milky Way.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Swiss Tents at Chandratal'
      },
      {
        day: 7,
        title: 'Chandratal to Manali via Atal Tunnel & Return to Delhi',
        description: 'Early morning drive through Batal & Atal Tunnel into Manali. Catch evening Volvo back to Delhi.',
        meals: ['Breakfast'],
        stay: 'Overnight Volvo to Delhi'
      }
    ],
    batches: [
      { id: 'b1', startDate: '15 Aug 2026', endDate: '21 Aug 2026', price: 18999, availableSeats: 4, status: 'Filling Fast' },
      { id: 'b2', startDate: '29 Aug 2026', endDate: '04 Sep 2026', price: 18999, availableSeats: 8, status: 'Available' },
      { id: 'b3', startDate: '12 Sep 2026', endDate: '18 Sep 2026', price: 19999, availableSeats: 2, status: 'Filling Fast' },
    ]
  },
  {
    id: 'kasol-kheerganga-3d',
    title: 'Kasol & Kheerganga Trek with Hot Springs',
    destination: 'Kasol & Parvati Valley',
    region: 'Himachal Pradesh',
    category: 'Weekend Getaway',
    duration: '2 Nights / 3 Days',
    nights: 2,
    days: 3,
    price: 6499,
    originalPrice: 8999,
    rating: 4.8,
    reviewsCount: 520,
    badge: 'Popular',
    featuredImage: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    ],
    pickupLocation: 'Delhi / Chandigarh',
    dropLocation: 'Delhi / Chandigarh',
    overview: 'Escape the city chaos into the magical Parvati Valley. Experience the bohemian vibes of Kasol, cafe hopping, Manikaran Sahib Gurudwara, and trek through pine forests to the natural hot water springs of Kheerganga.',
    highlights: [
      'Natural Hot Spring bath at Kheerganga Peak',
      'Trek through lush green Parvati Valley pine forests',
      'Cafe hopping in Kasol & Israeli cuisine sampling',
      'Campfire, acoustic music & stargazing night',
      'Visit Holy Manikaran Sahib Gurudwara'
    ],
    inclusions: [
      'Delhi-Kasol-Delhi AC Bus Transport',
      '1 Night stay in Kasol Riverside Camps / Hotel',
      '1 Night Dome Tent stay at Kheerganga top',
      '2 Breakfasts & 2 Dinners',
      'Trek Leader & Local Guide'
    ],
    exclusions: [
      'Personal porter/mule expenses',
      'Meals during transit',
      'GST 5%'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kasol & Chalal Nature Walk',
        description: 'Arrive in Kasol morning. Check into riverside camp. Afternoon nature trek to Chalal Village along Parvati river.',
        meals: ['Dinner'],
        stay: 'Riverside Camp in Kasol'
      },
      {
        day: 2,
        title: 'Trek from Barshaini to Kheerganga Top',
        description: 'Drive to Barshaini and start the 12 km scenic trek to Kheerganga. Take a dip in Lord Shiva’s natural hot spring.',
        meals: ['Breakfast', 'Dinner'],
        stay: 'Dome Tents in Kheerganga'
      },
      {
        day: 3,
        title: 'Descend to Barshaini, Manikaran & Evening Return Bus',
        description: 'Trek down to Barshaini, visit Manikaran Sahib, explore Kasol market for souvenirs and catch evening bus back to Delhi.',
        meals: ['Breakfast'],
        stay: 'Transit'
      }
    ],
    batches: [
      { id: 'b1', startDate: '14 Aug 2026', endDate: '17 Aug 2026', price: 6499, availableSeats: 6, status: 'Filling Fast' },
      { id: 'b2', startDate: '21 Aug 2026', endDate: '24 Aug 2026', price: 6499, availableSeats: 12, status: 'Available' }
    ]
  },
  {
    id: 'kedarkantha-trek-5d',
    title: 'Kedarkantha Winter Snow Summit Trek',
    destination: 'Sankri & Kedarkantha Peak',
    region: 'Uttarakhand',
    category: 'Himalayan Trek',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    price: 8499,
    originalPrice: 11999,
    rating: 4.9,
    reviewsCount: 410,
    badge: 'Trending',
    featuredImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    pickupLocation: 'Dehradun Railway Station',
    dropLocation: 'Dehradun Railway Station',
    overview: 'One of the finest snow trekking destinations in India! Summit Kedarkantha Peak at 12,500 ft and behold 360-degree views of mighty Himalayan peaks like Swargarohini, Bandarpoonch, and Black Peak.',
    highlights: [
      '360-Degree Panoramic View from Kedarkantha Summit (12,500 ft)',
      'Snow camping at Juda Ka Talab frozen lake',
      'Dense pine & oak forest trails with deep snow',
      'Certified Wilderness First Responder (WFR) Trek Leaders',
      'Microspikes & Gaiters provided for safe snow walking'
    ],
    inclusions: [
      'Dehradun to Sankri return transport in Tempo Traveler',
      'Homestay at Sankri & Alpine Tents during trek',
      'All meals during the trek (Pure Veg, Nutritious)',
      'Mountaineering Certified Trek Leaders & Support Staff',
      'Trek Permits & Forest Fee'
    ],
    exclusions: [
      'Backpack offloading charges',
      'Personal trekking gear (Boots, Jackets)',
      'GST 5%'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Drive from Dehradun to Sankri Basecamp',
        description: '6-7 hours drive through Mussoorie & Purola alongside Yamuna river. Reach Sankri village by evening.',
        meals: ['Dinner'],
        stay: 'Homestay in Sankri'
      },
      {
        day: 2,
        title: 'Trek Sankri to Juda Ka Talab',
        description: '4 km trek through maple and pine trees. Reach the mythical frozen lake campsite Juda Ka Talab.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stay: 'Alpine Camps'
      },
      {
        day: 3,
        title: 'Juda Ka Talab to Kedarkantha Basecamp',
        description: 'Trek 4 km upward to Basecamp. Enjoy spectacular sunset over snow-draped Himalayan ranges.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stay: 'Alpine Camps'
      },
      {
        day: 4,
        title: 'Summit Push (12,500 ft) & Descend to Hargaon / Sankri',
        description: 'Early 3 AM summit climb to reach the peak for sunrise. Witness grand Himalayan sunrise, then descend to Sankri.',
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        stay: 'Homestay in Sankri'
      },
      {
        day: 5,
        title: 'Drive back from Sankri to Dehradun',
        description: 'Depart after breakfast, reach Dehradun by 6 PM for onward trains or flights.',
        meals: ['Breakfast'],
        stay: 'Transit'
      }
    ],
    batches: [
      { id: 'b1', startDate: '20 Sep 2026', endDate: '24 Sep 2026', price: 8499, availableSeats: 5, status: 'Filling Fast' },
      { id: 'b2', startDate: '01 Oct 2026', endDate: '05 Oct 2026', price: 8999, availableSeats: 10, status: 'Available' }
    ]
  },
  {
    id: 'ladakh-biker-expedition-8d',
    title: 'Leh Ladakh Road Trip with Khardung La & Pangong',
    destination: 'Ladakh',
    region: 'Jammu & Kashmir',
    category: 'Road Trip',
    duration: '7 Nights / 8 Days',
    nights: 7,
    days: 8,
    price: 27999,
    originalPrice: 35000,
    rating: 4.95,
    reviewsCount: 280,
    badge: 'Bestseller',
    featuredImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    pickupLocation: 'Leh Airport (IXL)',
    dropLocation: 'Leh Airport (IXL)',
    overview: 'Discover the Land of High Passes! Ride through the world’s highest motorable roads, marvel at the azure Pangong Tso lake, double-humped camels in Nubra Valley, and ancient Buddhist heritage in Leh.',
    highlights: [
      'Camping by the iconic blue waters of Pangong Tso Lake',
      'Ride across Khardung La Pass (17,582 ft)',
      'Double Humped Bactrian Camel Ride in Hunder Sand Dunes',
      'Magnetic Hill illusion & Sangam Point rafting',
      'Shanti Stupa sunset & Leh Palace Tour'
    ],
    inclusions: [
      'Royal Enfield 500cc/Himalayan or SUV Option',
      'Fuel for entire trip (for rider package)',
      'Deluxe Hotels & Luxury Lake Camps',
      'Breakfast & Dinner daily',
      'Mechanic, Backup Vehicle, Oxygen Cylinder',
      'Inner Line Permits & Environment fees'
    ],
    exclusions: [
      'Airfare to Leh',
      'Riding gear rental (Jackets, Gloves)',
      'GST 5%'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Leh & Acclimatization', description: 'Rest day to adjust to high altitude. Evening visit Shanti Stupa.', meals: ['Dinner'], stay: 'Hotel in Leh' },
      { day: 2, title: 'Leh Local Sightseeing (Sham Valley)', description: 'Visit Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib & Zanskar Sangam.', meals: ['Breakfast', 'Dinner'], stay: 'Hotel in Leh' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La', description: 'Cross Khardung La Pass into Nubra Valley. Enjoy camel safari at Hunder dunes.', meals: ['Breakfast', 'Dinner'], stay: 'Luxury Camp in Hunder' },
      { day: 4, title: 'Nubra to Turtuk Village (India-Pak Border)', description: 'Explore the northernmost village of India, rich in Balti culture and apricot orchards.', meals: ['Breakfast', 'Dinner'], stay: 'Luxury Camp in Hunder' },
      { day: 5, title: 'Nubra Valley to Pangong Lake via Shyok', description: 'Drive along Shyok river to Pangong Lake. Sunset views over the changing colors of the lake.', meals: ['Breakfast', 'Dinner'], stay: 'Lake Cottage in Pangong' },
      { day: 6, title: 'Pangong to Hanle / Leh via Chang La', description: 'Early sunrise photo session at Pangong Lake. Return drive across Chang La pass.', meals: ['Breakfast', 'Dinner'], stay: 'Hotel in Leh' },
      { day: 7, title: 'Monasteries & Rafting Day', description: 'Visit Thiksey Monastery and enjoy optional White Water Rafting on Zanskar.', meals: ['Breakfast', 'Dinner'], stay: 'Hotel in Leh' },
      { day: 8, title: 'Departure from Leh Airport', description: 'Fly out with lifetime memories of Ladakh.', meals: ['Breakfast'], stay: 'Home' }
    ],
    batches: [
      { id: 'b1', startDate: '01 Sep 2026', endDate: '08 Sep 2026', price: 27999, availableSeats: 3, status: 'Filling Fast' },
      { id: 'b2', startDate: '15 Sep 2026', endDate: '22 Sep 2026', price: 27999, availableSeats: 7, status: 'Available' }
    ]
  },
  {
    id: 'bali-tropical-escape-6d',
    title: 'Bali Tropical Island & Nusa Penida Escape',
    destination: 'Bali',
    region: 'Indonesia',
    category: 'International',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    price: 32999,
    originalPrice: 42000,
    rating: 4.92,
    reviewsCount: 195,
    badge: 'Popular',
    featuredImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
    ],
    pickupLocation: 'Ngurah Rai Intl Airport (DPS), Bali',
    dropLocation: 'Ngurah Rai Intl Airport (DPS), Bali',
    overview: 'Experience island paradise in Bali! From lush rice terraces in Ubud and iconic Bali Swings to cliffside temples in Uluwatu and the turquoise beaches of Nusa Penida.',
    highlights: [
      'Speedboat excursion to Nusa Penida (Kelingking T-Rex Beach & Angel Billabong)',
      'Famous Bali Jungle Swing & Tegallalang Rice Terraces',
      'Sunset at Uluwatu Temple with Kecak Fire Dance',
      'Floating Breakfast in private pool villa option',
      'Water sports at Tanjung Benoa (Banana boat, Jet Ski)'
    ],
    inclusions: [
      'Airport Transfers & Private Air-conditioned Vehicle',
      '3 Nights in Ubud Hotel + 2 Nights Private Pool Villa in Seminyak',
      'Daily Breakfast + 1 Sunset Dinner',
      'Fast boat tickets to Nusa Penida with island tour',
      'English speaking local guide'
    ],
    exclusions: [
      'International Flight tickets',
      'Indonesia Visa on Arrival (~35 USD)',
      'Personal expenses & massages'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Bali & Seminyak Beach Walk', description: 'Pickup from DPS airport, check into villa. Sunset lounge at Potato Head / Finns Beach Club.', meals: ['Welcome Drink'], stay: 'Private Pool Villa' },
      { day: 2, title: 'Ubud Tour: Rice Terraces, Bali Swing & Monkey Forest', description: 'Visit Tegallalang rice fields, jungle swing photos, Sacred Monkey Forest and Ubud Palace.', meals: ['Breakfast'], stay: 'Resort in Ubud' },
      { day: 3, title: 'Full Day Nusa Penida Island Tour', description: 'Fast boat ride to Nusa Penida. Visit Kelingking Beach, Broken Beach, and Crystal Bay.', meals: ['Breakfast', 'Lunch'], stay: 'Resort in Ubud' },
      { day: 4, title: 'Water Sports & Uluwatu Kecak Dance', description: 'Banana boat ride in Benoa, visit Pandawa Beach and watch sunset Kecak dance at Uluwatu.', meals: ['Breakfast'], stay: 'Resort in Kuta/Seminyak' },
      { day: 5, title: 'Tanah Lot Sunset Temple & Spa Day', description: 'Relaxing Balinese massage session followed by Tanah Lot sea temple sunset view.', meals: ['Breakfast'], stay: 'Resort in Kuta/Seminyak' },
      { day: 6, title: 'Souvenir Shopping & Airport Departure', description: 'Shop at Krishna Souvenir Market and transfer to airport.', meals: ['Breakfast'], stay: 'Home' }
    ],
    batches: [
      { id: 'b1', startDate: '10 Sep 2026', endDate: '15 Sep 2026', price: 32999, availableSeats: 8, status: 'Available' },
      { id: 'b2', startDate: '24 Sep 2026', endDate: '29 Sep 2026', price: 32999, availableSeats: 4, status: 'Filling Fast' }
    ]
  },
  {
    id: 'meghalaya-paradise-6d',
    title: 'Meghalaya Abode of Clouds & Living Root Bridges',
    destination: 'Shillong & Cherrapunji',
    region: 'Meghalaya',
    category: 'Road Trip',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    price: 19499,
    originalPrice: 24999,
    rating: 4.88,
    reviewsCount: 164,
    badge: 'Trending',
    featuredImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'
    ],
    pickupLocation: 'Guwahati Airport / Railway Station',
    dropLocation: 'Guwahati Airport / Railway Station',
    overview: 'Explore the enchanting Northeast! Swim in crystal clear waters of Umngot River in Dawki, trek to the Double Decker Living Root Bridge, and marvel at Nohkalikai Falls.',
    highlights: [
      'Boating on crystal clear Umngot River in Dawki (Glass water effect)',
      'Trek to Double Decker Living Root Bridge in Nongriat',
      'Cliff jumping & swimming in Krang Suri Waterfalls',
      'Explore Mawlynnong - Cleanest Village in Asia',
      'Visit Nohkalikai & Seven Sisters Waterfalls in Sohra'
    ],
    inclusions: [
      'Guwahati to Guwahati Transport in Innova/Tempo Traveler',
      '5 Nights Stay in Boutique Homestays & River Camps',
      'Daily Breakfast & Dinner',
      'Boating charges in Dawki',
      'Permits, Guide & Entry Tickets'
    ],
    exclusions: [
      'Flight/Train to Guwahati',
      'Lunch meals',
      'GST 5%'
    ],
    itinerary: [
      { day: 1, title: 'Guwahati to Shillong via Umiam Lake', description: 'Pickup from Guwahati, scenic stop at Umiam Lake (Barapani). Check in Shillong hotel.', meals: ['Dinner'], stay: 'Hotel in Shillong' },
      { day: 2, title: 'Shillong to Cherrapunji (Sohra) Waterfalls', description: 'Visit Elephant Falls, Mawkdok Dympep Valley zip-line, Nohkalikai & Seven Sisters Falls.', meals: ['Breakfast', 'Dinner'], stay: 'Resort in Cherrapunji' },
      { day: 3, title: 'Trek to Double Decker Root Bridge & Rainbow Falls', description: 'Descend 3000 steps to Nongriat village, marvel at living bridges and swim at Rainbow Falls.', meals: ['Breakfast', 'Dinner'], stay: 'Resort in Cherrapunji' },
      { day: 4, title: 'Cherrapunji to Dawki & Mawlynnong Village', description: 'Visit Asia’s cleanest village, then head to Dawki for sunset boating on the glass-like Umngot river.', meals: ['Breakfast', 'Dinner'], stay: 'Riverside Camps in Dawki' },
      { day: 5, title: 'Dawki to Krang Suri Falls & Jowai to Shillong', description: 'Swim in the turquoise pool of Krang Suri waterfall. Evening shopping at Police Bazaar, Shillong.', meals: ['Breakfast', 'Dinner'], stay: 'Hotel in Shillong' },
      { day: 6, title: 'Shillong to Kamakhya Temple & Guwahati Departure', description: 'Visit Kamakhya Devi Temple in Guwahati before dropping at airport.', meals: ['Breakfast'], stay: 'Home' }
    ],
    batches: [
      { id: 'b1', startDate: '18 Sep 2026', endDate: '23 Sep 2026', price: 19499, availableSeats: 6, status: 'Filling Fast' }
    ]
  },
  {
    id: 'vietnam-highlights-7d',
    title: 'Vietnam Hanoi, Ha Long Bay Cruise & Hoi An',
    destination: 'Vietnam',
    region: 'Southeast Asia',
    category: 'International',
    duration: '6 Nights / 7 Days',
    nights: 6,
    days: 7,
    price: 38999,
    originalPrice: 49999,
    rating: 4.94,
    reviewsCount: 210,
    badge: 'Bestseller',
    featuredImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
    ],
    pickupLocation: 'Noi Bai Intl Airport (HAN), Hanoi',
    dropLocation: 'Da Nang Intl Airport (DAD)',
    overview: 'Uncover the beauty of Vietnam! Overnight luxury cruise on Ha Long Bay, stroll through lantern-lit Hoi An ancient town, walk the Golden Hands Bridge in Ba Na Hills, and taste authentic Egg Coffee.',
    highlights: [
      'Overnight 4-Star Cruise in Ha Long Bay with Kayaking',
      'Golden Hands Bridge cable car ride at Ba Na Hills',
      'Lantern making & night boat ride in Hoi An Ancient Town',
      'Hanoi Old Quarter Rickshaw tour & Train Street cafe',
      'Authentic Vietnamese Pho & Coffee tastings'
    ],
    inclusions: [
      '4-Star Hotels & 1 Night Ha Long Bay Luxury Cruise',
      'Internal Flight (Hanoi to Da Nang)',
      'All Meals on Cruise + Daily Hotel Breakfasts',
      'Cable Car tickets to Ba Na Hills',
      'English speaking tour guide & entrance fees'
    ],
    exclusions: [
      'International flights from India',
      'Vietnam E-Visa fee (~25 USD)',
      'GST & TCS as applicable'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Hanoi & Train Street Experience', description: 'Check in hotel, visit Hoan Kiem Lake and relax at famous Hanoi Train Street cafe.', meals: ['Dinner'], stay: '4-Star Hotel in Hanoi' },
      { day: 2, title: 'Hanoi to Ha Long Bay Cruise Boarding', description: 'Drive to Ha Long Bay, board cruise ship. Kayak through limestone caves and enjoy sunset party.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Overnight Cruise Ship' },
      { day: 3, title: 'Ha Long Bay Tai Chi & Flight to Da Nang', description: 'Morning Tai Chi on deck, visit Sung Sot cave. Return to Hanoi airport for flight to Da Nang.', meals: ['Breakfast', 'Brunch'], stay: 'Hotel in Da Nang' },
      { day: 4, title: 'Ba Na Hills & Golden Bridge Day Tour', description: 'Ride world’s longest cable car to Ba Na Hills. Walk across the iconic Golden Hands Bridge.', meals: ['Breakfast', 'Lunch'], stay: 'Hotel in Da Nang' },
      { day: 5, title: 'Coconut Forest Basket Boat & Hoi An Ancient Town', description: 'Fun basket boat ride in Cam Thanh coconut village. Evening lantern walk in Hoi An.', meals: ['Breakfast'], stay: 'Boutique Hotel in Hoi An' },
      { day: 6, title: 'Hoi An Beach & Custom Tailoring Day', description: 'Relax at An Bang Beach or get custom suits/dresses made in Hoi An.', meals: ['Breakfast'], stay: 'Boutique Hotel in Hoi An' },
      { day: 7, title: 'Da Nang Departure', description: 'Transfer to Da Nang airport for return flight.', meals: ['Breakfast'], stay: 'Home' }
    ],
    batches: [
      { id: 'b1', startDate: '05 Sep 2026', endDate: '11 Sep 2026', price: 38999, availableSeats: 5, status: 'Filling Fast' }
    ]
  },
  {
    id: 'kerala-backwaters-munnar-5d',
    title: 'Kerala Gods Own Country Munnar & Alleppey Cruise',
    destination: 'Munnar & Alleppey',
    region: 'Kerala',
    category: 'Honeymoon',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    price: 14999,
    originalPrice: 19999,
    rating: 4.87,
    reviewsCount: 310,
    badge: 'Popular',
    featuredImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80'
    ],
    pickupLocation: 'Cochin Airport / Ernakulam Junction',
    dropLocation: 'Cochin Airport / Ernakulam Junction',
    overview: 'Rejuvenate in tropical greenery! Sip cardamom tea amidst misty tea plantations in Munnar, spot elephants in Thekkady, and cruise on a traditional luxury Houseboat along Alleppey backwaters.',
    highlights: [
      'Overnight Houseboat stay in Alleppey backwaters with traditional Kerala meals',
      'Munnar Tea Gardens & Eravikulam National Park Safari',
      'Elephant ride & Spice Plantation tour in Thekkady',
      'Kathakali Classical Dance & Kalaripayattu Martial Arts Show',
      'Scenic Cheeyappara Waterfall stopover'
    ],
    inclusions: [
      'Private AC Sedan/SUV for entire trip',
      '2 Nights Hill Resort in Munnar + 1 Night Resort in Thekkady',
      '1 Night Deluxe Private Houseboat in Alleppey',
      'Daily Breakfast + All Meals on Houseboat',
      'Spice Plantation guided walk'
    ],
    exclusions: [
      'Airfare/Train to Cochin',
      'National Park entry fees & safari tickets',
      'GST 5%'
    ],
    itinerary: [
      { day: 1, title: 'Cochin Arrival & Scenic Drive to Munnar', description: 'Scenic drive past Cheeyappara & Valara waterfalls. Check in tea resort in Munnar.', meals: ['Dinner'], stay: 'Resort in Munnar' },
      { day: 2, title: 'Munnar Sightseeing: Eravikulam & Tea Museum', description: 'Visit Eravikulam Park to spot Nilgiri Tahr, Mattupetty Dam, Echo Point, and Tata Tea Museum.', meals: ['Breakfast', 'Dinner'], stay: 'Resort in Munnar' },
      { day: 3, title: 'Munnar to Thekkady Spice Valley', description: 'Drive to Thekkady. Visit spice plantations, lake boating in Periyar Tiger Reserve, evening Kathakali show.', meals: ['Breakfast', 'Dinner'], stay: 'Resort in Thekkady' },
      { day: 4, title: 'Thekkady to Alleppey Houseboat Boarding', description: 'Board traditional Kettuvalam houseboat by 12 PM. Cruise past paddy fields and backwater villages.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Luxury Houseboat' },
      { day: 5, title: 'Alleppey to Cochin Drop', description: 'Disembark houseboat after breakfast, visit Fort Kochi Chinese Fishing Nets before airport drop.', meals: ['Breakfast'], stay: 'Home' }
    ],
    batches: [
      { id: 'b1', startDate: '22 Aug 2026', endDate: '26 Aug 2026', price: 14999, availableSeats: 9, status: 'Available' }
    ]
  }
];

export const COLOR_THEMES = [
  {
    id: 'xyztravel-orange',
    name: 'xyztravel Flame (Orange & Charcoal)',
    primaryClass: 'bg-amber-600 hover:bg-amber-700 text-white',
    primaryHex: '#d97706',
    textClass: 'text-amber-600',
    borderClass: 'border-amber-600',
    gradientFrom: 'from-amber-600',
    gradientTo: 'to-orange-600'
  },
  {
    id: 'teal-ocean',
    name: 'Emerald Adventure (Teal & Forest)',
    primaryClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    primaryHex: '#059669',
    textClass: 'text-emerald-600',
    borderClass: 'border-emerald-600',
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-teal-700'
  },
  {
    id: 'royal-indigo',
    name: 'Royal Sapphire (Indigo & Blue)',
    primaryClass: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    primaryHex: '#4f46e5',
    textClass: 'text-indigo-600',
    borderClass: 'border-indigo-600',
    gradientFrom: 'from-indigo-600',
    gradientTo: 'to-blue-700'
  },
  {
    id: 'sunset-rose',
    name: 'Sunset Rose (Coral & Pink)',
    primaryClass: 'bg-rose-600 hover:bg-rose-700 text-white',
    primaryHex: '#e11d48',
    textClass: 'text-rose-600',
    borderClass: 'border-rose-600',
    gradientFrom: 'from-rose-600',
    gradientTo: 'to-pink-600'
  }
];
