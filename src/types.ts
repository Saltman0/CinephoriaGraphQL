import { GraphQLResolveInfo } from 'graphql';
import { HallModel, ShowtimeModel } from './models.ts';
import { DataSourceContext } from './context.ts';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cinema = {
  __typename?: 'Cinema';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  closeHour: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  openHour: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['Int']['output'];
};

export type Hall = {
  __typename?: 'Hall';
  cinema: Cinema;
  currentShowtime?: Maybe<Showtime>;
  id: Scalars['ID']['output'];
  incidents: Array<Incident>;
  number: Scalars['Int']['output'];
  projectionQuality: Scalars['String']['output'];
};

export type Incident = {
  __typename?: 'Incident';
  description: Scalars['String']['output'];
  hall: Hall;
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  description: Scalars['String']['output'];
  favorite: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  imageURL: Scalars['String']['output'];
  minimumAge?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  halls: Array<Hall>;
};


export type QueryHallsArgs = {
  cinemaId: Scalars['ID']['input'];
};

export type Showtime = {
  __typename?: 'Showtime';
  endTime: Scalars['String']['output'];
  hall: Hall;
  id: Scalars['ID']['output'];
  movie: Movie;
  price: Scalars['Int']['output'];
  startTime: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cinema: ResolverTypeWrapper<Cinema>;
  Hall: ResolverTypeWrapper<HallModel>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Incident: ResolverTypeWrapper<Omit<Incident, 'hall'> & { hall: ResolversTypes['Hall'] }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Movie: ResolverTypeWrapper<Movie>;
  Query: ResolverTypeWrapper<{}>;
  Showtime: ResolverTypeWrapper<ShowtimeModel>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Cinema: Cinema;
  Hall: HallModel;
  ID: Scalars['ID']['output'];
  Incident: Omit<Incident, 'hall'> & { hall: ResolversParentTypes['Hall'] };
  Int: Scalars['Int']['output'];
  Movie: Movie;
  Query: {};
  Showtime: ShowtimeModel;
  String: Scalars['String']['output'];
};

export type CinemaResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Cinema'] = ResolversParentTypes['Cinema']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  closeHour?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openHour?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HallResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Hall'] = ResolversParentTypes['Hall']> = {
  cinema?: Resolver<ResolversTypes['Cinema'], ParentType, ContextType>;
  currentShowtime?: Resolver<Maybe<ResolversTypes['Showtime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  incidents?: Resolver<Array<ResolversTypes['Incident']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectionQuality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncidentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Incident'] = ResolversParentTypes['Incident']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hall?: Resolver<ResolversTypes['Hall'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favorite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  minimumAge?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  halls?: Resolver<Array<ResolversTypes['Hall']>, ParentType, ContextType, RequireFields<QueryHallsArgs, 'cinemaId'>>;
};

export type ShowtimeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Showtime'] = ResolversParentTypes['Showtime']> = {
  endTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hall?: Resolver<ResolversTypes['Hall'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Cinema?: CinemaResolvers<ContextType>;
  Hall?: HallResolvers<ContextType>;
  Incident?: IncidentResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Showtime?: ShowtimeResolvers<ContextType>;
};

