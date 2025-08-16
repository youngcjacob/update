
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
 * Model Thought
 * 
 */
export type Thought = $Result.DefaultSelection<Prisma.$ThoughtPayload>
/**
 * Model Cluster
 * 
 */
export type Cluster = $Result.DefaultSelection<Prisma.$ClusterPayload>
/**
 * Model ResearchNote
 * 
 */
export type ResearchNote = $Result.DefaultSelection<Prisma.$ResearchNotePayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Thoughts
 * const thoughts = await prisma.thought.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Thoughts
   * const thoughts = await prisma.thought.findMany()
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
   * `prisma.thought`: Exposes CRUD operations for the **Thought** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thoughts
    * const thoughts = await prisma.thought.findMany()
    * ```
    */
  get thought(): Prisma.ThoughtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cluster`: Exposes CRUD operations for the **Cluster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clusters
    * const clusters = await prisma.cluster.findMany()
    * ```
    */
  get cluster(): Prisma.ClusterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.researchNote`: Exposes CRUD operations for the **ResearchNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchNotes
    * const researchNotes = await prisma.researchNote.findMany()
    * ```
    */
  get researchNote(): Prisma.ResearchNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    Thought: 'Thought',
    Cluster: 'Cluster',
    ResearchNote: 'ResearchNote',
    Report: 'Report'
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
      modelProps: "thought" | "cluster" | "researchNote" | "report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Thought: {
        payload: Prisma.$ThoughtPayload<ExtArgs>
        fields: Prisma.ThoughtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThoughtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThoughtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>
          }
          findFirst: {
            args: Prisma.ThoughtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThoughtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>
          }
          findMany: {
            args: Prisma.ThoughtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>[]
          }
          create: {
            args: Prisma.ThoughtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>
          }
          createMany: {
            args: Prisma.ThoughtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThoughtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>[]
          }
          delete: {
            args: Prisma.ThoughtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>
          }
          update: {
            args: Prisma.ThoughtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>
          }
          deleteMany: {
            args: Prisma.ThoughtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThoughtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThoughtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>[]
          }
          upsert: {
            args: Prisma.ThoughtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThoughtPayload>
          }
          aggregate: {
            args: Prisma.ThoughtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThought>
          }
          groupBy: {
            args: Prisma.ThoughtGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThoughtGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThoughtCountArgs<ExtArgs>
            result: $Utils.Optional<ThoughtCountAggregateOutputType> | number
          }
        }
      }
      Cluster: {
        payload: Prisma.$ClusterPayload<ExtArgs>
        fields: Prisma.ClusterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClusterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClusterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findFirst: {
            args: Prisma.ClusterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClusterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findMany: {
            args: Prisma.ClusterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          create: {
            args: Prisma.ClusterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          createMany: {
            args: Prisma.ClusterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClusterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          delete: {
            args: Prisma.ClusterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          update: {
            args: Prisma.ClusterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          deleteMany: {
            args: Prisma.ClusterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClusterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClusterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          upsert: {
            args: Prisma.ClusterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          aggregate: {
            args: Prisma.ClusterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCluster>
          }
          groupBy: {
            args: Prisma.ClusterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClusterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClusterCountArgs<ExtArgs>
            result: $Utils.Optional<ClusterCountAggregateOutputType> | number
          }
        }
      }
      ResearchNote: {
        payload: Prisma.$ResearchNotePayload<ExtArgs>
        fields: Prisma.ResearchNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResearchNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResearchNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>
          }
          findFirst: {
            args: Prisma.ResearchNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResearchNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>
          }
          findMany: {
            args: Prisma.ResearchNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>[]
          }
          create: {
            args: Prisma.ResearchNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>
          }
          createMany: {
            args: Prisma.ResearchNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResearchNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>[]
          }
          delete: {
            args: Prisma.ResearchNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>
          }
          update: {
            args: Prisma.ResearchNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>
          }
          deleteMany: {
            args: Prisma.ResearchNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResearchNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResearchNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>[]
          }
          upsert: {
            args: Prisma.ResearchNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchNotePayload>
          }
          aggregate: {
            args: Prisma.ResearchNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResearchNote>
          }
          groupBy: {
            args: Prisma.ResearchNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResearchNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResearchNoteCountArgs<ExtArgs>
            result: $Utils.Optional<ResearchNoteCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    thought?: ThoughtOmit
    cluster?: ClusterOmit
    researchNote?: ResearchNoteOmit
    report?: ReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ClusterCountOutputType
   */

  export type ClusterCountOutputType = {
    thoughts: number
    reports: number
    researchNotes: number
  }

  export type ClusterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thoughts?: boolean | ClusterCountOutputTypeCountThoughtsArgs
    reports?: boolean | ClusterCountOutputTypeCountReportsArgs
    researchNotes?: boolean | ClusterCountOutputTypeCountResearchNotesArgs
  }

  // Custom InputTypes
  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterCountOutputType
     */
    select?: ClusterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeCountThoughtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThoughtWhereInput
  }

  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeCountResearchNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchNoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Thought
   */

  export type AggregateThought = {
    _count: ThoughtCountAggregateOutputType | null
    _min: ThoughtMinAggregateOutputType | null
    _max: ThoughtMaxAggregateOutputType | null
  }

  export type ThoughtMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    clusterId: string | null
  }

  export type ThoughtMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    clusterId: string | null
  }

  export type ThoughtCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    clusterId: number
    _all: number
  }


  export type ThoughtMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    clusterId?: true
  }

  export type ThoughtMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    clusterId?: true
  }

  export type ThoughtCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    clusterId?: true
    _all?: true
  }

  export type ThoughtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thought to aggregate.
     */
    where?: ThoughtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thoughts to fetch.
     */
    orderBy?: ThoughtOrderByWithRelationInput | ThoughtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThoughtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thoughts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thoughts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Thoughts
    **/
    _count?: true | ThoughtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThoughtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThoughtMaxAggregateInputType
  }

  export type GetThoughtAggregateType<T extends ThoughtAggregateArgs> = {
        [P in keyof T & keyof AggregateThought]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThought[P]>
      : GetScalarType<T[P], AggregateThought[P]>
  }




  export type ThoughtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThoughtWhereInput
    orderBy?: ThoughtOrderByWithAggregationInput | ThoughtOrderByWithAggregationInput[]
    by: ThoughtScalarFieldEnum[] | ThoughtScalarFieldEnum
    having?: ThoughtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThoughtCountAggregateInputType | true
    _min?: ThoughtMinAggregateInputType
    _max?: ThoughtMaxAggregateInputType
  }

  export type ThoughtGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    clusterId: string | null
    _count: ThoughtCountAggregateOutputType | null
    _min: ThoughtMinAggregateOutputType | null
    _max: ThoughtMaxAggregateOutputType | null
  }

  type GetThoughtGroupByPayload<T extends ThoughtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThoughtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThoughtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThoughtGroupByOutputType[P]>
            : GetScalarType<T[P], ThoughtGroupByOutputType[P]>
        }
      >
    >


  export type ThoughtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    clusterId?: boolean
    cluster?: boolean | Thought$clusterArgs<ExtArgs>
  }, ExtArgs["result"]["thought"]>

  export type ThoughtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    clusterId?: boolean
    cluster?: boolean | Thought$clusterArgs<ExtArgs>
  }, ExtArgs["result"]["thought"]>

  export type ThoughtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    clusterId?: boolean
    cluster?: boolean | Thought$clusterArgs<ExtArgs>
  }, ExtArgs["result"]["thought"]>

  export type ThoughtSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    clusterId?: boolean
  }

  export type ThoughtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "clusterId", ExtArgs["result"]["thought"]>
  export type ThoughtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | Thought$clusterArgs<ExtArgs>
  }
  export type ThoughtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | Thought$clusterArgs<ExtArgs>
  }
  export type ThoughtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | Thought$clusterArgs<ExtArgs>
  }

  export type $ThoughtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thought"
    objects: {
      cluster: Prisma.$ClusterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      clusterId: string | null
    }, ExtArgs["result"]["thought"]>
    composites: {}
  }

  type ThoughtGetPayload<S extends boolean | null | undefined | ThoughtDefaultArgs> = $Result.GetResult<Prisma.$ThoughtPayload, S>

  type ThoughtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThoughtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThoughtCountAggregateInputType | true
    }

  export interface ThoughtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thought'], meta: { name: 'Thought' } }
    /**
     * Find zero or one Thought that matches the filter.
     * @param {ThoughtFindUniqueArgs} args - Arguments to find a Thought
     * @example
     * // Get one Thought
     * const thought = await prisma.thought.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThoughtFindUniqueArgs>(args: SelectSubset<T, ThoughtFindUniqueArgs<ExtArgs>>): Prisma__ThoughtClient<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thought that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThoughtFindUniqueOrThrowArgs} args - Arguments to find a Thought
     * @example
     * // Get one Thought
     * const thought = await prisma.thought.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThoughtFindUniqueOrThrowArgs>(args: SelectSubset<T, ThoughtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThoughtClient<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thought that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThoughtFindFirstArgs} args - Arguments to find a Thought
     * @example
     * // Get one Thought
     * const thought = await prisma.thought.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThoughtFindFirstArgs>(args?: SelectSubset<T, ThoughtFindFirstArgs<ExtArgs>>): Prisma__ThoughtClient<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thought that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThoughtFindFirstOrThrowArgs} args - Arguments to find a Thought
     * @example
     * // Get one Thought
     * const thought = await prisma.thought.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThoughtFindFirstOrThrowArgs>(args?: SelectSubset<T, ThoughtFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThoughtClient<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Thoughts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThoughtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thoughts
     * const thoughts = await prisma.thought.findMany()
     * 
     * // Get first 10 Thoughts
     * const thoughts = await prisma.thought.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thoughtWithIdOnly = await prisma.thought.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThoughtFindManyArgs>(args?: SelectSubset<T, ThoughtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thought.
     * @param {ThoughtCreateArgs} args - Arguments to create a Thought.
     * @example
     * // Create one Thought
     * const Thought = await prisma.thought.create({
     *   data: {
     *     // ... data to create a Thought
     *   }
     * })
     * 
     */
    create<T extends ThoughtCreateArgs>(args: SelectSubset<T, ThoughtCreateArgs<ExtArgs>>): Prisma__ThoughtClient<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Thoughts.
     * @param {ThoughtCreateManyArgs} args - Arguments to create many Thoughts.
     * @example
     * // Create many Thoughts
     * const thought = await prisma.thought.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThoughtCreateManyArgs>(args?: SelectSubset<T, ThoughtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Thoughts and returns the data saved in the database.
     * @param {ThoughtCreateManyAndReturnArgs} args - Arguments to create many Thoughts.
     * @example
     * // Create many Thoughts
     * const thought = await prisma.thought.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Thoughts and only return the `id`
     * const thoughtWithIdOnly = await prisma.thought.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThoughtCreateManyAndReturnArgs>(args?: SelectSubset<T, ThoughtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thought.
     * @param {ThoughtDeleteArgs} args - Arguments to delete one Thought.
     * @example
     * // Delete one Thought
     * const Thought = await prisma.thought.delete({
     *   where: {
     *     // ... filter to delete one Thought
     *   }
     * })
     * 
     */
    delete<T extends ThoughtDeleteArgs>(args: SelectSubset<T, ThoughtDeleteArgs<ExtArgs>>): Prisma__ThoughtClient<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thought.
     * @param {ThoughtUpdateArgs} args - Arguments to update one Thought.
     * @example
     * // Update one Thought
     * const thought = await prisma.thought.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThoughtUpdateArgs>(args: SelectSubset<T, ThoughtUpdateArgs<ExtArgs>>): Prisma__ThoughtClient<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Thoughts.
     * @param {ThoughtDeleteManyArgs} args - Arguments to filter Thoughts to delete.
     * @example
     * // Delete a few Thoughts
     * const { count } = await prisma.thought.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThoughtDeleteManyArgs>(args?: SelectSubset<T, ThoughtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thoughts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThoughtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thoughts
     * const thought = await prisma.thought.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThoughtUpdateManyArgs>(args: SelectSubset<T, ThoughtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thoughts and returns the data updated in the database.
     * @param {ThoughtUpdateManyAndReturnArgs} args - Arguments to update many Thoughts.
     * @example
     * // Update many Thoughts
     * const thought = await prisma.thought.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Thoughts and only return the `id`
     * const thoughtWithIdOnly = await prisma.thought.updateManyAndReturn({
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
    updateManyAndReturn<T extends ThoughtUpdateManyAndReturnArgs>(args: SelectSubset<T, ThoughtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thought.
     * @param {ThoughtUpsertArgs} args - Arguments to update or create a Thought.
     * @example
     * // Update or create a Thought
     * const thought = await prisma.thought.upsert({
     *   create: {
     *     // ... data to create a Thought
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thought we want to update
     *   }
     * })
     */
    upsert<T extends ThoughtUpsertArgs>(args: SelectSubset<T, ThoughtUpsertArgs<ExtArgs>>): Prisma__ThoughtClient<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Thoughts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThoughtCountArgs} args - Arguments to filter Thoughts to count.
     * @example
     * // Count the number of Thoughts
     * const count = await prisma.thought.count({
     *   where: {
     *     // ... the filter for the Thoughts we want to count
     *   }
     * })
    **/
    count<T extends ThoughtCountArgs>(
      args?: Subset<T, ThoughtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThoughtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thought.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThoughtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThoughtAggregateArgs>(args: Subset<T, ThoughtAggregateArgs>): Prisma.PrismaPromise<GetThoughtAggregateType<T>>

    /**
     * Group by Thought.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThoughtGroupByArgs} args - Group by arguments.
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
      T extends ThoughtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThoughtGroupByArgs['orderBy'] }
        : { orderBy?: ThoughtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThoughtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThoughtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thought model
   */
  readonly fields: ThoughtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thought.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThoughtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cluster<T extends Thought$clusterArgs<ExtArgs> = {}>(args?: Subset<T, Thought$clusterArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Thought model
   */
  interface ThoughtFieldRefs {
    readonly id: FieldRef<"Thought", 'String'>
    readonly content: FieldRef<"Thought", 'String'>
    readonly createdAt: FieldRef<"Thought", 'DateTime'>
    readonly clusterId: FieldRef<"Thought", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Thought findUnique
   */
  export type ThoughtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * Filter, which Thought to fetch.
     */
    where: ThoughtWhereUniqueInput
  }

  /**
   * Thought findUniqueOrThrow
   */
  export type ThoughtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * Filter, which Thought to fetch.
     */
    where: ThoughtWhereUniqueInput
  }

  /**
   * Thought findFirst
   */
  export type ThoughtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * Filter, which Thought to fetch.
     */
    where?: ThoughtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thoughts to fetch.
     */
    orderBy?: ThoughtOrderByWithRelationInput | ThoughtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thoughts.
     */
    cursor?: ThoughtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thoughts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thoughts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thoughts.
     */
    distinct?: ThoughtScalarFieldEnum | ThoughtScalarFieldEnum[]
  }

  /**
   * Thought findFirstOrThrow
   */
  export type ThoughtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * Filter, which Thought to fetch.
     */
    where?: ThoughtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thoughts to fetch.
     */
    orderBy?: ThoughtOrderByWithRelationInput | ThoughtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thoughts.
     */
    cursor?: ThoughtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thoughts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thoughts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thoughts.
     */
    distinct?: ThoughtScalarFieldEnum | ThoughtScalarFieldEnum[]
  }

  /**
   * Thought findMany
   */
  export type ThoughtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * Filter, which Thoughts to fetch.
     */
    where?: ThoughtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thoughts to fetch.
     */
    orderBy?: ThoughtOrderByWithRelationInput | ThoughtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Thoughts.
     */
    cursor?: ThoughtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thoughts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thoughts.
     */
    skip?: number
    distinct?: ThoughtScalarFieldEnum | ThoughtScalarFieldEnum[]
  }

  /**
   * Thought create
   */
  export type ThoughtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * The data needed to create a Thought.
     */
    data: XOR<ThoughtCreateInput, ThoughtUncheckedCreateInput>
  }

  /**
   * Thought createMany
   */
  export type ThoughtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Thoughts.
     */
    data: ThoughtCreateManyInput | ThoughtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thought createManyAndReturn
   */
  export type ThoughtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * The data used to create many Thoughts.
     */
    data: ThoughtCreateManyInput | ThoughtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thought update
   */
  export type ThoughtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * The data needed to update a Thought.
     */
    data: XOR<ThoughtUpdateInput, ThoughtUncheckedUpdateInput>
    /**
     * Choose, which Thought to update.
     */
    where: ThoughtWhereUniqueInput
  }

  /**
   * Thought updateMany
   */
  export type ThoughtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Thoughts.
     */
    data: XOR<ThoughtUpdateManyMutationInput, ThoughtUncheckedUpdateManyInput>
    /**
     * Filter which Thoughts to update
     */
    where?: ThoughtWhereInput
    /**
     * Limit how many Thoughts to update.
     */
    limit?: number
  }

  /**
   * Thought updateManyAndReturn
   */
  export type ThoughtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * The data used to update Thoughts.
     */
    data: XOR<ThoughtUpdateManyMutationInput, ThoughtUncheckedUpdateManyInput>
    /**
     * Filter which Thoughts to update
     */
    where?: ThoughtWhereInput
    /**
     * Limit how many Thoughts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thought upsert
   */
  export type ThoughtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * The filter to search for the Thought to update in case it exists.
     */
    where: ThoughtWhereUniqueInput
    /**
     * In case the Thought found by the `where` argument doesn't exist, create a new Thought with this data.
     */
    create: XOR<ThoughtCreateInput, ThoughtUncheckedCreateInput>
    /**
     * In case the Thought was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThoughtUpdateInput, ThoughtUncheckedUpdateInput>
  }

  /**
   * Thought delete
   */
  export type ThoughtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    /**
     * Filter which Thought to delete.
     */
    where: ThoughtWhereUniqueInput
  }

  /**
   * Thought deleteMany
   */
  export type ThoughtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thoughts to delete
     */
    where?: ThoughtWhereInput
    /**
     * Limit how many Thoughts to delete.
     */
    limit?: number
  }

  /**
   * Thought.cluster
   */
  export type Thought$clusterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    where?: ClusterWhereInput
  }

  /**
   * Thought without action
   */
  export type ThoughtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
  }


  /**
   * Model Cluster
   */

  export type AggregateCluster = {
    _count: ClusterCountAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  export type ClusterMinAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClusterMaxAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClusterCountAggregateOutputType = {
    id: number
    title: number
    keywords: number
    summary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClusterMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClusterMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClusterCountAggregateInputType = {
    id?: true
    title?: true
    keywords?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClusterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cluster to aggregate.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clusters
    **/
    _count?: true | ClusterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClusterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClusterMaxAggregateInputType
  }

  export type GetClusterAggregateType<T extends ClusterAggregateArgs> = {
        [P in keyof T & keyof AggregateCluster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCluster[P]>
      : GetScalarType<T[P], AggregateCluster[P]>
  }




  export type ClusterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterWhereInput
    orderBy?: ClusterOrderByWithAggregationInput | ClusterOrderByWithAggregationInput[]
    by: ClusterScalarFieldEnum[] | ClusterScalarFieldEnum
    having?: ClusterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClusterCountAggregateInputType | true
    _min?: ClusterMinAggregateInputType
    _max?: ClusterMaxAggregateInputType
  }

  export type ClusterGroupByOutputType = {
    id: string
    title: string
    keywords: JsonValue
    summary: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClusterCountAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  type GetClusterGroupByPayload<T extends ClusterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClusterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClusterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClusterGroupByOutputType[P]>
            : GetScalarType<T[P], ClusterGroupByOutputType[P]>
        }
      >
    >


  export type ClusterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    keywords?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thoughts?: boolean | Cluster$thoughtsArgs<ExtArgs>
    reports?: boolean | Cluster$reportsArgs<ExtArgs>
    researchNotes?: boolean | Cluster$researchNotesArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    keywords?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    keywords?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectScalar = {
    id?: boolean
    title?: boolean
    keywords?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClusterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "keywords" | "summary" | "createdAt" | "updatedAt", ExtArgs["result"]["cluster"]>
  export type ClusterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thoughts?: boolean | Cluster$thoughtsArgs<ExtArgs>
    reports?: boolean | Cluster$reportsArgs<ExtArgs>
    researchNotes?: boolean | Cluster$researchNotesArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClusterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClusterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClusterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cluster"
    objects: {
      thoughts: Prisma.$ThoughtPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      researchNotes: Prisma.$ResearchNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      keywords: Prisma.JsonValue
      summary: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cluster"]>
    composites: {}
  }

  type ClusterGetPayload<S extends boolean | null | undefined | ClusterDefaultArgs> = $Result.GetResult<Prisma.$ClusterPayload, S>

  type ClusterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClusterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClusterCountAggregateInputType | true
    }

  export interface ClusterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cluster'], meta: { name: 'Cluster' } }
    /**
     * Find zero or one Cluster that matches the filter.
     * @param {ClusterFindUniqueArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClusterFindUniqueArgs>(args: SelectSubset<T, ClusterFindUniqueArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cluster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClusterFindUniqueOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClusterFindUniqueOrThrowArgs>(args: SelectSubset<T, ClusterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cluster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClusterFindFirstArgs>(args?: SelectSubset<T, ClusterFindFirstArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cluster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClusterFindFirstOrThrowArgs>(args?: SelectSubset<T, ClusterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clusters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clusters
     * const clusters = await prisma.cluster.findMany()
     * 
     * // Get first 10 Clusters
     * const clusters = await prisma.cluster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clusterWithIdOnly = await prisma.cluster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClusterFindManyArgs>(args?: SelectSubset<T, ClusterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cluster.
     * @param {ClusterCreateArgs} args - Arguments to create a Cluster.
     * @example
     * // Create one Cluster
     * const Cluster = await prisma.cluster.create({
     *   data: {
     *     // ... data to create a Cluster
     *   }
     * })
     * 
     */
    create<T extends ClusterCreateArgs>(args: SelectSubset<T, ClusterCreateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clusters.
     * @param {ClusterCreateManyArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClusterCreateManyArgs>(args?: SelectSubset<T, ClusterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clusters and returns the data saved in the database.
     * @param {ClusterCreateManyAndReturnArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClusterCreateManyAndReturnArgs>(args?: SelectSubset<T, ClusterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cluster.
     * @param {ClusterDeleteArgs} args - Arguments to delete one Cluster.
     * @example
     * // Delete one Cluster
     * const Cluster = await prisma.cluster.delete({
     *   where: {
     *     // ... filter to delete one Cluster
     *   }
     * })
     * 
     */
    delete<T extends ClusterDeleteArgs>(args: SelectSubset<T, ClusterDeleteArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cluster.
     * @param {ClusterUpdateArgs} args - Arguments to update one Cluster.
     * @example
     * // Update one Cluster
     * const cluster = await prisma.cluster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClusterUpdateArgs>(args: SelectSubset<T, ClusterUpdateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clusters.
     * @param {ClusterDeleteManyArgs} args - Arguments to filter Clusters to delete.
     * @example
     * // Delete a few Clusters
     * const { count } = await prisma.cluster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClusterDeleteManyArgs>(args?: SelectSubset<T, ClusterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClusterUpdateManyArgs>(args: SelectSubset<T, ClusterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters and returns the data updated in the database.
     * @param {ClusterUpdateManyAndReturnArgs} args - Arguments to update many Clusters.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClusterUpdateManyAndReturnArgs>(args: SelectSubset<T, ClusterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cluster.
     * @param {ClusterUpsertArgs} args - Arguments to update or create a Cluster.
     * @example
     * // Update or create a Cluster
     * const cluster = await prisma.cluster.upsert({
     *   create: {
     *     // ... data to create a Cluster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cluster we want to update
     *   }
     * })
     */
    upsert<T extends ClusterUpsertArgs>(args: SelectSubset<T, ClusterUpsertArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterCountArgs} args - Arguments to filter Clusters to count.
     * @example
     * // Count the number of Clusters
     * const count = await prisma.cluster.count({
     *   where: {
     *     // ... the filter for the Clusters we want to count
     *   }
     * })
    **/
    count<T extends ClusterCountArgs>(
      args?: Subset<T, ClusterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClusterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClusterAggregateArgs>(args: Subset<T, ClusterAggregateArgs>): Prisma.PrismaPromise<GetClusterAggregateType<T>>

    /**
     * Group by Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterGroupByArgs} args - Group by arguments.
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
      T extends ClusterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClusterGroupByArgs['orderBy'] }
        : { orderBy?: ClusterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClusterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cluster model
   */
  readonly fields: ClusterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cluster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClusterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thoughts<T extends Cluster$thoughtsArgs<ExtArgs> = {}>(args?: Subset<T, Cluster$thoughtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThoughtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Cluster$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Cluster$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    researchNotes<T extends Cluster$researchNotesArgs<ExtArgs> = {}>(args?: Subset<T, Cluster$researchNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cluster model
   */
  interface ClusterFieldRefs {
    readonly id: FieldRef<"Cluster", 'String'>
    readonly title: FieldRef<"Cluster", 'String'>
    readonly keywords: FieldRef<"Cluster", 'Json'>
    readonly summary: FieldRef<"Cluster", 'String'>
    readonly createdAt: FieldRef<"Cluster", 'DateTime'>
    readonly updatedAt: FieldRef<"Cluster", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cluster findUnique
   */
  export type ClusterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findUniqueOrThrow
   */
  export type ClusterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findFirst
   */
  export type ClusterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findFirstOrThrow
   */
  export type ClusterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findMany
   */
  export type ClusterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Clusters to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster create
   */
  export type ClusterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The data needed to create a Cluster.
     */
    data: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
  }

  /**
   * Cluster createMany
   */
  export type ClusterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster createManyAndReturn
   */
  export type ClusterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster update
   */
  export type ClusterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The data needed to update a Cluster.
     */
    data: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
    /**
     * Choose, which Cluster to update.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster updateMany
   */
  export type ClusterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to update.
     */
    limit?: number
  }

  /**
   * Cluster updateManyAndReturn
   */
  export type ClusterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to update.
     */
    limit?: number
  }

  /**
   * Cluster upsert
   */
  export type ClusterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The filter to search for the Cluster to update in case it exists.
     */
    where: ClusterWhereUniqueInput
    /**
     * In case the Cluster found by the `where` argument doesn't exist, create a new Cluster with this data.
     */
    create: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
    /**
     * In case the Cluster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
  }

  /**
   * Cluster delete
   */
  export type ClusterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter which Cluster to delete.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster deleteMany
   */
  export type ClusterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clusters to delete
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to delete.
     */
    limit?: number
  }

  /**
   * Cluster.thoughts
   */
  export type Cluster$thoughtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thought
     */
    select?: ThoughtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thought
     */
    omit?: ThoughtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThoughtInclude<ExtArgs> | null
    where?: ThoughtWhereInput
    orderBy?: ThoughtOrderByWithRelationInput | ThoughtOrderByWithRelationInput[]
    cursor?: ThoughtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThoughtScalarFieldEnum | ThoughtScalarFieldEnum[]
  }

  /**
   * Cluster.reports
   */
  export type Cluster$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Cluster.researchNotes
   */
  export type Cluster$researchNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    where?: ResearchNoteWhereInput
    orderBy?: ResearchNoteOrderByWithRelationInput | ResearchNoteOrderByWithRelationInput[]
    cursor?: ResearchNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResearchNoteScalarFieldEnum | ResearchNoteScalarFieldEnum[]
  }

  /**
   * Cluster without action
   */
  export type ClusterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
  }


  /**
   * Model ResearchNote
   */

  export type AggregateResearchNote = {
    _count: ResearchNoteCountAggregateOutputType | null
    _min: ResearchNoteMinAggregateOutputType | null
    _max: ResearchNoteMaxAggregateOutputType | null
  }

  export type ResearchNoteMinAggregateOutputType = {
    id: string | null
    clusterId: string | null
    sourceUrl: string | null
    title: string | null
    summary: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ResearchNoteMaxAggregateOutputType = {
    id: string | null
    clusterId: string | null
    sourceUrl: string | null
    title: string | null
    summary: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ResearchNoteCountAggregateOutputType = {
    id: number
    clusterId: number
    sourceUrl: number
    title: number
    summary: number
    content: number
    createdAt: number
    _all: number
  }


  export type ResearchNoteMinAggregateInputType = {
    id?: true
    clusterId?: true
    sourceUrl?: true
    title?: true
    summary?: true
    content?: true
    createdAt?: true
  }

  export type ResearchNoteMaxAggregateInputType = {
    id?: true
    clusterId?: true
    sourceUrl?: true
    title?: true
    summary?: true
    content?: true
    createdAt?: true
  }

  export type ResearchNoteCountAggregateInputType = {
    id?: true
    clusterId?: true
    sourceUrl?: true
    title?: true
    summary?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ResearchNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchNote to aggregate.
     */
    where?: ResearchNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchNotes to fetch.
     */
    orderBy?: ResearchNoteOrderByWithRelationInput | ResearchNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearchNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchNotes
    **/
    _count?: true | ResearchNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchNoteMaxAggregateInputType
  }

  export type GetResearchNoteAggregateType<T extends ResearchNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchNote[P]>
      : GetScalarType<T[P], AggregateResearchNote[P]>
  }




  export type ResearchNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchNoteWhereInput
    orderBy?: ResearchNoteOrderByWithAggregationInput | ResearchNoteOrderByWithAggregationInput[]
    by: ResearchNoteScalarFieldEnum[] | ResearchNoteScalarFieldEnum
    having?: ResearchNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchNoteCountAggregateInputType | true
    _min?: ResearchNoteMinAggregateInputType
    _max?: ResearchNoteMaxAggregateInputType
  }

  export type ResearchNoteGroupByOutputType = {
    id: string
    clusterId: string
    sourceUrl: string | null
    title: string | null
    summary: string | null
    content: string | null
    createdAt: Date
    _count: ResearchNoteCountAggregateOutputType | null
    _min: ResearchNoteMinAggregateOutputType | null
    _max: ResearchNoteMaxAggregateOutputType | null
  }

  type GetResearchNoteGroupByPayload<T extends ResearchNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearchNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchNoteGroupByOutputType[P]>
        }
      >
    >


  export type ResearchNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    sourceUrl?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    createdAt?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researchNote"]>

  export type ResearchNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    sourceUrl?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    createdAt?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researchNote"]>

  export type ResearchNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    sourceUrl?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    createdAt?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researchNote"]>

  export type ResearchNoteSelectScalar = {
    id?: boolean
    clusterId?: boolean
    sourceUrl?: boolean
    title?: boolean
    summary?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ResearchNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clusterId" | "sourceUrl" | "title" | "summary" | "content" | "createdAt", ExtArgs["result"]["researchNote"]>
  export type ResearchNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }
  export type ResearchNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }
  export type ResearchNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }

  export type $ResearchNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResearchNote"
    objects: {
      cluster: Prisma.$ClusterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clusterId: string
      sourceUrl: string | null
      title: string | null
      summary: string | null
      content: string | null
      createdAt: Date
    }, ExtArgs["result"]["researchNote"]>
    composites: {}
  }

  type ResearchNoteGetPayload<S extends boolean | null | undefined | ResearchNoteDefaultArgs> = $Result.GetResult<Prisma.$ResearchNotePayload, S>

  type ResearchNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResearchNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResearchNoteCountAggregateInputType | true
    }

  export interface ResearchNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResearchNote'], meta: { name: 'ResearchNote' } }
    /**
     * Find zero or one ResearchNote that matches the filter.
     * @param {ResearchNoteFindUniqueArgs} args - Arguments to find a ResearchNote
     * @example
     * // Get one ResearchNote
     * const researchNote = await prisma.researchNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResearchNoteFindUniqueArgs>(args: SelectSubset<T, ResearchNoteFindUniqueArgs<ExtArgs>>): Prisma__ResearchNoteClient<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResearchNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResearchNoteFindUniqueOrThrowArgs} args - Arguments to find a ResearchNote
     * @example
     * // Get one ResearchNote
     * const researchNote = await prisma.researchNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResearchNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ResearchNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResearchNoteClient<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResearchNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchNoteFindFirstArgs} args - Arguments to find a ResearchNote
     * @example
     * // Get one ResearchNote
     * const researchNote = await prisma.researchNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResearchNoteFindFirstArgs>(args?: SelectSubset<T, ResearchNoteFindFirstArgs<ExtArgs>>): Prisma__ResearchNoteClient<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResearchNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchNoteFindFirstOrThrowArgs} args - Arguments to find a ResearchNote
     * @example
     * // Get one ResearchNote
     * const researchNote = await prisma.researchNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResearchNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ResearchNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResearchNoteClient<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResearchNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchNotes
     * const researchNotes = await prisma.researchNote.findMany()
     * 
     * // Get first 10 ResearchNotes
     * const researchNotes = await prisma.researchNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchNoteWithIdOnly = await prisma.researchNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResearchNoteFindManyArgs>(args?: SelectSubset<T, ResearchNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResearchNote.
     * @param {ResearchNoteCreateArgs} args - Arguments to create a ResearchNote.
     * @example
     * // Create one ResearchNote
     * const ResearchNote = await prisma.researchNote.create({
     *   data: {
     *     // ... data to create a ResearchNote
     *   }
     * })
     * 
     */
    create<T extends ResearchNoteCreateArgs>(args: SelectSubset<T, ResearchNoteCreateArgs<ExtArgs>>): Prisma__ResearchNoteClient<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResearchNotes.
     * @param {ResearchNoteCreateManyArgs} args - Arguments to create many ResearchNotes.
     * @example
     * // Create many ResearchNotes
     * const researchNote = await prisma.researchNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResearchNoteCreateManyArgs>(args?: SelectSubset<T, ResearchNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResearchNotes and returns the data saved in the database.
     * @param {ResearchNoteCreateManyAndReturnArgs} args - Arguments to create many ResearchNotes.
     * @example
     * // Create many ResearchNotes
     * const researchNote = await prisma.researchNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResearchNotes and only return the `id`
     * const researchNoteWithIdOnly = await prisma.researchNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResearchNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ResearchNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResearchNote.
     * @param {ResearchNoteDeleteArgs} args - Arguments to delete one ResearchNote.
     * @example
     * // Delete one ResearchNote
     * const ResearchNote = await prisma.researchNote.delete({
     *   where: {
     *     // ... filter to delete one ResearchNote
     *   }
     * })
     * 
     */
    delete<T extends ResearchNoteDeleteArgs>(args: SelectSubset<T, ResearchNoteDeleteArgs<ExtArgs>>): Prisma__ResearchNoteClient<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResearchNote.
     * @param {ResearchNoteUpdateArgs} args - Arguments to update one ResearchNote.
     * @example
     * // Update one ResearchNote
     * const researchNote = await prisma.researchNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResearchNoteUpdateArgs>(args: SelectSubset<T, ResearchNoteUpdateArgs<ExtArgs>>): Prisma__ResearchNoteClient<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResearchNotes.
     * @param {ResearchNoteDeleteManyArgs} args - Arguments to filter ResearchNotes to delete.
     * @example
     * // Delete a few ResearchNotes
     * const { count } = await prisma.researchNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResearchNoteDeleteManyArgs>(args?: SelectSubset<T, ResearchNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchNotes
     * const researchNote = await prisma.researchNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResearchNoteUpdateManyArgs>(args: SelectSubset<T, ResearchNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchNotes and returns the data updated in the database.
     * @param {ResearchNoteUpdateManyAndReturnArgs} args - Arguments to update many ResearchNotes.
     * @example
     * // Update many ResearchNotes
     * const researchNote = await prisma.researchNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResearchNotes and only return the `id`
     * const researchNoteWithIdOnly = await prisma.researchNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResearchNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ResearchNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResearchNote.
     * @param {ResearchNoteUpsertArgs} args - Arguments to update or create a ResearchNote.
     * @example
     * // Update or create a ResearchNote
     * const researchNote = await prisma.researchNote.upsert({
     *   create: {
     *     // ... data to create a ResearchNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchNote we want to update
     *   }
     * })
     */
    upsert<T extends ResearchNoteUpsertArgs>(args: SelectSubset<T, ResearchNoteUpsertArgs<ExtArgs>>): Prisma__ResearchNoteClient<$Result.GetResult<Prisma.$ResearchNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResearchNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchNoteCountArgs} args - Arguments to filter ResearchNotes to count.
     * @example
     * // Count the number of ResearchNotes
     * const count = await prisma.researchNote.count({
     *   where: {
     *     // ... the filter for the ResearchNotes we want to count
     *   }
     * })
    **/
    count<T extends ResearchNoteCountArgs>(
      args?: Subset<T, ResearchNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchNoteAggregateArgs>(args: Subset<T, ResearchNoteAggregateArgs>): Prisma.PrismaPromise<GetResearchNoteAggregateType<T>>

    /**
     * Group by ResearchNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchNoteGroupByArgs} args - Group by arguments.
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
      T extends ResearchNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchNoteGroupByArgs['orderBy'] }
        : { orderBy?: ResearchNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResearchNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResearchNote model
   */
  readonly fields: ResearchNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResearchNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cluster<T extends ClusterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClusterDefaultArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResearchNote model
   */
  interface ResearchNoteFieldRefs {
    readonly id: FieldRef<"ResearchNote", 'String'>
    readonly clusterId: FieldRef<"ResearchNote", 'String'>
    readonly sourceUrl: FieldRef<"ResearchNote", 'String'>
    readonly title: FieldRef<"ResearchNote", 'String'>
    readonly summary: FieldRef<"ResearchNote", 'String'>
    readonly content: FieldRef<"ResearchNote", 'String'>
    readonly createdAt: FieldRef<"ResearchNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResearchNote findUnique
   */
  export type ResearchNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * Filter, which ResearchNote to fetch.
     */
    where: ResearchNoteWhereUniqueInput
  }

  /**
   * ResearchNote findUniqueOrThrow
   */
  export type ResearchNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * Filter, which ResearchNote to fetch.
     */
    where: ResearchNoteWhereUniqueInput
  }

  /**
   * ResearchNote findFirst
   */
  export type ResearchNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * Filter, which ResearchNote to fetch.
     */
    where?: ResearchNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchNotes to fetch.
     */
    orderBy?: ResearchNoteOrderByWithRelationInput | ResearchNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchNotes.
     */
    cursor?: ResearchNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchNotes.
     */
    distinct?: ResearchNoteScalarFieldEnum | ResearchNoteScalarFieldEnum[]
  }

  /**
   * ResearchNote findFirstOrThrow
   */
  export type ResearchNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * Filter, which ResearchNote to fetch.
     */
    where?: ResearchNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchNotes to fetch.
     */
    orderBy?: ResearchNoteOrderByWithRelationInput | ResearchNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchNotes.
     */
    cursor?: ResearchNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchNotes.
     */
    distinct?: ResearchNoteScalarFieldEnum | ResearchNoteScalarFieldEnum[]
  }

  /**
   * ResearchNote findMany
   */
  export type ResearchNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * Filter, which ResearchNotes to fetch.
     */
    where?: ResearchNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchNotes to fetch.
     */
    orderBy?: ResearchNoteOrderByWithRelationInput | ResearchNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchNotes.
     */
    cursor?: ResearchNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchNotes.
     */
    skip?: number
    distinct?: ResearchNoteScalarFieldEnum | ResearchNoteScalarFieldEnum[]
  }

  /**
   * ResearchNote create
   */
  export type ResearchNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ResearchNote.
     */
    data: XOR<ResearchNoteCreateInput, ResearchNoteUncheckedCreateInput>
  }

  /**
   * ResearchNote createMany
   */
  export type ResearchNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResearchNotes.
     */
    data: ResearchNoteCreateManyInput | ResearchNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResearchNote createManyAndReturn
   */
  export type ResearchNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * The data used to create many ResearchNotes.
     */
    data: ResearchNoteCreateManyInput | ResearchNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResearchNote update
   */
  export type ResearchNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ResearchNote.
     */
    data: XOR<ResearchNoteUpdateInput, ResearchNoteUncheckedUpdateInput>
    /**
     * Choose, which ResearchNote to update.
     */
    where: ResearchNoteWhereUniqueInput
  }

  /**
   * ResearchNote updateMany
   */
  export type ResearchNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResearchNotes.
     */
    data: XOR<ResearchNoteUpdateManyMutationInput, ResearchNoteUncheckedUpdateManyInput>
    /**
     * Filter which ResearchNotes to update
     */
    where?: ResearchNoteWhereInput
    /**
     * Limit how many ResearchNotes to update.
     */
    limit?: number
  }

  /**
   * ResearchNote updateManyAndReturn
   */
  export type ResearchNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * The data used to update ResearchNotes.
     */
    data: XOR<ResearchNoteUpdateManyMutationInput, ResearchNoteUncheckedUpdateManyInput>
    /**
     * Filter which ResearchNotes to update
     */
    where?: ResearchNoteWhereInput
    /**
     * Limit how many ResearchNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResearchNote upsert
   */
  export type ResearchNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ResearchNote to update in case it exists.
     */
    where: ResearchNoteWhereUniqueInput
    /**
     * In case the ResearchNote found by the `where` argument doesn't exist, create a new ResearchNote with this data.
     */
    create: XOR<ResearchNoteCreateInput, ResearchNoteUncheckedCreateInput>
    /**
     * In case the ResearchNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearchNoteUpdateInput, ResearchNoteUncheckedUpdateInput>
  }

  /**
   * ResearchNote delete
   */
  export type ResearchNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
    /**
     * Filter which ResearchNote to delete.
     */
    where: ResearchNoteWhereUniqueInput
  }

  /**
   * ResearchNote deleteMany
   */
  export type ResearchNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchNotes to delete
     */
    where?: ResearchNoteWhereInput
    /**
     * Limit how many ResearchNotes to delete.
     */
    limit?: number
  }

  /**
   * ResearchNote without action
   */
  export type ResearchNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchNote
     */
    select?: ResearchNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchNote
     */
    omit?: ResearchNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchNoteInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    clusterId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    clusterId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    clusterId: number
    content: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    clusterId?: true
    content?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    clusterId?: true
    content?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    clusterId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    clusterId: string
    content: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    content?: boolean
    createdAt?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    content?: boolean
    createdAt?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clusterId?: boolean
    content?: boolean
    createdAt?: boolean
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    clusterId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clusterId" | "content" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | ClusterDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      cluster: Prisma.$ClusterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clusterId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cluster<T extends ClusterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClusterDefaultArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly clusterId: FieldRef<"Report", 'String'>
    readonly content: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
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


  export const ThoughtScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    clusterId: 'clusterId'
  };

  export type ThoughtScalarFieldEnum = (typeof ThoughtScalarFieldEnum)[keyof typeof ThoughtScalarFieldEnum]


  export const ClusterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    keywords: 'keywords',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClusterScalarFieldEnum = (typeof ClusterScalarFieldEnum)[keyof typeof ClusterScalarFieldEnum]


  export const ResearchNoteScalarFieldEnum: {
    id: 'id',
    clusterId: 'clusterId',
    sourceUrl: 'sourceUrl',
    title: 'title',
    summary: 'summary',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ResearchNoteScalarFieldEnum = (typeof ResearchNoteScalarFieldEnum)[keyof typeof ResearchNoteScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    clusterId: 'clusterId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ThoughtWhereInput = {
    AND?: ThoughtWhereInput | ThoughtWhereInput[]
    OR?: ThoughtWhereInput[]
    NOT?: ThoughtWhereInput | ThoughtWhereInput[]
    id?: StringFilter<"Thought"> | string
    content?: StringFilter<"Thought"> | string
    createdAt?: DateTimeFilter<"Thought"> | Date | string
    clusterId?: StringNullableFilter<"Thought"> | string | null
    cluster?: XOR<ClusterNullableScalarRelationFilter, ClusterWhereInput> | null
  }

  export type ThoughtOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    clusterId?: SortOrderInput | SortOrder
    cluster?: ClusterOrderByWithRelationInput
  }

  export type ThoughtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ThoughtWhereInput | ThoughtWhereInput[]
    OR?: ThoughtWhereInput[]
    NOT?: ThoughtWhereInput | ThoughtWhereInput[]
    content?: StringFilter<"Thought"> | string
    createdAt?: DateTimeFilter<"Thought"> | Date | string
    clusterId?: StringNullableFilter<"Thought"> | string | null
    cluster?: XOR<ClusterNullableScalarRelationFilter, ClusterWhereInput> | null
  }, "id">

  export type ThoughtOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    clusterId?: SortOrderInput | SortOrder
    _count?: ThoughtCountOrderByAggregateInput
    _max?: ThoughtMaxOrderByAggregateInput
    _min?: ThoughtMinOrderByAggregateInput
  }

  export type ThoughtScalarWhereWithAggregatesInput = {
    AND?: ThoughtScalarWhereWithAggregatesInput | ThoughtScalarWhereWithAggregatesInput[]
    OR?: ThoughtScalarWhereWithAggregatesInput[]
    NOT?: ThoughtScalarWhereWithAggregatesInput | ThoughtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Thought"> | string
    content?: StringWithAggregatesFilter<"Thought"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Thought"> | Date | string
    clusterId?: StringNullableWithAggregatesFilter<"Thought"> | string | null
  }

  export type ClusterWhereInput = {
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    id?: StringFilter<"Cluster"> | string
    title?: StringFilter<"Cluster"> | string
    keywords?: JsonFilter<"Cluster">
    summary?: StringNullableFilter<"Cluster"> | string | null
    createdAt?: DateTimeFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeFilter<"Cluster"> | Date | string
    thoughts?: ThoughtListRelationFilter
    reports?: ReportListRelationFilter
    researchNotes?: ResearchNoteListRelationFilter
  }

  export type ClusterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    keywords?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thoughts?: ThoughtOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    researchNotes?: ResearchNoteOrderByRelationAggregateInput
  }

  export type ClusterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    title?: StringFilter<"Cluster"> | string
    keywords?: JsonFilter<"Cluster">
    summary?: StringNullableFilter<"Cluster"> | string | null
    createdAt?: DateTimeFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeFilter<"Cluster"> | Date | string
    thoughts?: ThoughtListRelationFilter
    reports?: ReportListRelationFilter
    researchNotes?: ResearchNoteListRelationFilter
  }, "id">

  export type ClusterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    keywords?: SortOrder
    summary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClusterCountOrderByAggregateInput
    _max?: ClusterMaxOrderByAggregateInput
    _min?: ClusterMinOrderByAggregateInput
  }

  export type ClusterScalarWhereWithAggregatesInput = {
    AND?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    OR?: ClusterScalarWhereWithAggregatesInput[]
    NOT?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cluster"> | string
    title?: StringWithAggregatesFilter<"Cluster"> | string
    keywords?: JsonWithAggregatesFilter<"Cluster">
    summary?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cluster"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cluster"> | Date | string
  }

  export type ResearchNoteWhereInput = {
    AND?: ResearchNoteWhereInput | ResearchNoteWhereInput[]
    OR?: ResearchNoteWhereInput[]
    NOT?: ResearchNoteWhereInput | ResearchNoteWhereInput[]
    id?: StringFilter<"ResearchNote"> | string
    clusterId?: StringFilter<"ResearchNote"> | string
    sourceUrl?: StringNullableFilter<"ResearchNote"> | string | null
    title?: StringNullableFilter<"ResearchNote"> | string | null
    summary?: StringNullableFilter<"ResearchNote"> | string | null
    content?: StringNullableFilter<"ResearchNote"> | string | null
    createdAt?: DateTimeFilter<"ResearchNote"> | Date | string
    cluster?: XOR<ClusterScalarRelationFilter, ClusterWhereInput>
  }

  export type ResearchNoteOrderByWithRelationInput = {
    id?: SortOrder
    clusterId?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cluster?: ClusterOrderByWithRelationInput
  }

  export type ResearchNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResearchNoteWhereInput | ResearchNoteWhereInput[]
    OR?: ResearchNoteWhereInput[]
    NOT?: ResearchNoteWhereInput | ResearchNoteWhereInput[]
    clusterId?: StringFilter<"ResearchNote"> | string
    sourceUrl?: StringNullableFilter<"ResearchNote"> | string | null
    title?: StringNullableFilter<"ResearchNote"> | string | null
    summary?: StringNullableFilter<"ResearchNote"> | string | null
    content?: StringNullableFilter<"ResearchNote"> | string | null
    createdAt?: DateTimeFilter<"ResearchNote"> | Date | string
    cluster?: XOR<ClusterScalarRelationFilter, ClusterWhereInput>
  }, "id">

  export type ResearchNoteOrderByWithAggregationInput = {
    id?: SortOrder
    clusterId?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ResearchNoteCountOrderByAggregateInput
    _max?: ResearchNoteMaxOrderByAggregateInput
    _min?: ResearchNoteMinOrderByAggregateInput
  }

  export type ResearchNoteScalarWhereWithAggregatesInput = {
    AND?: ResearchNoteScalarWhereWithAggregatesInput | ResearchNoteScalarWhereWithAggregatesInput[]
    OR?: ResearchNoteScalarWhereWithAggregatesInput[]
    NOT?: ResearchNoteScalarWhereWithAggregatesInput | ResearchNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResearchNote"> | string
    clusterId?: StringWithAggregatesFilter<"ResearchNote"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"ResearchNote"> | string | null
    title?: StringNullableWithAggregatesFilter<"ResearchNote"> | string | null
    summary?: StringNullableWithAggregatesFilter<"ResearchNote"> | string | null
    content?: StringNullableWithAggregatesFilter<"ResearchNote"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ResearchNote"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    clusterId?: StringFilter<"Report"> | string
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    cluster?: XOR<ClusterScalarRelationFilter, ClusterWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    clusterId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    cluster?: ClusterOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    clusterId?: StringFilter<"Report"> | string
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    cluster?: XOR<ClusterScalarRelationFilter, ClusterWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    clusterId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    clusterId?: StringWithAggregatesFilter<"Report"> | string
    content?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type ThoughtCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    cluster?: ClusterCreateNestedOneWithoutThoughtsInput
  }

  export type ThoughtUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    clusterId?: string | null
  }

  export type ThoughtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cluster?: ClusterUpdateOneWithoutThoughtsNestedInput
  }

  export type ThoughtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThoughtCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    clusterId?: string | null
  }

  export type ThoughtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThoughtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clusterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClusterCreateInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thoughts?: ThoughtCreateNestedManyWithoutClusterInput
    reports?: ReportCreateNestedManyWithoutClusterInput
    researchNotes?: ResearchNoteCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thoughts?: ThoughtUncheckedCreateNestedManyWithoutClusterInput
    reports?: ReportUncheckedCreateNestedManyWithoutClusterInput
    researchNotes?: ResearchNoteUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thoughts?: ThoughtUpdateManyWithoutClusterNestedInput
    reports?: ReportUpdateManyWithoutClusterNestedInput
    researchNotes?: ResearchNoteUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thoughts?: ThoughtUncheckedUpdateManyWithoutClusterNestedInput
    reports?: ReportUncheckedUpdateManyWithoutClusterNestedInput
    researchNotes?: ResearchNoteUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ClusterCreateManyInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClusterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClusterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchNoteCreateInput = {
    id?: string
    sourceUrl?: string | null
    title?: string | null
    summary?: string | null
    content?: string | null
    createdAt?: Date | string
    cluster: ClusterCreateNestedOneWithoutResearchNotesInput
  }

  export type ResearchNoteUncheckedCreateInput = {
    id?: string
    clusterId: string
    sourceUrl?: string | null
    title?: string | null
    summary?: string | null
    content?: string | null
    createdAt?: Date | string
  }

  export type ResearchNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cluster?: ClusterUpdateOneRequiredWithoutResearchNotesNestedInput
  }

  export type ResearchNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchNoteCreateManyInput = {
    id?: string
    clusterId: string
    sourceUrl?: string | null
    title?: string | null
    summary?: string | null
    content?: string | null
    createdAt?: Date | string
  }

  export type ResearchNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    cluster: ClusterCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    clusterId: string
    content: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cluster?: ClusterUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    clusterId: string
    content: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clusterId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ClusterNullableScalarRelationFilter = {
    is?: ClusterWhereInput | null
    isNot?: ClusterWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ThoughtCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    clusterId?: SortOrder
  }

  export type ThoughtMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    clusterId?: SortOrder
  }

  export type ThoughtMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    clusterId?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ThoughtListRelationFilter = {
    every?: ThoughtWhereInput
    some?: ThoughtWhereInput
    none?: ThoughtWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type ResearchNoteListRelationFilter = {
    every?: ResearchNoteWhereInput
    some?: ResearchNoteWhereInput
    none?: ResearchNoteWhereInput
  }

  export type ThoughtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResearchNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClusterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    keywords?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClusterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClusterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ClusterScalarRelationFilter = {
    is?: ClusterWhereInput
    isNot?: ClusterWhereInput
  }

  export type ResearchNoteCountOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ResearchNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ResearchNoteMinOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
    sourceUrl?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    clusterId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ClusterCreateNestedOneWithoutThoughtsInput = {
    create?: XOR<ClusterCreateWithoutThoughtsInput, ClusterUncheckedCreateWithoutThoughtsInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutThoughtsInput
    connect?: ClusterWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClusterUpdateOneWithoutThoughtsNestedInput = {
    create?: XOR<ClusterCreateWithoutThoughtsInput, ClusterUncheckedCreateWithoutThoughtsInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutThoughtsInput
    upsert?: ClusterUpsertWithoutThoughtsInput
    disconnect?: ClusterWhereInput | boolean
    delete?: ClusterWhereInput | boolean
    connect?: ClusterWhereUniqueInput
    update?: XOR<XOR<ClusterUpdateToOneWithWhereWithoutThoughtsInput, ClusterUpdateWithoutThoughtsInput>, ClusterUncheckedUpdateWithoutThoughtsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ThoughtCreateNestedManyWithoutClusterInput = {
    create?: XOR<ThoughtCreateWithoutClusterInput, ThoughtUncheckedCreateWithoutClusterInput> | ThoughtCreateWithoutClusterInput[] | ThoughtUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ThoughtCreateOrConnectWithoutClusterInput | ThoughtCreateOrConnectWithoutClusterInput[]
    createMany?: ThoughtCreateManyClusterInputEnvelope
    connect?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutClusterInput = {
    create?: XOR<ReportCreateWithoutClusterInput, ReportUncheckedCreateWithoutClusterInput> | ReportCreateWithoutClusterInput[] | ReportUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutClusterInput | ReportCreateOrConnectWithoutClusterInput[]
    createMany?: ReportCreateManyClusterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ResearchNoteCreateNestedManyWithoutClusterInput = {
    create?: XOR<ResearchNoteCreateWithoutClusterInput, ResearchNoteUncheckedCreateWithoutClusterInput> | ResearchNoteCreateWithoutClusterInput[] | ResearchNoteUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ResearchNoteCreateOrConnectWithoutClusterInput | ResearchNoteCreateOrConnectWithoutClusterInput[]
    createMany?: ResearchNoteCreateManyClusterInputEnvelope
    connect?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
  }

  export type ThoughtUncheckedCreateNestedManyWithoutClusterInput = {
    create?: XOR<ThoughtCreateWithoutClusterInput, ThoughtUncheckedCreateWithoutClusterInput> | ThoughtCreateWithoutClusterInput[] | ThoughtUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ThoughtCreateOrConnectWithoutClusterInput | ThoughtCreateOrConnectWithoutClusterInput[]
    createMany?: ThoughtCreateManyClusterInputEnvelope
    connect?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutClusterInput = {
    create?: XOR<ReportCreateWithoutClusterInput, ReportUncheckedCreateWithoutClusterInput> | ReportCreateWithoutClusterInput[] | ReportUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutClusterInput | ReportCreateOrConnectWithoutClusterInput[]
    createMany?: ReportCreateManyClusterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ResearchNoteUncheckedCreateNestedManyWithoutClusterInput = {
    create?: XOR<ResearchNoteCreateWithoutClusterInput, ResearchNoteUncheckedCreateWithoutClusterInput> | ResearchNoteCreateWithoutClusterInput[] | ResearchNoteUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ResearchNoteCreateOrConnectWithoutClusterInput | ResearchNoteCreateOrConnectWithoutClusterInput[]
    createMany?: ResearchNoteCreateManyClusterInputEnvelope
    connect?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
  }

  export type ThoughtUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ThoughtCreateWithoutClusterInput, ThoughtUncheckedCreateWithoutClusterInput> | ThoughtCreateWithoutClusterInput[] | ThoughtUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ThoughtCreateOrConnectWithoutClusterInput | ThoughtCreateOrConnectWithoutClusterInput[]
    upsert?: ThoughtUpsertWithWhereUniqueWithoutClusterInput | ThoughtUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ThoughtCreateManyClusterInputEnvelope
    set?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
    disconnect?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
    delete?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
    connect?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
    update?: ThoughtUpdateWithWhereUniqueWithoutClusterInput | ThoughtUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ThoughtUpdateManyWithWhereWithoutClusterInput | ThoughtUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ThoughtScalarWhereInput | ThoughtScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ReportCreateWithoutClusterInput, ReportUncheckedCreateWithoutClusterInput> | ReportCreateWithoutClusterInput[] | ReportUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutClusterInput | ReportCreateOrConnectWithoutClusterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutClusterInput | ReportUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ReportCreateManyClusterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutClusterInput | ReportUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutClusterInput | ReportUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ResearchNoteUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ResearchNoteCreateWithoutClusterInput, ResearchNoteUncheckedCreateWithoutClusterInput> | ResearchNoteCreateWithoutClusterInput[] | ResearchNoteUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ResearchNoteCreateOrConnectWithoutClusterInput | ResearchNoteCreateOrConnectWithoutClusterInput[]
    upsert?: ResearchNoteUpsertWithWhereUniqueWithoutClusterInput | ResearchNoteUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ResearchNoteCreateManyClusterInputEnvelope
    set?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
    disconnect?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
    delete?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
    connect?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
    update?: ResearchNoteUpdateWithWhereUniqueWithoutClusterInput | ResearchNoteUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ResearchNoteUpdateManyWithWhereWithoutClusterInput | ResearchNoteUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ResearchNoteScalarWhereInput | ResearchNoteScalarWhereInput[]
  }

  export type ThoughtUncheckedUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ThoughtCreateWithoutClusterInput, ThoughtUncheckedCreateWithoutClusterInput> | ThoughtCreateWithoutClusterInput[] | ThoughtUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ThoughtCreateOrConnectWithoutClusterInput | ThoughtCreateOrConnectWithoutClusterInput[]
    upsert?: ThoughtUpsertWithWhereUniqueWithoutClusterInput | ThoughtUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ThoughtCreateManyClusterInputEnvelope
    set?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
    disconnect?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
    delete?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
    connect?: ThoughtWhereUniqueInput | ThoughtWhereUniqueInput[]
    update?: ThoughtUpdateWithWhereUniqueWithoutClusterInput | ThoughtUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ThoughtUpdateManyWithWhereWithoutClusterInput | ThoughtUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ThoughtScalarWhereInput | ThoughtScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ReportCreateWithoutClusterInput, ReportUncheckedCreateWithoutClusterInput> | ReportCreateWithoutClusterInput[] | ReportUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutClusterInput | ReportCreateOrConnectWithoutClusterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutClusterInput | ReportUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ReportCreateManyClusterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutClusterInput | ReportUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutClusterInput | ReportUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ResearchNoteUncheckedUpdateManyWithoutClusterNestedInput = {
    create?: XOR<ResearchNoteCreateWithoutClusterInput, ResearchNoteUncheckedCreateWithoutClusterInput> | ResearchNoteCreateWithoutClusterInput[] | ResearchNoteUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: ResearchNoteCreateOrConnectWithoutClusterInput | ResearchNoteCreateOrConnectWithoutClusterInput[]
    upsert?: ResearchNoteUpsertWithWhereUniqueWithoutClusterInput | ResearchNoteUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: ResearchNoteCreateManyClusterInputEnvelope
    set?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
    disconnect?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
    delete?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
    connect?: ResearchNoteWhereUniqueInput | ResearchNoteWhereUniqueInput[]
    update?: ResearchNoteUpdateWithWhereUniqueWithoutClusterInput | ResearchNoteUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: ResearchNoteUpdateManyWithWhereWithoutClusterInput | ResearchNoteUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: ResearchNoteScalarWhereInput | ResearchNoteScalarWhereInput[]
  }

  export type ClusterCreateNestedOneWithoutResearchNotesInput = {
    create?: XOR<ClusterCreateWithoutResearchNotesInput, ClusterUncheckedCreateWithoutResearchNotesInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutResearchNotesInput
    connect?: ClusterWhereUniqueInput
  }

  export type ClusterUpdateOneRequiredWithoutResearchNotesNestedInput = {
    create?: XOR<ClusterCreateWithoutResearchNotesInput, ClusterUncheckedCreateWithoutResearchNotesInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutResearchNotesInput
    upsert?: ClusterUpsertWithoutResearchNotesInput
    connect?: ClusterWhereUniqueInput
    update?: XOR<XOR<ClusterUpdateToOneWithWhereWithoutResearchNotesInput, ClusterUpdateWithoutResearchNotesInput>, ClusterUncheckedUpdateWithoutResearchNotesInput>
  }

  export type ClusterCreateNestedOneWithoutReportsInput = {
    create?: XOR<ClusterCreateWithoutReportsInput, ClusterUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutReportsInput
    connect?: ClusterWhereUniqueInput
  }

  export type ClusterUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<ClusterCreateWithoutReportsInput, ClusterUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutReportsInput
    upsert?: ClusterUpsertWithoutReportsInput
    connect?: ClusterWhereUniqueInput
    update?: XOR<XOR<ClusterUpdateToOneWithWhereWithoutReportsInput, ClusterUpdateWithoutReportsInput>, ClusterUncheckedUpdateWithoutReportsInput>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ClusterCreateWithoutThoughtsInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportCreateNestedManyWithoutClusterInput
    researchNotes?: ResearchNoteCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateWithoutThoughtsInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutClusterInput
    researchNotes?: ResearchNoteUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterCreateOrConnectWithoutThoughtsInput = {
    where: ClusterWhereUniqueInput
    create: XOR<ClusterCreateWithoutThoughtsInput, ClusterUncheckedCreateWithoutThoughtsInput>
  }

  export type ClusterUpsertWithoutThoughtsInput = {
    update: XOR<ClusterUpdateWithoutThoughtsInput, ClusterUncheckedUpdateWithoutThoughtsInput>
    create: XOR<ClusterCreateWithoutThoughtsInput, ClusterUncheckedCreateWithoutThoughtsInput>
    where?: ClusterWhereInput
  }

  export type ClusterUpdateToOneWithWhereWithoutThoughtsInput = {
    where?: ClusterWhereInput
    data: XOR<ClusterUpdateWithoutThoughtsInput, ClusterUncheckedUpdateWithoutThoughtsInput>
  }

  export type ClusterUpdateWithoutThoughtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUpdateManyWithoutClusterNestedInput
    researchNotes?: ResearchNoteUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateWithoutThoughtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutClusterNestedInput
    researchNotes?: ResearchNoteUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ThoughtCreateWithoutClusterInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ThoughtUncheckedCreateWithoutClusterInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ThoughtCreateOrConnectWithoutClusterInput = {
    where: ThoughtWhereUniqueInput
    create: XOR<ThoughtCreateWithoutClusterInput, ThoughtUncheckedCreateWithoutClusterInput>
  }

  export type ThoughtCreateManyClusterInputEnvelope = {
    data: ThoughtCreateManyClusterInput | ThoughtCreateManyClusterInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutClusterInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutClusterInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutClusterInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutClusterInput, ReportUncheckedCreateWithoutClusterInput>
  }

  export type ReportCreateManyClusterInputEnvelope = {
    data: ReportCreateManyClusterInput | ReportCreateManyClusterInput[]
    skipDuplicates?: boolean
  }

  export type ResearchNoteCreateWithoutClusterInput = {
    id?: string
    sourceUrl?: string | null
    title?: string | null
    summary?: string | null
    content?: string | null
    createdAt?: Date | string
  }

  export type ResearchNoteUncheckedCreateWithoutClusterInput = {
    id?: string
    sourceUrl?: string | null
    title?: string | null
    summary?: string | null
    content?: string | null
    createdAt?: Date | string
  }

  export type ResearchNoteCreateOrConnectWithoutClusterInput = {
    where: ResearchNoteWhereUniqueInput
    create: XOR<ResearchNoteCreateWithoutClusterInput, ResearchNoteUncheckedCreateWithoutClusterInput>
  }

  export type ResearchNoteCreateManyClusterInputEnvelope = {
    data: ResearchNoteCreateManyClusterInput | ResearchNoteCreateManyClusterInput[]
    skipDuplicates?: boolean
  }

  export type ThoughtUpsertWithWhereUniqueWithoutClusterInput = {
    where: ThoughtWhereUniqueInput
    update: XOR<ThoughtUpdateWithoutClusterInput, ThoughtUncheckedUpdateWithoutClusterInput>
    create: XOR<ThoughtCreateWithoutClusterInput, ThoughtUncheckedCreateWithoutClusterInput>
  }

  export type ThoughtUpdateWithWhereUniqueWithoutClusterInput = {
    where: ThoughtWhereUniqueInput
    data: XOR<ThoughtUpdateWithoutClusterInput, ThoughtUncheckedUpdateWithoutClusterInput>
  }

  export type ThoughtUpdateManyWithWhereWithoutClusterInput = {
    where: ThoughtScalarWhereInput
    data: XOR<ThoughtUpdateManyMutationInput, ThoughtUncheckedUpdateManyWithoutClusterInput>
  }

  export type ThoughtScalarWhereInput = {
    AND?: ThoughtScalarWhereInput | ThoughtScalarWhereInput[]
    OR?: ThoughtScalarWhereInput[]
    NOT?: ThoughtScalarWhereInput | ThoughtScalarWhereInput[]
    id?: StringFilter<"Thought"> | string
    content?: StringFilter<"Thought"> | string
    createdAt?: DateTimeFilter<"Thought"> | Date | string
    clusterId?: StringNullableFilter<"Thought"> | string | null
  }

  export type ReportUpsertWithWhereUniqueWithoutClusterInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutClusterInput, ReportUncheckedUpdateWithoutClusterInput>
    create: XOR<ReportCreateWithoutClusterInput, ReportUncheckedCreateWithoutClusterInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutClusterInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutClusterInput, ReportUncheckedUpdateWithoutClusterInput>
  }

  export type ReportUpdateManyWithWhereWithoutClusterInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutClusterInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    clusterId?: StringFilter<"Report"> | string
    content?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ResearchNoteUpsertWithWhereUniqueWithoutClusterInput = {
    where: ResearchNoteWhereUniqueInput
    update: XOR<ResearchNoteUpdateWithoutClusterInput, ResearchNoteUncheckedUpdateWithoutClusterInput>
    create: XOR<ResearchNoteCreateWithoutClusterInput, ResearchNoteUncheckedCreateWithoutClusterInput>
  }

  export type ResearchNoteUpdateWithWhereUniqueWithoutClusterInput = {
    where: ResearchNoteWhereUniqueInput
    data: XOR<ResearchNoteUpdateWithoutClusterInput, ResearchNoteUncheckedUpdateWithoutClusterInput>
  }

  export type ResearchNoteUpdateManyWithWhereWithoutClusterInput = {
    where: ResearchNoteScalarWhereInput
    data: XOR<ResearchNoteUpdateManyMutationInput, ResearchNoteUncheckedUpdateManyWithoutClusterInput>
  }

  export type ResearchNoteScalarWhereInput = {
    AND?: ResearchNoteScalarWhereInput | ResearchNoteScalarWhereInput[]
    OR?: ResearchNoteScalarWhereInput[]
    NOT?: ResearchNoteScalarWhereInput | ResearchNoteScalarWhereInput[]
    id?: StringFilter<"ResearchNote"> | string
    clusterId?: StringFilter<"ResearchNote"> | string
    sourceUrl?: StringNullableFilter<"ResearchNote"> | string | null
    title?: StringNullableFilter<"ResearchNote"> | string | null
    summary?: StringNullableFilter<"ResearchNote"> | string | null
    content?: StringNullableFilter<"ResearchNote"> | string | null
    createdAt?: DateTimeFilter<"ResearchNote"> | Date | string
  }

  export type ClusterCreateWithoutResearchNotesInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thoughts?: ThoughtCreateNestedManyWithoutClusterInput
    reports?: ReportCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateWithoutResearchNotesInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thoughts?: ThoughtUncheckedCreateNestedManyWithoutClusterInput
    reports?: ReportUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterCreateOrConnectWithoutResearchNotesInput = {
    where: ClusterWhereUniqueInput
    create: XOR<ClusterCreateWithoutResearchNotesInput, ClusterUncheckedCreateWithoutResearchNotesInput>
  }

  export type ClusterUpsertWithoutResearchNotesInput = {
    update: XOR<ClusterUpdateWithoutResearchNotesInput, ClusterUncheckedUpdateWithoutResearchNotesInput>
    create: XOR<ClusterCreateWithoutResearchNotesInput, ClusterUncheckedCreateWithoutResearchNotesInput>
    where?: ClusterWhereInput
  }

  export type ClusterUpdateToOneWithWhereWithoutResearchNotesInput = {
    where?: ClusterWhereInput
    data: XOR<ClusterUpdateWithoutResearchNotesInput, ClusterUncheckedUpdateWithoutResearchNotesInput>
  }

  export type ClusterUpdateWithoutResearchNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thoughts?: ThoughtUpdateManyWithoutClusterNestedInput
    reports?: ReportUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateWithoutResearchNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thoughts?: ThoughtUncheckedUpdateManyWithoutClusterNestedInput
    reports?: ReportUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ClusterCreateWithoutReportsInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thoughts?: ThoughtCreateNestedManyWithoutClusterInput
    researchNotes?: ResearchNoteCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateWithoutReportsInput = {
    id?: string
    title: string
    keywords: JsonNullValueInput | InputJsonValue
    summary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thoughts?: ThoughtUncheckedCreateNestedManyWithoutClusterInput
    researchNotes?: ResearchNoteUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterCreateOrConnectWithoutReportsInput = {
    where: ClusterWhereUniqueInput
    create: XOR<ClusterCreateWithoutReportsInput, ClusterUncheckedCreateWithoutReportsInput>
  }

  export type ClusterUpsertWithoutReportsInput = {
    update: XOR<ClusterUpdateWithoutReportsInput, ClusterUncheckedUpdateWithoutReportsInput>
    create: XOR<ClusterCreateWithoutReportsInput, ClusterUncheckedCreateWithoutReportsInput>
    where?: ClusterWhereInput
  }

  export type ClusterUpdateToOneWithWhereWithoutReportsInput = {
    where?: ClusterWhereInput
    data: XOR<ClusterUpdateWithoutReportsInput, ClusterUncheckedUpdateWithoutReportsInput>
  }

  export type ClusterUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thoughts?: ThoughtUpdateManyWithoutClusterNestedInput
    researchNotes?: ResearchNoteUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    keywords?: JsonNullValueInput | InputJsonValue
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thoughts?: ThoughtUncheckedUpdateManyWithoutClusterNestedInput
    researchNotes?: ResearchNoteUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ThoughtCreateManyClusterInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ReportCreateManyClusterInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ResearchNoteCreateManyClusterInput = {
    id?: string
    sourceUrl?: string | null
    title?: string | null
    summary?: string | null
    content?: string | null
    createdAt?: Date | string
  }

  export type ThoughtUpdateWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThoughtUncheckedUpdateWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThoughtUncheckedUpdateManyWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchNoteUpdateWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchNoteUncheckedUpdateWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchNoteUncheckedUpdateManyWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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