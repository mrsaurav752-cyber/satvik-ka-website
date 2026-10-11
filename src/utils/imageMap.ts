// High-resolution, reliable culinary imagery with keyword-based matching
const IMAGE_COLLECTION: Record<string, string> = {
  // Soups
  soup_tomato: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
  soup_manchow: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80",
  soup_chicken: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=600&q=80",
  soup_sweetcorn: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?auto=format&fit=crop&w=600&q=80",

  // Starters Veg
  paneer_tikka: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
  crispy_corn: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  hara_bhara_kebab: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  spring_roll: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  french_fries: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
  mushroom_tikka: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",

  // Starters Non-Veg
  chicken_tikka: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
  chicken_lollipop: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
  chicken_wings: "https://images.unsplash.com/photo-1527477321005-4d01d75ba213?auto=format&fit=crop&w=600&q=80",
  mutton_seekh: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
  fish_fry: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",

  // Tandoori Khazana
  tandoori_chicken: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
  malai_tikka: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
  tangdi_kebab: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",

  // Chinese
  chilli_paneer: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
  chilli_chicken: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80",
  manchurian: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
  noodles_chowmein: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
  fried_rice: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
  momos: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=80",

  // Main Course Paneer
  paneer_butter_masala: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
  kadhai_paneer: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  shahi_paneer: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  palak_paneer: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",

  // Main Course Veg
  mixed_veg: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
  mushroom_masala: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
  malai_kofta: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  dum_aloo: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",

  // Chicken Main Course
  butter_chicken: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
  kadhai_chicken: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
  chicken_curry: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
  chicken_do_pyaza: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",

  // Mutton
  mutton_rogan_josh: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
  mutton_curry: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
  champaran_meat: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",

  // Dal
  dal_makhani: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  dal_tadka: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",

  // Rice & Biryani
  chicken_biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
  mutton_biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
  veg_biryani: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80",
  jeera_rice: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
  pulao: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",

  // Breads
  butter_naan: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  garlic_naan: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80",
  tandoori_roti: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80",
  lachha_paratha: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80",

  // Thali
  thali_veg: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
  thali_chicken: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  thali_mutton: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",

  // Beverages & Desserts
  gulab_jamun: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  ice_cream: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80",
  cold_drink: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  mineral_water: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
  cold_coffee: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
  lassi: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
};

export const FALLBACK_FOOD_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80";

