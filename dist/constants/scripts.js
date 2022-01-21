"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCRIPTS = void 0;
exports.SCRIPTS = {};
const raw = [
    {
        instrument_token: 13278978,
        name: "AARTIIND",
    },
    {
        instrument_token: 13279746,
        name: "ABBOTINDIA",
    },
    {
        instrument_token: 14828290,
        name: "ABCAPITAL",
    },
    {
        instrument_token: 13280002,
        name: "ABFRL",
    },
    {
        instrument_token: 13281794,
        name: "ACC",
    },
    {
        instrument_token: 13282050,
        name: "ADANIENT",
    },
    {
        instrument_token: 13282562,
        name: "ADANIPORTS",
    },
    {
        instrument_token: 13282818,
        name: "ALKEM",
    },
    {
        instrument_token: 13283074,
        name: "AMARAJABAT",
    },
    {
        instrument_token: 13283330,
        name: "AMBUJACEM",
    },
    {
        instrument_token: 13283586,
        name: "APLLTD",
    },
    {
        instrument_token: 13283842,
        name: "APOLLOHOSP",
    },
    {
        instrument_token: 13284098,
        name: "APOLLOTYRE",
    },
    {
        instrument_token: 13284354,
        name: "ASHOKLEY",
    },
    {
        instrument_token: 13284610,
        name: "ASIANPAINT",
    },
    {
        instrument_token: 13284866,
        name: "ASTRAL",
    },
    {
        instrument_token: 13285890,
        name: "ATUL",
    },
    {
        instrument_token: 13286146,
        name: "AUBANK",
    },
    {
        instrument_token: 13286402,
        name: "AUROPHARMA",
    },
    {
        instrument_token: 13286658,
        name: "AXISBANK",
    },
    {
        instrument_token: 13286914,
        name: "BAJAJ-AUTO",
    },
    {
        instrument_token: 13287170,
        name: "BAJAJFINSV",
    },
    {
        instrument_token: 13287938,
        name: "BAJFINANCE",
    },
    {
        instrument_token: 13288450,
        name: "BALKRISIND",
    },
    {
        instrument_token: 14834434,
        name: "BALRAMCHIN",
    },
    {
        instrument_token: 13288706,
        name: "BANDHANBNK",
    },
    {
        instrument_token: 13288962,
        name: "BANKBARODA",
    },
    {
        instrument_token: 13278210,
        name: "BANKNIFTY",
    },
    {
        instrument_token: 13289218,
        name: "BATAINDIA",
    },
    {
        instrument_token: 13289474,
        name: "BEL",
    },
    {
        instrument_token: 13289730,
        name: "BERGEPAINT",
    },
    {
        instrument_token: 13289986,
        name: "BHARATFORG",
    },
    {
        instrument_token: 13290242,
        name: "BHARTIARTL",
    },
    {
        instrument_token: 13291010,
        name: "BHEL",
    },
    {
        instrument_token: 13291266,
        name: "BIOCON",
    },
    {
        instrument_token: 13291522,
        name: "BOSCHLTD",
    },
    {
        instrument_token: 13291778,
        name: "BPCL",
    },
    {
        instrument_token: 13292034,
        name: "BRITANNIA",
    },
    {
        instrument_token: 13292290,
        name: "BSOFT",
    },
    {
        instrument_token: 13292546,
        name: "CADILAHC",
    },
    {
        instrument_token: 13292802,
        name: "CANBK",
    },
    {
        instrument_token: 13293058,
        name: "CANFINHOME",
    },
    {
        instrument_token: 13293314,
        name: "CHAMBLFERT",
    },
    {
        instrument_token: 13293570,
        name: "CHOLAFIN",
    },
    {
        instrument_token: 13293826,
        name: "CIPLA",
    },
    {
        instrument_token: 13294082,
        name: "COALINDIA",
    },
    {
        instrument_token: 13294338,
        name: "COFORGE",
    },
    {
        instrument_token: 13294594,
        name: "COLPAL",
    },
    {
        instrument_token: 13294850,
        name: "CONCOR",
    },
    {
        instrument_token: 13295106,
        name: "COROMANDEL",
    },
    {
        instrument_token: 13295874,
        name: "CROMPTON",
    },
    {
        instrument_token: 13296130,
        name: "CUB",
    },
    {
        instrument_token: 13296386,
        name: "CUMMINSIND",
    },
    {
        instrument_token: 13296642,
        name: "DABUR",
    },
    {
        instrument_token: 13296898,
        name: "DALBHARAT",
    },
    {
        instrument_token: 13297154,
        name: "DEEPAKNTR",
    },
    {
        instrument_token: 13297410,
        name: "DELTACORP",
    },
    {
        instrument_token: 13297666,
        name: "DIVISLAB",
    },
    {
        instrument_token: 13297922,
        name: "DIXON",
    },
    {
        instrument_token: 13298178,
        name: "DLF",
    },
    {
        instrument_token: 13298434,
        name: "DRREDDY",
    },
    {
        instrument_token: 13298690,
        name: "EICHERMOT",
    },
    {
        instrument_token: 13298946,
        name: "ESCORTS",
    },
    {
        instrument_token: 13299202,
        name: "EXIDEIND",
    },
    {
        instrument_token: 13299458,
        name: "FEDERALBNK",
    },
    {
        instrument_token: 13299714,
        name: "FSL",
    },
    {
        instrument_token: 13299970,
        name: "GAIL",
    },
    {
        instrument_token: 13300226,
        name: "GLENMARK",
    },
    {
        instrument_token: 13300482,
        name: "GMRINFRA",
    },
    {
        instrument_token: 14847490,
        name: "GNFC",
    },
    {
        instrument_token: 13300738,
        name: "GODREJCP",
    },
    {
        instrument_token: 13300994,
        name: "GODREJPROP",
    },
    {
        instrument_token: 13301250,
        name: "GRANULES",
    },
    {
        instrument_token: 13301506,
        name: "GRASIM",
    },
    {
        instrument_token: 13301762,
        name: "GSPL",
    },
    {
        instrument_token: 13302018,
        name: "GUJGASLTD",
    },
    {
        instrument_token: 13302274,
        name: "HAL",
    },
    {
        instrument_token: 13302530,
        name: "HAVELLS",
    },
    {
        instrument_token: 13302786,
        name: "HCLTECH",
    },
    {
        instrument_token: 13303042,
        name: "HDFC",
    },
    {
        instrument_token: 13303298,
        name: "HDFCAMC",
    },
    {
        instrument_token: 13303554,
        name: "HDFCBANK",
    },
    {
        instrument_token: 13303810,
        name: "HDFCLIFE",
    },
    {
        instrument_token: 13304066,
        name: "HEROMOTOCO",
    },
    {
        instrument_token: 13304322,
        name: "HINDALCO",
    },
    {
        instrument_token: 14853122,
        name: "HINDCOPPER",
    },
    {
        instrument_token: 13304578,
        name: "HINDPETRO",
    },
    {
        instrument_token: 13304834,
        name: "HINDUNILVR",
    },
    {
        instrument_token: 14854402,
        name: "HONAUT",
    },
    {
        instrument_token: 13305090,
        name: "IBULHSGFIN",
    },
    {
        instrument_token: 13305346,
        name: "ICICIBANK",
    },
    {
        instrument_token: 13305602,
        name: "ICICIGI",
    },
    {
        instrument_token: 13305858,
        name: "ICICIPRULI",
    },
    {
        instrument_token: 13306114,
        name: "IDEA",
    },
    {
        instrument_token: 14859010,
        name: "IDFC",
    },
    {
        instrument_token: 13306370,
        name: "IDFCFIRSTB",
    },
    {
        instrument_token: 13306626,
        name: "IEX",
    },
    {
        instrument_token: 13306882,
        name: "IGL",
    },
    {
        instrument_token: 13307138,
        name: "INDHOTEL",
    },
    {
        instrument_token: 13307394,
        name: "INDIACEM",
    },
    {
        instrument_token: 13307650,
        name: "INDIAMART",
    },
    {
        instrument_token: 13307906,
        name: "INDIGO",
    },
    {
        instrument_token: 13308162,
        name: "INDUSINDBK",
    },
    {
        instrument_token: 2,
        name: "INDUSINDBK",
    },
    {
        instrument_token: 13308418,
        name: "INDUSTOWER",
    },
    {
        instrument_token: 13308674,
        name: "INFY",
    },
    {
        instrument_token: 13308930,
        name: "IOC",
    },
    {
        instrument_token: 13309186,
        name: "IPCALAB",
    },
    {
        instrument_token: 13309442,
        name: "IRCTC",
    },
    {
        instrument_token: 13310722,
        name: "ITC",
    },
    {
        instrument_token: 13310978,
        name: "JINDALSTEL",
    },
    {
        instrument_token: 13312258,
        name: "JKCEMENT",
    },
    {
        instrument_token: 13312514,
        name: "JSWSTEEL",
    },
    {
        instrument_token: 13312770,
        name: "JUBLFOOD",
    },
    {
        instrument_token: 13313026,
        name: "KOTAKBANK",
    },
    {
        instrument_token: 13313282,
        name: "L&TFH",
    },
    {
        instrument_token: 13313538,
        name: "LALPATHLAB",
    },
    {
        instrument_token: 13313794,
        name: "LAURUSLABS",
    },
    {
        instrument_token: 13314050,
        name: "LICHSGFIN",
    },
    {
        instrument_token: 13314306,
        name: "LT",
    },
    {
        instrument_token: 13314562,
        name: "LTI",
    },
    {
        instrument_token: 13314818,
        name: "LTTS",
    },
    {
        instrument_token: 13315074,
        name: "LUPIN",
    },
    {
        instrument_token: 13315330,
        name: "M&M",
    },
    {
        instrument_token: 13315586,
        name: "M&MFIN",
    },
    {
        instrument_token: 13315842,
        name: "MANAPPURAM",
    },
    {
        instrument_token: 13316098,
        name: "MARICO",
    },
    {
        instrument_token: 13316354,
        name: "MARUTI",
    },
    {
        instrument_token: 13317122,
        name: "MCDOWELL-N",
    },
    {
        instrument_token: 13317378,
        name: "MCX",
    },
    {
        instrument_token: 13317634,
        name: "METROPOLIS",
    },
    {
        instrument_token: 13317890,
        name: "MFSL",
    },
    {
        instrument_token: 13318146,
        name: "MGL",
    },
    {
        instrument_token: 13318402,
        name: "MINDTREE",
    },
    {
        instrument_token: 13318658,
        name: "MOTHERSUMI",
    },
    {
        instrument_token: 13319426,
        name: "MPHASIS",
    },
    {
        instrument_token: 13319682,
        name: "MRF",
    },
    {
        instrument_token: 13319938,
        name: "MUTHOOTFIN",
    },
    {
        instrument_token: 13320194,
        name: "NAM-INDIA",
    },
    {
        instrument_token: 13320450,
        name: "NATIONALUM",
    },
    {
        instrument_token: 13320706,
        name: "NAUKRI",
    },
    {
        instrument_token: 13320962,
        name: "NAVINFLUOR",
    },
    {
        instrument_token: 14872578,
        name: "NBCC",
    },
    {
        instrument_token: 13321218,
        name: "NESTLEIND",
    },
    {
        instrument_token: 13278466,
        name: "NIFTY",
    },
    {
        instrument_token: 13321474,
        name: "NMDC",
    },
    {
        instrument_token: 13321730,
        name: "NTPC",
    },
    {
        instrument_token: 13322498,
        name: "OBEROIRLTY",
    },
    {
        instrument_token: 13322754,
        name: "OFSS",
    },
    {
        instrument_token: 13323010,
        name: "ONGC",
    },
    {
        instrument_token: 13323266,
        name: "PAGEIND",
    },
    {
        instrument_token: 13323522,
        name: "PEL",
    },
    {
        instrument_token: 13323778,
        name: "PERSISTENT",
    },
    {
        instrument_token: 13324034,
        name: "PETRONET",
    },
    {
        instrument_token: 13324290,
        name: "PFC",
    },
    {
        instrument_token: 13324546,
        name: "PFIZER",
    },
    {
        instrument_token: 13324802,
        name: "PIDILITIND",
    },
    {
        instrument_token: 13326082,
        name: "PIIND",
    },
    {
        instrument_token: 13326338,
        name: "PNB",
    },
    {
        instrument_token: 13326594,
        name: "POLYCAB",
    },
    {
        instrument_token: 13326850,
        name: "POWERGRID",
    },
    {
        instrument_token: 13327106,
        name: "PVR",
    },
    {
        instrument_token: 14877954,
        name: "RAIN",
    },
    {
        instrument_token: 13327362,
        name: "RAMCOCEM",
    },
    {
        instrument_token: 13327618,
        name: "RBLBANK",
    },
    {
        instrument_token: 13327874,
        name: "RECLTD",
    },
    {
        instrument_token: 13328642,
        name: "RELIANCE",
    },
    {
        instrument_token: 13328898,
        name: "SAIL",
    },
    {
        instrument_token: 13329154,
        name: "SBICARD",
    },
    {
        instrument_token: 13329410,
        name: "SBILIFE",
    },
    {
        instrument_token: 13329666,
        name: "SBIN",
    },
    {
        instrument_token: 13329922,
        name: "SHREECEM",
    },
    {
        instrument_token: 13330178,
        name: "SIEMENS",
    },
    {
        instrument_token: 13330434,
        name: "SRF",
    },
    {
        instrument_token: 13330690,
        name: "SRTRANSFIN",
    },
    {
        instrument_token: 13330946,
        name: "STAR",
    },
    {
        instrument_token: 13331202,
        name: "SUNPHARMA",
    },
    {
        instrument_token: 13331458,
        name: "SUNTV",
    },
    {
        instrument_token: 13331714,
        name: "SYNGENE",
    },
    {
        instrument_token: 13331970,
        name: "TATACHEM",
    },
    {
        instrument_token: 14883074,
        name: "TATACOMM",
    },
    {
        instrument_token: 13332226,
        name: "TATACONSUM",
    },
    {
        instrument_token: 13332482,
        name: "TATAMOTORS",
    },
    {
        instrument_token: 13332738,
        name: "TATAPOWER",
    },
    {
        instrument_token: 13332994,
        name: "TATASTEEL",
    },
    {
        instrument_token: 13334274,
        name: "TCS",
    },
    {
        instrument_token: 13334530,
        name: "TECHM",
    },
    {
        instrument_token: 13334786,
        name: "TITAN",
    },
    {
        instrument_token: 13335042,
        name: "TORNTPHARM",
    },
    {
        instrument_token: 13335298,
        name: "TORNTPOWER",
    },
    {
        instrument_token: 13335554,
        name: "TRENT",
    },
    {
        instrument_token: 13335810,
        name: "TVSMOTOR",
    },
    {
        instrument_token: 13336066,
        name: "UBL",
    },
    {
        instrument_token: 13336834,
        name: "ULTRACEMCO",
    },
    {
        instrument_token: 13337090,
        name: "UPL",
    },
    {
        instrument_token: 13337858,
        name: "VEDL",
    },
    {
        instrument_token: 13338114,
        name: "VOLTAS",
    },
    {
        instrument_token: 13338370,
        name: "WHIRLPOOL",
    },
    {
        instrument_token: 13338626,
        name: "WIPRO",
    },
    {
        instrument_token: 13339906,
        name: "ZEEL",
    },
];
raw.forEach(({ instrument_token, name }) => {
    exports.SCRIPTS[name] = instrument_token;
});
//# sourceMappingURL=scripts.js.map