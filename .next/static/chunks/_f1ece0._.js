(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_f1ece0._.js", {

"[project]/lib/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Investment Data
__turbopack_esm__({
    "investments": (()=>investments),
    "investorProfile": (()=>investorProfile)
});
const investments = [
    {
        id: 1,
        name: "Floria Table Settings",
        industry: "Party Planning",
        founded: 2015,
        targetConsumers: "M/W in 20s",
        quarterlyRevenue: "$50,000",
        employees: 5,
        riskAssessment: "73% Return",
        askingPrice: "$100,000 for 20% equity",
        imageUrl: "/images/floria-table.jpg"
    },
    {
        id: 2,
        name: "Nathan's Hot Dogs",
        industry: "Food & Beverage",
        founded: 1998,
        targetConsumers: "Fast food lovers",
        quarterlyRevenue: "$150,000",
        employees: 25,
        riskAssessment: "85% Return",
        askingPrice: "$250,000 for 30% equity",
        imageUrl: "/images/nathans-hotdogs.jpg"
    },
    {
        id: 3,
        name: "Local Tech Helpers",
        industry: "IT Support",
        founded: 2020,
        targetConsumers: "Small Businesses & Individuals",
        quarterlyRevenue: "$45,000",
        employees: 4,
        riskAssessment: "60% Return",
        askingPrice: "$50,000 for 15% equity",
        imageUrl: "/images/localtech.jpg"
    },
    {
        id: 4,
        name: "EcoWear Handmade",
        industry: "Sustainable Fashion",
        founded: 2018,
        targetConsumers: "Eco-conscious Individuals",
        quarterlyRevenue: "$75,000",
        employees: 8,
        riskAssessment: "70% Return",
        askingPrice: "$80,000 for 25% equity",
        imageUrl: "/images/ecowear-handmade.jpg"
    },
    {
        id: 5,
        name: "FreshFarm Market",
        industry: "Organic Grocery Store",
        founded: 2016,
        targetConsumers: "Local Health Enthusiasts",
        quarterlyRevenue: "$90,000",
        employees: 10,
        riskAssessment: "65% Return",
        askingPrice: "$120,000 for 20% equity",
        imageUrl: "/images/freshfarm-market.jpg"
    },
    {
        id: 6,
        name: "AeroSnap Drones",
        industry: "Aerial Photography",
        founded: 2021,
        targetConsumers: "Events & Small Businesses",
        quarterlyRevenue: "$35,000",
        employees: 3,
        riskAssessment: "55% Return",
        askingPrice: "$40,000 for 15% equity",
        imageUrl: "/images/aerosnap.jpg"
    },
    {
        id: 7,
        name: "Sunflower Bakery",
        industry: "Bakery & Pastries",
        founded: 2019,
        targetConsumers: "Local Families & Coffee Shops",
        quarterlyRevenue: "$80,000",
        employees: 6,
        riskAssessment: "75% Return",
        askingPrice: "$90,000 for 18% equity",
        imageUrl: "/images/sunflower-bakery.jpg"
    },
    {
        id: 8,
        name: "ByteFix Repair",
        industry: "Tech Repair Services",
        founded: 2017,
        targetConsumers: "Individuals & Small Offices",
        quarterlyRevenue: "$60,000",
        employees: 7,
        riskAssessment: "68% Return",
        askingPrice: "$70,000 for 22% equity",
        imageUrl: "/images/bytefix.jpg"
    },
    {
        id: 9,
        name: "GreenScape Lawn Care",
        industry: "Landscaping Services",
        founded: 2014,
        targetConsumers: "Homeowners & Small Businesses",
        quarterlyRevenue: "$95,000",
        employees: 12,
        riskAssessment: "78% Return",
        askingPrice: "$110,000 for 25% equity",
        imageUrl: "/images/greenscape.jpg"
    },
    {
        id: 10,
        name: "Pet Haven Grooming",
        industry: "Pet Care & Grooming",
        founded: 2022,
        targetConsumers: "Pet Owners & Shelters",
        quarterlyRevenue: "$40,000",
        employees: 5,
        riskAssessment: "58% Return",
        askingPrice: "$45,000 for 15% equity",
        imageUrl: "/images/pethaven.jpg"
    }
];
const investorProfile = {
    name: "Sabrina Arshad",
    email: "sabrina.arshad13@gmail.com",
    phone: "123-456-6789",
    linkedin: "linkedin.com/sabrina-arshad",
    maxInvestmentValue: "$50K",
    investorType: "Beginner",
    profileImage: "/images/testimonial-03.jpg"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/profile/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProfilePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/data.ts [app-client] (ecmascript)");
"use client";
;
;
function ProfilePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 flex flex-col items-center pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 w-full bg-blue-900 text-white flex justify-between items-center p-5 shadow-lg z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold",
                        children: "InvestMatch"
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/dashboard",
                                className: "hover:bg-white hover:text-blue-900 px-4 py-2 rounded-md",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/explore",
                                className: "hover:bg-white hover:text-blue-900 px-4 py-2 rounded-md",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/profile",
                                className: "hover:bg-white hover:text-blue-900 px-4 py-2 rounded-md",
                                children: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-2xl mt-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investorProfile"].profileImage,
                        alt: "Investor",
                        className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-blue-900 mb-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investorProfile"].name
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-blue-900",
                                        children: "Email:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 40
                                    }, this),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investorProfile"].email
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-blue-900",
                                        children: "LinkedIn:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 40
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investorProfile"].linkedin}`,
                                        className: "text-blue-500",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investorProfile"].linkedin
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-blue-900",
                                        children: "Investment Range:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 24,
                                        columnNumber: 40
                                    }, this),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investorProfile"].maxInvestmentValue
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-blue-900",
                                        children: "Investor Type:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 40
                                    }, this),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investorProfile"].investorType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ProfilePage;
var _c;
__turbopack_refresh__.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/profile/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_f1ece0._.js.map