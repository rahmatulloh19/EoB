// src/lib/api.ts

export async function getBranchesData() {
  try {
    const res = await fetch('https://crm.embassyburger.uz/api/v1/telegram/branches/', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) throw new Error('Failed to fetch branches');
    
    const apiData = await res.json();
    
    return apiData.map((b: any) => {
      let hours = "10:00 - 22:00";
      if (b.su_open_time && b.su_close_time) {
        const open = b.su_open_time.substring(0, 5);
        const close = b.su_close_time.substring(0, 5);
        if (open === "08:00" && close === "07:00") {
          hours = "24/7";
        } else {
          hours = `${open} - ${close}`;
        }
      }

      return {
        id: b.id,
        name_ru: b.name.replace("Burger ", "").trim(),
        name_uz: b.name_uz ? b.name_uz.replace("Burger ", "").trim() : b.name.replace("Burger ", "").trim(),
        name_en: b.name_en ? b.name_en.replace("Burger ", "").trim() : b.name.replace("Burger ", "").trim(),
        address_ru: b.address,
        address_uz: b.address_uz || b.address,
        address_en: b.address_en || b.address,
        phone: b.phone ? b.phone.replace(/(\+998)(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5") : "",
        latitude: parseFloat(b.latitude),
        longitude: parseFloat(b.longitude),
        hours,
        is_open: b.is_open
      };
    });
  } catch (error) {
    console.error("API Error (Branches):", error);
    return [];
  }
}

export async function getMenuData() {
  try {
    const res = await fetch('https://crm.embassyburger.uz/api/v1/telegram/menu/', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) throw new Error('Failed to fetch menu');
    
    const apiData = await res.json();
    
    return apiData.map((category: any) => ({
      id: category.id,
      name: category.name,
      name_uz: category.name_uz || category.name,
      name_en: category.name_en || category.name,
      products: category.products ? category.products.map((p: any) => ({
        id: p.id,
        categoryId: category.id,
        name: p.name,
        name_uz: p.name_uz || p.name,
        name_en: p.name_en || p.name,
        description: p.description || "",
        description_uz: p.description_uz || p.description || "",
        description_en: p.description_en || p.description || "",
        price: p.price,
        image: p.image || "/images/placeholder.jpg",
        modifierGroups: p.modifierGroups || []
      })) : []
    }));
  } catch (error) {
    console.error("API Error (Menu):", error);
    return [];
  }
}
