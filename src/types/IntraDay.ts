export default interface IntraDay {
  volume: {
    value: number;
    lastUpdated: number;
  };
  symbolsTraded: {
    value: number;
    lastUpdated: number;
  };
  routedVolume: {
    value: number;
    lastUpdated: number;
  };
  notional: {
    value: number;
    lastUpdated: number;
  };
  marketShare: {
    value: number;
    lastUpdated: number;
  };
}

export interface IntradayPrices {
  date: Date;
  /** Formatted as HHmm */
  minute: string;
  /** A human readable format of the date depending on the range. */
  label: string;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  marktOpen: number;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  marketClose: number;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  marktHigh: number;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  marketLow: number;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  marketAverage: number;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  marketVolume: number;
  /** 15 minute delayed data. Total notional value during the minute for trades across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  marketNotional: number;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute.  */
  marketNumberOfTrades: number;
  /** 15 minute delayed data. Number of trades during the minute across all markets. This represents data from all markets. If the value is null, then the market did not trade during the minute. */
  marketChangeOverTime: number;
  high: number;
  low: number;
  /**  IEX only data. First price during the minute on IEX.*/
  open: number;
  /** IEX only data. Last price during the minute on IEX.*/
  close: number;
  /** IEX only data. Average price during the minute for trades on IEX.  */
  average: number;
  /**  IEX only data. Total volume during the minute on IEX. */
  volume: number;
  /** IEX only data. Total notional value during the minute for trades on IEX. */
  notional: number;
  /** IEX only data. Number of trades during the minute on IEX. */
  numberOfTrades: number;
  /** Percent change of each interval relative to first value. Useful for comparing multiple stocks. */
  changeOverTime: number;
}

export interface IntradayPricesParams {
  /** boolean. Limits the return of intraday prices to IEX only data. */
  chartIEXOnly?: boolean;
  /**  boolean. If true, chart will reset at midnight instead of the default behavior of 9:30am ET. */
  chartReset?: boolean;
  /** boolean. If true, runs a polyline simplification using the Douglas-Peucker algorithm. This is useful if plotting sparkline charts. */
  chartSimplify?: boolean;
  /**  number. If passed, chart data will return every Nth element as defined by chartInterval */
  chartInterval?: number;
  /** boolean. If true, changeOverTime and marketChangeOverTime will be relative to previous day close instead of the first value. */
  changeFromClose?: boolean;
  /** boolean., boolean. By default, all market prefixed fields are 15 minute delayed, meaning the most recent 15 objects will be null. If this parameter is passed as true, all market prefixed fields that are null will be populated with IEX data if available. **/
  chartIEXWhenNull?: boolean;
  /** If passed, chart data will return the last N elements from the time period defined by the range parameter */
  chartLast?: number;
  /** 
      Formatted as YYYYMMDD. This can be used for batch calls when range is 1d or date. */
  exactDate?: string;
}
