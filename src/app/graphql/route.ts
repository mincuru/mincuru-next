import { Book, Car, Resolvers } from "@/generated/graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";

const schema = loadSchemaSync("./schemas/**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const cars: Car[] = [
  {
    id: 1,
    modelName: "CX-5",
    makerName: "マツダ",
    url: "https://www.mazda.co.jp/cars/cx-5/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/2017_Mazda_CX-5_%28KF%29_Maxx_2WD_wagon_%282018-11-02%29_01.jpg",
    price: 3200000,
    body: {
      type: "SUV",
      length: 4747,
      width: 1850,
      height: 1690,
    },
    powerTrain: "ICE",
    driveSystem: "AWD",
    fuelType: "REGULAR",
  },
  {
    id: 2,
    modelName: "カローラツーリング",
    makerName: "トヨタ",
    url: "https://toyota.jp/corollatouring/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Toyota_COROLLA_TOURING_HYBRID_W%C3%97B_2WD_%286AA-ZWE211W-AWXSB%29_front.jpg",
    price: 2678500,
    body: {
      type: "STATION_WAGON",
      length: 4495,
      width: 1745,
      height: 1460,
    },
    powerTrain: "StrHV",
    driveSystem: "AWD",
    fuelType: "REGULAR",
  },
  {
    id: 3,
    modelName: "NSX",
    makerName: "ホンダ",
    url: "https://www.honda.co.jp/NSX/types/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_NSX_3.5_CAA-NC1_%2820190722%29_01.jpg",
    price: 27940000,
    body: {
      type: "COUPE",
      length: 4535,
      width: 1940,
      height: 1215,
    },
    powerTrain: "MldHV",
    driveSystem: "AWD",
    fuelType: "PREMIUM",
  },
  {
    id: 4,
    modelName: "Honda e",
    makerName: "ホンダ",
    url: "https://www.honda.co.jp/honda-e/",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Honda_e_Advance_%28ZAA-ZC7%29_front.jpg",
    price: 4950000,
    body: {
      type: "HATCHBACK",
      length: 3895,
      width: 1750,
      height: 1510,
    },
    powerTrain: "BEV",
    driveSystem: "RR",
    // new FuelType("")
  },
  {
    id: 5,
    modelName: "ノート",
    makerName: "日産",
    url: "https://www3.nissan.co.jp/vehicles/new/note.html",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Nissan_Note_e-POWER_%28E13%29%2C_2021%2C_front-left.jpg",
    price: 2445300,
    body: {
      type: "HATCHBACK",
      length: 4045,
      width: 1695,
      height: 1520,
    },
    powerTrain: "SerHV",
    driveSystem: "FF",
    fuelType: "REGULAR",
  },
  {
    id: 6,
    modelName: "3シリーズツーリング",
    makerName: "BMW",
    url: "https://www.bmw.co.jp/ja/all-models/3-series/touring/2019/bmw-3-series-touring-inspire.html",
    // imageUrl: "",
    price: 6340000,
    body: {
      type: "STATION_WAGON",
      length: 4715,
      width: 1825,
      height: 1475,
    },
    powerTrain: "ICE",
    driveSystem: "AWD",
    fuelType: "DIESEL",
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers: Resolvers = {
  Query: {
    books: () => books,
    cars: () => cars,
  },
};

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
const server = new ApolloServer({ schema: schemaWithResolvers });

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);

const handler = startServerAndCreateNextHandler(server);

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
