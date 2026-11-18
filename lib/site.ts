export const RELEASES_URL = "https://github.com/Kamaa7/Makhzan-/releases";

export const chapters = [
  {
    id: "shop",
    nav: "Shop",
    kicker: "Store profile",
    title: "The name on every memo.",
    body: "Shop name, address, phone, and GSTIN are set once and print on the paper. After the first sale the currency stays. Amounts are not converted.",
    src: "/banners/shop.jpg",
    width: 1024,
    height: 523,
    alt: "Makhzan store profile on a laptop. Shop name, address, phone, GSTIN, and Indian rupee, with the currency locked after sales.",
  },
  {
    id: "stock",
    nav: "Stock",
    kicker: "Products",
    title: "The barcode is the SKU.",
    body: "You add each product. A scanner finds it only after it is saved, and puts a line on the sale. Stock falls when that sale is saved.",
    src: "/banners/stock.jpg",
    width: 1024,
    height: 524,
    alt: "Makhzan products and stock on a laptop. One active item, a low-stock count, and a prompt to scan a barcode.",
  },
  {
    id: "counter",
    nav: "Counter",
    kicker: "New sale",
    title: "A cash memo, or a bill.",
    body: "Search by name or scan. A cash memo is paid in full and can be a walk-in. A bill needs a customer, and the amount paid can be less than the total.",
    src: "/banners/sale.jpg",
    width: 1024,
    height: 524,
    alt: "Makhzan new sale on a laptop. A cash memo for two units at 1,200 rupees, scanner ready, total 2,400 rupees.",
  },
  {
    id: "customers",
    nav: "Customers",
    kicker: "Dues",
    title: "Who still owes the shop.",
    body: "A walk-in does not need a saved customer. Credit buyers stay on the list with the amount due. A later payment is written on that bill.",
    src: "/banners/customers.jpg",
    width: 1024,
    height: 524,
    alt: "Makhzan customers on a laptop. One buyer with 1,600 rupees due, and a walk-in customer with no balance.",
  },
  {
    id: "register",
    nav: "Register",
    kicker: "Sales register",
    title: "The sales, in one list.",
    body: "Today, this month, or a range you choose. Collected and still outstanding sit above the documents. Export CSV when you need a file.",
    src: "/banners/register.jpg",
    width: 1024,
    height: 523,
    alt: "Makhzan sales register on a laptop, with date filters, document totals, and an export CSV control.",
  },
] as const;

export const nav = [
  { href: "#top", label: "Home" },
  { href: "#counter", label: "Counter" },
  { href: "#reviews", label: "Reviews" },
];

export const reviews = [
  {
    shop: "Noor Pharmacy",
    place: "Aligarh",
    title: "The scan lands on the memo.",
    quote:
      "Each strength is its own item. I scan the strip, the line is there, and the stock is already down when I save.",
  },
  {
    shop: "Rida Fabrics",
    place: "Retail",
    title: "Cash memo, or a bill.",
    quote:
      "A walk-in is paid in full. If the cloth goes on the book, I raise a bill and the due stays on that name.",
  },
  {
    shop: "Hira Kirana",
    place: "Grocery",
    title: "Only what is already saved.",
    quote: "The gun finds a product only after I have added it. Nothing unknown gets onto a sale.",
  },
  {
    shop: "Safa Stationery",
    place: "Shop",
    title: "The books stay on this computer.",
    quote:
      "I keep a backup file aside. Day close marks the day, and the next sale still opens.",
  },
] as const;

export const facts = [
  {
    term: "Where it runs",
    detail: "On the shop computer. Another browser or PC starts empty until a backup is imported.",
  },
  {
    term: "Scanner",
    detail: "A USB or Bluetooth barcode gun types the SKU. There is no camera scan.",
  },
  {
    term: "Print",
    detail: "A normal A4 page, or an 80mm receipt. The PDF uses the document number.",
  },
  {
    term: "Backup",
    detail: "Home and Store Profile can download the database. Import replaces the shop on that computer.",
  },
  {
    term: "Day close",
    detail: "Marks the day as reviewed. It does not lock the counter.",
  },
  {
    term: "Sign in",
    detail: "Email and password. One login is one shop.",
  },
  {
    term: "Language",
    detail: "English stays on the line. The shop’s language can sit under it.",
  },
] as const;
