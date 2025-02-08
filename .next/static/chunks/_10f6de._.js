(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_10f6de._.js", {

"[project]/utils/useMousePosition.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useMousePosition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
function useMousePosition() {
    _s();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMousePosition.useEffect": ()=>{
            const handleMouseMove = {
                "useMousePosition.useEffect.handleMouseMove": (event)=>{
                    setMousePosition({
                        x: event.clientX,
                        y: event.clientY
                    });
                }
            }["useMousePosition.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "useMousePosition.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                }
            })["useMousePosition.useEffect"];
        }
    }["useMousePosition.useEffect"], []);
    return mousePosition;
}
_s(useMousePosition, "xsZ4oXLkOP0KnqTwAbN+/ZVPhrg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/spotlight.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Spotlight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useMousePosition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/useMousePosition.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function Spotlight({ children, className = "" }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useMousePosition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const containerSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        w: 0,
        h: 0
    });
    const [boxes, setBoxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Spotlight.useEffect": ()=>{
            containerRef.current && setBoxes(Array.from(containerRef.current.children).map({
                "Spotlight.useEffect": (el)=>el
            }["Spotlight.useEffect"]));
        }
    }["Spotlight.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Spotlight.useEffect": ()=>{
            initContainer();
            window.addEventListener("resize", initContainer);
            return ({
                "Spotlight.useEffect": ()=>{
                    window.removeEventListener("resize", initContainer);
                }
            })["Spotlight.useEffect"];
        }
    }["Spotlight.useEffect"], [
        boxes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Spotlight.useEffect": ()=>{
            onMouseMove();
        }
    }["Spotlight.useEffect"], [
        mousePosition
    ]);
    const initContainer = ()=>{
        if (containerRef.current) {
            containerSize.current.w = containerRef.current.offsetWidth;
            containerSize.current.h = containerRef.current.offsetHeight;
        }
    };
    const onMouseMove = ()=>{
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const { w, h } = containerSize.current;
            const x = mousePosition.x - rect.left;
            const y = mousePosition.y - rect.top;
            const inside = x < w && x > 0 && y < h && y > 0;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
                boxes.forEach((box)=>{
                    const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
                    const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
                    box.style.setProperty("--mouse-x", `${boxX}px`);
                    box.style.setProperty("--mouse-y", `${boxY}px`);
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        ref: containerRef,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/spotlight.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Spotlight, "a//05SgrhFSg2Rz99J6Sv2yAuwo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useMousePosition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Spotlight;
var _c;
__turbopack_refresh__.register(_c, "Spotlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/useMasonry.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useMasonry = ()=>{
    _s();
    const masonryContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMasonry.useEffect": ()=>{
            if (masonryContainer.current) {
                const masonryItem = Array.from(masonryContainer.current.children);
                setItems(masonryItem);
            }
        }
    }["useMasonry.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMasonry.useEffect": ()=>{
            const handleMasonry = {
                "useMasonry.useEffect.handleMasonry": ()=>{
                    if (!items || items.length < 1) return;
                    let gapSize = 0;
                    if (masonryContainer.current) {
                        gapSize = parseInt(window.getComputedStyle(masonryContainer.current).getPropertyValue("grid-row-gap"));
                    }
                    items.forEach({
                        "useMasonry.useEffect.handleMasonry": (el)=>{
                            if (!(el instanceof HTMLElement)) return;
                            let previous = el.previousSibling;
                            while(previous){
                                if (previous.nodeType === 1) {
                                    el.style.marginTop = "0";
                                    if (previous instanceof HTMLElement && elementLeft(previous) === elementLeft(el)) {
                                        el.style.marginTop = -(elementTop(el) - elementBottom(previous) - gapSize) + "px";
                                        break;
                                    }
                                }
                                previous = previous.previousSibling;
                            }
                        }
                    }["useMasonry.useEffect.handleMasonry"]);
                }
            }["useMasonry.useEffect.handleMasonry"];
            handleMasonry();
            window.addEventListener("resize", handleMasonry);
            return ({
                "useMasonry.useEffect": ()=>{
                    window.removeEventListener("resize", handleMasonry);
                }
            })["useMasonry.useEffect"];
        }
    }["useMasonry.useEffect"], [
        items
    ]);
    const elementLeft = (el)=>{
        return el.getBoundingClientRect().left;
    };
    const elementTop = (el)=>{
        return el.getBoundingClientRect().top + window.scrollY;
    };
    const elementBottom = (el)=>{
        return el.getBoundingClientRect().bottom + window.scrollY;
    };
    return masonryContainer;
};
_s(useMasonry, "JqjvWFB2Zu+EGV2Ae4iCzy48TdQ=");
const __TURBOPACK__default__export__ = useMasonry;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/testimonials.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Testimonial": (()=>Testimonial),
    "default": (()=>Testimonials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useMasonry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/useMasonry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-01.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-02.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-03.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-04.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-05.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-06.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-07.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-08.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/investor-09.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-01.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-02.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-03.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-04.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-05.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-06.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-07.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-08.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/images/startup-logo-09.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const testimonials = [
    {
        img: TestimonialImg01,
        clientImg: ClientImg01,
        name: "Sophia R.",
        company: "TechNest AI",
        content: "InvestMatch helped me secure funding within weeks! The AI-driven insights allowed me to connect with investors who believed in my vision.",
        categories: [
            1,
            3,
            5
        ]
    },
    {
        img: TestimonialImg02,
        clientImg: ClientImg02,
        name: "James T.",
        company: "Venture Capitalist",
        content: "I've invested in multiple startups, but this platform made due diligence effortless. Data-driven insights saved me hours of research.",
        categories: [
            1,
            2,
            4
        ]
    },
    {
        img: TestimonialImg03,
        clientImg: ClientImg03,
        name: "Olivia M.",
        company: "FinTech Hub",
        content: "Our startup struggled to get visibility, but InvestMatch changed everything. We met investors aligned with our mission and secured funding fast!",
        categories: [
            1,
            2,
            5
        ]
    },
    {
        img: TestimonialImg04,
        clientImg: ClientImg04,
        name: "Daniel K.",
        company: "Angel Investor",
        content: "Investing has never been easier! The startup analytics and AI-driven recommendations make it simple to identify high-potential companies.",
        categories: [
            1,
            4
        ]
    },
    {
        img: TestimonialImg05,
        clientImg: ClientImg05,
        name: "Eleanor V.",
        company: "GreenTech Innovations",
        content: "We were struggling to raise capital until we joined this platform. The exposure and credibility we gained helped us land multiple investors.",
        categories: [
            1,
            3,
            5
        ]
    },
    {
        img: TestimonialImg06,
        clientImg: ClientImg06,
        name: "David B.",
        company: "Series A Investor",
        content: "I’ve invested in over 15 companies using this platform. The due diligence tools and data transparency give me confidence in my choices.",
        categories: [
            1,
            3
        ]
    },
    {
        img: TestimonialImg07,
        clientImg: ClientImg07,
        name: "Lucy P.",
        company: "Crypto Startups Inc.",
        content: "I was hesitant about investing in blockchain startups, but this platform provided the risk assessment I needed to make informed decisions.",
        categories: [
            1,
            2,
            5
        ]
    },
    {
        img: TestimonialImg08,
        clientImg: ClientImg08,
        name: "Ryan S.",
        company: "EdTech Fund",
        content: "This platform is a goldmine for investors. I’ve backed 3 startups that are now scaling rapidly thanks to InvestMatch.",
        categories: [
            1,
            4
        ]
    },
    {
        img: TestimonialImg09,
        clientImg: ClientImg09,
        name: "Natalie J.",
        company: "Series B Investor",
        content: "As an early-stage investor, I love how the platform provides access to emerging companies with great potential!",
        categories: [
            1,
            2
        ]
    }
];
function Testimonials() {
    _s();
    const masonryContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useMasonry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl px-4 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t py-12 md:py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl pb-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "bg-gradient-to-r from-gray-200 to-indigo-300 bg-clip-text text-transparent text-4xl font-bold",
                            children: "What Investors & Founders Are Saying"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-indigo-200/65 mt-4",
                            children: "Trusted by **thousands of investors** and **startup founders** worldwide, our platform is revolutionizing the way early-stage funding works."
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3",
                    ref: masonryContainer,
                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonial, {
                                testimonial: testimonial,
                                category: category,
                                children: testimonial.content
                            }, void 0, false, {
                                fileName: "[project]/components/testimonials.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/testimonials.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/testimonials.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "ZApj53JF5/eml1E6mRHuM/kwIR4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$useMasonry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Testimonials;
function Testimonial({ testimonial, category, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `relative rounded-2xl bg-gray-900 p-5 transition-opacity ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: testimonial.clientImg,
                        height: 36,
                        alt: "Client logo"
                    }, void 0, false, {
                        fileName: "[project]/components/testimonials.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-indigo-200/65 before:content-['“'] after:content-['”']",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "inline-flex shrink-0 rounded-full",
                            src: testimonial.img,
                            width: 36,
                            height: 36,
                            alt: testimonial.name
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium text-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: testimonial.name
                                }, void 0, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700",
                                    children: " - "
                                }, void 0, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "text-indigo-200/65 transition-colors hover:text-indigo-500",
                                    href: "#0",
                                    children: testimonial.company
                                }, void 0, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/testimonials.tsx",
            lineNumber: 163,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/testimonials.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c1 = Testimonial;
var _c, _c1;
__turbopack_refresh__.register(_c, "Testimonials");
__turbopack_refresh__.register(_c1, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(default)/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_10f6de._.js.map