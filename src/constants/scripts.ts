export const SCRIPTS: Record<string, number> = {};

const raw = [
  {
    instrument_token: "12477442",
    name: "NIFTY",
  },
  {
    instrument_token: "12476930",
    name: "BANKNIFTY",
  },
  {
    instrument_token: "12477698",
    name: "AARTIIND",
  },
  {
    instrument_token: "12479490",
    name: "ABFRL",
  },
  {
    instrument_token: "12479746",
    name: "ACC",
  },
  {
    instrument_token: "12480514",
    name: "ADANIENT",
  },
  {
    instrument_token: "12485634",
    name: "ADANIPORTS",
  },
  {
    instrument_token: "12485890",
    name: "ALKEM",
  },
  {
    instrument_token: "12487682",
    name: "AMARAJABAT",
  },
  {
    instrument_token: "12487938",
    name: "AMBUJACEM",
  },
  {
    instrument_token: "12488450",
    name: "APLLTD",
  },
  {
    instrument_token: "12488706",
    name: "APOLLOHOSP",
  },
  {
    instrument_token: "12491010",
    name: "APOLLOTYRE",
  },
  {
    instrument_token: "12491266",
    name: "ASHOKLEY",
  },
  {
    instrument_token: "12492546",
    name: "ASIANPAINT",
  },
  {
    instrument_token: "13213698",
    name: "ASTRAL",
  },
  {
    instrument_token: "12492802",
    name: "AUBANK",
  },
  {
    instrument_token: "12493058",
    name: "AUROPHARMA",
  },
  {
    instrument_token: "12493314",
    name: "AXISBANK",
  },
  {
    instrument_token: "12496130",
    name: "BAJAJ-AUTO",
  },
  {
    instrument_token: "12496386",
    name: "BAJAJFINSV",
  },
  {
    instrument_token: "12496642",
    name: "BAJFINANCE",
  },
  {
    instrument_token: "12496898",
    name: "BALKRISIND",
  },
  {
    instrument_token: "12497154",
    name: "BANDHANBNK",
  },
  {
    instrument_token: "12497410",
    name: "BANKBARODA",
  },
  {
    instrument_token: "12499202",
    name: "BATAINDIA",
  },
  {
    instrument_token: "12499458",
    name: "BEL",
  },
  {
    instrument_token: "12501250",
    name: "BERGEPAINT",
  },
  {
    instrument_token: "12501506",
    name: "BHARATFORG",
  },
  {
    instrument_token: "12503298",
    name: "BHARTIARTL",
  },
  {
    instrument_token: "12503554",
    name: "BHEL",
  },
  {
    instrument_token: "12506370",
    name: "BIOCON",
  },
  {
    instrument_token: "12506626",
    name: "BOSCHLTD",
  },
  {
    instrument_token: "12507394",
    name: "BPCL",
  },
  {
    instrument_token: "12507650",
    name: "BRITANNIA",
  },
  {
    instrument_token: "12507906",
    name: "CADILAHC",
  },
  {
    instrument_token: "12508162",
    name: "CANBK",
  },
  {
    instrument_token: "13730050",
    name: "CANFINHOME",
  },
  {
    instrument_token: "12508418",
    name: "CHOLAFIN",
  },
  {
    instrument_token: "12508674",
    name: "CIPLA",
  },
  {
    instrument_token: "12508930",
    name: "COALINDIA",
  },
  {
    instrument_token: "12509186",
    name: "COFORGE",
  },
  {
    instrument_token: "12509442",
    name: "COLPAL",
  },
  {
    instrument_token: "12509698",
    name: "CONCOR",
  },
  {
    instrument_token: "12516098",
    name: "COROMANDEL",
  },
  {
    instrument_token: "12516354",
    name: "CUB",
  },
  {
    instrument_token: "12516610",
    name: "CUMMINSIND",
  },
  {
    instrument_token: "12516866",
    name: "DABUR",
  },
  {
    instrument_token: "12518658",
    name: "DEEPAKNTR",
  },
  {
    instrument_token: "12518914",
    name: "DIVISLAB",
  },
  {
    instrument_token: "13733890",
    name: "DIXON",
  },
  {
    instrument_token: "12521474",
    name: "DLF",
  },
  {
    instrument_token: "12521730",
    name: "DRREDDY",
  },
  {
    instrument_token: "12525314",
    name: "EICHERMOT",
  },
  {
    instrument_token: "12525570",
    name: "ESCORTS",
  },
  {
    instrument_token: "12525826",
    name: "EXIDEIND",
  },
  {
    instrument_token: "12526082",
    name: "FEDERALBNK",
  },
  {
    instrument_token: "12477186",
    name: "FINNIFTY",
  },
  {
    instrument_token: "12528386",
    name: "GAIL",
  },
  {
    instrument_token: "12528642",
    name: "GLENMARK",
  },
  {
    instrument_token: "12530178",
    name: "GMRINFRA",
  },
  {
    instrument_token: "12530434",
    name: "GODREJCP",
  },
  {
    instrument_token: "12530690",
    name: "GODREJPROP",
  },
  {
    instrument_token: "12530946",
    name: "GRANULES",
  },
  {
    instrument_token: "12531202",
    name: "GRASIM",
  },
  {
    instrument_token: "12531458",
    name: "GUJGASLTD",
  },
  {
    instrument_token: "13738242",
    name: "HAL",
  },
  {
    instrument_token: "12531714",
    name: "HAVELLS",
  },
  {
    instrument_token: "12531970",
    name: "HCLTECH",
  },
  {
    instrument_token: "12532226",
    name: "HDFC",
  },
  {
    instrument_token: "12532482",
    name: "HDFCAMC",
  },
  {
    instrument_token: "12532738",
    name: "HDFCBANK",
  },
  {
    instrument_token: "12532994",
    name: "HDFCLIFE",
  },
  {
    instrument_token: "12533250",
    name: "HEROMOTOCO",
  },
  {
    instrument_token: "12533506",
    name: "HINDALCO",
  },
  {
    instrument_token: "12533762",
    name: "HINDPETRO",
  },
  {
    instrument_token: "12534530",
    name: "HINDUNILVR",
  },
  {
    instrument_token: "12534786",
    name: "IBULHSGFIN",
  },
  {
    instrument_token: "12535042",
    name: "ICICIBANK",
  },
  {
    instrument_token: "12535298",
    name: "ICICIGI",
  },
  {
    instrument_token: "12535554",
    name: "ICICIPRULI",
  },
  {
    instrument_token: "12535810",
    name: "IDEA",
  },
  {
    instrument_token: "12536066",
    name: "IDFCFIRSTB",
  },
  {
    instrument_token: "13743106",
    name: "IEX",
  },
  {
    instrument_token: "12536322",
    name: "IGL",
  },
  {
    instrument_token: "12537090",
    name: "INDHOTEL",
  },
  {
    instrument_token: "13744386",
    name: "INDIAMART",
  },
  {
    instrument_token: "12537346",
    name: "INDIGO",
  },
  {
    instrument_token: "12537602",
    name: "INDUSINDBK",
  },
  {
    instrument_token: "12537858",
    name: "INDUSTOWER",
  },
  {
    instrument_token: "12538114",
    name: "INFY",
  },
  {
    instrument_token: "12538370",
    name: "IOC",
  },
  {
    instrument_token: "13746434",
    name: "IPCALAB",
  },
  {
    instrument_token: "12538626",
    name: "IRCTC",
  },
  {
    instrument_token: "12538882",
    name: "ITC",
  },
  {
    instrument_token: "12539650",
    name: "JINDALSTEL",
  },
  {
    instrument_token: "12539906",
    name: "JSWSTEEL",
  },
  {
    instrument_token: "12540162",
    name: "JUBLFOOD",
  },
  {
    instrument_token: "12540418",
    name: "KOTAKBANK",
  },
  {
    instrument_token: "12540674",
    name: "L&TFH",
  },
  {
    instrument_token: "12540930",
    name: "LALPATHLAB",
  },
  {
    instrument_token: "12541186",
    name: "LICHSGFIN",
  },
  {
    instrument_token: "12541442",
    name: "LT",
  },
  {
    instrument_token: "12541698",
    name: "LTI",
  },
  {
    instrument_token: "12541954",
    name: "LTTS",
  },
  {
    instrument_token: "12542210",
    name: "LUPIN",
  },
  {
    instrument_token: "12542466",
    name: "M&M",
  },
  {
    instrument_token: "12542722",
    name: "M&MFIN",
  },
  {
    instrument_token: "12542978",
    name: "MANAPPURAM",
  },
  {
    instrument_token: "12543234",
    name: "MARICO",
  },
  {
    instrument_token: "12543490",
    name: "MARUTI",
  },
  {
    instrument_token: "12543746",
    name: "MCDOWELL-N",
  },
  {
    instrument_token: "13753602",
    name: "MCX",
  },
  {
    instrument_token: "12544514",
    name: "METROPOLIS",
  },
  {
    instrument_token: "12544770",
    name: "MFSL",
  },
  {
    instrument_token: "12545026",
    name: "MGL",
  },
  {
    instrument_token: "12545282",
    name: "MINDTREE",
  },
  {
    instrument_token: "12545538",
    name: "MOTHERSUMI",
  },
  {
    instrument_token: "12545794",
    name: "MPHASIS",
  },
  {
    instrument_token: "12546050",
    name: "MRF",
  },
  {
    instrument_token: "12546306",
    name: "MUTHOOTFIN",
  },
  {
    instrument_token: "12546562",
    name: "NAM-INDIA",
  },
  {
    instrument_token: "12551426",
    name: "NATIONALUM",
  },
  {
    instrument_token: "12551682",
    name: "NAUKRI",
  },
  {
    instrument_token: "12552962",
    name: "NAVINFLUOR",
  },
  {
    instrument_token: "12553218",
    name: "NESTLEIND",
  },
  {
    instrument_token: "12553474",
    name: "NMDC",
  },
  {
    instrument_token: "12553730",
    name: "NTPC",
  },
  {
    instrument_token: "13758210",
    name: "OFSS",
  },
  {
    instrument_token: "12553986",
    name: "ONGC",
  },
  {
    instrument_token: "12554242",
    name: "PAGEIND",
  },
  {
    instrument_token: "12554498",
    name: "PEL",
  },
  {
    instrument_token: "12554754",
    name: "PETRONET",
  },
  {
    instrument_token: "12555010",
    name: "PFC",
  },
  {
    instrument_token: "12555266",
    name: "PFIZER",
  },
  {
    instrument_token: "12555522",
    name: "PIDILITIND",
  },
  {
    instrument_token: "12555778",
    name: "PIIND",
  },
  {
    instrument_token: "12556034",
    name: "PNB",
  },
  {
    instrument_token: "13761538",
    name: "POLYCAB",
  },
  {
    instrument_token: "12556290",
    name: "POWERGRID",
  },
  {
    instrument_token: "12556546",
    name: "PVR",
  },
  {
    instrument_token: "12556802",
    name: "RAMCOCEM",
  },
  {
    instrument_token: "12557058",
    name: "RBLBANK",
  },
  {
    instrument_token: "12557314",
    name: "RECLTD",
  },
  {
    instrument_token: "12557570",
    name: "RELIANCE",
  },
  {
    instrument_token: "12557826",
    name: "SAIL",
  },
  {
    instrument_token: "12558082",
    name: "SBILIFE",
  },
  {
    instrument_token: "12558338",
    name: "SBIN",
  },
  {
    instrument_token: "12558594",
    name: "SHREECEM",
  },
  {
    instrument_token: "12558850",
    name: "SIEMENS",
  },
  {
    instrument_token: "12559106",
    name: "SRF",
  },
  {
    instrument_token: "12559362",
    name: "SRTRANSFIN",
  },
  {
    instrument_token: "13288194",
    name: "STAR",
  },
  {
    instrument_token: "12559618",
    name: "SUNPHARMA",
  },
  {
    instrument_token: "12559874",
    name: "SUNTV",
  },
  {
    instrument_token: "13766658",
    name: "SYNGENE",
  },
  {
    instrument_token: "12560130",
    name: "TATACHEM",
  },
  {
    instrument_token: "12560386",
    name: "TATACONSUM",
  },
  {
    instrument_token: "12560642",
    name: "TATAMOTORS",
  },
  {
    instrument_token: "12560898",
    name: "TATAPOWER",
  },
  {
    instrument_token: "12561154",
    name: "TATASTEEL",
  },
  {
    instrument_token: "12568834",
    name: "TCS",
  },
  {
    instrument_token: "12569090",
    name: "TECHM",
  },
  {
    instrument_token: "12569346",
    name: "TITAN",
  },
  {
    instrument_token: "12569602",
    name: "TORNTPHARM",
  },
  {
    instrument_token: "12569858",
    name: "TORNTPOWER",
  },
  {
    instrument_token: "12570114",
    name: "TRENT",
  },
  {
    instrument_token: "12570370",
    name: "TVSMOTOR",
  },
  {
    instrument_token: "12570626",
    name: "UBL",
  },
  {
    instrument_token: "12570882",
    name: "ULTRACEMCO",
  },
  {
    instrument_token: "12571138",
    name: "UPL",
  },
  {
    instrument_token: "12572418",
    name: "VEDL",
  },
  {
    instrument_token: "12572674",
    name: "VOLTAS",
  },
  {
    instrument_token: "12572930",
    name: "WIPRO",
  },
  {
    instrument_token: "12573186",
    name: "ZEEL",
  },
];

raw.forEach(({ instrument_token, name }) => {
  SCRIPTS[name] = parseInt(instrument_token);
});
