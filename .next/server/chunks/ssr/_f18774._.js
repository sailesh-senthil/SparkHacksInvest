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
    profileImage: "/images/investor.jpg"
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
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Investor Profile"
            }, void 0, false, {
                fileName: "[project]/app/profile/page.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].profileImage,
                        alt: "Investor",
                        className: "w-24 h-24 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].name
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Email: ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].email
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Phone: ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "LinkedIn: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].linkedin}`,
                                        className: "text-blue-500",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].linkedin
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.tsx",
                                        lineNumber: 14,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Max Investment Value: ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].maxInvestmentValue
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Investor Type: ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investorProfile"].investorType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.tsx",
                                lineNumber: 16,
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
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/profile/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_f18774._.js.map