
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PasswordReset
 * 
 */
export type PasswordReset = $Result.DefaultSelection<Prisma.$PasswordResetPayload>
/**
 * Model DoctorSpecialization
 * 
 */
export type DoctorSpecialization = $Result.DefaultSelection<Prisma.$DoctorSpecializationPayload>
/**
 * Model DoctorAvailability
 * 
 */
export type DoctorAvailability = $Result.DefaultSelection<Prisma.$DoctorAvailabilityPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const AppointmentType: {
  GENERAL_PRACTICE: 'GENERAL_PRACTICE',
  CARDIOLOGY: 'CARDIOLOGY',
  VACCINATION: 'VACCINATION',
  RADIOLOGY: 'RADIOLOGY',
  DERMATOLOGY: 'DERMATOLOGY',
  PEDIATRICS: 'PEDIATRICS',
  ORTHOPEDICS: 'ORTHOPEDICS',
  DENTISTRY: 'DENTISTRY',
  NEUROLOGY: 'NEUROLOGY',
  GYNECOLOGY: 'GYNECOLOGY',
  OPHTHALMOLOGY: 'OPHTHALMOLOGY'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **PasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.PasswordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSpecialization`: Exposes CRUD operations for the **DoctorSpecialization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSpecializations
    * const doctorSpecializations = await prisma.doctorSpecialization.findMany()
    * ```
    */
  get doctorSpecialization(): Prisma.DoctorSpecializationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorAvailability`: Exposes CRUD operations for the **DoctorAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorAvailabilities
    * const doctorAvailabilities = await prisma.doctorAvailability.findMany()
    * ```
    */
  get doctorAvailability(): Prisma.DoctorAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PasswordReset: 'PasswordReset',
    DoctorSpecialization: 'DoctorSpecialization',
    DoctorAvailability: 'DoctorAvailability',
    Appointment: 'Appointment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "passwordReset" | "doctorSpecialization" | "doctorAvailability" | "appointment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PasswordReset: {
        payload: Prisma.$PasswordResetPayload<ExtArgs>
        fields: Prisma.PasswordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          findMany: {
            args: Prisma.PasswordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          create: {
            args: Prisma.PasswordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          createMany: {
            args: Prisma.PasswordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          update: {
            args: Prisma.PasswordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.PasswordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      DoctorSpecialization: {
        payload: Prisma.$DoctorSpecializationPayload<ExtArgs>
        fields: Prisma.DoctorSpecializationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSpecializationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          findFirst: {
            args: Prisma.DoctorSpecializationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          findMany: {
            args: Prisma.DoctorSpecializationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[]
          }
          create: {
            args: Prisma.DoctorSpecializationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          createMany: {
            args: Prisma.DoctorSpecializationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorSpecializationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[]
          }
          delete: {
            args: Prisma.DoctorSpecializationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          update: {
            args: Prisma.DoctorSpecializationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSpecializationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSpecializationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorSpecializationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[]
          }
          upsert: {
            args: Prisma.DoctorSpecializationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          aggregate: {
            args: Prisma.DoctorSpecializationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSpecialization>
          }
          groupBy: {
            args: Prisma.DoctorSpecializationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecializationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSpecializationCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecializationCountAggregateOutputType> | number
          }
        }
      }
      DoctorAvailability: {
        payload: Prisma.$DoctorAvailabilityPayload<ExtArgs>
        fields: Prisma.DoctorAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.DoctorAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          findMany: {
            args: Prisma.DoctorAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          create: {
            args: Prisma.DoctorAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          createMany: {
            args: Prisma.DoctorAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.DoctorAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          update: {
            args: Prisma.DoctorAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.DoctorAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.DoctorAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.DoctorAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorAvailability>
          }
          groupBy: {
            args: Prisma.DoctorAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    passwordReset?: PasswordResetOmit
    doctorSpecialization?: DoctorSpecializationOmit
    doctorAvailability?: DoctorAvailabilityOmit
    appointment?: AppointmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    availability: number
    specializations: number
    doctorAppointments: number
    patientAppointments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | UserCountOutputTypeCountAvailabilityArgs
    specializations?: boolean | UserCountOutputTypeCountSpecializationsArgs
    doctorAppointments?: boolean | UserCountOutputTypeCountDoctorAppointmentsArgs
    patientAppointments?: boolean | UserCountOutputTypeCountPatientAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorAvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpecializationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecializationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    gender: $Enums.Gender | null
    image: Uint8Array | null
    createdAt: Date | null
    updatedAt: Date | null
    isEmailVerified: boolean | null
    emailVerifiedAt: Date | null
    isPhoneVerified: boolean | null
    phoneVerifiedAt: Date | null
    isDoctorVerified: boolean | null
    doctorVerifiedAt: Date | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    gender: $Enums.Gender | null
    image: Uint8Array | null
    createdAt: Date | null
    updatedAt: Date | null
    isEmailVerified: boolean | null
    emailVerifiedAt: Date | null
    isPhoneVerified: boolean | null
    phoneVerifiedAt: Date | null
    isDoctorVerified: boolean | null
    doctorVerifiedAt: Date | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    password: number
    firstName: number
    lastName: number
    role: number
    gender: number
    image: number
    createdAt: number
    updatedAt: number
    isEmailVerified: number
    emailVerifiedAt: number
    isPhoneVerified: number
    phoneVerifiedAt: number
    isDoctorVerified: number
    doctorVerifiedAt: number
    lastLogin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    gender?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerifiedAt?: true
    isPhoneVerified?: true
    phoneVerifiedAt?: true
    isDoctorVerified?: true
    doctorVerifiedAt?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    gender?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerifiedAt?: true
    isPhoneVerified?: true
    phoneVerifiedAt?: true
    isDoctorVerified?: true
    doctorVerifiedAt?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    gender?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    emailVerifiedAt?: true
    isPhoneVerified?: true
    phoneVerifiedAt?: true
    isDoctorVerified?: true
    doctorVerifiedAt?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image: Uint8Array | null
    createdAt: Date
    updatedAt: Date
    isEmailVerified: boolean
    emailVerifiedAt: Date | null
    isPhoneVerified: boolean
    phoneVerifiedAt: Date | null
    isDoctorVerified: boolean
    doctorVerifiedAt: Date | null
    lastLogin: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    gender?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerifiedAt?: boolean
    isPhoneVerified?: boolean
    phoneVerifiedAt?: boolean
    isDoctorVerified?: boolean
    doctorVerifiedAt?: boolean
    lastLogin?: boolean
    availability?: boolean | User$availabilityArgs<ExtArgs>
    specializations?: boolean | User$specializationsArgs<ExtArgs>
    doctorAppointments?: boolean | User$doctorAppointmentsArgs<ExtArgs>
    patientAppointments?: boolean | User$patientAppointmentsArgs<ExtArgs>
    passwordReset?: boolean | User$passwordResetArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    gender?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerifiedAt?: boolean
    isPhoneVerified?: boolean
    phoneVerifiedAt?: boolean
    isDoctorVerified?: boolean
    doctorVerifiedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    gender?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerifiedAt?: boolean
    isPhoneVerified?: boolean
    phoneVerifiedAt?: boolean
    isDoctorVerified?: boolean
    doctorVerifiedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    gender?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    emailVerifiedAt?: boolean
    isPhoneVerified?: boolean
    phoneVerifiedAt?: boolean
    isDoctorVerified?: boolean
    doctorVerifiedAt?: boolean
    lastLogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "password" | "firstName" | "lastName" | "role" | "gender" | "image" | "createdAt" | "updatedAt" | "isEmailVerified" | "emailVerifiedAt" | "isPhoneVerified" | "phoneVerifiedAt" | "isDoctorVerified" | "doctorVerifiedAt" | "lastLogin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | User$availabilityArgs<ExtArgs>
    specializations?: boolean | User$specializationsArgs<ExtArgs>
    doctorAppointments?: boolean | User$doctorAppointmentsArgs<ExtArgs>
    patientAppointments?: boolean | User$patientAppointmentsArgs<ExtArgs>
    passwordReset?: boolean | User$passwordResetArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      availability: Prisma.$DoctorAvailabilityPayload<ExtArgs>[]
      specializations: Prisma.$DoctorSpecializationPayload<ExtArgs>[]
      doctorAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      patientAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      passwordReset: Prisma.$PasswordResetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      password: string
      firstName: string
      lastName: string
      role: $Enums.Role
      gender: $Enums.Gender
      image: Uint8Array | null
      createdAt: Date
      updatedAt: Date
      isEmailVerified: boolean
      emailVerifiedAt: Date | null
      isPhoneVerified: boolean
      phoneVerifiedAt: Date | null
      isDoctorVerified: boolean
      doctorVerifiedAt: Date | null
      lastLogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availability<T extends User$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specializations<T extends User$specializationsArgs<ExtArgs> = {}>(args?: Subset<T, User$specializationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorAppointments<T extends User$doctorAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientAppointments<T extends User$patientAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordReset<T extends User$passwordResetArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly image: FieldRef<"User", 'Bytes'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly isPhoneVerified: FieldRef<"User", 'Boolean'>
    readonly phoneVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly isDoctorVerified: FieldRef<"User", 'Boolean'>
    readonly doctorVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.availability
   */
  export type User$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    where?: DoctorAvailabilityWhereInput
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    cursor?: DoctorAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * User.specializations
   */
  export type User$specializationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    where?: DoctorSpecializationWhereInput
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    cursor?: DoctorSpecializationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * User.doctorAppointments
   */
  export type User$doctorAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.patientAppointments
   */
  export type User$patientAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.passwordReset
   */
  export type User$passwordResetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    where?: PasswordResetWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PasswordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordReset to aggregate.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type PasswordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetWhereInput
    orderBy?: PasswordResetOrderByWithAggregationInput | PasswordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: PasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends PasswordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type PasswordResetSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["passwordReset"]>
  export type PasswordResetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordReset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type PasswordResetGetPayload<S extends boolean | null | undefined | PasswordResetDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetPayload, S>

  type PasswordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface PasswordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordReset'], meta: { name: 'PasswordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {PasswordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetFindUniqueArgs>(args: SelectSubset<T, PasswordResetFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetFindFirstArgs>(args?: SelectSubset<T, PasswordResetFindFirstArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetFindManyArgs>(args?: SelectSubset<T, PasswordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {PasswordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends PasswordResetCreateArgs>(args: SelectSubset<T, PasswordResetCreateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {PasswordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetCreateManyArgs>(args?: SelectSubset<T, PasswordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {PasswordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {PasswordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetDeleteArgs>(args: SelectSubset<T, PasswordResetDeleteArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {PasswordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetUpdateArgs>(args: SelectSubset<T, PasswordResetUpdateArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {PasswordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetDeleteManyArgs>(args?: SelectSubset<T, PasswordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetUpdateManyArgs>(args: SelectSubset<T, PasswordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {PasswordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {PasswordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetUpsertArgs>(args: SelectSubset<T, PasswordResetUpsertArgs<ExtArgs>>): Prisma__PasswordResetClient<$Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetCountArgs>(
      args?: Subset<T, PasswordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordReset model
   */
  readonly fields: PasswordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordReset model
   */
  interface PasswordResetFieldRefs {
    readonly id: FieldRef<"PasswordReset", 'String'>
    readonly userId: FieldRef<"PasswordReset", 'String'>
    readonly token: FieldRef<"PasswordReset", 'String'>
    readonly expiresAt: FieldRef<"PasswordReset", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordReset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordReset findUnique
   */
  export type PasswordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findUniqueOrThrow
   */
  export type PasswordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset findFirst
   */
  export type PasswordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findFirstOrThrow
   */
  export type PasswordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordReset to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset findMany
   */
  export type PasswordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResets to fetch.
     */
    where?: PasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResets to fetch.
     */
    orderBy?: PasswordResetOrderByWithRelationInput | PasswordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResets.
     */
    cursor?: PasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * PasswordReset create
   */
  export type PasswordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordReset.
     */
    data: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
  }

  /**
   * PasswordReset createMany
   */
  export type PasswordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordReset createManyAndReturn
   */
  export type PasswordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResets.
     */
    data: PasswordResetCreateManyInput | PasswordResetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset update
   */
  export type PasswordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordReset.
     */
    data: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
    /**
     * Choose, which PasswordReset to update.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset updateMany
   */
  export type PasswordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
  }

  /**
   * PasswordReset updateManyAndReturn
   */
  export type PasswordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResets.
     */
    data: XOR<PasswordResetUpdateManyMutationInput, PasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResets to update
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordReset upsert
   */
  export type PasswordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordReset to update in case it exists.
     */
    where: PasswordResetWhereUniqueInput
    /**
     * In case the PasswordReset found by the `where` argument doesn't exist, create a new PasswordReset with this data.
     */
    create: XOR<PasswordResetCreateInput, PasswordResetUncheckedCreateInput>
    /**
     * In case the PasswordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetUpdateInput, PasswordResetUncheckedUpdateInput>
  }

  /**
   * PasswordReset delete
   */
  export type PasswordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
    /**
     * Filter which PasswordReset to delete.
     */
    where: PasswordResetWhereUniqueInput
  }

  /**
   * PasswordReset deleteMany
   */
  export type PasswordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResets to delete
     */
    where?: PasswordResetWhereInput
    /**
     * Limit how many PasswordResets to delete.
     */
    limit?: number
  }

  /**
   * PasswordReset without action
   */
  export type PasswordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: PasswordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: PasswordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSpecialization
   */

  export type AggregateDoctorSpecialization = {
    _count: DoctorSpecializationCountAggregateOutputType | null
    _min: DoctorSpecializationMinAggregateOutputType | null
    _max: DoctorSpecializationMaxAggregateOutputType | null
  }

  export type DoctorSpecializationMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    type: $Enums.AppointmentType | null
    createdAt: Date | null
  }

  export type DoctorSpecializationMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    type: $Enums.AppointmentType | null
    createdAt: Date | null
  }

  export type DoctorSpecializationCountAggregateOutputType = {
    id: number
    doctorId: number
    type: number
    createdAt: number
    _all: number
  }


  export type DoctorSpecializationMinAggregateInputType = {
    id?: true
    doctorId?: true
    type?: true
    createdAt?: true
  }

  export type DoctorSpecializationMaxAggregateInputType = {
    id?: true
    doctorId?: true
    type?: true
    createdAt?: true
  }

  export type DoctorSpecializationCountAggregateInputType = {
    id?: true
    doctorId?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type DoctorSpecializationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialization to aggregate.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSpecializations
    **/
    _count?: true | DoctorSpecializationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSpecializationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSpecializationMaxAggregateInputType
  }

  export type GetDoctorSpecializationAggregateType<T extends DoctorSpecializationAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSpecialization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSpecialization[P]>
      : GetScalarType<T[P], AggregateDoctorSpecialization[P]>
  }




  export type DoctorSpecializationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecializationWhereInput
    orderBy?: DoctorSpecializationOrderByWithAggregationInput | DoctorSpecializationOrderByWithAggregationInput[]
    by: DoctorSpecializationScalarFieldEnum[] | DoctorSpecializationScalarFieldEnum
    having?: DoctorSpecializationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSpecializationCountAggregateInputType | true
    _min?: DoctorSpecializationMinAggregateInputType
    _max?: DoctorSpecializationMaxAggregateInputType
  }

  export type DoctorSpecializationGroupByOutputType = {
    id: string
    doctorId: string
    type: $Enums.AppointmentType
    createdAt: Date
    _count: DoctorSpecializationCountAggregateOutputType | null
    _min: DoctorSpecializationMinAggregateOutputType | null
    _max: DoctorSpecializationMaxAggregateOutputType | null
  }

  type GetDoctorSpecializationGroupByPayload<T extends DoctorSpecializationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSpecializationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSpecializationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSpecializationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    type?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialization"]>

  export type DoctorSpecializationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    type?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialization"]>

  export type DoctorSpecializationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    type?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialization"]>

  export type DoctorSpecializationSelectScalar = {
    id?: boolean
    doctorId?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type DoctorSpecializationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "type" | "createdAt", ExtArgs["result"]["doctorSpecialization"]>
  export type DoctorSpecializationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorSpecializationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorSpecializationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorSpecializationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSpecialization"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      type: $Enums.AppointmentType
      createdAt: Date
    }, ExtArgs["result"]["doctorSpecialization"]>
    composites: {}
  }

  type DoctorSpecializationGetPayload<S extends boolean | null | undefined | DoctorSpecializationDefaultArgs> = $Result.GetResult<Prisma.$DoctorSpecializationPayload, S>

  type DoctorSpecializationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorSpecializationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSpecializationCountAggregateInputType | true
    }

  export interface DoctorSpecializationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSpecialization'], meta: { name: 'DoctorSpecialization' } }
    /**
     * Find zero or one DoctorSpecialization that matches the filter.
     * @param {DoctorSpecializationFindUniqueArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorSpecializationFindUniqueArgs>(args: SelectSubset<T, DoctorSpecializationFindUniqueArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSpecialization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorSpecializationFindUniqueOrThrowArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorSpecializationFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindFirstArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorSpecializationFindFirstArgs>(args?: SelectSubset<T, DoctorSpecializationFindFirstArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindFirstOrThrowArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorSpecializationFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSpecializations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSpecializations
     * const doctorSpecializations = await prisma.doctorSpecialization.findMany()
     * 
     * // Get first 10 DoctorSpecializations
     * const doctorSpecializations = await prisma.doctorSpecialization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorSpecializationWithIdOnly = await prisma.doctorSpecialization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorSpecializationFindManyArgs>(args?: SelectSubset<T, DoctorSpecializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSpecialization.
     * @param {DoctorSpecializationCreateArgs} args - Arguments to create a DoctorSpecialization.
     * @example
     * // Create one DoctorSpecialization
     * const DoctorSpecialization = await prisma.doctorSpecialization.create({
     *   data: {
     *     // ... data to create a DoctorSpecialization
     *   }
     * })
     * 
     */
    create<T extends DoctorSpecializationCreateArgs>(args: SelectSubset<T, DoctorSpecializationCreateArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSpecializations.
     * @param {DoctorSpecializationCreateManyArgs} args - Arguments to create many DoctorSpecializations.
     * @example
     * // Create many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorSpecializationCreateManyArgs>(args?: SelectSubset<T, DoctorSpecializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorSpecializations and returns the data saved in the database.
     * @param {DoctorSpecializationCreateManyAndReturnArgs} args - Arguments to create many DoctorSpecializations.
     * @example
     * // Create many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorSpecializations and only return the `id`
     * const doctorSpecializationWithIdOnly = await prisma.doctorSpecialization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorSpecializationCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorSpecializationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorSpecialization.
     * @param {DoctorSpecializationDeleteArgs} args - Arguments to delete one DoctorSpecialization.
     * @example
     * // Delete one DoctorSpecialization
     * const DoctorSpecialization = await prisma.doctorSpecialization.delete({
     *   where: {
     *     // ... filter to delete one DoctorSpecialization
     *   }
     * })
     * 
     */
    delete<T extends DoctorSpecializationDeleteArgs>(args: SelectSubset<T, DoctorSpecializationDeleteArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSpecialization.
     * @param {DoctorSpecializationUpdateArgs} args - Arguments to update one DoctorSpecialization.
     * @example
     * // Update one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorSpecializationUpdateArgs>(args: SelectSubset<T, DoctorSpecializationUpdateArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSpecializations.
     * @param {DoctorSpecializationDeleteManyArgs} args - Arguments to filter DoctorSpecializations to delete.
     * @example
     * // Delete a few DoctorSpecializations
     * const { count } = await prisma.doctorSpecialization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorSpecializationDeleteManyArgs>(args?: SelectSubset<T, DoctorSpecializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorSpecializationUpdateManyArgs>(args: SelectSubset<T, DoctorSpecializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecializations and returns the data updated in the database.
     * @param {DoctorSpecializationUpdateManyAndReturnArgs} args - Arguments to update many DoctorSpecializations.
     * @example
     * // Update many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorSpecializations and only return the `id`
     * const doctorSpecializationWithIdOnly = await prisma.doctorSpecialization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorSpecializationUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorSpecializationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorSpecialization.
     * @param {DoctorSpecializationUpsertArgs} args - Arguments to update or create a DoctorSpecialization.
     * @example
     * // Update or create a DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.upsert({
     *   create: {
     *     // ... data to create a DoctorSpecialization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSpecialization we want to update
     *   }
     * })
     */
    upsert<T extends DoctorSpecializationUpsertArgs>(args: SelectSubset<T, DoctorSpecializationUpsertArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSpecializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationCountArgs} args - Arguments to filter DoctorSpecializations to count.
     * @example
     * // Count the number of DoctorSpecializations
     * const count = await prisma.doctorSpecialization.count({
     *   where: {
     *     // ... the filter for the DoctorSpecializations we want to count
     *   }
     * })
    **/
    count<T extends DoctorSpecializationCountArgs>(
      args?: Subset<T, DoctorSpecializationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSpecializationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSpecialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorSpecializationAggregateArgs>(args: Subset<T, DoctorSpecializationAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecializationAggregateType<T>>

    /**
     * Group by DoctorSpecialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorSpecializationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSpecializationGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSpecializationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorSpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSpecialization model
   */
  readonly fields: DoctorSpecializationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSpecialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSpecializationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorSpecialization model
   */
  interface DoctorSpecializationFieldRefs {
    readonly id: FieldRef<"DoctorSpecialization", 'String'>
    readonly doctorId: FieldRef<"DoctorSpecialization", 'String'>
    readonly type: FieldRef<"DoctorSpecialization", 'AppointmentType'>
    readonly createdAt: FieldRef<"DoctorSpecialization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSpecialization findUnique
   */
  export type DoctorSpecializationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization findUniqueOrThrow
   */
  export type DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization findFirst
   */
  export type DoctorSpecializationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecializations.
     */
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization findFirstOrThrow
   */
  export type DoctorSpecializationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecializations.
     */
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization findMany
   */
  export type DoctorSpecializationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecializations to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization create
   */
  export type DoctorSpecializationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSpecialization.
     */
    data: XOR<DoctorSpecializationCreateInput, DoctorSpecializationUncheckedCreateInput>
  }

  /**
   * DoctorSpecialization createMany
   */
  export type DoctorSpecializationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSpecializations.
     */
    data: DoctorSpecializationCreateManyInput | DoctorSpecializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSpecialization createManyAndReturn
   */
  export type DoctorSpecializationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorSpecializations.
     */
    data: DoctorSpecializationCreateManyInput | DoctorSpecializationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSpecialization update
   */
  export type DoctorSpecializationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSpecialization.
     */
    data: XOR<DoctorSpecializationUpdateInput, DoctorSpecializationUncheckedUpdateInput>
    /**
     * Choose, which DoctorSpecialization to update.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization updateMany
   */
  export type DoctorSpecializationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSpecializations.
     */
    data: XOR<DoctorSpecializationUpdateManyMutationInput, DoctorSpecializationUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecializations to update
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to update.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization updateManyAndReturn
   */
  export type DoctorSpecializationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * The data used to update DoctorSpecializations.
     */
    data: XOR<DoctorSpecializationUpdateManyMutationInput, DoctorSpecializationUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecializations to update
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSpecialization upsert
   */
  export type DoctorSpecializationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSpecialization to update in case it exists.
     */
    where: DoctorSpecializationWhereUniqueInput
    /**
     * In case the DoctorSpecialization found by the `where` argument doesn't exist, create a new DoctorSpecialization with this data.
     */
    create: XOR<DoctorSpecializationCreateInput, DoctorSpecializationUncheckedCreateInput>
    /**
     * In case the DoctorSpecialization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSpecializationUpdateInput, DoctorSpecializationUncheckedUpdateInput>
  }

  /**
   * DoctorSpecialization delete
   */
  export type DoctorSpecializationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter which DoctorSpecialization to delete.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization deleteMany
   */
  export type DoctorSpecializationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecializations to delete
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to delete.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization without action
   */
  export type DoctorSpecializationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
  }


  /**
   * Model DoctorAvailability
   */

  export type AggregateDoctorAvailability = {
    _count: DoctorAvailabilityCountAggregateOutputType | null
    _avg: DoctorAvailabilityAvgAggregateOutputType | null
    _sum: DoctorAvailabilitySumAggregateOutputType | null
    _min: DoctorAvailabilityMinAggregateOutputType | null
    _max: DoctorAvailabilityMaxAggregateOutputType | null
  }

  export type DoctorAvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type DoctorAvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type DoctorAvailabilityMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
  }

  export type DoctorAvailabilityMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
  }

  export type DoctorAvailabilityCountAggregateOutputType = {
    id: number
    doctorId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    createdAt: number
    _all: number
  }


  export type DoctorAvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type DoctorAvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type DoctorAvailabilityMinAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type DoctorAvailabilityMaxAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type DoctorAvailabilityCountAggregateInputType = {
    id?: true
    doctorId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    _all?: true
  }

  export type DoctorAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorAvailability to aggregate.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorAvailabilities
    **/
    _count?: true | DoctorAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorAvailabilityMaxAggregateInputType
  }

  export type GetDoctorAvailabilityAggregateType<T extends DoctorAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorAvailability[P]>
      : GetScalarType<T[P], AggregateDoctorAvailability[P]>
  }




  export type DoctorAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorAvailabilityWhereInput
    orderBy?: DoctorAvailabilityOrderByWithAggregationInput | DoctorAvailabilityOrderByWithAggregationInput[]
    by: DoctorAvailabilityScalarFieldEnum[] | DoctorAvailabilityScalarFieldEnum
    having?: DoctorAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorAvailabilityCountAggregateInputType | true
    _avg?: DoctorAvailabilityAvgAggregateInputType
    _sum?: DoctorAvailabilitySumAggregateInputType
    _min?: DoctorAvailabilityMinAggregateInputType
    _max?: DoctorAvailabilityMaxAggregateInputType
  }

  export type DoctorAvailabilityGroupByOutputType = {
    id: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt: Date
    _count: DoctorAvailabilityCountAggregateOutputType | null
    _avg: DoctorAvailabilityAvgAggregateOutputType | null
    _sum: DoctorAvailabilitySumAggregateOutputType | null
    _min: DoctorAvailabilityMinAggregateOutputType | null
    _max: DoctorAvailabilityMaxAggregateOutputType | null
  }

  type GetDoctorAvailabilityGroupByPayload<T extends DoctorAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type DoctorAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectScalar = {
    id?: boolean
    doctorId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }

  export type DoctorAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "dayOfWeek" | "startTime" | "endTime" | "createdAt", ExtArgs["result"]["doctorAvailability"]>
  export type DoctorAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorAvailability"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      createdAt: Date
    }, ExtArgs["result"]["doctorAvailability"]>
    composites: {}
  }

  type DoctorAvailabilityGetPayload<S extends boolean | null | undefined | DoctorAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$DoctorAvailabilityPayload, S>

  type DoctorAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorAvailabilityCountAggregateInputType | true
    }

  export interface DoctorAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorAvailability'], meta: { name: 'DoctorAvailability' } }
    /**
     * Find zero or one DoctorAvailability that matches the filter.
     * @param {DoctorAvailabilityFindUniqueArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorAvailabilityFindUniqueArgs>(args: SelectSubset<T, DoctorAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindFirstArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorAvailabilityFindFirstArgs>(args?: SelectSubset<T, DoctorAvailabilityFindFirstArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindFirstOrThrowArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorAvailabilities
     * const doctorAvailabilities = await prisma.doctorAvailability.findMany()
     * 
     * // Get first 10 DoctorAvailabilities
     * const doctorAvailabilities = await prisma.doctorAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorAvailabilityFindManyArgs>(args?: SelectSubset<T, DoctorAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorAvailability.
     * @param {DoctorAvailabilityCreateArgs} args - Arguments to create a DoctorAvailability.
     * @example
     * // Create one DoctorAvailability
     * const DoctorAvailability = await prisma.doctorAvailability.create({
     *   data: {
     *     // ... data to create a DoctorAvailability
     *   }
     * })
     * 
     */
    create<T extends DoctorAvailabilityCreateArgs>(args: SelectSubset<T, DoctorAvailabilityCreateArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorAvailabilities.
     * @param {DoctorAvailabilityCreateManyArgs} args - Arguments to create many DoctorAvailabilities.
     * @example
     * // Create many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorAvailabilityCreateManyArgs>(args?: SelectSubset<T, DoctorAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorAvailabilities and returns the data saved in the database.
     * @param {DoctorAvailabilityCreateManyAndReturnArgs} args - Arguments to create many DoctorAvailabilities.
     * @example
     * // Create many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorAvailabilities and only return the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorAvailability.
     * @param {DoctorAvailabilityDeleteArgs} args - Arguments to delete one DoctorAvailability.
     * @example
     * // Delete one DoctorAvailability
     * const DoctorAvailability = await prisma.doctorAvailability.delete({
     *   where: {
     *     // ... filter to delete one DoctorAvailability
     *   }
     * })
     * 
     */
    delete<T extends DoctorAvailabilityDeleteArgs>(args: SelectSubset<T, DoctorAvailabilityDeleteArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorAvailability.
     * @param {DoctorAvailabilityUpdateArgs} args - Arguments to update one DoctorAvailability.
     * @example
     * // Update one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorAvailabilityUpdateArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorAvailabilities.
     * @param {DoctorAvailabilityDeleteManyArgs} args - Arguments to filter DoctorAvailabilities to delete.
     * @example
     * // Delete a few DoctorAvailabilities
     * const { count } = await prisma.doctorAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorAvailabilityDeleteManyArgs>(args?: SelectSubset<T, DoctorAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorAvailabilityUpdateManyArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorAvailabilities and returns the data updated in the database.
     * @param {DoctorAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many DoctorAvailabilities.
     * @example
     * // Update many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorAvailabilities and only return the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorAvailability.
     * @param {DoctorAvailabilityUpsertArgs} args - Arguments to update or create a DoctorAvailability.
     * @example
     * // Update or create a DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.upsert({
     *   create: {
     *     // ... data to create a DoctorAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorAvailability we want to update
     *   }
     * })
     */
    upsert<T extends DoctorAvailabilityUpsertArgs>(args: SelectSubset<T, DoctorAvailabilityUpsertArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityCountArgs} args - Arguments to filter DoctorAvailabilities to count.
     * @example
     * // Count the number of DoctorAvailabilities
     * const count = await prisma.doctorAvailability.count({
     *   where: {
     *     // ... the filter for the DoctorAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends DoctorAvailabilityCountArgs>(
      args?: Subset<T, DoctorAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAvailabilityAggregateArgs>(args: Subset<T, DoctorAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetDoctorAvailabilityAggregateType<T>>

    /**
     * Group by DoctorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: DoctorAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorAvailability model
   */
  readonly fields: DoctorAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorAvailability model
   */
  interface DoctorAvailabilityFieldRefs {
    readonly id: FieldRef<"DoctorAvailability", 'String'>
    readonly doctorId: FieldRef<"DoctorAvailability", 'String'>
    readonly dayOfWeek: FieldRef<"DoctorAvailability", 'Int'>
    readonly startTime: FieldRef<"DoctorAvailability", 'String'>
    readonly endTime: FieldRef<"DoctorAvailability", 'String'>
    readonly createdAt: FieldRef<"DoctorAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorAvailability findUnique
   */
  export type DoctorAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability findUniqueOrThrow
   */
  export type DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability findFirst
   */
  export type DoctorAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorAvailabilities.
     */
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability findFirstOrThrow
   */
  export type DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorAvailabilities.
     */
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability findMany
   */
  export type DoctorAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailabilities to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability create
   */
  export type DoctorAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorAvailability.
     */
    data: XOR<DoctorAvailabilityCreateInput, DoctorAvailabilityUncheckedCreateInput>
  }

  /**
   * DoctorAvailability createMany
   */
  export type DoctorAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorAvailabilities.
     */
    data: DoctorAvailabilityCreateManyInput | DoctorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorAvailability createManyAndReturn
   */
  export type DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorAvailabilities.
     */
    data: DoctorAvailabilityCreateManyInput | DoctorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorAvailability update
   */
  export type DoctorAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorAvailability.
     */
    data: XOR<DoctorAvailabilityUpdateInput, DoctorAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which DoctorAvailability to update.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability updateMany
   */
  export type DoctorAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorAvailabilities.
     */
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorAvailabilities to update
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to update.
     */
    limit?: number
  }

  /**
   * DoctorAvailability updateManyAndReturn
   */
  export type DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update DoctorAvailabilities.
     */
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorAvailabilities to update
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorAvailability upsert
   */
  export type DoctorAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorAvailability to update in case it exists.
     */
    where: DoctorAvailabilityWhereUniqueInput
    /**
     * In case the DoctorAvailability found by the `where` argument doesn't exist, create a new DoctorAvailability with this data.
     */
    create: XOR<DoctorAvailabilityCreateInput, DoctorAvailabilityUncheckedCreateInput>
    /**
     * In case the DoctorAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorAvailabilityUpdateInput, DoctorAvailabilityUncheckedUpdateInput>
  }

  /**
   * DoctorAvailability delete
   */
  export type DoctorAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which DoctorAvailability to delete.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability deleteMany
   */
  export type DoctorAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorAvailabilities to delete
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * DoctorAvailability without action
   */
  export type DoctorAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type AppointmentSumAggregateOutputType = {
    price: Decimal | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    status: $Enums.AppointmentStatus | null
    type: $Enums.AppointmentType | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    notes: string | null
    scheduledFor: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    status: $Enums.AppointmentStatus | null
    type: $Enums.AppointmentType | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    notes: string | null
    scheduledFor: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    doctorId: number
    patientId: number
    status: number
    type: number
    price: number
    createdAt: number
    updatedAt: number
    notes: number
    scheduledFor: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    price?: true
  }

  export type AppointmentSumAggregateInputType = {
    price?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    status?: true
    type?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
    scheduledFor?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    status?: true
    type?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
    scheduledFor?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    status?: true
    type?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
    scheduledFor?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    doctorId: string
    patientId: string
    status: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal
    createdAt: Date
    updatedAt: Date
    notes: string | null
    scheduledFor: Date | null
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    status?: boolean
    type?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    scheduledFor?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    status?: boolean
    type?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    scheduledFor?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    status?: boolean
    type?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    scheduledFor?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    status?: boolean
    type?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    scheduledFor?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "patientId" | "status" | "type" | "price" | "createdAt" | "updatedAt" | "notes" | "scheduledFor", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      patientId: string
      status: $Enums.AppointmentStatus
      type: $Enums.AppointmentType
      price: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      notes: string | null
      scheduledFor: Date | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly type: FieldRef<"Appointment", 'AppointmentType'>
    readonly price: FieldRef<"Appointment", 'Decimal'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly scheduledFor: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    gender: 'gender',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isEmailVerified: 'isEmailVerified',
    emailVerifiedAt: 'emailVerifiedAt',
    isPhoneVerified: 'isPhoneVerified',
    phoneVerifiedAt: 'phoneVerifiedAt',
    isDoctorVerified: 'isDoctorVerified',
    doctorVerifiedAt: 'doctorVerifiedAt',
    lastLogin: 'lastLogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const DoctorSpecializationScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type DoctorSpecializationScalarFieldEnum = (typeof DoctorSpecializationScalarFieldEnum)[keyof typeof DoctorSpecializationScalarFieldEnum]


  export const DoctorAvailabilityScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt'
  };

  export type DoctorAvailabilityScalarFieldEnum = (typeof DoctorAvailabilityScalarFieldEnum)[keyof typeof DoctorAvailabilityScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    patientId: 'patientId',
    status: 'status',
    type: 'type',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    notes: 'notes',
    scheduledFor: 'scheduledFor'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentType[]'
   */
  export type ListEnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    image?: BytesNullableFilter<"User"> | Uint8Array | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isPhoneVerified?: BoolFilter<"User"> | boolean
    phoneVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isDoctorVerified?: BoolFilter<"User"> | boolean
    doctorVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    availability?: DoctorAvailabilityListRelationFilter
    specializations?: DoctorSpecializationListRelationFilter
    doctorAppointments?: AppointmentListRelationFilter
    patientAppointments?: AppointmentListRelationFilter
    passwordReset?: XOR<PasswordResetNullableScalarRelationFilter, PasswordResetWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    isPhoneVerified?: SortOrder
    phoneVerifiedAt?: SortOrderInput | SortOrder
    isDoctorVerified?: SortOrder
    doctorVerifiedAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    availability?: DoctorAvailabilityOrderByRelationAggregateInput
    specializations?: DoctorSpecializationOrderByRelationAggregateInput
    doctorAppointments?: AppointmentOrderByRelationAggregateInput
    patientAppointments?: AppointmentOrderByRelationAggregateInput
    passwordReset?: PasswordResetOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    image?: BytesNullableFilter<"User"> | Uint8Array | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isPhoneVerified?: BoolFilter<"User"> | boolean
    phoneVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isDoctorVerified?: BoolFilter<"User"> | boolean
    doctorVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    availability?: DoctorAvailabilityListRelationFilter
    specializations?: DoctorSpecializationListRelationFilter
    doctorAppointments?: AppointmentListRelationFilter
    patientAppointments?: AppointmentListRelationFilter
    passwordReset?: XOR<PasswordResetNullableScalarRelationFilter, PasswordResetWhereInput> | null
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    isPhoneVerified?: SortOrder
    phoneVerifiedAt?: SortOrderInput | SortOrder
    isDoctorVerified?: SortOrder
    doctorVerifiedAt?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    image?: BytesNullableWithAggregatesFilter<"User"> | Uint8Array | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isPhoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phoneVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isDoctorVerified?: BoolWithAggregatesFilter<"User"> | boolean
    doctorVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type PasswordResetWhereInput = {
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    id?: StringFilter<"PasswordReset"> | string
    userId?: StringFilter<"PasswordReset"> | string
    token?: StringFilter<"PasswordReset"> | string
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    token?: string
    AND?: PasswordResetWhereInput | PasswordResetWhereInput[]
    OR?: PasswordResetWhereInput[]
    NOT?: PasswordResetWhereInput | PasswordResetWhereInput[]
    expiresAt?: DateTimeFilter<"PasswordReset"> | Date | string
    createdAt?: DateTimeFilter<"PasswordReset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "token">

  export type PasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetCountOrderByAggregateInput
    _max?: PasswordResetMaxOrderByAggregateInput
    _min?: PasswordResetMinOrderByAggregateInput
  }

  export type PasswordResetScalarWhereWithAggregatesInput = {
    AND?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    OR?: PasswordResetScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetScalarWhereWithAggregatesInput | PasswordResetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordReset"> | string
    userId?: StringWithAggregatesFilter<"PasswordReset"> | string
    token?: StringWithAggregatesFilter<"PasswordReset"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordReset"> | Date | string
  }

  export type DoctorSpecializationWhereInput = {
    AND?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    OR?: DoctorSpecializationWhereInput[]
    NOT?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    id?: StringFilter<"DoctorSpecialization"> | string
    doctorId?: StringFilter<"DoctorSpecialization"> | string
    type?: EnumAppointmentTypeFilter<"DoctorSpecialization"> | $Enums.AppointmentType
    createdAt?: DateTimeFilter<"DoctorSpecialization"> | Date | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DoctorSpecializationOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    doctor?: UserOrderByWithRelationInput
  }

  export type DoctorSpecializationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doctorId_type?: DoctorSpecializationDoctorIdTypeCompoundUniqueInput
    AND?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    OR?: DoctorSpecializationWhereInput[]
    NOT?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    doctorId?: StringFilter<"DoctorSpecialization"> | string
    type?: EnumAppointmentTypeFilter<"DoctorSpecialization"> | $Enums.AppointmentType
    createdAt?: DateTimeFilter<"DoctorSpecialization"> | Date | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "doctorId_type">

  export type DoctorSpecializationOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: DoctorSpecializationCountOrderByAggregateInput
    _max?: DoctorSpecializationMaxOrderByAggregateInput
    _min?: DoctorSpecializationMinOrderByAggregateInput
  }

  export type DoctorSpecializationScalarWhereWithAggregatesInput = {
    AND?: DoctorSpecializationScalarWhereWithAggregatesInput | DoctorSpecializationScalarWhereWithAggregatesInput[]
    OR?: DoctorSpecializationScalarWhereWithAggregatesInput[]
    NOT?: DoctorSpecializationScalarWhereWithAggregatesInput | DoctorSpecializationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    type?: EnumAppointmentTypeWithAggregatesFilter<"DoctorSpecialization"> | $Enums.AppointmentType
    createdAt?: DateTimeWithAggregatesFilter<"DoctorSpecialization"> | Date | string
  }

  export type DoctorAvailabilityWhereInput = {
    AND?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    OR?: DoctorAvailabilityWhereInput[]
    NOT?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    id?: StringFilter<"DoctorAvailability"> | string
    doctorId?: StringFilter<"DoctorAvailability"> | string
    dayOfWeek?: IntFilter<"DoctorAvailability"> | number
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    createdAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DoctorAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    doctor?: UserOrderByWithRelationInput
  }

  export type DoctorAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doctorId_dayOfWeek_startTime_endTime?: DoctorAvailabilityDoctorIdDayOfWeekStartTimeEndTimeCompoundUniqueInput
    AND?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    OR?: DoctorAvailabilityWhereInput[]
    NOT?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    doctorId?: StringFilter<"DoctorAvailability"> | string
    dayOfWeek?: IntFilter<"DoctorAvailability"> | number
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    createdAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "doctorId_dayOfWeek_startTime_endTime">

  export type DoctorAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    _count?: DoctorAvailabilityCountOrderByAggregateInput
    _avg?: DoctorAvailabilityAvgOrderByAggregateInput
    _max?: DoctorAvailabilityMaxOrderByAggregateInput
    _min?: DoctorAvailabilityMinOrderByAggregateInput
    _sum?: DoctorAvailabilitySumOrderByAggregateInput
  }

  export type DoctorAvailabilityScalarWhereWithAggregatesInput = {
    AND?: DoctorAvailabilityScalarWhereWithAggregatesInput | DoctorAvailabilityScalarWhereWithAggregatesInput[]
    OR?: DoctorAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: DoctorAvailabilityScalarWhereWithAggregatesInput | DoctorAvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    dayOfWeek?: IntWithAggregatesFilter<"DoctorAvailability"> | number
    startTime?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    endTime?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DoctorAvailability"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    price?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    scheduledFor?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    doctor?: UserOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    doctorId?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    price?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    scheduledFor?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentType
    price?: DecimalWithAggregatesFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    specializations?: DoctorSpecializationCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    specializations?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    specializations?: DoctorSpecializationUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    specializations?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordResetCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetInput
  }

  export type PasswordResetUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetNestedInput
  }

  export type PasswordResetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecializationCreateInput = {
    id?: string
    type: $Enums.AppointmentType
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutSpecializationsInput
  }

  export type DoctorSpecializationUncheckedCreateInput = {
    id?: string
    doctorId: string
    type: $Enums.AppointmentType
    createdAt?: Date | string
  }

  export type DoctorSpecializationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutSpecializationsNestedInput
  }

  export type DoctorSpecializationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecializationCreateManyInput = {
    id?: string
    doctorId: string
    type: $Enums.AppointmentType
    createdAt?: Date | string
  }

  export type DoctorSpecializationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecializationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorAvailabilityCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    doctor: UserCreateNestedOneWithoutAvailabilityInput
  }

  export type DoctorAvailabilityUncheckedCreateInput = {
    id?: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
  }

  export type DoctorAvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type DoctorAvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorAvailabilityCreateManyInput = {
    id?: string
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
  }

  export type DoctorAvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorAvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
    doctor: UserCreateNestedOneWithoutDoctorAppointmentsInput
    patient: UserCreateNestedOneWithoutPatientAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    doctorId: string
    patientId: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutDoctorAppointmentsNestedInput
    patient?: UserUpdateOneRequiredWithoutPatientAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentCreateManyInput = {
    id?: string
    doctorId: string
    patientId: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DoctorAvailabilityListRelationFilter = {
    every?: DoctorAvailabilityWhereInput
    some?: DoctorAvailabilityWhereInput
    none?: DoctorAvailabilityWhereInput
  }

  export type DoctorSpecializationListRelationFilter = {
    every?: DoctorSpecializationWhereInput
    some?: DoctorSpecializationWhereInput
    none?: DoctorSpecializationWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type PasswordResetNullableScalarRelationFilter = {
    is?: PasswordResetWhereInput | null
    isNot?: PasswordResetWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DoctorAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorSpecializationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    isPhoneVerified?: SortOrder
    phoneVerifiedAt?: SortOrder
    isDoctorVerified?: SortOrder
    doctorVerifiedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    isPhoneVerified?: SortOrder
    phoneVerifiedAt?: SortOrder
    isDoctorVerified?: SortOrder
    doctorVerifiedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    isPhoneVerified?: SortOrder
    phoneVerifiedAt?: SortOrder
    isDoctorVerified?: SortOrder
    doctorVerifiedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type DoctorSpecializationDoctorIdTypeCompoundUniqueInput = {
    doctorId: string
    type: $Enums.AppointmentType
  }

  export type DoctorSpecializationCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorSpecializationMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorSpecializationMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DoctorAvailabilityDoctorIdDayOfWeekStartTimeEndTimeCompoundUniqueInput = {
    doctorId: string
    dayOfWeek: number
    startTime: string
    endTime: string
  }

  export type DoctorAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorAvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type DoctorAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorAvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
    scheduledFor?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
    scheduledFor?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
    scheduledFor?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DoctorAvailabilityCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
  }

  export type DoctorSpecializationCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorInput, DoctorSpecializationUncheckedCreateWithoutDoctorInput> | DoctorSpecializationCreateWithoutDoctorInput[] | DoctorSpecializationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorInput | DoctorSpecializationCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSpecializationCreateManyDoctorInputEnvelope
    connect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PasswordResetCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput
    connect?: PasswordResetWhereUniqueInput
  }

  export type DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
  }

  export type DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorInput, DoctorSpecializationUncheckedCreateWithoutDoctorInput> | DoctorSpecializationCreateWithoutDoctorInput[] | DoctorSpecializationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorInput | DoctorSpecializationCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSpecializationCreateManyDoctorInputEnvelope
    connect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PasswordResetUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput
    connect?: PasswordResetWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DoctorAvailabilityUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    set?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    disconnect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    delete?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    update?: DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput | DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
  }

  export type DoctorSpecializationUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorInput, DoctorSpecializationUncheckedCreateWithoutDoctorInput> | DoctorSpecializationCreateWithoutDoctorInput[] | DoctorSpecializationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorInput | DoctorSpecializationCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput | DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSpecializationCreateManyDoctorInputEnvelope
    set?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    disconnect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    delete?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    connect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    update?: DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput | DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput | DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSpecializationScalarWhereInput | DoctorSpecializationScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PasswordResetUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput
    upsert?: PasswordResetUpsertWithoutUserInput
    disconnect?: PasswordResetWhereInput | boolean
    delete?: PasswordResetWhereInput | boolean
    connect?: PasswordResetWhereUniqueInput
    update?: XOR<XOR<PasswordResetUpdateToOneWithWhereWithoutUserInput, PasswordResetUpdateWithoutUserInput>, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    set?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    disconnect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    delete?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    update?: DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput | DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
  }

  export type DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorInput, DoctorSpecializationUncheckedCreateWithoutDoctorInput> | DoctorSpecializationCreateWithoutDoctorInput[] | DoctorSpecializationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorInput | DoctorSpecializationCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput | DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSpecializationCreateManyDoctorInputEnvelope
    set?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    disconnect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    delete?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    connect?: DoctorSpecializationWhereUniqueInput | DoctorSpecializationWhereUniqueInput[]
    update?: DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput | DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput | DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSpecializationScalarWhereInput | DoctorSpecializationScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PasswordResetUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetCreateOrConnectWithoutUserInput
    upsert?: PasswordResetUpsertWithoutUserInput
    disconnect?: PasswordResetWhereInput | boolean
    delete?: PasswordResetWhereInput | boolean
    connect?: PasswordResetWhereUniqueInput
    update?: XOR<XOR<PasswordResetUpdateToOneWithWhereWithoutUserInput, PasswordResetUpdateWithoutUserInput>, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetInput = {
    create?: XOR<UserCreateWithoutPasswordResetInput, UserUncheckedCreateWithoutPasswordResetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetInput, UserUncheckedCreateWithoutPasswordResetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetInput
    upsert?: UserUpsertWithoutPasswordResetInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetInput, UserUpdateWithoutPasswordResetInput>, UserUncheckedUpdateWithoutPasswordResetInput>
  }

  export type UserCreateNestedOneWithoutSpecializationsInput = {
    create?: XOR<UserCreateWithoutSpecializationsInput, UserUncheckedCreateWithoutSpecializationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecializationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type UserUpdateOneRequiredWithoutSpecializationsNestedInput = {
    create?: XOR<UserCreateWithoutSpecializationsInput, UserUncheckedCreateWithoutSpecializationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecializationsInput
    upsert?: UserUpsertWithoutSpecializationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpecializationsInput, UserUpdateWithoutSpecializationsInput>, UserUncheckedUpdateWithoutSpecializationsInput>
  }

  export type UserCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    upsert?: UserUpsertWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilityInput, UserUpdateWithoutAvailabilityInput>, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserCreateNestedOneWithoutDoctorAppointmentsInput = {
    create?: XOR<UserCreateWithoutDoctorAppointmentsInput, UserUncheckedCreateWithoutDoctorAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPatientAppointmentsInput = {
    create?: XOR<UserCreateWithoutPatientAppointmentsInput, UserUncheckedCreateWithoutPatientAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutDoctorAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutDoctorAppointmentsInput, UserUncheckedCreateWithoutDoctorAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorAppointmentsInput
    upsert?: UserUpsertWithoutDoctorAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorAppointmentsInput, UserUpdateWithoutDoctorAppointmentsInput>, UserUncheckedUpdateWithoutDoctorAppointmentsInput>
  }

  export type UserUpdateOneRequiredWithoutPatientAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutPatientAppointmentsInput, UserUncheckedCreateWithoutPatientAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientAppointmentsInput
    upsert?: UserUpsertWithoutPatientAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientAppointmentsInput, UserUpdateWithoutPatientAppointmentsInput>, UserUncheckedUpdateWithoutPatientAppointmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DoctorAvailabilityCreateWithoutDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
  }

  export type DoctorAvailabilityUncheckedCreateWithoutDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
  }

  export type DoctorAvailabilityCreateOrConnectWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    create: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorAvailabilityCreateManyDoctorInputEnvelope = {
    data: DoctorAvailabilityCreateManyDoctorInput | DoctorAvailabilityCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSpecializationCreateWithoutDoctorInput = {
    id?: string
    type: $Enums.AppointmentType
    createdAt?: Date | string
  }

  export type DoctorSpecializationUncheckedCreateWithoutDoctorInput = {
    id?: string
    type: $Enums.AppointmentType
    createdAt?: Date | string
  }

  export type DoctorSpecializationCreateOrConnectWithoutDoctorInput = {
    where: DoctorSpecializationWhereUniqueInput
    create: XOR<DoctorSpecializationCreateWithoutDoctorInput, DoctorSpecializationUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecializationCreateManyDoctorInputEnvelope = {
    data: DoctorSpecializationCreateManyDoctorInput | DoctorSpecializationCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
    patient: UserCreateNestedOneWithoutPatientAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
    doctor: UserCreateNestedOneWithoutDoctorAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetCreateOrConnectWithoutUserInput = {
    where: PasswordResetWhereUniqueInput
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
  }

  export type DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    update: XOR<DoctorAvailabilityUpdateWithoutDoctorInput, DoctorAvailabilityUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    data: XOR<DoctorAvailabilityUpdateWithoutDoctorInput, DoctorAvailabilityUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorAvailabilityScalarWhereInput
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorAvailabilityScalarWhereInput = {
    AND?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
    OR?: DoctorAvailabilityScalarWhereInput[]
    NOT?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
    id?: StringFilter<"DoctorAvailability"> | string
    doctorId?: StringFilter<"DoctorAvailability"> | string
    dayOfWeek?: IntFilter<"DoctorAvailability"> | number
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    createdAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
  }

  export type DoctorSpecializationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSpecializationWhereUniqueInput
    update: XOR<DoctorSpecializationUpdateWithoutDoctorInput, DoctorSpecializationUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorSpecializationCreateWithoutDoctorInput, DoctorSpecializationUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecializationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSpecializationWhereUniqueInput
    data: XOR<DoctorSpecializationUpdateWithoutDoctorInput, DoctorSpecializationUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSpecializationUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorSpecializationScalarWhereInput
    data: XOR<DoctorSpecializationUpdateManyMutationInput, DoctorSpecializationUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorSpecializationScalarWhereInput = {
    AND?: DoctorSpecializationScalarWhereInput | DoctorSpecializationScalarWhereInput[]
    OR?: DoctorSpecializationScalarWhereInput[]
    NOT?: DoctorSpecializationScalarWhereInput | DoctorSpecializationScalarWhereInput[]
    id?: StringFilter<"DoctorSpecialization"> | string
    doctorId?: StringFilter<"DoctorSpecialization"> | string
    type?: EnumAppointmentTypeFilter<"DoctorSpecialization"> | $Enums.AppointmentType
    createdAt?: DateTimeFilter<"DoctorSpecialization"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    price?: DecimalFilter<"Appointment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    scheduledFor?: DateTimeNullableFilter<"Appointment"> | Date | string | null
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type PasswordResetUpsertWithoutUserInput = {
    update: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetCreateWithoutUserInput, PasswordResetUncheckedCreateWithoutUserInput>
    where?: PasswordResetWhereInput
  }

  export type PasswordResetUpdateToOneWithWhereWithoutUserInput = {
    where?: PasswordResetWhereInput
    data: XOR<PasswordResetUpdateWithoutUserInput, PasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPasswordResetInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    specializations?: DoctorSpecializationCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutPasswordResetInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    specializations?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutPasswordResetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetInput, UserUncheckedCreateWithoutPasswordResetInput>
  }

  export type UserUpsertWithoutPasswordResetInput = {
    update: XOR<UserUpdateWithoutPasswordResetInput, UserUncheckedUpdateWithoutPasswordResetInput>
    create: XOR<UserCreateWithoutPasswordResetInput, UserUncheckedCreateWithoutPasswordResetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetInput, UserUncheckedUpdateWithoutPasswordResetInput>
  }

  export type UserUpdateWithoutPasswordResetInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    specializations?: DoctorSpecializationUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    specializations?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutSpecializationsInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSpecializationsInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpecializationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpecializationsInput, UserUncheckedCreateWithoutSpecializationsInput>
  }

  export type UserUpsertWithoutSpecializationsInput = {
    update: XOR<UserUpdateWithoutSpecializationsInput, UserUncheckedUpdateWithoutSpecializationsInput>
    create: XOR<UserCreateWithoutSpecializationsInput, UserUncheckedCreateWithoutSpecializationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpecializationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpecializationsInput, UserUncheckedUpdateWithoutSpecializationsInput>
  }

  export type UserUpdateWithoutSpecializationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSpecializationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAvailabilityInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    specializations?: DoctorSpecializationCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    specializations?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvailabilityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
  }

  export type UserUpsertWithoutAvailabilityInput = {
    update: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specializations?: DoctorSpecializationUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specializations?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDoctorAppointmentsInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    specializations?: DoctorSpecializationCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorAppointmentsInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    specializations?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorAppointmentsInput, UserUncheckedCreateWithoutDoctorAppointmentsInput>
  }

  export type UserCreateWithoutPatientAppointmentsInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    specializations?: DoctorSpecializationCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    passwordReset?: PasswordResetCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientAppointmentsInput = {
    id?: string
    email: string
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    gender: $Enums.Gender
    image?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    isPhoneVerified?: boolean
    phoneVerifiedAt?: Date | string | null
    isDoctorVerified?: boolean
    doctorVerifiedAt?: Date | string | null
    lastLogin?: Date | string | null
    availability?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    specializations?: DoctorSpecializationUncheckedCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    passwordReset?: PasswordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientAppointmentsInput, UserUncheckedCreateWithoutPatientAppointmentsInput>
  }

  export type UserUpsertWithoutDoctorAppointmentsInput = {
    update: XOR<UserUpdateWithoutDoctorAppointmentsInput, UserUncheckedUpdateWithoutDoctorAppointmentsInput>
    create: XOR<UserCreateWithoutDoctorAppointmentsInput, UserUncheckedCreateWithoutDoctorAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorAppointmentsInput, UserUncheckedUpdateWithoutDoctorAppointmentsInput>
  }

  export type UserUpdateWithoutDoctorAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    specializations?: DoctorSpecializationUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    specializations?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutPatientAppointmentsInput = {
    update: XOR<UserUpdateWithoutPatientAppointmentsInput, UserUncheckedUpdateWithoutPatientAppointmentsInput>
    create: XOR<UserCreateWithoutPatientAppointmentsInput, UserUncheckedCreateWithoutPatientAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientAppointmentsInput, UserUncheckedUpdateWithoutPatientAppointmentsInput>
  }

  export type UserUpdateWithoutPatientAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    specializations?: DoctorSpecializationUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    passwordReset?: PasswordResetUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    image?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDoctorVerified?: BoolFieldUpdateOperationsInput | boolean
    doctorVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availability?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    specializations?: DoctorSpecializationUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    passwordReset?: PasswordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DoctorAvailabilityCreateManyDoctorInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
  }

  export type DoctorSpecializationCreateManyDoctorInput = {
    id?: string
    type: $Enums.AppointmentType
    createdAt?: Date | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    patientId: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    doctorId: string
    status?: $Enums.AppointmentStatus
    type: $Enums.AppointmentType
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    scheduledFor?: Date | string | null
  }

  export type DoctorAvailabilityUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorAvailabilityUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorAvailabilityUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecializationUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecializationUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecializationUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: UserUpdateOneRequiredWithoutPatientAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doctor?: UserUpdateOneRequiredWithoutDoctorAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}