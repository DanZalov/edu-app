declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGOURI: string
      BACKENDURI: string
      NODE_ENV?: 'development' | 'production' | 'test'
      TZ?: string | undefined
    }
  }
}

export {}
