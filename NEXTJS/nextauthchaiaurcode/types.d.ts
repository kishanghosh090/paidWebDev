declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
    }
  }
}

// declare jwt
declare module "next-auth" {
  interface JWT {
    _id: string;
    email: string;
  }
}

export {};
