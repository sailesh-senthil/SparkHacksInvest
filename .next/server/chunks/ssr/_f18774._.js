module.exports = {

"[project]/lib/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
    profileImage: "/images/testimonial-08.jpg"
};
}}),
"[project]/app/profile/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProfilePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
function ProfilePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex justify-center items-center bg-blue-950 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
<<<<<<< Updated upstream
            className: "bg-white p-8 rounded-3xl shadow-xl w-full max-w-2xl z-10 flex flex-col items-center text-center",
=======
            className: "bg-white p-3 rounded-3xl shadow-xl w-full max-w-2xl z-10 flex flex-col items-center text-center",
>>>>>>> Stashed changes
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://i.pinimg.com/736x/5c/34/e0/5c34e0df01f848f0efddaf85cf01a0c3.jpg",
                        alt: "Profile",
                        className: "w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 11,
<<<<<<< Updated upstream
                        columnNumber: 11
=======
                        columnNumber: 1
>>>>>>> Stashed changes
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 10,
<<<<<<< Updated upstream
                    columnNumber: 9
=======
                    columnNumber: 1
>>>>>>> Stashed changes
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-bold text-blue-800 mb-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].name
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 19,
<<<<<<< Updated upstream
                    columnNumber: 9
=======
                    columnNumber: 1
>>>>>>> Stashed changes
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-700 text-lg space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-blue-800",
                                    children: "Email:"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 23,
<<<<<<< Updated upstream
                                    columnNumber: 14
=======
                                    columnNumber: 4
>>>>>>> Stashed changes
                                }, this),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 23,
<<<<<<< Updated upstream
                            columnNumber: 11
=======
                            columnNumber: 1
>>>>>>> Stashed changes
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-blue-800",
                                    children: "Phone:"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 24,
<<<<<<< Updated upstream
                                    columnNumber: 14
=======
                                    columnNumber: 4
>>>>>>> Stashed changes
                                }, this),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].phone
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 24,
<<<<<<< Updated upstream
                            columnNumber: 11
=======
                            columnNumber: 1
>>>>>>> Stashed changes
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-blue-800",
                                    children: "LinkedIn:"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 26,
<<<<<<< Updated upstream
                                    columnNumber: 13
=======
                                    columnNumber: 1
>>>>>>> Stashed changes
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].linkedin}`,
                                    className: "text-blue-500 ml-1",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].linkedin
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 27,
<<<<<<< Updated upstream
                                    columnNumber: 13
=======
                                    columnNumber: 1
>>>>>>> Stashed changes
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 25,
<<<<<<< Updated upstream
                            columnNumber: 11
=======
                            columnNumber: 1
>>>>>>> Stashed changes
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-blue-800",
                                    children: "Max Investment Value:"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 31,
<<<<<<< Updated upstream
                                    columnNumber: 14
=======
                                    columnNumber: 4
>>>>>>> Stashed changes
                                }, this),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].maxInvestmentValue
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 31,
<<<<<<< Updated upstream
                            columnNumber: 11
=======
                            columnNumber: 1
>>>>>>> Stashed changes
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-blue-800",
                                    children: "Investor Type:"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 32,
<<<<<<< Updated upstream
                                    columnNumber: 14
=======
                                    columnNumber: 4
>>>>>>> Stashed changes
                                }, this),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].investorType
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 32,
<<<<<<< Updated upstream
                            columnNumber: 11
=======
                            columnNumber: 1
>>>>>>> Stashed changes
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 22,
<<<<<<< Updated upstream
                    columnNumber: 9
=======
                    columnNumber: 1
>>>>>>> Stashed changes
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold text-blue-800 mb-4",
                            children: "Interested Markets"
                        }, void 0, false, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 37,
<<<<<<< Updated upstream
                            columnNumber: 11
=======
                            columnNumber: 1
>>>>>>> Stashed changes
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-700 text-lg space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-blue-800",
                                            children: "Clothing:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 39,
<<<<<<< Updated upstream
                                            columnNumber: 16
=======
                                            columnNumber: 4
>>>>>>> Stashed changes
                                        }, this),
                                        " Investing in apparel brands with a strong focus on sustainability."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 39,
<<<<<<< Updated upstream
                                    columnNumber: 13
=======
                                    columnNumber: 1
>>>>>>> Stashed changes
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-blue-800",
                                            children: "Healthcare:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 40,
<<<<<<< Updated upstream
                                            columnNumber: 16
=======
                                            columnNumber: 4
>>>>>>> Stashed changes
                                        }, this),
                                        " Interested in companies advancing healthcare solutions and services."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 40,
<<<<<<< Updated upstream
                                    columnNumber: 13
=======
                                    columnNumber: 1
>>>>>>> Stashed changes
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-blue-800",
                                            children: "Skincare:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.tsx",
                                            lineNumber: 41,
<<<<<<< Updated upstream
                                            columnNumber: 16
=======
                                            columnNumber: 4
>>>>>>> Stashed changes
                                        }, this),
                                        " Supporting innovative skincare products and natural solutions."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.tsx",
                                    lineNumber: 41,
<<<<<<< Updated upstream
                                    columnNumber: 13
=======
                                    columnNumber: 1
>>>>>>> Stashed changes
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/page.tsx",
                            lineNumber: 38,
<<<<<<< Updated upstream
                            columnNumber: 11
=======
                            columnNumber: 1
>>>>>>> Stashed changes
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/page.tsx",
                    lineNumber: 36,
<<<<<<< Updated upstream
                    columnNumber: 9
=======
                    columnNumber: 1
>>>>>>> Stashed changes
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/page.tsx",
            lineNumber: 8,
<<<<<<< Updated upstream
            columnNumber: 7
=======
            columnNumber: 1
>>>>>>> Stashed changes
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 6,
        columnNumber: 1
    }, this);
}
}}),
"[project]/app/profile/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_f18774._.js.map