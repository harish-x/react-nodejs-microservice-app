import dotenv from 'dotenv';
import path from 'path'
dotenv.config({ path: path.resolve(__dirname,'..', '.env') });

if (process.env.ENABLE_APM === '1') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('elastic-apm-node').start({
    serviceName: 'jobber-review',
    serverUrl: process.env.ELASTIC_APM_SERVER_URL,
    secretToken: process.env.ELASTIC_APM_SECRET_TOKEN,
    environment: process.env.NODE_ENV,
    active: true,
    captureBody: 'all',
    errorOnAbortedRequests: true,
    captureErrorLogStackTraces: 'always'
  });
}

class Config {
  public NODE_ENV: string | undefined;
  public RABBITMQ_ENDPOINT: string | undefined;
  public JWT_TOKEN: string | undefined;
  public GATEWAY_JWT_TOKEN: string | undefined;
  public API_GATEWAY_URL: string | undefined;
  public CLIENT_URL:string | undefined;
  public ELASTIC_SEARCH_URL: string | undefined;
  public DATABASE_NAME: string | undefined;
  public DATABASE_PASSWORD: string | undefined;
  public DATABASE_USER: string | undefined;
  public DATABASE_HOST: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.RABBITMQ_ENDPOINT = process.env.RABBITMQ_ENDPOINT || '';
    this.JWT_TOKEN = process.env.JWT_TOKEN || '';
    this.GATEWAY_JWT_TOKEN = process.env.GATEWAY_JWT_TOKEN || '';
    this.API_GATEWAY_URL = process.env.API_GATEWAY_URL || '';
    this.ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
    this.DATABASE_NAME = process.env.DATABASE_NAME || '';
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
    this.DATABASE_USER = process.env.DATABASE_USER || '';
    this.DATABASE_HOST = process.env.DATABASE_HOST || '';
  }

  
}

export const config: Config = new Config();