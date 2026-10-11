import { MenuSection } from '../types';

export const RESTAURANT_INFO = {
  name: "POPULAR DINEOUT",
  subtitle: "CAFE & RESTAURANT",
  tagline: "Authentic Multi-Cuisine Dining & Cafe Experience",
  address: "A1 PC Colony Near Panch Shiv Mandir, Kankarbagh, Patna - 20",
  googleMapsUrl: "https://maps.google.com/?q=Panch+Shiv+Mandir+PC+Colony+Kankarbagh+Patna",
  phones: ["+91 9060 9332 97", "+91 8935 9493 70"],
  hours: "11:00 AM – 11:00 PM (Everyday)",
  fssaiNumber: "20422000000000",
  pricingNote: "All taxes applicable. Packaged items sold at MRP."
};

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "soups",
    title: "Soups",
    subtitle: "Warm, aromatic and freshly brewed broths",
    iconName: "Soup",
    items: [
      { id: "sp_1", name: "Tomato Soup", description: "Rich ripe tomato puree with fresh cream and butter croutons", price: { single: 120 }, diet: "veg", sectionId: "soups" },
      { id: "sp_2", name: "Veg Manchow Soup", description: "Indo-Chinese spicy thick broth topped with crispy fried noodles", price: { single: 130 }, diet: "veg", sectionId: "soups", isBestseller: true, spicyLevel: 2 },
      { id: "sp_3", name: "Veg Sweet Corn Soup", description: "Velvety broth of crushed golden sweet corn and tender garden veggies", price: { single: 130 }, diet: "veg", sectionId: "soups" },
      { id: "sp_4", name: "Veg Hot & Sour Soup", description: "Tangy and fiery broth infused with mushrooms, tofu and vinegar", price: { single: 130 }, diet: "veg", sectionId: "soups", spicyLevel: 3 },
      { id: "sp_5", name: "Cream of Mushroom Soup", description: "Silky mushroom velouté finished with herbs and cracked black pepper", price: { single: 150 }, diet: "veg", sectionId: "soups", isChefSpecial: true },
      { id: "sp_6", name: "Chicken Manchow Soup", description: "Hearty chicken soup with dark soya, garlic, ginger and crisp noodles", price: { single: 160 }, diet: "non-veg", sectionId: "soups", isBestseller: true, spicyLevel: 2 },
      { id: "sp_7", name: "Chicken Sweet Corn Soup", description: "Shredded chicken and sweet corn kernels in a warm, soothing broth", price: { single: 160 }, diet: "non-veg", sectionId: "soups" },
      { id: "sp_8", name: "Chicken Hot & Sour Soup", description: "Bold chicken soup balanced with hot chilli paste and Chinese vinegar", price: { single: 160 }, diet: "non-veg", sectionId: "soups", spicyLevel: 3 },
      { id: "sp_9", name: "Chicken Clear Soup", description: "Light and nourishing chicken broth with finely diced seasonal greens", price: { single: 150 }, diet: "non-veg", sectionId: "soups" },
      { id: "sp_10", name: "Chicken Lemon Coriander Soup", description: "Zesty lemon infused chicken broth finished with freshly chopped coriander", price: { single: 160 }, diet: "non-veg", sectionId: "soups", isChefSpecial: true }
    ]
  },
  {
    id: "starters_veg",
    title: "Veg Starters & Appetizers",
    subtitle: "Crispy bites, tikkas and finger-licking starters",
    iconName: "Salad",
    items: [
      { id: "sv_1", name: "Paneer Tikka", description: "Fresh cottage cheese cubes marinated in tandoori spices and charred over coals", price: { single: 240 }, diet: "veg", sectionId: "starters_veg", isBestseller: true, spicyLevel: 2 },
      { id: "sv_2", name: "Paneer Malai Tikka", description: "Creamy cardamom and cashew-marinated soft paneer grilled to golden perfection", price: { single: 260 }, diet: "veg", sectionId: "starters_veg", isChefSpecial: true },
      { id: "sv_3", name: "Paneer Achari Tikka", description: "Pickle-spiced tangy paneer skewers charred in clay oven with bell peppers", price: { single: 250 }, diet: "veg", sectionId: "starters_veg", spicyLevel: 2 },
      { id: "sv_4", name: "Mushroom Tikka", description: "Juicy button mushrooms marinated in aromatic yogurt tikka blend", price: { single: 240 }, diet: "veg", sectionId: "starters_veg" },
      { id: "sv_5", name: "Hara Bhara Kebab", description: "Pan-crisped patties of spinach, green peas, mint and roasted gram flour (6 Pcs)", price: { single: 210 }, diet: "veg", sectionId: "starters_veg" },
      { id: "sv_6", name: "Dahi Ke Kebab", description: "Melt-in-mouth spiced hung curd kebabs with a crispy outer coating", price: { single: 230 }, diet: "veg", sectionId: "starters_veg", isChefSpecial: true },
      { id: "sv_7", name: "Veg Seekh Kebab", description: "Minced assorted garden vegetables seasoned with herbs and roasted on skewers", price: { single: 220 }, diet: "veg", sectionId: "starters_veg" },
      { id: "sv_8", name: "Crispy Corn", description: "Crispy batter-fried sweet corn tossed with onions, green chillies and chaat masala", price: { single: 190 }, diet: "veg", sectionId: "starters_veg", isBestseller: true },
      { id: "sv_9", name: "French Fries", description: "Golden salted potato fries served with tomato ketchup and mint mayo", price: { single: 130 }, diet: "veg", sectionId: "starters_veg" },
      { id: "sv_10", name: "Peri Peri Fries", description: "Hot crispy fries generously dusted with spicy African peri peri seasoning", price: { single: 150 }, diet: "veg", sectionId: "starters_veg", spicyLevel: 2 },
      { id: "sv_11", name: "Veg Spring Roll", description: "Crisp golden wraps filled with julienned vegetables and sweet chilli sauce", price: { single: 170 }, diet: "veg", sectionId: "starters_veg" },
      { id: "sv_12", name: "Cheese Balls", description: "Crumb-coated golden spheres of molten mozzarella cheese and jalapeños", price: { single: 210 }, diet: "veg", sectionId: "starters_veg" },
      { id: "sv_13", name: "Honey Chilli Potato", description: "Wok-tossed crispy potato fingers coated in sesame seeds and honey chilli glaze", price: { single: 190 }, diet: "veg", sectionId: "starters_veg", isBestseller: true },
      { id: "sv_14", name: "Peanut Masala", description: "Roasted crunchy peanuts tossed with onions, tomatoes, lemon juice and green chillies", price: { single: 130 }, diet: "veg", sectionId: "starters_veg" },
      { id: "sv_15", name: "Crispy Baby Corn", description: "Tender baby corn tempura fried crisp and tossed in oriental spices", price: { single: 220 }, diet: "veg", sectionId: "starters_veg" }
    ]
  },
  {
    id: "starters_nonveg",
    title: "Non-Veg Starters & Kebabs",
    subtitle: "Succulent chicken, mutton and fish delicacies",
    iconName: "Flame",
    items: [
      { id: "snv_1", name: "Chicken Tikka", description: "Boneless chicken chunks marinated in mustard oil, yogurt and Kashmiri spices (6 Pcs)", price: { single: 290 }, diet: "non-veg", sectionId: "starters_nonveg", isBestseller: true, spicyLevel: 2 },
      { id: "snv_2", name: "Chicken Malai Tikka", description: "Supremely tender chicken morsels steeped in fresh cream, cheese and mild herbs", price: { single: 320 }, diet: "non-veg", sectionId: "starters_nonveg", isChefSpecial: true },
      { id: "snv_3", name: "Chicken Reshmi Kebab", description: "Silky, mouth-melting chicken kebabs coated with beaten eggs and aromatic spices", price: { single: 310 }, diet: "non-veg", sectionId: "starters_nonveg" },
      { id: "snv_4", name: "Chicken Seekh Kebab", description: "Juicy skewered chicken mince infused with fresh coriander, mint and garam masala", price: { single: 290 }, diet: "non-veg", sectionId: "starters_nonveg" },
      { id: "snv_5", name: "Chicken Banjara Tikka", description: "Rustic spiced chicken kebabs with crushed coriander, red chillies and lemon zest", price: { single: 300 }, diet: "non-veg", sectionId: "starters_nonveg", spicyLevel: 3 },
      { id: "snv_6", name: "Chicken Lollipop", description: "Frenzied chicken drumettes batter-fried crisp and served with spicy Schezwan dip (6 Pcs)", price: { single: 280 }, diet: "non-veg", sectionId: "starters_nonveg", isBestseller: true },
      { id: "snv_7", name: "Chicken Lollipop Gravy", description: "Golden fried chicken lollipops simmered in a luscious hot garlic sauce", price: { single: 310 }, diet: "non-veg", sectionId: "starters_nonveg", spicyLevel: 2 },
      { id: "snv_8", name: "Chicken Wings", description: "Crispy glazed wings tossed in smoked barbecue or fiery Schezwan glaze", price: { single: 270 }, diet: "non-veg", sectionId: "starters_nonveg" },
      { id: "snv_9", name: "Crispy Fried Chicken", description: "Golden crumb-coated crunchy chicken strips with garlic dip", price: { single: 290 }, diet: "non-veg", sectionId: "starters_nonveg" },
      { id: "snv_10", name: "Chicken Salt & Pepper", description: "Wok-tossed shredded chicken with crushed black pepper, capsicum and scallions", price: { single: 280 }, diet: "non-veg", sectionId: "starters_nonveg", spicyLevel: 2 },
      { id: "snv_11", name: "Mutton Seekh Kebab", description: "Royal skewered minced goat meat enriched with shahi spices and ghee (4 Pcs)", price: { single: 360 }, diet: "non-veg", sectionId: "starters_nonveg", isChefSpecial: true },
      { id: "snv_12", name: "Fish Tikka", description: "Boneless river fish fillets steeped in carom seeds (ajwain), lemon juice and mustard paste", price: { single: 350 }, diet: "non-veg", sectionId: "starters_nonveg" },
      { id: "snv_13", name: "Fish Fry", description: "Crisp pan-fried fresh fish steaks seasoned with local Patna spices and lemon", price: { single: 330 }, diet: "non-veg", sectionId: "starters_nonveg" },
      { id: "snv_14", name: "Fish Amritsari", description: "Besan and ajwain batter-fried tender fish served hot with mint chutney", price: { single: 350 }, diet: "non-veg", sectionId: "starters_nonveg", isBestseller: true },
      { id: "snv_15", name: "Egg Bhurji / Omelette", description: "Country eggs scrambled or folded with onions, green chillies and fresh coriander", price: { single: 120 }, diet: "non-veg", sectionId: "starters_nonveg" }
    ]
  },
  {
    id: "tandoori_khazana",
    title: "Tandoori Khazana (H/F)",
    subtitle: "Clay-oven smoked roasts with traditional Half & Full portion options",
    iconName: "UtensilsCrossed",
    items: [
      { id: "tk_1", name: "Tandoori Chicken", description: "Classic whole chicken on bone steeped in traditional Punjabi spices and roasted in coal tandoor", price: { half: 260, full: 480 }, diet: "non-veg", sectionId: "tandoori_khazana", isBestseller: true, spicyLevel: 2 },
      { id: "tk_2", name: "Chicken Afghani", description: "Mild, rich roast chicken marinated in curd, fresh cream, white pepper and dry fenugreek", price: { half: 280, full: 520 }, diet: "non-veg", sectionId: "tandoori_khazana", isChefSpecial: true },
      { id: "tk_3", name: "Chicken Tangdi Kebab", description: "Chicken drumsticks stuffed with spiced chicken mince and cheese, flame-roasted (2 / 4 Pcs)", price: { half: 230, full: 430 }, diet: "non-veg", sectionId: "tandoori_khazana", isBestseller: true },
      { id: "tk_4", name: "Chicken Kali Mirch Tandoori", description: "Chicken roasted with a cracked Malabar black peppercorn crust and lemon butter glaze", price: { half: 270, full: 500 }, diet: "non-veg", sectionId: "tandoori_khazana", spicyLevel: 2 },
      { id: "tk_5", name: "Chicken Hariyali Tandoori", description: "Vibrant green marinade of fresh mint, coriander, spinach and roasted jeera", price: { half: 260, full: 490 }, diet: "non-veg", sectionId: "tandoori_khazana" },
      { id: "tk_6", name: "Chicken Barra Tandoori", description: "Mughlai style charred bone-in chicken finished with aromatic spiced butter glaze", price: { half: 290, full: 530 }, diet: "non-veg", sectionId: "tandoori_khazana", isChefSpecial: true },
      { id: "tk_7", name: "Fish Tandoori (Whole)", description: "Whole freshwater fish marinated with carom seeds and yellow chilli, cooked in tandoor", price: { half: 280, full: 520 }, diet: "non-veg", sectionId: "tandoori_khazana" },
      { id: "tk_8", name: "Paneer Tikka Tandoori Platter", description: "Generous assortment of paneer tikka, hara bhara kebab and mushroom skewers", price: { half: 220, full: 410 }, diet: "veg", sectionId: "tandoori_khazana" },
      { id: "tk_9", name: "Mushroom Tandoori Delight", description: "Stuffed whole button mushrooms with cottage cheese and herbs, roasted to perfection", price: { half: 210, full: 390 }, diet: "veg", sectionId: "tandoori_khazana" },
      { id: "tk_10", name: "Popular Special Non-Veg Tandoori Platter", description: "Chef's ultimate mix of Tandoori Chicken, Chicken Tikka, Seekh Kebab and Fish Tikka", price: { half: 380, full: 690 }, diet: "non-veg", sectionId: "tandoori_khazana", isChefSpecial: true }
    ]
  },
  {
    id: "chinese_mains",
    title: "Chinese Appetizers & Mains",
    subtitle: "Wok-tossed noodles, fried rice and Indo-Chinese gravies",
    iconName: "Sparkles",
    items: [
      { id: "ch_1", name: "Veg Hakka Noodles", description: "Classic thin noodles tossed with crunchy shredded cabbage, carrots and bell peppers", price: { single: 170 }, diet: "veg", sectionId: "chinese_mains", isBestseller: true },
      { id: "ch_2", name: "Veg Schezwan Noodles", description: "Spicy wok noodles tossed in homemade fiery Schezwan chilli oil and scallions", price: { single: 180 }, diet: "veg", sectionId: "chinese_mains", spicyLevel: 3 },
      { id: "ch_3", name: "Veg Chilli Garlic Noodles", description: "Noodles with roasted golden garlic, green chillies and fresh cilantro", price: { single: 180 }, diet: "veg", sectionId: "chinese_mains", spicyLevel: 2 },
      { id: "ch_4", name: "Veg Fried Rice", description: "Fluffy basmati rice wok-tossed with garden vegetables, light soya and white pepper", price: { single: 170 }, diet: "veg", sectionId: "chinese_mains" },
      { id: "ch_5", name: "Veg Schezwan Fried Rice", description: "Spicy wok-tossed rice tossed with red chillies, garlic and crunchy veggies", price: { single: 180 }, diet: "veg", sectionId: "chinese_mains", spicyLevel: 2 },
      { id: "ch_6", name: "Veg Manchurian Dry", description: "Crisp minced vegetable dumplings tossed in garlic, ginger and soya glaze (8 Pcs)", price: { single: 190 }, diet: "veg", sectionId: "chinese_mains", isBestseller: true },
      { id: "ch_7", name: "Veg Manchurian Gravy", description: "Vegetable dumplings immersed in a savoury Indo-Chinese brown garlic gravy", price: { single: 200 }, diet: "veg", sectionId: "chinese_mains" },
      { id: "ch_8", name: "Chilli Paneer Dry", description: "Crispy cottage cheese cubes tossed with diced capsicum, onions and green chillies", price: { single: 230 }, diet: "veg", sectionId: "chinese_mains", isBestseller: true, spicyLevel: 2 },
      { id: "ch_9", name: "Chilli Paneer Gravy", description: "Paneer cubes and crunchy bell peppers simmered in a spicy hot chilli gravy", price: { single: 240 }, diet: "veg", sectionId: "chinese_mains", spicyLevel: 2 },
      { id: "ch_10", name: "Crispy Chilli Baby Corn Wok", description: "Golden baby corn wok-fried with spring onions and dark soy sauce", price: { single: 220 }, diet: "veg", sectionId: "chinese_mains" },
      { id: "ch_11", name: "Chicken Hakka Noodles", description: "Wok-fried noodles loaded with shredded chicken, eggs and seasonal vegetables", price: { single: 210 }, diet: "non-veg", sectionId: "chinese_mains", isBestseller: true },
      { id: "ch_12", name: "Chicken Schezwan Noodles", description: "Fiery noodles tossed with tender chicken chunks, egg ribbons and Schezwan sauce", price: { single: 220 }, diet: "non-veg", sectionId: "chinese_mains", spicyLevel: 3 },
      { id: "ch_13", name: "Chicken Fried Rice", description: "Fragrant rice stir-fried with juicy chicken pieces, egg and spring onions", price: { single: 210 }, diet: "non-veg", sectionId: "chinese_mains" },
      { id: "ch_14", name: "Chilli Chicken Dry", description: "Crispy boneless chicken bites tossed with fresh green chillies and garlic pods", price: { single: 270 }, diet: "non-veg", sectionId: "chinese_mains", isBestseller: true, spicyLevel: 2 },
      { id: "ch_15", name: "Chilli Chicken Gravy", description: "Tender fried chicken cubes in a classic Chinese spicy garlic soya gravy", price: { single: 280 }, diet: "non-veg", sectionId: "chinese_mains", spicyLevel: 2 },
      { id: "ch_16", name: "Chicken Manchurian", description: "Chicken mince balls wok-tossed in a robust ginger-garlic and dark soya reduction", price: { single: 270 }, diet: "non-veg", sectionId: "chinese_mains" }
    ]
  },
  {
    id: "paneer_specialties",
    title: "Main Course - Paneer Specialties",
    subtitle: "Rich, creamy and decadent cottage cheese curries",
    iconName: "Layers",
    items: [
      { id: "pan_1", name: "Paneer Butter Masala", description: "Soft paneer cubes simmered in a velvety tomato and cashew butter gravy", price: { single: 260 }, diet: "veg", sectionId: "paneer_specialties", isBestseller: true },
      { id: "pan_2", name: "Kadhai Paneer", description: "Paneer, bell peppers and onions cooked in a freshly ground coriander-chilli kadhai masala", price: { single: 260 }, diet: "veg", sectionId: "paneer_specialties", spicyLevel: 2 },
      { id: "pan_3", name: "Shahi Paneer", description: "Royal preparation of paneer in a mildly sweet, aromatic white cashew and melon seed gravy", price: { single: 270 }, diet: "veg", sectionId: "paneer_specialties", isChefSpecial: true },
      { id: "pan_4", name: "Paneer Lababdar", description: "Paneer simmered with grated cottage cheese in an onion-tomato butter gravy", price: { single: 270 }, diet: "veg", sectionId: "paneer_specialties" },
      { id: "pan_5", name: "Paneer Do Pyaza", description: "Paneer prepared with caramelized baby onions, whole red chillies and rich spices", price: { single: 250 }, diet: "veg", sectionId: "paneer_specialties" },
      { id: "pan_6", name: "Paneer Tikka Masala", description: "Clay-oven charred paneer tikka cubes cooked in a spiced tandoori gravy", price: { single: 280 }, diet: "veg", sectionId: "paneer_specialties", isBestseller: true, spicyLevel: 2 },
      { id: "pan_7", name: "Palak Paneer", description: "Fresh spinach puree tempered with garlic, cumin, cream and soft paneer chunks", price: { single: 240 }, diet: "veg", sectionId: "paneer_specialties" },
      { id: "pan_8", name: "Matar Paneer", description: "Homestyle curry of tender green peas and cottage cheese in a spiced tomato broth", price: { single: 230 }, diet: "veg", sectionId: "paneer_specialties" },
      { id: "pan_9", name: "Handi Paneer", description: "Earthen pot slow-cooked paneer with whole spices, tomatoes and fresh cream", price: { single: 260 }, diet: "veg", sectionId: "paneer_specialties" },
      { id: "pan_10", name: "Paneer Pasanda", description: "Paneer stuffed with nuts and khoya, pan-seared and simmered in an opulent shahi gravy", price: { single: 290 }, diet: "veg", sectionId: "paneer_specialties", isChefSpecial: true },
      { id: "pan_11", name: "Paneer Kolhapuri", description: "Spicy Maharashtrian style fiery curry with dry coconut, roasted chillies and spices", price: { single: 260 }, diet: "veg", sectionId: "paneer_specialties", spicyLevel: 3 },
      { id: "pan_12", name: "Paneer Bhurji", description: "Scrambled cottage cheese tossed with tomatoes, onions, green chillies and fresh butter", price: { single: 250 }, diet: "veg", sectionId: "paneer_specialties" },
      { id: "pan_13", name: "Paneer Makhani", description: "Silken sweet-and-tangy tomato gravy enriched with butter and kasuri methi", price: { single: 260 }, diet: "veg", sectionId: "paneer_specialties" },
      { id: "pan_14", name: "Paneer Methi Malai", description: "Fresh fenugreek leaves and paneer simmered in a luscious sweet cream sauce", price: { single: 270 }, diet: "veg", sectionId: "paneer_specialties" }
    ]
  },
  {
    id: "veg_delicacies",
    title: "Main Course - Veg Delicacies",
    subtitle: "Traditional seasonal vegetarian curries and koftas",
    iconName: "Carrot",
    items: [
      { id: "vg_1", name: "Mixed Vegetable", description: "Melange of carrots, beans, cauliflower, peas and paneer in a spiced semi-dry gravy", price: { single: 210 }, diet: "veg", sectionId: "veg_delicacies", isBestseller: true },
      { id: "vg_2", name: "Veg Kolhapuri", description: "Seasonal mixed vegetables in a bold, fiery Kolhapuri red chilli gravy", price: { single: 220 }, diet: "veg", sectionId: "veg_delicacies", spicyLevel: 3 },
      { id: "vg_3", name: "Veg Jalfrezi", description: "Stir-fried julienned vegetables and bell peppers in a tangy sweet-sour tomato masala", price: { single: 210 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_4", name: "Veg Handi", description: "Vegetables slow-cooked in a sealed clay pot with whole spices and yogurt gravy", price: { single: 220 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_5", name: "Malai Kofta", description: "Crisp potato and paneer dumplings stuffed with dry fruits in a rich cashew cream sauce", price: { single: 260 }, diet: "veg", sectionId: "veg_delicacies", isChefSpecial: true },
      { id: "vg_6", name: "Kashmiri Dum Aloo", description: "Baby potatoes deep fried and slow simmered in an aromatic fennel and Kashmiri red chilli gravy", price: { single: 220 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_7", name: "Aloo Gobi Masala", description: "Homestyle cauliflower florets and potatoes cooked with cumin, turmeric and ginger", price: { single: 180 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_8", name: "Mushroom Masala", description: "Fresh button mushrooms cooked with onion, tomato and whole garam masala", price: { single: 240 }, diet: "veg", sectionId: "veg_delicacies", isBestseller: true },
      { id: "vg_9", name: "Kadhai Mushroom", description: "Button mushrooms and bell peppers cooked in freshly roasted coriander seeds and dried red chilli", price: { single: 240 }, diet: "veg", sectionId: "veg_delicacies", spicyLevel: 2 },
      { id: "vg_10", name: "Matar Mushroom", description: "Mushrooms and sweet green peas simmered in a mildly spiced North Indian onion gravy", price: { single: 230 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_11", name: "Chana Masala", description: "Kabuli chickpeas steeped in a tangy pomegranate seed and roasted cumin reduction", price: { single: 190 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_12", name: "Navratan Korma", description: "Mughlai style sweet and creamy curry of nine vegetables, fruits and nuts", price: { single: 250 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_13", name: "Bhindi Do Pyaza", description: "Fresh okra sautéed with lots of onions, amchur (dry mango) and ground spices", price: { single: 190 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_14", name: "Corn Palak", description: "Crisp sweet corn kernels folded into a creamy spinach puree", price: { single: 210 }, diet: "veg", sectionId: "veg_delicacies" },
      { id: "vg_15", name: "Baingan Bharta", description: "Clay oven roasted smoked eggplant mashed and cooked with garlic, onions and green chillies", price: { single: 190 }, diet: "veg", sectionId: "veg_delicacies" }
    ]
  },
  {
    id: "chicken_specialties",
    title: "Main Course - Chicken Curries & Gravies",
    subtitle: "Succulent chicken preparations cooked to perfection",
    iconName: "Drumstick",
    items: [
      { id: "chk_1", name: "Butter Chicken", description: "Tandoori chicken simmered in a rich, buttery tomato gravy infused with fenugreek", price: { half: 290, full: 520 }, diet: "non-veg", sectionId: "chicken_specialties", isBestseller: true },
      { id: "chk_2", name: "Kadhai Chicken", description: "Chicken cooked with chunky bell peppers, onions and freshly pounded kadhai masala", price: { half: 270, full: 490 }, diet: "non-veg", sectionId: "chicken_specialties", spicyLevel: 2 },
      { id: "chk_3", name: "Chicken Do Pyaza", description: "Tender chicken cooked with dual layers of onions and fragrant whole spices", price: { half: 260, full: 480 }, diet: "non-veg", sectionId: "chicken_specialties" },
      { id: "chk_4", name: "Chicken Curry (Home Style)", description: "Patna style homestyle comforting chicken gravy made with fresh ginger and mustard oil", price: { half: 240, full: 450 }, diet: "non-veg", sectionId: "chicken_specialties", isBestseller: true },
      { id: "chk_5", name: "Chicken Tikka Masala", description: "Boneless roasted chicken tikka pieces in a spicy onion-tomato-cashew gravy", price: { single: 330 }, diet: "non-veg", sectionId: "chicken_specialties", isChefSpecial: true },
      { id: "chk_6", name: "Handi Chicken", description: "Clay handi slow-cooked chicken in an authentic aromatic rural style gravy", price: { half: 280, full: 510 }, diet: "non-veg", sectionId: "chicken_specialties" },
      { id: "chk_7", name: "Chicken Lababdar", description: "Tender chicken in a creamy tomato sauce with grated paneer and egg whites", price: { half: 290, full: 530 }, diet: "non-veg", sectionId: "chicken_specialties" },
      { id: "chk_8", name: "Chicken Rara", description: "Succulent chicken pieces cooked along with rich chicken mince in a thick spicy gravy", price: { single: 350 }, diet: "non-veg", sectionId: "chicken_specialties", isChefSpecial: true, spicyLevel: 2 },
      { id: "chk_9", name: "Chicken Bhuna", description: "Boneless chicken slow-roasted in its own juices with roasted spices and browned onions", price: { half: 280, full: 510 }, diet: "non-veg", sectionId: "chicken_specialties", spicyLevel: 2 },
      { id: "chk_10", name: "Chicken Kolhapuri", description: "Fiery Maharashtrian curry with whole dry red chillies and roasted spices", price: { half: 270, full: 490 }, diet: "non-veg", sectionId: "chicken_specialties", spicyLevel: 3 },
      { id: "chk_11", name: "Chicken Korma", description: "Mughlai style chicken cooked gently in a mild yogurt and almond paste gravy", price: { half: 280, full: 510 }, diet: "non-veg", sectionId: "chicken_specialties" },
      { id: "chk_12", name: "Chicken Hyderabadi", description: "Chicken infused with fresh mint, coriander, green chillies and coconut milk", price: { half: 270, full: 490 }, diet: "non-veg", sectionId: "chicken_specialties", spicyLevel: 2 },
      { id: "chk_13", name: "Chicken Kali Mirch Gravy", description: "Boneless chicken in a creamy white gravy seasoned with freshly cracked black peppercorns", price: { single: 330 }, diet: "non-veg", sectionId: "chicken_specialties" },
      { id: "chk_14", name: "Chicken Dehati", description: "Traditional Bihari village-style chicken stewed with whole garlic cloves and mustard oil", price: { half: 280, full: 510 }, diet: "non-veg", sectionId: "chicken_specialties", isBestseller: true, spicyLevel: 2 },
      { id: "chk_15", name: "Chicken Rogan Josh", description: "Kashmiri-inspired tender chicken simmered in rattan jot and aromatic garam masala", price: { half: 270, full: 490 }, diet: "non-veg", sectionId: "chicken_specialties" },
      { id: "chk_16", name: "Chicken Saagwala", description: "Fresh chicken simmered in garlic-infused blended spinach curry", price: { half: 260, full: 480 }, diet: "non-veg", sectionId: "chicken_specialties" },
      { id: "chk_17", name: "Chicken Keema Masala", description: "Spicy chicken mince cooked with green peas, ginger and fresh coriander", price: { single: 290 }, diet: "non-veg", sectionId: "chicken_specialties" },
      { id: "chk_18", name: "Tawa Chicken", description: "Boneless chicken tossed on hot cast-iron griddle with crushed spices and capsicum", price: { single: 320 }, diet: "non-veg", sectionId: "chicken_specialties", spicyLevel: 2 }
    ]
  },
  {
    id: "mutton_specialties",
    title: "Main Course - Mutton Specialties",
    subtitle: "Rich, slow-braised tender goat meat preparations",
    iconName: "Beef",
    items: [
      { id: "mut_1", name: "Champaran Handi Meat", description: "Bihari Ahuna style mutton slow-cooked in a sealed earthen clay pot with whole garlic bulbs (4 Pcs)", price: { single: 420 }, diet: "non-veg", sectionId: "mutton_specialties", isBestseller: true, isChefSpecial: true, spicyLevel: 2 },
      { id: "mut_2", name: "Mutton Rogan Josh", description: "Authentic Kashmiri tender goat curry slow-cooked with aromatic spices and saffron", price: { single: 390 }, diet: "non-veg", sectionId: "mutton_specialties", isBestseller: true },
      { id: "mut_3", name: "Mutton Curry (Patna Special)", description: "Traditional homestyle mutton curry simmered gently in rich mustard oil and whole spices", price: { single: 370 }, diet: "non-veg", sectionId: "mutton_specialties" },
      { id: "mut_4", name: "Mutton Kassa", description: "Thick, semi-dry caramelized onion reduction coating succulent mutton chunks", price: { single: 410 }, diet: "non-veg", sectionId: "mutton_specialties", spicyLevel: 2 },
      { id: "mut_5", name: "Mutton Korma", description: "Delicate royal Mughlai curry with cashew paste, cardamom and rose water", price: { single: 410 }, diet: "non-veg", sectionId: "mutton_specialties" },
      { id: "mut_6", name: "Mutton Do Pyaza", description: "Tender goat meat cooked with caramelized pearl onions and roasted spices", price: { single: 390 }, diet: "non-veg", sectionId: "mutton_specialties" },
      { id: "mut_7", name: "Mutton Bhuna Gosht", description: "Pan-fried mutton pieces browned with ground spices, cloves and black pepper", price: { single: 420 }, diet: "non-veg", sectionId: "mutton_specialties", isChefSpecial: true, spicyLevel: 2 },
      { id: "mut_8", name: "Mutton Rara", description: "Mutton pieces braised along with spicy mutton mince gravy", price: { single: 440 }, diet: "non-veg", sectionId: "mutton_specialties", spicyLevel: 2 },
      { id: "mut_9", name: "Mutton Handi Special", description: "Mutton simmered in a sealed pot with whole garam masalas and mustard oil", price: { single: 420 }, diet: "non-veg", sectionId: "mutton_specialties" },
      { id: "mut_10", name: "Mutton Keema Matar", description: "Minced goat meat sautéed with tender green peas, green chillies and fresh mint", price: { single: 380 }, diet: "non-veg", sectionId: "mutton_specialties" }
    ]
  },
  {
    id: "dal_legumes",
    title: "Dal & Legumes",
    subtitle: "Slow-simmered lentils tempered with ghee and aromatic cumin",
    iconName: "Bowl",
    items: [
      { id: "dl_1", name: "Dal Makhani", description: "Black lentils and kidney beans slow-simmered overnight over coal, finished with butter and cream", price: { single: 210 }, diet: "veg", sectionId: "dal_legumes", isBestseller: true },
      { id: "dl_2", name: "Dal Tadka", description: "Yellow lentils tempered with desi ghee, cumin seeds, garlic, onions and red chillies", price: { single: 170 }, diet: "veg", sectionId: "dal_legumes", isBestseller: true },
      { id: "dl_3", name: "Dal Fry", description: "Toor dal cooked with sautéed onions, ripe tomatoes and fresh cilantro", price: { single: 160 }, diet: "veg", sectionId: "dal_legumes" },
      { id: "dl_4", name: "Yellow Dal Plain", description: "Simple homestyle boiled yellow dal with light salt and turmeric, ideal with rice", price: { single: 130 }, diet: "veg", sectionId: "dal_legumes" },
      { id: "dl_5", name: "Dal Kolhapuri", description: "Spicy yellow lentils tempered with hot Maharashtrian spices and dried red chillies", price: { single: 180 }, diet: "veg", sectionId: "dal_legumes", spicyLevel: 3 },
      { id: "dl_6", name: "Dal Panchmel", description: "Rajasthani five-lentil delicacy tempered with cloves, asafoetida (hing) and pure ghee", price: { single: 190 }, diet: "veg", sectionId: "dal_legumes", isChefSpecial: true },
      { id: "dl_7", name: "Chana Dal Fry", description: "Split Bengal gram tempered with ginger, green chillies and garam masala", price: { single: 170 }, diet: "veg", sectionId: "dal_legumes" },
      { id: "dl_8", name: "Rajma Masala", description: "Red kidney beans slow-cooked in a spiced onion-tomato gravy, Punjabi style", price: { single: 200 }, diet: "veg", sectionId: "dal_legumes" }
    ]
  },
  {
    id: "rice_biryani",
    title: "Rice & Biryani",
    subtitle: "Aromatic long-grain basmati preparations and handi dum biryanis",
    iconName: "Wheat",
    items: [
      { id: "rb_1", name: "Popular Dineout Special Dum Biryani", description: "Chef's secret spices with layers of fragrant basmati rice and marinated chicken, slow-cooked in sealed handi", price: { single: 330 }, diet: "non-veg", sectionId: "rice_biryani", isChefSpecial: true, isBestseller: true },
      { id: "rb_2", name: "Chicken Dum Biryani", description: "Traditional Hyderabadi dum biryani served with spicy salan and cooling raita", price: { single: 290 }, diet: "non-veg", sectionId: "rice_biryani", isBestseller: true },
      { id: "rb_3", name: "Chicken Tikka Biryani", description: "Boneless smoky chicken tikka layered with aromatic saffron rice and mint", price: { single: 310 }, diet: "non-veg", sectionId: "rice_biryani" },
      { id: "rb_4", name: "Chicken Hyderabadi Biryani", description: "Fiery mint and coriander infused green spiced chicken biryani with boiled egg", price: { single: 300 }, diet: "non-veg", sectionId: "rice_biryani", spicyLevel: 2 },
      { id: "rb_5", name: "Mutton Dum Biryani", description: "Tender goat meat slow-cooked in dum with royal spices and aged basmati rice", price: { single: 390 }, diet: "non-veg", sectionId: "rice_biryani", isChefSpecial: true },
      { id: "rb_6", name: "Mutton Handi Biryani", description: "Clay pot sealed biryani featuring succulent pieces of mutton and caramelized onions", price: { single: 410 }, diet: "non-veg", sectionId: "rice_biryani" },
      { id: "rb_7", name: "Veg Dum Biryani", description: "Fresh seasonal vegetables and cottage cheese layered with aromatic spices and saffron", price: { single: 220 }, diet: "veg", sectionId: "rice_biryani", isBestseller: true },
      { id: "rb_8", name: "Paneer Biryani", description: "Spiced paneer cubes cooked in dum with basmati rice, mint and fried onions", price: { single: 240 }, diet: "veg", sectionId: "rice_biryani" },
      { id: "rb_9", name: "Egg Biryani", description: "Hard-boiled eggs browned and folded into fragrant basmati biryani rice", price: { single: 210 }, diet: "non-veg", sectionId: "rice_biryani" },
      { id: "rb_10", name: "Steamed Basmati Rice", description: "Fluffy, fragrant long-grain white basmati rice", price: { single: 120 }, diet: "veg", sectionId: "rice_biryani" },
      { id: "rb_11", name: "Jeera Rice", description: "Steamed basmati rice tempered with roasted cumin seeds and fresh desi ghee", price: { single: 140 }, diet: "veg", sectionId: "rice_biryani", isBestseller: true },
      { id: "rb_12", name: "Peas Pulao", description: "Basmati rice cooked with sweet green peas and whole spices", price: { single: 160 }, diet: "veg", sectionId: "rice_biryani" },
      { id: "rb_13", name: "Veg Pulao", description: "Mildly spiced basmati rice tossed with diced vegetables and fresh herbs", price: { single: 180 }, diet: "veg", sectionId: "rice_biryani" },
      { id: "rb_14", name: "Kashmiri Pulao", description: "Sweet, fragrant saffron rice garnished with dry fruits, tutty-fruity and pineapple slices", price: { single: 210 }, diet: "veg", sectionId: "rice_biryani" }
    ]
  },
  {
    id: "indian_breads",
    title: "Tandoor & Indian Breads",
    subtitle: "Clay-oven baked rotis, naans, stuffed kulchas and parathas",
    iconName: "Sandwich",
    items: [
      { id: "br_1", name: "Tandoori Plain Roti", description: "Traditional whole wheat flour bread baked in hot clay tandoor", price: { single: 15 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_2", name: "Tandoori Butter Roti", description: "Crisp clay-oven whole wheat roti brushed with fresh dairy butter", price: { single: 20 }, diet: "veg", sectionId: "indian_breads", isBestseller: true },
      { id: "br_3", name: "Missi Roti", description: "Nutritious gram flour and whole wheat bread seasoned with onions, ajwain and kasuri methi", price: { single: 35 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_4", name: "Plain Naan", description: "Soft leavened refined flour bread baked in tandoor", price: { single: 40 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_5", name: "Butter Naan", description: "Fluffy leavened flatbread brushed generously with salted butter", price: { single: 50 }, diet: "veg", sectionId: "indian_breads", isBestseller: true },
      { id: "br_6", name: "Garlic Naan", description: "Tandoori naan topped with roasted minced garlic and fresh coriander", price: { single: 65 }, diet: "veg", sectionId: "indian_breads", isBestseller: true },
      { id: "br_7", name: "Cheese Garlic Naan", description: "Stuffed with molten mozzarella and cheddar cheese, topped with golden garlic", price: { single: 95 }, diet: "veg", sectionId: "indian_breads", isChefSpecial: true },
      { id: "br_8", name: "Kashmiri Naan", description: "Delicate sweet naan stuffed with chopped dry fruits, raisins and cherries", price: { single: 85 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_9", name: "Laccha Paratha", description: "Multi-layered crispy whole wheat tandoori flatbread with golden buttery flakes", price: { single: 45 }, diet: "veg", sectionId: "indian_breads", isBestseller: true },
      { id: "br_10", name: "Pudina Paratha", description: "Crispy multi-layered paratha dusted with fragrant dried mint powder", price: { single: 50 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_11", name: "Onion Kulcha", description: "Leavened flatbread stuffed with spiced chopped onions and anardana", price: { single: 60 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_12", name: "Paneer Kulcha", description: "Flatbread generously stuffed with seasoned grated cottage cheese and herbs", price: { single: 80 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_13", name: "Aloo Paratha (Tandoori)", description: "Crisp tandoori bread stuffed with spiced mashed potatoes and green chillies", price: { single: 60 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_14", name: "Stuffed Kulcha (Mixed)", description: "Tandoori bread stuffed with potatoes, paneer, onions and fresh spices", price: { single: 75 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_15", name: "Rumali Roti", description: "Handkerchief-thin delicate refined flour flatbread cooked over an inverted wok", price: { single: 30 }, diet: "veg", sectionId: "indian_breads" },
      { id: "br_16", name: "Assorted Bread Basket", description: "Chef's selection: 1 Butter Naan, 1 Garlic Naan, 1 Laccha Paratha, 1 Missi Roti", price: { single: 170 }, diet: "veg", sectionId: "indian_breads", isChefSpecial: true }
    ]
  },
  {
    id: "thali_combos",
    title: "Thali & Special Combos",
    subtitle: "Complete meals with balanced authentic curries, breads and desserts",
    iconName: "CookingPot",
    items: [
      {
        id: "th_1",
        name: "Executive Veg Thali",
        description: "Includes 4 Tandoori Butter Roti, Steamed Basmati Rice, Dal Fry, Seasonal Mixed Vegetable, Green Salad, Mango Pickle & 1 Sweet",
        price: { single: 199 },
        diet: "veg",
        sectionId: "thali_combos",
        isBestseller: true
      },
      {
        id: "th_2",
        name: "Deluxe Paneer Thali",
        description: "Includes 2 Butter Naan (or 4 Butter Roti), Jeera Rice, Dal Makhani, Paneer Butter Masala, Mixed Veg Raita, Garden Salad, Pickle & 1 Hot Gulab Jamun",
        price: { single: 269 },
        diet: "veg",
        sectionId: "thali_combos",
        isBestseller: true
      },
      {
        id: "th_3",
        name: "Popular Special Maharaja Veg Thali",
        description: "Royal feast: 2 Laccha Paratha, Peas Pulao, Dal Makhani, Shahi Paneer, Mixed Veg Kolhapuri, Boondi Raita, Roasted Papad, Onion Salad & 2 Gulab Jamun",
        price: { single: 329 },
        diet: "veg",
        sectionId: "thali_combos",
        isChefSpecial: true
      },
      {
        id: "th_4",
        name: "Egg Curry Thali Combo",
        description: "Includes 4 Butter Roti, Steamed Basmati Rice, Rich Egg Curry (2 Farm Eggs), Dal Tadka, Fresh Green Salad, Pickle & 1 Sweet",
        price: { single: 229 },
        diet: "non-veg",
        sectionId: "thali_combos"
      },
      {
        id: "th_5",
        name: "Chicken Thali Combo",
        description: "Includes 4 Butter Roti, Steamed Basmati Rice, Homestyle Chicken Curry (2 Pcs), Dal Tadka, Fresh Salad, Mango Pickle & 1 Hot Sweet",
        price: { single: 279 },
        diet: "non-veg",
        sectionId: "thali_combos",
        isBestseller: true
      },
      {
        id: "th_6",
        name: "Special Chicken Butter Masala Thali",
        description: "Includes 2 Butter Naan, Jeera Rice, Tender Chicken Butter Masala (2 Pcs), Dal Makhani, Mixed Raita, Onion Salad, Pickle & 1 Gulab Jamun",
        price: { single: 339 },
        diet: "non-veg",
        sectionId: "thali_combos",
        isChefSpecial: true
      },
      {
        id: "th_7",
        name: "Mutton Curry Thali Combo",
        description: "Includes 4 Butter Roti, Steamed Basmati Rice, Traditional Mutton Curry (2 Pcs tender goat meat), Dal Tadka, Fresh Salad, Pickle & 1 Sweet",
        price: { single: 369 },
        diet: "non-veg",
        sectionId: "thali_combos"
      },
      {
        id: "th_8",
        name: "Champaran Handi Mutton Special Thali",
        description: "Includes 2 Tandoori Butter Roti, Jeera Rice, Authentic Champaran Ahuna Mutton (2 Pcs with whole garlic bulb), Dal Fry, Onion Salad & Gulab Jamun",
        price: { single: 419 },
        diet: "non-veg",
        sectionId: "thali_combos",
        isChefSpecial: true
      },
      {
        id: "th_9",
        name: "Indo-Chinese Combo Bowl",
        description: "Your choice of Veg / Chicken: Fried Rice or Hakka Noodles paired with Manchurian / Chilli Chicken (4 Pcs) & Chilled Soft Drink",
        price: { single: 249 },
        diet: "non-veg",
        sectionId: "thali_combos"
      }
    ]
  },
  {
    id: "beverages_desserts",
    title: "Beverages & Desserts",
    subtitle: "Packaged refreshments at MRP, hand-crafted shakes, teas and sweets",
    iconName: "Coffee",
    items: [
      { id: "bev_1", name: "Packaged Drinking Water (1L Chilled)", description: "Pure sealed mineral water bottle, served chilled", price: { single: "MRP", isMRP: true }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_2", name: "Soft Drinks / Cold Drinks (Can / Bottle)", description: "Assorted cold aerated beverages (Coke, Thums Up, Sprite, Fanta)", price: { single: "MRP", isMRP: true }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_3", name: "Fresh Lime Soda", description: "Made fresh to order with lemon juice, mint and sparkling soda (Sweet / Salt / Mixed)", price: { single: 70 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_4", name: "Masala Cold Drink", description: "Spiced aerated cola enhanced with black salt, chaat masala, lemon and roasted cumin", price: { single: 80 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_5", name: "Virgin Mojito", description: "Refreshing muddle of crushed fresh mint leaves, lime wedges, sugar syrup and club soda", price: { single: 120 }, diet: "veg", sectionId: "beverages_desserts", isBestseller: true },
      { id: "bev_6", name: "Blue Lagoon Mocktail", description: "Curacao citrus syrup, lemonade and chilled sprite over crushed ice", price: { single: 130 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_7", name: "Sweet Lassi (Patna Special)", description: "Thick hand-churned sweet curd lassi served chilled with a thick layer of malai", price: { single: 90 }, diet: "veg", sectionId: "beverages_desserts", isBestseller: true },
      { id: "bev_8", name: "Salted Buttermilk / Chaas", description: "Refreshing spiced churned yogurt with ginger, green chillies, curry leaves and roasted jeera", price: { single: 60 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_9", name: "Mango Lassi", description: "Velvety blend of sweet mango pulp and fresh yogurt, topped with sliced pistachios", price: { single: 110 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_10", name: "Cold Coffee with Ice Cream", description: "Rich blended milk coffee poured over a scoop of vanilla ice cream and chocolate drizzle", price: { single: 140 }, diet: "veg", sectionId: "beverages_desserts", isBestseller: true },
      { id: "bev_11", name: "Chocolate Shake", description: "Thick decadent shake made with dairy cream, cocoa and Hershey's syrup", price: { single: 130 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_12", name: "Vanilla Milkshake", description: "Classic chilled milkshake blended with vanilla bean extract and milk", price: { single: 110 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_13", name: "Strawberry Shake", description: "Sweet, creamy strawberry shake topped with strawberry swirl", price: { single: 120 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_14", name: "Hot Masala Chai", description: "Slow-brewed strong Indian tea infused with cardamom, ginger, cloves and cinnamon", price: { single: 40 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_15", name: "Hot Cappuccino / Coffee", description: "Freshly brewed hot milk coffee with creamy froth and cocoa dust", price: { single: 70 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_16", name: "Hot Gulab Jamun (2 Pcs)", description: "Soft melt-in-mouth khoya spheres soaked in warm rose-cardamom sugar syrup", price: { single: 70 }, diet: "veg", sectionId: "beverages_desserts", isBestseller: true },
      { id: "bev_17", name: "Rasgulla (2 Pcs)", description: "Spongy, syrupy cottage cheese balls served chilled", price: { single: 60 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_18", name: "Vanilla Ice Cream", description: "Two scoops of classic rich vanilla dairy ice cream", price: { single: 70 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_19", name: "Chocolate Ice Cream", description: "Two scoops of rich creamy chocolate ice cream with chocolate sauce", price: { single: 90 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_20", name: "Butterscotch Ice Cream", description: "Two scoops with caramelized crunchy praline bits", price: { single: 90 }, diet: "veg", sectionId: "beverages_desserts" },
      { id: "bev_21", name: "Sizzling Brownie with Ice Cream", description: "Warm walnut brownie served on a sizzling hot plate with vanilla ice cream and hot chocolate fudge", price: { single: 170 }, diet: "veg", sectionId: "beverages_desserts", isChefSpecial: true },
      { id: "bev_22", name: "Matka Kulfi", description: "Traditional slow-reduced saffron and pistachio kulfi served in an earthen clay pot", price: { single: 80 }, diet: "veg", sectionId: "beverages_desserts", isChefSpecial: true }
    ]
  }
];
