(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_4c022f._.js", {

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
        imageUrl: "/images/pethaven.jpg"
    },
    {
        id: 11,
        name: "Bean & Brew Coffee",
        industry: "Coffee Shop",
        founded: 2021,
        targetConsumers: "Remote Workers & Coffee Lovers",
        quarterlyRevenue: "$70,000",
        employees: 9,
        riskAssessment: "72% Return",
        imageUrl: "/images/beanbrew.jpg"
    },
    {
        id: 12,
        name: "Urban Art Prints",
        industry: "Custom Art & Prints",
        founded: 2019,
        targetConsumers: "Artists & Home Decor Enthusiasts",
        quarterlyRevenue: "$50,000",
        employees: 4,
        riskAssessment: "63% Return",
        imageUrl: "/images/urbanart.jpg"
    },
    {
        id: 13,
        name: "Hometown Fitness Studio",
        industry: "Fitness & Wellness",
        founded: 2020,
        targetConsumers: "Health-Conscious Individuals",
        quarterlyRevenue: "$85,000",
        employees: 7,
        riskAssessment: "77% Return",
        imageUrl: "/images/hometownfitness.jpg"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/explore/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ExplorePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/data.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function ExplorePage() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleNext = ()=>{
        setIndex((prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"].length);
    };
    const handlePrevious = ()=>{
        setIndex((prev)=>(prev - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"].length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold mb-6 text-center text-cyan-300 drop-shadow-lg",
                children: "Explore Businesses"
            }, void 0, false, {
                fileName: "[project]/app/explore/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-xl border border-gray-700 rounded-lg shadow-xl bg-gray-800 p-6 text-center flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"][index].imageUrl,
                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"][index].name,
                        className: "w-full h-52 object-cover rounded-md mb-4 shadow-lg"
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-white mb-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"][index].name
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-cyan-400 text-lg font-medium",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"][index].industry
                    }, void 0, false, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-gray-300",
                        children: [
                            "Founded: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-teal-200",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"][index].founded
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 28,
                                columnNumber: 52
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300",
                        children: [
                            "Quarterly Revenue: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"][index].quarterlyRevenue
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 29,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300",
                        children: [
                            "Employees: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"][index].employees
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 30,
                                columnNumber: 49
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-400 font-bold text-lg mt-3",
                        children: [
                            "Risk: ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["investments"][index].riskAssessment
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/explore/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrevious,
                        className: "bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeft, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            " Previous"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-400",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/explore/page.tsx",
                                lineNumber: 38,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/explore/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/explore/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/explore/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ExplorePage, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");
_c = ExplorePage;
var _c;
__turbopack_refresh__.register(_c, "ExplorePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/explore/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_4c022f._.js.map