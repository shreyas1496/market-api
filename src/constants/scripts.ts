export const SCRIPTS: Record<string, number> = {};

const raw = [
  {
    "instrument_token": 16079362,
    "name": "AARTIIND"
  },
  {
    "instrument_token": 16092418,
    "name": "ABB"
  },
  {
    "instrument_token": 16092674,
    "name": "ABBOTINDIA"
  },
  {
    "instrument_token": 16092930,
    "name": "ABCAPITAL"
  },
  {
    "instrument_token": 16093186,
    "name": "ABFRL"
  },
  {
    "instrument_token": 16112386,
    "name": "ACC"
  },
  {
    "instrument_token": 16112642,
    "name": "ADANIENT"
  },
  {
    "instrument_token": 16112898,
    "name": "ADANIPORTS"
  },
  {
    "instrument_token": 16113154,
    "name": "ALKEM"
  },
  {
    "instrument_token": 16113410,
    "name": "AMARAJABAT"
  },
  {
    "instrument_token": 16113666,
    "name": "AMBUJACEM"
  },
  {
    "instrument_token": 16129282,
    "name": "APOLLOHOSP"
  },
  {
    "instrument_token": 16341506,
    "name": "APOLLOTYRE"
  },
  {
    "instrument_token": 16347650,
    "name": "ASHOKLEY"
  },
  {
    "instrument_token": 16347906,
    "name": "ASIANPAINT"
  },
  {
    "instrument_token": 16349186,
    "name": "ASTRAL"
  },
  {
    "instrument_token": 16349442,
    "name": "ATUL"
  },
  {
    "instrument_token": 16350210,
    "name": "AUBANK"
  },
  {
    "instrument_token": 16350466,
    "name": "AUROPHARMA"
  },
  {
    "instrument_token": 16351234,
    "name": "AXISBANK"
  },
  {
    "instrument_token": 16351490,
    "name": "BAJAJ-AUTO"
  },
  {
    "instrument_token": 16351746,
    "name": "BAJAJFINSV"
  },
  {
    "instrument_token": 16352002,
    "name": "BAJFINANCE"
  },
  {
    "instrument_token": 16352258,
    "name": "BALKRISIND"
  },
  {
    "instrument_token": 16352514,
    "name": "BALRAMCHIN"
  },
  {
    "instrument_token": 16352770,
    "name": "BANDHANBNK"
  },
  {
    "instrument_token": 16353026,
    "name": "BANKBARODA"
  },
  {
    "instrument_token": 16078850,
    "name": "BANKNIFTY"
  },
  {
    "instrument_token": 16353282,
    "name": "BATAINDIA"
  },
  {
    "instrument_token": 16353538,
    "name": "BEL"
  },
  {
    "instrument_token": 16353794,
    "name": "BERGEPAINT"
  },
  {
    "instrument_token": 16354050,
    "name": "BHARATFORG"
  },
  {
    "instrument_token": 16354306,
    "name": "BHARTIARTL"
  },
  {
    "instrument_token": 16355074,
    "name": "BHEL"
  },
  {
    "instrument_token": 16355330,
    "name": "BIOCON"
  },
  {
    "instrument_token": 16355586,
    "name": "BOSCHLTD"
  },
  {
    "instrument_token": 16355842,
    "name": "BPCL"
  },
  {
    "instrument_token": 16356610,
    "name": "BRITANNIA"
  },
  {
    "instrument_token": 16356866,
    "name": "BSOFT"
  },
  {
    "instrument_token": 16357122,
    "name": "CANBK"
  },
  {
    "instrument_token": 16359170,
    "name": "CANFINHOME"
  },
  {
    "instrument_token": 16359426,
    "name": "CHAMBLFERT"
  },
  {
    "instrument_token": 16359682,
    "name": "CHOLAFIN"
  },
  {
    "instrument_token": 16359938,
    "name": "CIPLA"
  },
  {
    "instrument_token": 16360194,
    "name": "COALINDIA"
  },
  {
    "instrument_token": 16360450,
    "name": "COFORGE"
  },
  {
    "instrument_token": 16361218,
    "name": "COLPAL"
  },
  {
    "instrument_token": 16361474,
    "name": "CONCOR"
  },
  {
    "instrument_token": 16365058,
    "name": "COROMANDEL"
  },
  {
    "instrument_token": 16365314,
    "name": "CROMPTON"
  },
  {
    "instrument_token": 16366082,
    "name": "CUB"
  },
  {
    "instrument_token": 16366338,
    "name": "CUMMINSIND"
  },
  {
    "instrument_token": 16366594,
    "name": "DABUR"
  },
  {
    "instrument_token": 16366850,
    "name": "DALBHARAT"
  },
  {
    "instrument_token": 16367106,
    "name": "DEEPAKNTR"
  },
  {
    "instrument_token": 16369410,
    "name": "DELTACORP"
  },
  {
    "instrument_token": 16369666,
    "name": "DIVISLAB"
  },
  {
    "instrument_token": 16370178,
    "name": "DIXON"
  },
  {
    "instrument_token": 16371970,
    "name": "DLF"
  },
  {
    "instrument_token": 16372226,
    "name": "DRREDDY"
  },
  {
    "instrument_token": 16372482,
    "name": "EICHERMOT"
  },
  {
    "instrument_token": 16372738,
    "name": "ESCORTS"
  },
  {
    "instrument_token": 16374018,
    "name": "EXIDEIND"
  },
  {
    "instrument_token": 16374274,
    "name": "FEDERALBNK"
  },
  {
    "instrument_token": 21421314,
    "name": "FINNIFTY"
  },
  {
    "instrument_token": 16375298,
    "name": "FSL"
  },
  {
    "instrument_token": 16375554,
    "name": "GAIL"
  },
  {
    "instrument_token": 16377346,
    "name": "GLENMARK"
  },
  {
    "instrument_token": 16377602,
    "name": "GMRINFRA"
  },
  {
    "instrument_token": 16377858,
    "name": "GNFC"
  },
  {
    "instrument_token": 16378114,
    "name": "GODREJCP"
  },
  {
    "instrument_token": 16378882,
    "name": "GODREJPROP"
  },
  {
    "instrument_token": 16379138,
    "name": "GRANULES"
  },
  {
    "instrument_token": 16379394,
    "name": "GRASIM"
  },
  {
    "instrument_token": 16379650,
    "name": "GUJGASLTD"
  },
  {
    "instrument_token": 16379906,
    "name": "HAL"
  },
  {
    "instrument_token": 16380162,
    "name": "HAVELLS"
  },
  {
    "instrument_token": 16380418,
    "name": "HCLTECH"
  },
  {
    "instrument_token": 16380674,
    "name": "HDFC"
  },
  {
    "instrument_token": 16380930,
    "name": "HDFCAMC"
  },
  {
    "instrument_token": 16381442,
    "name": "HDFCBANK"
  },
  {
    "instrument_token": 16381698,
    "name": "HDFCLIFE"
  },
  {
    "instrument_token": 16381954,
    "name": "HEROMOTOCO"
  },
  {
    "instrument_token": 16382722,
    "name": "HINDALCO"
  },
  {
    "instrument_token": 16385538,
    "name": "HINDCOPPER"
  },
  {
    "instrument_token": 16385794,
    "name": "HINDPETRO"
  },
  {
    "instrument_token": 16386050,
    "name": "HINDUNILVR"
  },
  {
    "instrument_token": 16386818,
    "name": "HONAUT"
  },
  {
    "instrument_token": 16387074,
    "name": "IBULHSGFIN"
  },
  {
    "instrument_token": 16388866,
    "name": "ICICIBANK"
  },
  {
    "instrument_token": 16389634,
    "name": "ICICIGI"
  },
  {
    "instrument_token": 16389890,
    "name": "ICICIPRULI"
  },
  {
    "instrument_token": 16390146,
    "name": "IDEA"
  },
  {
    "instrument_token": 16390402,
    "name": "IDFC"
  },
  {
    "instrument_token": 16390658,
    "name": "IDFCFIRSTB"
  },
  {
    "instrument_token": 16390914,
    "name": "IEX"
  },
  {
    "instrument_token": 16391170,
    "name": "IGL"
  },
  {
    "instrument_token": 16392450,
    "name": "INDHOTEL"
  },
  {
    "instrument_token": 16392706,
    "name": "INDIACEM"
  },
  {
    "instrument_token": 16392962,
    "name": "INDIAMART"
  },
  {
    "instrument_token": 16393218,
    "name": "INDIGO"
  },
  {
    "instrument_token": 16393474,
    "name": "INDUSINDBK"
  },
  {
    "instrument_token": 16393730,
    "name": "INDUSTOWER"
  },
  {
    "instrument_token": 16393986,
    "name": "INFY"
  },
  {
    "instrument_token": 16394242,
    "name": "INTELLECT"
  },
  {
    "instrument_token": 16396034,
    "name": "IOC"
  },
  {
    "instrument_token": 16396290,
    "name": "IPCALAB"
  },
  {
    "instrument_token": 16398082,
    "name": "IRCTC"
  },
  {
    "instrument_token": 17568002,
    "name": "ITC"
  },
  {
    "instrument_token": 17568258,
    "name": "JINDALSTEL"
  },
  {
    "instrument_token": 17568514,
    "name": "JKCEMENT"
  },
  {
    "instrument_token": 17568770,
    "name": "JSWSTEEL"
  },
  {
    "instrument_token": 17571330,
    "name": "JUBLFOOD"
  },
  {
    "instrument_token": 17571586,
    "name": "KOTAKBANK"
  },
  {
    "instrument_token": 17571842,
    "name": "L&TFH"
  },
  {
    "instrument_token": 17572098,
    "name": "LALPATHLAB"
  },
  {
    "instrument_token": 17572354,
    "name": "LAURUSLABS"
  },
  {
    "instrument_token": 17574658,
    "name": "LICHSGFIN"
  },
  {
    "instrument_token": 17574914,
    "name": "LT"
  },
  {
    "instrument_token": 17575170,
    "name": "LTI"
  },
  {
    "instrument_token": 17575426,
    "name": "LTTS"
  },
  {
    "instrument_token": 17575682,
    "name": "LUPIN"
  },
  {
    "instrument_token": 17575938,
    "name": "M&M"
  },
  {
    "instrument_token": 17577218,
    "name": "M&MFIN"
  },
  {
    "instrument_token": 17577474,
    "name": "MANAPPURAM"
  },
  {
    "instrument_token": 17577730,
    "name": "MARICO"
  },
  {
    "instrument_token": 17577986,
    "name": "MARUTI"
  },
  {
    "instrument_token": 17585666,
    "name": "MCDOWELL-N"
  },
  {
    "instrument_token": 17585922,
    "name": "MCX"
  },
  {
    "instrument_token": 17586946,
    "name": "METROPOLIS"
  },
  {
    "instrument_token": 17587202,
    "name": "MFSL"
  },
  {
    "instrument_token": 17587714,
    "name": "MGL"
  },
  {
    "instrument_token": 9440002,
    "name": "MIDCPNIFTY"
  },
  {
    "instrument_token": 11318786,
    "name": "MIDCPNIFTY"
  },
  {
    "instrument_token": 12303362,
    "name": "MIDCPNIFTY"
  },
  {
    "instrument_token": 21421570,
    "name": "MIDCPNIFTY"
  },
  {
    "instrument_token": 17587970,
    "name": "MINDTREE"
  },
  {
    "instrument_token": 17588226,
    "name": "MOTHERSON"
  },
  {
    "instrument_token": 17588482,
    "name": "MPHASIS"
  },
  {
    "instrument_token": 17588738,
    "name": "MRF"
  },
  {
    "instrument_token": 17588994,
    "name": "MUTHOOTFIN"
  },
  {
    "instrument_token": 17589250,
    "name": "NATIONALUM"
  },
  {
    "instrument_token": 17589506,
    "name": "NAUKRI"
  },
  {
    "instrument_token": 17589762,
    "name": "NAVINFLUOR"
  },
  {
    "instrument_token": 17590018,
    "name": "NESTLEIND"
  },
  {
    "instrument_token": 16079106,
    "name": "NIFTY"
  },
  {
    "instrument_token": 17591042,
    "name": "NMDC"
  },
  {
    "instrument_token": 17592834,
    "name": "NTPC"
  },
  {
    "instrument_token": 17593858,
    "name": "OBEROIRLTY"
  },
  {
    "instrument_token": 17594114,
    "name": "OFSS"
  },
  {
    "instrument_token": 17594370,
    "name": "ONGC"
  },
  {
    "instrument_token": 17594626,
    "name": "PAGEIND"
  },
  {
    "instrument_token": 17594882,
    "name": "PEL"
  },
  {
    "instrument_token": 17596930,
    "name": "PERSISTENT"
  },
  {
    "instrument_token": 17597186,
    "name": "PETRONET"
  },
  {
    "instrument_token": 17597442,
    "name": "PFC"
  },
  {
    "instrument_token": 17597698,
    "name": "PIDILITIND"
  },
  {
    "instrument_token": 17597954,
    "name": "PIIND"
  },
  {
    "instrument_token": 17598210,
    "name": "PNB"
  },
  {
    "instrument_token": 17598466,
    "name": "POLYCAB"
  },
  {
    "instrument_token": 17598722,
    "name": "POWERGRID"
  },
  {
    "instrument_token": 17598978,
    "name": "PVR"
  },
  {
    "instrument_token": 17599234,
    "name": "RAIN"
  },
  {
    "instrument_token": 17599490,
    "name": "RAMCOCEM"
  },
  {
    "instrument_token": 17600002,
    "name": "RBLBANK"
  },
  {
    "instrument_token": 17600258,
    "name": "RECLTD"
  },
  {
    "instrument_token": 17600514,
    "name": "RELIANCE"
  },
  {
    "instrument_token": 17600770,
    "name": "SAIL"
  },
  {
    "instrument_token": 17601026,
    "name": "SBICARD"
  },
  {
    "instrument_token": 17601282,
    "name": "SBILIFE"
  },
  {
    "instrument_token": 17601538,
    "name": "SBIN"
  },
  {
    "instrument_token": 17602306,
    "name": "SHREECEM"
  },
  {
    "instrument_token": 17602562,
    "name": "SIEMENS"
  },
  {
    "instrument_token": 17602818,
    "name": "SRF"
  },
  {
    "instrument_token": 17603074,
    "name": "SRTRANSFIN"
  },
  {
    "instrument_token": 17604354,
    "name": "SUNPHARMA"
  },
  {
    "instrument_token": 17604610,
    "name": "SUNTV"
  },
  {
    "instrument_token": 17605122,
    "name": "SYNGENE"
  },
  {
    "instrument_token": 17605890,
    "name": "TATACHEM"
  },
  {
    "instrument_token": 17606146,
    "name": "TATACOMM"
  },
  {
    "instrument_token": 17606402,
    "name": "TATACONSUM"
  },
  {
    "instrument_token": 17606658,
    "name": "TATAMOTORS"
  },
  {
    "instrument_token": 17606914,
    "name": "TATAPOWER"
  },
  {
    "instrument_token": 17607170,
    "name": "TATASTEEL"
  },
  {
    "instrument_token": 17607426,
    "name": "TCS"
  },
  {
    "instrument_token": 17607682,
    "name": "TECHM"
  },
  {
    "instrument_token": 17609218,
    "name": "TITAN"
  },
  {
    "instrument_token": 17609474,
    "name": "TORNTPHARM"
  },
  {
    "instrument_token": 17609730,
    "name": "TORNTPOWER"
  },
  {
    "instrument_token": 17609986,
    "name": "TRENT"
  },
  {
    "instrument_token": 17612034,
    "name": "TVSMOTOR"
  },
  {
    "instrument_token": 17612546,
    "name": "UBL"
  },
  {
    "instrument_token": 17612802,
    "name": "ULTRACEMCO"
  },
  {
    "instrument_token": 17613058,
    "name": "UPL"
  },
  {
    "instrument_token": 17613314,
    "name": "VEDL"
  },
  {
    "instrument_token": 17613570,
    "name": "VOLTAS"
  },
  {
    "instrument_token": 17618178,
    "name": "WHIRLPOOL"
  },
  {
    "instrument_token": 17618434,
    "name": "WIPRO"
  },
  {
    "instrument_token": 17619202,
    "name": "ZEEL"
  },
  {
    "instrument_token": 17619458,
    "name": "ZYDUSLIFE"
  }
];
raw.forEach(({ instrument_token, name }) => {
  SCRIPTS[name] = instrument_token;
});
