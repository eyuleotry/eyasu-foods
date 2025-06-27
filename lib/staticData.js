export const db = {
  roles: [
    { id: 1, roleName: "admin" },
    { id: 2, roleName: "vendor" },
    { id: 3, roleName: "customer" }
  ],
  users: [
    { id: 1, name: "Admin User", email: "admin@eyasufoods.com", passwordHash: "hashed_admin", roleId: 1 },
    { id: 2, name: "Vendor One", email: "vendor1@eyasufoods.com", passwordHash: "hashed_vendor1", roleId: 2 },
    { id: 3, name: "Customer One", email: "customer1@eyasufoods.com", passwordHash: "hashed_customer1", roleId: 3 },
    { id: 4, name: "Customer Two", email: "customer2@eyasufoods.com", passwordHash: "hashed_customer2", roleId: 3 },
    { id: 5, name: "Vendor THREE", email: "vendor2@eyasufoods.com", passwordHash: "hashed_vendor1", roleId: 2 }
  ],
  vendors: [
    { id: 1, userId: 2, businessName: "Vendor One Foods", description: "Quality meals", location: "Addis Ababa" },
    { id: 2, userId: 5, businessName: "Vendor wow", description: "wanda meals", location: "Hawassa" }
  ],
  restaurants: [
    { id: 1, name: "Sheraton Addis, a Luxury Collection Hotel", vendorId: 1, location: "Addis Ababa", description: "A renowned luxury hotel known for its grand architecture, lush gardens, and upscale dining options.", imageUrl: "https://logos-world.net/wp-content/uploads/2021/03/Sheraton-Logo-PNG.png" },
    { id: 2, name: "Hyatt Regency Addis Ababa", vendorId: 1, location: "Addis Ababa", description: "A contemporary hotel located in Meskel Square, offering modern amenities, diverse culinary experiences, and excellent service.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hyatt_Regency_logo.png" }, // Using a common Hyatt Regency logo PNG
    { id: 3, name: "Ethiopian Skylight Hotel", vendorId: 1, location: "Addis Ababa", description: "The largest hotel in Ethiopia, conveniently located near Bole International Airport, boasting numerous restaurants and a large convention center.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Skylight_Hotel_%28Ethiopia%29.png/1280px-Skylight_Hotel_%28Ethiopia%29.png" } // This is a Wikipedia link to a PNG, good quality
  ],
  menuItems: [
    { id: 1, restaurantId: 1, name: "Shiro", description: "A flavorful, stew-like dish made from ground chickpeas or broad beans, often seasoned with garlic, ginger, and other spices.", price: 350.00, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ethiopian_Shiro_Wot_with_Injera.jpg/1280px-Ethiopian_Shiro_Wot_with_Injera.jpg", category: "Main Course" },
    { id: 2, restaurantId: 1, name: "Tibs", description: "Sautéed pieces of beef, lamb, or goat, often cooked with onions, peppers, and various spices, served hot.", price: 600.00, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ethiopian_Tibs.jpg/1280px-Ethiopian_Tibs.jpg", category: "Fast Food" },
    { id: 3, restaurantId: 2, name: "Kitfo", description: "Finely minced raw beef, marinated in _mitmita_ (a chili powder-based spice blend) and _niter kibbeh_ (clarified butter infused with herbs and spices). Can be served raw, rare, or well-done.", price: 750.00, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kitfo_with_injera_and_collard_greens.jpg/1280px-Kitfo_with_injera_and_collard_greens.jpg", category: "Main Course" },
    { id: 4, restaurantId: 2, name: "Gored Gored", description: "Cubes of raw beef, often seasoned with _berbere_ and _niter kibbeh_, similar to kitfo but with larger pieces of meat.", price: 700.00, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Gored_Gored.jpg/1280px-Gored_Gored.jpg", category: "Bread" }
  ],
  cartItems: [
    { id: 1, userId: 3, menuItemId: 1, quantity: 2 },
    { id: 2, userId: 3, menuItemId: 2, quantity: 1 },
    { id: 3, userId: 4, menuItemId: 3, quantity: 1 }
  ],
  orders: [
    { id: 1, userId: 3, restaurantId: 1, totalPrice: 1200.00, status: "pending" },
    { id: 2, userId: 4, restaurantId: 2, totalPrice: 880.00, status: "preparing" }
  ],
  orderItems: [
    { id: 1, orderId: 1, menuItemId: 1, quantity: 2, price: 450.00 },
    { id: 2, orderId: 1, menuItemId: 2, quantity: 1, price: 300.00 },
    { id: 3, orderId: 2, menuItemId: 3, quantity: 1, price: 800.00 },
    { id: 4, orderId: 2, menuItemId: 4, quantity: 1, price: 80.00 }
  ],
  payments: [
    { id: 1, orderId: 1, paymentMethod: "Credit Card", transactionId: "TXN123456", status: "success" },
    { id: 2, orderId: 2, paymentMethod: "COD", transactionId: "TXN123457", status: "success" }
  ]
};