export function getFoodImage(name: string, sectionId: string, customImage?: string): string {
  if (customImage) return customImage;

  const lowerName = name.toLowerCase();

  // Keyword mappings
  if (lowerName.includes("mineral water") || lowerName.includes("packaged drinking water") || lowerName.includes("water bottle")) {
    return IMAGE_COLLECTION.mineral_water;
  }
  if (lowerName.includes("cold coffee") || lowerName.includes("shake")) {
    return IMAGE_COLLECTION.cold_coffee;
  }
  if (lowerName.includes("lassi")) {
    return IMAGE_COLLECTION.lassi;
  }
  if (lowerName.includes("gulab jamun")) {
    return IMAGE_COLLECTION.gulab_jamun;
  }
  if (lowerName.includes("ice cream") || lowerName.includes("brownie")) {
    return IMAGE_COLLECTION.ice_cream;
  }
  if (lowerName.includes("cold drink") || lowerName.includes("beverage") || lowerName.includes("mojito")) {
    return IMAGE_COLLECTION.cold_drink;
  }

  // Thalis
  if (sectionId === "thali_combos" || lowerName.includes("thali")) {
    if (lowerName.includes("mutton")) return IMAGE_COLLECTION.thali_mutton;
    if (lowerName.includes("chicken") || lowerName.includes("egg")) return IMAGE_COLLECTION.thali_chicken;
    return IMAGE_COLLECTION.thali_veg;
  }

  // Biryani & Rice
  if (lowerName.includes("biryani")) {
    if (lowerName.includes("chicken")) return IMAGE_COLLECTION.chicken_biryani;
    if (lowerName.includes("mutton")) return IMAGE_COLLECTION.mutton_biryani;
    return IMAGE_COLLECTION.veg_biryani;
  }
  if (lowerName.includes("jeera rice") || lowerName.includes("steam rice") || lowerName.includes("pulao")) {
    return IMAGE_COLLECTION.jeera_rice;
  }

  // Breads
  if (lowerName.includes("garlic naan")) return IMAGE_COLLECTION.garlic_naan;
  if (lowerName.includes("butter naan") || lowerName.includes("naan") || lowerName.includes("kulcha")) {
    return IMAGE_COLLECTION.butter_naan;
  }
  if (lowerName.includes("roti") || lowerName.includes("chapati")) return IMAGE_COLLECTION.tandoori_roti;
  if (lowerName.includes("paratha")) return IMAGE_COLLECTION.lachha_paratha;

  // Soups
  if (sectionId === "soups" || lowerName.includes("soup")) {
    if (lowerName.includes("tomato")) return IMAGE_COLLECTION.soup_tomato;
    if (lowerName.includes("manchow")) return IMAGE_COLLECTION.soup_manchow;
    if (lowerName.includes("chicken")) return IMAGE_COLLECTION.soup_chicken;
    if (lowerName.includes("corn")) return IMAGE_COLLECTION.soup_sweetcorn;
    return IMAGE_COLLECTION.soup_manchow;
  }

  // Chinese & Starters
  if (lowerName.includes("momo")) return IMAGE_COLLECTION.momos;
  if (lowerName.includes("noodle") || lowerName.includes("chowmein")) return IMAGE_COLLECTION.noodles_chowmein;
  if (lowerName.includes("fried rice")) return IMAGE_COLLECTION.fried_rice;
  if (lowerName.includes("manchurian")) return IMAGE_COLLECTION.manchurian;
  if (lowerName.includes("spring roll")) return IMAGE_COLLECTION.spring_roll;
  if (lowerName.includes("french fries") || lowerName.includes("potato")) return IMAGE_COLLECTION.french_fries;
  if (lowerName.includes("crispy corn")) return IMAGE_COLLECTION.crispy_corn;
  if (lowerName.includes("chilli paneer")) return IMAGE_COLLECTION.chilli_paneer;
  if (lowerName.includes("chilli chicken")) return IMAGE_COLLECTION.chilli_chicken;

  // Paneer Dishes
  if (lowerName.includes("paneer butter masala")) return IMAGE_COLLECTION.paneer_butter_masala;
  if (lowerName.includes("kadhai paneer")) return IMAGE_COLLECTION.kadhai_paneer;
  if (lowerName.includes("shahi paneer")) return IMAGE_COLLECTION.shahi_paneer;
  if (lowerName.includes("palak paneer")) return IMAGE_COLLECTION.palak_paneer;
  if (lowerName.includes("paneer tikka")) return IMAGE_COLLECTION.paneer_tikka;

  // Non-Veg Starters & Tandoori
  if (lowerName.includes("tandoori chicken")) return IMAGE_COLLECTION.tandoori_chicken;
  if (lowerName.includes("tangdi")) return IMAGE_COLLECTION.tangdi_kebab;
  if (lowerName.includes("lollipop")) return IMAGE_COLLECTION.chicken_lollipop;
  if (lowerName.includes("chicken wings") || lowerName.includes("wing")) return IMAGE_COLLECTION.chicken_wings;
  if (lowerName.includes("chicken tikka") || lowerName.includes("malai tikka")) return IMAGE_COLLECTION.chicken_tikka;
  if (lowerName.includes("seekh")) return IMAGE_COLLECTION.mutton_seekh;
  if (lowerName.includes("fish")) return IMAGE_COLLECTION.fish_fry;

  // Main Course Chicken
  if (lowerName.includes("butter chicken")) return IMAGE_COLLECTION.butter_chicken;
  if (lowerName.includes("kadhai chicken")) return IMAGE_COLLECTION.kadhai_chicken;
  if (lowerName.includes("chicken do pyaza")) return IMAGE_COLLECTION.chicken_do_pyaza;
  if (lowerName.includes("chicken curry") || lowerName.includes("chicken masala")) return IMAGE_COLLECTION.chicken_curry;

  // Mutton
  if (lowerName.includes("mutton") || lowerName.includes("rogan josh") || lowerName.includes("champaran")) {
    return IMAGE_COLLECTION.mutton_rogan_josh;
  }

  // Dal
  if (lowerName.includes("dal makhani")) return IMAGE_COLLECTION.dal_makhani;
  if (lowerName.includes("dal tadka") || lowerName.includes("dal fry") || lowerName.includes("dal")) {
    return IMAGE_COLLECTION.dal_tadka;
  }

  // Veg Main Course
  if (lowerName.includes("mushroom")) return IMAGE_COLLECTION.mushroom_masala;
  if (lowerName.includes("malai kofta") || lowerName.includes("kofta")) return IMAGE_COLLECTION.malai_kofta;
  if (lowerName.includes("dum aloo")) return IMAGE_COLLECTION.dum_aloo;
  if (lowerName.includes("mixed veg") || lowerName.includes("veg")) return IMAGE_COLLECTION.mixed_veg;

  return FALLBACK_FOOD_IMAGE;
}
